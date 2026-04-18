import Link from "next/link";
import { MailIcon, GithubLogo } from "@/components/icons";
import { GeometricLines } from "@/components/geometric-lines";
import { NewsletterForm } from "@/components/newsletter-form";

function ArrowUpRightIcon() {
  return (
    <svg
      className="size-4 text-[#7c7c7c] transition-colors duration-200 ease-out group-hover:text-[#eee]"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 sm:mt-32">
      <h2 className="mb-6 text-sm font-medium text-[#7c7c7c]">{title}</h2>
      {children}
    </section>
  );
}

function ProjectCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl p-1 leading-none shadow-[0_0_0_1px_#ffffff14] transition-shadow duration-200 ease-out hover:shadow-[0_0_0_1px_#ffffff21]"
    >
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-[#1e1e1e] bg-[#080808] transition-colors duration-200 ease-out group-hover:border-[#2a2a2a]">
        {/* Chevron */}
        <span className="absolute top-3 right-3 flex shrink-0 -translate-x-0.5 scale-75 items-center justify-center text-[#7c7c7c] opacity-0 transition-[opacity,translate,scale] duration-300 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100">
          <svg className="size-[18px]" viewBox="0 0 24 24" fill="none">
            <path d="M8.79289 5.29289C9.18342 4.90237 9.81643 4.90237 10.207 5.29289L16.207 11.2929C16.5975 11.6834 16.5975 12.3164 16.207 12.707L10.207 18.707C9.81643 19.0975 9.18342 19.0975 8.79289 18.707C8.40237 18.3164 8.40237 17.6834 8.79289 17.2929L14.0859 11.9999L8.79289 6.70696C8.40237 6.31643 8.40237 5.68342 8.79289 5.29289Z" fill="currentColor" />
          </svg>
        </span>
        {/* Preview area */}
        <div className="relative flex aspect-[192/100] w-full items-center justify-center gap-2 overflow-hidden">
          {icon ?? (
            <div className="size-10 rounded-lg bg-[#1e1e1e]" />
          )}
        </div>
      </div>
      {/* Info — outside inner card */}
      <div className="flex w-full flex-col items-start justify-center px-3 pb-3 pt-3 font-medium">
        <span className="text-sm text-[#eee]">{title}</span>
        <span className="text-sm font-normal text-[#b5b5b5]">{description}</span>
      </div>
    </Link>
  );
}

