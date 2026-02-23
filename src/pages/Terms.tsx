import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Terms() {
  useScrollAnimation();

  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="mb-12 animate-on-scroll">
          <div className="gold-line mb-4" />
          <h1 className="section-title text-4xl md:text-5xl mb-4">Условия использования</h1>
        </div>
        <div className="flex flex-col gap-6 animate-on-scroll">
          {[
            ["1. Принятие условий", "Используя сайт, вы соглашаетесь с настоящими условиями использования."],
            ["2. Услуги", "Сайт предоставляет информацию об аренде кемперов и является информационным ресурсом."],
            ["3. Интеллектуальная собственность", "Все материалы сайта защищены авторским правом и принадлежат «Русской Фантазии»."],
            ["4. Ограничение ответственности", "Компания не несёт ответственности за косвенные убытки, связанные с использованием сайта."],
            ["5. Изменения", "Мы вправе изменять данные условия. Актуальная версия всегда доступна на этой странице."],
          ].map(([title, text]) => (
            <div key={title as string} className="rounded-xl p-6"
              style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)'}}>
              <h2 className="font-golos font-semibold mb-2" style={{color:'var(--color-text)'}}>{title}</h2>
              <p className="text-sm leading-relaxed" style={{color:'var(--color-text-muted)'}}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
