import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export function Card({
  children,
  hoverable = true,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-white border border-off-white-dark rounded-2xl p-6 shadow-sm transition-all duration-300 ${
        hoverable ? "hover:shadow-xl hover:-translate-y-1 hover:border-accent-gold/20" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-xl font-bold font-poppins text-navy tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardContent({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`text-navy-gray text-sm leading-relaxed ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mt-6 pt-4 border-t border-off-white-dark ${className}`} {...props}>
      {children}
    </div>
  );
}
