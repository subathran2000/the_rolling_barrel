// Serverless function for handling contact form submissions
// Uses Gmail SMTP via Nodemailer for email delivery
// Compatible with Vercel, Netlify, and other serverless platforms

import nodemailer from "nodemailer";

// Allowed origins for CORS - add your production domain
const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  process.env.SITE_URL, // Set this in your environment variables
].filter(Boolean);

// Sanitize user input to prevent XSS in email HTML
const sanitizeHtml = (str) => {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export default async function handler(req, res) {
  // Enable CORS with restricted origins
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
      position,
      date,
      time,
      guests,
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Validate Canadian phone number
    const phoneRegex =
      /^(\+1|1)?[-.\s]?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ error: "Invalid Canadian phone number" });
    }

    // Sanitize all user inputs for HTML email
    const safeName = sanitizeHtml(name);
    const safeEmail = sanitizeHtml(email);
    const safePhone = sanitizeHtml(phone);
    const safeSubject = sanitizeHtml(subject);
    const safeMessage = sanitizeHtml(message);
    const safePosition = sanitizeHtml(position);
    const safeDate = sanitizeHtml(date);
    const safeTime = sanitizeHtml(time);
    const safeGuests = sanitizeHtml(guests);

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    });

    // Prepare email content (using sanitized values)
    let emailBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1A0A0C; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #8B2635 0%, #5D1A23 100%); color: #FFF5E6; padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #FFFFFF; padding: 30px; border: 1px solid #E8C9A8; }
    .field { margin-bottom: 20px; }
    .field-label { font-weight: 600; color: #8B2635; margin-bottom: 5px; }
    .field-value { background: #FFF9F5; padding: 12px; border-radius: 8px; border-left: 4px solid #D4A574; }
    .message-box { background: #FFF9F5; padding: 20px; border-radius: 8px; border: 1px solid #E8C9A8; white-space: pre-wrap; }
    .footer { background: #5D1A23; color: #FFF5E6; padding: 20px; text-align: center; border-radius: 0 0 12px 12px; font-size: 14px; }
    .badge { display: inline-block; background: #D4A574; color: #1A0A0C; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
    .reservation-details { background: #FFF9F5; padding: 20px; border-radius: 8px; border: 2px solid #8B2635; margin-top: 20px; }
    .reservation-details h3 { color: #8B2635; margin-top: 0; }
    .detail-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
    .detail-item { text-align: center; }
    .detail-item .value { font-size: 18px; font-weight: 700; color: #8B2635; }
    .detail-item .label { font-size: 12px; color: #4A2C2E; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>The Rolling Barrel</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
    </div>
    <div class="content">
      <p><span class="badge">${safeSubject}</span></p>
      
      <div class="field">
        <div class="field-label">Name</div>
        <div class="field-value">${safeName}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${safeEmail}" style="color: #8B2635;">${safeEmail}</a></div>
      </div>
      
      <div class="field">
        <div class="field-label">Phone</div>
        <div class="field-value"><a href="tel:${safePhone}" style="color: #8B2635;">${safePhone}</a></div>
      </div>`;

    // Add career-specific field
    if (safeSubject === "Career" && safePosition) {
      emailBody += `
      <div class="field">
        <div class="field-label">Position Applying For</div>
        <div class="field-value">${safePosition}</div>
      </div>`;
    }

    // Add reservation-specific fields
    if (safeSubject === "Reservation" && safeDate && safeTime && safeGuests) {
      emailBody += `
      <div class="reservation-details">
        <h3>Reservation Details</h3>
        <div class="detail-grid">
          <div class="detail-item">
            <div class="value">${new Date(date).toLocaleDateString("en-CA", { weekday: "short", month: "short", day: "numeric" })}</div>
            <div class="label">Date</div>
          </div>
          <div class="detail-item">
            <div class="value">${safeTime}</div>
            <div class="label">Time</div>
          </div>
          <div class="detail-item">
            <div class="value">${safeGuests}</div>
            <div class="label">Guests</div>
          </div>
        </div>
      </div>`;
    }

    emailBody += `
      <div class="field" style="margin-top: 20px;">
        <div class="field-label">Message</div>
        <div class="message-box">${safeMessage}</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">The Rolling Barrel - Heart & Grill on Taunton Rd W</p>
      <p style="margin: 5px 0 0 0; opacity: 0.8;">462 Taunton Rd W, Oshawa, ON | (905) 743-0722</p>
    </div>
  </div>
</body>
</html>`;

    // Plain text version (using sanitized values)
    let textContent = `
New Contact Form Submission - The Rolling Barrel
================================================

Subject: ${safeSubject}
Name: ${safeName}
Email: ${safeEmail}
Phone: ${safePhone}
`;

    if (safeSubject === "Career" && safePosition) {
      textContent += `Position Applying For: ${safePosition}\n`;
    }

    if (safeSubject === "Reservation" && safeDate && safeTime && safeGuests) {
      textContent += `
Reservation Details:
- Date: ${safeDate}
- Time: ${safeTime}
- Number of Guests: ${safeGuests}
`;
    }

    textContent += `
Message:
${safeMessage}

---
The Rolling Barrel - Heart & Grill on Taunton Rd W
462 Taunton Rd W, Oshawa, ON | (905) 743-0722
`;

    // Email subject line (using sanitized values)
    let emailSubject = `[Rolling Barrel] ${safeSubject}`;
    if (safeSubject === "Reservation") {
      emailSubject = `[Rolling Barrel] New Reservation Request from ${safeName}`;
    } else if (safeSubject === "Career") {
      emailSubject = `[Rolling Barrel] Job Application - ${safePosition || "Position Not Specified"}`;
    } else if (safeSubject === "Catering") {
      emailSubject = `[Rolling Barrel] Catering Inquiry from ${safeName}`;
    }

    // Send email to restaurant
    const mailOptions = {
      from: `"The Rolling Barrel" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: emailSubject,
      text: textContent,
      html: emailBody,
    };

    await transporter.sendMail(mailOptions);

    // Send auto-reply to customer (using sanitized values)
    const autoReplyHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1A0A0C; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #8B2635 0%, #5D1A23 100%); color: #FFF5E6; padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
    .header h1 { margin: 0; font-size: 28px; }
    .content { background: #FFFFFF; padding: 30px; border: 1px solid #E8C9A8; }
    .footer { background: #5D1A23; color: #FFF5E6; padding: 20px; text-align: center; border-radius: 0 0 12px 12px; font-size: 14px; }
    .cta { display: inline-block; background: #D4A574; color: #1A0A0C; padding: 12px 24px; border-radius: 50px; text-decoration: none; font-weight: 600; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>The Rolling Barrel</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank You for Reaching Out!</p>
    </div>
    <div class="content">
      <p>Hi ${safeName},</p>
      <p>Thank you for contacting The Rolling Barrel! We've received your message and will get back to you as soon as possible.</p>
      ${
        safeSubject === "Reservation"
          ? "<p><strong>Note:</strong> Your reservation request has been received. We will confirm your booking shortly. For urgent matters, please call us at (905) 743-0722.</p>"
          : ""
      }
      <p>In the meantime, feel free to:</p>
      <ul>
        <li>Check out our menu when you visit us</li>
        <li>Follow us on social media for daily specials</li>
        <li>Call us at <a href="tel:905-743-0722" style="color: #8B2635;">(905) 743-0722</a></li>
      </ul>
      <p style="margin-top: 20px;">Good Food. Great Vibes. Everyone's Welcome!</p>
      <p style="font-weight: 600; color: #8B2635;">— The Rolling Barrel Team</p>
    </div>
    <div class="footer">
      <p style="margin: 0;">The Rolling Barrel - Heart & Grill on Taunton Rd W</p>
      <p style="margin: 5px 0 0 0; opacity: 0.8;">462 Taunton Rd W, Oshawa, ON | (905) 743-0722</p>
      <p style="margin: 10px 0 0 0; opacity: 0.6; font-size: 12px;">This is an automated response. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>`;

    const autoReplyOptions = {
      from: `"The Rolling Barrel" <${process.env.GMAIL_USER}>`,
      to: email, // Use original email for delivery
      subject:
        safeSubject === "Reservation"
          ? "Your Reservation Request - The Rolling Barrel"
          : "Thank You for Contacting The Rolling Barrel",
      html: autoReplyHtml,
    };

    await transporter.sendMail(autoReplyOptions);

    return res.status(200).json({
      success: true,
      message: "Thank you! Your message has been received.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      error:
        "An error occurred while processing your request. Please try again or call us directly at (905) 743-0722.",
    });
  }
}
