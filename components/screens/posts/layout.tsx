import type { Post } from "@/types";

import { getPosts } from "@/lib/mdx";

import React from "react";

interface LayoutWrapperProps {
  children: React.ReactElement<LayoutProps>;
  route: string;
  post: Post;
}

interface LayoutProps {
  posts: Post[];
  post: Post;
  route: string;
}

export default async function LayoutWrapper({ children, route, post }: LayoutWrapperProps) {
  // Fetch posts
  const posts = await getPosts(route);

  // Clone the child element (Layout component) and pass additional props
  const enhancedChildren = React.cloneElement(children, {
    posts,
    post,
    route,
  });

  return <div className="mx-auto max-w-[700px] px-6">{enhancedChildren}</div>;
}
