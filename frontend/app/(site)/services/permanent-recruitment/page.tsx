import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  Cpu,
  Briefcase,
  CheckCircle2,
  Check,
  Users,
  Search,
  Network,
  ClipboardCheck,
  ShieldCheck,
  Eye,
  MapPin,
  UserCheck,
  Zap,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function PermanentRecruitmentPage() {
  const evaluationPoints = [
    "Technical skill verification aligned to role-specific stacks and frameworks",
    "Project and portfolio assessment for hands-on capability",
    "Cultural and team-fit screening to reduce early attrition",
    "Compensation benchmarking against current market data",
  ];

  const processSteps = [
    {
      num: "01",
      title: "Requirement Scoping",
      desc: "Defining role mandates, must-have competencies, and success metrics with the hiring team",
      icon: Search,
    },
    {
      num: "02",
      title: "Talent Sourcing",
      desc: "Multi-channel candidate identification through proprietary databases, professional networks, and direct outreach",
      icon: Network,
    },
    {
      num: "03",
      title: "Screening & Assessment",
      desc: "Technical, behavioral, and cultural-fit evaluation",
      icon: ClipboardCheck,
    },
    {
      num: "04",
      title: "Shortlisting & Coordination",
      desc: "Curated candidate profiles with interview scheduling support",
      icon: UserCheck,
    },
    {
      num: "05",
      title: "Offer Management & Onboarding",
      desc: "Negotiation support and post-placement follow-up to ensure retention",
      icon: Users,
    },
  ];

  const valueIcons = [
    { icon: Users, text: "Sector depth across IT and Non-IT, avoiding generic, one-size-fits-all sourcing" },
    { icon: Zap, text: "Reduced time-to-hire through pre-qualified, active talent pipelines" },
    { icon: ShieldCheck, text: "Lower attrition risk via structured fit-assessment beyond technical qualification" },
    { icon: Eye, text: "Transparent process with regular pipeline visibility and reporting" },
    { icon: MapPin, text: "India-based delivery, pan-India reach, serving startups to enterprise clients" },
  ];

  const checklistItems = [
    "Specialized recruitment expertise across IT and Non-IT domains",
    "Data-driven screening for higher accuracy and better quality hiring",
    "Domain and industry knowledge that ensures role-fit alignment",
    "End-to-end recruitment lifecycle management",
    "Scalable solutions for startups, mid-size companies, and enterprises",
  ];

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
            <path d="M 0.22,0 L 1,0 L 1,1 L 0.08,1 C 0.03,1 0,0.97 0,0.92 L 0.22,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 1. Page Header (Full Bleed Edge-to-Edge Hero Layout with Diagonal Cut) */}
      <section className="bg-white border-b border-off-white-dark relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[300px] lg:min-h-[400px]">
          {/* Left Block (Text Content) */}
          <div className="lg:col-span-5 flex flex-col justify-center px-6 py-8 md:py-12 lg:px-12 xl:px-20 bg-gradient-to-r from-[#7ABEF4]/12 via-[#7ABEF4]/3 to-white text-navy relative z-10">
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-accent-gold/3 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
            <div className="max-w-xl relative z-10 pb-8 lg:pb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-gold bg-accent-gold/10 rounded-full mb-6">
                Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-normal font-poppins text-navy leading-tight mb-6 tracking-tight">
                Permanent Recruitment
              </h1>
              <p className="text-lg md:text-xl text-navy-gray font-inter font-semibold leading-relaxed mb-4">
                Permanent Staffing & Recruitment Services | IT and Non-IT Talent Acquisition
              </p>
              <p className="text-xs text-navy-gray/70 italic font-inter">
                Building Workforces That Drive Business Growth
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
          <div className="lg:col-span-7 relative min-h-[280px] lg:min-h-full overflow-hidden bg-off-white custom-clipped-hero">
            <Image
              src="/images/permanent-recruitment.png"
              alt="Professionals shaking hands"
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
                src="/images/city-skyline.png"
                alt="City skyline"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 relative pl-6 border-l-2 border-accent-gold">
              <p className="text-base md:text-lg text-navy font-semibold leading-relaxed font-inter mb-4">
              LabelzAI Techservices LLP delivers end-to-end permanent staffing solutions for organizations across IT
and Non-IT sectors in India. As a specialized recruitment consultancy, we combine structured sourcing
methodologies, domain-specific screening, and data-driven candidate evaluation to place professionals
who fit both the role and the organizational culture — the first time.
              </p>
              <p className="text-sm md:text-base text-navy-gray leading-relaxed font-inter">
         Our permanent placement services are built for companies that need more than resume matching. We
function as an extension of your talent acquisition team, managing the complete recruitment lifecycle from
requirement definition to onboarding support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sectors Breakdown (IT & Non-IT Grid) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Card: IT Recruitment */}
            <div className="group bg-white border border-off-white-dark rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl hover:border-accent-gold/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-accent-gold/5 rounded-full flex items-center justify-center shrink-0">
                    <Cpu className="h-6 w-6 text-accent-gold" />
                  </div>
                  <h2 className="text-2xl font-normal font-poppins text-navy">
                    IT Recruitment Services
                  </h2>
                </div>
                <p className="text-xs md:text-sm text-navy-gray leading-relaxed font-inter mb-6">
                  For technology organizations, hiring accuracy is non-negotiable. Our IT recruitment services cover software development, data engineering, DevOps, cybersecurity, QA/testing, cloud infrastructure, and emerging technology roles including AI/ML and data science positions. We maintain an active talent pipeline across experience bands — from early-career developers to CTO-level leadership — enabling faster time-to-hire without compromising technical fit.
                </p>
              </div>

              <div className="pt-6 border-t border-off-white-dark">
                <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-4">
                  Every IT candidate is evaluated through:
                </h3>
                <ul className="space-y-3">
                  {evaluationPoints.map((pt) => (
                    <li key={pt} className="flex items-start text-xs text-navy-gray font-inter">
                      <Check className="h-4 w-4 text-accent-gold mr-2.5 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Card: Non-IT Staffing */}
            <div className="group bg-white border border-off-white-dark rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl hover:border-accent-gold/30 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-accent-gold/5 rounded-full flex items-center justify-center shrink-0">
                    <Briefcase className="h-6 w-6 text-accent-gold" />
                  </div>
                  <h2 className="text-2xl font-normal font-poppins text-navy">
                    Non-IT Staffing Solutions
                  </h2>
                </div>
                <p className="text-xs md:text-sm text-navy-gray leading-relaxed font-inter mb-6">
                  Our Non-IT staffing solutions serve sectors including healthcare, pharmaceuticals, FMCG, liquor and beverages, manufacturing, and corporate functions such as finance, operations, sales, and HR. We understand that Non-IT hiring requires different evaluation criteria — regulatory knowledge, sector-specific certifications, field experience, and compliance awareness — and we build our screening process accordingly.
                </p>
              </div>

              <div className="pt-6 border-t border-off-white-dark">
                <div className="bg-accent-gold/5 border border-accent-gold/20 rounded-2xl p-6">
                  <p className="text-xs text-navy-gray font-inter leading-relaxed italic">
                    * Dynamic pipelines mapped directly to statutory guidelines and regulatory norms ensuring fast compliance validations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Recruitment Process Timeline */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary">Workflow</Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight">
              Our Recruitment Process
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch justify-between max-w-6xl mx-auto gap-6 lg:gap-4">
            {processSteps.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="group flex-1 flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-off-white-dark shadow-sm hover:border-accent-gold/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full border border-off-white-dark bg-accent-gold/5 shadow-sm flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white group-hover:border-navy transition-all duration-300 text-accent-gold">
                    <step.icon className="h-6 w-6 transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-2 block">
                    {step.num}
                  </span>
                  <h3 className="text-base font-semibold font-poppins text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-navy-gray leading-relaxed font-inter">
                    {step.desc}
                  </p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-navy/20 select-none">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose LabelzAI Checklist Grid */}
      <section className="py-14 md:py-20 bg-off-white/40 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section heading centered above grid */}
          <div className="text-center mb-12">
            <Badge variant="secondary">Value Proposition</Badge>
            <h2 className="mt-4 text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight leading-tight">
              Why Organizations Choose LabelzAI Techservices
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            {/* Left: Meeting Image */}
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#7ABEF4]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative overflow-hidden rounded-3xl shadow-xl border border-off-white-dark h-[460px] w-full z-10">
                <Image
                  src="/images/image.png"
                  alt="Corporate team meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Checklists */}
            <div className="space-y-3 pt-2">
              {checklistItems.map((item) => {
                const words = item.split(" ");
                const boldCount = 2;
                const boldPart = words.slice(0, boldCount).join(" ");
                const normalPart = words.slice(boldCount).join(" ");

                return (
                  <div
                    key={item}
                    className="group flex items-start bg-white border border-off-white-dark rounded-2xl p-5 hover:shadow-md hover:border-accent-gold/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-full bg-accent-gold/10 flex items-center justify-center shrink-0 text-accent-gold mr-4 mt-0.5 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-navy font-inter leading-relaxed mt-1">
                      <span className="font-semibold text-navy">{boldPart}</span> {normalPart}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Closing CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {/* Paragraph outside CTA box */}
          <p className="text-base md:text-lg text-navy-gray leading-relaxed max-w-3xl mx-auto font-inter text-center mb-10">
            Whether you&apos;re scaling an engineering team, filling a critical leadership vacancy, or building out field operations staff, LabelzAI Techservices LLP provides the recruitment infrastructure to hire right, hire fast, and hire for the long term.
          </p>

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
                Get in touch to discuss your hiring requirements and build a staffing plan tailored to your sector.
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
