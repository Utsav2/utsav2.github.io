import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.title}`,
  },
  description: siteConfig.description,
  alternates: {
    types: {
      "application/atom+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-32">
          <header className="mb-24 flex items-baseline justify-between">
            <Link
              href="/"
              className="font-serif text-2xl font-bold tracking-tight text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
            >
              {siteConfig.title}
            </Link>
            <nav className="text-sm font-sans tracking-wide text-[var(--color-ink-muted)]">
              <Link
                href="/about"
                className="hover:text-[var(--color-ink)] transition-colors uppercase text-xs font-semibold"
              >
                About
              </Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="mt-32 pt-12 border-t border-[var(--color-border)]">
            <p className="text-xs font-sans text-[var(--color-ink-faint)] uppercase tracking-widest">
              &copy; {new Date().getFullYear()} {siteConfig.author.name}
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
