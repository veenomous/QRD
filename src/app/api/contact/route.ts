import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas";

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "info@qrdtech.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const data = result.data;

    const emailBody = `
New Contact Form Submission

Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone ?? "Not provided"}
Subject: ${data.subject}

Message:
${data.message}
    `.trim();

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Qrd Tech Website <noreply@qrdtech.com>",
        to: [NOTIFY_EMAIL],
        subject: `Contact: ${data.subject} - ${data.company}`,
        text: emailBody,
      });
    } else {
      console.log("Contact form submission (no RESEND_API_KEY configured):");
      console.log(emailBody);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
