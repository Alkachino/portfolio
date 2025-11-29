'use server';

import { improveContentWithAI } from '@/ai/flows/improve-content-with-ai';
import type { ImproveContentWithAIInput } from '@/ai/flows/improve-content-with-ai';
import { portfolioChat } from '@/ai/flows/portfolio-chat';
import type { PortfolioChatInput } from '@/ai/flows/portfolio-chat';


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

export async function portfolioChatAction(input: PortfolioChatInput | FormData) {
  let chatInput: PortfolioChatInput;

  if (input instanceof FormData) {
    const question = input.get('question') as string;
    const historyString = input.get('history') as string | null;
    const history = historyString ? JSON.parse(historyString) : [];
    chatInput = { question, history };
  } else {
    chatInput = input;
  }

  try {
    const result = await portfolioChat(chatInput);
    if (!result || !result.answer) {
      return { success: false, error: 'AI failed to generate a response.' };
    }
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: `Failed to get a response: ${errorMessage}` };
  }
}
