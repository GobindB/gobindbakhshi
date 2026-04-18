"use client";

import { useEffect, useRef, useState } from "react";

function PriceRow({
  label,
  amount,
  tabular,
}: {
  label: string;
  amount: number;
  tabular: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-sm text-[#b5b5b5]">{label}</span>
      <span
        className="text-sm text-[#eee]"
        style={{
          fontVariantNumeric: tabular ? "tabular-nums" : "proportional-nums",
        }}
      >
        ${amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </span>
    </div>
  );
}

function PriceList({ tabular, label }: { tabular: boolean; label: string }) {
  const [prices, setPrices] = useState([1249.0, 849.5, 3199.99, 499.0, 12750.0]);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPrices((prev) =>
        prev.map((p) => {
          const change = (Math.random() - 0.5) * p * 0.02;
          return Math.round((p + change) * 100) / 100;
        })
      );
    }, 1500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const items = ["AAPL", "TSLA", "NVDA", "META", "BRK.A"];

  return (
    <div className="w-full">
      <div className="mb-2 flex h-7 w-fit select-none items-center justify-center whitespace-nowrap rounded-full border border-[#2a2a2a] bg-[#0e0e0e] px-2.5 font-mono text-sm font-medium text-[#7c7c7c]">
        {label}
      </div>
      <div className="divide-y divide-[#1e1e1e]">
        {items.map((item, i) => (
          <PriceRow key={item} label={item} amount={prices[i]} tabular={tabular} />
        ))}
      </div>
    </div>
  );
}

export function TabularNumbersDemo() {
  return (
    <>
      <div className="mt-6 shrink-0 overflow-hidden rounded-xl shadow-[0_0_0_1px_#ffffff14]">
        <div className="flex w-full shrink-0 flex-col items-center justify-center bg-[#080808] sm:flex-row">
          <div className="flex h-72 w-full flex-col items-center justify-center border-b border-[#1e1e1e] px-8 sm:border-b-0 sm:border-r">
            <PriceList tabular={false} label="proportional" />
          </div>
          <div className="flex h-72 w-full flex-col items-center justify-center px-8">
            <PriceList tabular={true} label="tabular" />
          </div>
        </div>
      </div>

      <p className="mt-4 select-none text-center text-[13px] text-[#7c7c7c]">
        Tabular numbers give each digit equal width, preventing layout shift in dynamic values.
      </p>
    </>
  );
}
