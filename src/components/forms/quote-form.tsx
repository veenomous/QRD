"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormData } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const volumeOptions = [
  { value: "under-5k", label: "Under 5,000" },
  { value: "5k-25k", label: "5,000 – 25,000" },
  { value: "25k-100k", label: "25,000 – 100,000" },
  { value: "100k-500k", label: "100,000 – 500,000" },
  { value: "500k-plus", label: "500,000+" },
];

const frequencyOptions = [
  { value: "one-time", label: "One-Time" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "bi-weekly", label: "Bi-Weekly" },
  { value: "monthly", label: "Monthly" },
];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      volumeRange: "5k-25k",
      frequency: "monthly",
    },
  });

  const volumeRange = watch("volumeRange");
  const frequency = watch("frequency");

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // Handle error
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="rounded-xl border border-border bg-white p-12 text-center shadow-sm"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.15 }}
          className="mx-auto mb-4 inline-flex rounded-full bg-success/10 p-4"
        >
          <CheckCircle className="h-8 w-8 text-success" />
        </motion.div>
        <h3 className="text-xl font-bold text-navy">Quote Request Received</h3>
        <p className="mt-2 text-text-muted">
          Thank you! Our team will review your requirements and get back to you
          within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="space-y-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-navy">Contact Information</h3>
          <div className="mt-4 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="quote-name">Full Name *</Label>
                <Input
                  id="quote-name"
                  {...register("name")}
                  placeholder="John Smith"
                  className="mt-1"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="quote-company">Company *</Label>
                <Input
                  id="quote-company"
                  {...register("company")}
                  placeholder="Acme Corp"
                  className="mt-1"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
                )}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="quote-email">Email *</Label>
                <Input
                  id="quote-email"
                  type="email"
                  {...register("email")}
                  placeholder="john@acme.com"
                  className="mt-1"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="quote-phone">Phone</Label>
                <Input
                  id="quote-phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="(555) 000-0000"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Volume */}
        <div>
          <h3 className="text-lg font-semibold text-navy">Pieces Per Run *</h3>
          <p className="mt-1 text-sm text-text-muted">
            Approximately how many pieces per run?
          </p>
          <RadioGroup
            value={volumeRange}
            onValueChange={(v) => setValue("volumeRange", v as QuoteFormData["volumeRange"])}
            className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2"
          >
            {volumeOptions.map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-surface"
              >
                <RadioGroupItem value={opt.value} />
                <span className="text-sm">{opt.label}</span>
              </label>
            ))}
          </RadioGroup>
          {errors.volumeRange && (
            <p className="mt-1 text-sm text-red-500">{errors.volumeRange.message}</p>
          )}
        </div>

        {/* Frequency */}
        <div>
          <h3 className="text-lg font-semibold text-navy">Frequency *</h3>
          <p className="mt-1 text-sm text-text-muted">How often do you mail?</p>
          <RadioGroup
            value={frequency}
            onValueChange={(v) => setValue("frequency", v as QuoteFormData["frequency"])}
            className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3"
          >
            {frequencyOptions.map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-surface"
              >
                <RadioGroupItem value={opt.value} />
                <span className="text-sm">{opt.label}</span>
              </label>
            ))}
          </RadioGroup>
          {errors.frequency && (
            <p className="mt-1 text-sm text-red-500">{errors.frequency.message}</p>
          )}
        </div>

        {/* Notes */}
        <div>
          <Label htmlFor="quote-notes">Additional Notes</Label>
          <Textarea
            id="quote-notes"
            {...register("notes")}
            placeholder="Any details about your mail requirements..."
            className="mt-1"
            rows={4}
          />
        </div>

        <div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-teal text-white hover:bg-teal-hover"
          >
            {submitting ? "Submitting..." : "Request a Quote"}
            {!submitting && <Send className="ml-2 h-4 w-4" />}
          </Button>
          <p className="mt-3 text-center text-xs text-text-muted">
            We&apos;ll email you a custom proposal within 1 business day.
          </p>
        </div>
      </div>
    </form>
  );
}
