"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import type { TestimonialItem } from "@/types";

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Moving to Qrd Tech cut our internal print labor by 60% and reduced returned mail by over 30%. The reconciliation reports give our compliance team everything they need.",
    author: "Director of Operations",
    title: "Revenue Cycle Management Company",
    company: "Top 10 RCM Vendor",
  },
  {
    quote:
      "We needed a partner that could handle our monthly billing volume without missing SLAs. Qrd Tech hasn't missed a deadline in two years of partnership.",
    author: "VP of Finance",
    title: "Regional Property Management Firm",
    company: "Multi-State Portfolio",
  },
  {
    quote:
      "The HIPAA-ready workflows and audit trail give us confidence that patient data is handled correctly at every step of the print and mail process.",
    author: "Compliance Officer",
    title: "Healthcare Billing Services",
    company: "National Provider",
  },
  {
    quote:
      "Switching from in-house printing saved us over $200K annually. The barcode integrity system eliminated our mismail risk entirely.",
    author: "COO",
    title: "Insurance Services Company",
    company: "Regional Carrier",
  },
  {
    quote:
      "Our collections recovery rate improved 18% after switching to Qrd Tech's multi-touch dunning program. The tracking and proof-of-mailing documentation is invaluable.",
    author: "VP of Collections",
    title: "Financial Services Firm",
    company: "National Lender",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Trusted by Operations Teams"
          subtitle="See why compliance-driven organizations choose Qrd Tech for their high-volume mail."
        />

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const idx = (current + offset) % testimonials.length;
            const t = testimonials[idx];
            return (
              <div
                key={`${idx}-${current}`}
                className="flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-sm"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="mb-4 text-4xl leading-none text-teal/30">&ldquo;</div>
                <blockquote className="flex-1 text-text-muted leading-relaxed">
                  {t.quote}
                </blockquote>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-navy">{t.author}</p>
                  <p className="text-sm text-text-muted">{t.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: single card carousel */}
        <div
          className="md:hidden relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="mb-4 text-4xl leading-none text-teal/30">&ldquo;</div>
              <blockquote className="flex-1 text-text-muted leading-relaxed">
                {testimonials[current].quote}
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-navy">
                  {testimonials[current].author}
                </p>
                <p className="text-sm text-text-muted">
                  {testimonials[current].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-teal"
                  : "w-2 bg-border hover:bg-text-muted"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
