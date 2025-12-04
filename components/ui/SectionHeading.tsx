import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  italicWord,
  subtitle,
  className = "",
  align = "left",
  light = false,
}) => {
  const parts = italicWord ? title.split(italicWord) : [title];

  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {tag && (
        <span
          className={cn(
            "inline-block text-primary-600 font-semibold text-sm mb-4 tracking-wide uppercase",
            light && "text-primary-300"
          )}
        >
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {parts[0]}
        {italicWord && (
          <span className="font-serif italic font-normal ml-1 mr-1">
            {italicWord}
          </span>
        )}
        {parts[1]}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed max-w-2xl",
            light ? "text-gray-300" : "text-gray-500",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
