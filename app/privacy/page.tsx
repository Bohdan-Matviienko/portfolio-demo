export const metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <section className="section">
      <div className="container prose dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p>Ми не збираємо персональні дані, крім тих, що ви свідомо надсилаєте через форму.</p>
        <h2>Що зберігаємо</h2>
        <ul>
          <li>Ім’я та email для відповіді на ваш запит.</li>
        </ul>
        <h2>Зв’язок</h2>
        <p>Питання щодо політики: your@email.</p>
      </div>
    </section>
  );
}
