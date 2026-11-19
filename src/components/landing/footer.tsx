import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-metadata";

// Rooted at "/" so they also work from the privacy page
const links = [
  { href: "/#mail", label: "What we mail" },
  { href: "/#how", label: "How it works" },
  { href: "/#why", label: "Why Qrd Mail" },
  { href: "/#quote", label: "Get a quote" },
];

export function LandingFooter() {
  const { phone, phoneHref, email, address } = siteConfig.contact;

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Image
              src="/logo-qrdmail.png"
              alt="Qrd Mail"
              width={209}
              height={64}
              className="h-16 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              A letter shop for bills, statements, collection letters, and rent
              notices.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col items-start gap-3 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-accent rounded-sm font-medium text-ink/75 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <address className="flex flex-col items-start gap-3 text-sm not-italic text-text-muted">
            <a
              href={phoneHref}
              className="focus-accent rounded-sm font-medium text-ink/75 transition-colors hover:text-ink"
            >
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="focus-accent rounded-sm font-medium text-ink/75 transition-colors hover:text-ink"
            >
              {email}
            </a>
            <p className="leading-relaxed">
              {address.street}
              <br />
              {address.city}, {address.region} {address.postalCode}
            </p>
          </address>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-border pt-6 text-sm text-text-muted">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}, a service of
            Qrd Tech. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="focus-accent rounded-sm transition-colors hover:text-ink"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
