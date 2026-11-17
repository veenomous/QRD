import Image from "next/image";
import { siteConfig } from "@/data/site-metadata";

const links = [
  { href: "#mail", label: "What we mail" },
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why Qrd Tech" },
  { href: "#quote", label: "Get a quote" },
];

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <Image
              src="/logo2.png"
              alt="Qrd Tech"
              width={140}
              height={43}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              A letter shop for bills, statements, collection letters, and rent
              notices.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-accent rounded-sm font-medium text-ink/75 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="focus-accent rounded-sm transition-colors hover:text-ink"
          >
            {siteConfig.contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
