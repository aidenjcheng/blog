import Logo from "@/components/logo/logo";

import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<Logo className="h-full w-full text-foreground" />, {
    ...size,
  });
}
