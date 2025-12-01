import express from 'express';
import multer from 'multer';
import path from 'path';
import { body, validationResult } from 'express-validator';
import JobApplication from '../models/JobApplication.js';
import { sendEmail } from '../utils/email.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resumes/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'resume-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  }
});

// Validation rules
const applicationValidation = [
  body('jobTitle').trim().notEmpty().withMessage('Job title is required'),
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required')
];

// POST /api/careers/apply - Submit job application
router.post('/apply', upload.single('resume'), applicationValidation, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create application
    const application = await JobApplication.create({
      ...req.body,
      resumeUrl: req.file ? `/uploads/resumes/${req.file.filename}` : null
    });

    // Send confirmation email to applicant
    await sendEmail({
      to: application.email,
      subject: `Application Received - ${application.jobTitle}`,
      html: `
        <h2>Thank you for your application!</h2>
        <p>Dear ${application.firstName},</p>
        <p>We have received your application for the <strong>${application.jobTitle}</strong> position.</p>
        <p>Our hiring team will review your application and get back to you within 5-7 business days.</p>
        <p>Best regards,<br>INTELLIGENT SYSTEMS INC Talent Team</p>
      `
    });

    // Send notification to HR
    await sendEmail({
      to: process.env.EMAIL_FROM,
      subject: `New Job Application - ${application.jobTitle}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${application.jobTitle}</p>
        <p><strong>Name:</strong> ${application.firstName} ${application.lastName}</p>
        <p><strong>Email:</strong> ${application.email}</p>
        <p><strong>Phone:</strong> ${application.phone || 'Not provided'}</p>
        <p><strong>LinkedIn:</strong> ${application.linkedIn || 'Not provided'}</p>
        <p><strong>Portfolio:</strong> ${application.portfolio || 'Not provided'}</p>
        <p><strong>Resume:</strong> ${application.resumeUrl ? 'Attached' : 'Not provided'}</p>
        ${application.coverLetter ? `<p><strong>Cover Letter:</strong><br>${application.coverLetter}</p>` : ''}
      `
    });

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: {
        id: application.id,
        jobTitle: application.jobTitle
      }
    });
  } catch (error) {
    console.error('Job application error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit application',
      error: error.message
    });
  }
});

// GET /api/careers/applications - Get all applications (admin only)
router.get('/applications', async (req, res) => {
  try {
    const applications = await JobApplication.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch applications',
      error: error.message
    });
  }
});

export default router;
