import React from "react";
import Link from "next/link";
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
                  className="group bg-white border border-off-white-dark rounded-2xl p-8 hover:shadow-xl hover:border-accent-gold/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-accent-gold/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-gold/10 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-accent-gold" />
                    </div>
                    <h3 className="text-lg font-semibold font-poppins text-navy mb-3 group-hover:text-accent-gold transition-colors duration-300">
                      {adv.title}
                    </h3>
                    <p className="text-xs text-navy-gray leading-relaxed font-inter">
                      {adv.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-off-white-dark flex items-center text-xs font-semibold text-accent-gold uppercase tracking-wider">
                    <span>Delivered with Precision</span>
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
          <div className="max-w-4xl mx-auto relative">
            <div className="relative bg-white border border-off-white-dark rounded-3xl p-10 md:p-16 shadow-lg hover:shadow-xl transition-all duration-500 text-center space-y-8">
              <div className="mx-auto w-14 h-14 bg-accent-gold/5 rounded-2xl flex items-center justify-center">
                <Sparkles className="h-7 w-7 text-accent-gold" />
              </div>

              <p className="text-2xl sm:text-3xl md:text-4xl font-normal font-poppins text-navy leading-snug tracking-tight max-w-3xl mx-auto">
                Ready to Accelerate Your Growth?
              </p>

              <p className="text-base md:text-lg text-navy-gray max-w-2xl mx-auto leading-relaxed font-inter">
                Partner with a recruitment specialist that delivers speed, precision, and alignment across all organization levels nationwide.
              </p>

              <div className="pt-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="group text-base">
                    Connect With Us
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
