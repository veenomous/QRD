"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { QuoteForm } from "@/components/forms/quote-form";
import { Check, ShieldCheck } from "lucide-react";

const trustPoints = [
  "10M+ pieces mailed annually",
  "99.9% production accuracy rate",
  "24–48 hour standard turnaround",
  "HIPAA-ready workflows & BAAs",
  "SOC 2 compliant operations",
  "Piece-level tracking & audit trails",
];

export function QuoteSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="quote" ref={ref} className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
            Get Started
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink">
            Get a Custom Quote
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-ink leading-relaxed">
              Tell us about your mail volume and we&apos;ll build a custom
              proposal. Most clients see a response within one business day.
            </p>

            <ul className="mt-8 space-y-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="h-4 w-4 mt-0.5 text-qrd-accent flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-sm text-ink">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-3 border-t border-border pt-8">
              <ShieldCheck className="h-5 w-5 text-text-muted" strokeWidth={1.5} />
              <p className="text-sm text-text-muted">
                Your data is handled with enterprise-grade security. We sign BAAs
                and maintain SOC 2 compliance.
              </p>
            </div>
          </motion.div>

          {/* Quote form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
