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
          <main className="mx-auto mt-2 flex min-h-screen w-full max-w-3xl flex-col overflow-x-hidden px-6 py-24 pb-24 md:overflow-x-visible">
            <article className="article isolate flex h-full flex-1 flex-col">
              <div className="overlay" />
              {children}
            </article>
          </main>
        </Providers>
      </body>
    </html>
  );
}
