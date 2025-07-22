import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";

import { Link as NextViewTransition } from "next-view-transitions";
import React from "react";

interface PostProps {
  category: string;
}

export const Posts = ({ category }: PostProps) => {
  const posts = getPosts(category).sort((a, b) => {
    return new Date(b.time.created).getTime() - new Date(a.time.created).getTime();
  });

  const Seperator = () => <div className="border-border border-t" />;

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className=" flex flex-col">
      {/* <NextViewTransition
        href={`/${category}`}
        className="flex justify-between"
      >
        <h2 className="py-2 text-muted capitalize">
          {category} {posts.length > 0 && `(${posts.length})`}
        </h2>
      </NextViewTransition> */}

      {posts.map((post) => {
        return (
          <React.Fragment key={post.slug}>
            <NextViewTransition href={`/${category}/${post.slug}`} className="flex w-full py-3">
              <p className="!mt-0 text-muted">{formatter.date(new Date(post.time.created), "Y")}</p>
              <div className="flex w-full justify-between pl-8">
                <p className="!mt-0">{post.title}</p>
                <p className="!mt-0 text-muted">{formatter.date(new Date(post.time.created), "MD")}</p>
              </div>
            </NextViewTransition>
            <Seperator />
          </React.Fragment>
        );
      })}
    </div>
  );
};
