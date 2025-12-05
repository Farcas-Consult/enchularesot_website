import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();

    // Format the booking details for email
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
    .header { background: #800000; color: white; padding: 20px; text-align: center; }
    .content { background: white; padding: 30px; margin-top: 20px; }
    .section { margin-bottom: 20px; }
    .label { font-weight: bold; color: #800000; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 Booking Confirmation</h1>
      <p>Enchula Resort</p>
    </div>
    <div class="content">
      <p>Dear ${bookingData.guestName},</p>
      <p>Thank you for choosing Enchula Resort! Your reservation has been confirmed.</p>
      
      <div class="section">
        <h3>Reservation Details</h3>
        <p><span class="label">Confirmation Number:</span> ${Date.now()}</p>
        <p><span class="label">Check-in:</span> ${bookingData.checkIn}</p>
        <p><span class="label">Check-out:</span> ${bookingData.checkOut}</p>
        <p><span class="label">Number of Nights:</span> ${bookingData.nights}</p>
        <p><span class="label">Room Type:</span> ${bookingData.roomType}</p>
        <p><span class="label">Meal Plan:</span> ${bookingData.mealPlan}</p>
      </div>

      <div class="section">
        <h3>Guest Information</h3>
        <p><span class="label">Adults:</span> ${bookingData.adults}</p>
        ${bookingData.minors > 0 ? `<p><span class="label">Minors (12-17):</span> ${bookingData.minors}</p>` : ''}
        ${bookingData.children > 0 ? `<p><span class="label">Children (2-12):</span> ${bookingData.children}</p>` : ''}
        ${bookingData.infants > 0 ? `<p><span class="label">Infants (0-2):</span> ${bookingData.infants}</p>` : ''}
      </div>

      ${bookingData.additionalServices.length > 0 ? `
      <div class="section">
        <h3>Additional Services</h3>
        <ul>
          ${bookingData.additionalServices.map((service: any) => 
            `<li><strong>${service.name}</strong> - ${service.description}</li>`
          ).join('')}
        </ul>
      </div>
      ` : ''}

      ${bookingData.specialRequests ? `
      <div class="section">
        <h3>Special Requests</h3>
        <p>${bookingData.specialRequests}</p>
      </div>
      ` : ''}

      <div class="section">
        <h3>Contact Information</h3>
        <p><span class="label">Email:</span> ${bookingData.guestEmail}</p>
        <p><span class="label">Phone:</span> ${bookingData.guestPhone}</p>
      </div>

      <div class="section">
        <h3>Check-in Information</h3>
        <p><span class="label">Check-in Time:</span> 12:00 PM</p>
        <p><span class="label">Check-out Time:</span> 10:30 AM</p>
        <p><span class="label">Address:</span> Nairobi-Namanga Rd, Kajiado, Kenya</p>
      </div>

      <p>If you have any questions or need to modify your reservation, please contact us:</p>
      <p>📞 Phone: +254 727 000 027</p>
      <p>📧 Email: info@enchularesort.com</p>
      
      <p>We look forward to welcoming you!</p>
      <p><strong>The Enchula Resort Team</strong></p>
    </div>
    <div class="footer">
      <p>Enchula Resort | Nairobi-Namanga Rd, Kajiado, Kenya</p>
      <p>This is an automated confirmation email. Please do not reply directly to this message.</p>
    </div>
  </div>
</body>
</html>
    `;

    // Format SMS message
    const smsMessage = `Enchula Resort Booking Confirmed!
Guest: ${bookingData.guestName}
Check-in: ${bookingData.checkIn}
Check-out: ${bookingData.checkOut}
Room: ${bookingData.roomType}
Confirmation: ${Date.now()}
We look forward to welcoming you! 
Contact: +254727000027`;

    // Here you would integrate with your email service (e.g., SendGrid, AWS SES, Resend)
    // and SMS service (e.g., Twilio, Africa's Talking)
    
    // Example with console logging for now:
    console.log('Sending email to:', bookingData.guestEmail);
    console.log('Sending SMS to:', bookingData.guestPhone);
    console.log('Email content:', emailContent);
    console.log('SMS content:', smsMessage);

    // TODO: Replace with actual email/SMS service integration
    // Example for email (using a service like Resend):
    /*
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'bookings@enchularesort.com',
        to: bookingData.guestEmail,
        subject: 'Booking Confirmation - Enchula Resort',
        html: emailContent,
      }),
    });
    */

    // Example for SMS (using Africa's Talking):
    /*
    await fetch('https://api.africastalking.com/version1/messaging', {
      method: 'POST',
      headers: {
        'apiKey': process.env.AFRICASTALKING_API_KEY,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: process.env.AFRICASTALKING_USERNAME,
        to: bookingData.guestPhone,
        message: smsMessage,
      }),
    });
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Confirmation sent successfully',
      confirmationNumber: Date.now()
    });

  } catch (error) {
    console.error('Error sending confirmation:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send confirmation' },
      { status: 500 }
    );
  }
}
