"use client";
import { ServiceExplorer } from "@/components/services/ServiceExplorer";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ServiceDetailView({ slug }: { slug: string }) {
  const router = useRouter();
  return (
    <div className="pt-40 pb-0 bg-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 md:px-8 mb-12">
        <button
          onClick={() => router.push("/services")}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Services
        </button>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-wide uppercase text-xs mb-4 block">
            [Our Services]
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-[1.1] mb-6">
            Our Services
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We help you define clear goals and build winning strategies that
            drive measurable business growth.
          </p>
        </div>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden h-[400px] md:h-[600px] w-full shadow-lg mb-20 relative">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
            alt="Service Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-gray-500 leading-relaxed text-lg">
                At Infin, our Strategy Consulting service is designed to help
                businesses define their direction, sharpen their focus, and
                unlock sustainable growth. In today&apos;s fast-changing
                environment, organizations need more than ambition—they need a
                clear, data-backed plan that aligns with both short-term goals
                and long-term vision.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What You Can Expect:
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                We begin with a thorough analysis of your workflows, resource
                allocation, and performance metrics. From there, we design
                tailored solutions to eliminate bottlenecks, reduce waste, and
                improve cross-functional collaboration.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key Focus Area
              </h2>
              <ul className="space-y-4">
                {[
                  "Comprehensive business assessment & competitive benchmarking to identify gaps, spot",
                  "Collaborative goal and strategic planning processes designed to align teams future.",
                  "Strategic market entry and expansion strategies tailored to ensure sustainable growth,",
                  "Creative business model innovation and optimization strategies to enhance value drive.",
                  "Thorough risk assessment and mitigation planning safeguard operations, anticipate.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600 leading-relaxed"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-16">
              <p className="text-xl md:text-2xl font-serif italic text-gray-900 mb-8 leading-relaxed">
                &quot;Partnering with Infin for strategy consulting was a
                turning point for our business. Their team brought clarity,
                structure, and vision to our goals. Within months, we saw
                improved efficiency, stronger alignment across departments, and
                a clear path for scalable growth. Their insights were not only
                actionable—but transformative.&quot;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="CEO"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <div className="font-bold text-gray-900">Zayan Malik</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    CEO
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Meeting 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Meeting 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Stakeholder Alignment & Change Enablement
              </h2>
              <p className="text-gray-500 leading-relaxed">
                We ensure all key stakeholders are aligned with the strategic
                vision and understand their roles in execution. By fostering
                cross-functional buy-in, we help reduce resistance and build
                momentum for lasting change across your organization for the
                betterment of your future.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Scenario Planning & Risk Management
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Our consultants help you anticipate future challenges through
                scenario planning and strategic risk assessment. This allows you
                to make agile decisions, prepare for uncertainty, and safeguard
                your business against potential disruptions for your betterment
                consultations.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 sticky top-32">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xs">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Get Started Today
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Let&apos;s build something great together.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-blue-600" /> Average
                  response rate 1 hour
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-blue-600" /> Proven
                  track of results
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-blue-600" /> Dedicated
                  and honest team
                </div>
              </div>

              <Button className="w-full justify-center">Book a Call</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Explore More Services */}
      <div className="bg-gray-50">
        <ServiceExplorer />
      </div>
    </div>
  );
}
