"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  variant?: "quote" | "call" | "both";
  title?: string;
  subtitle?: string;
}

export function CTASection({
  variant = "both",
  title = "Ready to Scale Your Mail Operations?",
  subtitle = "Get a custom quote or talk to a mail production specialist about your requirements.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-20">
      {/* Gradient accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-teal/8 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full bg-teal/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-medium text-teal/80">
          Trusted by 150+ companies across 8 industries
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-white/70">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {(variant === "quote" || variant === "both") && (
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
          )}
          {(variant === "call" || variant === "both") && (
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/20 text-white hover:bg-white/10 text-base px-8"
              )}
            >
              <Phone className="mr-2 h-4 w-4" />
              Book a Call
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
