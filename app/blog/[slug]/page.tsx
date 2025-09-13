import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";

export function generateMetadata(
  { params }: { params: { slug: string } }
): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Пост не знайдено" };
  const desc = post.excerpt ?? post.content.slice(0, 140);
  return {
    title: post.title,
    description: desc,
    openGraph: { title: post.title, description: desc },
  };
}

export default function PostPage(
  { params }: { params: { slug: string } }
) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <section className="section">
      <div className="container">
        <Link href="/blog" className="text-sm text-brand-600">← До блогу</Link>
        <h1 className="h2 mt-2">{post.title}</h1>
        <div className="text-xs opacity-70">
          {new Date(post.date).toLocaleDateString("uk-UA")}
        </div>
        <article className="prose dark:prose-invert mt-6 max-w-none">
          {post.content.split("\n").map((p, i) => (<p key={i}>{p}</p>))}
        </article>
      </div>
    </section>
  );
}
