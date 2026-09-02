import type { Metadata } from "next/types";

const getMetadataBase = (value?: string) => {
  if (!value) return undefined;
  try {
    return new URL(value);
  } catch {
    return undefined;
  }
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = getMetadataBase(siteUrl);

export const OpenGraph: Metadata = {
  metadataBase,
  title: {
    default: "Aiden Cheng",
    template: "%s",
  },
  description: "...",
  keywords: ["Design", "Development", "Engineering"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "Sylph",
    description: "...",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/og`],
    siteName: "Sylph",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylph",
    description: "...",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/og`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
