import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = { title: "Блог" };

export default function BlogPage() {
  const list = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2 mb-6">Блог</h1>
        <div className="grid-auto">
          {list.map((p) => (
            <Link key={p.slug} href={`/blog/${encodeURIComponent(p.slug)}`} className="card hover:shadow transition">
              <div className="text-xs opacity-70">{new Date(p.date).toLocaleDateString("uk-UA")}</div>
              <h3 className="font-semibold mt-1">{p.title}</h3>
              <p className="opacity-80 mt-1">{p.excerpt ?? p.content.slice(0, 120)}…</p>
              <span className="inline-block mt-3 text-sm text-brand-600">Читати →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
