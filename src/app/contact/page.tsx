import ContactForm from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-8 grid md:grid-cols-2 gap-12 items-start">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary mb-4">Get in Touch</h1>
        <p className="text-lg text-foreground/80">
          We&apos;re here to help! Whether you have questions about our platform, need support, or want to discuss partnership opportunities, feel free to reach out.
        </p>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-accent">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-primary" />
              <a href="mailto:hello@traeai.com" className="text-foreground/90 hover:text-primary">
                hello@traeai.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-primary" />
              <span className="text-foreground/90">(123) 456-7890 (Support Hours: M-F, 9am-5pm)</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-primary" />
              <span className="text-foreground/90">123 Campus Drive, University Town, USA</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
          <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
