const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
const contacts = [];
const siwesApplications = [];

// Contact form validation
const contactValidation = [
  body('name').trim().isLength({ min: 2 }),
  body('email').isEmail(),
  body('message').trim().isLength({ min: 10 }),
  body('company').optional().trim()
];

// SIWES form validation
const siwesValidation = [
  body('fullName').trim().isLength({ min: 2 }),
  body('email').isEmail(),
  body('phone').trim().isLength({ min: 10 }),
  body('university').trim().isLength({ min: 2 }),
  body('course').trim().isLength({ min: 2 }),
  body('level').trim().isLength({ min: 1 }),
  body('duration').trim().isLength({ min: 1 }),
  body('track').trim().isLength({ min: 1 }),
  body('motivation').trim().isLength({ min: 50 })
];

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.GMAIL_USER, // oraotechnologiesltd@gmail.com
    pass: process.env.GMAIL_APP_PASSWORD // Gmail App Password
  }
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'OK', message: 'Orao Technologies API is running' }));

// Contact form
app.post('/api/contact', contactValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });

    const { name, email, company, message } = req.body;

    const contact = { id: Date.now().toString(), name, email, company: company || '', message, submittedAt: new Date().toISOString() };
    contacts.push(contact);

    // Send email
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
      `
    });

    res.json({ success: true, message: 'Message received!', data: { id: contact.id } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error processing contact form' });
  }
});

// SIWES form
app.post('/api/siwes', siwesValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });

    const { fullName, email, phone, university, course, level, duration, track, motivation } = req.body;

    const application = { id: Date.now().toString(), fullName, email, phone, university, course, level, duration, track, motivation, status: 'pending', submittedAt: new Date().toISOString() };
    siwesApplications.push(application);

    // Send email
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
      `
    });

    res.json({ success: true, message: 'SIWES application submitted!', data: { id: application.id, applicationNumber: `SIWES-${application.id}` } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error processing SIWES application' });
  }
});

// Admin endpoints
app.get('/api/admin/contacts', (req, res) => res.json({ success: true, data: contacts, total: contacts.length }));
app.get('/api/admin/siwes', (req, res) => res.json({ success: true, data: siwesApplications, total: siwesApplications.length }));

// Error handling
app.use((err, req, res, next) => { console.error(err.stack); res.status(500).json({ success: false, message: 'Something went wrong!' }); });

// Start server
app.listen(PORT, () => console.log(`Orao Technologies API running on port ${PORT}`));
