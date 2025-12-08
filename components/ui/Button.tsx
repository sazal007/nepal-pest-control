"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "white" | "outline" | "blue";
  icon?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = "primary", icon = true, className = "", ...props },
    ref
  ) => {
    const baseStyle =
      "inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform active:scale-95";
    const variants = {
      primary:
        "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-900/20 cursor-pointer",
      blue: "bg-primary-600 text-white hover:bg-primary-700 cursor-pointer",
      white:
        "bg-white text-primary-900 hover:bg-gray-50 shadow-lg cursor-pointer",
      outline:
        "border border-gray-300 bg-transparent text-gray-900 hover:border-primary-600 hover:text-primary-600 cursor-pointer",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyle, variants[variant], className)}
        {...props}
      >
        {children}
        {icon && (
          <div
            className={`p-1 rounded-full ${
              variant === "primary" || variant === "blue"
                ? "bg-white text-primary-600"
                : "bg-primary-600 text-white"
            }`}
          >
            <ArrowUpRight size={14} />
          </div>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
