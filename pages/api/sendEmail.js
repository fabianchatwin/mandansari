import Head from "next/head";
import Link from "next/link";

import Footer from "@components/Footer";

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox Template!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Submission Received!</h1>
        <p>
          Thank you for your feedback! Head back to the{" "}
          <Link href="/">
            <a>home page</a>
          </Link>
          .
        </p>
      </main>

      <Footer />
    </div>
  );
}

const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { email /* other form fields */ } = JSON.parse(event.body);

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "fabianchatwin@gmail.com",
      pass: "ilqf vshv ojxe bhyh",
    },
  });

  // Email content
  const mailOptions = {
    from: "fabianchatwin@gmail.com",
    to: email,
    subject: "Thank you for your submission!",
    text: "We have received your submission. Thank you!",
  };

  // Send email
  await transporter.sendMail(mailOptions);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent successfully" }),
  };
};
