const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (using in-memory for now, can be updated for production)
const connectDB = async () => {
  try {
    // For production, use a real MongoDB URI
    // For development, we'll use a simple in-memory storage
    console.log('Database connection simulated (using in-memory storage for demo)');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

// In-memory storage for demonstration (replace with MongoDB in production)
const contacts = [];
const siwesApplications = [];

// Contact form validation rules
const contactValidation = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
  body('company').optional().trim()
];

// SIWES form validation rules
const siwesValidation = [
  body('fullName').trim().isLength({ min: 2 }).withMessage('Full name must be at least 2 characters'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('phone').trim().isLength({ min: 10 }).withMessage('Please provide a valid phone number'),
  body('university').trim().isLength({ min: 2 }).withMessage('University name is required'),
  body('course').trim().isLength({ min: 2 }).withMessage('Course of study is required'),
  body('level').trim().isLength({ min: 1 }).withMessage('Current level is required'),
  body('duration').trim().isLength({ min: 1 }).withMessage('Internship duration is required'),
  body('track').trim().isLength({ min: 1 }).withMessage('Training track is required'),
  body('motivation').trim().isLength({ min: 50 }).withMessage('Motivation must be at least 50 characters')
];

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Orao Technologies API is running' });
});

// Contact form submission
app.post('/api/contact', contactValidation, (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, company, message } = req.body;
    
    // Create contact entry
    const contact = {
      id: Date.now().toString(),
      name,
      email,
      company: company || '',
      message,
      submittedAt: new Date().toISOString()
    };

    // Store in memory (replace with database save in production)
    contacts.push(contact);

    // In production, you would also send an email notification here
    console.log('New contact submission:', contact);

    res.json({
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.',
      data: { id: contact.id }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again.'
    });
  }
});

// SIWES application submission
app.post('/api/siwes', siwesValidation, (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const {
      fullName,
      email,
      phone,
      university,
      course,
      level,
      duration,
      track,
      motivation
    } = req.body;
    
    // Create SIWES application entry
    const application = {
      id: Date.now().toString(),
      fullName,
      email,
      phone,
      university,
      course,
      level,
      duration,
      track,
      motivation,
      status: 'pending',
      submittedAt: new Date().toISOString()
    };

    // Store in memory (replace with database save in production)
    siwesApplications.push(application);

    console.log('New SIWES application:', application);

    res.json({
      success: true,
      message: 'Your SIWES application has been submitted successfully! We will review your application and get back to you soon.',
      data: { id: application.id, applicationNumber: `SIWES-${application.id}` }
    });

  } catch (error) {
    console.error('SIWES application error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your application. Please try again.'
    });
  }
});

// Get all contacts (admin endpoint)
app.get('/api/admin/contacts', (req, res) => {
  res.json({
    success: true,
    data: contacts,
    total: contacts.length
  });
});

// Get all SIWES applications (admin endpoint)
app.get('/api/admin/siwes', (req, res) => {
  res.json({
    success: true,
    data: siwesApplications,
    total: siwesApplications.length
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Start server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Orao Technologies API running on port ${PORT}`);
  });
};

startServer();