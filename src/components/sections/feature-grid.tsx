import { IconFeature } from "@/components/shared/icon-feature";
import { SectionHeader } from "@/components/shared/section-header";
import {
  AnimatedStagger,
  AnimatedStaggerChild,
} from "@/components/shared/animated-section";
import type { FeatureItem } from "@/types";

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
}: FeatureGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && <SectionHeader title={title} subtitle={subtitle} />}
        <AnimatedStagger className={`grid gap-8 ${gridCols[columns]}`}>
          {features.map((feature) => (
            <AnimatedStaggerChild key={feature.title}>
              <IconFeature
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </AnimatedStaggerChild>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
