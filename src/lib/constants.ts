
import type { LucideIcon } from 'lucide-react';
import { BookOpen, Palette, Swords, Users, Cpu, HeartHandshake, Briefcase, Gamepad2, DollarSign, BarChart3, Filter, Megaphone, FileText, Share2, Camera, Mic, Lightbulb, Store, Handshake, Video, Star, CalendarDays, School } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/browse-organizations', label: 'Browse Organizations' },
  { href: '/ad-opportunities', label: 'Ad Opportunities' },
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
  members: number;
  dateFounded: string;
  collegeName: string;
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
    website: 'https://techinnovators.example.com',
    members: 75,
    dateFounded: 'Fall 2018',
    collegeName: 'State University',
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
    members: 50,
    dateFounded: 'Spring 2019',
    collegeName: 'Liberal Arts College',
  },
  {
    id: '3',
    name: 'University Sports League',
    type: 'sports-recreation',
    instagramFollowers: 2100,
    startingRate: 75,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'Promoting sportsmanship and fitness on campus. Join our leagues for various sports!',
    website: 'https://sportleague.example.com',
    members: 300,
    dateFounded: 'Fall 2015',
    collegeName: 'State University',
  },
  {
    id: '4',
    name: 'Student Coders Society',
    type: 'academic',
    instagramFollowers: 980,
    startingRate: 40,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'Dedicated to advancing coding skills and knowledge through peer learning and projects.',
    members: 90,
    dateFounded: 'Spring 2020',
    collegeName: 'Tech Institute',
  },
  {
    id: '5',
    name: 'Gamers United Hub',
    type: 'gaming',
    instagramFollowers: 1500,
    startingRate: 60,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'The central hub for all gamers on campus. Tournaments, casual play, and game development discussions.',
    members: 120,
    dateFounded: 'Fall 2017',
    collegeName: 'Community College',
  },
  {
    id: '6',
    name: 'Community Outreach Program',
    type: 'volunteering',
    instagramFollowers: 600,
    startingRate: 25,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'Making a difference in our local community through various volunteering initiatives and projects.',
    members: 40,
    dateFounded: 'Spring 2021',
    collegeName: 'City College',
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
    website: 'https://futureleaders.example.com',
    members: 100,
    dateFounded: 'Fall 2019',
    collegeName: 'Business School University',
  },
  {
    id: '8',
    name: 'Cultural Exchange Society',
    type: 'social-community',
    instagramFollowers: 720,
    startingRate: 35,
    profileImage: 'https://placehold.co/300x200.png',
    description: 'Celebrating diversity and fostering intercultural understanding through events and activities.',
    members: 65,
    dateFounded: 'Spring 2018',
    collegeName: 'International University',
  },
];

export interface AdOpportunity {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const AD_OPPORTUNITIES: AdOpportunity[] = [
  {
    id: '1',
    title: 'Rush Event Sponsorships',
    description: 'Boost your brand visibility by sponsoring high-energy recruitment events. Includes logo placement, shout-outs, and even product giveaways.',
    icon: Megaphone,
  },
  {
    id: '2',
    title: 'Campus Flyering',
    description: 'Distribute physical or digital flyers across high-traffic campus spots and student events for direct visibility and engagement.',
    icon: FileText,
  },
  {
    id: '3',
    title: 'Social Media Campaigns',
    description: 'Reach real student audiences through Instagram, TikTok, and Facebook posts created by trusted student organizations.',
    icon: Share2,
  },
  {
    id: '4',
    title: 'Modeling & Product Showcases',
    description: 'Have student leaders feature your product on social media or at events, acting as authentic campus brand ambassadors.',
    icon: Camera,
  },
  {
    id: '5',
    title: 'Guest Speaker Sponsorship',
    description: 'Sponsor influential speaker events or workshops and get a spotlight moment to introduce your brand to an engaged student audience.',
    icon: Mic,
  },
  {
    id: '6',
    title: 'Case Competitions',
    description: 'Challenge students with real-world problems tied to your industry while gaining brand exposure and access to top talent.',
    icon: Lightbulb,
  },
  {
    id: '7',
    title: 'Event Activation Booths',
    description: 'Set up an interactive booth at high-attendance student events to create face-to-face brand experiences and live engagement.',
    icon: Store,
  },
  {
    id: '8',
    title: 'Networking & Mixer Sponsorships',
    description: 'Be the face behind student networking events and mixers. Get direct access to emerging talent while building brand loyalty.',
    icon: Handshake,
  },
  {
    id: '9',
    title: 'Branded Video Collaborations',
    description: 'Partner with student creators to produce high-quality, branded video content—ideal for reels, interviews, or event highlights.',
    icon: Video,
  },
  {
    id: '10',
    title: 'Influencer-Style Product Reviews',
    description: 'Let popular student voices review your product authentically across their platforms. Think micro-influencer meets college credibility.',
    icon: Star,
  },
];
