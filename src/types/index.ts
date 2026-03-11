export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon?: string;
}

export interface SolutionItem {
  painPoint: string;
  solution: string;
  icon: string;
}

export interface ServiceDefinition {
  slug: string;
  title: string;
  shortDescription: string;
  heroSubtitle: string;
  icon: string;
  features: FeatureItem[];
  useCases: string[];
  relatedIndustries: string[];
  faqs: FAQItem[];
  ctaText: string;
  metaTitle: string;
  metaDescription: string;
}

export interface IndustryDefinition {
  slug: string;
  title: string;
  shortDescription: string;
  heroSubtitle: string;
  icon: string;
  painPoints: string[];
  solutions: SolutionItem[];
  relevantServices: string[];
  proofPoints: StatItem[];
  faqs: FAQItem[];
  metaTitle: string;
  metaDescription: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
  company: string;
}
