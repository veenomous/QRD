import { Clock, Mail, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { QuoteForm } from "@/components/forms/quote-form";
import { siteConfig } from "@/data/site-metadata";

export function QuoteSection() {
  return (
    <section id="quote" className="scroll-mt-20 bg-warm-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <AnimatedSection className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold text-qrd-accent">Get a quote</p>
          <h2 className="display mt-3 text-4xl leading-[1.1] text-ink md:text-5xl">
            Tell us what you mail. We&apos;ll send you a price.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            A few details are enough to quote most jobs.
          </p>

          <ul className="mt-10 space-y-5 text-ink">
            <li className="flex items-start gap-3.5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-qrd-accent" strokeWidth={1.75} />
              <span>You&apos;ll hear back within one business day.</span>
            </li>
            <li className="flex items-start gap-3.5">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-qrd-accent" strokeWidth={1.75} />
              <span>
                Don&apos;t send customer data here. We set up a secure transfer
                once you&apos;re ready to run.
              </span>
            </li>
            <li className="flex items-start gap-3.5">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-qrd-accent" strokeWidth={1.75} />
              <span>
                Rather email?{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="focus-accent rounded-sm font-semibold underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {siteConfig.contact.email}
                </a>
              </span>
            </li>
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <QuoteForm />
        </AnimatedSection>
      </div>
    </section>
  );
}
