import { NextResponse } from "next/server";
import { Resend } from "resend";
import { quoteFormSchema, type QuoteFormData } from "@/lib/schemas";
import {
  frequencyOptions,
  mailTypeOptions,
  optionLabel,
  volumeOptions,
} from "@/data/quote-options";

// The marketing platform drafts a reply before it answers, so allow for that.
export const maxDuration = 60;

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "info@qrdtech.com";

// Light per-instance rate limit: 5 submissions per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > LIMIT;
}

const text = (v: unknown, max: number) =>
  typeof v === "string" && v.trim() ? v.trim().slice(0, max) : undefined;

type Tracking = {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
  landingPage?: string;
};

function summarize(data: QuoteFormData) {
  const mailTypes = data.mailTypes?.length
    ? data.mailTypes.map((t) => optionLabel(mailTypeOptions, t)).join(", ")
    : "Not specified";

  return [
    "Quote request from qrdmail.com",
    `Mails: ${mailTypes}`,
    `Pieces per mailing: ${optionLabel(volumeOptions, data.volumeRange)}`,
    `Frequency: ${optionLabel(frequencyOptions, data.frequency)}`,
    `Notes: ${data.notes?.trim() || "None"}`,
  ].join("\n");
}

// Hands the lead to the marketing platform, which tracks it and drafts the reply.
async function sendToPlatform(
  appUrl: string,
  secret: string,
  data: QuoteFormData,
  tracking: Tracking
) {
  try {
    const res = await fetch(`${appUrl}/api/webhooks/inbound`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-webhook-secret": secret },
      body: JSON.stringify({
        projectSlug: process.env.INBOUND_PROJECT_SLUG || "qrd",
        message: summarize(data),
        contactName: data.name,
        contactEmail: data.email,
        contactPhone: data.phone?.trim() || undefined,
        company: data.company,
        source: "website",
        ...tracking,
      }),
      signal: AbortSignal.timeout(50_000),
    });
    if (!res.ok) {
      console.error("quote form: platform returned", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("quote form: platform unreachable", err);
    return false;
  }
}

// Optional plain email copy, used only when a Resend key is set.
async function sendEmail(apiKey: string, data: QuoteFormData) {
  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Qrd Mail Website <noreply@qrdmail.com>",
      to: [NOTIFY_EMAIL],
      replyTo: data.email,
      subject: `Quote request: ${data.company}`,
      text: [
        `Name: ${data.name}`,
        `Company: ${data.company}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone?.trim() || "Not provided"}`,
        "",
        summarize(data),
      ].join("\n"),
    });
    if (error) {
      console.error("quote form: email failed", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("quote form: email failed", err);
    return false;
  }
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend it worked.
  if (text(body.company_website, 10)) return NextResponse.json({ success: true });

  const result = quoteFormSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }
  const data = result.data;

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const t = (body.tracking ?? {}) as Record<string, unknown>;
  const tracking: Tracking = {
    utmSource: text(t.utmSource, 200),
    utmMedium: text(t.utmMedium, 200),
    utmCampaign: text(t.utmCampaign, 200),
    referrer: text(t.referrer, 500),
    landingPage: text(t.landingPage, 500),
  };

  const appUrl = process.env.INBOUND_APP_URL?.replace(/\/$/, "");
  const secret = process.env.INBOUND_WEBHOOK_SECRET;
  const resendKey = process.env.RESEND_API_KEY;

  const deliveries: Promise<boolean>[] = [];
  if (appUrl && secret) deliveries.push(sendToPlatform(appUrl, secret, data, tracking));
  if (resendKey) deliveries.push(sendEmail(resendKey, data));

  if (deliveries.length === 0) {
    // Never tell a visitor "received" when the lead has nowhere to go.
    if (process.env.NODE_ENV === "production") {
      console.error("quote form: INBOUND_APP_URL / INBOUND_WEBHOOK_SECRET are not set");
      return NextResponse.json({ error: "The form isn't connected yet" }, { status: 500 });
    }
    console.log("Quote form submission (no delivery configured):");
    console.log(summarize(data));
    return NextResponse.json({ success: true });
  }

  const delivered = (await Promise.all(deliveries)).some(Boolean);
  if (!delivered) {
    return NextResponse.json({ error: "We couldn't send that just now" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
