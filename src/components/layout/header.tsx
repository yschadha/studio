import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NAV_LINKS } from '@/lib/constants';
import { AdOptimalLogo } from '@/components/icons/adoptimal-logo';

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b-2 border-primary">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-semibold text-foreground">
          <AdOptimalLogo className="h-8 w-8 text-foreground" />
          <span>AdOptimal</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {NAV_LINKS.map((link) => (
            <Button key={link.href} variant="ghost" asChild className="text-foreground hover:bg-black hover:text-primary rounded-md px-4 py-2">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu can be added here later */}
          <Button variant="ghost" size="icon" className="text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
