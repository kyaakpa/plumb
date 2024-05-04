import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Email } from "./email";

export async function OPTIONS(req) {
  const response = NextResponse.next();
  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://plumb-8o6elneiw-kyaakpas-projects.vercel.app"
  );
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
export async function POST(req) {
  const form = await req.json();
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  const firstName = form.firstName;
  const lastName = form.lastName;
  const description = form.description;
  const phone = form.phone;
  const email = form.email;
  try {
    await resend.emails.send({
      from: `${firstName + " " + lastName} <onboarding@resend.dev>`,
      to: ["kyaakpalama@webtion.org"],
      subject: "We have received your message",
      react: (
        <Email
          firstName={firstName}
          lastName={lastName}
          description={description}
          phone={phone}
          email={email}
          updatedDate={new Date()}
        />
      ),
    });
    return NextResponse.json({ message: "ok" });
  } catch (error) {
    return NextResponse.json({ message: "failed" });
  }
}
