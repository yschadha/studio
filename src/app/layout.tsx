import type { Metadata } from 'next';
// Removed Geist font imports as we are switching to Avenir Book via Tailwind config
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"

// Removed geistSans and geistMono constant declarations

export const metadata: Metadata = {
  title: 'AdOptimal: Campus Connect',
  description: 'Connect with student organizations for effective advertising.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Removed font variables from body className */}
      <body className={`antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
