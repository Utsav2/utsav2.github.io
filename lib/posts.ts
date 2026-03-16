import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  readingTime: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
}

function parseFilename(filename: string): { slug: string; date: string } | null {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.mdx?$/);
  if (!match) return null;
  return { date: match[1], slug: match[2] };
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllPostMetas(): PostMeta[] {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .map((filename) => {
      const parsed = parseFilename(filename);
      if (!parsed) return null;

      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: parsed.slug,
        title: (data.title as string) || parsed.slug,
        date: parsed.date,
        readingTime: calculateReadingTime(content),
      };
    })
    .filter((p): p is PostMeta => p !== null);

  posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export function getAllPostSlugs(): string[] {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames
    .map((f) => parseFilename(f)?.slug)
    .filter((s): s is string => s !== undefined);
}

export async function getPost(slug: string): Promise<Post | null> {
  const filenames = fs.readdirSync(postsDirectory);
  const filename = filenames.find((f) => {
    const parsed = parseFilename(f);
    return parsed?.slug === slug;
  });
  if (!filename) return null;

  const parsed = parseFilename(filename)!;
  const filePath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: parsed.slug,
    title: (data.title as string) || parsed.slug,
    date: parsed.date,
    content,
    readingTime: calculateReadingTime(content),
  };
}
