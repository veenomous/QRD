"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10M+", label: "Pieces Mailed Annually" },
  { value: "99.9%", label: "Production Accuracy" },
  { value: "24-48hr", label: "Standard Turnaround" },
  { value: "98%", label: "Client Retention" },
];

export function StatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-ink py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-qrd-accent tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-warm-white/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
