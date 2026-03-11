import type { ServiceDefinition } from "@/types";

export const services: ServiceDefinition[] = [
  {
    slug: "print-and-mail-letters",
    title: "Print & Mail Letters",
    shortDescription:
      "High-volume letter printing, inserting, and mailing with automated production workflows and postal optimization.",
    heroSubtitle:
      "From data file to mailbox — automated letter production at scale with barcode integrity, variable data personalization, and deep postal discounts.",
    icon: "Printer",
    features: [
      {
        title: "High-Speed Digital Printing",
        description:
          "Production-grade inkjet and toner platforms rated for millions of impressions per month, supporting full-color and monochrome output on a range of stock weights.",
        icon: "Zap",
      },
      {
        title: "Automated Inserting",
        description:
          "Multi-station inserting equipment handles collating, folding, and envelope stuffing at speeds exceeding 10,000 pieces per hour with camera-verified integrity.",
        icon: "Layers",
      },
      {
        title: "Barcode Matching & Integrity",
        description:
          "2D barcodes printed on every sheet are scanned at each production stage to guarantee the right pages reach the right envelope — every time.",
        icon: "ScanBarcode",
      },
      {
        title: "Envelope Options",
        description:
          "Choose from #10, 6x9, flat, and window envelopes with custom return-address branding. Outgoing and return envelopes can be configured per job.",
        icon: "Mail",
      },
      {
        title: "Variable Data Personalization",
        description:
          "Merge recipient-specific content — names, balances, account numbers, QR codes — directly into your letter templates for a one-to-one communication experience.",
        icon: "FileText",
      },
      {
        title: "Presort & Commingling",
        description:
          "Mail is presorted to USPS standards and commingled with other volumes to unlock the deepest available postage discounts, often saving 15–30% on First-Class postage.",
        icon: "ArrowDownUp",
      },
    ],
    useCases: [
      "Policyholder correspondence and endorsement letters",
      "Patient billing statements and explanation of benefits",
      "Tenant notices, lease renewals, and property communications",
      "Regulatory and compliance-driven notices",
      "Welcome kits and onboarding packages",
      "Annual disclosures and privacy notices",
    ],
    relatedIndustries: [
      "healthcare",
      "insurance",
      "property-management",
      "financial-services",
      "government-municipal",
    ],
    faqs: [
      {
        question: "What is your typical turnaround time for print-and-mail jobs?",
        answer:
          "Standard turnaround is 24–48 hours from approved file receipt to USPS induction. For recurring production, same-day processing is available with pre-approved templates and automated file intake.",
      },
      {
        question: "Can you handle variable page counts within a single job?",
        answer:
          "Yes. Our inserting equipment uses intelligent barcode matching to collate variable page-count documents accurately. A single job can contain pieces ranging from one page to dozens without manual intervention.",
      },
      {
        question: "What postage classes do you support?",
        answer:
          "We support First-Class Mail, USPS Marketing Mail (formerly Standard Mail), and Certified Mail. Presort and commingling are applied automatically to maximize postal discounts for qualifying volumes.",
      },
      {
        question: "How do you ensure the right documents go into the right envelope?",
        answer:
          "Every sheet is printed with a unique 2D barcode that encodes recipient and page-sequence data. Cameras at the printer, folder, and inserter verify each barcode in real time. Any mismatch triggers an automatic stop and re-feed.",
      },
    ],
    ctaText: "Get a Quote for Print & Mail",
    metaTitle: "High-Volume Print & Mail Letter Services | Qrd Tech",
    metaDescription:
      "Qrd Tech delivers high-volume print-and-mail letter services with automated inserting, barcode integrity, variable data, and presort postage optimization. Get a quote today.",
  },
  {
    slug: "statement-and-bill-mail",
    title: "Statement & Bill Mail",
    shortDescription:
      "Recurring transactional statement, invoice, and bill printing with scheduled production and reconciliation reporting.",
    heroSubtitle:
      "Automate your billing cycle — scheduled statement production with payment coupon integration, return envelopes, and full reconciliation reporting.",
    icon: "Receipt",
    features: [
      {
        title: "Scheduled Production Runs",
        description:
          "Configure daily, weekly, or monthly production schedules that trigger automatically from your file drops. No manual intervention required once your cycle is set.",
        icon: "CalendarClock",
      },
      {
        title: "Template Management",
        description:
          "Maintain versioned, compliance-approved templates with locked regulatory copy and flexible variable zones. Updates deploy instantly across future production runs.",
        icon: "LayoutTemplate",
      },
      {
        title: "Variable Data Merge",
        description:
          "Account balances, payment histories, usage summaries, and personalized messaging merge seamlessly into each statement for accurate, recipient-specific output.",
        icon: "Merge",
      },
      {
        title: "Return Envelope Inclusion",
        description:
          "Business reply or courtesy reply envelopes are automatically inserted with each statement to streamline payment collection and improve response rates.",
        icon: "MailOpen",
      },
      {
        title: "Payment Coupon Integration",
        description:
          "Scannable payment coupons with MICR or OCR lines are printed as part of the statement, enabling automated payment processing on your end.",
        icon: "CreditCard",
      },
      {
        title: "Reconciliation Reporting",
        description:
          "Receive detailed production reports — piece counts, postage charges, delivery tracking, and file-to-mail reconciliation — for every run.",
        icon: "ClipboardCheck",
      },
    ],
    useCases: [
      "Monthly utility bills and usage statements",
      "Medical billing statements and patient responsibility notices",
      "HOA assessment notices and quarterly statements",
      "Insurance premium notices and renewal invoices",
      "Property management rent statements",
      "Loan servicing and mortgage statements",
    ],
    relatedIndustries: [
      "utilities",
      "healthcare",
      "revenue-cycle-collections",
      "property-management",
      "hoa-community-associations",
      "insurance",
    ],
    faqs: [
      {
        question: "Can you integrate with our billing or ERP system?",
        answer:
          "Yes. We accept data via SFTP, secure API, or web portal in standard formats (CSV, XML, PDF, print-stream). Our team will map your output to our production templates so the integration is seamless with your existing billing cycle.",
      },
      {
        question: "How do you handle returned mail from incorrect addresses?",
        answer:
          "All outgoing mail is pre-processed through CASS and NCOA to minimize undeliverables. For pieces that are still returned, we capture the return data and provide a reconciliation file so you can update your records.",
      },
      {
        question: "What if our statement design needs to change mid-cycle?",
        answer:
          "Template updates can be deployed within one business day for minor changes. For significant redesigns, our production team runs a proof cycle to confirm accuracy before the next scheduled run.",
      },
      {
        question: "Do you support duplex (two-sided) printing on statements?",
        answer:
          "Absolutely. Duplex printing is standard and helps reduce page counts and postage costs. We can place variable content on both sides or reserve the back for standing disclosures and regulatory language.",
      },
    ],
    ctaText: "Automate Your Statement Cycle",
    metaTitle: "Statement & Bill Printing and Mailing Services | Qrd Tech",
    metaDescription:
      "Automate recurring statement and bill production with Qrd Tech. Scheduled runs, payment coupon integration, return envelopes, and full reconciliation reporting for high-volume billing.",
  },
  {
    slug: "collections-mail-programs",
    title: "Collections Mail Programs",
    shortDescription:
      "Dunning series, settlement offers, validation notices, and attorney letters with compliance-ready workflows and audit trails.",
    heroSubtitle:
      "Drive recoveries with multi-touch dunning programs — compliant letter series, piece-level tracking, and end-to-end audit trails built for regulated collections.",
    icon: "Scale",
    features: [
      {
        title: "Multi-Touch Letter Series",
        description:
          "Configure sequenced dunning campaigns — first notice through final demand — with automated triggers based on your data file cadence and escalation rules.",
        icon: "ListOrdered",
      },
      {
        title: "Proofing Workflows",
        description:
          "Every letter variant passes through a digital proofing stage with approval gates before production. Reviewers can approve, annotate, or reject directly in the portal.",
        icon: "CheckCircle",
      },
      {
        title: "Proof of Mailing",
        description:
          "Generate Certificate of Mailing documentation for compliance-driven notices, providing defensible proof that correspondence was mailed on the required date.",
        icon: "ShieldCheck",
      },
      {
        title: "Compliance-Ready Templates",
        description:
          "Pre-built templates incorporate required regulatory language for FDCPA, TCPA, and state-specific disclosure requirements. Legal review integration is available.",
        icon: "FileCheck",
      },
      {
        title: "Piece-Level Tracking",
        description:
          "Track every letter from production through USPS delivery using Intelligent Mail barcode scans. Real-time status updates feed back to your system of record.",
        icon: "MapPin",
      },
      {
        title: "Audit Trail & Archival",
        description:
          "Complete production records — file received, proof approved, printed, inserted, mailed, delivered — are retained and exportable for regulatory audits and litigation support.",
        icon: "Archive",
      },
    ],
    useCases: [
      "First-party and third-party debt collection notice series",
      "Settlement offer letters and payment plan proposals",
      "Debt validation notices under FDCPA requirements",
      "Attorney demand letters on firm letterhead",
      "Pre-litigation and right-to-cure notices",
      "Past-due rent and HOA assessment collection campaigns",
    ],
    relatedIndustries: [
      "revenue-cycle-collections",
      "healthcare",
      "financial-services",
      "property-management",
      "hoa-community-associations",
    ],
    faqs: [
      {
        question: "How do you ensure letters meet FDCPA and state compliance requirements?",
        answer:
          "Our templates are built with locked compliance zones that contain required disclosures, mini-Miranda language, and state-specific notices. Template changes go through a controlled review process, and we maintain version histories for audit purposes.",
      },
      {
        question: "Can you print on attorney or client letterhead?",
        answer:
          "Yes. We support digital letterhead overlays, allowing attorney firms and creditor clients to have letters produced on their branded stationery without the cost of pre-printed stock. Letterhead files are stored securely and applied at print time.",
      },
      {
        question: "What proof-of-mailing documentation do you provide?",
        answer:
          "We provide Certificate of Mailing manifests for First-Class Mail, along with Intelligent Mail barcode tracking for delivery visibility. All production records are retained for a minimum of seven years.",
      },
      {
        question: "How quickly can you launch a new dunning series?",
        answer:
          "A new letter series can typically be configured and proofed within 3–5 business days, including template setup, variable mapping, and approval workflows. Existing series with new data files process within standard 24–48 hour turnaround.",
      },
    ],
    ctaText: "Launch Your Collections Program",
    metaTitle: "Collections Mail Programs & Dunning Letter Services | Qrd Tech",
    metaDescription:
      "Qrd Tech powers compliant collections mail programs with multi-touch dunning series, proofing workflows, piece-level tracking, and audit trails for revenue cycle and debt recovery.",
  },
  {
    slug: "address-hygiene",
    title: "Address Hygiene & Data Quality",
    shortDescription:
      "CASS certification, NCOA processing, duplicate detection, and suppression services to maximize deliverability and reduce waste.",
    heroSubtitle:
      "Clean data, fewer returns — CASS-certified address standardization, 48-month NCOA move-update processing, and targeted suppression to keep your mail on target.",
    icon: "ShieldCheck",
    features: [
      {
        title: "CASS Certification",
        description:
          "Addresses are validated and standardized against the USPS Coding Accuracy Support System database, correcting ZIP+4 codes, delivery points, and formatting to meet mailing standards.",
        icon: "BadgeCheck",
      },
      {
        title: "NCOA Processing (48-Month)",
        description:
          "National Change of Address processing matches your file against 48 months of USPS move data, updating addresses for individuals and businesses that have filed forwarding requests.",
        icon: "MapPinCheck",
      },
      {
        title: "Duplicate Detection",
        description:
          "Sophisticated matching algorithms identify and flag duplicate records across your file — including fuzzy matches on name, address, and household — to eliminate redundant mailings.",
        icon: "Copy",
      },
      {
        title: "Deceased Suppression",
        description:
          "Records are matched against national deceased registries to remove individuals who are no longer reachable, improving accuracy and demonstrating responsible data stewardship.",
        icon: "UserX",
      },
      {
        title: "Prison Suppression",
        description:
          "Suppress addresses associated with federal and state correctional facilities to avoid mailing to individuals who cannot act on your communications.",
        icon: "Ban",
      },
      {
        title: "Address Standardization",
        description:
          "Non-standard address formats are corrected to USPS Publication 28 standards — proper abbreviations, directionals, unit designators, and line placement — for consistent, deliverable output.",
        icon: "AlignLeft",
      },
    ],
    useCases: [
      "Pre-mailing address validation for outbound campaigns",
      "Quarterly or annual database hygiene runs",
      "Move-update compliance for USPS Marketing Mail",
      "Customer and patient file deduplication",
      "Suppression processing before acquisition mailings",
    ],
    relatedIndustries: [
      "healthcare",
      "insurance",
      "financial-services",
      "utilities",
      "government-municipal",
    ],
    faqs: [
      {
        question: "Is NCOA processing required by the USPS?",
        answer:
          "Yes. USPS requires mailers using Marketing Mail (formerly Standard Mail) rates to process their lists through an approved Move Update method within 95 days of mailing. NCOA is the most common method. First-Class Mail does not have this requirement but benefits significantly from NCOA processing through reduced undeliverable-as-addressed (UAA) volumes.",
      },
      {
        question: "How often should we run address hygiene on our database?",
        answer:
          "For active mailing files, we recommend CASS and NCOA processing before every mailing or at least quarterly. For master databases, an annual full hygiene pass — including deduplication, deceased suppression, and prison suppression — is a best practice.",
      },
      {
        question: "What file formats do you accept for address hygiene processing?",
        answer:
          "We accept CSV, TSV, fixed-width, Excel, and XML files. Our team will map your fields during onboarding. Processed files are returned in your original format with appended hygiene result codes and corrected address fields.",
      },
      {
        question: "How much can address hygiene reduce our undeliverable mail?",
        answer:
          "Results vary by file quality, but most clients see a 15–40% reduction in undeliverable-as-addressed (UAA) mail after their first full hygiene pass. Ongoing quarterly processing maintains those gains as your data ages.",
      },
    ],
    ctaText: "Clean Your Mailing Data",
    metaTitle: "Address Hygiene, CASS & NCOA Processing Services | Qrd Tech",
    metaDescription:
      "Improve mail deliverability with Qrd Tech address hygiene services. CASS certification, 48-month NCOA, deduplication, deceased and prison suppression for cleaner mailing data.",
  },
  {
    slug: "data-and-file-intake",
    title: "Data & File Intake",
    shortDescription:
      "Secure file transfer via SFTP, encrypted web portal, and automated validation with template libraries and format conversion.",
    heroSubtitle:
      "Get your data to production faster — encrypted SFTP, a secure web portal, automated file validation, and format conversion so your files are print-ready on arrival.",
    icon: "Upload",
    features: [
      {
        title: "SFTP with Encryption",
        description:
          "Dedicated SFTP accounts with AES-256 encryption in transit and at rest. IP whitelisting, SSH key authentication, and automated pickup schedules are available for recurring transfers.",
        icon: "Lock",
      },
      {
        title: "Secure Web Portal",
        description:
          "A browser-based upload portal with role-based access control for ad-hoc jobs. Upload files, select templates, preview output, and approve production — all from one interface.",
        icon: "Globe",
      },
      {
        title: "Automated File Validation",
        description:
          "Incoming files are validated against predefined rules — record counts, field formats, required columns, address presence — before entering production. Errors trigger immediate notifications.",
        icon: "FileCheck",
      },
      {
        title: "Template Library",
        description:
          "Maintain a centralized library of approved letter and statement templates. Map incoming data fields to template variables once, and reuse across every future production run.",
        icon: "Library",
      },
      {
        title: "Format Conversion",
        description:
          "We accept PDF, CSV, XML, fixed-width, AFP, Metacode, PostScript, and PCL files. Our pre-press team converts non-standard formats into production-ready output at no additional charge.",
        icon: "RefreshCw",
      },
      {
        title: "Data Mapping & Transformation",
        description:
          "Our team maps your source fields to production templates, handling transformations like date formatting, currency rendering, address parsing, and conditional content logic.",
        icon: "GitBranch",
      },
    ],
    useCases: [
      "Automated nightly file drops from billing or ERP systems",
      "Ad-hoc letter and notice submissions by internal teams",
      "Multi-department onboarding with role-based portal access",
      "Legacy print-stream conversion from mainframe output",
      "Vendor transition with format migration from prior provider",
    ],
    relatedIndustries: [
      "healthcare",
      "utilities",
      "financial-services",
      "revenue-cycle-collections",
      "government-municipal",
    ],
    faqs: [
      {
        question: "What security certifications does your file intake infrastructure carry?",
        answer:
          "Our infrastructure is SOC 2 Type II audited. File transfers are encrypted with AES-256, and data at rest is stored in access-controlled environments with audit logging. We support HIPAA BAA execution for healthcare clients.",
      },
      {
        question: "Can multiple departments within our organization use the portal independently?",
        answer:
          "Yes. The web portal supports role-based access with department-level isolation. Each department can have its own users, templates, and approval workflows without visibility into other groups' activity.",
      },
      {
        question: "What happens if a file fails validation?",
        answer:
          "Failed files are quarantined and the submitter receives an immediate notification with a detailed error report — which rows failed, which rules were violated, and suggested corrections. Production does not proceed until a clean file is received and approved.",
      },
      {
        question: "How long does onboarding and data mapping take?",
        answer:
          "For standard file formats with straightforward mapping, onboarding typically takes 3–5 business days including test file processing and proof approval. Complex formats or legacy print streams may require 1–2 weeks for conversion development and QA.",
      },
    ],
    ctaText: "Set Up Secure File Transfer",
    metaTitle: "Secure Data & File Intake for Print-and-Mail | Qrd Tech",
    metaDescription:
      "Qrd Tech provides secure SFTP, encrypted web portal, automated file validation, and format conversion for seamless print-and-mail production data intake.",
  },
];
