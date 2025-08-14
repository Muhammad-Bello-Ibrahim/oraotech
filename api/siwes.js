const nodemailer = require('nodemailer');

// In-memory storage (note: this won't persist across function invocations in production)
let siwesApplications = [];

// Validation helper function
function validateSiwesForm(body) {
  const errors = [];
  
  if (!body.fullName || typeof body.fullName !== 'string' || body.fullName.trim().length < 2) {
    errors.push({ field: 'fullName', message: 'Full name must be at least 2 characters long' });
  }
  
  if (!body.email || typeof body.email !== 'string' || !isValidEmail(body.email)) {
    errors.push({ field: 'email', message: 'Please provide a valid email address' });
  }
  
  if (!body.phone || typeof body.phone !== 'string' || body.phone.trim().length < 10) {
    errors.push({ field: 'phone', message: 'Phone number must be at least 10 characters long' });
  }
  
  if (!body.university || typeof body.university !== 'string' || body.university.trim().length < 2) {
    errors.push({ field: 'university', message: 'University name must be at least 2 characters long' });
  }
  
  if (!body.course || typeof body.course !== 'string' || body.course.trim().length < 2) {
    errors.push({ field: 'course', message: 'Course name must be at least 2 characters long' });
  }
  
  if (!body.level || typeof body.level !== 'string' || body.level.trim().length < 1) {
    errors.push({ field: 'level', message: 'Academic level is required' });
  }
  
  if (!body.duration || typeof body.duration !== 'string' || body.duration.trim().length < 1) {
    errors.push({ field: 'duration', message: 'Duration is required' });
  }
  
  if (!body.track || typeof body.track !== 'string' || body.track.trim().length < 1) {
    errors.push({ field: 'track', message: 'Track selection is required' });
  }
  
  if (!body.motivation || typeof body.motivation !== 'string' || body.motivation.trim().length < 50) {
    errors.push({ field: 'motivation', message: 'Motivation must be at least 50 characters long' });
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
    const errors = validateSiwesForm(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const { fullName, email, phone, university, course, level, duration, track, motivation } = req.body;

    // Create application record
    const application = {
      id: Date.now().toString(),
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      university: university.trim(),
      course: course.trim(),
      level: level.trim(),
      duration: duration.trim(),
      track: track.trim(),
      motivation: motivation.trim(),
      status: 'pending',
      submittedAt: new Date().toISOString()
    };
    
    // Store application (in-memory)
    siwesApplications.push(application);

    // Send email
    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"${fullName}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New SIWES Application from ${fullName}`,
      html: `
        <h2>New SIWES Application</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Level:</strong> ${level}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Track:</strong> ${track}</p>
        <p><strong>Motivation:</strong> ${motivation}</p>
        <p><strong>Submitted:</strong> ${application.submittedAt}</p>
      `
    });

    res.status(200).json({
      success: true,
      message: 'SIWES application submitted!',
      data: {
        id: application.id,
        applicationNumber: `SIWES-${application.id}`
      }
    });

  } catch (error) {
    console.error('SIWES application error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing SIWES application'
    });
  }
}