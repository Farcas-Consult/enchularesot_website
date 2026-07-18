import { NextRequest, NextResponse } from "next/server";
import net from "node:net";
import tls from "node:tls";

export const runtime = "nodejs";

const RESERVATIONS_EMAIL = "info@enchularesort.co.ke";
const DEFAULT_FROM_EMAIL = "Enchula Resort <bookings@enchularesort.co.ke>";

type AdditionalService = {
  category?: string;
  name?: string;
  description?: string;
};

type BookingRequest = {
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
  checkIn?: string;
  checkOut?: string;
  nights?: number;
  roomType?: string;
  residencyLabel?: string;
  occupancyLabel?: string;
  mealPlanLabel?: string;
  nightlyRate?: number | null;
  estimatedRoomTotal?: number | null;
  adults?: number;
  minors?: number;
  children?: number;
  infants?: number;
  additionalServices?: AdditionalService[];
  specialRequests?: string;
};

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatMoney = (amount?: number | null) =>
  typeof amount === "number" && amount > 0
    ? `Kshs. ${amount.toLocaleString("en-KE")}`
    : "To be confirmed";

const formatServices = (services: AdditionalService[] = []) => {
  if (!services.length) return "<p>No additional services selected.</p>";

  return `
    <ul>
      ${services
        .map(
          (service) => `
            <li>
              <strong>${escapeHtml(service.name || "Selected service")}</strong>
              ${service.category ? `<br><span>${escapeHtml(service.category)}</span>` : ""}
              ${service.description ? `<br><span>${escapeHtml(service.description)}</span>` : ""}
            </li>
          `
        )
        .join("")}
    </ul>
  `;
};

type SmtpSocket = net.Socket | tls.TLSSocket;

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user?: string;
  pass?: string;
  from: string;
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
};

const getAddress = (value: string) => value.match(/<([^>]+)>/)?.[1] || value;

const sanitizeHeader = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

const encodeBase64 = (value: string) => Buffer.from(value, "utf8").toString("base64");

