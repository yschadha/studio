
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

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-card transform hover:scale-102">
      <CardHeader className="relative p-0">
        <Image
          src={organization.profileImage}
          alt={organization.name}
          width={400}
          height={200}
          className="object-cover w-full h-48"
          data-ai-hint={`${organization.type} students`}
        />
         {CategoryIcon && (
          <Badge variant="secondary" className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground shadow-sm">
            <CategoryIcon className="h-4 w-4 mr-1.5 text-primary" />
            {category?.label}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-6 space-y-3">
        <CardTitle className="text-xl text-foreground">{organization.name}</CardTitle>
        <CardDescription className="line-clamp-3 text-muted-foreground">{organization.description}</CardDescription>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2 text-sm text-muted-foreground border-t mt-3">
          <div className="flex items-center mt-2">
            <School className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
            <span>{organization.collegeName}</span>
          </div>
          <div className="flex items-center mt-2">
            <Users className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
            <span>{organization.instagramFollowers.toLocaleString()} Followers</span>
          </div>
          <div className="flex items-center mt-2">
            <Users className="h-4 w-4 mr-2 text-primary flex-shrink-0" /> 
            <span>{organization.members.toLocaleString()} Members</span>
          </div>
          <div className="flex items-center mt-2">
            <CalendarDays className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
            <span>Founded: {organization.dateFounded}</span>
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
