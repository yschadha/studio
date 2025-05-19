'use server';
/**
 * @fileOverview AI-powered profile generator for student organizations.
 *
 * - generateProfile - A function that generates a profile description for a student organization.
 * - GenerateProfileInput - The input type for the generateProfile function.
 * - GenerateProfileOutput - The return type for the generateProfile function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProfileInputSchema = z.object({
  socialMediaContent: z
    .string()
    .describe(
      'Content from the organization`s social media, including posts, descriptions, and other relevant text.'
    ),
});
export type GenerateProfileInput = z.infer<typeof GenerateProfileInputSchema>;

const GenerateProfileOutputSchema = z.object({
  profileDescription: z
    .string()
    .describe('A compelling profile description for the student organization.'),
});
export type GenerateProfileOutput = z.infer<typeof GenerateProfileOutputSchema>;

export async function generateProfile(
  input: GenerateProfileInput
): Promise<GenerateProfileOutput> {
  return generateProfileFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProfilePrompt',
  input: {schema: GenerateProfileInputSchema},
  output: {schema: GenerateProfileOutputSchema},
  prompt: `You are an AI assistant helping student organizations create appealing profiles for the AdOptimal platform.

  Based on the provided social media content, generate a concise and engaging profile description that highlights the organization's key activities, values, and goals.

  Social Media Content: {{{socialMediaContent}}}

  Profile Description:`, // Ensure this is a valid Handlebars template
});

const generateProfileFlow = ai.defineFlow(
  {
    name: 'generateProfileFlow',
    inputSchema: GenerateProfileInputSchema,
    outputSchema: GenerateProfileOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
