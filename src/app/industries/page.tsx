import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/shared/page-header";
import { CTASection } from "@/components/sections/cta-section";
import { SectionHeader } from "@/components/shared/section-header";
import { getIcon } from "@/components/shared/icon-map";
import { industries } from "@/data/industries";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "Purpose-built print and mail workflows for healthcare, collections, property management, utilities, insurance, financial services, government, and HOAs.",
  slug: "industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="Purpose-built workflows for letter-heavy industries where volume, accuracy, and compliance matter."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {industries.map((industry) => {
              const Icon = getIcon(industry.icon);
              return (
                <div
                  key={industry.slug}
                  className="rounded-xl border border-border bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-lg bg-teal-light p-3">
                      <Icon className="h-6 w-6 text-teal" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-navy">
                        {industry.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-muted leading-relaxed">
                        {industry.shortDescription}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {industry.painPoints.slice(0, 3).map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-text-primary"
                      >
                        <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader
            title="Don't See Your Industry?"
            subtitle="We serve any business that sends high-volume letters. If you mail it, we can produce it — faster, cheaper, and with full compliance controls."
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
