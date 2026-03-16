import { siteConfig } from "@/lib/site";

export function Bio() {
  return (
    <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
      <p className="text-sm font-sans text-[var(--color-ink-faint)]">
        {siteConfig.author.name}
      </p>
    </div>
  );
}
