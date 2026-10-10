import type { IconType } from 'react-icons';
import { LuUsers, LuHeart, LuShield, LuTarget, LuZap, LuLightbulb } from 'react-icons/lu';
import { CiFacebook, CiInstagram, CiTwitter, CiLinkedin } from 'react-icons/ci';

export const site = {
  name: 'Aarambha',
  tagline: 'Where Change Begins',
  founded: '2026',
  email: 'info@aarambha.org',
  phone: '+977 1-XXXXXXX',
  city: 'Jhapa, Nepal',
  province: 'Koshi Province',
  officeHours: ['Sun – Fri: 10:00 AM – 5:00 PM', 'Sat: Closed'],
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/updates', label: 'Updates' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export const socialLinks: { label: string; href: string; icon: IconType }[] = [
  { label: 'Facebook', href: '#', icon: CiFacebook },
  { label: 'Instagram', href: '#', icon: CiInstagram },
  { label: 'Twitter', href: '#', icon: CiTwitter },
  { label: 'LinkedIn', href: '#', icon: CiLinkedin },
];

export interface Value {
  icon: IconType;
  title: string;
  description: string;
}

export const homeValues: Value[] = [
  {
    icon: LuHeart,
    title: 'Compassion',
    description: 'Every initiative is driven by genuine care for our communities.',
  },
  {
    icon: LuUsers,
    title: 'Collaboration',
    description: 'We believe in the power of working together to amplify impact.',
  },
  {
    icon: LuShield,
    title: 'Integrity',
    description: 'Transparent operations and accountable leadership at every level.',
  },
  {
    icon: LuTarget,
    title: 'Impact-Driven',
    description: 'Measurable results that create real, lasting change in society.',
  },
];

export const aboutValues: Value[] = [
  {
    icon: LuHeart,
    title: 'Compassion',
    description:
      'Every initiative we undertake is rooted in genuine care for people and communities.',
  },
  {
    icon: LuUsers,
    title: 'Collaboration',
    description:
      'We believe in the strength of working together with members, partners, and communities.',
  },
  {
    icon: LuZap,
    title: 'Impact',
    description:
      "Every action we take is measured by the real, tangible change it creates in people's lives.",
  },
  {
    icon: LuLightbulb,
    title: 'Innovation',
    description:
      'We embrace creative approaches to solve complex social challenges in meaningful ways.',
  },
];

export const milestones = [
  {
    year: '2026',
    title: 'Founded',
    description: 'Aarambha was established by a group of 12 passionate youth in Jhapa.',
  },
];

export const teamMembers = [
  {
    name: 'Rajesh Sharma',
    position: 'President & Founder',
    bio: 'A passionate social entrepreneur who founded Aarambha with a vision to empower underserved communities through education and collective action.',
    imageUrl: '/team-1.png',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Priya Adhikari',
    position: 'Vice President',
    bio: 'With a background in community development, Priya oversees program strategy and ensures our initiatives create measurable impact on the ground.',
    imageUrl: '/team-2.png',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Sunil Thapa',
    position: 'Program Director',
    bio: 'Sunil brings over a decade of experience in project management and nonprofit operations, leading our flagship education and outreach programs.',
    imageUrl: '/team-3.png',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Anisha Karki',
    position: 'Communications Lead',
    bio: 'A skilled communicator and storyteller, Anisha manages our brand presence, partnerships, and community engagement across all platforms.',
    imageUrl: '/team-4.png',
    social: { linkedin: '#', twitter: '#' },
  },
];
