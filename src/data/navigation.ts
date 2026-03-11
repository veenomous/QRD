import type { NavItem } from "@/types";

export const services: NavItem[] = [
  {
    label: "Print & Mail Letters",
    href: "/services/print-and-mail-letters",
    description: "High-volume letter printing, inserting, and mailing",
    icon: "Mail",
  },
  {
    label: "Statement & Bill Mail",
    href: "/services/statement-and-bill-mail",
    description: "Recurring transactional statements and invoices",
    icon: "FileText",
  },
  {
    label: "Collections Mail Programs",
    href: "/services/collections-mail-programs",
    description: "Dunning series, settlement offers, and validation notices",
    icon: "Send",
  },
  {
    label: "Address Hygiene",
    href: "/services/address-hygiene",
    description: "CASS/NCOA processing, deduplication, and suppression",
    icon: "MapPin",
  },
  {
    label: "Data & File Intake",
    href: "/services/data-and-file-intake",
    description: "SFTP, secure portal, and template management",
    icon: "Upload",
  },
];

export const industries: NavItem[] = [
  {
    label: "Healthcare",
    href: "/industries/healthcare",
    description: "Patient statements and HIPAA-ready workflows",
    icon: "Heart",
  },
  {
    label: "Revenue Cycle & Collections",
    href: "/industries/revenue-cycle-collections",
    description: "AR management and collection letter programs",
    icon: "TrendingUp",
  },
  {
    label: "Property Management",
    href: "/industries/property-management",
    description: "Rent bills, late notices, and renewal letters",
    icon: "Building",
  },
  {
    label: "Utilities & Energy",
    href: "/industries/utilities",
    description: "Bills, shutoff notices, and payment plans",
    icon: "Zap",
  },
  {
    label: "Insurance",
    href: "/industries/insurance",
    description: "Premium notices, cancellations, and policy documents",
    icon: "Shield",
  },
  {
    label: "Financial Services",
    href: "/industries/financial-services",
    description: "Statements, disclosures, and adverse action notices",
    icon: "Landmark",
  },
  {
    label: "Government & Municipal",
    href: "/industries/government-municipal",
    description: "Tax bills, code enforcement, and jury duty notices",
    icon: "Building2",
  },
  {
    label: "HOA & Community Associations",
    href: "/industries/hoa-community-associations",
    description: "Assessments, violations, ballots, and proxies",
    icon: "Home",
  },
];

export const mainNav: NavItem[] = [
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Services",
    href: "/services",
    children: services,
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Security & Compliance",
    href: "/security-compliance",
  },
  {
    label: "About",
    href: "/about",
  },
];
