"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "playground", label: "Details that make interfaces feel better" },
  { id: "text-wrapping", label: "Text wrapping" },
  { id: "concentric-border-radius", label: "Concentric border radius" },
  { id: "make-text-crispy", label: "Make text crispy" },
  { id: "use-tabular-numbers", label: "Use tabular numbers" },
  { id: "split-and-stagger", label: "Split and stagger entering elements" },
  { id: "align-optically", label: "Align optically, not geometrically" },
  { id: "use-shadows-instead-of-borders", label: "Use shadows instead of borders" },
];

function TocIcon() {
  return (
    <svg
      aria-label="Table of Contents icon"
      className="size-4 fill-[#b5b5b5]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        clipRule="evenodd"
        d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM2 18C2 17.4477 2.44772 17 3 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H3C2.44772 19 2 18.5523 2 18Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("playground");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry (topmost visible heading)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -60% 0px" }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }

  return (
    <nav className="fixed top-20 left-8 hidden max-h-[calc(100vh-6rem)] w-64 leading-none 2xl:block">
      <div className="mb-6 flex items-center gap-2">
        <TocIcon />
        <h3 className="select-none text-[13px] font-[450] text-[#b5b5b5]">
          On this page
        </h3>
      </div>
      <div className="flex flex-col gap-1.5">
        {sections.map((section, i) => (
          <div key={section.id} className="contents">
            {i > 0 && (
              <>
                <span className="h-px w-3 bg-[#2a2a2a]" />
                <span className="h-px w-3 bg-[#2a2a2a]" />
              </>
            )}
            <a
              className="group relative flex h-px items-center gap-[10px] before:absolute before:inset-x-0 before:-inset-y-3.5 before:content-['']"
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
            >
              <span
                className={`h-px w-5 shrink-0 ${
                  activeId === section.id ? "bg-[#eee]" : "bg-[#2a2a2a]"
                }`}
              />
              <span
                className={`select-none truncate text-[13px] font-[450] transition-colors group-hover:text-[#eee] ${
                  activeId === section.id ? "text-[#eee]" : "text-[#7c7c7c]"
                }`}
              >
                {section.label}
              </span>
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
