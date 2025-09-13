import Link from "next/link";
import { products } from "@/lib/products";

export const metadata = { title: "Каталог" };

function price(usd?: number) {
  if (usd === undefined || usd === null) return "договірна";
  return new Intl.NumberFormat("uk-UA", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(usd);
}

export default function ShopPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h2 mb-6">Каталог послуг</h1>
        <div className="grid-auto">
          {products.map((p) => (
            <Link key={p.slug} href={`/shop/${encodeURIComponent(p.slug)}`} className="card hover:shadow transition">
              <div className="h-28 rounded-lg mb-3 bg-gradient-to-br from-brand-200 to-brand-400/60" />
              <h3 className="font-semibold">{p.title}</h3>
              <p className="opacity-80 text-sm">{p.description}</p>
              <div className="mt-3 font-semibold">{price(p.price)}</div>
              <span className="inline-block mt-1 text-sm text-brand-600">Детальніше →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
