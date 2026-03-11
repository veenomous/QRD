import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/shared/page-header";
import { ComplianceChecklist } from "@/components/sections/compliance-checklist";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { complianceFaqs } from "@/data/faqs";

export const metadata: Metadata = buildMetadata({
  title: "Security & Compliance",
  description:
    "Learn about Qrd Tech's security posture, HIPAA-ready workflows, data handling procedures, facility controls, and QA processes.",
  slug: "security-compliance",
});

const complianceItems = [
  {
    title: "Encrypted Data Transmission",
    description:
      "All data is transmitted via encrypted SFTP or our secure web portal. TLS 1.2+ encryption in transit, AES-256 at rest. No unencrypted file transfers accepted.",
  },
  {
    title: "Role-Based Access Controls",
    description:
      "Staff access is limited to the minimum required for their role. Production data access is logged and audited. Multi-factor authentication on all systems.",
  },
  {
    title: "HIPAA-Ready Workflows",
    description:
      "Documented procedures for handling PHI. Business Associate Agreements (BAAs) executed with healthcare clients. Staff trained on HIPAA requirements annually.",
  },
  {
    title: "Facility Security",
    description:
      "Controlled building access with badge entry. 24/7 camera surveillance across production and data areas. Visitor logging and escort requirements. Restricted production zones.",
  },
  {
    title: "Barcode-Driven QA Process",
    description:
      "Unique barcodes on every page track content through printing, folding, and inserting. Camera verification systems confirm correct matching. Page counts reconciled before and after every job.",
  },
  {
    title: "Reconciliation & Reporting",
    description:
      "Every job produces a reconciliation report: input counts vs. output counts, exceptions flagged, reprints documented. Clients receive this with every mail drop.",
  },
  {
    title: "Data Retention & Purge Policy",
    description:
      "Configurable retention periods per client. Default 90-day retention for reprint capability, followed by secure deletion. Custom retention schedules documented in service agreements.",
  },
  {
    title: "Incident Response",
    description:
      "Documented incident response plan with defined escalation paths. Notification procedures aligned with regulatory requirements. Post-incident review and process improvement.",
  },
];

export default function SecurityCompliancePage() {
  return (
    <>
      <PageHeader
        title="Security & Compliance"
        subtitle="Protecting your data and ensuring accuracy at every step of the print and mail process."
      />
      <ComplianceChecklist
        title="Our Security Controls"
        subtitle="Plain-language overview of the controls we maintain to protect your data and ensure mail accuracy."
        items={complianceItems}
      />
      <FAQSection faqs={complianceFaqs} />
      <CTASection
        title="Questions About Security?"
        subtitle="Talk to our team about your compliance requirements and how we support them."
        variant="call"
      />
    </>
  );
}
