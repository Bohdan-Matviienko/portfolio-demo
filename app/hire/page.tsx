"use client";
import { useState } from "react";

export default function HirePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const f = e.currentTarget;
    const data = {
      type: (f.elements.namedItem("type") as HTMLSelectElement).value,
      budget: (f.elements.namedItem("budget") as HTMLSelectElement).value,
      deadline: (f.elements.namedItem("deadline") as HTMLInputElement).value,
      name: (f.elements.namedItem("name") as HTMLInputElement).value,
      email: (f.elements.namedItem("email") as HTMLInputElement).value,
      message: (f.elements.namedItem("message") as HTMLTextAreaElement).value,
      source: "hire",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Помилка надсилання");
      setStatus("ok");
      f.reset();
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Сталася помилка");
    }
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="h2 mb-4">Замовити сайт</h1>
        <form onSubmit={onSubmit} className="max-w-2xl card grid gap-3">
          <label className="grid gap-1">
            <span>Тип проєкту</span>
            <select name="type" className="border rounded-lg px-3 py-2">
              <option>Лендінг</option>
              <option>Блог / Контент-сайт</option>
              <option>Малий каталог / e-commerce</option>
              <option>Інше</option>
            </select>
          </label>

          <label className="grid gap-1">
            <span>Бюджет</span>
            <select name="budget" className="border rounded-lg px-3 py-2">
              <option>до $300</option>
              <option>$300–700</option>
              <option>$700–1500</option>
              <option>$1500+</option>
            </select>
          </label>

          <label className="grid gap-1">
            <span>Дедлайн (орієнтовно)</span>
            <input type="date" name="deadline" className="border rounded-lg px-3 py-2" />
          </label>

          <div className="grid md:grid-cols-2 gap-3">
            <label className="grid gap-1">
              <span>Імʼя</span>
              <input name="name" required className="border rounded-lg px-3 py-2" />
            </label>
            <label className="grid gap-1">
              <span>Email</span>
              <input type="email" name="email" required className="border rounded-lg px-3 py-2" />
            </label>
          </div>

          <label className="grid gap-1">
            <span>Коротко про задачу</span>
            <textarea name="message" className="border rounded-lg px-3 py-2 min-h-[120px]" />
          </label>

          <button disabled={status === "loading"} className="btn">
            {status === "loading" ? "Надсилаю…" : "Надіслати бриф"}
          </button>

          {status === "ok" && <p className="text-green-700">Дякую! Я відповім найближчим часом.</p>}
          {status === "error" && <p className="text-red-700">{error}</p>}
        </form>
      </div>
    </section>
  );
}
