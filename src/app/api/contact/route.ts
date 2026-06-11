import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // In production, save to database using Prisma:
    // const inquiry = await prisma.contactInquiry.create({
    //   data: {
    //     name,
    //     email,
    //     phone: phone || null,
    //     subject,
    //     message,
    //   },
    // });

    const inquiry = {
      id: `inq_${Date.now()}`,
      name,
      email,
      phone: phone || null,
      subject,
      message,
      createdAt: new Date().toISOString(),
    };

    console.log("New contact inquiry:", inquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll get back to you within 24 hours.",
        inquiry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating contact inquiry:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
