import { createTransport } from "nodemailer";
import { Email } from "./email";

export async function POST(req) {
  const form = await req.json();
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
    // Create a Nodemailer transporter
    const transporter = createTransport({
      // Configure the transporter with your email service provider's settings
      // e.g., for Gmail:
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-password",
      },
    });

    // Define the email options
    const mailOptions = {
      from: `${firstName} ${lastName} <your-email@gmail.com>`,
      to: "kyaakpalama@gmail.com",
      subject: "We have received your message",
      html: (
        <Email
          firstName={firstName}
          lastName={lastName}
          description={description}
          phone={phone}
          email={email}
          updatedDate={new Date()}
        />
      ),
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "ok" }, { headers });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "failed" }, { headers });
  }
}
