import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Privacy() {
  useScrollAnimation();

  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="mb-12 animate-on-scroll">
          <div className="gold-line mb-4" />
          <h1 className="section-title text-4xl md:text-5xl mb-4">Политика конфиденциальности</h1>
        </div>
        <div className="prose animate-on-scroll flex flex-col gap-6"
          style={{color:'var(--color-text-muted)'}}>
          {[
            ["1. Общие положения", "Настоящая политика описывает порядок обработки персональных данных пользователей сайта «Русская Фантазия»."],
            ["2. Какие данные мы собираем", "Имя, номер телефона, адрес электронной почты — только при добровольном заполнении форм."],
            ["3. Цели обработки", "Данные используются исключительно для обработки заявок на аренду и связи с клиентом."],
            ["4. Хранение данных", "Данные хранятся на защищённых серверах и не передаются третьим лицам без вашего согласия."],
            ["5. Ваши права", "Вы вправе запросить удаление или изменение своих данных, написав нам на info@rusfantazia.ru."],
          ].map(([title, text]) => (
            <div key={title as string} className="rounded-xl p-6"
              style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)'}}>
              <h2 className="font-golos font-semibold mb-2" style={{color:'var(--color-text)'}}>{title}</h2>
              <p className="text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
