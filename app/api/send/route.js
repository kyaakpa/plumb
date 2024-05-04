import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const form = await req.json();
  const firstName = form.firstName;
  const lastName = form.lastName;
  const description = form.description;
  const phone = form.phone;
  const email = form.email;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pallaw020@gmail.com",
        pass: "Deathend124",
      },
    });

    // Define the email options
    const mailOptions = {
      from: `${firstName + " " + lastName} <your-email@example.com>`,
      to: "kyaakpalama@gmail.com",
      subject: "We have received your message",
      text: `
        Name: ${firstName} ${lastName}
        Description: ${description}
        Phone: ${phone}
        Email: ${email}
        Date: ${new Date()}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "failed" });
  }
}
