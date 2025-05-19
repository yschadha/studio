import type { LucideIcon } from 'lucide-react';
import { BookOpen, Palette, Swords, Users, Cpu, HeartHandshake, Briefcase, Gamepad2, DollarSign, BarChart3, Filter } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/browse-organizations', label: 'Browse Organizations' },
  { href: '/contact', label: 'Contact Us' },
];

export interface OrganizationCategory {
  value: string;
  label: string;
  icon: LucideIcon;
}

export const ORGANIZATION_CATEGORIES: OrganizationCategory[] = [
  { value: 'all', label: 'All Categories', icon: Filter },
  { value: 'academic', label: 'Academic', icon: BookOpen },
  { value: 'arts-culture', label: 'Arts & Culture', icon: Palette },
  { value: 'sports-recreation', label: 'Sports & Recreation', icon: Swords },
  { value: 'social-community', label: 'Social & Community', icon: Users },
  { value: 'technology', label: 'Technology', icon: Cpu },
  { value: 'volunteering', label: 'Volunteering', icon: HeartHandshake },
  { value: 'professional', label: 'Professional', icon: Briefcase },
  { value: 'gaming', label: 'Gaming', icon: Gamepad2 },
];

export interface Organization {
  id: string;
  name: string;
  type: string; // Corresponds to OrganizationCategory value
  instagramFollowers: number;
  startingRate: number;
  profileImage: string;
  description: string;
  contactEmail?: string;
  website?: string;
}

export const MOCK_ORGANIZATIONS: Organization[] = [
  {
    id: '1',
    name: 'Tech Innovators Club',
    type: 'technology',
    instagramFollowers: 1250,
    startingRate: 50,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'Fostering innovation and tech skills among students. We host workshops, hackathons, and speaker events.',
    contactEmail: 'techinnovators@example.com',
    website: 'https://techinnovators.example.com'
  },
  {
    id: '2',
    name: 'Campus Artists Collective',
    type: 'arts-culture',
    instagramFollowers: 850,
    startingRate: 30,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'A vibrant community for student artists. We organize exhibitions, art jams, and collaborative projects.',
    contactEmail: 'artcollective@example.com',
  },
  {
    id: '3',
    name: 'University Sports League',
    type: 'sports-recreation',
    instagramFollowers: 2100,
    startingRate: 75,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'Promoting sportsmanship and fitness on campus. Join our leagues for various sports!',
    website: 'https://sportleague.example.com'
  },
  {
    id: '4',
    name: 'Student Coders Society',
    type: 'academic',
    instagramFollowers: 980,
    startingRate: 40,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'Dedicated to advancing coding skills and knowledge through peer learning and projects.',
  },
  {
    id: '5',
    name: 'Gamers United Hub',
    type: 'gaming',
    instagramFollowers: 1500,
    startingRate: 60,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'The central hub for all gamers on campus. Tournaments, casual play, and game development discussions.',
  },
  {
    id: '6',
    name: 'Community Outreach Program',
    type: 'volunteering',
    instagramFollowers: 600,
    startingRate: 25,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'Making a difference in our local community through various volunteering initiatives and projects.',
  },
   {
    id: '7',
    name: 'Future Leaders Network',
    type: 'professional',
    instagramFollowers: 1100,
    startingRate: 65,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'Connecting ambitious students with professionals and providing resources for career development.',
    contactEmail: 'futureleaders@example.com',
    website: 'https://futureleaders.example.com'
  },
  {
    id: '8',
    name: 'Cultural Exchange Society',
    type: 'social-community',
    instagramFollowers: 720,
    startingRate: 35,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'Celebrating diversity and fostering intercultural understanding through events and activities.',
  },
];
