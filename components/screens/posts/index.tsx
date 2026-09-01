import type { Post } from "@/types";

import MDXImage from "@/components/image";
import { TableOfContents } from "@/components/on-this-page";
import { PostNavigation } from "@/components/post-navigation";
import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";
import { estimateReadingTime } from "@/lib/reading-time";
import { MDX } from "@/mdx-components";

import React from "react";

interface Props {
  post: Post;
  route: string;
}

export const Layout = ({ post, route }: Props) => {
  const posts = getPosts(route);
  const readingTime = estimateReadingTime(post.content);

  const Seperator = () => {
    return <div>⋅</div>;
  };

  const PublishedTime = () => {
    return <span>Published {formatter.date(new Date(post.time.created))}</span>;
  };
  const UpdateTime = () => {
    return <span>Updated {formatter.date(new Date(post.time.updated))}</span>;
  };

  const ReadingTime = () => {
    return <span>{readingTime} minutes read</span>;
  };

  return (
    <React.Fragment>
      {route === "projects" &&
        (post.media?.image ? (
          <MDXImage src={post.media.image} alt={`${post.title} thumbnail`} />
        ) : (
          <div aria-hidden className="my-6 aspect-video rounded-base border border-border bg-gray-3" />
        ))}
      <div className="mt-10 flex flex-col">
        <div>
          <h1 id="title">{post.title}</h1>
        </div>
        <div className="mt-1 mb-2 flex gap-2 text-muted">
          <PublishedTime />
          <Seperator />
          <UpdateTime />
          <Seperator />
          <ReadingTime />
        </div>
      </div>

      <MDX source={post.content} />
      <PostNavigation posts={posts} />
      <TableOfContents title={post.title} />
    </React.Fragment>
  );
};
