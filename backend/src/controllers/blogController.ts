import { Request, Response } from 'express';
import { blogs } from '../data/blogs';

/**
 * GET /api/blogs — Return all blog posts (with optional filtering)
 */
export const getAllBlogs = (req: Request, res: Response): void => {
  const { category, featured, tag, search } = req.query;

  let filtered = [...blogs];

  if (category && typeof category === 'string') {
    filtered = filtered.filter(
      (b) => b.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (featured === 'true') {
    filtered = filtered.filter((b) => b.featured);
  }

  if (tag && typeof tag === 'string') {
    const tagLower = tag.toLowerCase();
    filtered = filtered.filter((b) =>
      b.tags.some((t) => t.toLowerCase().includes(tagLower))
    );
  }

  if (search && typeof search === 'string') {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (b) =>
        b.title.toLowerCase().includes(searchLower) ||
        b.excerpt.toLowerCase().includes(searchLower)
    );
  }

  // Sort by date (newest first)
  filtered.sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  res.status(200).json({
    success: true,
    count: filtered.length,
    data: filtered,
  });
};

/**
 * GET /api/blogs/:slug — Return a single blog post by slug
 */
export const getBlogBySlug = (req: Request, res: Response): void => {
  const { slug } = req.params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    res.status(404).json({
      success: false,
      error: { message: `Blog post "${slug}" not found.` },
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: blog,
  });
};
