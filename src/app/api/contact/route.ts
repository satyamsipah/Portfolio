import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "satyam.sipah12@gmail.com";

// Simple in-memory rate limiting (resets on cold start; fine for low-volume portfolio)
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;
const requests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userRequests = requests.get(ip) || [];
  const recentRequests = userRequests.filter(
    (t) => now - t < RATE_LIMIT_WINDOW
  );
  if (recentRequests.length >= RATE_LIMIT_MAX) return true;
  recentRequests.push(now);
  requests.set(ip, recentRequests);
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || name.length > 100) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    if (!isValidEmail(email) || email.length > 150) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (typeof message !== "string" || message.length > 2000) {
      return NextResponse.json(
        { error: "Message too long (max 2000 chars)" },
        { status: 400 }
      );
    }

    // Send email
    if (!process.env.RESEND_API_KEY) {
      console.warn(
        "RESEND_API_KEY not configured. Message logged but not sent:",
        { name, email, message }
      );
      return NextResponse.json({
        success: true,
        note: "Logged (no email service configured)"
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; padding: 24px;">
          <h2 style="color: #3B82F6; margin-bottom: 16px;">New message from your portfolio</h2>
          <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(message)}</div>
          <p style="color: #888; font-size: 12px; margin-top: 24px;">Sent via satyam-portfolio-alpha.vercel.app</p>
        </div>
      `
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
