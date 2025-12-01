import express from 'express';
import { body, validationResult } from 'express-validator';
import Newsletter from '../models/Newsletter.js';
import { sendEmail } from '../utils/email.js';

const router = express.Router();

// POST /api/newsletter/subscribe - Subscribe to newsletter
router.post('/subscribe', [
  body('email').isEmail().withMessage('Valid email is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, source } = req.body;

    // Check if already subscribed
    let subscriber = await Newsletter.findOne({ where: { email } });
    
    if (subscriber) {
      if (subscriber.subscribed) {
        return res.status(400).json({
          success: false,
          message: 'Email is already subscribed'
        });
      } else {
        // Resubscribe
        subscriber.subscribed = true;
        subscriber.subscribedAt = new Date();
        subscriber.unsubscribedAt = null;
        await subscriber.save();
      }
    } else {
      // New subscriber
      subscriber = await Newsletter.create({
        email,
        source: source || 'resources-page'
      });
    }

    // Send welcome email
    await sendEmail({
      to: email,
      subject: 'Welcome to INTELLIGENT SYSTEMS Newsletter',
      html: `
        <h2>Welcome to our newsletter!</h2>
        <p>Thank you for subscribing to INTELLIGENT SYSTEMS updates.</p>
        <p>You'll receive the latest AI insights, company news, and industry trends.</p>
        <p>Stay intelligent!</p>
        <p>Best regards,<br>INTELLIGENT SYSTEMS INC Team</p>
        <hr>
        <p style="font-size: 12px; color: #666;">
          To unsubscribe, <a href="${process.env.FRONTEND_URL}/unsubscribe?email=${email}">click here</a>
        </p>
      `
    });

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter'
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe',
      error: error.message
    });
  }
});

// POST /api/newsletter/unsubscribe - Unsubscribe from newsletter
router.post('/unsubscribe', [
  body('email').isEmail().withMessage('Valid email is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;
    const subscriber = await Newsletter.findOne({ where: { email } });

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in newsletter list'
      });
    }

    subscriber.subscribed = false;
    subscriber.unsubscribedAt = new Date();
    await subscriber.save();

    res.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to unsubscribe',
      error: error.message
    });
  }
});

// GET /api/newsletter/subscribers - Get all subscribers (admin only)
router.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Newsletter.findAll({
      where: { subscribed: true },
      order: [['subscribedAt', 'DESC']]
    });
    res.json({
      success: true,
      count: subscribers.length,
      data: subscribers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch subscribers',
      error: error.message
    });
  }
});

export default router;
