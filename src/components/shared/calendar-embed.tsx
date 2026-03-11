interface CalendarEmbedProps {
  className?: string;
}

export function CalendarEmbed({ className }: CalendarEmbedProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-8 text-center ${className ?? ""}`}
    >
      <p className="text-text-muted">
        Calendar booking widget will be embedded here.
      </p>
      <p className="mt-2 text-sm text-text-muted">
        Connect Calendly, Cal.com, or your preferred scheduling tool.
      </p>
    </div>
  );
}
