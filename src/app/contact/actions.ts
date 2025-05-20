
'use server';

import * as z from 'zod';
import { Resend } from 'resend';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

// Initialize Resend with your API key from environment variables
// Make sure to set RESEND_API_KEY in your .env or .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(
  values: z.infer<typeof contactFormSchema>
): Promise<{ success: boolean; error?: string; message?: string }> {
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid form data." };
  }

  const { name, email, message } = validatedFields.data;

  // Ensure API key is available
  if (!process.env.RESEND_API_KEY) {
    console.error('Resend API key is not set. Email not sent.');
    // For production, you might want to return an error to the user or handle this more gracefully.
    // For now, we'll log it and proceed as if it failed to send for the user.
    return { success: false, error: "Email configuration error. Please contact support." };
  }

  try {
    // Replace with your desired "to" and "from" email addresses
    // The "from" address for Resend typically needs to be a verified domain
    // or use 'onboarding@resend.dev' for testing if your domain isn't verified yet.
    const { data, error } = await resend.emails.send({
      from: 'AdOptimal Contact Form <onboarding@resend.dev>', // Change this to your verified 'from' email
      to: ['your-email@example.com'], // !!! REPLACE THIS WITH YOUR ACTUAL EMAIL ADDRESS !!!
      subject: `New Contact Message from ${name} via AdOptimal`,
      reply_to: email,
      html: `
        <p>You received a new message from your AdOptimal contact form:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error: "Failed to send message. Please try again." };
    }

    console.log('Email sent successfully:', data);
    return { success: true, message: "Message sent successfully!" };

  } catch (exception) {
    console.error('Error sending email:', exception);
    return { success: false, error: "An unexpected error occurred while sending the message." };
  }
}
