import { PreviewCard } from "@base-ui-components/react/preview-card";

import "./preview-link.css";

export const PreviewLink = ({
  href,
  children,
  component,
  icon,
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  component?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <PreviewCard.Root delay={0.1}>
      <PreviewCard.Trigger className={`${className} inline-flex items-center gap-1 text-blue-10`} {...(href && { href, target: "_blank" })}>
        {children} {icon}
      </PreviewCard.Trigger>
      <PreviewCard.Portal>
        <PreviewCard.Positioner sideOffset={8}>
          <PreviewCard.Popup className="popup max-w-md rounded-lg border border-border bg-background shadow-lg">
            <PreviewCard.Arrow className="fill-card stroke-border" />
            {component}
          </PreviewCard.Popup>
        </PreviewCard.Positioner>
      </PreviewCard.Portal>
    </PreviewCard.Root>
  );
};
