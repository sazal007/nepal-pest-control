import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'white' | 'outline' | 'blue';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = true,
  className = '',
  ...props 
}) => {
  const baseStyle = "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-900/20",
    blue: "bg-blue-600 text-white hover:bg-blue-700",
    white: "bg-white text-blue-900 hover:bg-gray-50 shadow-lg",
    outline: "border border-gray-300 bg-transparent text-gray-900 hover:border-blue-600 hover:text-blue-600",
  };

  return (
    <button className={cn(baseStyle, variants[variant], className)} {...props}>
      {children}
      {icon && (
        <div className={`p-1 rounded-full ${variant === 'primary' || variant === 'blue' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
          <ArrowUpRight size={14} />
        </div>
      )}
    </button>
  );
};
