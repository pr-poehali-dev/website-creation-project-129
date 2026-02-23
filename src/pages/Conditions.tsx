import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const sections = [
  {
    icon: "Calendar",
    title: "Сроки и бронирование",
    items: [
      "Минимальный срок аренды — 2 суток",
      "Бронирование подтверждается после оплаты 30% предоплаты",
      "Остаток оплачивается за 3 дня до начала аренды",
      "Бронь возможна не ранее чем за 90 дней",
    ],
  },
  {
    icon: "DollarSign",
    title: "Стоимость и залог",
    items: [
      "Залог — 15 000 ₽, возвращается после возврата кемпера",
      "Топливо оплачивается арендатором отдельно",
      "Платные дороги и парковки — за счёт арендатора",
      "Дополнительный пробег свыше 500 км/сут — 15 ₽/км",
    ],
  },
  {
    icon: "Car",
    title: "Требования к водителю",
    items: [
      "Водительское удостоверение категории B",
      "Стаж вождения от 2 лет",
      "Возраст от 23 лет",
      "Отсутствие серьёзных нарушений ПДД за последний год",
    ],
  },
  {
    icon: "Shield",
    title: "Страховка и ответственность",
    items: [
      "ОСАГО включено в стоимость аренды",
      "КАСКО можно оформить дополнительно",
      "Арендатор несёт ответственность за ущерб при ДТП по его вине",
      "Хищение и угон — по условиям страхового договора",
    ],
  },
  {
    icon: "CheckSquare",
    title: "Правила использования",
    items: [
      "Курение в кемпере запрещено",
      "Животные — по предварительному согласованию",
      "Выезд за пределы России — только с письменного разрешения",
      "Субаренда кемпера строго запрещена",
    ],
  },
  {
    icon: "RotateCcw",
    title: "Отмена и возврат",
    items: [
      "За 30+ дней до аренды — возврат 100% предоплаты",
      "За 14–29 дней — возврат 50% предоплаты",
      "Менее 14 дней — предоплата не возвращается",
      "Форс-мажор рассматривается индивидуально",
    ],
  },
];

export default function Conditions() {
  useScrollAnimation();

  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="gold-line mx-auto mb-4" />
          <h1 className="section-title text-5xl md:text-6xl mb-4">Условия аренды</h1>
          <p className="max-w-xl mx-auto" style={{color:'var(--color-text-muted)'}}>
            Всё прозрачно и честно — читайте внимательно перед бронированием
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((s, i) => (
            <div key={i}
              className="animate-on-scroll rounded-xl p-6"
              style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)', animationDelay:`${i*0.08}s`}}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{background:'var(--color-gold-soft)'}}>
                  <Icon name={s.icon} fallback="Info" size={18} style={{color:'var(--color-gold-light)'} as React.CSSProperties} />
                </div>
                <h2 className="font-golos font-semibold" style={{color:'var(--color-text)'}}>{s.title}</h2>
              </div>
              <ul className="flex flex-col gap-2.5">
                {s.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2 text-sm leading-relaxed" style={{color:'var(--color-text-muted)'}}>
                    <Icon name="Check" size={13} style={{color:'var(--color-gold)', marginTop:'3px', flexShrink:0} as React.CSSProperties} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-8 animate-on-scroll text-center"
          style={{background:'var(--color-navy-card)', border:'1px solid rgba(200,146,15,0.2)'}}>
          <h2 className="section-title text-2xl mb-3">Остались вопросы?</h2>
          <p className="mb-6" style={{color:'var(--color-text-muted)'}}>
            Уточните любые детали до бронирования — мы на связи
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://t.me/rusfantazia" target="_blank" rel="noopener noreferrer"
              className="btn-gold px-8 py-3.5">
              <Icon name="Send" size={16} />
              Написать в Telegram
            </a>
            <a href="tel:+79000000000" className="btn-outline-gold px-8 py-3.5">
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
