import Image from "next/image";
import { Target, Layers } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function MethodologySection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <Badge variant="secondary">Our Methodology</Badge>
            <h2 className="text-3xl md:text-4xl font-normal font-poppins text-navy tracking-tight leading-tight">
              AI-Assisted Screening &amp;{" "}
              <span className="text-accent-gold">Deep Domain Expertise</span>
            </h2>
            <p className="text-base md:text-lg text-navy-gray leading-relaxed">
              Our methodology integrates AI-assisted candidate screening, competency-based assessment frameworks, and deep domain expertise — ensuring every placement is aligned with your organizational objectives, cultural fit, and long-term growth strategy.
            </p>
            <p className="text-base md:text-lg text-navy-gray leading-relaxed">
              With a verified pan-India candidate network, dedicated industry-specific recruitment verticals, and a structured 6-step delivery process, LabelzAI consistently delivers faster turnaround, reduced attrition, and superior hiring outcomes.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/image.png"
                alt="Modern office environment with data analytics on screens"
                width={960}
                height={640}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
