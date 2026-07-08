import { Request, Response, NextFunction } from 'express';

interface RateLimitEntry {
  count: number;
  firstRequest: number;
}

const requestCounts = new Map<string, RateLimitEntry>();

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of requestCounts.entries()) {
    if (now - entry.firstRequest > 60_000) {
      requestCounts.delete(key);
    }
  }
}, 300_000);

/**
 * Simple in-memory rate limiter
 * @param maxRequests - Maximum requests per window
 * @param windowMs - Time window in milliseconds
 */
export const rateLimiter = (maxRequests: number = 30, windowMs: number = 60_000) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();

    const entry = requestCounts.get(clientIp);

    if (!entry || now - entry.firstRequest > windowMs) {
      // First request in this window or window has expired
      requestCounts.set(clientIp, { count: 1, firstRequest: now });
      next();
      return;
    }

    if (entry.count >= maxRequests) {
      const retryAfter = Math.ceil((entry.firstRequest + windowMs - now) / 1000);
      res.setHeader('Retry-After', String(retryAfter));
      res.status(429).json({
        success: false,
        error: {
          message: `Too many requests. Please try again in ${retryAfter} seconds.`,
          retryAfter,
        },
      });
      return;
    }

    entry.count++;
    next();
  };
};

/**
 * Stricter rate limiter for AI endpoints (more expensive operations)
 */
export const aiRateLimiter = rateLimiter(10, 60_000);
