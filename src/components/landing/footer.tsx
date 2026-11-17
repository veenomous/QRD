import Image from "next/image";
import { siteConfig } from "@/data/site-metadata";

export function LandingFooter() {
  return (
    <footer className="bg-ink py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/logo2.png"
              alt="Qrd Tech"
              width={120}
              height={34}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-3 text-sm text-warm-white/50 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-white/40 mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-warm-white/70">
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.address}</p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-white/40 mb-4">
              Ready to Start?
            </h3>
            <div className="space-y-3">
              <a
                href="#quote"
                className="inline-block text-sm text-warm-white/70 hover:text-warm-white transition-colors"
              >
                Request a Quote &rarr;
              </a>
              <br />
              <a
                href="#quote"
                className="inline-block text-sm text-warm-white/70 hover:text-warm-white transition-colors"
              >
                Book a Call &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-warm-white/10 pt-8">
          <p className="text-xs text-warm-white/30">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
