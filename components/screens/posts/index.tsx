import type { Post } from "@/types";

import MDXImage from "@/components/image";
import { TableOfContents } from "@/components/on-this-page";
import { PostNavigation } from "@/components/post-navigation";
import { ArticleScrollTop } from "@/components/scroll-restoration";
import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";
import { estimateReadingTime } from "@/lib/reading-time";
import { MDX } from "@/mdx-components";

import React from "react";

interface Props {
  post: Post;
  route: string;
}

const Seperator = () => <div>⋅</div>;

const PublishedTime = ({ date }: { date: Date }) => <span>Published {formatter.date(date)}</span>;

const UpdateTime = ({ date }: { date: Date }) => <span>Updated {formatter.date(date)}</span>;

const ReadingTime = ({ minutes }: { minutes: number }) => <span>{minutes} minutes read</span>;

export const Layout = ({ post, route }: Props) => {
  const posts = getPosts(route);
  const readingTime = estimateReadingTime(post.content);
  const imageTransitionName = `project-image-${post.slug}`;

  return (
    <React.Fragment>
      <ArticleScrollTop slug={post.slug} />
      {route === "projects" &&
        (post.media?.image ? (
          <MDXImage src={post.media.image} alt={`${post.title} thumbnail`} viewTransitionName={imageTransitionName} />
        ) : (
          <div aria-hidden className="my-6 aspect-video rounded-base border border-border bg-gray-3" style={{ viewTransitionName: imageTransitionName }} />
        ))}
      <div className="mt-10 flex flex-col">
        <div>
          <h1 id="title">{post.title}</h1>
        </div>
        <div className="mt-1 mb-2 flex gap-2 text-muted">
          <PublishedTime date={new Date(post.time.created)} />
          <Seperator />
          <UpdateTime date={new Date(post.time.updated)} />
          <Seperator />
          <ReadingTime minutes={readingTime} />
        </div>
      </div>

      <MDX source={post.content} />
      <PostNavigation posts={posts} />
      <TableOfContents title={post.title} />
    </React.Fragment>
  );
};
