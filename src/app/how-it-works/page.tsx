import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search, Users, Zap, CheckSquare, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    icon: Search,
    title: '1. Discover Organizations',
    description: 'Browse our extensive directory of student organizations. Use filters like category, follower count, and promotion rates to find the perfect match for your campaign.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'discovery search',
  },
  {
    icon: Users,
    title: '2. Connect & Collaborate',
    description: 'View detailed profiles and reach out directly to organizations. Discuss your campaign goals and negotiate terms for a mutually beneficial partnership.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'collaboration team',
  },
  {
    icon: Zap,
    title: '3. Launch Your Campaign',
    description: 'Once terms are agreed, work with the organization to launch your promotional activities. Track engagement and reach your target student audience effectively.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'campaign launch',
  },
  {
    icon: CheckSquare,
    title: '4. Achieve Results',
    description: 'Benefit from authentic endorsements and increased brand visibility within the campus community. Measure your success and build lasting relationships.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'success results',
  }
];

const benefits = [
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Reach specific student demographics and interest groups.',
  },
  {
    icon: Award,
    title: 'Authentic Endorsements',
    description: 'Gain credibility through trusted student voices.',
  },
  {
    icon: Zap,
    title: 'Cost-Effective Marketing',
    description: 'Achieve high impact with budgets suitable for all business sizes.',
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Foster positive brand association within campus communities.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-16 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">How AdOptimal Works</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Partnering with student organizations through AdOptimal is a simple, transparent, and effective way to boost your brand's campus presence.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-12 text-primary">Your Journey with AdOptimal</h2>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`md:grid md:grid-cols-2 items-center gap-8 ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`p-6 md:p-8 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-primary">{step.title}</h3>
                  </div>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
                <div className={`${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 md:h-full"
                    data-ai-hint={step.imageHint}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="py-12 bg-muted/50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-12 text-primary">Key Benefits of Partnering</h2>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="p-3 bg-accent/10 rounded-full mb-3">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-accent">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-6 text-primary">Ready to Amplify Your Reach?</h2>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-8">
          Start exploring student organizations that can help your brand connect with the next generation.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/browse-organizations">Browse Organizations Now</Link>
        </Button>
      </section>
    </div>
  );
}
