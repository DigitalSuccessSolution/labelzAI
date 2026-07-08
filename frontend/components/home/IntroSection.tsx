import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function IntroSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=960&q=80"
                alt="Professional team collaborating in a modern workspace"
                width={960}
                height={640}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <p className="text-base md:text-lg text-navy-gray leading-relaxed">
              LabelzAI is a next-generation HR Management and Recruitment Services company operating across IT and Non-IT industries throughout PAN India — engineered to bridge the critical gap between exceptional talent and high-growth organizations.
            </p>
            <p className="text-base md:text-lg text-navy-gray leading-relaxed">
              We specialize in delivering end-to-end talent acquisition solutions — from entry-level hiring and lateral placements to executive search and large-scale volume recruitment — across diverse sectors including Information Technology, Healthcare, Pharmaceuticals, BFSI, Manufacturing, FMCG, and beyond.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl px-6 py-2.5 text-sm bg-navy text-white hover:bg-navy-light shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy cursor-pointer"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
