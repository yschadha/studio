'use server';

import * as z from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export async function sendContactMessage(
  values: z.infer<typeof contactFormSchema>
): Promise<{ success: boolean; error?: string }> {
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid form data." };
  }

  const { name, email, message } = validatedFields.data;

  // Simulate sending an email or saving to a database
  console.log('Received contact message:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // In a real application, you would integrate with an email service (e.g., SendGrid, Mailgun)
  // or save the message to your database.
  // For this example, we'll assume success.

  // Example of a potential failure point:
  // if (Math.random() > 0.8) { // Simulate a 20% chance of failure
  //   return { success: false, error: "Simulated server error. Please try again." };
  // }

  return { success: true };
}
