import ContactForm from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="py-8 md:py-12 grid md:grid-cols-2 gap-12 items-start">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let’s Work Together</h1>
        <p className="text-lg text-muted-foreground">
          We&apos;re here to help! Whether you have questions about our platform, need support, or want to discuss partnership opportunities, feel free to reach out.
        </p>
        
        <Card className="shadow-lg bg-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-primary" />
              <a href="mailto:hello@adoptimal.com" className="text-muted-foreground hover:text-primary">
                hello@adoptimal.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-primary" />
              <span className="text-muted-foreground">(123) 456-7890 (Support Hours: M-F, 9am-5pm)</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-primary" />
              <span className="text-muted-foreground">123 Campus Drive, University Town, USA</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-xl bg-card">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
          <CardDescription className="text-muted-foreground">Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
