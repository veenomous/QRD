import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/shared/page-header";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CTASection } from "@/components/sections/cta-section";
import { SectionHeader } from "@/components/shared/section-header";

export const metadata: Metadata = buildMetadata({
  title: "Tracking & Reporting",
  description:
    "Job-level reporting, mail tracking, reconciliation files, and exception alerts. See exactly what happens with every mail run.",
  slug: "tracking-reporting",
});

const trackingFeatures = [
  {
    title: "Job Status Dashboard",
    description:
      "Real-time visibility into job progress: received, in QA, in production, mailed. Know exactly where your job stands at any point.",
    icon: "Eye",
  },
  {
    title: "Mail Date Confirmation",
    description:
      "Receive confirmed mail induction dates with USPS documentation. Know when your pieces entered the mail stream.",
    icon: "Clock",
  },
  {
    title: "Piece-Level Reconciliation",
    description:
      "Input count vs. output count reconciliation on every job. Exceptions flagged and documented. No guessing about what was mailed.",
    icon: "Target",
  },
  {
    title: "Exception Alerts",
    description:
      "Automated alerts for address issues, undeliverables, and any exceptions that need attention. Proactive, not reactive.",
    icon: "AlertTriangle",
  },
  {
    title: "Reprint Triggers",
    description:
      "Documented reprint process for exceptions. Tracking of reprints with separate reporting. Full audit trail maintained.",
    icon: "Repeat",
  },
  {
    title: "Custom Report Delivery",
    description:
      "Reports delivered via SFTP, email, or portal in your preferred format: CSV, Excel, PDF, or custom layouts.",
    icon: "FileText",
  },
];

const reportContents = [
  "Piece counts (input vs. mailed vs. exceptions)",
  "Mail induction date and USPS facility",
  "Postal class and presort tier breakdown",
  "Address correction details (CASS/NCOA)",
  "Undeliverable and suppressed records",
  "Reprint log with reasons and dates",
  "Cost breakdown by postal class",
  "Delivery estimate windows by ZIP",
];

export default function TrackingReportingPage() {
  return (
    <>
      <PageHeader
        title="Tracking & Reporting"
        subtitle="Full visibility into every job — from file receipt to mailbox delivery."
      />

      <FeatureGrid
        title="What You Get"
        subtitle="Every mail run comes with comprehensive reporting and tracking."
        features={trackingFeatures}
      />

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What's in Every Report"
            subtitle="Standard reporting includes the following data points."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {reportContents.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg bg-white border border-border p-4"
              >
                <div className="h-2 w-2 rounded-full bg-teal shrink-0" />
                <span className="text-sm text-text-primary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See a Sample Report"
        subtitle="Request a walkthrough of our reporting capabilities."
        variant="call"
      />
    </>
  );
}
