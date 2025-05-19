
import Image from 'next/image';
import { MOCK_ORGANIZATIONS, ORGANIZATION_CATEGORIES, Organization } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Mail, Globe, MessageSquare, CalendarDays, School } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return MOCK_ORGANIZATIONS.map((org) => ({
    id: org.id,
  }));
}

async function getOrganization(id: string): Promise<Organization | undefined> {
  // Simulate API delay if needed: await new Promise(resolve => setTimeout(resolve, 1000));
  return MOCK_ORGANIZATIONS.find(org => org.id === id);
}

export default async function OrganizationProfilePage({ params }: { params: { id: string } }) {
  const organization = await getOrganization(params.id);

  if (!organization) {
    notFound();
  }

  const category = ORGANIZATION_CATEGORIES.find(cat => cat.value === organization.type);
  const CategoryIcon = category?.icon;

  return (
    <div className="py-8 md:py-12 space-y-8">
      <Button variant="outline" asChild className="rounded-full">
        <Link href="/browse-organizations">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Browse
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-xl bg-card">
        <CardHeader className="relative p-0 aspect-[16/9] md:aspect-[21/9]">
          <Image
            src={organization.profileImage}
            alt={`${organization.name} banner`}
            fill
            className="object-cover"
            data-ai-hint={`${organization.type} event campus`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{organization.name}</h1>
            {category && (
              <Badge variant="default" className="mt-2 bg-primary/80 text-primary-foreground backdrop-blur-sm border-none">
                {CategoryIcon && <CategoryIcon className="h-4 w-4 mr-2" />}
                {category.label}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">About Us</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{organization.description}</p>
            
            <div className="space-y-4 pt-4 border-t">
                <h3 className="text-xl font-semibold text-foreground">Key Information</h3>
                 <div className="flex items-center text-muted-foreground">
                  <School className="h-5 w-5 mr-3 text-primary" />
                  <span>{organization.collegeName}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-5 w-5 mr-3 text-primary" />
                  <span>{organization.instagramFollowers.toLocaleString()} Instagram Followers</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-5 w-5 mr-3 text-primary" />
                  <span>{organization.members.toLocaleString()} Members</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CalendarDays className="h-5 w-5 mr-3 text-primary" />
                  <span>Founded: {organization.dateFounded}</span>
                </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Contact & Links</h3>
            {organization.contactEmail && (
              <div className="flex items-start">
                 <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <a href={`mailto:${organization.contactEmail}`} className="text-primary hover:underline break-all">
                  {organization.contactEmail}
                </a>
              </div>
            )}
            {organization.website && (
              <div className="flex items-start">
                <Globe className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-1" />
                <a href={organization.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                  {organization.website}
                </a>
              </div>
            )}
             <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-foreground hover:text-primary rounded-full mt-4 py-3">
                <Link href="/contact">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Contact this Student Org
                </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
