import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/shared/page-header";
import { ServiceCardsGrid } from "@/components/sections/service-cards-grid";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "End-to-end print and mail solutions: letter printing, statement mailing, collections programs, address hygiene, and secure data intake.",
  slug: "services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="End-to-end print and mail solutions built for high-volume, compliance-driven communications."
      />
      <ServiceCardsGrid />
      <CTASection />
    </>
  );
}
