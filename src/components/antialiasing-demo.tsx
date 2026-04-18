"use client";

import { useState } from "react";

export function AntialiasingDemo() {
  const [mode, setMode] = useState<"antialiased" | "auto">("antialiased");

  return (
    <>
      <div className="mt-6 shrink-0 overflow-hidden rounded-xl shadow-[0_0_0_1px_#ffffff14]">
        <div className="flex w-full shrink-0 flex-col items-center justify-center bg-[#080808] sm:flex-row">
          <div className="flex h-72 w-full flex-col items-center justify-center gap-4 border-b border-[#1e1e1e] px-8 sm:border-b-0 sm:border-r">
            <div className="mb-2 flex h-7 w-fit select-none items-center justify-center whitespace-nowrap rounded-full border border-[#2a2a2a] bg-[#0e0e0e] px-2.5 font-mono text-sm font-medium text-[#7c7c7c]">
              auto
            </div>
            <p
              className="select-none text-center text-2xl font-medium text-[#eee]"
              style={{ WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }}
            >
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className="flex h-72 w-full flex-col items-center justify-center gap-4 px-8">
            <div className="mb-2 flex h-7 w-fit select-none items-center justify-center whitespace-nowrap rounded-full border border-[#2a2a2a] bg-[#0e0e0e] px-2.5 font-mono text-sm font-medium text-[#7c7c7c]">
              antialiased
            </div>
            <p
              className="select-none text-center text-2xl font-medium text-[#eee]"
              style={{
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center gap-4 border-t border-[#1e1e1e] bg-[#0e0e0e] px-4 py-3">
          <div className="flex gap-1 rounded-lg bg-[#080808] p-1 shadow-[0_0_0_1px_#ffffff14]">
            <button
              onClick={() => setMode("auto")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                mode === "auto"
                  ? "bg-[#1e1e1e] text-[#eee]"
                  : "text-[#7c7c7c] hover:text-[#b5b5b5]"
              }`}
            >
              Auto
            </button>
            <button
              onClick={() => setMode("antialiased")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                mode === "antialiased"
                  ? "bg-[#1e1e1e] text-[#eee]"
                  : "text-[#7c7c7c] hover:text-[#b5b5b5]"
              }`}
            >
              Antialiased
            </button>
          </div>
        </div>
      </div>

      <p className="mt-4 select-none text-center text-[13px] text-[#7c7c7c]">
        Antialiased rendering produces thinner, crisper text on dark backgrounds by using grayscale smoothing.
      </p>
    </>
  );
}
