import type { Post } from "@/types";

import { getPosts } from "@/lib/mdx";

import React from "react";

interface LayoutWrapperProps {
  children: React.ReactElement;
  route: string;
  post: Post;
}

export default async function LayoutWrapper({
  children,
  route,
  post,
}: LayoutWrapperProps) {
  // Fetch posts
  const posts = await getPosts(route);

  // Clone the child element (Layout component) and pass additional props
  const enhancedChildren = React.cloneElement(children, {
    posts,
    post,
    route,
  });

  return <div className="max-w-[700px] mx-auto px-6">{enhancedChildren}</div>;
}
