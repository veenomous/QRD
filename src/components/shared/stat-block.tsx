import { getIcon } from "./icon-map";

interface StatBlockProps {
  value: string;
  label: string;
  icon?: string;
}

export function StatBlock({ value, label, icon }: StatBlockProps) {
  const Icon = icon ? getIcon(icon) : null;

  return (
    <div className="flex flex-col items-center text-center">
      {Icon && (
        <div className="mb-2 rounded-lg bg-teal-light p-2">
          <Icon className="h-5 w-5 text-teal" />
        </div>
      )}
      <span className="text-3xl font-bold text-navy sm:text-4xl">{value}</span>
      <span className="mt-1 text-sm text-text-muted">{label}</span>
    </div>
  );
}
