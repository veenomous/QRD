import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  bg?: "white" | "surface" | "navy";
}

export function ContentSection({
  children,
  className,
  bg = "white",
}: ContentSectionProps) {
  const bgClass = {
    white: "bg-white",
    surface: "bg-surface",
    navy: "bg-navy text-white",
  };

  return (
    <section className={cn("py-16 md:py-24", bgClass[bg], className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
