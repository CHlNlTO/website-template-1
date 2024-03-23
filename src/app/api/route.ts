import { NextRequest, NextResponse } from "next/server"
import { transporter, mailOptions } from "@/config/nodemailer"
import { Homepage } from "../home/Homepage";

export async function GET() {
  return NextResponse.json({
    message: "world",
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      html: `<div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex mx-auto items-center">
        <div className="flex flex-col  items-start bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col items-start text-gray-600 space-y-2">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Message:</strong> ${data.message}</p>
          </div>
        </div>
      </div>
    </div>`,
    })

    return (
      NextResponse.json({ message: "Email sent" })
    );

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Email not sent" });
  }
}