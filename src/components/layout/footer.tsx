import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t-2 border-primary mt-12">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="#" aria-label="LinkedIn" className="text-foreground hover:text-primary transition-colors">
            <Linkedin size={24} />
          </Link>
          <Link href="#" aria-label="Twitter" className="text-foreground hover:text-primary transition-colors">
            <Twitter size={24} />
          </Link>
          <Link href="#" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors">
            <Instagram size={24} />
          </Link>
           <Link href="#" aria-label="GitHub" className="text-foreground hover:text-primary transition-colors">
            <Github size={24} />
          </Link>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} AdOptimal. All rights reserved.</p>
        <p className="text-xs mt-1 text-muted-foreground">Powered by TraeAI</p>
      </div>
    </footer>
  );
}
