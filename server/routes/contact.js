import express from 'express';
import { body, validationResult } from 'express-validator';
import Contact from '../models/Contact.js';
import { sendEmail } from '../utils/email.js';

const router = express.Router();

// Validation rules
const contactValidation = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('company').trim().notEmpty().withMessage('Company is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('country').trim().notEmpty().withMessage('Country is required'),
  body('inquiryType').isIn(['demo', 'enterprise', 'support', 'partnership', 'other']).withMessage('Valid inquiry type is required'),
  body('industry').isIn(['healthcare', 'finance', 'manufacturing', 'retail', 'technology', 'other']).withMessage('Valid industry is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

// POST /api/contact - Submit contact form
router.post('/', contactValidation, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create contact submission
    const contact = await Contact.create(req.body);

    // Send confirmation email to user
    await sendEmail({
      to: contact.email,
      subject: 'Thank you for contacting INTELLIGENT SYSTEMS',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${contact.firstName},</p>
        <p>We have received your inquiry and will get back to you within 24 business hours.</p>
        <p><strong>Your inquiry details:</strong></p>
        <ul>
          <li>Type: ${contact.inquiryType}</li>
          <li>Industry: ${contact.industry}</li>
        </ul>
        <p>Best regards,<br>INTELLIGENT SYSTEMS INC Team</p>
      `
    });

    // Send notification email to company
    await sendEmail({
      to: process.env.EMAIL_FROM,
      subject: `New Contact Form Submission - ${contact.inquiryType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.firstName} ${contact.lastName}</p>
        <p><strong>Company:</strong> ${contact.company}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone || 'Not provided'}</p>
        <p><strong>Country:</strong> ${contact.country}</p>
        <p><strong>Inquiry Type:</strong> ${contact.inquiryType}</p>
        <p><strong>Industry:</strong> ${contact.industry}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
        <p><strong>Newsletter:</strong> ${contact.subscribe ? 'Yes' : 'No'}</p>
      `
    });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: contact.id,
        email: contact.email
      }
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form',
      error: error.message
    });
  }
});

// GET /api/contact - Get all contacts (admin only - add auth later)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
      error: error.message
    });
  }
});

export default router;
