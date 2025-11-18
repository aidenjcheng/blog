"use client";

import type { MotionValue } from "framer-motion";

import { cn } from "@/lib/cn";

import { motion } from "framer-motion";
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
  const [open, setOpen] = useState<boolean>(false);
  const [visibleHeadings, setVisibleHeadings] = useState<Set<string>>(new Set());
  // const { scrollYProgress } = useScroll();

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

  const lastVisibleHeadingId = Array.from(visibleHeadings).pop();

  return (
    <React.Fragment>
      {/*<div className="group">*/}
      <div
        className={cn(
          "-translate-y-1/2 fixed top-1/2 left-0 py-10 pl-3",
          "flex flex-col items-start justify-start",
          "origin-left scale-[0.8] opacity-100 transition-all duration-200 ease-in-out data-[is-open=true]:scale-100 data-[is-open=true]:opacity-0",
        )}
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        data-is-open={open}
      >
        {headings.map((heading, i) => (
          <div
            key={heading.id}
            className={cn(
              "my-2 h-[1.5px] w-3 rounded-full bg-gray-a7 transition-all duration-100 ease-in-out",
              heading.id === lastVisibleHeadingId && "w-4 bg-gray-a10",
              (i === headings.length - 1 || i === 0) && "!w-5",
            )}
          />
        ))}
      </div>
      <div
        className={cn(
          "-translate-y-1/2 top-1/2 left-3",
          " flex flex-col items-center",
          "fixed mt-0 justify-start rounded-lg bg-background px-3 py-2 shadow-card transition-all sm:max-w-52 lg:max-w-1/2 dark:shadow-none",
          "pointer-events-none origin-left translate-x-0 scale-50 opacity-0 transition-all duration-200 ease-in-out data-[is-open=true]:pointer-events-auto data-[is-open=true]:translate-x-4 data-[is-open=true]:scale-100 data-[is-open=true]:opacity-100",
        )}
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        data-is-open={open}
      >
        {/*<div className="panel w-full transition-all">*/}
        <div className="flex w-full flex-col gap-0 text-sm">
          {/*<button className="truncate">{title}</button>*/}

          {headings.map((heading, i) => (
            <div key={heading.id} className="h-fit max-w-full truncate font-medium">
              <button
                type="button"
                onClick={() => scroll(heading.id)}
                className={cn(
                  "max-w-full truncate text-left",
                  i !== 0 && "mt-0 ml-3 w-full py-1 text-muted opacity-100 transition duration-200 ease-in-out hover:text-foreground",
                  // :
                  //   true,
                  // "text-bold": heading.id === lastVisibleHeadingId,
                  // "": heading.level === "h1",
                  // "pl-2": heading.level === "h2",
                  // "pl-4": heading.level === "h3",
                )}
                // data-active={heading.id === lastVisibleHeadingId ? true : false}
              >
                {heading.text}
              </button>
            </div>
          ))}
        </div>
        {/*</div>*/}
      </div>
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
