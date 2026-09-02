import { HomeScrollRestoration } from "@/components/scroll-restoration";
import { AppThemeProvider } from "@/components/theme";

import { LazyMotion, domMax } from "motion/react";
import { ViewTransitions } from "next-view-transitions";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ViewTransitions>
      <LazyMotion features={domMax}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </LazyMotion>
      <HomeScrollRestoration />
    </ViewTransitions>
  );
};
