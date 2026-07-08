import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Trip Planner',
  description: 'Plan your dream trip with our AI-powered travel consultant. Get personalized itineraries, budget breakdowns, and expert recommendations.',
};

export default function PlannerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
