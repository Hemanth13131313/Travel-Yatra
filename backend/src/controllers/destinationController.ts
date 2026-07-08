import { Request, Response, NextFunction } from 'express';
import { destinations } from '../data/destinations';
import { getDestinationRecommendations } from '../services/aiService';
import { createError } from '../middlewares/errorHandler';

/**
 * GET /api/destinations — Return all destinations (with optional filtering)
 */
export const getAllDestinations = (req: Request, res: Response): void => {
  const { continent, featured, search } = req.query;

  let filtered = [...destinations];

  if (continent && typeof continent === 'string') {
    filtered = filtered.filter(
      (d) => d.continent.toLowerCase() === continent.toLowerCase()
    );
  }

  if (featured === 'true') {
    filtered = filtered.filter((d) => d.featured);
  }

  if (search && typeof search === 'string') {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (d) =>
        d.name.toLowerCase().includes(searchLower) ||
        d.country.toLowerCase().includes(searchLower) ||
        d.tagline.toLowerCase().includes(searchLower)
    );
  }

  res.status(200).json({
    success: true,
    count: filtered.length,
    data: filtered,
  });
};

/**
 * GET /api/destinations/:slug — Return a single destination by slug
 */
export const getDestinationBySlug = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { slug } = req.params;
    const destination = destinations.find((d) => d.slug === slug);

    if (!destination) {
      throw createError(`Destination "${slug}" not found.`, 404);
    }

    res.status(200).json({
      success: true,
      data: destination,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/destination-recommendations — AI-powered recommendations
 */
export const recommendDestinations = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { budget, interests, climate, travelStyle, duration, travelMonth, fromCountry, avoidCrowds, previousDestinations } =
      req.body;

    // At least one preference should be provided
    if (!budget && !interests && !climate && !travelStyle && !travelMonth) {
      throw createError(
        'Please provide at least one preference (budget, interests, climate, travelStyle, or travelMonth) so we can make great recommendations.',
        400
      );
    }

    const recommendations = await getDestinationRecommendations({
      budget,
      interests,
      climate,
      travelStyle,
      duration,
      travelMonth,
      fromCountry,
      avoidCrowds,
      previousDestinations,
    });

    res.status(200).json({
      success: true,
      data: recommendations,
      meta: {
        generatedBy: 'Aria — Voyana Travels AI Consultant',
        generatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    next(error);
  }
};
