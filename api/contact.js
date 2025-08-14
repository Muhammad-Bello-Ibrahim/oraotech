const nodemailer = require('nodemailer');

// In-memory storage (note: this won't persist across function invocations in production)
let contacts = [];

// Validation helper function
function validateContactForm(body) {
  const errors = [];
  
  if (!body.name || typeof body.name !== 'string' || body.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters long' });
  }
  
  if (!body.email || typeof body.email !== 'string' || !isValidEmail(body.email)) {
    errors.push({ field: 'email', message: 'Please provide a valid email address' });
  }
  
  if (!body.message || typeof body.message !== 'string' || body.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters long' });
  }
  
  return errors;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Gmail SMTP transporter setup
function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for 587
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
}

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  try {
    // Validate input
    const errors = validateContactForm(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const { name, email, company, message } = req.body;

    // Create contact record
    const contact = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      company: company ? company.trim() : '',
      message: message.trim(),
      submittedAt: new Date().toISOString()
    };
    
    // Store contact (in-memory)
    contacts.push(contact);

    // Send email
    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Submitted:</strong> ${contact.submittedAt}</p>
      `
    });

    res.status(200).json({
      success: true,
      message: 'Message received!',
      data: { id: contact.id }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing contact form'
    });
  }
}