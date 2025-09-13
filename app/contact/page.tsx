"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading"); setMsg("");
    const f = e.currentTarget;
    const data = {
      name: (f.elements.namedItem("name") as HTMLInputElement).value,
      email: (f.elements.namedItem("email") as HTMLInputElement).value,
      message: (f.elements.namedItem("message") as HTMLTextAreaElement).value,
      hp: (f.elements.namedItem("hp") as HTMLInputElement)?.value ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Помилка надсилання");
      setStatus("ok"); setMsg("Дякую! Я звʼяжуся з вами.");
      f.reset();
      setTimeout(() => setStatus("idle"), 2500);
    } catch (err) {
      setStatus("error"); setMsg("Сталася помилка. Спробуйте ще раз або напишіть у соцмережі.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="h2 mb-4">Звʼязатися</h1>
        <form onSubmit={onSubmit} className="max-w-xl card grid gap-3">
          <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />
          <label className="grid gap-1">
            <span>Імʼя</span>
            <input name="name" required className="border rounded-lg px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span>Email</span>
            <input type="email" name="email" required className="border rounded-lg px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span>Повідомлення</span>
            <textarea name="message" required className="border rounded-lg px-3 py-2 min-h-[120px]" />
          </label>
          <button disabled={status === "loading"} className="btn">
            {status === "loading" ? "Надсилаю…" : "Надіслати"}
          </button>
        </form>

        {/* Toast */}
        {status !== "idle" && (
          <div className="fixed bottom-4 right-4 z-50">
            <div className={`card shadow ${status === "ok" ? "border-green-300" : "border-red-300"}`}>
              <p className={status === "ok" ? "text-green-700" : "text-red-700"}>{msg}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
