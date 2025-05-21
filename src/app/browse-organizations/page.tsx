
'use client';

import { useState, useMemo, useEffect } from 'react';
import OrganizationCard from '@/components/organization-card';
import { MOCK_ORGANIZATIONS, ORGANIZATION_CATEGORIES, Organization } from '@/lib/constants';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from "@/components/ui/slider";
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { XIcon, SearchIcon, Users } from 'lucide-react';

const MAX_FOLLOWERS = Math.max(...MOCK_ORGANIZATIONS.map(org => org.instagramFollowers), 5000);
const MAX_MEMBERS = Math.max(...MOCK_ORGANIZATIONS.map(org => org.members), 100); 

export default function BrowseOrganizationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [followerRange, setFollowerRange] = useState<[number, number]>([0, MAX_FOLLOWERS]);
  const [memberRange, setMemberRange] = useState<[number, number]>([0, MAX_MEMBERS]); 
  
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);


  const filteredOrganizations = useMemo(() => {
    return MOCK_ORGANIZATIONS.filter((org) => {
      const nameMatch = org.name.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = selectedCategory === 'all' || org.type === selectedCategory;
      const followerMatch = org.instagramFollowers >= followerRange[0] && org.instagramFollowers <= followerRange[1];
      const memberMatch = org.members >= memberRange[0] && org.members <= memberRange[1]; 
      return nameMatch && categoryMatch && followerMatch && memberMatch;
    });
  }, [searchTerm, selectedCategory, followerRange, memberRange]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setFollowerRange([0, MAX_FOLLOWERS]);
    setMemberRange([0, MAX_MEMBERS]); 
  };

  if (!isMounted) {
    return (
      <div className="space-y-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">Discover Student Organizations</h1>
          <p className="text-lg text-muted-foreground">Find the perfect partners for your campus campaigns.</p>
        </div>
        <div className="p-6 bg-card rounded-xl space-y-6">
          <p className="text-muted-foreground">Loading filters...</p>
        </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-card p-6 rounded-lg shadow-md animate-pulse">
              <div className="h-48 bg-muted rounded-md mb-4"></div>
              <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/2 mb-4"></div>
              <div className="h-10 bg-muted rounded-full w-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2">Discover Student Organizations</h1>
        <p className="text-lg text-muted-foreground">Find the perfect partners for your campus campaigns.</p>
      </div>

      <div className="p-6 bg-card rounded-xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          <div>
            <Label htmlFor="search" className="block text-sm font-medium text-foreground mb-1">Search by Name</Label>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="search"
                type="text"
                placeholder="e.g., Tech Club"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-foreground" 
              />
            </div>
          </div>
          <div>
            <Label htmlFor="category" className="block text-sm font-medium text-foreground mb-1">Category</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger id="category" className="rounded-full border-foreground">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {ORGANIZATION_CATEGORIES.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    <div className="flex items-center">
                      <cat.icon className="h-4 w-4 mr-2 text-primary" />
                      {cat.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="followers" className="block text-sm font-medium text-foreground mb-1">
                Instagram Followers: {followerRange[0].toLocaleString()} - {followerRange[1].toLocaleString()}
              </Label>
              <Slider
                id="followers"
                min={0}
                max={MAX_FOLLOWERS}
                step={50}
                value={[followerRange[0], followerRange[1]]}
                onValueChange={(value) => setFollowerRange(value as [number, number])}
                className="mt-3"
              />
            </div>
            <div>
              <Label htmlFor="members" className="block text-sm font-medium text-foreground mb-1"> 
                Number of Members: {memberRange[0].toLocaleString()} - {memberRange[1].toLocaleString()}
              </Label>
              <Slider
                id="members" 
                min={0}
                max={MAX_MEMBERS} 
                step={5} 
                value={[memberRange[0], memberRange[1]]} 
                onValueChange={(value) => setMemberRange(value as [number, number])} 
                className="mt-3"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={resetFilters} className="text-sm rounded-full">
            <XIcon className="h-4 w-4 mr-1" />
            Reset Filters
          </Button>
        </div>
      </div>

      {filteredOrganizations.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOrganizations.map((org) => (
            <OrganizationCard key={org.id} organization={org} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No organizations match your criteria.</p>
          <p className="text-md text-muted-foreground/80 mt-2">Try adjusting your filters or view all organizations.</p>
        </div>
      )}
    </div>
  );
}
