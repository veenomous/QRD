import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/shared/page-header";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { SectionHeader } from "@/components/shared/section-header";
import { getIcon } from "@/components/shared/icon-map";
import { serviceSchema, breadcrumbSchema } from "@/lib/structured-data";
import { services } from "@/data/services";
import { industries as industryData } from "@/data/industries";
import { CheckCircle } from "lucide-react";

function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    slug: `services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedIndustries = industryData.filter((ind) =>
    service.relatedIndustries.includes(ind.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema({
            title: service.title,
            description: service.shortDescription,
            slug: service.slug,
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Services", href: "/services" },
            { name: service.title, href: `/services/${service.slug}` },
          ])),
        }}
      />

      <PageHeader
        title={service.title}
        subtitle={service.heroSubtitle}
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      <FeatureGrid
        title="Key Capabilities"
        features={service.features}
      />

      {/* Use Cases */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Common Use Cases" />
          <div className="grid gap-4 sm:grid-cols-2">
            {service.useCases.map((useCase) => (
              <div
                key={useCase}
                className="flex items-start gap-3 rounded-lg bg-white p-4 border border-border"
              >
                <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm text-text-primary">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      {relatedIndustries.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Industries That Use This Service"
              subtitle="See how this service fits your industry."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedIndustries.map((ind) => {
                const Icon = getIcon(ind.icon);
                return (
                  <div
                    key={ind.slug}
                    className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-sm"
                  >
                    <div className="shrink-0 rounded-lg bg-navy/5 p-2.5">
                      <Icon className="h-5 w-5 text-navy" />
                    </div>
                    <span className="font-medium text-navy text-sm">{ind.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={service.faqs} />
      <CTASection title={service.ctaText} />
    </>
  );
}
