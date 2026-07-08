import { Request, Response, NextFunction } from 'express';
import { createError } from '../middlewares/errorHandler';

/**
 * POST /api/contact — Handle contact form submission
 */
export const submitContactForm = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { name, email, phone, subject, message, tripInterest } = req.body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      throw createError('Please provide your full name (at least 2 characters).', 400);
    }

    if (!email || typeof email !== 'string') {
      throw createError('Please provide a valid email address.', 400);
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw createError('Please provide a valid email address format.', 400);
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      throw createError('Please provide a message (at least 10 characters).', 400);
    }

    // Log the contact form submission (in production, this would send an email or save to DB)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📧 NEW CONTACT FORM SUBMISSION');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`Name:          ${name.trim()}`);
    console.log(`Email:         ${email.trim()}`);
    console.log(`Phone:         ${phone || 'Not provided'}`);
    console.log(`Subject:       ${subject || 'General Inquiry'}`);
    console.log(`Trip Interest: ${tripInterest || 'Not specified'}`);
    console.log(`Message:       ${message.trim()}`);
    console.log(`Submitted At:  ${new Date().toISOString()}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    res.status(200).json({
      success: true,
      data: {
        message: 'Thank you for reaching out! Our travel consultants will get back to you within 24 hours.',
        referenceId: `VT-${Date.now().toString(36).toUpperCase()}`,
        submittedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
};
