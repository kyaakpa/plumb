import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Email } from "./email";
import cors from "cors";

// Initialize CORS middleware
const corsMiddleware = cors({
  origin: "*", // Allow requests from all origins (you may want to restrict this in production)
  methods: ["POST"], // Allow only POST requests
  allowedHeaders: ["Content-Type"], // Allow only specific headers
});

export default async function handler(req, res) {
  // Apply CORS middleware
  await corsMiddleware(req, res);

  if (req.method === "POST") {
    const form = await req.json();
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
    const { firstName, lastName, description, phone, email } = form;
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
  } else {
    return NextResponse.error(new Error("Method Not Allowed"), 405);
  }
}
