// src/ai/flows/content-suggestions.ts
'use server';

/**
 * @fileOverview An AI-powered content suggestion flow that provides tailored recommendations for portfolio content.
 *
 * - getContentSuggestions - A function that suggests content improvements using AI.
 * - GetContentSuggestionsInput - The input type for the getContentSuggestions function.
 * - GetContentSuggestionsOutput - The return type for the getContentSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetContentSuggestionsInputSchema = z.object({
  section: z
    .string()
    .describe(
      'The specific portfolio section to improve (e.g., About Me, Skills, Projects, Contact).'      
    ),
  content: z
    .string()
    .describe('The existing content of the portfolio section.'),
});
export type GetContentSuggestionsInput = z.infer<typeof GetContentSuggestionsInputSchema>;

const GetContentSuggestionsOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'AI-generated suggestions to improve the content, tailored to the specific portfolio section.'
    ),
});
export type GetContentSuggestionsOutput = z.infer<typeof GetContentSuggestionsOutputSchema>;

export async function getContentSuggestions(
  input: GetContentSuggestionsInput
): Promise<GetContentSuggestionsOutput> {
  return getContentSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getContentSuggestionsPrompt',
  input: {schema: GetContentSuggestionsInputSchema},
  output: {schema: GetContentSuggestionsOutputSchema},
  prompt: `You are an AI assistant specializing in suggesting improvements for developer portfolios.\
\
You will receive a specific portfolio section (e.g., About Me, Skills, Projects, Contact) and the existing content for that section.\
\
Your task is to provide tailored suggestions to improve the content, making it more compelling, professional, and engaging for potential employers or collaborators.\
\
Consider the following when providing suggestions:\
- Clarity: Ensure the content is easy to understand and free of jargon.
- Impact: Highlight the developer's accomplishments and contributions.
- Relevance: Tailor the content to the specific section and its purpose.
- Professionalism: Maintain a formal and polished tone.\
\
Portfolio Section: {{{section}}}\
Existing Content: {{{content}}}\
\
Suggestions:`, 
});

const getContentSuggestionsFlow = ai.defineFlow(
  {
    name: 'getContentSuggestionsFlow',
    inputSchema: GetContentSuggestionsInputSchema,
    outputSchema: GetContentSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
