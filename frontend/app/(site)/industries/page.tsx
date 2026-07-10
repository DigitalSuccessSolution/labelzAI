import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import IndustriesSection from "@/components/home/IndustriesSection";

export default function IndustriesPage() {
  return (
    <>
      {/* Responsive clip-path style block for desktop viewports only */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 1024px) {
          .custom-clipped-hero {
            clip-path: url(#slanted-cut-curve);
          }
        }
      `}} />

      {/* SVG ClipPath with objectBoundingBox for responsive vector clipping */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <clipPath id="slanted-cut-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0.22,0 L 1,0 L 1,1 L 0.08,1 C 0.03,1 0,0.97 0,0.92 L 0.22,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 1. Page Header (Split Hero Layout) */}
      <section className="bg-white border-b border-off-white-dark relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[320px] lg:min-h-[440px]">
          {/* Left Block */}
          <div className="lg:col-span-5 flex flex-col justify-center px-6 py-10 md:py-16 lg:px-12 xl:px-20 bg-gradient-to-r from-[#7ABEF4]/12 via-[#7ABEF4]/3 to-white text-navy relative z-10">
            <div className="absolute top-0 left-0 w-80 h-80 bg-accent-gold/3 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
            <div className="max-w-xl relative z-10 pb-8 lg:pb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-[32px] xl:text-[35px] font-normal font-poppins text-navy leading-tight mb-6 tracking-tight whitespace-nowrap">
                Sectors We Empower
              </h1>
              <p className="text-lg sm:text-xl lg:text-[20px] text-navy-gray font-inter font-semibold leading-relaxed mb-4">
                Specialized Sourcing & Recruitment Across India's Key Growth Sectors
              </p>
              <p className="text-xs sm:text-sm text-navy-gray/70 italic font-inter leading-relaxed">
                By combining deep domain expertise, a pre-vetted national candidate pool, and customized screening workflows, we help organizations secure the right leaders, specialists, and technical staff.
              </p>
              <div className="pt-6">
                <Link href="/contact" className="inline-block">
                  <button className="group inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-navy text-white hover:bg-navy/90 hover:shadow-lg transition-all duration-300 focus:outline-none cursor-pointer">
                    Talk to Our Experts
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Block (Image with Slanted Cut) */}
          <div className="lg:col-span-7 relative min-h-[240px] lg:min-h-full overflow-hidden bg-off-white custom-clipped-hero">
            <Image
              src="/images/indus.png"
              alt="Diverse industries and sectors collage"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Industries List Grid */}
      <IndustriesSection />
    </>
  );
}
