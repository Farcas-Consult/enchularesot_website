import { NextRequest, NextResponse } from "next/server";
import net from "node:net";
import tls from "node:tls";

export const runtime = "nodejs";

const VERIFIED_EMAIL_DOMAIN = "enchularesort.com";
const RESERVATIONS_EMAIL =
  process.env.RESERVATIONS_TO_EMAIL ||
  process.env.NEXT_PUBLIC_RESERVATIONS_TO_EMAIL ||
  `info@${VERIFIED_EMAIL_DOMAIN}`;
const DEFAULT_FROM_EMAIL = `Enchula Resort <bookings@${VERIFIED_EMAIL_DOMAIN}>`;
const EMAIL_COLORS = {
  primary: "#B99A66",
  warmBrown: "#8F5F2F",
  black: "#4A2400",
  gray: "#5C4033",
  background: "#FAF6F0",
  lightBrown: "#D2BB9E",
  peach: "#FFD3A3",
  white: "#FFFFFF",
};

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

const readResendError = async (response: Response) => {
  const fallback = `Resend rejected the email request with status ${response.status}.`;

  try {
    const payload = await response.json();
    return typeof payload?.message === "string" ? payload.message : fallback;
  } catch {
    const text = await response.text().catch(() => "");
    return text || fallback;
  }
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

const normalizeVerifiedSender = (value: string) =>
  value.replace(/@enchularesort\.co\.ke\b/g, `@${VERIFIED_EMAIL_DOMAIN}`);

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
  const localName = process.env.SMTP_HELO_NAME || VERIFIED_EMAIL_DOMAIN;
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
      `Message-ID: <${Date.now()}@${VERIFIED_EMAIL_DOMAIN}>`,
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

const buildReservationEmailContent = (bookingData: BookingRequest) => `
<!DOCTYPE html>
<html>
<head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { background: ${EMAIL_COLORS.background}; color: ${EMAIL_COLORS.gray}; font-family: Arial, sans-serif; line-height: 1.55; margin: 0; }
    .wrap { max-width: 760px; margin: 0 auto; padding: 28px 14px; }
    .document { background: ${EMAIL_COLORS.white}; border: 1px solid ${EMAIL_COLORS.lightBrown}; border-radius: 18px; overflow: hidden; }
    .header { background: ${EMAIL_COLORS.black}; color: ${EMAIL_COLORS.white}; padding: 30px; }
    .eyebrow { color: ${EMAIL_COLORS.peach}; font-size: 12px; font-weight: 700; letter-spacing: 2.4px; margin: 0 0 10px; text-transform: uppercase; }
    h1 { color: ${EMAIL_COLORS.white}; font-size: 30px; line-height: 1.15; margin: 0; }
    .submitted { color: ${EMAIL_COLORS.lightBrown}; margin: 12px 0 0; }
    .content { padding: 28px; }
    .intro { color: ${EMAIL_COLORS.gray}; font-size: 15px; margin: 0 0 22px; }
    .summary { background: ${EMAIL_COLORS.background}; border: 1px solid ${EMAIL_COLORS.lightBrown}; border-radius: 14px; margin-bottom: 22px; padding: 18px; }
    .summary h2, .section h2 { color: ${EMAIL_COLORS.black}; font-size: 17px; margin: 0 0 14px; }
    .grid { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .item { background: ${EMAIL_COLORS.white}; border: 1px solid ${EMAIL_COLORS.lightBrown}; border-radius: 12px; padding: 14px; }
    .item.wide { grid-column: 1 / -1; }
    .label { color: ${EMAIL_COLORS.warmBrown}; display: block; font-size: 11px; font-weight: 700; letter-spacing: 1.4px; margin-bottom: 5px; text-transform: uppercase; }
    .value { color: ${EMAIL_COLORS.black}; font-size: 15px; font-weight: 700; margin: 0; }
    .muted { color: ${EMAIL_COLORS.gray}; font-size: 14px; margin: 4px 0 0; }
    .section { border-top: 1px solid ${EMAIL_COLORS.lightBrown}; margin-top: 24px; padding-top: 22px; }
    .section ul { list-style: none; margin: 0; padding: 0; }
    .section li { background: ${EMAIL_COLORS.background}; border: 1px solid ${EMAIL_COLORS.lightBrown}; border-radius: 12px; color: ${EMAIL_COLORS.gray}; margin-bottom: 10px; padding: 14px; }
    .section li strong { color: ${EMAIL_COLORS.black}; }
    .next-steps { background: ${EMAIL_COLORS.peach}; border-radius: 14px; color: ${EMAIL_COLORS.black}; margin-top: 24px; padding: 18px 20px; }
    .next-steps strong { display: block; margin-bottom: 8px; }
    .next-steps ol { margin: 0; padding-left: 20px; }
    .footer { color: ${EMAIL_COLORS.gray}; font-size: 12px; padding: 20px 28px 28px; text-align: center; }
    @media (max-width: 620px) {
      .header, .content { padding: 22px; }
      .grid { grid-template-columns: 1fr; }
      .item.wide { grid-column: auto; }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="document">
      <div class="header">
        <p class="eyebrow">Enchula Resort Booking</p>
        <h1>New Reservation Request</h1>
        <p class="submitted">Submitted ${escapeHtml(new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi" }))}</p>
      </div>
      <div class="content">
        <p class="intro">A guest has submitted a booking request through the website. The information below is ready for availability, pricing, and payment follow-up.</p>

        <div class="summary">
          <h2>Stay Summary</h2>
          <div class="grid">
            <div class="item">
              <span class="label">Check-in</span>
              <p class="value">${escapeHtml(bookingData.checkIn || "Not selected")}</p>
            </div>
            <div class="item">
              <span class="label">Check-out</span>
              <p class="value">${escapeHtml(bookingData.checkOut || "Not selected")}</p>
            </div>
            <div class="item">
              <span class="label">Nights</span>
              <p class="value">${escapeHtml(bookingData.nights ?? "To be confirmed")}</p>
            </div>
            <div class="item">
              <span class="label">Room Type</span>
              <p class="value">${escapeHtml(bookingData.roomType || "Not selected")}</p>
            </div>
            <div class="item">
              <span class="label">Meal Plan</span>
              <p class="value">${escapeHtml(bookingData.mealPlanLabel || "To be confirmed")}</p>
            </div>
            <div class="item">
              <span class="label">Estimated Total</span>
              <p class="value">${escapeHtml(formatMoney(bookingData.estimatedRoomTotal))}</p>
              <p class="muted">Nightly rate: ${escapeHtml(formatMoney(bookingData.nightlyRate))}</p>
            </div>
            <div class="item wide">
              <span class="label">Rate Details</span>
              <p class="value">${escapeHtml(bookingData.residencyLabel || "To be confirmed")} / ${escapeHtml(bookingData.occupancyLabel || "To be confirmed")}</p>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Guest Information</h2>
          <div class="grid">
            <div class="item">
              <span class="label">Name</span>
              <p class="value">${escapeHtml(bookingData.guestName || "Not provided")}</p>
            </div>
            <div class="item">
              <span class="label">Email</span>
              <p class="value">${escapeHtml(bookingData.guestEmail || "Not provided")}</p>
            </div>
            <div class="item">
              <span class="label">Phone</span>
              <p class="value">${escapeHtml(bookingData.guestPhone || "Not provided")}</p>
            </div>
            <div class="item">
              <span class="label">Guests</span>
              <p class="value">${escapeHtml(bookingData.adults ?? 0)} adults, ${escapeHtml(bookingData.children ?? 0)} children, ${escapeHtml(bookingData.infants ?? 0)} infants</p>
              <p class="muted">Children 4-16, infants 0-3</p>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Additional Services</h2>
          ${formatServices(bookingData.additionalServices)}
        </div>

        <div class="section">
          <h2>Special Requests</h2>
          <div class="item wide">
            <p class="value">${escapeHtml(bookingData.specialRequests || "No special requests added.")}</p>
          </div>
        </div>

        <div class="next-steps">
          <strong>Reservations team next steps</strong>
          <ol>
            <li>Confirm room availability.</li>
            <li>Confirm the final price, if applicable.</li>
            <li>Arrange payment and finalize the reservation.</li>
          </ol>
        </div>
      </div>
      <div class="footer">
        Enchula Resort | Nairobi-Namanga Rd, Kajiado, Kenya | ${RESERVATIONS_EMAIL}
      </div>
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
    const reservationEmailContent = buildReservationEmailContent(reservationData);
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = normalizeVerifiedSender(
      process.env.RESERVATIONS_FROM_EMAIL ||
        process.env.NEXT_PUBLIC_RESERVATIONS_FROM_EMAIL ||
        DEFAULT_FROM_EMAIL
    );

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
      const errorMessage = await readResendError(resendResponse);
      console.error("Resend reservation email failed:", {
        status: resendResponse.status,
        error: errorMessage,
        from: fromEmail,
        to: RESERVATIONS_EMAIL,
        requestNumber,
      });

      return NextResponse.json(
        { success: false, error: "Failed to send reservation request", details: errorMessage },
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
    body { font-family: Arial, sans-serif; line-height: 1.6; color: ${EMAIL_COLORS.gray}; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background: ${EMAIL_COLORS.background}; }
    .header { background: ${EMAIL_COLORS.black}; color: ${EMAIL_COLORS.white}; padding: 20px; text-align: center; }
    .content { background: ${EMAIL_COLORS.white}; padding: 30px; margin-top: 20px; }
    .section { margin-bottom: 20px; }
    .label { font-weight: bold; color: ${EMAIL_COLORS.warmBrown}; }
    .footer { text-align: center; padding: 20px; color: ${EMAIL_COLORS.gray}; font-size: 12px; }
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
