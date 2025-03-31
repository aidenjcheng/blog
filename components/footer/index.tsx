import Link from "@/components/link";
import { AppThemeSwitcher } from "@/components/theme";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-end border-border border-t pt-2">
      <div className="text-muted text-small">
        <AppThemeSwitcher />
      </div>
    </div>
  );
};

export { Footer };
