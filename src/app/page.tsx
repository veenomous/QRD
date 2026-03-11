import { HomeHero } from "@/components/sections/hero";
import { ProofBar } from "@/components/sections/proof-bar";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServiceCardsGrid } from "@/components/sections/service-cards-grid";
import { IndustryCardsGrid } from "@/components/sections/industry-cards-grid";
import { ProcessSteps } from "@/components/sections/process-steps";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProofBar />
      <TrustBar />
      <ServiceCardsGrid />
      <IndustryCardsGrid />
      <ProcessSteps />
      <TestimonialCarousel />
      <CTASection />
    </>
  );
}
