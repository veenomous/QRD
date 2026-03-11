import Link from "next/link";
import { getIcon } from "./icon-map";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
  className,
}: ServiceCardProps) {
  const Icon = getIcon(icon);

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-white p-6 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal/30",
        className
      )}
    >
      <div className="mb-4 inline-flex rounded-lg bg-teal-light p-3 self-start">
        <Icon className="h-6 w-6 text-teal" />
      </div>
      <h3 className="text-lg font-semibold text-navy group-hover:text-teal transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-teal">
        Learn more
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
  );
}
