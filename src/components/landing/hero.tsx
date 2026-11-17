"use client";

import { motion } from "framer-motion";

export function LandingHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-warm-white pt-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight text-ink leading-[1.05]"
        >
          High-Volume Print & Mail.
          <br />
          <span className="text-qrd-accent">Precise.</span> On Schedule.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Statements, bills, and compliance notices — produced with audit-ready
          controls, HIPAA-ready workflows, and shipped on schedule. From data
          file to mailbox.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#quote"
            className="inline-flex items-center px-8 py-3.5 bg-qrd-accent text-white font-semibold rounded-sm hover:bg-accent-hover transition-colors focus-accent text-base"
          >
            Get a Quote
          </a>
          <a
            href="#quote"
            className="inline-flex items-center px-8 py-3.5 border-2 border-ink text-ink font-semibold rounded-sm hover:bg-ink hover:text-warm-white transition-colors focus-accent text-base"
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
