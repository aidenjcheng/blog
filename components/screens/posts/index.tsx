import type { Post } from "@/types";

import { TableOfContents } from "@/components/on-this-page";
import { PostNavigation } from "@/components/post-navigation";
import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";
import { MDX } from "@/mdx-components";

import React from "react";
import { readingTime } from "reading-time-estimator";

interface Props {
  post: Post;
  route: string;
}

export const Layout = ({ post, route }: Props) => {
  const posts = getPosts(route);

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
    return <span>{readingTime(post.content).minutes} minutes read</span>;
  };

  return (
    <React.Fragment>
      <div className="flex flex-col mt-10">
        <div>
          <h1 id="title">{post.title}</h1>
        </div>
        <div className="mt-1 flex gap-2 text-muted mb-2">
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
