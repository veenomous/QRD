"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
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
        <h3 className="text-xl font-bold text-navy">Message Sent</h3>
        <p className="mt-2 text-text-muted">
          Thank you! We&apos;ll get back to you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="contact-name">Full Name *</Label>
            <Input
              id="contact-name"
              {...register("name")}
              placeholder="John Smith"
              className="mt-1"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="contact-company">Company *</Label>
            <Input
              id="contact-company"
              {...register("company")}
              placeholder="Acme Corp"
              className="mt-1"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-500">
                {errors.company.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="contact-email">Email *</Label>
            <Input
              id="contact-email"
              type="email"
              {...register("email")}
              placeholder="john@acme.com"
              className="mt-1"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="contact-phone">Phone</Label>
            <Input
              id="contact-phone"
              type="tel"
              {...register("phone")}
              placeholder="(555) 000-0000"
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="contact-subject">Subject *</Label>
          <Input
            id="contact-subject"
            {...register("subject")}
            placeholder="What can we help with?"
            className="mt-1"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="contact-message">Message *</Label>
          <Textarea
            id="contact-message"
            {...register("message")}
            placeholder="Tell us about your project, volume, and requirements..."
            className="mt-1"
            rows={5}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-teal text-white hover:bg-teal-hover"
          >
            {submitting ? "Sending..." : "Send Message"}
            {!submitting && <Send className="ml-2 h-4 w-4" />}
          </Button>
          <p className="mt-3 text-center text-xs text-text-muted">
            We&apos;ll respond within 1 business day.
          </p>
        </div>
      </div>
    </form>
  );
}
