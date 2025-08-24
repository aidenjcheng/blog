"use client";

import type { MotionValue } from "framer-motion";

import { cn } from "@/lib/cn";

import { Collapsible } from "@base-ui-components/react/collapsible";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion, useScroll } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";

import "./collapsible.css";

export const TableOfContents = ({
  title,
  // scrollY,
}: {
  title: string;
  // scrollY: MotionValue;
}) => {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: string }[]>([]);
  const [open, setOpen] = useState(false);
  const [visibleHeadings, setVisibleHeadings] = useState<Set<string>>(new Set());
  const { scrollYProgress } = useScroll();

  const getHeadings = useCallback(() => {
    return Array.from(document.querySelectorAll("h1, h2, h3"))
      .filter((heading) => heading.id)
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: heading.tagName.toLowerCase(),
        top: (heading as HTMLElement).offsetTop,
      }));
  }, []);

  useEffect(() => {
    const collectedHeadings = getHeadings();
    setHeadings(collectedHeadings);

    const observerOptions = {
      root: null,
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const visibleSet = new Set(visibleHeadings);

      for (const entry of entries) {
        const headingId = entry.target.id;

        if (entry.isIntersecting) {
          visibleSet.add(headingId);
        } else {
          visibleSet.delete(headingId);
        }
      }

      setVisibleHeadings(new Set(visibleSet));
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    for (const heading of collectedHeadings) {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [getHeadings, visibleHeadings]);

  const scroll = (id: string) => {
    for (const heading of Array.from(document.querySelectorAll("h1, h2, h3"))) {
      heading.setAttribute("data-highlight", "false");
    }

    const element = document.getElementById(id);

    if (element) {
      const top = element.offsetTop - 100;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });

      element.setAttribute("data-highlight", "true");

      setTimeout(() => {
        element.setAttribute("data-highlight", "false");
      }, 2000);
    }
  };

  return (
    <React.Fragment>
      <Collapsible.Root
        open={open}
        onOpenChange={setOpen}
        disabled={headings.length === 0}
        className={cn(
          "bottom-10 left-1/2",
          "-translate-x-1/2 flex flex-col items-center",
          "fixed mt-0 justify-start rounded-[1.75rem] bg-[#202020] px-4 py-2 shadow-card transition-all sm:max-w-lg lg:max-w-1/2 dark:shadow-none",
        )}
      >
        <Collapsible.Trigger className="">
          <div className="flex items-center gap-2 text-white-a11 ">
            <MeshGradient
              color1="#FFC0CB" // pink
              color2="#FFFF00" // yellow
              color3="#0000FF" // blue
              color4="#800080" // purple
              speed={0.25}
              className="size-6 rounded-full"
            />
            <div>{title}</div>
            {/* Progress indicator */}
            <ProgressIndicator scrollYProgress={scrollYProgress} className={cn(headings.length === 0 && "hidden")} />
          </div>
        </Collapsible.Trigger>
        <Collapsible.Panel className={"panel w-full transition-all"}>
          <div className="flex w-full flex-col gap-0 py-4">
            {headings.map((heading) => (
              <div key={heading.id} className="h-fit w-full">
                <button
                  type="button"
                  onClick={() => scroll(heading.id)}
                  className={cn({
                    "mt-0 w-full py-1 text-left text-muted opacity-100 transition ease-in-out hover:text-white-a9": true,
                    "text-bold text-white-a12": visibleHeadings.has(heading.id),
                    // "": heading.level === "h1",
                    // "pl-2": heading.level === "h2",
                    // "pl-4": heading.level === "h3",
                  })}
                  data-active={visibleHeadings.has(heading.id) ? "true" : "false"}
                >
                  {heading.text}
                </button>
              </div>
            ))}
          </div>
        </Collapsible.Panel>
      </Collapsible.Root>
    </React.Fragment>
  );
};

const ProgressIndicator = ({
  scrollYProgress,
  className,
}: {
  scrollYProgress: MotionValue;
  className?: string;
}) => {
  const progressIcon: React.CSSProperties = {
    transform: "rotate(-90deg)",
  };

  const progressIconIndicator: React.CSSProperties = {
    strokeDashoffset: 0,
    fill: "none",
    stroke: "currentColor", // Add stroke color
  };

  return (
    <svg className={cn("size-8", className)} style={progressIcon} viewBox="0 0 100 100">
      <circle className="fill-none stroke-current opacity-20" cx="50" cy="50" r="25" strokeWidth={10} pathLength="1" />
      <motion.circle
        cx="50"
        cy="50"
        r="25"
        strokeWidth={10}
        pathLength="1"
        style={{
          ...progressIconIndicator,
          pathLength: scrollYProgress,
        }}
      />
    </svg>
  );
};
