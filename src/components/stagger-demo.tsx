"use client";

import { useCallback, useState } from "react";

const items = [
  { icon: "📋", label: "Copy to clipboard" },
  { icon: "✏️", label: "Edit document" },
  { icon: "📤", label: "Share with team" },
  { icon: "🗑️", label: "Move to trash" },
];

export function StaggerDemo() {
  const [key, setKey] = useState(0);
  const [stagger, setStagger] = useState(true);

  const replay = useCallback(() => {
    setKey((k) => k + 1);
  }, []);

  return (
    <>
      <div className="mt-6 shrink-0 overflow-hidden rounded-xl shadow-[0_0_0_1px_#ffffff14]">
        <div className="flex w-full shrink-0 flex-col items-center justify-center bg-[#080808] sm:flex-row">
          {/* No stagger */}
          <div className="flex h-80 w-full flex-col items-center justify-center gap-2 border-b border-[#1e1e1e] px-6 sm:border-b-0 sm:border-r">
            <div className="mb-3 flex h-7 w-fit select-none items-center justify-center whitespace-nowrap rounded-full border border-[#2a2a2a] bg-[#0e0e0e] px-2.5 font-mono text-sm font-medium text-[#7c7c7c]">
              uniform
            </div>
            <div key={`no-stagger-${key}`} className="flex w-full max-w-[200px] flex-col gap-1.5">
              {items.map((item) => (
                <div
                  key={item.label}
                  className="flex animate-[fadeSlideIn_0.35s_ease-out_both] items-center gap-3 rounded-lg bg-[#141414] px-3 py-2.5 text-sm text-[#eee]"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With stagger */}
          <div className="flex h-80 w-full flex-col items-center justify-center gap-2 px-6">
            <div className="mb-3 flex h-7 w-fit select-none items-center justify-center whitespace-nowrap rounded-full border border-[#2a2a2a] bg-[#0e0e0e] px-2.5 font-mono text-sm font-medium text-[#7c7c7c]">
              staggered
            </div>
            <div key={`stagger-${key}`} className="flex w-full max-w-[200px] flex-col gap-1.5">
              {items.map((item, i) => (
                <div
                  key={item.label}
                  className="flex animate-[fadeSlideIn_0.35s_ease-out_both] items-center gap-3 rounded-lg bg-[#141414] px-3 py-2.5 text-sm text-[#eee]"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center border-t border-[#1e1e1e] bg-[#0e0e0e] px-4 py-3">
          <button
            onClick={replay}
            className="flex h-10 w-full shrink-0 select-none items-center justify-center rounded-lg bg-[#080808] px-3.5 font-medium text-[#eee] shadow-[0_0_0_1px_#ffffff14] transition-[scale,background-color,shadow] duration-200 ease-out hover:bg-[#161616] active:scale-[0.97] sm:w-34"
          >
            Replay
          </button>
        </div>
      </div>

      <p className="mt-4 select-none text-center text-[13px] text-[#7c7c7c]">
        Staggering entry animations by 50ms per element creates a natural, cascading reveal.
      </p>
    </>
  );
}
