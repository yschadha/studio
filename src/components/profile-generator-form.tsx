'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast"
import { useState } from 'react';
import { generateOrganizationProfile } from '@/app/profile-generator/actions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const formSchema = z.object({
  socialMediaContent: z.string().min(50, { message: 'Please provide at least 50 characters of content.' }).max(5000, { message: 'Content cannot exceed 5000 characters.' }),
});

type ProfileGeneratorFormValues = z.infer<typeof formSchema>;

export default function ProfileGeneratorForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedProfile, setGeneratedProfile] = useState<string | null>(null);

  const form = useForm<ProfileGeneratorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      socialMediaContent: '',
    },
  });

  async function onSubmit(values: ProfileGeneratorFormValues) {
    setIsSubmitting(true);
    setGeneratedProfile(null);
    try {
      const result = await generateOrganizationProfile(values);

      if (result.success && result.profileDescription) {
        setGeneratedProfile(result.profileDescription);
        toast({
          title: "Profile Generated!",
          description: "Your AI-powered profile description is ready.",
        });
      } else {
        toast({
          title: "Generation Failed",
          description: result.error || "Could not generate profile. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred during profile generation.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="socialMediaContent"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Social Media Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste your organization's social media posts, about sections, or any relevant text here..."
                    className="resize-y min-h-[200px] text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6" disabled={isSubmitting}>
            {isSubmitting ? (
              <><Sparkles className="mr-2 h-5 w-5 animate-spin" /> Generating...</>
            ) : (
              <><Sparkles className="mr-2 h-5 w-5" /> Generate Profile</>
            )}
          </Button>
        </form>
      </Form>

      {generatedProfile && (
        <Card className="mt-8 bg-primary/5 border-primary/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Generated Profile Description
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={generatedProfile}
              readOnly
              className="min-h-[150px] text-base bg-background"
              aria-label="Generated profile description"
            />
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => {
                navigator.clipboard.writeText(generatedProfile);
                toast({ title: "Copied!", description: "Profile description copied to clipboard."});
              }}
            >
              Copy to Clipboard
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

