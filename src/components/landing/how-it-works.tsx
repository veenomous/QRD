import { AnimatedSection } from "@/components/shared/animated-section";

const steps = [
  {
    title: "Send us your file",
    description:
      "Upload a CSV, PDF, or XML over SFTP or through our secure portal. Use your own letter template, or have us set one up.",
  },
  {
    title: "Approve the proof",
    description:
      "We check every address against USPS records, run a sample, and send it to you. Nothing prints until you sign off.",
  },
  {
    title: "We print, insert, and mail",
    description:
      "Each letter is barcode-matched to its envelope, presorted for the lowest postage, and handed to USPS. You get a report of what mailed and when.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection className="max-w-2xl">
          <p className="text-sm font-semibold text-qrd-accent">How it works</p>
          <h2 className="display mt-3 text-4xl leading-[1.1] text-ink md:text-5xl">
            From your file to their mailbox in three steps.
          </h2>
        </AnimatedSection>

        <div className="relative mt-16">
          {/* The route the mail takes, drawn behind the step numbers */}
          <svg
            aria-hidden="true"
            viewBox="0 0 900 48"
            preserveAspectRatio="none"
            fill="none"
            className="absolute inset-x-0 top-1 hidden h-12 w-full text-ink/25 md:block"
          >
            <path
              d="M24 24 C 130 -8, 230 56, 336 24 S 540 -8, 648 24 S 800 50, 880 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 7"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-10">
            {steps.map((step, i) => (
              <li key={step.title}>
                <AnimatedSection delay={i * 0.12}>
                  <span className="display grid h-14 w-14 place-items-center rounded-full bg-white text-2xl text-qrd-accent shadow-[0_10px_24px_-14px_rgba(11,34,57,0.4)] ring-1 ring-ink/[0.06]">
                    {i + 1}
                  </span>
                  <h3 className="display mt-6 text-2xl text-ink">{step.title}</h3>
                  <p className="mt-3 max-w-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </AnimatedSection>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
