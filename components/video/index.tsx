"use client";

import type { VideoHTMLAttributes } from "react";

import { cn } from "@/lib/cn";

import { useEffect } from "react";

type MDXVideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
  "aspect-ratio"?: string;
  "disable-autoplay"?: boolean;
  "show-time"?: boolean;
};

export default function MDXVideo({
  className,
  controls,
  src,
  "aspect-ratio": aspectRatio = "16 / 9",
  "disable-autoplay": disableAutoplay,
  "show-time": showTime,
}: MDXVideoProps) {
  useEffect(() => {
    void import("@grizzshutsdown/simpleplayer");
  }, []);

  return (
    <div className={cn("my-6 overflow-hidden rounded-lg border border-border", className)}>
      <simple-player
        src={src}
        aspect-ratio={aspectRatio}
        {...(controls === undefined ? {} : { controls })}
        {...(disableAutoplay === undefined ? {} : { "disable-autoplay": disableAutoplay })}
        {...(showTime === undefined ? {} : { "show-time": showTime })}
      />
    </div>
  );
}
