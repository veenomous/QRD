"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const stats = [
  { label: "PIECES MAILED ANNUALLY", value: "10M+" },
  { label: "PRODUCTION ACCURACY", value: "99.9%" },
  { label: "STANDARD TURNAROUND", value: "24-48HR" },
  { label: "INDUSTRIES SERVED", value: "8+" },
  { label: "CLIENT RETENTION", value: "98%" },
  { label: "HIPAA-READY WORKFLOWS", value: "SOC 2" },
];

function StatsMarquee() {
  return (
    <Marquee
      className="border-white/10 border-y bg-navy/60 py-3 backdrop-blur-sm [--duration:35s] [--gap:2.5rem]"
      pauseOnHover
      repeat={4}
    >
      {stats.map((stat) => (
        <div
          className="flex items-center gap-3 whitespace-nowrap"
          key={stat.label}
        >
          <span className="font-bold font-mono text-teal text-sm tracking-wide">
            {stat.value}
          </span>
          <span className="font-medium font-mono text-xs text-white/60 uppercase tracking-[0.15em]">
            {stat.label}
          </span>
        </div>
      ))}
    </Marquee>
  );
}

export function HomeHero() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-start justify-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Mailing.png"
          alt="High-volume mail production facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
      </div>

      {/* Stats marquee */}
      <div className="relative z-10 w-full">
        <StatsMarquee />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 pb-12 pt-8 sm:px-8 sm:pb-20 lg:px-16 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:gap-12">
            {/* Left: headline + CTA */}
            <div className="w-full space-y-6 sm:w-3/5">
              <h1 className="font-bold text-4xl text-white leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                High-Volume{" "}
                <span className="text-teal">Print & Mail</span>
                <br />
                <span className="text-white">— On Schedule, Every Time</span>
              </h1>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/pricing"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-teal text-white hover:bg-teal-hover text-base px-8"
                  )}
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center rounded-lg border border-white/30 bg-transparent px-8 text-base font-medium text-white transition-all hover:bg-white/10 h-9"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Book a Call
                </Link>
              </div>
            </div>

            {/* Right: description */}
            <div className="w-full sm:w-2/5">
              <p className="text-base text-teal/90 italic sm:text-right md:text-xl leading-relaxed">
                Statements, bills, and compliance notices — produced with
                audit-ready controls, HIPAA-ready workflows, and shipped on
                schedule. From data file to mailbox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
