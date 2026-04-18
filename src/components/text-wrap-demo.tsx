"use client";

import { useRef, useState } from "react";

function XCircleIcon() {
  return (
    <svg
      className="size-5 text-red-500"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      className="size-5 text-green-500"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.774 10.1333C16.1237 9.70582 16.0607 9.0758 15.6332 8.72607C15.2058 8.37635 14.5758 8.43935 14.226 8.86679L10.4258 13.5116L9.20711 12.2929C8.81658 11.9024 8.18342 11.9024 7.79289 12.2929C7.40237 12.6834 7.40237 13.3166 7.79289 13.7071L9.79289 15.7071C9.99267 15.9069 10.2676 16.0129 10.5498 15.9988C10.832 15.9847 11.095 15.8519 11.274 15.6333L15.774 10.1333Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Column({
  label,
  wrapMode,
  icon,
  width,
  showGuides,
  hasBorder,
}: {
  label: string;
  wrapMode: "wrap" | "balance";
  icon: React.ReactNode;
  width: number;
  showGuides: boolean;
  hasBorder?: boolean;
}) {
  return (
    <div
      className={`relative flex h-72 w-full flex-col items-center justify-center gap-4 ${
        hasBorder ? "border-b border-[#1e1e1e] sm:border-b-0 sm:border-r" : ""
      }`}
    >
      <div className="relative" style={{ width: `${width}px` }}>
        {/* Guide lines */}
        <span
          className={`absolute top-1/2 left-0 h-72 w-px -translate-y-1/2 bg-[#1e1e1e] transition-opacity will-change-transform ${
            !showGuides ? "opacity-0" : ""
          }`}
        />
        <span
          className={`absolute top-1/2 right-0 h-72 w-px -translate-y-1/2 bg-[#1e1e1e] transition-opacity ${
            !showGuides ? "opacity-0" : ""
          }`}
        />

        {/* Label pill */}
        <div className="mb-2 flex h-7 w-fit select-none items-center justify-center whitespace-nowrap rounded-full border border-[#2a2a2a] bg-[#0e0e0e] px-2.5 font-mono text-sm font-medium text-[#7c7c7c]">
          {label}
        </div>

        {/* Heading */}
        <p
          className="select-none text-start text-lg font-medium leading-snug text-[#eee]"
          style={{ textWrap: wrapMode }}
        >
          Designing interfaces that feel natural and intuitive
        </p>

        {/* Body */}
        <p
          className="mt-1 select-none text-sm text-[#6f6f6f]"
          style={{ textWrap: wrapMode }}
        >
          Great design is invisible. It guides users without them ever noticing.
        </p>

        {/* Icon */}
        <div
          className={`mt-2 flex size-7 items-center justify-center rounded-full ${
            wrapMode === "wrap" ? "bg-red-500/10" : "bg-green-500/10"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export function TextWrapDemo() {
  const [width, setWidth] = useState(220);
  const [showGuides, setShowGuides] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  function toggleGuides() {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowGuides((prev) => !prev);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsAnimating(false), 350);
  }

  return (
    <>
    <div className="mt-6 shrink-0 overflow-hidden rounded-xl shadow-[0_0_0_1px_#ffffff14]">
      {/* Preview area */}
      <div className="flex w-full shrink-0 flex-col items-center justify-center bg-[#080808] sm:flex-row">
        <Column
          label="wrap"
          wrapMode="wrap"
          icon={<XCircleIcon />}
          width={width}
          showGuides={showGuides}
          hasBorder
        />
        <Column
          label="balance"
          wrapMode="balance"
          icon={<CheckCircleIcon />}
          width={width}
          showGuides={showGuides}
        />
      </div>

      {/* Toolbar */}
      <div className="flex w-full flex-col items-center justify-center gap-4 border-t border-[#1e1e1e] bg-[#0e0e0e] px-4 py-3 sm:flex-row">
        {/* Slider section */}
        <div className="mb-1.5 flex w-full flex-col gap-3 sm:mb-0">
          <div className="flex w-full items-center justify-between text-sm">
            <span className="select-none text-[#b5b5b5]">Width</span>
            <span className="font-mono text-[#b5b5b5]">{width}px</span>
          </div>
          <input
            type="range"
            min={140}
            max={300}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[#1e1e1e] outline outline-[#2a2a2a] -outline-offset-1 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rotate-45 [&::-webkit-slider-thumb]:rounded [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_rgba(0,0,0,0.21),0_1px_2px_rgba(0,0,0,0.04)]"
          />
        </div>

        {/* Divider */}
        <span className="hidden h-6 w-px shrink-0 bg-[#2a2a2a] sm:block" />

        {/* Toggle button */}
        <button
          onClick={toggleGuides}
          className="flex h-10 w-full shrink-0 select-none items-center justify-center rounded-lg bg-[#080808] px-3.5 font-medium text-[#eee] shadow-[0_0_0_1px_#ffffff14] transition-[scale,background-color,shadow] duration-200 ease-out hover:bg-[#161616] active:scale-[0.97] sm:w-34"
        >
          {showGuides ? "Hide guides" : "Show guides"}
        </button>
      </div>

    </div>

    {/* Descriptor */}
    <p className="mt-4 select-none text-center text-[13px] text-[#7c7c7c]">
      text-wrap: balance distributes text evenly across lines, preventing orphaned words.
    </p>
    </>

  );
}
