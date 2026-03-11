import { CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedSection } from "@/components/shared/animated-section";

interface ChecklistItem {
  title: string;
  description: string;
}

interface ComplianceChecklistProps {
  title?: string;
  subtitle?: string;
  items: ChecklistItem[];
}

export function ComplianceChecklist({
  title = "Our Security & Compliance Posture",
  subtitle,
  items,
}: ComplianceChecklistProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="space-y-6">
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="flex gap-4 rounded-xl border border-border bg-white p-6 shadow-sm">
                <div className="shrink-0 mt-0.5">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
