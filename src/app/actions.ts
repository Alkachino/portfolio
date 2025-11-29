'use server';

import { improveContentWithAI } from '@/ai/flows/improve-content-with-ai';
import type { ImproveContentWithAIInput } from '@/ai/flows/improve-content-with-ai';


export async function improveContentAction(input: ImproveContentWithAIInput) {
  try {
    const result = await improveContentWithAI(input);
    if (!result || !result.improvedContent) {
        return { success: false, error: 'AI failed to generate content.' };
    }
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: `Failed to improve content: ${errorMessage}` };
  }
}
