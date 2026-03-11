import type { FAQItem } from "@/types";

export const generalFaqs: FAQItem[] = [
  {
    question: "What file formats do you accept?",
    answer:
      "We accept CSV, XML, PDF, PostScript, AFP, and most standard print-ready formats. Our data team can also work with custom formats and build file-mapping specifications to match your existing workflows.",
  },
  {
    question: "What is your typical production turnaround?",
    answer:
      "Our standard SLA is 24-48 hours from file receipt to mail induction. Expedited same-day and next-day options are available for time-sensitive communications. We also support scheduled recurring production for monthly billing cycles.",
  },
  {
    question: "How do you handle data security?",
    answer:
      "All data is transmitted via encrypted SFTP or our secure portal. We maintain strict access controls, facility security with camera monitoring, and follow HIPAA-ready workflows for protected health information. Data retention policies are customizable per client.",
  },
  {
    question: "Can you handle variable volumes?",
    answer:
      "Absolutely. We process everything from a few hundred pieces to millions per month. Our capacity and equipment are built for high-volume production with the flexibility to handle volume spikes without impacting quality or turnaround.",
  },
  {
    question: "What reporting do you provide?",
    answer:
      "Every job includes detailed reporting: piece counts, mail dates, postal documentation, reconciliation files, and exception reports. We can deliver reports via SFTP, email, or our client portal in your preferred format.",
  },
  {
    question: "Do you provide mail tracking?",
    answer:
      "Yes. We use Intelligent Mail barcodes (IMb) to provide scan-based visibility into mail transit. You'll receive production reports with piece counts, mail dates, and delivery status updates for every job.",
  },
];

export const complianceFaqs: FAQItem[] = [
  {
    question: "Are your workflows HIPAA compliant?",
    answer:
      "We maintain HIPAA-ready workflows including encrypted data transmission, role-based access controls, restricted facility areas, and staff training. We execute Business Associate Agreements (BAAs) with healthcare clients and follow documented procedures for handling PHI.",
  },
  {
    question: "What physical security measures are in place?",
    answer:
      "Our production facility features controlled access, 24/7 camera surveillance, visitor logging, and restricted production areas. All equipment is in a secured environment with environmental controls.",
  },
  {
    question: "How do you prevent mismails?",
    answer:
      "We use barcode-driven matching throughout the production process. Every page is tracked from print through inserting via unique barcodes. Page-count verification, camera inspection systems, and reconciliation processes ensure the right content reaches the right envelope.",
  },
  {
    question: "What is your data retention policy?",
    answer:
      "Data retention periods are configurable per client and documented in your service agreement. By default, we retain production files for 90 days for reprint capability, then securely purge them. Custom retention schedules are available.",
  },
];
