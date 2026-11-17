"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/data/process-steps";

export function ProcessTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink">
            From Data File to Mailbox
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className="relative"
            >
              {/* Connecting line (desktop only) */}
              {i < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+24px)] right-0 h-px bg-border" />
              )}

              <div className="font-display text-4xl md:text-5xl font-bold text-ink/10 leading-none">
                {String(step.number).padStart(2, "0")}
              </div>
              <h3 className="mt-3 text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
