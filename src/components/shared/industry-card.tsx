import Link from "next/link";
import { getIcon } from "./icon-map";
import { cn } from "@/lib/utils";

interface IndustryCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  className?: string;
}

export function IndustryCard({
  title,
  description,
  href,
  icon,
  className,
}: IndustryCardProps) {
  const Icon = getIcon(icon);

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="shrink-0 rounded-lg bg-navy/5 p-3">
        <Icon className="h-5 w-5 text-navy" />
      </div>
      <div>
        <h3 className="font-semibold text-navy group-hover:text-teal transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-sm text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
