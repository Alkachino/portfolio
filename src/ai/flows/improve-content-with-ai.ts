'use server';

/**
 * @fileOverview An AI-powered content improver flow that refines user-provided text for portfolio sections.
 *
 * - improveContentWithAI - A function that enhances content using AI.
 * - ImproveContentWithAIInput - The input type for the improveContentWithAI function.
 * - ImproveContentWithAIOutput - The return type for the improveContentWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveContentWithAIInputSchema = z.object({
  content: z.string().describe('The content to be improved.'),
  context: z
    .string()
    .describe(
      'The context of the content, e.g., \'About Me\', \'Skills\', or \'Projects\'.'
    ),
});
export type ImproveContentWithAIInput = z.infer<typeof ImproveContentWithAIInputSchema>;

const ImproveContentWithAIOutputSchema = z.object({
  improvedContent: z
    .string()
    .describe('The improved content based on the AI suggestions.'),
});
export type ImproveContentWithAIOutput = z.infer<typeof ImproveContentWithAIOutputSchema>;

export async function improveContentWithAI(
  input: ImproveContentWithAIInput
): Promise<ImproveContentWithAIOutput> {
  return improveContentWithAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveContentAIPrompt',
  input: {schema: ImproveContentWithAIInputSchema},
  output: {schema: ImproveContentWithAIOutputSchema},
  prompt: `You are an AI-powered content improver for developer portfolios.

  You will receive content and its context (e.g., 'About Me', 'Skills', or 'Projects').
  Your goal is to refine the content to be more engaging, professional, and tailored to its context.
  Consider the following aspects when improving the content:
  - Clarity: Ensure the content is easy to understand and free of jargon.
  - Engagement: Make the content captivating and interesting to read.
  - Professionalism: Maintain a formal and polished tone.
  - Context: Tailor the content to the specific section of the portfolio.

  Original Content: {{{content}}}
  Context: {{{context}}}

  Improved Content:`,
});

const improveContentWithAIFlow = ai.defineFlow(
  {
    name: 'improveContentWithAIFlow',
    inputSchema: ImproveContentWithAIInputSchema,
    outputSchema: ImproveContentWithAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
