"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Monitor,
  HeartPulse,
  Pill,
  Wine,
  ShoppingCart,
  Leaf,
  Cpu,
  Landmark,
  Apple,
  Truck,
  Factory,
  X,
  Check,
} from "lucide-react";
import { INDUSTRIES, INDUSTRY_DETAILS } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

// Map industry names to distinct icons
const iconMap: Record<string, any> = {
  "Information Technology (IT)": Monitor,
  "Healthcare & Biotechnology": HeartPulse,
  "Pharma & Life Sciences": Pill,
  "Liquor & Beverages": Wine,
  "E-Commerce": ShoppingCart,
  "Renewable Energy & ESG": Leaf,
  "Semiconductor & Electronics Manufacturing": Cpu,
  "FinTech & BFSI": Landmark,
  "FMCG & FMCD": Apple,
  "Logistics": Truck,
  "Manufacturing (Automobile and Ancillaries)": Factory,
};

interface IndustryData {
  name: string;
  href: string;
  image?: string;
  description: string;
}

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryData | null>(null);

  useEffect(() => {
    if (selectedIndustry) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndustry]);

  const handleCloseModal = () => {
    setSelectedIndustry(null);
  };

  // Resolve custom detailed content if defined, else fallback to standard template
  const hasDetailedContent = selectedIndustry ? !!INDUSTRY_DETAILS[selectedIndustry.name] : false;
  const currentDetails = selectedIndustry ? INDUSTRY_DETAILS[selectedIndustry.name] : null;

  return (
    <section id="industries" className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-teal/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-normal font-poppins text-navy tracking-tight leading-tight">
            Serving <span className="text-accent-gold">IT &amp; Non-IT</span> Industries
          </h2>
          <p className="mt-4 text-sm md:text-base text-navy-gray leading-relaxed font-inter">
            Sourcing specialized talent across PAN India for emerging technical and corporate roles.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {INDUSTRIES.map((ind) => {
            const IconComponent = iconMap[ind.name] || Factory;
            return (
              <button
                key={ind.name}
                onClick={() => setSelectedIndustry(ind)}
                className="block relative group overflow-hidden min-h-[260px] rounded-[1.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer bg-navy-dark border-none w-full text-left focus:outline-none"
              >
                {/* Background Image */}
                {ind.image && (
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    className="object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  />
                )}

                {/* Default Overlay: Dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-all duration-500 z-10 group-hover:opacity-0" />

                {/* Default Title (positioned at bottom center) */}
                <div className="absolute bottom-6 left-0 right-0 z-15 px-4 text-center transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 flex flex-col items-center gap-2.5">
                  <h3 className="text-lg sm:text-xl font-medium font-poppins text-white leading-snug tracking-tight drop-shadow-md">
                    {ind.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-xs font-semibold text-[#0B2545] shadow-md transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#0B2545]" />
                  </span>
                </div>

                {/* Hover Overlay: Glowing brand backdrop with description and CTA */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B2545]/85 via-[#07172B]/90 to-black/90 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 p-6 flex flex-col items-center justify-between text-center">
                  <div className="flex flex-col items-center w-full">
                    {/* Glowing blue circular icon badge */}
                    <div className="w-10 h-10 rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 flex items-center justify-center mb-5 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 mx-auto">
                      <IconComponent className="h-5 w-5 text-[#38BDF8]" />
                    </div>

                    {/* Hover Title */}
                    <h3 className="text-lg font-bold font-poppins text-white leading-tight mb-4 transform -translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-center">
                      {ind.name}
                    </h3>

                    {/* Description with fade-in and slide-up */}
                    <p className="text-xs text-white/80 font-inter leading-relaxed transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 text-center">
                      {ind.description}
                    </p>
                  </div>

                  {/* View Details Button (CTA) */}
                  <div className="w-full flex justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <div className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white text-[#0B2545] text-xs font-semibold shadow-md transition-all duration-300 hover:bg-white/95 hover:scale-105 active:scale-[0.98]">
                      <span>Learn More</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#0B2545] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic PopUp Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-sm p-4 md:p-6 overflow-y-auto animate-fade-in">
          <div className="bg-white border border-off-white-dark rounded-3xl max-w-4xl w-full shadow-2xl relative max-h-[90vh] flex flex-col overflow-hidden">

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 z-20 p-2 text-navy-gray hover:text-navy hover:bg-navy/5 rounded-xl transition-all duration-300 transform hover:rotate-90 hover:scale-110 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Scrollable Modal Content Body */}
            <div className="p-6 md:p-10 overflow-y-auto space-y-6 flex-1">

              {/* Modal Header */}
              <div className="border-b border-navy/5 pb-4 space-y-2 pr-10">
                <Badge variant="secondary">Industries served</Badge>
                <h3 className="text-2xl sm:text-3xl font-normal font-poppins text-navy">
                  {selectedIndustry.name}
                </h3>
              </div>

              {/* Content Switcher */}
              {hasDetailedContent && currentDetails ? (
                /* DYNAMIC DETAIL MODAL: DYNAMIC SEQUENTIAL BLOCKS RENDER */
                (() => {
                  const firstSpecializedIndex = currentDetails.blocks.findIndex(
                    b => b.type === "list" || b.type === "features"
                  );
                  const topBlocks = firstSpecializedIndex !== -1
                    ? currentDetails.blocks.slice(0, firstSpecializedIndex)
                    : currentDetails.blocks;
                  const bottomBlocks = firstSpecializedIndex !== -1
                    ? currentDetails.blocks.slice(firstSpecializedIndex)
                    : [];

                  return (
                    <div className="space-y-8">

                      {/* Top Row: Intro Text (Left) & Landscape Image (Right) */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Left Column: Intro Blocks */}
                        <div className="lg:col-span-7 space-y-4 font-inter text-sm text-navy-gray leading-relaxed">
                          <p className="font-semibold text-base text-navy font-poppins">
                            {currentDetails.subtitle}
                          </p>
                          {topBlocks.map((b, idx) => {
                            if (b.type === "tagline") {
                              return (
                                <p key={idx} className="italic text-xs font-semibold text-accent-gold uppercase tracking-wider pt-1">
                                  {b.text}
                                </p>
                              );
                            }
                            if (b.type === "paragraph") {
                              return (
                                <p key={idx}>{b.text}</p>
                              );
                            }
                            return null;
                          })}
                        </div>

                        {/* Right Column: Visual Image with proper rectangular shape */}
                        <div className="lg:col-span-5">
                          <div className="relative h-[220px] w-full rounded-2xl overflow-hidden border border-off-white-dark shadow-sm">
                            <Image
                              src={currentDetails.image}
                              alt={`${selectedIndustry.name} professionals working`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                      </div>

                      {/* Divider line */}
                      {bottomBlocks.length > 0 && <div className="h-px bg-navy/5" />}

                      {/* Bottom Row: Rest of the content flowing across full width below the image */}
                      {bottomBlocks.length > 0 && (
                        <div className="space-y-8 font-inter text-sm text-navy-gray leading-relaxed">
                          {bottomBlocks.map((b, idx) => {
                            if (b.type === "paragraph") {
                              return (
                                <p key={idx} className="text-sm">
                                  {b.text}
                                </p>
                              );
                            }
                            if (b.type === "tagline") {
                              return (
                                <p key={idx} className="font-semibold text-base text-navy font-poppins pt-2">
                                  {b.text}
                                </p>
                              );
                            }
                            if (b.type === "list") {
                              const isLongList = b.items && (b.items as string[]).some(item => item.length > 50);
                              const listGridClass = isLongList
                                ? "grid-cols-1 gap-4"
                                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3";

                              return (
                                <div key={idx} className="bg-[#f8fafc] border border-[#e2e8f0]/40 p-6 rounded-2xl space-y-4">
                                  {b.title && (
                                    <h4 className="font-poppins font-bold text-sm uppercase tracking-wider text-navy">
                                      {b.title}
                                    </h4>
                                  )}
                                  {b.text && <p className="text-xs font-semibold text-navy mt-1">{b.text}</p>}
                                  <ul className={`grid ${listGridClass} text-xs text-navy-gray`}>
                                    {b.items && (b.items as string[]).map((item, index) => (
                                      <li key={index} className="flex items-start space-x-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0 mt-1.5" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            }
                            if (b.type === "features") {
                              return (
                                <div key={idx} className="space-y-4 pt-2">
                                  <h4 className="font-poppins font-bold text-sm uppercase tracking-wider text-[#0B2545]">
                                    {b.title}
                                  </h4>
                                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-navy-gray">
                                    {b.items && (b.items as { title: string; desc: string }[]).map((item, fIdx) => (
                                      <li key={fIdx} className="flex items-start bg-white border border-[#e2e8f0]/40 rounded-xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
                                        <span className="text-accent-gold shrink-0 mr-2 font-bold text-sm">•</span>
                                        <span>
                                          <strong className="font-semibold text-navy block mb-0.5">{item.title}</strong>
                                          <span className="text-navy-gray/95">{item.desc}</span>
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      )}

                    </div>
                  );
                })()
              ) : (
                /* FALLBACK TEMPLATE: Render description and coming soon block for unpopulated industries */
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <p className="text-sm font-inter text-navy-gray leading-relaxed">
                      LabelzAI Techservices LLP provides tailored human resource consulting, executive mapping, and contract deployment services designed specifically for the <strong className="text-navy">{selectedIndustry.name}</strong> sector.
                    </p>
                    <p className="text-sm font-inter text-navy-gray leading-relaxed">
                      {selectedIndustry.description}
                    </p>

                    {/* Placeholder checklist details */}
                    <div className="pt-2 flex items-start space-x-2 text-xs text-navy-gray/70 italic font-inter">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-gold shrink-0 mt-1 animate-pulse" />
                      <span>Detailed recruitment metrics, pre-screened domains, and active candidate pipelines for the {selectedIndustry.name} sector are coming soon.</span>
                    </div>
                  </div>

                  <div className="md:col-span-5 relative h-[200px] w-full rounded-2xl overflow-hidden border border-off-white-dark shadow-sm bg-off-white">
                    <Image
                      src="/images/city-skyline.png"
                      alt={`${selectedIndustry.name} sector visuals`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
