import { getIcon } from "./icon-map";

interface IconFeatureProps {
  title: string;
  description: string;
  icon: string;
}

export function IconFeature({ title, description, icon }: IconFeatureProps) {
  const Icon = getIcon(icon);

  return (
    <div className="flex flex-col items-start">
      <div className="mb-3 rounded-lg bg-teal-light p-3">
        <Icon className="h-5 w-5 text-teal" />
      </div>
      <h3 className="text-base font-semibold text-navy">{title}</h3>
      <p className="mt-1 text-sm text-text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
