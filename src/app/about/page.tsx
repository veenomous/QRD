import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/shared/page-header";
import { CTASection } from "@/components/sections/cta-section";
import { ProofBar } from "@/components/sections/proof-bar";
import { SectionHeader } from "@/components/shared/section-header";
import { localBusinessSchema } from "@/lib/structured-data";
import { Building, Users, Target, Clock } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Qrd Tech",
  description:
    "Learn about Qrd Tech — our facility, capacity, team, and commitment to high-volume print and mail excellence.",
  slug: "about",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />

      <PageHeader
        title="About Qrd Tech"
        subtitle="Purpose-built for high-volume print and mail — so you don't have to be."
      />

      <ProofBar />

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Built for Volume. Engineered for Accuracy."
            centered={false}
          />
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p>
              Qrd Tech exists because high-volume mail operations require more
              than a printer and a postage meter. Our clients — healthcare
              billing companies, property managers, utilities, financial
              institutions, and collections agencies — depend on every piece
              being accurate, on time, and audit-ready.
            </p>
            <p>
              We built our operation around that need. From barcode-driven
              inserting to automated reconciliation, every part of our process
              is designed to eliminate errors, reduce returned mail, and give
              you the reporting you need to stay compliant and confident.
            </p>
            <p>
              Today, we process over 10 million pieces annually from our
              production facility. Our team combines print production expertise
              with data handling discipline and postal optimization knowledge
              to deliver reliable, cost-effective mail operations at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What Drives Us"
            subtitle="The principles behind every run we process."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Accuracy First",
                description:
                  "Every piece matters. Our QA processes ensure the right content reaches the right recipient, every time.",
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description:
                  "We meet SLAs consistently because our clients' operations depend on it. No excuses, no surprises.",
              },
              {
                icon: Users,
                title: "Operational Partnership",
                description:
                  "We're not just a vendor — we're an extension of your operations team, invested in your outcomes.",
              },
              {
                icon: Building,
                title: "Built to Scale",
                description:
                  "Our facility, equipment, and processes are designed for volume. We handle spikes without impacting quality.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-teal-light p-3">
                  <value.icon className="h-6 w-6 text-teal" />
                </div>
                <h3 className="font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Talk About Your Mail"
        subtitle="Schedule a call to discuss your volume, requirements, and how we can help."
      />
    </>
  );
}
