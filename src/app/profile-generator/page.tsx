import ProfileGeneratorForm from '@/components/profile-generator-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, Sparkles } from 'lucide-react';

export default function ProfileGeneratorPage() {
  return (
    <div className="py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
          <Sparkles className="h-10 w-10 text-accent" />
          AI-Powered Profile Generator
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Craft a compelling profile for your student organization with the help of AI. 
          Simply paste your existing social media content, and let us generate an engaging description.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Generate Your Profile</CardTitle>
              <CardDescription>
                Enter your organization&apos;s social media posts or existing descriptions below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileGeneratorForm />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-muted/50 shadow-lg">
            <CardHeader className="flex flex-row items-center gap-3">
              <Lightbulb className="h-6 w-6 text-accent" />
              <CardTitle className="text-xl text-accent">Tips for Best Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground/70">
              <p><strong>Be Specific:</strong> Include details about your key activities, events, and mission.</p>
              <p><strong>Use Recent Content:</strong> Fresher posts often reflect current goals and vibes better.</p>
              <p><strong>Variety is Key:</strong> Mix in different types of content if possible (e.g., event announcements, member spotlights, mission statements).</p>
              <p><strong>Review & Refine:</strong> The AI provides a great starting point. Feel free to edit the generated profile to perfectly match your voice.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
