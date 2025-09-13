"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Sparkles, Layers, Gauge, ShieldCheck, PencilRuler } from "lucide-react";

const features = [
  { icon: Rocket, title: "Швидкий старт", text: "Від ідеї до релізу за 5–10 днів." },
  { icon: Gauge,  title: "Швидкодія",    text: "Оптимізація Lighthouse та Core Web Vitals." },
  { icon: Layers, title: "Модульність",  text: "Чиста структура, готова до росту." },
  { icon: ShieldCheck, title: "Надійність", text: "API-роути, валідації, деплой на Vercel." },
  { icon: PencilRuler, title: "Адаптивний дизайн", text: "Mobile-first, уважність до деталей." },
  { icon: Sparkles, title: "SEO-база",    text: "Title/Description, OG, sitemap/robots." },
];

export default function Home() {
  return (
    <>
      <section className="section pt-16 sm:pt-24">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 className="h1" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              Створюю сучасні сайти, які приносять клієнтів
            </motion.h1>
            <motion.p className="lead mt-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}>
              Лендінги, блоги, каталоги. Швидко, акуратно, адаптивно — з продуманим UX і базовим SEO.
            </motion.p>
            <motion.div className="mt-6 flex gap-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Link className="btn shadow-glow" href="/hire"><Rocket size={18} /> Замовити сайт</Link>
              <Link className="btn btn-ghost" href="/blog">Дивитися блог</Link>
            </motion.div>
          </div>

          <motion.div className="card shadow-sm" initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.15 }}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.slice(0,4).map((f) => (
                <li key={f.title} className="border rounded-xl p-4 hover:shadow transition">
                  <div className="flex items-center gap-2">
                    <f.icon size={18} className="text-brand-600" />
                    <h3 className="font-semibold">{f.title}</h3>
                  </div>
                  <p className="opacity-80 text-sm mt-1">{f.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2 mb-4">Що отримаєте</h2>
          <div className="grid-auto">
            {features.map((f) => (
              <div key={f.title} className="card hover:shadow">
                <div className="flex items-center gap-2">
                  <f.icon size={18} className="text-brand-600" />
                  <h3 className="font-semibold">{f.title}</h3>
                </div>
                <p className="opacity-80">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2 mb-4">Приклади розділів</h2>
        <div className="grid-auto">
            {[
              { href: "/blog", title: "Блог", text: "Статті зі списком і сторінкою" },
              { href: "/shop", title: "Каталог", text: "Список та деталі послуги" },
              { href: "/contact", title: "Контакти", text: "Форма із відправкою" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="card hover:shadow">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="opacity-80">{c.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50 dark:bg-slate-900/40">
        <div className="container">
          <h2 className="h2 mb-6">Відгуки клієнтів</h2>
          <div className="grid-auto">
            {[
              { name: "Олена, флористка", text: "Лендінг за тиждень. Конверсія з реклами зросла в 2 рази." },
              { name: "Ігор, ремонт техніки", text: "Каталог і форма — заявки щодня." },
              { name: "Марія, маркетолог", text: "Акуратний блог, швидкий сайт, деплой без болю." },
            ].map((t) => (
              <div key={t.name} className="card hover:shadow">
                <p className="italic">“{t.text}”</p>
                <p className="mt-3 font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-xl">Готові підняти конверсію?</h3>
              <p className="opacity-80">Опишіть задачу — повернуся з рішенням і фікс-кошторисом.</p>
            </div>
            <Link className="btn mt-3 sm:mt-0 shadow-glow" href="/hire">Почати</Link>
          </div>
        </div>
      </section>
    </>
  );
}
