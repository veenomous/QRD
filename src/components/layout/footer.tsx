import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { services } from "@/data/navigation";
import { industries } from "@/data/industries";
import { siteConfig } from "@/data/site-metadata";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold">Qrd Tech</span>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
              <span className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                {siteConfig.contact.address}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-white">Industries</h3>
            <ul className="mt-4 space-y-2">
              {industries.map((ind) => (
                <li key={ind.slug} className="text-sm text-white/60">
                  {ind.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/security-compliance"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/tracking-reporting"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Tracking & Reporting
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
