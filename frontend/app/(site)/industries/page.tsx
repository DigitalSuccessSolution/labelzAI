import React from "react";
import IndustriesSection from "@/components/home/IndustriesSection";
import Badge from "@/components/ui/Badge";

export default function IndustriesPage() {
  return (
    <>
      {/* 1. Header (Intro Section) */}
      <section className="bg-white pt-16 pb-6 relative overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-normal font-poppins text-navy tracking-tight leading-tight">
            Industries We Serve
          </h1>
          
          <p className="mt-6 text-base md:text-lg text-navy-gray max-w-4xl mx-auto leading-relaxed font-inter">
            LabelzAI delivers specialized talent acquisition across multiple key industry sectors throughout India. By combining deep domain knowledge, a pre-vetted national candidate pool, and customized screening workflows, we help organizations secure the right leaders, specialists, and technical staff to drive sustained growth in a highly competitive market landscape.
          </p>
        </div>
      </section>

      {/* 2. Industries List Grid */}
      <IndustriesSection />
    </>
  );
}
