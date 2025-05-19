import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, TrendingUp, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Connect Your Brand with Campus Buzz
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
            AdOptimal helps businesses reach engaged student audiences through targeted promotions with university organizations.
          </p>
          <Image 
            src="https://placehold.co/1200x500.png" 
            alt="Students engaging with brands" 
            width={1200} 
            height={500} 
            className="rounded-lg shadow-xl mx-auto mb-10 object-cover data-ai-hint='students community'"
            data-ai-hint="students community"
            priority
          />
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/browse-organizations">Browse Student Organizations</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-primary">Why Choose AdOptimal?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-center">Targeted Reach</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-foreground/70">
              Connect directly with specific student demographics through diverse campus organizations.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                 <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-center">Authentic Engagement</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-foreground/70">
              Leverage trusted student voices for genuine brand promotion and increased credibility.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-center">Simple & Effective</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-foreground/70">
              Easily find, contact, and collaborate with organizations that align with your brand values.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it Works Snippet */}
      <section className="py-16 bg-muted/50 rounded-xl shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-primary">Ready to Get Started?</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Discovering and partnering with student organizations is straightforward with AdOptimal. Learn more about our simple process.
          </p>
          <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
            <Link href="/how-it-works">Learn How It Works</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
