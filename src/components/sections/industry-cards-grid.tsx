import Link from "next/link";
import { industries } from "@/data/industries";
import { getIcon } from "@/components/shared/icon-map";
import { SectionHeader } from "@/components/shared/section-header";
import {
  AnimatedStagger,
  AnimatedStaggerChild,
} from "@/components/shared/animated-section";

export function IndustryCardsGrid() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Purpose-built workflows for letter-heavy industries where volume, accuracy, and compliance matter."
        />
        <AnimatedStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = getIcon(industry.icon);
            return (
              <AnimatedStaggerChild key={industry.slug}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-sm">
                  <div className="shrink-0 rounded-lg bg-navy/5 p-3">
                    <Icon className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">
                      {industry.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted leading-relaxed">
                      {industry.shortDescription.slice(0, 80)}...
                    </p>
                  </div>
                </div>
              </AnimatedStaggerChild>
            );
          })}
        </AnimatedStagger>
        <div className="mt-8 text-center">
          <Link
            href="/industries"
            className="text-sm font-medium text-teal hover:text-teal-hover transition-colors"
          >
            View all industries we serve &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
