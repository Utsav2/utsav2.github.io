import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import { getAllPostSlugs, getPost } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import { Bio } from "@/components/Bio";
import { Slideshow } from "@/components/Slideshow";
import type { Metadata } from "next";

const mdxComponents = {
  Slideshow,
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: `${post.title} — ${siteConfig.title}`,
  };
}

export default async function PostPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article>
      <header className="mb-10">
        <div className="flex items-center gap-2 text-sm font-sans text-[var(--color-ink-muted)] mb-4">
          <time dateTime={post.date} className="tabular-nums">
            {formatDate(post.date)}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="font-serif text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-5xl leading-tight">
          {post.title}
        </h1>
      </header>

      <div className="prose">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [rehypeHighlight],
            },
          }}
        />
      </div>

      <Bio />
    </article>
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
