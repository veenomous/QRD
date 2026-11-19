import Image from "next/image";
import Link from "next/link";
import { LandingFooter } from "@/components/landing/footer";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site-metadata";

export const metadata = buildMetadata({
  title: "Privacy policy",
  description:
    "What Qrd Mail collects through this website, how we use it, and how to ask us to change or delete it.",
  slug: "privacy",
});

const UPDATED = "November 18, 2026";

export default function PrivacyPage() {
  const { phone, phoneHref, email, address } = siteConfig.contact;
  const linkClass =
    "focus-accent rounded-sm font-medium text-ink underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink";

  return (
    <>
      <header className="bg-warm-white">
        <nav
          aria-label="Main"
          className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:h-24"
        >
          <Link href="/" className="focus-accent rounded-sm">
            <Image
              src="/logo-qrdmail.png"
              alt="Qrd Mail"
              width={235}
              height={72}
              className="h-14 w-auto md:h-18"
              priority
            />
          </Link>
          <Link
            href="/#quote"
            className="focus-accent inline-flex h-10 items-center rounded-full bg-ink px-5 text-sm font-semibold text-warm-white transition-colors hover:bg-qrd-accent"
          >
            Get a quote
          </Link>
        </nav>
      </header>

      <main className="bg-warm-white pb-24 pt-10 md:pb-32 md:pt-16">
        <article className="mx-auto max-w-2xl px-6">
          <p className="text-sm font-semibold text-qrd-accent">Privacy</p>
          <h1 className="display mt-3 text-4xl leading-[1.1] text-ink md:text-5xl">
            Privacy policy
          </h1>
          <p className="mt-4 text-sm text-text-muted">Last updated {UPDATED}</p>

          <div className="mt-10 space-y-10 text-lg leading-relaxed text-text-muted [&_li]:mt-2 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
            <section>
              <h2 className="display text-2xl text-ink">Who we are</h2>
              <p>
                {siteConfig.name} is a service of Qrd Tech, a letter shop at{" "}
                {address.street}, {address.city}, {address.region}{" "}
                {address.postalCode}. This policy covers this website only.
              </p>
            </section>

            <section>
              <h2 className="display text-2xl text-ink">What we collect</h2>
              <ul>
                <li>
                  <strong className="font-semibold text-ink">What you tell us in the quote form:</strong>{" "}
                  your name, company, work email, phone number if you give
                  one, what you mail, roughly how much and how often, and any
                  notes you add.
                </li>
                <li>
                  <strong className="font-semibold text-ink">How you reached us:</strong>{" "}
                  the page that linked to this site and any campaign tags in
                  the link you followed. We save these with your quote request.
                </li>
                <li>
                  <strong className="font-semibold text-ink">Visit statistics:</strong>{" "}
                  pages viewed, the referring site, and general browser,
                  device, and country information. These are counted without
                  cookies and are not tied to you personally.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="display text-2xl text-ink">How we use it</h2>
              <ul>
                <li>To prepare your quote and reply to you.</li>
                <li>To follow up about our mailing services.</li>
                <li>To see which pages and campaigns bring people to the site.</li>
              </ul>
              <p>
                We may use automated tools, including AI, to help draft our
                reply to your request.
              </p>
              <p>We do not sell your information.</p>
            </section>

            <section>
              <h2 className="display text-2xl text-ink">Who we share it with</h2>
              <p>
                We share it only with the companies that run this website and
                our email and lead-tracking software, and only so they can
                provide those services to us. We may also disclose it if the
                law requires us to.
              </p>
            </section>

            <section>
              <h2 className="display text-2xl text-ink">Your customers&apos; data</h2>
              <p>
                Please don&apos;t send customer or patient data through this
                website. Files you send us for printing and mailing are
                handled under our service agreement with you, not under this
                policy.
              </p>
            </section>

            <section>
              <h2 className="display text-2xl text-ink">How long we keep it</h2>
              <p>
                We keep quote requests for as long as we need them to respond
                and to maintain our business records. You can ask us to delete
                yours at any time.
              </p>
            </section>

            <section>
              <h2 className="display text-2xl text-ink">Your choices</h2>
              <p>
                To see, correct, or delete the information we hold about you,
                or to stop follow-up emails, email{" "}
                <a href={`mailto:${email}`} className={linkClass}>
                  {email}
                </a>{" "}
                or call{" "}
                <a href={phoneHref} className={`${linkClass} whitespace-nowrap`}>
                  {phone}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="display text-2xl text-ink">Changes</h2>
              <p>
                If we change this policy, we will post the new version here
                and update the date at the top.
              </p>
            </section>
          </div>
        </article>
      </main>

      <LandingFooter />
    </>
  );
}
