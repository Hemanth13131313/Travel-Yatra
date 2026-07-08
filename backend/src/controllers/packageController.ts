import { Request, Response } from 'express';
import { packages } from '../data/packages';

/**
 * GET /api/packages — Return all packages (with optional filtering)
 */
export const getAllPackages = (req: Request, res: Response): void => {
  const { category, featured, destination, minPrice, maxPrice, sort } = req.query;

  let filtered = [...packages];

  if (category && typeof category === 'string') {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (featured === 'true') {
    filtered = filtered.filter((p) => p.featured);
  }

  if (destination && typeof destination === 'string') {
    const destLower = destination.toLowerCase();
    filtered = filtered.filter((p) =>
      p.destination.toLowerCase().includes(destLower)
    );
  }

  if (minPrice && typeof minPrice === 'string') {
    const min = parseInt(minPrice, 10);
    if (!isNaN(min)) {
      filtered = filtered.filter((p) => p.price >= min);
    }
  }

  if (maxPrice && typeof maxPrice === 'string') {
    const max = parseInt(maxPrice, 10);
    if (!isNaN(max)) {
      filtered = filtered.filter((p) => p.price <= max);
    }
  }

  // Sorting
  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  res.status(200).json({
    success: true,
    count: filtered.length,
    data: filtered,
  });
};

/**
 * GET /api/packages/:slug — Return a single package by slug
 */
export const getPackageBySlug = (req: Request, res: Response): void => {
  const { slug } = req.params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    res.status(404).json({
      success: false,
      error: { message: `Package "${slug}" not found.` },
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: pkg,
  });
};
