
'use server';

import { Resend } from 'resend';

export async function sendContactMessage(formData: { name: string; email: string; message: string }) {
  // Log the value of RESEND_API_KEY as soon as the server action is invoked
  // This log will appear in your terminal where the Next.js dev server is running.
  console.log('[Server Action Log] Value of process.env.RESEND_API_KEY upon function call:', process.env.RESEND_API_KEY);

  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.trim() === '') {
    console.error('[Server Action Error] RESEND_API_KEY is not set, is empty, or contains only whitespace in environment variables. Email sending is disabled.');
    return {
      success: false,
      message: 'Server configuration error: The email service API key is missing or invalid. Please contact support.',
    };
  }

  // If we reach here, RESEND_API_KEY is presumed to be set and valid.
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log('[Server Action Log] Resend client initialized.');
  console.log('[Server Action Log] Attempting to send email with formData:', { name: formData.name, email: formData.email, messageLength: formData.message.length });


  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'yschadha@gmail.com',
      subject: `New message from ${formData.name}`,
      html: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
      reply_to: formData.email,
    });
    console.log('[Server Action Log] Email sent successfully. Response ID:', data.id);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    let errorMessage = 'Error sending email. Please try again later.';
    if (error instanceof Error) {
      errorMessage = `Error sending email: ${error.message}`;
    } else if (typeof error === 'object' && error !== null && 'message' in error && typeof (error as {message: string}).message === 'string') {
      errorMessage = `Error sending email: ${(error as {message: string}).message}`;
    }
    console.error('[Server Action Error] Failed to send email via Resend:', error);
    return { success: false, message: errorMessage };
  }
}
