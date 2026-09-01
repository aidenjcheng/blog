import * as FadeIn from "@/components/motion/staggers/fade";
import { ProjectThumbnail } from "@/components/project-thumbnail";
import { OpenGraph } from "@/lib/og";

import React from "react";

const category = "projects";
export function generateMetadata() {
  const title = "Projects";
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

  return {
    ...OpenGraph,
    title,
    openGraph: {
      title,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}

export default function Page() {
  return (
    <React.Fragment>
      <FadeIn.Item>
        <ProjectThumbnail category={category} showHeader={false} />
      </FadeIn.Item>
    </React.Fragment>
  );
}