const sendCommand = (
  socket: SmtpSocket,
  command: string | null,
  expectedCodes: number[],
  timeoutMs = 15000
) =>
  new Promise<string>((resolve, reject) => {
    let buffer = "";
    const timer = setTimeout(() => {
      cleanup();
      reject(new Error(`SMTP timeout waiting for ${command || "server response"}`));
    }, timeoutMs);

    const cleanup = () => {
      clearTimeout(timer);
      socket.off("data", onData);
      socket.off("error", onError);
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const onData = (data: Buffer) => {
      buffer += data.toString("utf8");
      const lines = buffer.split(/\r?\n/).filter(Boolean);
      const lastLine = lines[lines.length - 1];
      const match = lastLine?.match(/^(\d{3})(\s|-)/);

      if (match && match[2] === " ") {
        cleanup();
        const code = Number(match[1]);

        if (expectedCodes.includes(code)) {
          resolve(buffer);
        } else {
          reject(new Error(`SMTP command failed (${code}): ${buffer.trim()}`));
        }
      }
    };

    socket.on("data", onData);
    socket.on("error", onError);

    if (command) {
      socket.write(`${command}\r\n`);
    }
  });

const connectSmtp = (host: string, port: number, secure: boolean) =>
  new Promise<SmtpSocket>((resolve, reject) => {
    const socket = secure
      ? tls.connect({ host, port, servername: host })
      : net.createConnection({ host, port });

    socket.setTimeout(30000);
    socket.once("connect", () => {
      if (!secure) resolve(socket);
    });
    socket.once("secureConnect", () => resolve(socket));
    socket.once("timeout", () => {
      socket.destroy();
      reject(new Error("SMTP connection timed out"));
    });
    socket.once("error", reject);
  });

const sendSmtpMail = async (config: SmtpConfig) => {
  const localName = process.env.SMTP_HELO_NAME || "enchularesort.co.ke";
  let socket = await connectSmtp(config.host, config.port, config.secure);

  try {
    await sendCommand(socket, null, [220]);
    let ehloResponse = await sendCommand(socket, `EHLO ${localName}`, [250]);

    if (!config.secure && /STARTTLS/i.test(ehloResponse) && process.env.SMTP_DISABLE_STARTTLS !== "true") {
      await sendCommand(socket, "STARTTLS", [220]);
      socket = tls.connect({ socket, servername: config.host });
      await new Promise<void>((resolve, reject) => {
        socket.once("secureConnect", resolve);
        socket.once("error", reject);
      });
      ehloResponse = await sendCommand(socket, `EHLO ${localName}`, [250]);
    }

    if (config.user && config.pass) {
      await sendCommand(socket, "AUTH LOGIN", [334]);
      await sendCommand(socket, encodeBase64(config.user), [334]);
      await sendCommand(socket, encodeBase64(config.pass), [235]);
    }

    const fromAddress = getAddress(config.from);
    await sendCommand(socket, `MAIL FROM:<${fromAddress}>`, [250]);
    await sendCommand(socket, `RCPT TO:<${config.to}>`, [250, 251]);
    await sendCommand(socket, "DATA", [354]);

    const message = [
      `From: ${sanitizeHeader(config.from)}`,
      `To: ${sanitizeHeader(config.to)}`,
      config.replyTo ? `Reply-To: ${sanitizeHeader(config.replyTo)}` : "",
      `Subject: ${sanitizeHeader(config.subject)}`,
      `Date: ${new Date().toUTCString()}`,
      `Message-ID: <${Date.now()}@enchularesort.co.ke>`,
      "MIME-Version: 1.0",
      "Content-Type: text/html; charset=UTF-8",
      "",
      config.html,
    ]
      .filter(Boolean)
      .join("\r\n")
      .replace(/^\./gm, "..");

    await sendCommand(socket, `${message}\r\n.`, [250]);
    await sendCommand(socket, "QUIT", [221]);
  } finally {
    socket.destroy();
  }
};

const buildReservationEmailContent = (bookingData: BookingRequest, requestNumber: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charSet="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #34251c; background: #f5efe7; margin: 0; }
    .container { max-width: 680px; margin: 0 auto; padding: 24px; }
    .header { background: #4a2400; color: white; padding: 24px; text-align: center; }
    .content { background: white; padding: 28px; }
    .section { border-top: 1px solid #e4d4c3; padding-top: 18px; margin-top: 18px; }
    .label { font-weight: bold; color: #800000; }
    .next-steps { background: #fff6e8; border: 1px solid #e7cda4; padding: 16px 20px; }
    .footer { text-align: center; padding: 18px; color: #6f6259; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Reservation Request</h1>
      <p>Enchula Resort booking form</p>
    </div>
    <div class="content">
      <p>A guest has submitted a reservation request through the website.</p>

      <div class="next-steps">
        <strong>Reservations team next steps:</strong>
        <ol>
          <li>Confirm room availability.</li>
          <li>Confirm the final price, if applicable.</li>
          <li>Arrange payment and finalize the reservation.</li>
        </ol>
      </div>

      <div class="section">
        <h3>Request Details</h3>
        <p><span class="label">Request Number:</span> ${escapeHtml(requestNumber)}</p>
        <p><span class="label">Submitted:</span> ${escapeHtml(new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi" }))}</p>
        <p><span class="label">Check-in:</span> ${escapeHtml(bookingData.checkIn || "Not selected")}</p>
        <p><span class="label">Check-out:</span> ${escapeHtml(bookingData.checkOut || "Not selected")}</p>
        <p><span class="label">Nights:</span> ${escapeHtml(bookingData.nights ?? "To be confirmed")}</p>
        <p><span class="label">Room Type:</span> ${escapeHtml(bookingData.roomType || "Not selected")}</p>
        <p><span class="label">Residency:</span> ${escapeHtml(bookingData.residencyLabel || "To be confirmed")}</p>
        <p><span class="label">Occupancy:</span> ${escapeHtml(bookingData.occupancyLabel || "To be confirmed")}</p>
        <p><span class="label">Meal Plan:</span> ${escapeHtml(bookingData.mealPlanLabel || "To be confirmed")}</p>
        <p><span class="label">Nightly Rate:</span> ${escapeHtml(formatMoney(bookingData.nightlyRate))}</p>
        <p><span class="label">Estimated Room Total:</span> ${escapeHtml(formatMoney(bookingData.estimatedRoomTotal))}</p>
      </div>

      <div class="section">
        <h3>Guest Information</h3>
        <p><span class="label">Name:</span> ${escapeHtml(bookingData.guestName || "Not provided")}</p>
        <p><span class="label">Email:</span> ${escapeHtml(bookingData.guestEmail || "Not provided")}</p>
        <p><span class="label">Phone:</span> ${escapeHtml(bookingData.guestPhone || "Not provided")}</p>
        <p><span class="label">Adults:</span> ${escapeHtml(bookingData.adults ?? 0)}</p>
        <p><span class="label">Minors (12-17):</span> ${escapeHtml(bookingData.minors ?? 0)}</p>
        <p><span class="label">Children (2-12):</span> ${escapeHtml(bookingData.children ?? 0)}</p>
        <p><span class="label">Infants (0-2):</span> ${escapeHtml(bookingData.infants ?? 0)}</p>
      </div>

      <div class="section">
        <h3>Additional Services</h3>
        ${formatServices(bookingData.additionalServices)}
      </div>

      <div class="section">
        <h3>Special Requests</h3>
        <p>${escapeHtml(bookingData.specialRequests || "No special requests added.")}</p>
      </div>
    </div>
    <div class="footer">
      <p>Enchula Resort | Nairobi-Namanga Rd, Kajiado, Kenya | ${RESERVATIONS_EMAIL}</p>
    </div>
  </div>
</body>
</html>
`;

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();
    const reservationData = bookingData as BookingRequest;
    const requestNumber = `ENCH-${Date.now()}`;
    const reservationEmailContent = buildReservationEmailContent(reservationData, requestNumber);
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESERVATIONS_FROM_EMAIL ||
      process.env.NEXT_PUBLIC_RESERVATIONS_FROM_EMAIL ||
      DEFAULT_FROM_EMAIL;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured. Reservation request was not emailed.", {
        to: RESERVATIONS_EMAIL,
        requestNumber,
        guestEmail: reservationData.guestEmail,
      });

      return NextResponse.json(
        { success: false, error: "Resend email delivery is not configured" },
        { status: 500 }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: RESERVATIONS_EMAIL,
        ...(reservationData.guestEmail ? { reply_to: reservationData.guestEmail } : {}),
        subject: `New Reservation Request - ${reservationData.guestName || "Website Guest"}`,
        html: reservationEmailContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error("Resend reservation email failed:", errorText);

      return NextResponse.json(
        { success: false, error: "Failed to send reservation request" },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Reservation request sent successfully",
      requestNumber,
    });

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
