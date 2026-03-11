import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Send Your Data",
    description:
      "Upload your print files via SFTP, secure portal, or API. We accept CSV, XML, PDF, and custom formats with flexible templates.",
    icon: "Upload",
  },
  {
    number: 2,
    title: "We Validate & Proof",
    description:
      "Our QA team verifies page counts, address hygiene (CASS/NCOA), and formatting. You approve sample proofs before production.",
    icon: "CheckCircle",
  },
  {
    number: 3,
    title: "Print & Insert",
    description:
      "High-speed digital and offset printing with automated inserting. Barcode-driven matching ensures every page reaches the right envelope.",
    icon: "Printer",
  },
  {
    number: 4,
    title: "Postal Optimization",
    description:
      "We presort and commingle your mail for maximum postal discounts. Drop-ship to USPS facilities for faster in-home delivery.",
    icon: "Truck",
  },
  {
    number: 5,
    title: "Track & Report",
    description:
      "Receive job-level reporting with mail dates, piece counts, reconciliation files, and exception alerts. Full audit trail on every run.",
    icon: "BarChart3",
  },
];
