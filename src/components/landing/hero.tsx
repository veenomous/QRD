import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Envelope, PostmarkWaves } from "@/components/landing/illustrations";

const facts = [
  "24–48 hour turnaround",
  "HIPAA-ready, BAAs signed",
  "A mailing report with every run",
];

export function LandingHero() {
  return (
    <section
      id="top"
      className="relative overflow-x-clip bg-warm-white pt-28 pb-24 md:pt-36 md:pb-32"
    >
      {/* Soft wash of the logo blue behind the photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-12%] h-[38rem] w-[38rem] rounded-full bg-sky-soft/80 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-ink ring-1 ring-ink/10">
            <span className="h-1.5 w-1.5 rounded-full bg-qrd-accent" />
            Full-service letter shop
          </p>

          <h1 className="rise display mt-6 text-[2.75rem] leading-[1.04] text-ink [--delay:80ms] sm:text-6xl lg:text-[4.25rem]">
            You send the file.
            <br />
            <span className="italic text-qrd-accent">We send the mail.</span>
          </h1>

          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-text-muted [--delay:160ms]">
            Qrd Mail prints, folds, inserts, and mails your bills, statements,
            collection letters, and rent notices, usually within 24–48 hours of
            getting your file.
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 [--delay:240ms]">
            <a
              href="#quote"
              className="focus-accent inline-flex h-13 items-center gap-2 rounded-full bg-qrd-accent px-7 text-base font-semibold text-white shadow-[0_12px_30px_-12px_rgba(22,104,214,0.75)] transition-colors hover:bg-accent-hover"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how"
              className="focus-accent rounded-sm text-base font-semibold text-ink underline decoration-ink/25 underline-offset-[6px] transition-colors hover:decoration-ink"
            >
              See how it works
            </a>
          </div>

          <ul className="rise mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-text-muted [--delay:320ms]">
            {facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-qrd-accent" strokeWidth={2.5} />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="rise relative mx-auto w-full max-w-xl [--delay:200ms] lg:max-w-none">
          <PostmarkWaves className="absolute -right-5 -top-9 w-40 text-kraft/60" />
          {/* Kraft sheet peeking out from behind the photo */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] rounded-tl-[6rem] bg-kraft-soft lg:rounded-tl-[9rem]"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-tl-[6rem] lg:aspect-[1/1.02] lg:rounded-tl-[9rem]">
            <Image
              src="/mail-floor.jpg"
              alt="An operator running a mail inserting line, with stacks of printed letters feeding into envelopes"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover object-[38%_50%]"
            />
          </div>
          <div className="letter-in absolute -bottom-12 -left-2 w-[17.5rem] -rotate-3 sm:-left-8 sm:w-80">
            <Envelope />
          </div>
        </div>
      </div>
    </section>
  );
}
