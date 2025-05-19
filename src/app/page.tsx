import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Target, Megaphone, Zap } from 'lucide-react'; // Replaced icons

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24 py-8">
      {/* Hero Section */}
      <section className="text-center pt-8 md:pt-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 max-w-3xl mx-auto">
            Partner with Campus Voices That Move Culture
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl md:max-w-2xl mx-auto mb-10">
            AdOptimal helps brands collaborate with verified student organizations for authentic, hyper-local promotion.
          </p>
          <div className="relative w-full max-w-5xl aspect-[16/7] md:aspect-[16/6] mx-auto mb-10 rounded-lg shadow-2xl overflow-hidden">
            <Image 
              src="https://placehold.co/1200x500.png" 
              alt="Students engaging on a vibrant campus" 
              fill
              className="object-cover"
              data-ai-hint="students campus high-contrast desaturated"
              priority
            />
          </div>
          <Button 
            size="lg" 
            asChild 
            className="bg-primary text-primary-foreground hover:bg-foreground hover:text-primary rounded-full px-8 py-4 text-lg font-semibold"
          >
            <Link href="/browse-organizations">
              Browse Student Orgs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-foreground">Why AdOptimal?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl transform hover:scale-102">
            <CardHeader className="items-center pt-8 pb-4">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Targeted Reach</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground pb-8 px-6">
              Find clubs by type, size, and location.
            </CardContent>
          </Card>
          <Card className="bg-card shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl transform hover:scale-102">
            <CardHeader className="items-center pt-8 pb-4">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                 <Megaphone className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Authentic Promotion</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground pb-8 px-6">
              Let students tell your story for you.
            </CardContent>
          </Card>
          <Card className="bg-card shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl transform hover:scale-102">
            <CardHeader className="items-center pt-8 pb-4">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground">Easy Booking</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground pb-8 px-6">
              One-click to request, promote, and pay.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it Works Snippet */}
      <section className="py-12 md:py-16 bg-muted/30 rounded-xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discovering and partnering with student organizations is straightforward with AdOptimal. Learn more about our simple process.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8 py-4 text-lg font-semibold"
          >
            <Link href="/how-it-works">Learn How It Works</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
