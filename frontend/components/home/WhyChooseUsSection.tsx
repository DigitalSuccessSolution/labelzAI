import React from "react";
import {
  BrainCircuit,
  Map,
  Building2,
  TrendingUp,
  UserCheck,
  Zap,
} from "lucide-react";

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

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="why-choose-us">
      {/* Soft background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-gold/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-normal font-poppins text-navy tracking-tight leading-tight">
            LabelzAI — Why Choose Us?
          </h2>
          <p className="mt-6 text-sm md:text-base text-navy-gray leading-relaxed font-inter">
            In a competitive talent landscape, choosing the right recruitment partner defines your organization&apos;s growth trajectory. LabelzAI brings a structured, intelligence-driven approach to HR and recruitment — purpose-built for IT and Non-IT industries across PAN India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="group bg-[#f0f5fa] border border-[#e2e8f0]/80 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_30px_rgba(11,37,69,0.02)] hover:shadow-[0_20px_45px_rgba(11,37,69,0.08)] hover:-translate-y-2 hover:border-accent-gold/50 transition-all duration-500 ease-out flex flex-col justify-between h-full"
              >
                <div className="space-y-5">
                  <div className="text-accent-gold shrink-0">
                    <Icon className="h-8 w-8 transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-semibold font-poppins text-navy group-hover:text-accent-gold transition-colors duration-300">
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
  );
}
