"use client";

import { useState } from "react";

function Card({
  label,
  outerRadius,
  innerRadius,
  isCorrect,
}: {
  label: string;
  outerRadius: number;
  innerRadius: number;
  isCorrect: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="mb-2 flex h-7 w-fit select-none items-center justify-center whitespace-nowrap rounded-full border border-[#2a2a2a] bg-[#0e0e0e] px-2.5 font-mono text-sm font-medium text-[#7c7c7c]">
        {label}
      </div>
      <div
        className="flex h-28 w-40 items-end justify-end border border-[#1e1e1e] bg-[#141414] p-2.5"
        style={{ borderRadius: `${outerRadius}px` }}
      >
        <div
          className="h-10 w-20 bg-[#2a2a2a]"
          style={{ borderRadius: `${innerRadius}px` }}
        />
      </div>
      <div
        className={`flex size-7 items-center justify-center rounded-full ${
          isCorrect ? "bg-green-500/10" : "bg-red-500/10"
        }`}
      >
        {isCorrect ? (
          <svg className="size-5 text-green-500" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.774 10.1333C16.1237 9.70582 16.0607 9.0758 15.6332 8.72607C15.2058 8.37635 14.5758 8.43935 14.226 8.86679L10.4258 13.5116L9.20711 12.2929C8.81658 11.9024 8.18342 11.9024 7.79289 12.2929C7.40237 12.6834 7.40237 13.3166 7.79289 13.7071L9.79289 15.7071C9.99267 15.9069 10.2676 16.0129 10.5498 15.9988C10.832 15.9847 11.095 15.8519 11.274 15.6333L15.774 10.1333Z" fill="currentColor" />
          </svg>
        ) : (
          <svg className="size-5 text-red-500" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z" fill="currentColor" />
          </svg>
        )}
      </div>
    </div>
  );
}

export function BorderRadiusDemo() {
  const [outerRadius, setOuterRadius] = useState(16);
  const padding = 10; // p-2.5 = 10px
  const concentricInner = Math.max(outerRadius - padding, 0);

  return (
    <>
      <div className="mt-6 shrink-0 overflow-hidden rounded-xl shadow-[0_0_0_1px_#ffffff14]">
        <div className="flex w-full shrink-0 flex-col items-center justify-center bg-[#080808] sm:flex-row">
          <div className="relative flex h-72 w-full flex-col items-center justify-center gap-2 border-b border-[#1e1e1e] sm:border-b-0 sm:border-r">
            <Card
              label="uniform"
              outerRadius={outerRadius}
              innerRadius={outerRadius}
              isCorrect={false}
            />
          </div>
          <div className="relative flex h-72 w-full flex-col items-center justify-center gap-2">
            <Card
              label="concentric"
              outerRadius={outerRadius}
              innerRadius={concentricInner}
              isCorrect={true}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 border-t border-[#1e1e1e] bg-[#0e0e0e] px-4 py-3 sm:flex-row">
          <div className="flex w-full flex-col gap-3">
            <div className="flex w-full items-center justify-between text-sm">
              <span className="select-none text-[#b5b5b5]">Outer radius</span>
              <span className="font-mono text-[#b5b5b5]">{outerRadius}px</span>
            </div>
            <input
              type="range"
              min={0}
              max={32}
              value={outerRadius}
              onChange={(e) => setOuterRadius(Number(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[#1e1e1e] outline outline-[#2a2a2a] -outline-offset-1 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rotate-45 [&::-webkit-slider-thumb]:rounded [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_rgba(0,0,0,0.21),0_1px_2px_rgba(0,0,0,0.04)]"
            />
          </div>
        </div>
      </div>

      <p className="mt-4 select-none text-center text-[13px] text-[#7c7c7c]">
        Inner radius = outer radius − padding. This keeps curves concentric and visually consistent.
      </p>
    </>
  );
}
