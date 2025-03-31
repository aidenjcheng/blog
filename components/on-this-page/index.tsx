"use client";

import { cn } from "@/lib/cn";

import { Collapsible } from "@base-ui-components/react/collapsible";
import { motion, MotionValue, useTransform } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";

import "./collapsible.css";

export const TableOfContents = ({
  title,
  // scrollY,
}: {
  title: string;
  // scrollY: MotionValue;
}) => {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: string }[]
  >([]);
  const [open, setOpen] = useState(false);
  const [visibleHeadings, setVisibleHeadings] = useState<Set<string>>(
    new Set(),
  );

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

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

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
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <nav
          className={cn(
            "bottom-10 left-1/2",
            "flex flex-col items-center -translate-x-1/2",
            "fixed mt-0 bg-gray-12 max-w-1/2 justify-start space-y-4 transition-all p-2 px-4 rounded-3xl",
          )}
        >
          <Collapsible.Trigger className="">
            <div className="flex items-center gap-2 text-white-a11">
              <div>{title}</div>
              {/* Progress indicator */}
              <div className="relative h-4 w-20 bg-gray-600 overflow-hidden">
                <motion.div className="absolute top-0 left-0 h-full bg-white rounded-full" />
              </div>
            </div>
          </Collapsible.Trigger>
          <Collapsible.Panel className={"w-full transition-all panel"}>
            <div className="mt-0 flex flex-col gap-0 w-full ">
              {headings.map((heading) => (
                <div key={heading.id} className="mt-0 w-full">
                  <button
                    type="button"
                    onClick={() => scroll(heading.id)}
                    className={cn({
                      "mt-0   py-1  text-left text-muted opacity-100 transition ease-in-out hover:text-white-a9 w-full":
                        true,
                      "text-bold text-white-a12": visibleHeadings.has(
                        heading.id,
                      ),
                      // "": heading.level === "h1",
                      // "pl-2": heading.level === "h2",
                      // "pl-4": heading.level === "h3",
                    })}
                    data-active={
                      visibleHeadings.has(heading.id) ? "true" : "false"
                    }
                  >
                    {heading.text}
                  </button>
                </div>
              ))}
            </div>
          </Collapsible.Panel>
        </nav>
      </Collapsible.Root>
    </React.Fragment>
  );
};
