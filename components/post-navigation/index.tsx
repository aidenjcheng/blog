"use client";

import type { Post } from "@/types/post/index";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

interface PostNavigationProps {
  posts: Array<Post>;
}

function PostNavigation({ posts }: PostNavigationProps) {
  const sortedPosts = posts.toSorted((a, b) => {
    return new Date(b.time.created).getTime() - new Date(a.time.created).getTime();
  });

  const currentSlug = usePathname().split("/").pop();
  const currentIndex = sortedPosts.findIndex((post) => post.slug === currentSlug);
  const previous = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

  if (!previous && !next) {
    return null;
  }

  return (
    <div className="mt-16 flex w-full justify-between border-border border-t pt-8">
      {previous && (
        <Link href={`${previous.slug}`} className="flex w-full flex-col gap-1 text-left">
          <span className="text-muted">Previous</span>
          <span>{previous.title}</span>
        </Link>
      )}
      {next && (
        <Link href={`${next.slug}`} className="flex w-full flex-col gap-1 text-right">
          <span className="text-muted">Next</span>
          <span>{next.title}</span>
        </Link>
      )}
    </div>
  );
}

export { PostNavigation };
