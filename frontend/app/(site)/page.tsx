import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import MethodologySection from "@/components/home/MethodologySection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import ClosingQuote from "@/components/home/ClosingQuote";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <MethodologySection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ClosingQuote />
    </>
  );
}
