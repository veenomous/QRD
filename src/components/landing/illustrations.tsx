import { Home, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

/** Wavy cancellation lines, like a postmark. */
export function PostmarkWaves({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" fill="none" aria-hidden="true" className={className}>
      {[6, 18, 30, 42, 54].map((y) => (
        <path
          key={y}
          d={`M2 ${y} q 12.25 -8 24.5 0 t 24.5 0 t 24.5 0 t 24.5 0 t 24.5 0 t 24.5 0 t 24.5 0 t 24.5 0`}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

// Bar states of an Intelligent Mail barcode: Full, Ascender, Descender, Tracker
const IMB_BARS = "ATDFTADFATTDAFDTFATDDAFTTAFDTADFFTDATADTFDATFTADDFATTFADTDAFTADFT";
const IMB_INSET: Record<string, string> = {
  F: "",
  A: "mb-1",
  D: "mt-1",
  T: "my-1",
};

/** A windowed #10 envelope, stamped and postmarked. */
export function Envelope({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative aspect-[9.5/4.4] rounded-xl bg-white p-4 shadow-[0_24px_50px_-18px_rgba(11,34,57,0.35)] ring-1 ring-ink/5",
        className
      )}
    >
      {/* Return address */}
      <div className="space-y-1.5">
        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-ink/70">
          Your company
        </p>
        <span className="block h-1 w-16 rounded-full bg-ink/15" />
        <span className="block h-1 w-12 rounded-full bg-ink/15" />
      </div>

      {/* Stamp and postmark */}
      <div className="absolute right-4 top-4 flex items-center">
        <PostmarkWaves className="-mr-3 w-16 text-ink/35" />
        <div className="grid h-11 w-9 place-items-center rounded-[3px] border-[3px] border-dotted border-white bg-sky">
          <Mail className="h-4 w-4 text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Address window */}
      <div className="absolute bottom-4 left-4 w-[64%] space-y-1.5 rounded-md bg-sky-soft/60 px-3 py-2.5 ring-1 ring-inset ring-ink/10">
        <span className="block h-1.5 w-24 rounded-full bg-ink/70" />
        <span className="block h-1 w-32 rounded-full bg-ink/30" />
        <span className="block h-1 w-20 rounded-full bg-ink/30" />
        <div className="flex h-3 gap-[1.5px] overflow-hidden pt-0.5">
          {IMB_BARS.split("").map((bar, i) => (
            <span key={i} className={cn("w-[1.5px] shrink-0 bg-ink/70", IMB_INSET[bar])} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Line({ className }: { className?: string }) {
  return <span className={cn("block h-1 rounded-full bg-ink/15", className)} />;
}

function Row({ label, amount }: { label: string; amount: string }) {
  return (
    <div className="flex items-center justify-between">
      <Line className={label} />
      <Line className={cn("bg-ink/30", amount)} />
    </div>
  );
}

export type MailSheetVariant = "bill" | "statement" | "collection" | "rent";

/** A miniature of the mail piece, drawn in skeleton lines. */
export function MailSheet({ variant }: { variant: MailSheetVariant }) {
  return (
    <div aria-hidden="true" className="relative h-36 w-28">
      {/* Second sheet underneath */}
      <div className="absolute inset-0 translate-x-1.5 translate-y-1 rotate-[5deg] rounded-md bg-white/70 ring-1 ring-ink/5" />
      <div className="relative flex h-full -rotate-2 flex-col gap-2 rounded-md bg-white p-3 shadow-[0_10px_24px_-12px_rgba(11,34,57,0.35)] ring-1 ring-ink/5">
        {variant === "bill" && (
          <>
            <div className="flex items-center justify-between">
              <span className="block h-2 w-6 rounded-sm bg-qrd-accent" />
              <Line className="w-8" />
            </div>
            <Line className="mt-1 w-full" />
            <Line className="w-4/5" />
            <Line className="w-3/5" />
            <div className="mt-1 space-y-1 rounded bg-sky-soft p-1.5">
              <Line className="w-6 bg-ink/25" />
              <span className="block h-2 w-10 rounded-sm bg-ink/70" />
            </div>
            <div className="mt-auto border-t border-dashed border-ink/30 pt-2">
              <Row label="w-8" amount="w-5 h-1.5" />
            </div>
          </>
        )}

        {variant === "statement" && (
          <>
            <span className="block h-2 w-10 rounded-sm bg-ink/70" />
            <Line className="w-14" />
            <div className="mt-1.5 space-y-2">
              <Row label="w-12" amount="w-4" />
              <Row label="w-9" amount="w-5" />
              <Row label="w-14" amount="w-4" />
              <Row label="w-10" amount="w-5" />
              <Row label="w-12" amount="w-4" />
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-ink/15 pt-2">
              <Line className="w-6 bg-ink/40" />
              <span className="block h-1.5 w-7 rounded-full bg-qrd-accent" />
            </div>
          </>
        )}

        {variant === "collection" && (
          <>
            <div className="flex items-center justify-between">
              <Line className="w-10 bg-ink/50" />
              <Line className="w-5" />
            </div>
            <span className="mt-1.5 block h-2.5 w-16 rounded-sm bg-ink/80" />
            <div className="mt-1 space-y-1.5">
              <Line className="w-full" />
              <Line className="w-11/12" />
              <Line className="w-full" />
              <Line className="w-4/5" />
              <Line className="w-2/3" />
            </div>
            <svg viewBox="0 0 48 14" fill="none" className="mt-auto h-3.5 w-12 text-qrd-accent">
              <path
                d="M2 10c4-8 7-8 8-2s4 5 7-1 5-4 6 1 5 3 8-2 6-3 15 1"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </>
        )}

        {variant === "rent" && (
          <>
            <div className="flex items-center gap-1.5">
              <Home className="h-3.5 w-3.5 text-qrd-accent" strokeWidth={2.2} />
              <Line className="w-10 bg-ink/50" />
            </div>
            <div className="mt-1.5 space-y-2">
              <Row label="w-9" amount="w-5" />
              <Row label="w-12" amount="w-4" />
              <Row label="w-7" amount="w-4" />
            </div>
            <div className="mt-1 flex items-center justify-between rounded bg-kraft-soft p-1.5">
              <Line className="w-6 bg-ink/30" />
              <span className="block h-2 w-7 rounded-sm bg-ink/70" />
            </div>
            <div className="mt-auto space-y-1.5">
              <Line className="w-full" />
              <Line className="w-3/4" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
