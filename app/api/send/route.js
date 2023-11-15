import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  const form = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);
  const name = form.name;
  const desc = form.desc;
  const phone = form.phone;
  const email = form.email;
  try {
    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ["soheatshrestha@gmail.com"],
      subject: "We have received your message",
      html: `
      <p>Name: ${name}</p>
      <p>Phone: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Description: ${desc}</p>
      `,
    });
    return NextResponse.json({ message: "ok" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
