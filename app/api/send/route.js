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
        user: "webtion6@gmail.com",
        pass: "cplv ggcd ammb zinj",
      },
    });

    const mailOptions = {
      from: `${firstName + " " + lastName}`,
      to: "kyaakpalama@gmail.com",
      subject: "You have a new email from your website",
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
    return NextResponse.json({ message: "failed" });
  }
}
