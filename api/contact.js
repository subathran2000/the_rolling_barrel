// Serverless function for handling contact form submissions
// Compatible with Vercel, Netlify, and other serverless platforms

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
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

    // Validate Canadian phone number (basic validation)
    const phoneRegex =
      /^(\+1|1)?[-.\s]?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ error: "Invalid Canadian phone number" });
    }

    // Prepare email content
    let emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}
`;

    // Add additional fields based on subject
    if (subject === "Career" && position) {
      emailContent += `\nPosition Applying For: ${position}`;
    }

    if (subject === "Reservation" && date && time && guests) {
      emailContent += `\nReservation Date: ${date}`;
      emailContent += `\nReservation Time: ${time}`;
      emailContent += `\nNumber of Guests: ${guests}`;
    }

    // Here you would integrate with your email service
    // Examples: SendGrid, AWS SES, Nodemailer, etc.

    // For now, we'll log it (replace with actual email sending)
    console.log("Contact form submission:", emailContent);

    // Example using fetch to an email service API
    // const emailServiceUrl = process.env.EMAIL_SERVICE_URL;
    // const emailApiKey = process.env.EMAIL_API_KEY;

    // if (emailServiceUrl && emailApiKey) {
    //   await fetch(emailServiceUrl, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${emailApiKey}`
    //     },
    //     body: JSON.stringify({
    //       to: process.env.CONTACT_EMAIL || 'info@therollingbarrel.com',
    //       subject: `Contact Form: ${subject}`,
    //       text: emailContent
    //     })
    //   });
    // }

    return res.status(200).json({
      success: true,
      message: "Thank you! Your message has been received.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      error:
        "An error occurred while processing your request. Please try again.",
    });
  }
}
