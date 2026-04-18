"use client";

import { useMemo, useState } from "react";
import type { Resource, Format } from "@/data/resources";
import { colors, formats, labels, formatDate } from "@/data/resources";

function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function ResourceList({ resources }: { resources: Resource[] }) {
  const [filters, setFilters] = useState<Format[]>([]);
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim() && filters.length === 0) return resources;

    return resources.filter(
      (r) =>
        (filters.length === 0 || filters.includes(r.format)) &&
        r.title.toLowerCase().includes(query.trim().toLowerCase())
    );
  }, [resources, filters, query]);

  const toggleFilter = (format: Format) => {
    setFilters((prev) =>
      prev.includes(format) ? prev.filter((f) => f !== format) : [...prev, format]
    );
  };

  const clearAll = () => {
    setFilters([]);
    setQuery("");
    setValue("");
  };

  return (
    <section className="mt-12">
      {/* Title */}
      <h2 className="mb-6 text-lg font-medium text-[#eee]">
        Browse <em className="italic">Resources:</em>
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {/* Search */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(value);
          }}
        >
          <input
            placeholder="Search here..."
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            className="h-9 w-[200px] border border-[#2a2a2a] bg-[#0e0e0e] px-2 text-sm text-[#eee] outline-none transition-shadow duration-200 placeholder:text-[#4a4a4a] focus-visible:shadow-[0_0_0_2px_#1e1e1e]"
          />
        </form>

        {/* Format buttons */}
        {formats.map((format) => {
          const active = filters.includes(format);
          return (
            <button
              key={format}
              onClick={() => toggleFilter(format)}
              className={cn(
                "relative flex h-9 cursor-pointer items-center gap-2 border px-4 text-sm font-medium transition-colors duration-200",
                active
                  ? "border-[#4a4a4a] bg-[#1e1e1e] text-[#eee]"
                  : "border-[#2a2a2a] bg-[#0e0e0e] text-[#7c7c7c] hover:bg-[#1e1e1e] hover:text-[#eee]",
                "active:scale-[0.95]"
              )}
            >
              {active && (
                <>
                  <span className="absolute -top-px -left-px size-[5px] border-t border-l border-[#7c7c7c]" />
                  <span className="absolute -top-px -right-px size-[5px] border-t border-r border-[#7c7c7c]" />
                  <span className="absolute -right-px -bottom-px size-[5px] border-r border-b border-[#7c7c7c]" />
                  <span className="absolute -bottom-px -left-px size-[5px] border-b border-l border-[#7c7c7c]" />
                </>
              )}
              <span
                className="size-1.5 shrink-0 rounded-full"
                style={{ background: colors[format] }}
              />
              <span>{labels[format]}</span>
            </button>
          );
        })}

        {/* Clear */}
        <button
          disabled={filters.length === 0 && !query.trim()}
          onClick={clearAll}
          className="flex h-9 cursor-pointer items-center border border-[#2a2a2a] bg-[#0e0e0e] px-4 text-sm font-medium text-[#7c7c7c] transition-colors duration-200 hover:bg-[#1e1e1e] hover:text-[#eee] active:scale-[0.95] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear All
        </button>
      </div>

      {/* List */}
      {filtered.length > 0 ? (
        <ul className="mt-9 [&:has(>li:hover)_li:not(:hover)]:opacity-50">
          {filtered.map((resource, i) => (
            <li
              key={`${resource.title}-${i}`}
              className="flex items-center gap-2 py-1.5 transition-opacity duration-200"
            >
              {/* Color dot */}
              <span
                className="size-1.5 shrink-0 rounded-full"
                style={{ background: colors[resource.format] }}
              />

              {/* Title + description */}
              <a
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="group shrink overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-[#eee] no-underline transition-colors duration-200"
              >
                {resource.title}{" "}
                {resource.description && (
                  <span className="font-normal text-[#4a4a4a] transition-colors duration-200 group-hover:text-[#7c7c7c]">
                    • {resource.description}
                  </span>
                )}
              </a>

              {/* Dashed divider */}
              <span className="min-w-3 grow border-b border-dashed border-[#2a2a2a] transition-colors duration-200" />

              {/* Date */}
              <span className="shrink-0 font-mono text-xs uppercase tabular-nums text-[#4a4a4a] transition-colors duration-200">
                {formatDate(new Date(resource.date))}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-9 text-sm text-[#7c7c7c]">No resources were found.</p>
      )}
    </section>
  );
}
