import { Request, Response, NextFunction } from 'express';
import { generateTripPlan } from '../services/aiService';
import { createError } from '../middlewares/errorHandler';

export const planTrip = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { destination, startDate, endDate, budget, travellers, interests, travelStyle, specialRequirements } =
      req.body;

    // Validate that at least a destination is provided
    if (!destination || typeof destination !== 'string' || destination.trim().length === 0) {
      throw createError('Destination is required. Please tell us where you want to go!', 400);
    }

    const tripPlan = await generateTripPlan({
      destination: destination.trim(),
      startDate,
      endDate,
      budget,
      travellers,
      interests,
      travelStyle,
      specialRequirements,
    });

    res.status(200).json({
      success: true,
      data: tripPlan,
      meta: {
        generatedBy: 'Aria — Voyana Travels AI Consultant',
        generatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
};
