import { Request, Response, NextFunction } from 'express';
import { compareDestinations } from '../services/aiService';
import { createError } from '../middlewares/errorHandler';

/**
 * POST /api/travel-comparison — Compare two destinations side by side
 */
export const compareTwoDestinations = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { destination1, destination2, travelMonth, priorities, travelStyle, budget } = req.body;

    if (!destination1 || typeof destination1 !== 'string' || destination1.trim().length === 0) {
      throw createError('Please provide the first destination to compare.', 400);
    }

    if (!destination2 || typeof destination2 !== 'string' || destination2.trim().length === 0) {
      throw createError('Please provide the second destination to compare.', 400);
    }

    if (destination1.trim().toLowerCase() === destination2.trim().toLowerCase()) {
      throw createError('Please provide two different destinations to compare.', 400);
    }

    const comparison = await compareDestinations({
      destination1: destination1.trim(),
      destination2: destination2.trim(),
      travelMonth,
      priorities,
      travelStyle,
      budget,
    });

    res.status(200).json({
      success: true,
      data: comparison,
      meta: {
        generatedBy: 'Aria — Voyana Travels AI Consultant',
        generatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
};
