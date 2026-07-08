import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* Responsive clip-path style block for desktop viewports only */}
      <style dangerouslySetInnerHTML={{__html: `
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
            <path d="M 0.14,0 L 1,0 L 1,1 L 0.14,1 C -0.04,0.75 -0.04,0.25 0.14,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 1. Page Header (Full Bleed Edge-to-Edge Hero Layout with Concave Cut) */}
      <section className="bg-white border-b border-off-white-dark relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[300px] lg:h-[500px]">
          {/* Left Block (Text Content) */}
          <div className="lg:col-span-5 flex flex-col justify-center px-6 py-6 lg:py-10 lg:pl-6 lg:pr-8 xl:pl-8 xl:pr-10 bg-gradient-to-r from-[#7ABEF4]/6 via-[#7ABEF4]/1 to-white text-navy relative z-10">
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-accent-gold/3 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
            <div className="max-w-xl relative z-10 pb-8 lg:pb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-gray bg-navy-gray/10 rounded-full mb-6">
                Next-Generation HR & Recruitment
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[32px] font-normal font-poppins text-navy leading-tight mb-6 tracking-tight">
                <span className="whitespace-nowrap">Strategic, Intelligence-Driven</span> <br className="hidden sm:inline" /> Workforce Solutions
              </h1>
              <p className="text-sm md:text-base text-navy-gray leading-relaxed mb-8 font-inter">
                In today&apos;s rapidly evolving talent landscape, organizations require more than conventional hiring — they demand strategic, intelligence-driven workforce solutions that deliver precision, speed, and long-term value.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="inline-block">
                  <button className="group inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold bg-navy text-white hover:bg-navy/90 hover:shadow-lg transition-all duration-300 focus:outline-none cursor-pointer">
                    Get in Touch
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="#industries" className="inline-block">
                  <button className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold border border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300 focus:outline-none cursor-pointer">
                    Explore Industries
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Block (Image with Slanted Cut) */}
          <div className="lg:col-span-7 relative min-h-[240px] lg:min-h-full overflow-hidden bg-white custom-clipped-hero">
            <Image
              src="/images/hero.png"
              alt="LabelzAI Techservices Hero Visual"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
