import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent-teal" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary:
      "bg-navy text-white hover:bg-navy-light focus:ring-navy shadow-md hover:shadow-lg",
    secondary:
      "bg-accent-gold text-white font-semibold hover:bg-accent-gold-hover focus:ring-accent-gold shadow-md hover:shadow-lg",
    "accent-teal":
      "bg-accent-teal text-white hover:bg-accent-teal-hover focus:ring-accent-teal shadow-md hover:shadow-lg",
    outline:
      "border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy",
    ghost:
      "text-navy hover:bg-navy/5 focus:ring-navy",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
