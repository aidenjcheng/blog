import { PreviewCard } from "@base-ui-components/react/preview-card";

import "./preview-link.css";

export const PreviewLink = ({
  href,
  children,
  component,
  icon,
  className = "text-foreground",
}: {
  href?: string;
  children: React.ReactNode;
  component?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <PreviewCard.Root delay={0.1}>
      <PreviewCard.Trigger
        className={`font-medium ${className} inline-flex items-center gap-1`}
        {...(href && { href, target: "_blank" })}
      >
        {children} {icon}
      </PreviewCard.Trigger>
      <PreviewCard.Portal>
        <PreviewCard.Positioner sideOffset={8}>
          <PreviewCard.Popup className="bg-background rounded-lg shadow-lg border border-border max-w-md popup">
            <PreviewCard.Arrow className="fill-card stroke-border" />
            {component}
          </PreviewCard.Popup>
        </PreviewCard.Positioner>
      </PreviewCard.Portal>
    </PreviewCard.Root>
  );
};
