import Link from "next/link";
import { getAllPostMetas } from "@/lib/posts";

export default function Home() {
  const posts = getAllPostMetas();

  return (
    <section>
      <div className="flex flex-col gap-10">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/posts/${post.slug}`} 
            className="group block"
          >
            <article>
              <h2 className="font-serif text-2xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors mb-2 leading-tight">
                {post.title}
              </h2>
              <div className="flex items-center gap-3 text-sm font-sans text-[var(--color-ink-muted)]">
                <time dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <span className="text-[var(--color-ink-faint)]">•</span>
                <span>{post.readingTime}</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
