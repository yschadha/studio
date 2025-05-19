import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Target, Megaphone, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24 py-8">
      {/* Hero Section */}
      <section className="text-center pt-8 md:pt-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 max-w-3xl mx-auto font-sans">
            Connect Your Brand with Campus Buzz
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl md:max-w-[60%] mx-auto mb-10 font-sans">
            AdOptimal connects businesses with trusted student voices across college campuses. Partner with student orgs for flyering, content, and events—all in one place.
          </p>
          <div className="relative w-full max-w-5xl aspect-[16/7] md:aspect-[16/6] mx-auto mb-10 rounded-lg shadow-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxmcmF0fGVufDB8fHx8MTc0NzY5MjI0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Students handing out flyers or tabling on a vibrant campus"
              fill
              className="object-cover"
              data-ai-hint="students campus high-contrast desaturated"
              priority
            />
          </div>
          <Button
            size="lg"
            asChild
            className="rounded-full px-6 py-3 text-lg font-semibold" 
          >
            <Link href="/browse-organizations">
              Explore Student Orgs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-foreground">Why AdOptimal?</h2>
        <div className="grid md:grid-cols-3 gap-8"> {/* gap-8 is 32px */}
          <Card className="bg-card transition-all duration-300 rounded-xl transform hover:scale-102">
            <CardHeader className="items-center pt-8 pb-4">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Target className="h-10 w-10 text-primary" /> {/* Icon for Targeted Reach */}
              </div>
              <CardTitle className="text-lg font-bold text-foreground">Targeted Reach</CardTitle> {/* 18px bold */}
            </CardHeader>
            <CardContent className="text-center text-muted-foreground pb-8 px-6 text-sm"> {/* 14px regular */}
              Reach the exact campus demo your brand needs with org-specific targeting.
            </CardContent>
          </Card>
          <Card className="bg-card transition-all duration-300 rounded-xl transform hover:scale-102">
            <CardHeader className="items-center pt-8 pb-4">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                 <Megaphone className="h-10 w-10 text-primary" /> {/* Icon for Authentic Promotion */}
              </div>
              <CardTitle className="text-lg font-bold text-foreground">Authentic Promotion</CardTitle> {/* 18px bold */}
            </CardHeader>
            <CardContent className="text-center text-muted-foreground pb-8 px-6 text-sm"> {/* 14px regular */}
              Partner with trusted student leaders for natural, credible advertising.
            </CardContent>
          </Card>
          <Card className="bg-card transition-all duration-300 rounded-xl transform hover:scale-102">
            <CardHeader className="items-center pt-8 pb-4">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Zap className="h-10 w-10 text-primary" /> {/* Icon for Simple & Effective */}
              </div>
              <CardTitle className="text-lg font-bold text-foreground">Simple & Effective</CardTitle> {/* 18px bold */}
            </CardHeader>
            <CardContent className="text-center text-muted-foreground pb-8 px-6 text-sm"> {/* 14px regular */}
              Book and launch campus promos in minutes. No friction, no overhead.
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
            className="border-foreground text-foreground hover:bg-black hover:text-white rounded-full px-8 py-4 text-lg font-semibold"
          >
            <Link href="/how-it-works">Learn How It Works</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
