"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormData } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-metadata";

const mailTypeOptions = [
  { value: "bills", label: "Bills and invoices" },
  { value: "statements", label: "Statements" },
  { value: "collections", label: "Collection letters" },
  { value: "rent", label: "Rent bills and notices" },
  { value: "other", label: "Something else" },
];

const volumeOptions = [
  { value: "under-5k", label: "Under 5,000" },
  { value: "5k-25k", label: "5,000 – 25,000" },
  { value: "25k-100k", label: "25,000 – 100,000" },
  { value: "100k-500k", label: "100,000 – 500,000" },
  { value: "500k-plus", label: "500,000+" },
];

const frequencyOptions = [
  { value: "one-time", label: "One-time" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "bi-weekly", label: "Bi-weekly" },
  { value: "monthly", label: "Monthly" },
];

const pillClass =
  "inline-flex items-center rounded-full border border-input bg-white px-4 py-2.5 text-sm text-ink transition-colors hover:border-ink/50 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-warm-white peer-focus-visible:ring-2 peer-focus-visible:ring-qrd-accent/40 peer-focus-visible:ring-offset-2";

const fieldClass = "mt-1.5 h-11 rounded-xl bg-white px-3.5";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [failed, setFailed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      mailTypes: [],
      volumeRange: "5k-25k",
      frequency: "monthly",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitting(true);
    setFailed(false);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
      else setFailed(true);
    } catch {
      setFailed(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        // The form is much taller than this card, so bring it back into view
        ref={(el) => el?.scrollIntoView({ block: "center" })}
        role="status"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="rounded-[1.75rem] bg-white p-12 text-center ring-1 ring-ink/[0.06]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.15 }}
          className="mx-auto mb-4 inline-flex rounded-full bg-success/10 p-4"
        >
          <CheckCircle className="h-8 w-8 text-success" />
        </motion.div>
        <h3 className="display text-2xl text-ink">Quote request received</h3>
        <p className="mt-2 text-text-muted">
          Thank you. We&apos;ll review what you sent and get back to you within
          one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[1.75rem] bg-white p-6 shadow-[0_30px_60px_-40px_rgba(11,34,57,0.4)] ring-1 ring-ink/[0.06] sm:p-9"
    >
      <div className="space-y-8">
        {/* Mail types */}
        <fieldset>
          <legend className="text-base font-semibold text-ink">
            What do you mail?
          </legend>
          <p className="mt-1 text-sm text-text-muted">Pick any that apply.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {mailTypeOptions.map((opt) => (
              <label key={opt.value} className="cursor-pointer">
                <input
                  type="checkbox"
                  value={opt.value}
                  {...register("mailTypes")}
                  className="peer sr-only"
                />
                <span className={pillClass}>{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Volume */}
        <fieldset>
          <legend className="text-base font-semibold text-ink">
            About how many pieces per mailing?
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {volumeOptions.map((opt) => (
              <label key={opt.value} className="cursor-pointer">
                <input
                  type="radio"
                  value={opt.value}
                  {...register("volumeRange")}
                  className="peer sr-only"
                />
                <span className={pillClass}>{opt.label}</span>
              </label>
            ))}
          </div>
          {errors.volumeRange && (
            <p className="mt-1 text-sm text-red-600">{errors.volumeRange.message}</p>
          )}
        </fieldset>

        {/* Frequency */}
        <fieldset>
          <legend className="text-base font-semibold text-ink">
            How often do you mail?
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {frequencyOptions.map((opt) => (
              <label key={opt.value} className="cursor-pointer">
                <input
                  type="radio"
                  value={opt.value}
                  {...register("frequency")}
                  className="peer sr-only"
                />
                <span className={pillClass}>{opt.label}</span>
              </label>
            ))}
          </div>
          {errors.frequency && (
            <p className="mt-1 text-sm text-red-600">{errors.frequency.message}</p>
          )}
        </fieldset>

        {/* Contact Info */}
        <fieldset className="border-t border-border pt-8">
          <legend className="sr-only">Where should we send the quote?</legend>
          <p className="text-base font-semibold text-ink">
            Where should we send the quote?
          </p>
          <div className="mt-4 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="quote-name">Full name</Label>
                <Input
                  id="quote-name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                  className={fieldClass}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="quote-company">Company</Label>
                <Input
                  id="quote-company"
                  autoComplete="organization"
                  aria-invalid={!!errors.company}
                  {...register("company")}
                  className={fieldClass}
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                )}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="quote-email">Work email</Label>
                <Input
                  id="quote-email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                  className={fieldClass}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="quote-phone">
                  Phone <span className="font-normal text-text-muted">(optional)</span>
                </Label>
                <Input
                  id="quote-phone"
                  type="tel"
                  autoComplete="tel"
                  {...register("phone")}
                  className={fieldClass}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="quote-notes">
                Anything else we should know?{" "}
                <span className="font-normal text-text-muted">(optional)</span>
              </Label>
              <Textarea
                id="quote-notes"
                {...register("notes")}
                placeholder="Page counts, inserts, return envelopes, deadlines…"
                className="mt-1.5 rounded-xl bg-white px-3.5 py-2.5"
                rows={3}
              />
            </div>
          </div>
        </fieldset>

        <div>
          <Button
            type="submit"
            disabled={submitting}
            className="h-13 w-full rounded-full bg-qrd-accent text-base font-semibold text-white hover:bg-accent-hover"
          >
            {submitting ? "Sending…" : "Get my quote"}
            {!submitting && <Send className="ml-2 h-4 w-4" />}
          </Button>
          {failed ? (
            <p role="alert" className="mt-3 text-center text-sm text-red-600">
              That didn&apos;t go through. Try again, or email{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          ) : (
            <p className="mt-3 text-center text-sm text-text-muted">
              We&apos;ll email your quote within one business day.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
