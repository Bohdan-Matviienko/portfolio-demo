// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? undefined);

const TO   = process.env.CONTACT_TO;                       // куди отримувати листи
const FROM = process.env.CONTACT_FROM ?? "onboarding@resend.dev"; // від кого (для старту підійде sandbox)

export async function POST(req: Request) {
  try {
    // Перевіримо конфіг
    if (!process.env.RESEND_API_KEY || !TO) {
      console.error("Missing RESEND_API_KEY or CONTACT_TO env");
      return NextResponse.json({ ok: false, error: "Server not configured" }, { status: 500 });
    }

    const body = (await req.json().catch(() => ({}))) as {
      name?: string;
      email?: string;
      message?: string;
      source?: string;
      hp?: string; // honeypot
    };

    const name    = body.name ?? "";
    const email   = body.email ?? "";
    const message = body.message ?? "";
    const source  = body.source ?? "contact";
    const hp      = body.hp ?? "";

    // honeypot проти ботів
    if (hp) return NextResponse.json({ ok: true });

    await resend.emails.send({
      from: FROM,
      to: [TO],
      subject: `New message (${source})`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      // ВАЖЛИВО: у Node SDK назва поля camelCase
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact api error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
