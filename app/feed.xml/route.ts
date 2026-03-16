import { getAllPostMetas } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPostMetas();
  const now = new Date().toISOString();

  const entries = posts
    .map(
      (post) => `
  <entry>
    <title>${escapeXml(post.title)}</title>
    <link href="${siteConfig.url}/posts/${post.slug}"/>
    <updated>${new Date(post.date).toISOString()}</updated>
    <id>${siteConfig.url}/posts/${post.slug}</id>
  </entry>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(siteConfig.title)}</title>
  <link href="${siteConfig.url}/feed.xml" rel="self"/>
  <link href="${siteConfig.url}/"/>
  <updated>${now}</updated>
  <id>${siteConfig.url}</id>
  <author>
    <name>${escapeXml(siteConfig.author.name)}</name>
    <email>${siteConfig.author.email}</email>
  </author>${entries}
</feed>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
