import { MotionProvider } from "@/components/landing/motion-provider";
import { LandingNavbar } from "@/components/landing/navbar";
import { LandingHero } from "@/components/landing/hero";
import { MailTypes } from "@/components/landing/mail-types";
import { HowItWorks } from "@/components/landing/how-it-works";
import { WhyQrd } from "@/components/landing/why-qrd";
import { QuoteSection } from "@/components/landing/quote-section";
import { LandingFooter } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <MotionProvider>
      <LandingNavbar />
      <main>
        <LandingHero />
        <MailTypes />
        <HowItWorks />
        <WhyQrd />
        <QuoteSection />
      </main>
      <LandingFooter />
    </MotionProvider>
  );
}
