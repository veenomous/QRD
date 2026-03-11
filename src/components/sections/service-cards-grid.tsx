import { services } from "@/data/navigation";
import { ServiceCard } from "@/components/shared/service-card";
import { SectionHeader } from "@/components/shared/section-header";
import {
  AnimatedStagger,
  AnimatedStaggerChild,
} from "@/components/shared/animated-section";

export function ServiceCardsGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="End-to-end print and mail solutions built for high-volume, compliance-driven communications."
        />
        <AnimatedStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <AnimatedStaggerChild key={service.href}>
              <ServiceCard
                title={service.label}
                description={service.description ?? ""}
                href={service.href}
                icon={service.icon ?? "Mail"}
              />
            </AnimatedStaggerChild>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
