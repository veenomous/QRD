import {
  HeartPulse,
  TrendingUp,
  Building,
  Zap,
  Shield,
  Landmark,
  Building2,
  Home,
} from "lucide-react";

const industries = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: TrendingUp, label: "Collections" },
  { icon: Building, label: "Property Mgmt" },
  { icon: Zap, label: "Utilities" },
  { icon: Shield, label: "Insurance" },
  { icon: Landmark, label: "Financial" },
  { icon: Building2, label: "Government" },
  { icon: Home, label: "HOA" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-white py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm font-medium text-text-muted uppercase tracking-wider">
          Trusted by companies across 8 industries
        </p>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
          {industries.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="rounded-lg bg-surface p-2.5">
                <Icon className="h-5 w-5 text-navy/60" />
              </div>
              <span className="text-xs text-text-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
