"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function MissionVisionPage() {
  return (
    <div className="flex-1 flex flex-col bg-white min-h-[85vh]">
      
      {/* 1. Page Header (Minimal Premium White Hero, matching About Us page style) */}
      <section className="bg-white pt-16 pb-6 relative overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-poppins text-navy tracking-tight leading-tight">
            Our Mission &amp; Vision
          </h1>
          <p className="mt-6 text-base md:text-lg text-navy-gray max-w-2xl mx-auto leading-relaxed font-inter">
            Bridging talent gaps and engineering scalable workforce strategies nationwide.
          </p>
        </div>
      </section>

      {/* 2. Clean Mission & Vision Details Layout (Direct on page, no card containers, no icons) */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-white space-y-20 md:space-y-32">
        
        {/* Alternate Row 1: Mission */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Mission Content (No wrapper card, direct in page flow, no icons) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <h2 className="text-3xl md:text-4.5xl font-bold font-poppins text-navy">
              Our Mission
            </h2>
            
            {/* EXACT Mission Content */}
            <p className="text-base md:text-lg text-navy-gray leading-relaxed font-inter font-normal">
              LabelzAI Techservices is committed to bridging the widening gap between emerging technology demands and India&apos;s evolving talent ecosystem. As a trusted IT and Non-IT recruitment agency, our mission is to identify, assess, and deploy professionals equipped for tomorrow&apos;s roles — AI/ML engineers, data annotators, cloud architects, cybersecurity specialists, and automation experts — alongside core Non-IT talent across healthcare, pharma, and FMCG sectors. We deliver precision-driven staffing solutions and executive search services that anticipate industry shifts rather than react to them. By combining deep sector expertise with forward-looking workforce planning, LabelzAI empowers organizations to build future-ready teams, ensuring sustained competitiveness in an increasingly technology-driven, skills-based global economy.
            </p>
          </div>

          {/* Right: Mission Image */}
          <div className="lg:col-span-5 relative h-[320px] sm:h-[380px] w-full rounded-[2.5rem] overflow-hidden border border-off-white-dark shadow-md bg-off-white">
            <Image
              src="/images/mission-visual.png"
              alt="LabelzAI team collaboration representing our mission"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Alternate Row 2: Vision */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Vision Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative h-[320px] sm:h-[380px] w-full rounded-[2.5rem] overflow-hidden border border-off-white-dark shadow-md bg-off-white">
            <Image
              src="/images/vision-visual.png"
              alt="LabelzAI future growth vision looking over the horizon"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Vision Content (No wrapper card, direct in page flow, no icons) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col space-y-6">
            <h2 className="text-3xl md:text-4.5xl font-bold font-poppins text-navy">
              Our Vision
            </h2>
            
            {/* EXACT Vision Content */}
            <p className="text-base md:text-lg text-navy-gray leading-relaxed font-inter font-normal">
              LabelzAI envisions becoming India&apos;s most trusted talent acquisition partner, bridging the gap between skilled professionals and organizations across IT and Non-IT sectors. As a leading HR management and recruitment consultancy, we are committed to delivering scalable workforce solutions through data-driven candidate sourcing, rigorous screening protocols, and industry-specific hiring expertise. Our vision extends beyond transactional staffing — we aim to build long-term partnerships rooted in quality talent mapping, compliance-driven HR practices, and measurable placement success. By integrating technology with human insight, LabelzAI strives to redefine recruitment excellence, empowering businesses with the right talent and professionals with the right opportunities, consistently, ethically, and efficiently, nationwide.
            </p>
          </div>
        </div>

      </div>

      {/* 3. Closing CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl border border-off-white-dark group">
            {/* Background Image with Navy Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/cta-bg.png"
                alt="LabelzAI Corporate background"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-navy/60 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-14 text-center space-y-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-normal font-poppins text-white leading-snug tracking-tight max-w-3xl mx-auto">
                Ready to Accelerate Your Growth?
              </p>

              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-inter">
                Partner with a recruitment specialist that delivers speed, precision, and alignment across all organization levels nationwide.
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold bg-white text-navy hover:bg-white/95 hover:shadow-lg transition-all duration-300 focus:outline-none cursor-pointer"
                >
                  Connect With Us
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
