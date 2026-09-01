import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "simple-player": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        "aspect-ratio"?: string;
        "disable-autoplay"?: boolean;
        controls?: boolean;
        "show-time"?: boolean;
      };
    }
  }
}
