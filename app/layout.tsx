import "@/styles/main.css";

import type { Metadata } from "next";

import { Providers } from "@/components/providers";
import { OpenGraph } from "@/lib/og";

import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  ...OpenGraph,
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.className)} suppressHydrationWarning>
      <Analytics />
      <body>
        <Providers>
          <main className="mx-auto min-h-screen max-w-2xl overflow-x-hidden px-6 py-24 pb-[240px] md:overflow-x-visible">
            <article className="article isolate">{children}</article>
          </main>
        </Providers>
      </body>
    </html>
  );
}
