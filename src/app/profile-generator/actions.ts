'use server';

import { generateProfile, type GenerateProfileInput } from '@/ai/flows/profile-generator';
import * as z from 'zod';

const profileGeneratorSchema = z.object({
  socialMediaContent: z.string().min(50).max(5000),
});

export async function generateOrganizationProfile(
  values: z.infer<typeof profileGeneratorSchema>
): Promise<{ success: boolean; profileDescription?: string; error?: string }> {
  const validatedFields = profileGeneratorSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid input data." };
  }

  const input: GenerateProfileInput = {
    socialMediaContent: validatedFields.data.socialMediaContent,
  };

  try {
    const result = await generateProfile(input);
    if (result && result.profileDescription) {
      return { success: true, profileDescription: result.profileDescription };
    } else {
      return { success: false, error: "AI failed to generate a profile. The output was empty." };
    }
  } catch (error) {
    console.error("Error generating profile:", error);
    // It's good practice to check the error type, but for simplicity:
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { success: false, error: `AI profile generation failed: ${errorMessage}` };
  }
}
