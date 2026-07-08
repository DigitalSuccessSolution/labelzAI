import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "teal" | "outline";
  children: React.ReactNode;
}

export default function Badge({
  variant = "primary",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full font-inter";

  const variants = {
    primary: "bg-navy/10 text-navy",
    secondary: "bg-accent-gold/15 text-accent-gold-hover",
    teal: "bg-accent-teal/10 text-accent-teal",
    outline: "border border-navy/20 text-navy-gray",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}
