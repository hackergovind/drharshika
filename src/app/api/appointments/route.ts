import { NextRequest, NextResponse } from "next/server";

interface AppointmentData {
  service: string;
  subService: string | null;
  otherCondition: string | null;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  age: number | null;
  gender: string | null;
  notes: string | null;
}

function buildEmailHtml(data: AppointmentData): string {
  const conditionDisplay =
    data.subService === "Other"
      ? data.otherCondition || "Other (not specified)"
      : data.subService || "General Consultation";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Appointment Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f7f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7f6; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.07);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #4a7c59 0%, #6b9b7a 100%); padding: 32px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">
                🩺 New Appointment Request
              </h1>
              <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">
                Dr. Harshika Wellness — Homeopathic Clinic
              </p>
            </td>
          </tr>

          <!-- Patient Details -->
          <tr>
            <td style="padding: 32px 40px;">
              <h2 style="color: #2d3748; font-size: 18px; margin: 0 0 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
                👤 Patient Details
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-size: 14px; width: 140px;">Name</td>
                  <td style="padding: 8px 0; color: #2d3748; font-size: 14px; font-weight: 600;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-size: 14px;">Email</td>
                  <td style="padding: 8px 0; color: #2d3748; font-size: 14px;">
                    <a href="mailto:${data.email}" style="color: #4a7c59;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-size: 14px;">Phone</td>
                  <td style="padding: 8px 0; color: #2d3748; font-size: 14px;">
                    <a href="tel:${data.phone}" style="color: #4a7c59;">${data.phone}</a>
                  </td>
                </tr>
                ${data.age ? `
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-size: 14px;">Age</td>
                  <td style="padding: 8px 0; color: #2d3748; font-size: 14px;">${data.age} years</td>
                </tr>` : ""}
                ${data.gender ? `
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-size: 14px;">Gender</td>
                  <td style="padding: 8px 0; color: #2d3748; font-size: 14px;">${data.gender}</td>
                </tr>` : ""}
              </table>
            </td>
          </tr>

          <!-- Appointment Details -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <h2 style="color: #2d3748; font-size: 18px; margin: 0 0 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
                📅 Appointment Details
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-size: 14px; width: 140px;">Service</td>
                  <td style="padding: 8px 0; color: #2d3748; font-size: 14px; font-weight: 600;">${data.service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-size: 14px;">Condition</td>
                  <td style="padding: 8px 0; color: #2d3748; font-size: 14px;">${conditionDisplay}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-size: 14px;">Date</td>
                  <td style="padding: 8px 0; color: #2d3748; font-size: 14px; font-weight: 600;">${data.date}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #718096; font-size: 14px;">Time</td>
                  <td style="padding: 8px 0; color: #2d3748; font-size: 14px; font-weight: 600;">${data.time}</td>
                </tr>
              </table>
            </td>
          </tr>

          ${data.notes ? `
          <!-- Notes -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <h2 style="color: #2d3748; font-size: 18px; margin: 0 0 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
                📝 Patient Notes
              </h2>
              <p style="color: #4a5568; font-size: 14px; line-height: 1.6; margin: 0; padding: 16px; background-color: #f7fafc; border-radius: 8px; border-left: 4px solid #4a7c59;">
                ${data.notes}
              </p>
            </td>
          </tr>` : ""}

          <!-- Footer -->
          <tr>
            <td style="background-color: #f7fafc; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="color: #a0aec0; font-size: 12px; margin: 0;">
                This is an automated notification from Dr. Harshika Wellness website.<br>
                Please respond to the patient to confirm the appointment.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function sendEmailNotification(data: AppointmentData): Promise<void> {
  const conditionDisplay =
    data.subService === "Other"
      ? data.otherCondition || "Other"
      : data.subService || "General Consultation";

  const subject = `New Appointment Request - ${data.name} - ${conditionDisplay}`;
  const htmlBody = buildEmailHtml(data);
  const recipientEmail = "drharshikawellness@gmail.com";

  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    // Send real email via Resend API
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Dr. Harshika Wellness <onboarding@resend.dev>",
          to: [recipientEmail],
          subject,
          html: htmlBody,
          reply_to: data.email,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("✅ Email sent successfully via Resend:", result.id);
      } else {
        const error = await response.text();
        console.error("❌ Resend API error:", response.status, error);
        // Don't throw — we still want to return success to the patient
      }
    } catch (error) {
      console.error("❌ Failed to send email via Resend:", error);
      // Don't throw — we still want to return success to the patient
    }
  } else {
    // Log the email that would have been sent
    console.log("\n" + "=".repeat(60));
    console.log("📧 EMAIL NOTIFICATION (RESEND_API_KEY not set)");
    console.log("=".repeat(60));
    console.log(`To:      ${recipientEmail}`);
    console.log(`Subject: ${subject}`);
    console.log(`Reply-To: ${data.email}`);
    console.log("-".repeat(60));
    console.log("Patient Details:");
    console.log(`  Name:   ${data.name}`);
    console.log(`  Email:  ${data.email}`);
    console.log(`  Phone:  ${data.phone}`);
    if (data.age) console.log(`  Age:    ${data.age}`);
    if (data.gender) console.log(`  Gender: ${data.gender}`);
    console.log("Appointment Details:");
    console.log(`  Service:   ${data.service}`);
    console.log(`  Condition: ${conditionDisplay}`);
    console.log(`  Date:      ${data.date}`);
    console.log(`  Time:      ${data.time}`);
    if (data.notes) console.log(`  Notes:     ${data.notes}`);
    console.log("=".repeat(60));
    console.log(
      "💡 Set RESEND_API_KEY environment variable to send real emails.\n"
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      service,
      subService,
      otherCondition,
      date,
      time,
      name,
      email,
      phone,
      age,
      gender,
      notes,
    } = body;

    // Validate required fields
    if (!service || !date || !time || !name || !email || !phone) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: service, date, time, name, email, and phone are required.",
        },
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

    // Build appointment data
    const appointmentData: AppointmentData = {
      service,
      subService: subService || null,
      otherCondition: otherCondition || null,
      date,
      time,
      name,
      email,
      phone,
      age: age || null,
      gender: gender || null,
      notes: notes || null,
    };

    // In production, save to database using Prisma:
    // const patient = await prisma.patient.upsert({
    //   where: { email },
    //   update: { name, phone, age: age || null, gender: gender || null },
    //   create: { name, email, phone, age: age || null, gender: gender || null },
    // });
    //
    // const appointment = await prisma.appointment.create({
    //   data: {
    //     patientId: patient.id,
    //     service,
    //     subService: subService || null,
    //     otherCondition: otherCondition || null,
    //     date: new Date(date),
    //     time,
    //     notes: notes || null,
    //   },
    // });

    // For now, build a response object
    const appointment = {
      id: `apt_${Date.now()}`,
      ...appointmentData,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    console.log("New appointment request:", JSON.stringify(appointment, null, 2));

    // Send email notification (async, non-blocking for patient response)
    sendEmailNotification(appointmentData).catch((err) => {
      console.error("Email notification failed silently:", err);
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Appointment request submitted successfully. Our team will contact you to confirm.",
        appointment,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // In production, fetch from database:
  // const appointments = await prisma.appointment.findMany({
  //   include: { patient: true },
  //   orderBy: { date: 'desc' },
  // });

  const appointments = [
    {
      id: "1",
      service: "Hormonal & Thyroid Health",
      subService: "PCOS Management",
      date: "2026-06-15",
      time: "10:30 AM",
      status: "confirmed",
      notes: "First consultation",
    },
    {
      id: "2",
      service: "Musculoskeletal Health",
      subService: "Knee Pain",
      date: "2026-06-18",
      time: "02:00 PM",
      status: "pending",
      notes: null,
    },
  ];

  return NextResponse.json({ appointments });
}
