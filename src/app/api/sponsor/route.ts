import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, contactName, email, sponsorshipType, otherDetails } = body;

    // Validate required fields
    if (!companyName || !contactName || !email || !sponsorshipType) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Email template for sponsor inquiry
    const emailContent = `
NEW SPONSORSHIP INQUIRY - NAUSA

Company Information:
- Company Name: ${companyName}
- Contact Person: ${contactName}
- Email: ${email}

Sponsorship Details:
- Type: ${sponsorshipType}
- Additional Details: ${otherDetails || 'None provided'}

Submitted: ${new Date().toLocaleString('en-US', {
  timeZone: 'America/New_York',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

Please respond to this inquiry within 24 hours.
    `;

    // Log the inquiry (in production, send actual email)
    console.log('SPONSOR INQUIRY RECEIVED:');
    console.log(emailContent);
    
    // TODO: Implement actual email sending
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@uyghursports.com',
    //   to: ['info@uyghursports.com'],
    //   subject: `New Sponsorship Inquiry from ${companyName}`,
    //   text: emailContent,
    // });
    
    return NextResponse.json(
      { success: true, message: 'Sponsorship inquiry sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Sponsor form error:', error);
    return NextResponse.json(
      { error: 'Failed to send sponsorship inquiry' },
      { status: 500 }
    );
  }
}