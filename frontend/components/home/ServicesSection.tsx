import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  UserCheck,
  Settings,
  Users,
  ShieldAlert,
  Check,
} from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

// Map service names to distinct corporate icons
const iconMap: Record<string, any> = {
  "Permanent Recruitment": UserCheck,
  "Recruitment Process Outsourcing (RPO)": Settings,
  "Contract Staffing": Users,
  "Executive Search (Headhunting / Retained Search)": ShieldAlert,
};

// Map services to high-quality images and bullet points matching the design reference
const serviceDetails = {
  "Permanent Recruitment": {
    image: "/images/permanent-recruitment.png",
    bullets: [
      "End-to-end hiring solutions",
      "Access to top talent",
      "Long-term workforce growth",
    ],
  },
  "Recruitment Process Outsourcing (RPO)": {
    image: "/images/rpo.png",
    bullets: [
      "Full-cycle recruitment support",
      "Process optimization",
      "Scalable & cost-effective",
    ],
  },
  "Contract Staffing": {
    image: "/images/contract-staffing.png",
    bullets: [
      "Flexible staffing solutions",
      "Project-based hiring",
      "Quick talent deployment",
    ],
  },
  "Executive Search (Headhunting / Retained Search)": {
    image: "/images/executive-search.png",
    bullets: [
      "Leadership hiring experts",
      "Confidential & targeted search",
      "Critical role placements",
    ],
  },
};

export default function ServicesSection() {
  const services = NAV_ITEMS.find((item) => item.name === "Services")?.children || [];

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent-teal/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-normal font-poppins text-navy tracking-tight leading-tight">
            Recruitment &amp; <span className="text-accent-teal">HR Services</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-navy-gray leading-relaxed font-inter">
            Tailored talent acquisition and workforce solutions built for corporate scale and efficiency.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.name] || Settings;
            const details = serviceDetails[service.name as keyof typeof serviceDetails] || {
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
              bullets: ["Hiring solutions", "Talent mapping", "Growth support"],
            };

            return (
              <Link
                key={service.name}
                href={service.href}
                className="block relative group overflow-hidden aspect-[4/5] rounded-[1.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer bg-navy-dark border-none"
              >
                {/* Background Image */}
                <Image
                  src={details.image}
                  alt={service.name}
                  fill
                  className="object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Default Overlay: Dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent transition-all duration-500 z-10 group-hover:opacity-0" />

                {/* Default Title (positioned at bottom center) */}
                <div className="absolute bottom-8 left-0 right-0 z-15 px-4 text-center transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                  <h3 className="text-lg sm:text-xl font-medium font-poppins text-white leading-snug tracking-tight drop-shadow-md">
                    {service.name}
                  </h3>
                </div>

                {/* Hover Overlay: Glowing brand backdrop with bullet points */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B2545]/80 via-[#07172B]/85 to-black/85 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 p-6 flex flex-col justify-between">
                  <div>
                    {/* Glowing blue circular icon badge */}
                    <div className="w-10 h-10 rounded-full border border-blue-400/40 bg-blue-400/10 flex items-center justify-center mb-5 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      <IconComponent className="h-5 w-5 text-blue-400" />
                    </div>

                    {/* Hover Title */}
                    <h3 className="text-lg font-bold font-poppins text-white leading-tight mb-4 transform -translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {service.name}
                    </h3>

                    {/* Bullet points with waterfall entrance delays */}
                    <ul className="space-y-3">
                      {details.bullets.map((bullet, idx) => (
                        <li
                          key={bullet}
                          className="flex items-start space-x-2 text-xs text-white/80 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                          style={{ transitionDelay: `${150 + idx * 75}ms` }}
                        >
                          <Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                          <span className="font-inter leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Details Button */}
                  <div className="pt-4 border-t border-white/10 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                    <span className="inline-flex items-center space-x-2 border border-white/20 rounded-xl px-4 py-2 text-xs font-semibold text-white group-hover:border-blue-400/60 group-hover:text-blue-400 transition-all duration-300 group/btn">
                      <span>View Details</span>
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
