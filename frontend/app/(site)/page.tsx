import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import MethodologySection from "@/components/home/MethodologySection";
import ClosingQuote from "@/components/home/ClosingQuote";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <MethodologySection />
      <ServicesSection />
      <IndustriesSection />
      <ClosingQuote />
    </>
  );
}
