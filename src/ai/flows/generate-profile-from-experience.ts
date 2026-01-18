'use server';
/**
 * @fileOverview Generates a professional profile based on work experience and skills.
 *
 * - generateProfileFromExperience - A function that generates a professional profile.
 * - GenerateProfileInput - The input type for the generateProfileFromExperience function.
 * - GenerateProfileOutput - The return type for the generateProfileFromExperience function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProfileInputSchema = z.object({
  workExperience: z
    .string()
    .describe('A detailed description of the user\'s work experience.'),
  skills: z.string().describe('A list of the user\'s skills.'),
});
export type GenerateProfileInput = z.infer<typeof GenerateProfileInputSchema>;

const GenerateProfileOutputSchema = z.object({
  profile: z.string().describe('The generated professional profile.'),
});
export type GenerateProfileOutput = z.infer<typeof GenerateProfileOutputSchema>;

export async function generateProfileFromExperience(
  input: GenerateProfileInput
): Promise<GenerateProfileOutput> {
  return generateProfileFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProfilePrompt',
  input: {schema: GenerateProfileInputSchema},
  output: {schema: GenerateProfileOutputSchema},
  prompt: `You are an AI-powered professional profile writer. You will receive the user's work experience and skills, and you will generate a professional profile for them. Focus on the user's hybrid skill set, which includes administration, programming, and sales.

Work Experience: {{{workExperience}}}
Skills: {{{skills}}}`,
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
