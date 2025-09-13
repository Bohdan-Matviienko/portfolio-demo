import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/lib/products";

type Params = { params: { slug: string } };

function price(usd?: number) {
  if (usd === undefined || usd === null) return "договірна";
  return new Intl.NumberFormat("uk-UA", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(usd);
}

export function generateMetadata({ params }: Params): Metadata {
  const item = products.find((p) => p.slug === params.slug);
  if (!item) return { title: "Позицію не знайдено" };
  return { title: item.title, description: item.description };
}

export default function ProductPage({ params }: Params) {
  const item = products.find((p) => p.slug === params.slug);
  if (!item) return notFound();

  return (
    <section className="section">
      <div className="container">
        <Link href="/shop" className="text-sm text-brand-600">← До каталогу</Link>
        <div className="grid md:grid-cols-2 gap-8 mt-4 items-start">
          <div className="rounded-2xl h-72 bg-gradient-to-br from-brand-200 to-brand-400/60" />
          <div>
            <h1 className="h2">{item.title}</h1>
            <p className="opacity-80 mt-2">{item.description}</p>
            <div className="mt-4 text-xl font-semibold">{price(item.price)}</div>
            <div className="mt-6 flex gap-3">
              <Link href="/hire" className="btn">Замовити</Link>
              <Link href="/contact" className="btn btn-ghost">Поставити питання</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
