import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { MailSheet, type MailSheetVariant } from "@/components/landing/illustrations";

const mailTypes: {
  variant: MailSheetVariant;
  title: string;
  description: string;
  examples: string[];
  tint: string;
}[] = [
  {
    variant: "bill",
    title: "Bills and invoices",
    description:
      "Printed with a payment coupon and a return envelope, and mailed on your billing cycle.",
    examples: ["Utility bills", "Tax bills", "Invoices", "Past-due reminders"],
    tint: "bg-sky-soft",
  },
  {
    variant: "statement",
    title: "Statements",
    description:
      "Merged from your data and mailed on a fixed schedule. HIPAA-ready when they carry health information.",
    examples: ["Patient statements", "Account statements", "Balance notices", "EOBs"],
    tint: "bg-kraft-soft",
  },
  {
    variant: "collection",
    title: "Collection letters",
    description:
      "First notice through final demand, sent on the cadence you set, with proof of mailing for every piece.",
    examples: ["Validation notices", "Dunning series", "Settlement offers", "Attorney letters"],
    tint: "bg-kraft-soft",
  },
  {
    variant: "rent",
    title: "Rent bills and notices",
    description:
      "Rent statements and tenant notices for every property in your portfolio, all from one file.",
    examples: ["Rent statements", "Late notices", "Renewal letters", "HOA assessments"],
    tint: "bg-sky-soft",
  },
];

export function MailTypes() {
  return (
    <section id="mail" className="scroll-mt-20 bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="max-w-2xl">
          <p className="text-sm font-semibold text-qrd-accent">What we mail</p>
          <h2 className="display mt-3 text-4xl leading-[1.1] text-ink md:text-5xl">
            The mail your business runs on.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            Four kinds of mail make up most of what leaves our floor. If yours
            is on this list, we already know how to run it.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {mailTypes.map((type, i) => (
            <AnimatedSection key={type.title} delay={(i % 2) * 0.1}>
              <article className="flex h-full flex-col gap-6 rounded-[1.75rem] bg-white p-5 ring-1 ring-ink/[0.06] transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(11,34,57,0.35)] sm:flex-row sm:p-6">
                <div
                  className={`grid shrink-0 place-items-center rounded-2xl py-6 sm:w-44 ${type.tint}`}
                >
                  <MailSheet variant={type.variant} />
                </div>
                <div className="flex flex-col justify-center pb-1 sm:py-2">
                  <h3 className="display text-2xl text-ink">{type.title}</h3>
                  <p className="mt-2 leading-relaxed text-text-muted">
                    {type.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {type.examples.map((example) => (
                      <li
                        key={example}
                        className="rounded-full bg-surface px-3 py-1 text-[0.8125rem] font-medium text-ink/80"
                      >
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-text-muted">
          <span>Mailing something else? If it goes in an envelope, ask us.</span>
          <a
            href="#quote"
            className="focus-accent inline-flex items-center gap-1.5 rounded-sm font-semibold text-qrd-accent transition-colors hover:text-accent-hover"
          >
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
