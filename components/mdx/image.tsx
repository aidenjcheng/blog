import type { ComponentProps } from "react";

import MDXImage from "@/components/image";

type ImageComponentProps = ComponentProps<typeof MDXImage>;

export function ImageComponent({ caption, alt, ...props }: ImageComponentProps) {
  return <MDXImage {...props} caption={caption} alt={alt} />;
}
