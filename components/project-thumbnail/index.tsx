import { ProjectThumbnailList } from "@/components/project-thumbnail/project-thumbnail-list";
import { getPosts } from "@/lib/mdx";

interface ProjectThumbnailProps {
  category: string;
  showHeader?: boolean;
}

export const ProjectThumbnail = ({
  category,
  showHeader = true,
}: ProjectThumbnailProps) => {
  const projects = getPosts(category).sort((a, b) => {
    return (
      new Date(b.time.created).getTime() - new Date(a.time.created).getTime()
    );
  });

  if (projects.length === 0) {
    return null;
  }

  return (
    <ProjectThumbnailList
      category={category}
      projects={projects}
      showHeader={showHeader}
    />
  );
};