function WritingLink({
  title,
  date,
  href,
}: {
  title: string;
  date: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 -mx-3 transition-[background-color] duration-200 ease-out hover:bg-[#141414]"
    >
      <span className="text-sm font-medium text-[#b5b5b5] transition-colors duration-200 ease-out group-hover:text-[#eee]">
        {title}
      </span>
      <span className="shrink-0 text-sm text-[#7c7c7c]">{date}</span>
    </Link>
  );
}

function WorkItem({
  company,
  role,
  period,
  href,
}: {
  company: string;
  role: string;
  period: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-[#b5b5b5] transition-colors duration-200 ease-out group-hover:text-[#eee]">
          {company}
        </span>
        <span className="text-sm text-[#7c7c7c]">{role}</span>
      </div>
      <span className="shrink-0 text-sm text-[#7c7c7c]">{period}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 -mx-3 transition-[background-color] duration-200 ease-out hover:bg-[#141414]"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group flex items-center justify-between gap-4 px-3 py-2.5 -mx-3">
      {content}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[43.25rem] px-6 py-12 leading-relaxed sm:py-24">
      {/* Profile */}
      <div>
        <h1 className="text-base font-medium text-[#eee]">Gobind Bakhshi</h1>
        <p className="text-sm text-[#7c7c7c]">Engineer, Designer, Strategist</p>
      </div>

      {/* Bio */}
      <div className="mt-8 text-white/85 [line-height:1.65] [text-wrap:pretty]">
        <p>
          I&apos;m the Principal AI Engineer
          at{" "}<img src="/gq-logo.svg" alt="" className="inline size-5 -mx-0.5 align-[-3px]" />{" "}
          <a
            href="https://greatquestion.co"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#eee] underline decoration-[#7c7c7c] underline-offset-2 transition-colors duration-200 ease-out hover:decoration-[#eee]"
          >
            GreatQuestion
          </a>, the user research layer for the new web.
          I <em>care deeply</em> about craft and quality and I like to make
          people feel something through my work.
        </p>
        <p className="mt-4">
          Previously, I worked at IBM and a
          few{" "}
          <a
            href="https://www.linkedin.com/in/gobind-bakhshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#eee] underline decoration-[#7c7c7c] underline-offset-2 transition-colors duration-200 ease-out hover:decoration-[#eee]"
          >
            other
          </a>
          {" "}companies. You can reach me
          at{" "}
          <a
            href="https://x.com/GobindBakhshi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#eee] underline decoration-[#7c7c7c] underline-offset-2 transition-colors duration-200 ease-out hover:decoration-[#eee]"
          >
            @gobindbakhshi
          </a>
          {" "}and via <MailIcon className="inline size-4 align-[-2px] text-[#eee]" />{" "}
          <a
            href="mailto:gobind.bakhshi@gmail.com"
            className="font-medium text-[#eee] underline decoration-[#7c7c7c] underline-offset-2 transition-colors duration-200 ease-out hover:decoration-[#eee]"
          >
            email
          </a>
          {" "}or see my code on <GithubLogo className="inline size-4 align-[-2px] text-[#eee]" />{" "}
          <a
            href="https://github.com/GobindB"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#eee] underline decoration-[#7c7c7c] underline-offset-2 transition-colors duration-200 ease-out hover:decoration-[#eee]"
          >
            GitHub
          </a>.
        </p>
      </div>

      {/* Projects */}
      <Section title="Projects">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProjectCard
            title="UI Experiments"
            description="Interactive demos exploring interface details that make apps feel polished."
            href="/experiment"
            icon={<img src="/union.png" alt="UI Experiments" className="h-12 w-auto" />}
          />
          <ProjectCard
            title="Design Resources"
            description="Curated resources for design engineers."
            href="/resources"
            icon={<GeometricLines />}
          />
        </div>
      </Section>

      {/* Writing */}
      <Section title="Writing">
        <div className="flex flex-col">
          <WritingLink
            title="Details that make interfaces feel better"
            date="Apr 2026"
            href="/experiment"
          />
          <WritingLink
            title="The easing blueprint"
            date="Mar 2026"
            href="/experiment"
          />
          <WritingLink
            title="Building with concentric radii"
            date="Feb 2026"
            href="/experiment"
          />
          <WritingLink
            title="Typography on dark backgrounds"
            date="Jan 2026"
            href="/experiment"
          />
          <WritingLink
            title="Why tabular numbers matter"
            date="Dec 2025"
            href="/experiment"
          />
        </div>
      </Section>

      {/* Work */}
      <Section title="Work">
        <div className="flex flex-col">
          <WorkItem
            company="Acme Corp"
            role="Frontend Engineer"
            period="2024 —"
          />
          <WorkItem
            company="Startup Inc"
            role="Design Engineer"
            period="2022 — 2024"
          />
          <WorkItem
            company="Agency Co"
            role="Developer"
            period="2020 — 2022"
          />
        </div>
      </Section>

      {/* Newsletter */}
      <Section title="Newsletter">
        <p className="mb-6 text-white/85 [line-height:1.65] [text-wrap:pretty]">
          I share what I&apos;m working on, new posts and interesting resources.
        </p>
        <NewsletterForm />
      </Section>

      {/* Footer */}
      <footer className="mt-24 flex items-end justify-between pb-12 sm:mt-40">
        <p className="text-sm text-[#7c7c7c]">gobindbakhshi.com</p>
        {/* Signature */}
        <span className="select-none text-2xl text-[#7c7c7c] opacity-60 transition-opacity duration-200 ease-out hover:opacity-100 [font-family:var(--font-signature)]">
          GBakhshi
        </span>
      </footer>
    </main>
  );
}
