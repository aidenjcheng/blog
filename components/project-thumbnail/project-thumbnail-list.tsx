"use client";

import type { Post } from "@/types";

import { Card, CardGroup } from "@/components/ui/card";
import { formatter } from "@/lib/formatter";
import { saveHomeScrollPosition } from "@/lib/home-scroll-position";

import { ChevronRight } from "lucide-react";
import { Link as NextViewTransition } from "next-view-transitions";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface ProjectThumbnailListProps {
  category: string;
  projects: Post[];
  showHeader: boolean;
}

export const ProjectThumbnailList = ({ category, projects, showHeader }: ProjectThumbnailListProps) => {
  const pathname = usePathname();

  return (
    <section>
      {showHeader && (
        <NextViewTransition href={`/${category}`} className="group flex w-full py-3">
          <div className="flex items-center gap-1">
            <p className="!mt-0">{category.split("-").join(" ")}</p>
            <ChevronRight aria-hidden className="size-4 text-muted transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </NextViewTransition>
      )}

      <CardGroup columns={2} separated className={showHeader ? "mt-3 gap-8" : "gap-8"}>
        {projects.map((project) => {
          const description = project.summary ?? project.seo?.description;
          const createdDate = new Date(project.time.created);
          const imageTransitionStyle = pathname === "/" ? { viewTransitionName: `project-image-${project.slug}` } : undefined;

          return (
            <Card key={project.slug} href={`/${category}/${project.slug}`} label={project.title} onClick={saveHomeScrollPosition} className="!min-h-0 !pb-0">
              <div className="group flex flex-col gap-3">
                {project.media?.image ? (
                  <div className="relative aspect-video overflow-hidden rounded-base border border-border bg-gray-3" style={imageTransitionStyle}>
                    <Image
                      src={project.media.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <div aria-hidden className="aspect-video rounded-base border border-border bg-gray-3" style={imageTransitionStyle} />
                )}
                <div>
                  <div className="flex justify-between">
                    <p className="!mt-0">{project.title}</p>
                    <time className="text-muted" dateTime={project.time.created}>
                      {formatter.date(createdDate, "Y")}
                    </time>
                  </div>
                  {description && <p className="!mt-1 line-clamp-2 text-muted">{description}</p>}
                </div>
              </div>
            </Card>
          );
        })}
      </CardGroup>
    </section>
  );
};
