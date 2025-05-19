import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, TrendingUp, Users, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 rounded-xl"> {/* Removed gradient bg */}
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-primary mb-6"> {/* Updated: Font size, weight, color */}
            Connect Your Brand with Campus Buzz
          </h1>
          <p className="text-xl text-[#475569] max-w-[60%] mx-auto mb-10"> {/* Updated: Font size, color, width */}
            AdOptimal connects businesses with trusted student voices across college campuses. Partner with student orgs for flyering, content, and events—all in one place.
          </p>
          <div className="relative w-full max-w-4xl aspect-[12/5] mx-auto mb-10 rounded-lg shadow-xl overflow-hidden">
            <Image 
              src="https://placehold.co/1200x500.png" 
              alt="Students handing out flyers or tabling on campus" 
              fill
              className="object-cover"
              data-ai-hint="students flyers tabling" /* Updated hint */
              priority
            />
          </div>
          <Button 
            size="lg" 
            asChild 
            className="bg-primary text-accent hover:bg-accent hover:text-primary rounded-full px-6 py-3 text-base font-semibold" /* Updated: styles */
          >
            <Link href="/browse-organizations">
              Explore Student Orgs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-primary">Why AdOptimal?</h2>
        <div className="grid md:grid-cols-3 gap-8"> {/* gap-8 is 32px */}
          <Card className="bg-card shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl"> {/* Updated: rounded-xl */}
            <CardHeader className="items-center pt-6">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg font-bold text-primary">Targeted Reach</CardTitle> {/* Updated: Font size, weight */}
            </CardHeader>
            <CardContent className="text-center text-sm font-normal text-muted-foreground pb-6"> {/* Updated: Font size, weight, color */}
              Reach the exact campus demo your brand needs with org-specific targeting.
            </CardContent>
          </Card>
          <Card className="bg-card shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl"> {/* Updated: rounded-xl */}
            <CardHeader className="items-center pt-6">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                 <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg font-bold text-primary">Authentic Promotion</CardTitle> {/* Updated: Text, Font size, weight */}
            </CardHeader>
            <CardContent className="text-center text-sm font-normal text-muted-foreground pb-6"> {/* Updated: Font size, weight, color */}
              Partner with trusted student leaders for natural, credible advertising.
            </CardContent>
          </Card>
          <Card className="bg-card shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl"> {/* Updated: rounded-xl */}
            <CardHeader className="items-center pt-6">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg font-bold text-primary">Simple & Effective</CardTitle> {/* Updated: Font size, weight */}
            </CardHeader>
            <CardContent className="text-center text-sm font-normal text-muted-foreground pb-6"> {/* Updated: Font size, weight, color */}
              Book and launch campus promos in minutes. No friction, no overhead.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it Works Snippet */}
      <section className="py-16 bg-muted/30 rounded-xl shadow-lg"> {/* Adjusted background transparency */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-primary">Ready to Get Started?</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Discovering and partnering with student organizations is straightforward with AdOptimal. Learn more about our simple process.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-3"
          >
            <Link href="/how-it-works">Learn How It Works</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
