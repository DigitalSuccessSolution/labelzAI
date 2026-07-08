import React from "react";
import Badge from "./Badge";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeVariant?: "primary" | "secondary" | "teal" | "outline";
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  badgeVariant = "teal",
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"} ${className}`}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight leading-tight max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-navy-gray max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 w-12 h-1 bg-accent-gold rounded-full ${isCenter ? "mx-auto" : ""}`} />
    </div>
  );
}
