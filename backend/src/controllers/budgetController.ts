import { Request, Response, NextFunction } from 'express';
import { optimizeBudget } from '../services/aiService';
import { createError } from '../middlewares/errorHandler';

/**
 * POST /api/budget-optimizer — AI-powered budget optimisation
 */
export const optimizeTravelBudget = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { budget, destination, duration, travellers, travelMonth, priorities, flexibility } = req.body;

    if (!budget || typeof budget !== 'string' || budget.trim().length === 0) {
      throw createError('Please provide your total travel budget (e.g., "$3000" or "3000 USD").', 400);
    }

    if (!destination || typeof destination !== 'string' || destination.trim().length === 0) {
      throw createError('Please provide a destination for budget optimisation.', 400);
    }

    const optimised = await optimizeBudget({
      budget: budget.trim(),
      destination: destination.trim(),
      duration,
      travellers,
      travelMonth,
      priorities,
      flexibility,
    });

    res.status(200).json({
      success: true,
      data: optimised,
      meta: {
        generatedBy: 'Aria — Voyana Travels AI Consultant',
        generatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
};
