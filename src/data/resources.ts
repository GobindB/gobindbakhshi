export type Format =
  | "read"
  | "watch"
  | "listen"
  | "browse"
  | "use"
  | "build"
  | "learn"
  | "join"
  | "follow";

export const formats: Format[] = [
  "read",
  "watch",
  "listen",
  "browse",
  "use",
  "build",
  "learn",
  "join",
  "follow",
];

export const colors: Record<Format, string> = {
  browse: "#ef4444",
  build: "#f97316",
  follow: "#a3e635",
  join: "#4ade80",
  learn: "#2dd4bf",
  listen: "#22d3ee",
  read: "#8b5cf6",
  use: "#6366f1",
  watch: "#f472b6",
};

export const labels: Record<Format, string> = {
  browse: "Browse",
  build: "Build",
  follow: "Follow",
  join: "Join",
  learn: "Learn",
  listen: "Listen",
  read: "Read",
  use: "Use",
  watch: "Watch",
};

export interface Resource {
  date: string;
  description?: string;
  format: Format;
  title: string;
  url: string;
}

function formatDate(date: Date): string {
  const year = date.getFullYear().toString().slice(-2);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate().toString().padStart(2, "0");
  return `${month} ${day}, ${year}`;
}

export { formatDate };

const _resources: Resource[] = [
  {
    date: "2026-03-04",
    description: "Learn what Design Engineers are and what they do at Vercel.",
    format: "read",
    title: "Design Engineering at Vercel",
    url: "https://vercel.com/blog/design-engineering-at-vercel",
  },
  {
    date: "2026-03-05",
    description: "Why taste matters and how to develop it.",
    format: "read",
    title: "Developing Taste",
    url: "https://emilkowal.ski/ui/developing-taste",
  },
  {
    date: "2026-03-05",
    description: "A guide to the foundational principles of animation.",
    format: "read",
    title: "12 Principles of Animation",
    url: "https://www.raphaelsalaja.com/library/12-principles-of-animation",
  },
  {
    date: "2026-03-06",
    description: "Animations on the Web",
    format: "learn",
    title: "animations.dev",
    url: "https://animations.dev",
  },
  {
    date: "2026-03-06",
    description: "Design engineer working at Linear.",
    format: "follow",
    title: "Emil Kowalski",
    url: "https://emilkowal.ski/",
  },
  {
    date: "2026-03-06",
    description: "An opinionated toast component for React.",
    format: "build",
    title: "Sonner",
    url: "https://sonner.emilkowal.ski/",
  },
  {
    date: "2026-03-07",
    description: "Staff Design Engineer at Vercel",
    format: "follow",
    title: "Rauno Freiberg",
    url: "https://rauno.me/",
  },
  {
    date: "2026-03-07",
    description: "Practical guide to the jobs and skills of the design engineer in tech",
    format: "read",
    title: "Design Engineering 101",
    url: "https://www.designdisciplin.com/p/design-engineering-101",
  },
  {
    date: "2026-03-07",
    description: "Haptic feedback for the mobile web.",
    format: "build",
    title: "WebHaptics",
    url: "https://haptics.lochie.me",
  },
  {
    date: "2026-03-08",
    description: "Design Engineering Community",
    format: "join",
    title: "Design Engineering Club",
    url: "https://designeng.club/",
  },
  {
    date: "2026-03-08",
    description: "Finding my dream role blending code, design, and product thinking",
    format: "read",
    title: "Design Engineering: A State of Mind",
    url: "https://blog.designeng.club/p/design-engineering-a-state-of-mind",
  },
  {
    date: "2026-03-08",
    description: "700+ curated UI sound effects for modern web apps.",
    format: "build",
    title: "soundcn",
    url: "https://soundcn.xyz/",
  },
  {
    date: "2026-03-08",
    description: "Find a design engineering job in a next generation software company.",
    format: "browse",
    title: "Design Engineer Jobs",
    url: "https://designengineer.io/",
  },
  {
    date: "2026-03-09",
    description: "A non-exhaustive list of details that make a good web interface.",
    format: "read",
    title: "Web Interface Guidelines",
    url: "https://interfaces.rauno.me/",
  },
  {
    date: "2026-03-09",
    description: "Fast, unstyled command menu React component.",
    format: "build",
    title: "\u2318K",
    url: "https://github.com/dip/cmdk",
  },
  {
    date: "2026-03-09",
    description: "The documented collection of UI components.",
    format: "browse",
    title: "UI Playbook",
    url: "https://uiplaybook.dev/",
  },
  {
    date: "2026-03-09",
    description: "An interactive reference manual for interaction-curious designers.",
    format: "learn",
    title: "Devouring Details",
    url: "https://devouringdetails.com/",
  },
  {
    date: "2026-03-09",
    description: "What makes Family, Family.",
    format: "read",
    title: "Family Values",
    url: "https://benji.org/family-values",
  },
  {
    date: "2026-03-09",
    description: "Real-time animated line chart for React.",
    format: "build",
    title: "Liveline",
    url: "https://github.com/benjitaylor/liveline",
  },
  {
    date: "2026-03-10",
    description: "An interactive mini-course on creating SVG animations.",
    format: "learn",
    title: "Interactive SVG Animations",
    url: "https://www.svg.guide/",
  },
  {
    date: "2026-03-10",
    description: "What makes great interactions feel right?",
    format: "read",
    title: "Invisible Details of Interaction Design",
    url: "https://rauno.me/craft/interaction-design",
  },
  {
    date: "2026-03-10",
    description: "A working library for those committed to designing with uncommon care.",
    format: "learn",
    title: "Interface Craft",
    url: "https://www.interfacecraft.dev/",
  },
  {
    date: "2026-03-10",
    description: "A repository of interface components based on examples from design systems.",
    format: "browse",
    title: "The Component Gallery",
    url: "https://component.gallery/",
  },
  {
    date: "2026-03-11",
    description: "Convert, generate and explore OKLCH colors.",
    format: "use",
    title: "OKLCH.fyi",
    url: "https://oklch.fyi/",
  },
  {
    date: "2026-03-14",
    description: "A living manual for better interfaces.",
    format: "browse",
    title: "userinterface.wiki",
    url: "https://userinterface.wiki/",
  },
  {
    date: "2026-03-14",
    description: "A list of useful tools for web-focused design engineers.",
    format: "browse",
    title: "Design Engineer Tools",
    url: "https://designengineer.tools/",
  },
  {
    date: "2026-03-15",
    description: "Learn what Design Engineers do and why they matter.",
    format: "read",
    title: "Design Engineering",
    url: "https://www.designengineer.xyz/design-engineering",
  },
  {
    date: "2026-03-15",
    description: "Thoughts about design, code, technology and everything in between.",
    format: "read",
    title: "Becoming a Design Engineer",
    url: "https://marcel.io/posts/becoming-a-design-engineer",
  },
  {
    date: "2026-03-15",
    description: "Links and observations on design engineering",
    format: "browse",
    title: "Design Engineering Notes",
    url: "https://www.floguo.com/notes/design-engineering",
  },
  {
    date: "2026-03-15",
    description: "Founding design engineer at Paradigm",
    format: "follow",
    title: "floguo",
    url: "https://www.floguo.com/",
  },
  {
    date: "2026-03-15",
    description: "A curated collection of easing graphs",
    format: "use",
    title: "Easing Graphs",
    url: "https://www.easing.dev/",
  },
  {
    date: "2026-03-16",
    description: "Building the design engineering practice at DoorDash.",
    format: "read",
    title: "The Attributes of a Design Engineer",
    url: "https://www.ryngonzalez.com/blog/the-attributes-of-a-design-engineer",
  },
  {
    date: "2026-03-16",
    description: "Fluid text transitions powered by Motion",
    format: "build",
    title: "Calligraph",
    url: "https://calligraph.raphaelsalaja.com/",
  },
  {
    date: "2026-03-16",
    description: "A collection of details that make your interfaces feel better.",
    format: "read",
    title: "Details That Make Interfaces Feel Better",
    url: "https://jakub.kr/writing/details-that-make-interfaces-feel-better",
  },
  {
    date: "2026-03-17",
    description: "A floating control panel for React.",
    format: "build",
    title: "DialKit",
    url: "https://joshpuckett.me/dialkit",
  },
  {
    date: "2026-03-17",
    description: "Curated anti-patterns for impeccable frontend design.",
    format: "use",
    title: "Impeccable",
    url: "https://impeccable.style/",
  },
  {
    date: "2026-03-17",
    description: "Best practices for building user interfaces.",
    format: "browse",
    title: "Laws of UX",
    url: "https://lawsofux.com/",
  },
  {
    date: "2026-03-17",
    description: "An open-source checklist to plan, build and grow your design system.",
    format: "use",
    title: "Design System Checklist",
    url: "https://www.designsystemchecklist.com/",
  },
  {
    date: "2026-03-18",
    description: "Fancy React components to make the web fun again.",
    format: "build",
    title: "Fancy Components",
    url: "https://www.fancycomponents.dev/",
  },
  {
    date: "2026-03-18",
    description: "A curated collection of design principles for product teams.",
    format: "browse",
    title: "Design Principles",
    url: "https://principles.design/",
  },
  {
    date: "2026-03-21",
    description: "Automated design reviews for AI-generated code.",
    format: "use",
    title: "rams",
    url: "https://www.rams.ai/",
  },
  {
    date: "2026-03-24",
    description: "Figuring out what a design engineer is.",
    format: "browse",
    title: "A Collection of Design Engineers",
    url: "https://maggieappleton.com/design-engineers",
  },
  {
    date: "2026-03-24",
    description: "A set of skills to polish interfaces built by agents.",
    format: "use",
    title: "UI Skills",
    url: "https://www.ui-skills.com/",
  },
  {
    date: "2026-03-27",
    description: "A playground for creating box shadows.",
    format: "use",
    title: "shadowLab",
    url: "https://shadowlab.mocarski.design/",
  },
  {
    date: "2026-04-03",
    description: "Dependency-free animated text component.",
    format: "build",
    title: "Torph",
    url: "https://torph.lochie.me/",
  },
  {
    date: "2026-04-05",
    description: "How I use AI as a design engineer on a daily basis.",
    format: "read",
    title: "Using AI as a Design Engineer",
    url: "https://jakub.kr/work/using-ai-as-a-design-engineer",
  },
  {
    date: "2026-04-16",
    description: "The Digital Library for Designers and Engineers.",
    format: "browse",
    title: "ui.land",
    url: "https://ui.land/",
  },
];

export const resources: Resource[] = [..._resources].reverse();
