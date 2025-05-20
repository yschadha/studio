
'use server';

import * as z from 'zod';
import { Resend } from 'resend';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

let resendClient: Resend | null = null;

if (process.env.RESEND_API_KEY) {
  try {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  } catch (e: any) {
    console.error("--------------------------------------------------------------------------------------------------");
    console.error("ERROR: Failed to initialize Resend client. Please check your RESEND_API_KEY.");
    console.error("Details:", e.message);
    console.error("Email functionality in the contact form will be disabled.");
    console.error("--------------------------------------------------------------------------------------------------");
  }
} else {
  console.warn(
    "--------------------------------------------------------------------------------------------------\n" +
    "WARNING: RESEND_API_KEY is not set in your environment variables (.env or .env.local file).\n" +
    "Email functionality in the contact form will be disabled until the API key is provided.\n" +
    "Please create or update your .env file with RESEND_API_KEY=your_key and restart the server.\n" +
    "Example .env content:\n" +
    "RESEND_API_KEY=re_12345678_abcdefghijklmnop\n" +
    "--------------------------------------------------------------------------------------------------"
  );
}

export async function sendContactMessage(
  values: z.infer<typeof contactFormSchema>
): Promise<{ success: boolean; error?: string; message?: string }> {
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid form data." };
  }

  if (!resendClient) {
    console.error('Resend client is not initialized. API key might be missing, invalid, or not set in .env file. Email not sent.');
    return { success: false, error: "Email configuration error. Please contact support or check server logs." };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resendClient.emails.send({
      from: 'AdOptimal Contact Form <onboarding@resend.dev>', // IMPORTANT: For Resend, use 'onboarding@resend.dev' for testing or a verified domain.
      to: ['yschadha@gmail.com'], // Updated to user's specified email
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
