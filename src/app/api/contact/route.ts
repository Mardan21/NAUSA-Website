import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Here you would typically send an email using a service like Resend, SendGrid, etc.
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // In production, you would send the email here
    // await sendEmail({ to: 'info@UyghurSports.com', ...formData });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}