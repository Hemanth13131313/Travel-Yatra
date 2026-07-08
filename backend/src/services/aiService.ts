import { GoogleGenAI } from '@google/genai';
import { config } from '../config';
import { tripPlannerSystemPrompt, buildTripPlannerPrompt } from '../prompts/tripPlanner';
import {
  destinationRecommenderSystemPrompt,
  buildDestinationRecommenderPrompt,
} from '../prompts/destinationRecommender';
import { budgetOptimizerSystemPrompt, buildBudgetOptimizerPrompt } from '../prompts/budgetOptimizer';
import { travelComparisonSystemPrompt, buildTravelComparisonPrompt } from '../prompts/travelComparison';

const ai = new GoogleGenAI({ apiKey: config.geminiApiKey });

const MODEL = 'gemini-2.0-flash';

/**
 * Helper to call Gemini and parse JSON response
 */
async function callGemini(systemPrompt: string, userPrompt: string): Promise<Record<string, unknown>> {
  if (!config.geminiApiKey) {
    throw new Error('GEMINI_API_KEY is not configured. Please add it to your .env file.');
  }

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: [
      {
        role: 'user',
        parts: [{ text: userPrompt }],
      },
    ],
    config: {
      systemInstruction: systemPrompt,
      temperature: 0.8,
      maxOutputTokens: 8192,
    },
  });

  const text = response.text;

  if (!text) {
    throw new Error('Received empty response from AI service.');
  }

  // Clean the response — strip markdown code fences if present
  let cleaned = text.trim();
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.slice(7);
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.slice(3);
  }
  if (cleaned.endsWith('```')) {
    cleaned = cleaned.slice(0, -3);
  }
  cleaned = cleaned.trim();

  try {
    return JSON.parse(cleaned) as Record<string, unknown>;
  } catch {
    console.error('Failed to parse AI response as JSON:', cleaned.substring(0, 200));
    throw new Error(
      'AI service returned an invalid response. Please try again — sometimes the AI needs a second attempt.'
    );
  }
}

/**
 * Generate a comprehensive trip plan
 */
export async function generateTripPlan(userInput: {
  destination?: string;
  startDate?: string;
  endDate?: string;
  budget?: string;
  travellers?: string;
  interests?: string[];
  travelStyle?: string;
  specialRequirements?: string;
}): Promise<Record<string, unknown>> {
  const userPrompt = buildTripPlannerPrompt(userInput);
  return callGemini(tripPlannerSystemPrompt, userPrompt);
}

/**
 * Get AI-powered destination recommendations
 */
export async function getDestinationRecommendations(preferences: {
  budget?: string;
  interests?: string[];
  climate?: string;
  travelStyle?: string;
  duration?: string;
  travelMonth?: string;
  fromCountry?: string;
  avoidCrowds?: boolean;
  previousDestinations?: string[];
}): Promise<Record<string, unknown>> {
  const userPrompt = buildDestinationRecommenderPrompt(preferences);
  return callGemini(destinationRecommenderSystemPrompt, userPrompt);
}

/**
 * Optimise travel within a budget
 */
export async function optimizeBudget(input: {
  budget: string;
  destination: string;
  duration?: string;
  travellers?: string;
  travelMonth?: string;
  priorities?: string[];
  flexibility?: string;
}): Promise<Record<string, unknown>> {
  const userPrompt = buildBudgetOptimizerPrompt(input);
  return callGemini(budgetOptimizerSystemPrompt, userPrompt);
}

/**
 * Compare two destinations side by side
 */
export async function compareDestinations(input: {
  destination1: string;
  destination2: string;
  travelMonth?: string;
  priorities?: string[];
  travelStyle?: string;
  budget?: string;
}): Promise<Record<string, unknown>> {
  const userPrompt = buildTravelComparisonPrompt(input);
  return callGemini(travelComparisonSystemPrompt, userPrompt);
}
