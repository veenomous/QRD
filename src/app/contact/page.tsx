import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/shared/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { CalendarEmbed } from "@/components/shared/calendar-embed";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Qrd Tech. Request a quote, book a call, or ask about our print and mail services.",
  slug: "contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your print and mail requirements."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Book a Call
                </h2>
                <CalendarEmbed />
              </div>

              <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-navy mb-4">
                  Get in Touch Directly
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-sm text-text-muted hover:text-teal transition-colors"
                  >
                    <Mail className="h-5 w-5 text-teal" />
                    {siteConfig.contact.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 text-sm text-text-muted hover:text-teal transition-colors"
                  >
                    <Phone className="h-5 w-5 text-teal" />
                    {siteConfig.contact.phone}
                  </a>
                  <div className="flex items-start gap-3 text-sm text-text-muted">
                    <MapPin className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                    {siteConfig.contact.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
