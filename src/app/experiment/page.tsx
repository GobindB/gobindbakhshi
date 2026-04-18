import { AntialiasingDemo } from "@/components/antialiasing-demo";
import { BorderRadiusDemo } from "@/components/border-radius-demo";
import { OpticalAlignmentDemo } from "@/components/optical-alignment-demo";
import { ShadowBorderDemo } from "@/components/shadow-border-demo";
import { StaggerDemo } from "@/components/stagger-demo";
import { TabularNumbersDemo } from "@/components/tabular-numbers-demo";
import { TableOfContents } from "@/components/table-of-contents";
import { TextWrapDemo } from "@/components/text-wrap-demo";

function Divider() {
  return (
    <div className="my-16 flex w-full items-center justify-center gap-1">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="h-0.5 w-4 rounded-full bg-[#2a2a2a]" />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
    <TableOfContents />
    <main className="mx-auto max-w-[43.25rem] px-6 py-20 leading-relaxed">
      {/* Top bar */}
      <div className="mb-24 flex min-h-9 w-full select-none items-center justify-between gap-2">
        <a
          className="group flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1e1e1e] transition-[scale,background-color] duration-200 ease-out hover:bg-[#2a2a2a] active:scale-[0.97] will-change-transform"
          aria-label="Home"
          href="/"
        >
          <svg
            aria-label="Arrow Top Left Icon"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="mr-0.5 size-[18px] text-[#7c7c7c] transition-colors duration-200 ease-out group-hover:text-[#eee]"
          >
            <path
              d="M9.70711 4.70711C10.0976 4.31658 10.0976 3.68342 9.70711 3.29289C9.31658 2.90237 8.68342 2.90237 8.29289 3.29289L3.29289 8.29289C2.90237 8.68342 2.90237 9.31658 3.29289 9.70711L8.29289 14.7071C8.68342 15.0976 9.31658 15.0976 9.70711 14.7071C10.0976 14.3166 10.0976 13.6834 9.70711 13.2929L6.41421 10H10.4C12.0967 10 13.309 10.0008 14.2594 10.0784C15.198 10.1551 15.7927 10.3018 16.27 10.545C17.2108 11.0243 17.9757 11.7892 18.455 12.73C18.6982 13.2073 18.8449 13.802 18.9216 14.7406C18.9992 15.691 19 16.9033 19 18.6V20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20V18.5556C21 16.913 21 15.6191 20.9149 14.5778C20.8281 13.5154 20.6478 12.6283 20.237 11.8221C19.5659 10.5049 18.4951 9.43407 17.1779 8.76295C16.3717 8.35217 15.4846 8.17186 14.4222 8.08507C13.3809 7.99999 12.087 7.99999 10.4444 8L6.41421 8L9.70711 4.70711Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <h1 id="playground" className="mb-4 scroll-m-8 text-xl font-medium text-white">
        Details that make interfaces feel better
      </h1>
      <p className="text-white/85 [line-height:1.65] [text-wrap:pretty]">
        Great interfaces rarely come from a single thing. It&apos;s usually a
        collection of small things that compound into a great experience. Below
        are a few small details I use to make my interfaces feel better.
      </p>

      <Divider />

      <h2 id="text-wrapping" className="mb-4 scroll-m-8 text-xl font-medium text-white">
        Text wrapping
      </h2>
      <p className="text-white/85 [line-height:1.65] [text-wrap:pretty]">
        A quick way to improve how text behaves in your app is to
        use <code className="rounded-md border border-[#1e1e1e] bg-[#080808] px-1 py-px font-mono text-[14px]">text-wrap: balance</code>.
        It distributes text evenly across each line, avoiding orphaned words.
      </p>
      <TextWrapDemo />

      <Divider />

      <h2 id="concentric-border-radius" className="mb-4 scroll-m-8 text-xl font-medium text-white">
        Concentric border radius
      </h2>
      <p className="text-white/85 [line-height:1.65] [text-wrap:pretty]">
        When nesting rounded elements, the inner radius should
        equal <code className="rounded-md border border-[#1e1e1e] bg-[#080808] px-1 py-px font-mono text-[14px]">outerRadius - padding</code>.
        This keeps the curves concentric rather than parallel, which looks far more
        intentional.
      </p>
      <BorderRadiusDemo />

      <Divider />

      <h2 id="make-text-crispy" className="mb-4 scroll-m-8 text-xl font-medium text-white">
        Make text crispy
      </h2>
      <p className="text-white/85 [line-height:1.65] [text-wrap:pretty]">
        On macOS, the default font smoothing uses subpixel rendering which can make
        light text on dark backgrounds appear heavy and blurry.
        Use <code className="rounded-md border border-[#1e1e1e] bg-[#080808] px-1 py-px font-mono text-[14px]">-webkit-font-smoothing: antialiased</code> to
        switch to grayscale antialiasing for thinner, sharper text.
      </p>
      <AntialiasingDemo />

      <Divider />

      <h2 id="use-tabular-numbers" className="mb-4 scroll-m-8 text-xl font-medium text-white">
        Use tabular numbers
      </h2>
      <p className="text-white/85 [line-height:1.65] [text-wrap:pretty]">
        Proportional numbers look great in prose, but in tables, dashboards, or
        anywhere values change dynamically,
        use <code className="rounded-md border border-[#1e1e1e] bg-[#080808] px-1 py-px font-mono text-[14px]">font-variant-numeric: tabular-nums</code>.
        It gives every digit the same width so columns stay aligned and values
        don&apos;t jitter when they update.
      </p>
      <TabularNumbersDemo />

      <Divider />

      <h2 id="split-and-stagger" className="mb-4 scroll-m-8 text-xl font-medium text-white">
        Split and stagger entering elements
      </h2>
      <p className="text-white/85 [line-height:1.65] [text-wrap:pretty]">
        When multiple elements enter at once, animating them all simultaneously
        feels flat. Adding a small stagger
        of <code className="rounded-md border border-[#1e1e1e] bg-[#080808] px-1 py-px font-mono text-[14px]">animation-delay</code> per
        element creates a cascading reveal that feels organic and guided.
      </p>
      <StaggerDemo />

      <Divider />

      <h2 id="align-optically" className="mb-4 scroll-m-8 text-xl font-medium text-white">
        Align optically, not geometrically
      </h2>
      <p className="text-white/85 [line-height:1.65] [text-wrap:pretty]">
        A play icon centered mathematically inside a circle will look slightly
        left-heavy because triangles have more visual mass on their flat edge.
        Nudging it <code className="rounded-md border border-[#1e1e1e] bg-[#080808] px-1 py-px font-mono text-[14px]">1-2px</code> to
        the right makes it appear centered to the human eye.
      </p>
      <OpticalAlignmentDemo />

      <Divider />

      <h2 id="use-shadows-instead-of-borders" className="mb-4 scroll-m-8 text-xl font-medium text-white">
        Use shadows instead of borders
      </h2>
      <p className="text-white/85 [line-height:1.65] [text-wrap:pretty]">
        Borders add to an element&apos;s layout size and can&apos;t be combined with depth
        shadows in a single
        property. Using <code className="rounded-md border border-[#1e1e1e] bg-[#080808] px-1 py-px font-mono text-[14px]">box-shadow: 0 0 0 1px</code> instead
        gives you a visual border that doesn&apos;t affect layout and layers naturally
        with other shadows.
      </p>
      <ShadowBorderDemo />

      <Divider />

      {/* Add your components below */}
    </main>
    </>
  );
}
