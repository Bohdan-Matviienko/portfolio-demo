export default function Pricing() {
  const plans = [
    { name: "Лендінг", price: 300, features: ["1-3 секції", "Форма", "Деплой"] },
    { name: "Блог", price: 450, features: ["Список + стаття", "SEO-база", "Аналітика"] },
    { name: "Каталог", price: 900, features: ["Список + деталі", "Форма заявки", "Готово до росту"] },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2 mb-6">Пакети</h2>
        <div className="grid-auto">
          {plans.map((p) => (
            <div key={p.name} className="card hover:shadow">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <div className="text-2xl font-extrabold mt-2">${p.price}</div>
              <ul className="mt-3 list-disc pl-5 opacity-90">
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
