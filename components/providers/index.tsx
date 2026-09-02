import { HomeScrollRestoration } from "@/components/scroll-restoration";
import { AppThemeProvider } from "@/components/theme";

import { ViewTransitions } from "next-view-transitions";
import { LazyMotion, domMax } from "motion/react";

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
