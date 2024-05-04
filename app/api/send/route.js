import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Email } from "./email";

export async function POST(req) {
  const form = await req.json();
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  const firstName = form.firstName;
  const lastName = form.lastName;
  const description = form.description;
  const phone = form.phone;
  const email = form.email;

  // Set the CORS headers to allow requests from your frontend domain
  const headers = {
    "Access-Control-Allow-Origin": "https://www.markjahern.com",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  try {
    await resend.emails.send({
      from: `${firstName + " " + lastName} <markjahern.com>`,
      to: ["kyaakpalama@gmail.com"],
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
    return NextResponse.json({ message: "ok" }, { headers });
  } catch (error) {
    return NextResponse.json({ message: "failed" }, { headers });
  }
}
