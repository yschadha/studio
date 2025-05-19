import Image from 'next/image';
import { MOCK_ORGANIZATIONS, ORGANIZATION_CATEGORIES, Organization } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, DollarSign, Mail, Globe, LinkIcon as ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return MOCK_ORGANIZATIONS.map((org) => ({
    id: org.id,
  }));
}

async function getOrganization(id: string): Promise<Organization | undefined> {
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
    <div className="py-8 space-y-8">
      <Button variant="outline" asChild>
        <Link href="/browse-organizations">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Browse
        </Link>
      </Button>

      <Card className="overflow-hidden shadow-xl">
        <CardHeader className="relative p-0 aspect-[2/1] md:aspect-[3/1]">
          <Image
            src={organization.profileImage}
            alt={`${organization.name} banner`}
            fill
            className="object-cover"
            data-ai-hint={`${organization.type} event`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <CardTitle className="text-3xl md:text-4xl font-bold text-white">{organization.name}</CardTitle>
            {category && (
              <Badge variant="secondary" className="mt-2 bg-white/20 text-white backdrop-blur-sm">
                {CategoryIcon && <CategoryIcon className="h-4 w-4 mr-2" />}
                {category.label}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-primary">About Us</h2>
            <p className="text-foreground/80 leading-relaxed">{organization.description}</p>
            
            <div className="space-y-4 pt-4 border-t">
                <h3 className="text-xl font-semibold text-primary">Key Information</h3>
                <div className="flex items-center text-foreground/70">
                  <Users className="h-5 w-5 mr-3 text-accent" />
                  <span>{organization.instagramFollowers.toLocaleString()} Instagram Followers</span>
                </div>
                <div className="flex items-center text-foreground/70">
                  <DollarSign className="h-5 w-5 mr-3 text-accent" />
                  <span>Starting Partnership Rate: ${organization.startingRate}</span>
                </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Contact & Links</h3>
            {organization.contactEmail && (
              <div className="flex items-center">
                 <Mail className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <a href={`mailto:${organization.contactEmail}`} className="text-accent hover:underline break-all">
                  {organization.contactEmail}
                </a>
              </div>
            )}
            {organization.website && (
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <a href={organization.website} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">
                  {organization.website}
                </a>
              </div>
            )}
             <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                <ExternalLinkIcon className="h-4 w-4 mr-2" />
                Discuss Partnership
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
