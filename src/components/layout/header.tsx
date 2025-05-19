import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/lib/constants';
import { AdOptimalLogo } from '@/components/icons/adoptimal-logo'; // Changed import

export default function Header() {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
          <AdOptimalLogo className="h-7 w-7 text-primary" /> {/* Changed component and class */}
          <span>AdOptimal</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {NAV_LINKS.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu can be added here later */}
        </div>
      </div>
    </header>
  );
}
