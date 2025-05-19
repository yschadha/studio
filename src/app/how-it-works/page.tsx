import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Edit3, Send, Bell, Target, Award, Zap as ZapIcon, Users } from 'lucide-react'; // Zap is already used, aliasing to ZapIcon
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    icon: Search,
    title: '1. Find a Student Org',
    description: 'Browse our extensive directory of student organizations. Use filters like category, follower count, and promotion rates to find the perfect match for your campaign.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'search student organization',
  },
  {
    icon: Edit3,
    title: '2. Choose a Promo Type',
    description: 'Select from various promotion packages offered by organizations, or propose a custom collaboration that fits your needs.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'select promotion package',
  },
  {
    icon: Send,
    title: '3. Send a Request',
    description: 'Easily send a partnership request to the selected organization with your campaign details and goals. Communicate directly through the platform.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'send partnership request',
  },
  {
    icon: Bell,
    title: '4. Get Notified When It’s Live',
    description: 'Receive notifications once your promotion is active. Track performance and see the impact of your campus collaboration.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'campaign live notification',
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
    icon: ZapIcon,
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
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How AdOptimal Works</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Partnering with student organizations through AdOptimal is a simple, transparent, and effective way to boost your brand's campus presence.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">Your Journey with AdOptimal</h2>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card transform hover:scale-101">
              <div className={`md:grid md:grid-cols-2 items-center gap-8 ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`p-6 md:p-8 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                  <div className="flex items-center mb-4 group">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground relative">
                      {step.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
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
      
      <section className="py-12 bg-muted/30 rounded-xl">
        <h2 className="text-3xl font-semibold text-center mb-12 text-foreground">Key Benefits of Partnering</h2>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 bg-card transform hover:scale-102">
                <CardHeader className="items-center pt-6 pb-3">
                  <div className="p-3 bg-primary/10 rounded-full mb-3">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-6 text-foreground">Ready to Amplify Your Reach?</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Start exploring student organizations that can help your brand connect with the next generation.
        </p>
        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-foreground hover:text-primary rounded-full px-8 py-4 text-lg font-semibold">
          <Link href="/browse-organizations">Browse Organizations Now</Link>
        </Button>
      </section>
    </div>
  );
}
