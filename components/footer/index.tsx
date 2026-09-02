import { AppThemeSwitcher } from "@/components/theme";

import { Github } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="mt-auto flex w-full items-center justify-between border-border border-t pt-4">
      <Button size="icon" variant="ghost" render={<Link href="https://github.com/aidenjcheng" target="_blank" rel="noreferrer" aria-label="GitHub profile" />}>
        <Github className="text-muted dark:text-muted" />
      </Button>
      <AppThemeSwitcher />
    </footer>
  );
};

export { Footer };
