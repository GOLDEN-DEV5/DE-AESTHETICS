import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, consultation, message } = await request.json();

    // Validate background basics before sending
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required form fields.' },
        { status: 400 }
      );
    }

    // Trigger the email transmission via Resend
    const data = await resend.emails.send({
      from: 'DE AESTHETICS Clinic <onboarding@resend.dev>', // Replace with your verified domain once live
      to: 'samiabba110@gmail.com', // Where you want to receive the notifications
      subject: `New Clinical Inquiry: ${consultation}`,
      html: `
        <h3>New Inquiry Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Requested Service:</strong> ${consultation}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}