// lib/products.ts
export type Product = {
  slug: string;
  title: string;
  description: string; // <-- поле, яке використовують сторінки каталогу
  price?: number;      // USD (можна опціонально)
};

export const products: Product[] = [
  {
    slug: "landing",
    title: "Лендінг під ключ",
    description: "Швидкий промо-сайт із конверсійним блоком і формою.",
    price: 300,
  },
  {
    slug: "blog-site",
    title: "Блог / Контент-сайт",
    description: "Статті, розділи, SEO-структура, аналітика.",
    price: 450,
  },
  {
    slug: "mini-catalog",
    title: "Малий каталог / pre-ecommerce",
    description: "Список товарів/послуг, сторінки деталей, заявки.",
    price: 900,
  },
];
