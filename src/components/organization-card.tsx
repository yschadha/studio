
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Organization } from '@/lib/constants';
import { ORGANIZATION_CATEGORIES } from '@/lib/constants';
import { Users, CalendarDays, School } from 'lucide-react';

interface OrganizationCardProps {
  organization: Organization;
}

export default function OrganizationCard({ organization }: OrganizationCardProps) {
  const category = ORGANIZATION_CATEGORIES.find(cat => cat.value === organization.type);
  const CategoryIcon = category?.icon;

  // Specific hint for BGI logo, general for others. Max two words.
  const imageHint = organization.id === 'bgi-1' ? 'BGI logo' : `${organization.type} students`;


  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-card transform hover:scale-102">
      <CardHeader className="relative p-0">
        <Image
          src={organization.profileImage}
          alt={organization.name}
          width={400}
          height={200} 
          className="object-cover w-full h-48" 
          data-ai-hint={imageHint}
        />
         {CategoryIcon && (
          <Badge variant="secondary" className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground shadow-sm">
            <CategoryIcon className="h-4 w-4 mr-1.5 text-primary" />
            {category?.label}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-6 space-y-4"> 
        <CardTitle className="text-xl text-foreground">{organization.name}</CardTitle>
        <CardDescription className="line-clamp-3 text-muted-foreground h-[3.75rem]">{organization.description}</CardDescription>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 pt-4 border-t mt-4">
          {/* College Name */}
          <div className="flex flex-col items-center text-center space-y-0.5">
            <School className="h-5 w-5 text-primary" />
            <p className="text-xs text-muted-foreground/90">College</p>
            <p className="text-sm font-medium text-foreground">{organization.collegeName}</p>
          </div>
          {/* Instagram Followers */}
          <div className="flex flex-col items-center text-center space-y-0.5">
            <Users className="h-5 w-5 text-primary" />
            <p className="text-xs text-muted-foreground/90">Followers</p>
            <p className="text-sm font-medium text-foreground">{organization.instagramFollowers.toLocaleString()}</p>
          </div>
          {/* Members */}
          <div className="flex flex-col items-center text-center space-y-0.5">
            <Users className="h-5 w-5 text-primary" /> 
            <p className="text-xs text-muted-foreground/90">Members</p>
            <p className="text-sm font-medium text-foreground">{organization.members.toLocaleString()}</p>
          </div>
          {/* Date Founded */}
          <div className="flex flex-col items-center text-center space-y-0.5">
            <CalendarDays className="h-5 w-5 text-primary" />
            <p className="text-xs text-muted-foreground/90">Founded</p>
            <p className="text-sm font-medium text-foreground">{organization.dateFounded}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 border-t">
        <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-foreground hover:text-primary rounded-full">
          <Link href={`/organizations/${organization.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
