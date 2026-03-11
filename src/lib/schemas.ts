import { z } from "zod/v4";

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company name is required"),
  email: z.email("Valid email is required"),
  phone: z.string().optional(),
  volumeRange: z.enum(["under-5k", "5k-25k", "25k-100k", "100k-500k", "500k-plus"]),
  frequency: z.enum(["one-time", "weekly", "bi-weekly", "monthly", "daily"]),
  notes: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company name is required"),
  email: z.email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
