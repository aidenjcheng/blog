import type { ReactNode } from "react";

import Preview from "@/components/preview";

export function PreviewComponent({ children, codeblock }: { children?: ReactNode; codeblock?: string }) {
  return <Preview codeblock={codeblock}>{children}</Preview>;
}
