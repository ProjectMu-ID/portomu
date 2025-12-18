export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description?: string;
  image?: string;
  size: 'small' | 'medium' | 'large' | 'wide';
}

export interface PricingPackage {
  id: number;
  name: string;
  price: string;
  featured?: boolean;
  features?: string[];
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}