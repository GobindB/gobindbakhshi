export function GeometricLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
      {/* Offset container — push center above the card so only bottom portion shows */}
      <div className="absolute left-1/2 -top-[70%] -translate-x-1/2">
        {/* Main rotating circle */}
        <div className="relative size-[200px] animate-[geo-rotate_180s_linear_infinite] rounded-full border border-[#ccc] bg-[#18181b]/40">
          {/* Inner ring */}
          <div className="absolute inset-[30px] rounded-full border border-dashed border-[#ccc]" />
          {/* Outer ring */}
          <div className="absolute -inset-[30px] rounded-full border border-dashed border-[#ccc]" />

          {/* Crossing lines */}
          <div className="absolute top-1/2 left-1/2 w-[200px] -translate-x-1/2 -translate-y-1/2 animate-[geo-rotate-reverse_120s_linear_infinite] border-t border-[#ccc]">
            <div className="absolute top-1/2 left-1/2 h-0 w-[260px] -translate-x-1/2 -translate-y-1/2 rotate-45 border-t border-dashed border-[#ccc]" />
            <div className="absolute top-1/2 left-1/2 h-0 w-[260px] -translate-x-1/2 -translate-y-1/2 -rotate-45 border-t border-dashed border-[#ccc]" />
          </div>
          <div className="absolute top-1/2 left-1/2 h-[200px] w-0 -translate-x-1/2 -translate-y-1/2 animate-[geo-rotate-reverse_120s_linear_infinite] border-l border-[#ccc]" />

          {/* Offset circles */}
          <div className="absolute top-0 left-0 size-full -translate-x-1/2 rounded-full border border-[#ccc]" />
          <div className="absolute top-0 right-0 size-full translate-x-1/2 rounded-full border border-[#ccc]" />
          <div className="absolute top-0 left-0 size-full -translate-y-1/2 rounded-full border border-[#ccc]" />
          <div className="absolute bottom-0 left-0 size-full translate-y-1/2 rounded-full border border-[#ccc]" />
        </div>

        {/* Outer hatched ring — positioned relative to the main circle */}
        <div className="absolute top-1/2 left-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ccc]">
          <div
            className="absolute -inset-[30px] rounded-full border border-dashed border-[#ccc] opacity-80"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #ccc 0, #ccc 1px, transparent 0, transparent 50%)",
              backgroundSize: "10px 10px",
              maskImage: "radial-gradient(circle at center, transparent 200px, black 200px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
