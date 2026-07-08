import { Router } from 'express';

const router = Router();

router.post('/planner', (req, res) => {
  // Mock endpoint for the AI planner
  res.json({ success: true, message: 'Planner endpoint is active.' });
});

export default router;
