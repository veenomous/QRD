import { ClipboardCheck, MailCheck, PiggyBank, Printer, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { PostmarkWaves } from "@/components/landing/illustrations";

const benefits = [
  {
    icon: Printer,
    title: "No print room to run",
    description:
      "No printers to lease, no toner to stock, and nobody pulled off their real job to stuff envelopes at month-end.",
  },
  {
    icon: MailCheck,
    title: "The right letter in the right envelope",
    description:
      "Every page is barcode-matched to its envelope, so one customer's statement never lands in another's mailbox.",
  },
  {
    icon: PiggyBank,
    title: "Lower postage, fewer returns",
    description:
      "We clean your address list and presort the mail before it goes out, so you pay less per piece and less of it comes back.",
  },
  {
    icon: ClipboardCheck,
    title: "Proof it went out",
    description:
      "Each run comes with a report of what mailed and when, ready for an auditor, a client, or a dispute.",
  },
];

const stats = [
  { value: "10M+", label: "pieces mailed a year" },
  { value: "99.9%", label: "production accuracy" },
  { value: "24–48 hr", label: "standard turnaround" },
];

export function WhyQrd() {
  return (
    <section id="why" className="scroll-mt-20 bg-surface px-3 pb-3 md:px-6 md:pb-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink py-20 md:rounded-[2.75rem] md:py-28">
        <PostmarkWaves className="absolute -right-10 top-10 w-72 text-sky/15" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <AnimatedSection>
              <p className="text-sm font-semibold text-sky">Why hand it off</p>
              <h2 className="display mt-3 text-4xl leading-[1.1] text-warm-white md:text-5xl">
                Close the print room. Keep the mail going out.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-warm-white/70">
                Mailing is a second job nobody on your team signed up for. We
                take over the printing, the stuffing, and the postage, and you
                get the time back.
              </p>

              <dl className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-6 border-t border-warm-white/15 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-1.5">
                    <dt className="text-sm leading-snug text-warm-white/60">
                      {stat.label}
                    </dt>
                    <dd className="display whitespace-nowrap text-3xl text-sky md:text-4xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </AnimatedSection>

            <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {benefits.map((benefit, i) => (
                <li key={benefit.title}>
                  <AnimatedSection delay={0.08 * i}>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-warm-white/10 text-sky">
                      <benefit.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-warm-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-warm-white/65">
                      {benefit.description}
                    </p>
                  </AnimatedSection>
                </li>
              ))}
            </ul>
          </div>

          <AnimatedSection className="mt-16 flex items-start gap-3 border-t border-warm-white/15 pt-8 text-warm-white/70">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky" strokeWidth={1.75} />
            <p className="max-w-3xl leading-relaxed">
              Your files hold names, balances, and sometimes health records, and
              we treat them that way: HIPAA-ready workflows, signed BAAs, and
              SOC 2 compliant operations.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
