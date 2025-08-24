import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";

import { Link as NextViewTransition } from "next-view-transitions";
import React from "react";

interface PostProps {
  category: string;
}

export const Category = ({ category }: PostProps) => {
  const posts = getPosts(category);
  const mostRecentPost = posts.reduce((latest, post) => {
    return new Date(post.time.updated).getTime() > new Date(latest.time.updated).getTime() ? post : latest;
  }, posts[0]);

  const Seperator = () => <div className="border-border border-t" />;

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className=" flex flex-col">
      <React.Fragment key={mostRecentPost.slug}>
        <NextViewTransition href={`/${category}`} className="flex w-full py-3">
          <p className="!mt-0 text-muted">{formatter.date(new Date(mostRecentPost.time.updated), "Y")}</p>
          <div className="flex w-full justify-between pl-8">
            <p className="!mt-0">{category.split("-").join(" ")}</p>
            <p className="!mt-0 text-muted">{formatter.date(new Date(mostRecentPost.time.updated), "MD")}</p>
          </div>
        </NextViewTransition>
        <Seperator />
      </React.Fragment>
    </div>
  );
};
