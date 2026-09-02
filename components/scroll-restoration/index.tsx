"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const homeScrollPositionKey = "home-scroll-position";

export function HomeScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const storedPosition = window.sessionStorage.getItem(homeScrollPositionKey);

    if (storedPosition === null) {
      return;
    }

    const scrollPosition = Number(storedPosition);

    if (!Number.isFinite(scrollPosition) || scrollPosition < 0) {
      return;
    }

    window.sessionStorage.removeItem(homeScrollPositionKey);
    requestAnimationFrame(() => window.scrollTo(0, scrollPosition));
  }, [pathname]);

  return null;
}

export function ArticleScrollTop({ slug }: { slug: string }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
