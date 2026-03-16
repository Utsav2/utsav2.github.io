import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="font-serif text-4xl font-bold tracking-tight text-[var(--color-ink)]">
        404
      </h1>
      <p className="mt-4 font-sans text-[var(--color-ink-muted)] leading-relaxed">
        Sorry, that page doesn&apos;t exist.{" "}
        <Link
          href="/"
          className="text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
        >
          Head back home
        </Link>
        .
      </p>
    </div>
  );
}
