"use client";
import Link from "next/link";

export default function Error(
  { error, reset }: { error: Error & { digest?: string }; reset: () => void }
) {
  return (
    <section className="section">
      <div className="container text-center">
        <h1 className="h2">Упс… Щось пішло не так</h1>
        <p className="opacity-80 mt-2">{error.message}</p>
        <div className="mt-6 flex gap-3 justify-center">
          <button className="btn" onClick={() => reset()}>Спробувати ще</button>
          <Link className="btn btn-ghost" href="/">На головну</Link>
        </div>
      </div>
    </section>
  );
}
