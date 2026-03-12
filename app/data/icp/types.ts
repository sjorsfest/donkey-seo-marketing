import type { FAQItem } from "~/data/faq";
import type { Feature } from "~/data/features";

export interface IcpPainPoint {
  emoji: string;
  title: string;
  description: string;
}

export interface IcpSolution {
  emoji: string;
  title: string;
  description: string;
}

export interface IcpUseCase {
  emoji: string;
  name: string;
  description: string;
  color: string;
}

export interface IcpHeroConfig {
  badge?: string;
  headline: string;
  highlightedText?: string;
  subheadline: string;
  ctaText?: string;
  secondaryCtaText?: string;
}

export interface IcpFinalCtaConfig {
  badge?: string;
  headline: string;
  subheadline: string;
  ctaText?: string;
  socialProof?: string;
}

export interface IcpSeoConfig {
  title: string;
  description: string;
  socialImagePath?: string;
  socialImageAlt?: string;
}

export interface IcpFaqConfig {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  strategy: "prepend" | "append" | "replace";
}

export interface IcpConfig {
  slug: string;
  name: string;
  seo: IcpSeoConfig;
  hero: IcpHeroConfig;
  painPoints: IcpPainPoint[];
  solutions: IcpSolution[];
  useCases: IcpUseCase[];
  features?: {
    title?: string;
    subtitle?: string;
    items?: Feature[];
  };
  faq?: IcpFaqConfig;
  finalCta: IcpFinalCtaConfig;
}
