"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Landmark,
  Building2,
  Zap,
  Shield,
  DollarSign,
  Building,
  Home,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "Moving to Qrd Tech cut our internal print labor by 60% and reduced returned mail by over 30%.",
    metric: "60%",
    metricLabel: "labor reduction",
    author: "Director of Operations",
    company: "Top 10 RCM Vendor",
  },
  {
    quote:
      "Switching from in-house printing saved us over $200K annually. The barcode integrity system eliminated our mismail risk entirely.",
    metric: "$200K",
    metricLabel: "annual savings",
    author: "COO",
    company: "Regional Insurance Carrier",
  },
  {
    quote:
      "Our collections recovery rate improved 18% after switching to Qrd Tech's multi-touch dunning program.",
    metric: "18%",
    metricLabel: "recovery improvement",
    author: "VP of Collections",
    company: "National Financial Services Firm",
  },
];

const industries = [
  { name: "Healthcare", icon: Heart },
  { name: "Collections", icon: Landmark },
  { name: "Property Mgmt", icon: Building2 },
  { name: "Utilities", icon: Zap },
  { name: "Insurance", icon: Shield },
  { name: "Financial", icon: DollarSign },
  { name: "Government", icon: Building },
  { name: "HOA", icon: Home },
];

export function SocialProof() {
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
            Results
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink">
            Trusted by Operations Teams
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className="border-t-2 border-border pt-6"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-qrd-accent">
                  {t.metric}
                </span>
                <span className="text-sm text-text-muted">{t.metricLabel}</span>
              </div>
              <blockquote className="mt-4 text-ink leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="text-sm font-semibold text-ink">{t.author}</p>
                <p className="text-sm text-text-muted">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-20 border-t border-border pt-10"
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-text-muted mb-8">
            Trusted Across Regulated Industries
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="flex items-center gap-2 text-text-muted"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                  <span className="text-sm">{ind.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
