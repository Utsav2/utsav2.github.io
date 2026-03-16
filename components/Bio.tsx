import { siteConfig } from "@/lib/site";

export function Bio() {
  return (
    <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
      <p className="font-serif font-bold text-lg text-[var(--color-ink)]">
        Written by {siteConfig.author.name}
      </p>
    </div>
  );
}
