"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { proofStats } from "@/data/stats";
import { getIcon } from "@/components/shared/icon-map";

function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    if (!inView) return;

    // Extract numeric part
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplayed(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const isDecimal = match[1].includes(".");
    const duration = 1200;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (isDecimal) {
        setDisplayed(current.toFixed(1) + suffix);
      } else {
        setDisplayed(Math.round(current) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [inView, value]);

  return <>{displayed}</>;
}

export function ProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-navy py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {proofStats.map((stat) => {
            const Icon = stat.icon ? getIcon(stat.icon) : null;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                {Icon && (
                  <div className="mb-3 rounded-lg bg-white/10 p-2.5">
                    <Icon className="h-5 w-5 text-teal" />
                  </div>
                )}
                <span className="text-3xl font-bold text-teal sm:text-4xl">
                  <AnimatedValue value={stat.value} inView={inView} />
                </span>
                <span className="mt-1.5 text-sm text-white/60">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
