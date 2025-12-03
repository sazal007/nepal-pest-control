import React, { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";
import { PricingPackages } from "./pricing-pakage";

export const PricingComparison = () => {
  // We use state to store calculated styles for each card index
  const [cardStyles, setCardStyles] = useState<
    Record<number, React.CSSProperties>
  >({});
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const newStyles: Record<number, React.CSSProperties> = {};
      const cardElements = cardsRef.current;
      const topOffset = 112; // 28 * 4 (top-28)

      cardElements.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();

        // If a card is active (sticky at top) and the next card is scrolling up over it
        if (index < cardElements.length - 1) {
          const nextCard = cardElements[index + 1];
          if (nextCard) {
            const nextRect = nextCard.getBoundingClientRect();
            const nextDistanceFromTop = nextRect.top - topOffset;

            // When the next card gets close to overlapping (e.g. within 500px), start fading the current one
            // We want the fade to happen as the next card slides UP over this one.
            // This card is stuck at 0 (distanceFromTop is ~0). The next card is moving from positive to 0.

            // If this card is sticky (rect.top <= topOffset + small buffer)
            if (rect.top <= topOffset + 5) {
              // Calculate how much the next card covers this one
              // Range: 0 (next card is far down) to 1 (next card is on top)
              // Let's say we start fading when next card is 300px away
              const distanceThreshold = 400;
              const progress = Math.max(
                0,
                Math.min(1, 1 - nextDistanceFromTop / distanceThreshold)
              );

              if (progress > 0) {
                newStyles[index] = {
                  transform: `scale(${1 - progress * 0.05})`, // Slight shrink
                  opacity: 1 - progress * 0.6, // Fade out to 0.4
                  filter: `blur(${progress * 4}px)`, // Blur up to 4px
                };
              }
            }
          }
        }
      });

      setCardStyles(newStyles);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 bg-slate-50">
      <div
        className="container mx-auto px-4 md:px-6 lg:px-8"
        ref={containerRef}
      >
        <SectionHeading
          tag="[Services]"
          title="Specialized Engagement Models"
          italicWord="Models"
          align="center"
          className="mb-12"
        />

        <div className="space-y-6 relative">
          {PricingPackages.map((pkg, idx) => (
            <div
              key={idx}
              ref={(el) => {
                if (cardsRef.current) cardsRef.current[idx] = el;
              }}
              className="sticky top-28 bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-slate-200 shadow-sm transition-all duration-150 ease-linear origin-top"
              style={{
                zIndex: idx + 10,
                ...cardStyles[idx],
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Header Info */}
                <div className="lg:col-span-5 flex flex-col">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] mb-3 w-fit">
                    {pkg.category}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                    {pkg.model}
                  </h3>
                  <p className="text-slate-500 mb-5 text-sm leading-relaxed">
                    &quot;{pkg.tagline}&quot;
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="text-[11px] text-slate-400 mb-1 uppercase tracking-[0.16em] font-semibold">
                      Pricing Structure
                    </div>
                    <div className="text-base md:text-lg font-semibold text-blue-700">
                      {pkg.price}
                    </div>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="lg:col-span-7 pt-2 lg:pt-0">
                  <h4 className="font-semibold text-slate-400 mb-3 text-xs uppercase tracking-[0.18em]">
                    Inclusions
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
                    {pkg.inclusions.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 min-w-[18px] h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                          <Check size={10} strokeWidth={2.5} />
                        </div>
                        <span className="text-[13px] md:text-sm text-slate-600 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer to ensure the last card has scroll space if needed */}
          <div className="h-20"></div>
        </div>
      </div>
    </section>
  );
};
