"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSteps } from "@/data/process-steps";
import { getIcon } from "@/components/shared/icon-map";

export function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-muted">
            From file intake to mailbox — a reliable, auditable process at
            every step.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Animated connection line (desktop) */}
          <div className="absolute left-0 right-0 top-12 hidden h-0.5 md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="h-full w-full origin-left bg-teal/30"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {processSteps.map((step, i) => {
              const Icon = getIcon(step.icon);
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.15,
                    ease: "easeOut",
                  }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.3 + i * 0.15,
                    }}
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white font-bold text-lg shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
                  >
                    {step.number}
                  </motion.div>
                  <div className="mt-4 rounded-lg bg-teal-light p-2">
                    <Icon className="h-5 w-5 text-teal" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
