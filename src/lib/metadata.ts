import type { Metadata } from "next";
import { siteConfig } from "@/data/site-metadata";

interface PageMeta {
  title: string;
  description: string;
  slug?: string;
  ogImage?: string;
}

export function buildMetadata({
  title,
  description,
  slug,
  ogImage,
}: PageMeta): Metadata {
  const url = slug ? `${siteConfig.url}/${slug}` : siteConfig.url;
  const image = ogImage ?? siteConfig.ogImage;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
