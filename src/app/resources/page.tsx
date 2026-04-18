import { resources } from "@/data/resources";
import { ResourceList } from "@/components/resource-list";

function Spacer() {
  return (
    <div className="h-3 w-full opacity-20" style={{
      backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 2px, #4a4a4a 2px, #4a4a4a 3px)",
      maskImage: "linear-gradient(to right, black, transparent)",
    }} />
  );
}

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-[43.25rem] px-6 py-20 leading-relaxed">
      {/* Top bar */}
      <div className="mb-12 flex min-h-9 w-full select-none items-center justify-between gap-2">
        <a
          className="group flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#1e1e1e] transition-[scale,background-color] duration-200 ease-out hover:bg-[#2a2a2a] active:scale-[0.97] will-change-transform"
          aria-label="Home"
          href="/"
        >
          <svg
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

      <Spacer />

      <ResourceList resources={resources} />

      <Spacer />

      {/* Footer */}
      <footer className="mt-12 pb-8">
        <p className="text-sm text-[#4a4a4a]">
          Curated by Gobind Bakhshi.
        </p>
      </footer>
    </main>
  );
}
