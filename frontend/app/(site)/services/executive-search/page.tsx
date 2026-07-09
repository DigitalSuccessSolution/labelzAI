import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Eye,
  UserCheck,
  ClipboardCheck,
  Crown,
  CalendarClock,
  HeartHandshake,
} from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function ExecutiveSearchPage() {
  const whyExecutivePoints = [
    {
      title: "Confidential Mandate Management",
      desc: "Complete discretion maintained at every stage — from briefing to appointment — protecting organizational sensitivity and candidate privacy",
      icon: ShieldCheck,
    },
    {
      title: "Passive Talent Identification",
      desc: "Access to high-calibre leaders not visible on job boards through proprietary industry mapping and direct outreach networks",
      icon: Eye,
    },
    {
      title: "Senior Consultant-Led Assignments",
      desc: "Every mandate handled personally by experienced search professionals with relevant domain knowledge",
      icon: UserCheck,
    },
    {
      title: "Structured Leadership Assessment",
      desc: "Competency mapping, psychometric profiling, case-based evaluation, and cultural alignment review for every shortlisted candidate",
      icon: ClipboardCheck,
    },
    {
      title: "Board & CXO Level Capability",
      desc: "Proven track record managing CEO, COO, CFO, CHRO, CTO, and Independent Director mandates across diversified industries",
      icon: Crown,
    },
    {
      title: "Defined Search Timeline",
      desc: "Structured milestone-based search process with regular client updates from mandate kick-off to final appointment",
      icon: CalendarClock,
    },
    {
      title: "Post-Appointment Integration Support",
      desc: "Onboarding advisory and early-tenure check-ins to maximize leadership transition success",
      icon: HeartHandshake,
    },
  ];

  const checklistItems = [
    "Confidential Mandate Management & Discretion",
    "Passive Talent Identification via Industry Mapping",
    "Senior Consultant-Led Search Assignments",
    "Structured Competency & Leadership Assessment",
    "Board, CXO & Director Level Capability",
    "Defined Milestone-Based Search Timeline",
    "Post-Appointment Integration & Onboarding Support",
    "Deep Industry Mapping Across IT & Non-IT",
    "Psychometric Profiling & Cultural Fit Evaluation",
    "PAN India Executive Talent Network",
    "Retained & Exclusive Search Engagement Models",
    "Measurable Outcome Accountability & SLAs",
  ];

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

      {/* 1. Page Header */}
      <section className="bg-white border-b border-off-white-dark relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[320px] lg:min-h-[440px]">
          {/* Left Block */}
          <div className="lg:col-span-5 flex flex-col justify-center px-6 py-10 md:py-16 lg:px-12 xl:px-20 bg-gradient-to-r from-[#7ABEF4]/12 via-[#7ABEF4]/3 to-white text-navy relative z-10">
            <div className="absolute top-0 left-0 w-80 h-80 bg-accent-gold/3 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
            <div className="max-w-xl relative z-10 pb-8 lg:pb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-gold bg-accent-gold/10 rounded-full mb-6">
                Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-normal font-poppins text-navy leading-tight mb-6 tracking-tight">
                <span className="whitespace-nowrap">Executive Search</span> <br /> (Headhunting / Retained Search)
              </h1>
              <p className="text-lg md:text-xl text-navy-gray font-inter font-semibold leading-relaxed mb-4">
                Confidential Executive Search for Leadership Mandates Across IT &amp; Non-IT Sectors
              </p>
              <p className="text-xs text-navy-gray/70 italic font-inter">
                Identify. Evaluate. Appoint — Senior Leadership Talent That Drives Organizational Transformation.
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
              src="/images/executive-search.png"
              alt="Executive search professionals in boardroom"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative overflow-hidden rounded-3xl shadow-xl border border-off-white-dark h-[380px] w-full">
              <Image
                src="/images/exec-boardroom.png"
                alt="Executive boardroom meeting"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 relative pl-6 border-l-2 border-accent-gold">
              <p className="text-base md:text-lg text-navy font-semibold leading-relaxed font-inter mb-4">
                LabelzAI Techservices LLP provides executive search services for organizations seeking to appoint proven leadership talent at the Director, VP, CXO, and Board level — across IT and Non-IT industries throughout PAN India.
              </p>
              <p className="text-sm text-navy-gray leading-relaxed font-inter mb-4">
                Leadership hiring is fundamentally different from conventional recruitment. The stakes are higher, the talent pool is narrower, and the consequences of a mis-hire at the senior level are organizationally significant. LabelzAI&apos;s executive search practice operates as a dedicated leadership advisory function — combining deep industry mapping, confidential outreach, and rigorous multi-dimensional assessment to identify and engage leaders who are not actively visible in the open market.
              </p>
              <p className="text-sm text-navy-gray leading-relaxed font-inter mb-4">
                We do not post job advertisements and wait. We proactively map leadership talent across target organizations, industries, and geographies — approaching high-calibre passive candidates through structured, discreet, and professionally managed engagement — ensuring your mandate reaches the right individuals, not just the available ones.
              </p>
              <p className="text-xs text-navy-gray font-inter mb-4">
                Every executive search assignment is handled by senior consultants with domain expertise, ensuring that candidate evaluation goes beyond functional competency to assess strategic thinking, leadership philosophy, cultural alignment, and long-term organizational fit.
              </p>
              <p className="text-xs text-navy-gray font-inter">
                We serve organizations across Technology, Healthcare, Pharmaceutical, BFSI, Manufacturing, FMCG, and Infrastructure sectors, managing mandates at every senior tier with absolute confidentiality and measurable outcome accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Our Executive Search Delivers */}
      <section className="py-12 md:py-16 bg-white border-t border-off-white-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary">Leadership Strategy</Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight">
              What Our Executive Search Practice Delivers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyExecutivePoints.map((point) => (
              <div
                key={point.title}
                className="group flex flex-col items-center text-center p-6 bg-[#F0F5FA] rounded-2xl border border-off-white-dark shadow-sm hover:border-accent-gold/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full border border-off-white-dark bg-accent-gold/5 shadow-sm flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white group-hover:border-navy transition-all duration-300 text-accent-gold">
                  <point.icon className="h-6 w-6 transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-semibold font-poppins text-navy mb-2 leading-tight">
                  {point.title}
                </h3>
                <p className="text-xs text-navy-gray leading-relaxed font-inter">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose LabelzAI Executive Search — Value Proposition */}
      <section className="py-14 md:py-20 bg-off-white/40 relative overflow-hidden border-t border-off-white-dark">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section heading centered above grid */}
          <div className="text-center mb-12">
            <Badge variant="secondary">Value Proposition</Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight leading-tight">
              Why Choose LabelzAI Executive Search?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            {/* Left: Image */}
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#7ABEF4]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative overflow-hidden rounded-3xl shadow-xl border border-off-white-dark h-[460px] w-full z-10">
                <Image
                  src="/images/exec-leadership.png"
                  alt="Executive leadership assessment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Checklists — 2 column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {checklistItems.map((item) => {
                const words = item.split(" ");
                const boldCount = 2;
                const boldPart = words.slice(0, boldCount).join(" ");
                const normalPart = words.slice(boldCount).join(" ");

                return (
                  <div
                    key={item}
                    className="group flex items-start bg-[#F0F5FA] border border-off-white-dark rounded-2xl p-4 hover:shadow-md hover:border-accent-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent-gold/10 flex items-center justify-center shrink-0 text-accent-gold mr-3.5 mt-0.5 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-xs text-navy font-inter leading-relaxed mt-0.5">
                      <span className="font-semibold text-navy">{boldPart}</span> {normalPart}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-off-white-dark">
            {/* Background Image with Overlay */}
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

            <div className="relative z-10 px-8 md:px-16 py-14 text-center flex flex-col items-center gap-5">
              <p className="text-xl sm:text-2xl md:text-3xl font-normal font-poppins text-white leading-snug tracking-tight max-w-2xl">
                Executive Search is not recruitment — it is leadership transformation.
              </p>
              <Link href="/contact" className="inline-block mt-2">
                <button className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold bg-white text-navy hover:bg-white/95 hover:shadow-lg transition-all duration-300 focus:outline-none cursor-pointer">
                  Partner with LabelzAI
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
