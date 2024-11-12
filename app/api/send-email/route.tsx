import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import prisma from "@/prisma/client";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  await resend.emails.send({
    from: "...",
    to: "zoltan76szucs@gmail.com",
    subject: "..",
    react: <WelcomeTemplate name="Zotya"></WelcomeTemplate>,
  });

  return NextResponse.json({});
}
