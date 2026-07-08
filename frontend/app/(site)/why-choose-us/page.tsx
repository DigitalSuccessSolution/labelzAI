import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BrainCircuit,
  Map,
  Building2,
  TrendingUp,
  UserCheck,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const advantages = [
  {
    icon: BrainCircuit,
    title: "AI-Assisted Talent Acquisition",
    description:
      "We leverage data-driven screening tools and competency mapping frameworks to identify candidates with precision — reducing mis-hires and accelerating time-to-offer.",
  },
  {
    icon: Map,
    title: "PAN India Recruitment Network",
    description:
      "Our verified talent network spans metro cities, Tier-2, and Tier-3 markets — enabling seamless hiring across all geographies and organizational levels.",
  },
  {
    icon: Building2,
    title: "Multi-Industry Domain Expertise",
    description:
      "From IT, BFSI, and Healthcare to Pharmaceuticals, Manufacturing, and FMCG — our recruiters carry deep sector knowledge ensuring role-fit accuracy at every level.",
  },
  {
    icon: Zap,
    title: "End-to-End Workforce Solutions",
    description:
      "We manage the complete hiring lifecycle — executive search, lateral hiring, bulk recruitment, contract staffing, and HR compliance management.",
  },
  {
    icon: TrendingUp,
    title: "Faster TAT. Lower Attrition.",
    description:
      "Our structured delivery model guarantees reduced turnaround time, stronger candidate-employer alignment, and measurable improvement in employee retention rates.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Management",
    description:
      "Every client receives a dedicated recruitment specialist ensuring transparent communication, SLA adherence, and consistent delivery quality.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      {/* 1. Page Header (Minimal Premium White Hero) */}
      <section className="bg-white pt-16 pb-6 relative overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-poppins text-navy tracking-tight leading-tight">
            Why Choose Us
          </h1>
          
          {/* Intro Paragraph */}
          <p className="mt-6 text-base md:text-lg text-navy-gray max-w-3xl mx-auto leading-relaxed font-inter">
            In a competitive talent landscape, choosing the right recruitment partner defines your organization&apos;s growth trajectory. LabelzAI brings a structured, intelligence-driven approach to HR and recruitment — purpose-built for IT and Non-IT industries across PAN India.
          </p>
        </div>
      </section>

      {/* 2. Key Advantages Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary">Our Value Proposition</Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight">
              Our Core Strengths &amp; Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="group bg-white border border-[#e2e8f0]/80 rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:border-accent-gold/35 transition-all duration-500 flex flex-col justify-between h-full"
                >
                  <div className="space-y-5">
                    <div className="text-accent-gold shrink-0">
                      <Icon className="h-8 w-8 transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg md:text-xl font-bold font-poppins text-navy group-hover:text-accent-gold transition-colors duration-300">
                        {adv.title}
                      </h3>
                      <p className="text-sm text-navy-gray leading-relaxed font-inter font-normal">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* 4. Closing CTA Section */}
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
    </>
  );
}
