"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { services } from "@/data/services";
import { Printer, Receipt, Scale, ShieldCheck, Upload } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Printer,
  Receipt,
  Scale,
  ShieldCheck,
  Upload,
};

export function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-warm-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink">
            Five Core Services
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Printer;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <Icon className="h-5 w-5 text-text-muted" strokeWidth={1.5} />
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {service.shortDescription}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
