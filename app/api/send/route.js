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
      from: `${firstName} ${lastName}`,
      to: "kyaakpalama@gmail.com",
      subject: "You have a new email from your website",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
          <h2 style="color: #333333;">You have a new message from your website</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${description}</p>
          <p><strong>Date:</strong> ${new Date()}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "failed" });
  }
}
