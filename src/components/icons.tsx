"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Mail02Icon, GithubIcon } from "@hugeicons/core-free-icons";

export function MailIcon({ className }: { className?: string }) {
  return (
    <HugeiconsIcon
      icon={Mail02Icon}
      size={16}
      className={className}
      strokeWidth={2}
    />
  );
}

export function GithubLogo({ className }: { className?: string }) {
  return (
    <HugeiconsIcon
      icon={GithubIcon}
      size={16}
      className={className}
      strokeWidth={2}
    />
  );
}
