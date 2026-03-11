import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/shared/page-header";
import { QuoteForm } from "@/components/forms/quote-form";
import {
  Layers,
  CalendarClock,
  Settings,
  CheckCircle,
  FileText,
  Send,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Get a custom quote for your print and mail project. Tell us about your volume, specifications, and timeline.",
  slug: "pricing",
});

const pricingDrivers = [
  {
    icon: Layers,
    title: "Volume",
    description:
      "Per-piece pricing decreases as volume increases. Share your monthly piece count for accurate pricing.",
  },
  {
    icon: CalendarClock,
    title: "Frequency",
    description:
      "Recurring production schedules (daily, weekly, monthly) unlock lower rates and priority scheduling.",
  },
  {
    icon: Settings,
    title: "Services",
    description:
      "Pricing covers printing, inserting, postage optimization, and delivery tracking. Add-ons priced separately.",
  },
];

const included = [
  "High-speed digital printing (color or B&W)",
  "Automated folding and inserting",
  "CASS/NCOA address hygiene",
  "Presort postage optimization",
  "Intelligent Mail barcode tracking",
  "Production reporting and reconciliation",
];

const nextSteps = [
  {
    icon: FileText,
    title: "Submit Your Info",
    description: "Tell us your volume and frequency below.",
  },
  {
    icon: MessageSquare,
    title: "Get a Proposal",
    description: "We'll email a custom quote within 1 business day.",
  },
  {
    icon: Send,
    title: "Start Mailing",
    description: "Onboard in days — not weeks.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Request a Quote"
        subtitle="Tell us about your project and we'll put together a custom proposal within one business day."
      />

      {/* How Pricing Works */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            How Pricing Works
          </h2>
          <p className="mt-3 text-center text-text-muted">
            Three factors determine your per-piece cost.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pricingDrivers.map((driver) => (
              <div
                key={driver.title}
                className="rounded-xl border border-border bg-white p-6 shadow-sm text-center"
              >
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-teal-light p-3">
                  <driver.icon className="h-6 w-6 text-teal" />
                </div>
                <h3 className="font-semibold text-navy">{driver.title}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {driver.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What&apos;s Included
          </h2>
          <p className="mt-3 text-center text-text-muted">
            Every engagement includes these core services.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg bg-white p-3 border border-border"
              >
                <CheckCircle className="h-5 w-5 text-success shrink-0" />
                <span className="text-sm text-text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            What Happens Next
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {nextSteps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white font-bold">
                  {i + 1}
                </div>
                <div className="mx-auto mb-3 inline-flex rounded-lg bg-teal-light p-2">
                  <step.icon className="h-5 w-5 text-teal" />
                </div>
                <h3 className="font-semibold text-navy">{step.title}</h3>
                <p className="mt-1 text-sm text-text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-text-muted">
            No commitment required. We&apos;ll build a custom proposal based on
            your volume and requirements.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-navy sm:text-3xl">
            Get Your Custom Quote
          </h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
