export const EmailTemplate = ({ name, email, phone, desc }) => (
  <div className="max-w-lg mx-auto bg-white shadow-md p-4 rounded-md">
    <h1 className="text-2xl font-bold text-indigo-700 mb-4">
      Thank you for contacting Mark J Ahern Plumbing Services!
    </h1>
    <p>Hello {name},</p>
    <p className="mt-2">
      We appreciate your interest in our plumbing services. Your inquiry is
      important to us, and we'll get back to you as soon as possible. Here are
      the details you provided:
    </p>

    <div className="mt-4">
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Message:</strong> {desc}
      </p>
    </div>

    <p className="mt-4">
      Our team of skilled plumbers will review your message and be in touch with
      you shortly to discuss your plumbing needs. If you have any immediate
      plumbing emergencies, please don't hesitate to call our 24/7 emergency
      hotline at <a href="tel:+1(617)8640295">+1 (617) 864-0295</a>.
    </p>

    <p className="mt-4">
      Thank you for considering Mark J Ahern Plumbing Services for your plumbing
      requirements. We look forward to serving you!
    </p>

    <p className="mt-8">Best regards,</p>
    <p>The Mark J Ahern Plumbing Services Team</p>
  </div>
);

export default EmailTemplate;
