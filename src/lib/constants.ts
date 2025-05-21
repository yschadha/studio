
import type { LucideIcon } from 'lucide-react';
import { BookOpen, Palette, Swords, Users, Cpu, HeartHandshake, Briefcase, Gamepad2, TrendingUp, Filter, Megaphone, FileText, Share2, Camera, Mic, Lightbulb, Store, Handshake, Video, Star, CalendarDays, School } from 'lucide-react';

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
  { value: 'business', label: 'Business', icon: TrendingUp },
];

export interface Organization {
  id: string;
  name: string;
  type: string; // Corresponds to OrganizationCategory value
  instagramFollowers: number;
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
    id: 'bgi-1',
    name: 'Bruin Growth Incubator',
    type: 'business',
    instagramFollowers: 100,
    profileImage: '/images/bgi-logo.png', // Ensure your logo is at public/images/bgi-logo.png
    description: 'Bruin Growth Incubator is a student-led organization dedicated to helping UCLA students explore and succeed in the startup world. Our mission is to make it easier for students to join existing startups, create their own businesses, and find talented developers to build their ideas. We are committed to supporting underrepresented communities by providing access to opportunities, resources, and a strong network to help them thrive in entrepreneurship. Whether you’re looking for your first role in a startup, building a business, or assembling a team, Bruin Growth Incubator is here to guide and support you.',
    members: 15,
    dateFounded: '2024',
    collegeName: 'UCLA',
    contactEmail: 'bruingrowth@example.com',
    website: 'https://bruingrowth.example.com'
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
