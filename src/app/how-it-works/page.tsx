import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/shared/page-header";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { generalFaqs } from "@/data/faqs";
import { FeatureGrid } from "@/components/sections/feature-grid";

export const metadata: Metadata = buildMetadata({
  title: "How It Works",
  description:
    "See how Qrd Tech handles your print and mail — from data intake and proofing to production, postal optimization, and tracking.",
  slug: "how-it-works",
});

const whyChooseUs = [
  {
    title: "Barcode-Driven Accuracy",
    description:
      "Every page is tracked from print through inserting via unique barcodes, ensuring the right content reaches the right envelope.",
    icon: "Target",
  },
  {
    title: "Postal Optimization",
    description:
      "We presort and commingle your mail for maximum postal discounts and faster in-home delivery via USPS drop-ship.",
    icon: "Truck",
  },
  {
    title: "Dedicated QA Checkpoints",
    description:
      "Sample proofs, page-count verification, camera inspection, and reconciliation at every stage of production.",
    icon: "CheckCircle",
  },
  {
    title: "Flexible Data Intake",
    description:
      "Send files via SFTP, secure portal, or API. We work with CSV, XML, PDF, and custom formats.",
    icon: "Upload",
  },
  {
    title: "Fast Turnarounds",
    description:
      "Standard 24-48 hour SLA from file receipt to mail induction, with same-day and next-day options available.",
    icon: "Clock",
  },
  {
    title: "Complete Audit Trail",
    description:
      "Job-level reporting with mail dates, piece counts, reconciliation files, and exception alerts for every run.",
    icon: "BarChart3",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How It Works"
        subtitle="From file intake to mailbox — a reliable, auditable process at every step."
      />
      <ProcessSteps />
      <FeatureGrid
        title="Why Operations Teams Choose Us"
        subtitle="Built for volume, accuracy, and compliance."
        features={whyChooseUs}
      />
      <FAQSection faqs={generalFaqs} />
      <CTASection />
    </>
  );
}
