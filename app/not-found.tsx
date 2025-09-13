import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container text-center">
        <h1 className="h1">404</h1>
        <p className="lead mt-2 opacity-80">Сторінку не знайдено.</p>
        <Link href="/" className="btn mt-6">На головну</Link>
      </div>
    </section>
  );
}
