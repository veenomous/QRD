import { LandingNavbar } from "@/components/landing/navbar";
import { LandingHero } from "@/components/landing/hero";
import { StatsStrip } from "@/components/landing/stats-strip";
import { ServicesGrid } from "@/components/landing/services-grid";
import { ProcessTimeline } from "@/components/landing/process-timeline";
import { SocialProof } from "@/components/landing/social-proof";
import { QuoteSection } from "@/components/landing/quote-section";
import { LandingFooter } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <>
      <LandingNavbar />
      <main>
        <LandingHero />
        <StatsStrip />
        <ServicesGrid />
        <ProcessTimeline />
        <SocialProof />
        <QuoteSection />
      </main>
      <LandingFooter />
    </>
  );
}
