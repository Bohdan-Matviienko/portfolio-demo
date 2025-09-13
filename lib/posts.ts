export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt?: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "jak-obrati-landing",
    title: "Як обрати структуру лендінгу",
    date: "2025-08-28",
    excerpt: "Короткий гід з блоків, що реально працюють.",
    content:
      "Розглядаємо обовʼязкові секції лендінгу: герой, переваги, докази, CTA, FAQ.\nПлюс — типові помилки та як їх уникнути.",
  },
  {
    slug: "seo-osnovy",
    title: "SEO-основи для малого сайту",
    date: "2025-08-24",
    content:
      "Title/Description, правильні заголовки, sitemap/robots, швидкість завантаження.\nЦього достатньо, щоб стартувати без агентства.",
  },
  {
    slug: "fast-hosting",
    title: "Деплой на Vercel за 5 хвилин",
    date: "2025-08-20",
    content:
      "Зʼєднуємо GitHub і Vercel, додаємо змінні оточення та перевіряємо прод.",
  },
];
