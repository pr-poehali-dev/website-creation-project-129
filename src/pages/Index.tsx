import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { campers } from "@/data/campers";
import { routes } from "@/data/routes";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HERO_IMG = "https://cdn.poehali.dev/projects/03910495-d18f-464a-8ba2-70c8fd29d640/files/9620052b-8f5c-40bc-85fd-4f20f078193d.jpg";

const advantages = [
  { icon: "ShieldCheck", title: "Полная приватность", desc: "Только вы и природа. Никаких соседей и чужого шума." },
  { icon: "Package", title: "Всё включено", desc: "Постельное, посуда, мангал — приезжаете с одной сумкой." },
  { icon: "Map", title: "Готовые маршруты", desc: "Продуманные сценарии с остановками, местами и советами." },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Мы всегда на связи во время вашего путешествия." },
  { icon: "FileText", title: "Прозрачные условия", desc: "Договор, залог, страховка — всё честно и открыто." },
];

const formats = [
  { emoji: "💑", title: "Романтическое свидание", desc: "Закат, ужин у костра, звёзды" },
  { emoji: "📸", title: "Фотосессия", desc: "Уникальные локации и реквизит" },
  { emoji: "✨", title: "Глэмпинг", desc: "Люкс-комфорт на природе" },
  { emoji: "👨‍👩‍👧‍👦", title: "Семейный отдых", desc: "Впечатления для всей семьи" },
  { emoji: "🎣", title: "Рыбалка", desc: "Утром на берегу, вечером у кемпера" },
  { emoji: "💼", title: "Переговорная", desc: "Нестандартная деловая встреча" },
];

const steps = [
  { num: "01", title: "Выберите кемпер и дату", desc: "Смотрите свободные даты и выбирайте подходящий формат." },
  { num: "02", title: "Оставьте заявку", desc: "Напишите в Telegram или заполните форму — ответим за 15 минут." },
  { num: "03", title: "Подпишите договор", desc: "Дистанционно или при встрече. Оплата безопасной транзакцией." },
  { num: "04", title: "Забирайте кемпер", desc: "Показываем всё устройство и выдаём маршрут. Счастливого пути!" },
];

const testimonials = [
  {
    name: "Анна и Дмитрий",
    text: "Взяли «Северный» на годовщину свадьбы. Поехали на Ладогу. Это был лучший уикенд за последние годы — тишина, закат, полная свобода.",
    stars: 5,
    tag: "Романтическое путешествие",
  },
  {
    name: "Семья Ковалёвых",
    text: "Дети были в восторге! Три дня в Карелии с удочками и мангалом. «Семейный» кемпер вместил нас с комфортом, а маршрут от ребят — огонь.",
    stars: 5,
    tag: "Семейный отдых",
  },
  {
    name: "Михаил, фотограф",
    text: "Брал под съёмку — искал нестандартный реквизит и локации. Ребята посоветовали места, о которых я бы сам не нашёл. Отличный результат.",
    stars: 5,
    tag: "Фотосессия",
  },
];

const faqs = [
  { q: "Нужны ли права категории C?", a: "Нет. Наши кемперы до 3.5 т — достаточно обычного водительского удостоверения категории B." },
  { q: "Что входит в стоимость?", a: "Всё бельё, посуда, мангал, стулья, столик. Топливо, платные дороги и стоянки оплачиваются отдельно." },
  { q: "Какой залог?", a: "Залог 15 000 ₽, возвращается полностью после возврата кемпера в исходном состоянии." },
  { q: "Можно ли с животными?", a: "Да, с небольшими животными — по согласованию. Дополнительная уборка включена в стоимость." },
  { q: "Что если что-то сломается?", a: "Мы на связи 24/7. Предусмотрена дорожная помощь. Мелкие неисправности устраняем за свой счёт." },
];

export default function Index() {
  useScrollAnimation();
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", date: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0" style={{background:'linear-gradient(135deg, rgba(4,8,16,0.85) 0%, rgba(8,15,30,0.6) 60%, rgba(8,15,30,0.75) 100%)'}} />

        <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 animate-fade-in"
            style={{background:'var(--color-gold-soft)', color:'var(--color-gold-light)', border:'1px solid rgba(200,146,15,0.3)'}}>
            <Icon name="Star" size={12} />
            Аренда кемперов по России
          </div>

          <h1 className="font-cormorant font-light text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-in"
            style={{animationDelay:'0.1s', color:'var(--color-text)'}}>
            Твоя <span style={{color:'var(--color-gold-light)', fontStyle:'italic'}}>Русская</span>
            <br />Фантазия
          </h1>

          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{animationDelay:'0.2s', color:'rgba(240,232,208,0.75)'}}>
            Путешествуй по России в комфортном кемпере. Готовые маршруты, полное оснащение — привози только себя.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{animationDelay:'0.3s'}}>
            <a href="#booking" className="btn-gold text-base px-8 py-4">
              <Icon name="Calendar" size={18} />
              Узнать свободные даты
            </a>
            <a href="https://t.me/rusfantazia" target="_blank" rel="noopener noreferrer"
              className="btn-outline-gold text-base px-8 py-4">
              <Icon name="Send" size={18} />
              Написать в Telegram
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 mt-16 animate-fade-in" style={{animationDelay:'0.5s'}}>
            {[["3", "кемпера"], ["150+", "маршрутов"], ["500+", "гостей"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="font-cormorant text-3xl md:text-4xl font-semibold" style={{color:'var(--color-gold-light)'}}>{val}</div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{color:'var(--color-text-muted)'}}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} style={{color:'var(--color-gold)'} as React.CSSProperties} />
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="section-title text-4xl md:text-5xl mb-4">Почему выбирают нас</h2>
            <p className="max-w-xl mx-auto" style={{color:'var(--color-text-muted)'}}>
              Мы не просто сдаём кемпер — мы создаём готовый сценарий для вашего отдыха
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {advantages.map((adv, i) => (
              <div key={i}
                className="animate-on-scroll rounded-xl p-6 flex flex-col gap-3 card-hover"
                style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)', animationDelay:`${i*0.08}s`}}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{background:'var(--color-gold-soft)'}}>
                  <Icon name={adv.icon} fallback="Star" size={20} style={{color:'var(--color-gold-light)'} as React.CSSProperties} />
                </div>
                <h3 className="font-golos font-semibold text-sm" style={{color:'var(--color-text)'}}>{adv.title}</h3>
                <p className="text-xs leading-relaxed" style={{color:'var(--color-text-muted)'}}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPERS */}
      <section className="py-24 px-6" style={{background:'var(--color-navy-card)'}}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 animate-on-scroll">
            <div>
              <div className="gold-line mb-4" />
              <h2 className="section-title text-4xl md:text-5xl mb-2">Наши кемперы</h2>
              <p style={{color:'var(--color-text-muted)'}}>Каждый — отдельная история</p>
            </div>
            <Link to="/campers" className="btn-outline-gold mt-6 md:mt-0 self-start md:self-auto">
              Все кемперы <Icon name="ArrowRight" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campers.map((c, i) => (
              <div key={c.id}
                className="animate-on-scroll rounded-2xl overflow-hidden card-hover group"
                style={{background:'var(--color-navy)', border:'1px solid var(--color-navy-border)', animationDelay:`${i*0.1}s`}}>
                <div className="relative h-56 overflow-hidden">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(8,15,30,0.8) 0%, transparent 60%)'}} />
                  {c.badge && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded text-xs font-semibold"
                      style={{background:'var(--color-gold)', color:'var(--color-navy)'}}>
                      {c.badge}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-4">
                    <div className="font-cormorant text-2xl font-semibold" style={{color:'var(--color-text)'}}>{c.name}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm mb-4" style={{color:'var(--color-text-muted)'}}>{c.subtitle}</p>
                  <div className="flex items-center gap-4 mb-4 text-xs" style={{color:'var(--color-text-muted)'}}>
                    <span className="flex items-center gap-1"><Icon name="Users" size={13} />{c.capacity} чел.</span>
                    <span className="flex items-center gap-1"><Icon name="Ruler" size={13} />{c.length} м</span>
                  </div>
                  <div className="flex items-center justify-between pt-4" style={{borderTop:'1px solid var(--color-navy-border)'}}>
                    <div>
                      <span className="font-cormorant text-2xl font-semibold" style={{color:'var(--color-gold-light)'}}>
                        {c.price.toLocaleString()} ₽
                      </span>
                      <span className="text-xs ml-1" style={{color:'var(--color-text-muted)'}}>/ {c.priceUnit}</span>
                    </div>
                    <a href="#booking" className="btn-gold text-xs px-4 py-2">Забронировать</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="section-title text-4xl md:text-5xl mb-4">Форматы отдыха</h2>
            <p style={{color:'var(--color-text-muted)'}}>Для каждого случая — готовый сценарий</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {formats.map((f, i) => (
              <div key={i}
                className="animate-on-scroll rounded-xl p-5 text-center card-hover cursor-pointer"
                style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)', animationDelay:`${i*0.07}s`}}>
                <div className="text-3xl mb-3">{f.emoji}</div>
                <div className="font-semibold text-sm mb-1" style={{color:'var(--color-text)'}}>{f.title}</div>
                <div className="text-xs" style={{color:'var(--color-text-muted)'}}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="py-24 px-6" style={{background:'var(--color-navy-card)'}}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 animate-on-scroll">
            <div>
              <div className="gold-line mb-4" />
              <h2 className="section-title text-4xl md:text-5xl mb-2">Готовые маршруты</h2>
              <p style={{color:'var(--color-text-muted)'}}>Продуманные сценарии с остановками и советами</p>
            </div>
            <Link to="/routes" className="btn-outline-gold mt-6 md:mt-0 self-start md:self-auto">
              Все маршруты <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {routes.map((r, i) => (
              <div key={r.id}
                className="animate-on-scroll rounded-2xl overflow-hidden card-hover group"
                style={{background:'var(--color-navy)', border:'1px solid var(--color-navy-border)', animationDelay:`${i*0.1}s`}}>
                <div className="relative h-48 overflow-hidden">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(8,15,30,0.85) 0%, transparent 50%)'}} />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-xs"
                    style={{background:'var(--color-gold-soft)', color:'var(--color-gold-light)', border:'1px solid rgba(200,146,15,0.3)'}}>
                    {r.difficulty}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-cormorant text-xl font-semibold mb-1" style={{color:'var(--color-text)'}}>{r.title}</h3>
                  <p className="text-sm mb-4" style={{color:'var(--color-text-muted)'}}>{r.subtitle}</p>
                  <div className="flex items-center gap-4 text-xs mb-4" style={{color:'var(--color-text-muted)'}}>
                    <span className="flex items-center gap-1"><Icon name="Clock" size={12} />{r.duration}</span>
                    <span className="flex items-center gap-1"><Icon name="Navigation" size={12} />{r.distance}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {r.highlights.slice(0, 3).map((h) => (
                      <span key={h} className="text-xs px-2 py-0.5 rounded"
                        style={{background:'var(--color-navy-border)', color:'var(--color-text-muted)'}}>
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3" style={{borderTop:'1px solid var(--color-navy-border)'}}>
                    <span className="font-cormorant text-xl" style={{color:'var(--color-gold-light)'}}>
                      от {r.price.toLocaleString()} ₽
                    </span>
                    <Link to="/routes" className="text-xs font-medium transition-colors"
                      style={{color:'var(--color-gold)'}}>
                      Подробнее →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="section-title text-4xl md:text-5xl mb-4">Как это работает</h2>
            <p style={{color:'var(--color-text-muted)'}}>4 простых шага до вашего путешествия</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <div key={i}
                className="animate-on-scroll flex gap-5 rounded-xl p-6 card-hover"
                style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)', animationDelay:`${i*0.1}s`}}>
                <div className="font-cormorant text-4xl font-light flex-shrink-0 leading-none"
                  style={{color:'var(--color-gold)', opacity:0.4}}>{s.num}</div>
                <div>
                  <h3 className="font-golos font-semibold mb-1" style={{color:'var(--color-text)'}}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--color-text-muted)'}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6" style={{background:'var(--color-navy-card)'}}>
        <div className="container mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="section-title text-4xl md:text-5xl mb-4">Отзывы гостей</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i}
                className="animate-on-scroll rounded-2xl p-6 flex flex-col gap-4 card-hover"
                style={{background:'var(--color-navy)', border:'1px solid var(--color-navy-border)', animationDelay:`${i*0.1}s`}}>
                <div className="flex items-center gap-1">
                  {Array.from({length: t.stars}).map((_, si) => (
                    <Icon key={si} name="Star" size={14} style={{color:'var(--color-gold-light)'} as React.CSSProperties} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic" style={{color:'rgba(240,232,208,0.85)'}}>«{t.text}»</p>
                <div className="mt-auto pt-3" style={{borderTop:'1px solid var(--color-navy-border)'}}>
                  <div className="font-semibold text-sm" style={{color:'var(--color-text)'}}>{t.name}</div>
                  <div className="text-xs mt-0.5" style={{color:'var(--color-gold)'}}>{t.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="gold-line mx-auto mb-4" />
            <h2 className="section-title text-4xl md:text-5xl mb-4">Частые вопросы</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <div key={i}
                className="animate-on-scroll rounded-xl overflow-hidden"
                style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)', animationDelay:`${i*0.06}s`}}>
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  <span className="font-semibold text-sm" style={{color:'var(--color-text)'}}>{f.q}</span>
                  <Icon name={faqOpen === i ? "ChevronUp" : "ChevronDown"} size={16}
                    style={{color:'var(--color-gold)', flexShrink: 0} as React.CSSProperties} />
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{color:'var(--color-text-muted)'}}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 px-6" style={{background:'var(--color-navy-card)'}}>
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl p-8 md:p-12 animate-on-scroll"
            style={{background:'var(--color-navy)', border:'1px solid rgba(200,146,15,0.2)'}}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="gold-line mb-5" />
                <h2 className="section-title text-3xl md:text-4xl mb-4">
                  Готовы к<br/><span style={{color:'var(--color-gold-light)', fontStyle:'italic'}}>путешествию?</span>
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{color:'var(--color-text-muted)'}}>
                  Оставьте заявку и мы свяжемся с вами в течение 15 минут. Подберём кемпер, маршрут и обсудим все детали.
                </p>
                <a href="https://t.me/rusfantazia" target="_blank" rel="noopener noreferrer"
                  className="btn-outline-gold">
                  <Icon name="Send" size={16} />
                  Написать напрямую в Telegram
                </a>
              </div>

              <div>
                {sent ? (
                  <div className="text-center py-10">
                    <div className="text-4xl mb-3">✅</div>
                    <h3 className="font-cormorant text-2xl mb-2" style={{color:'var(--color-gold-light)'}}>Заявка отправлена!</h3>
                    <p className="text-sm" style={{color:'var(--color-text-muted)'}}>Мы свяжемся с вами в течение 15 минут.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {[
                      { name: "name", placeholder: "Ваше имя", type: "text" },
                      { name: "phone", placeholder: "Телефон или Telegram", type: "text" },
                      { name: "date", placeholder: "Желаемые даты", type: "text" },
                    ].map((field) => (
                      <input
                        key={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200"
                        style={{
                          background:'var(--color-navy-card)',
                          border:'1px solid var(--color-navy-border)',
                          color:'var(--color-text)',
                        }}
                      />
                    ))}
                    <textarea
                      placeholder="Комментарий (необязательно)"
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none"
                      style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)', color:'var(--color-text)'}}
                    />
                    <button type="submit" className="btn-gold py-3.5">
                      <Icon name="Send" size={16} />
                      Отправить заявку
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{backgroundImage:`url(${HERO_IMG})`, backgroundSize:'cover', backgroundPosition:'center'}} />
        <div className="absolute inset-0" style={{background:'linear-gradient(135deg,rgba(8,15,30,0.95),rgba(8,15,30,0.85))'}} />
        <div className="relative z-10 container mx-auto text-center animate-on-scroll">
          <h2 className="section-title text-4xl md:text-6xl mb-4">
            Начни своё<br/>
            <span style={{color:'var(--color-gold-light)', fontStyle:'italic'}}>путешествие сегодня</span>
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{color:'rgba(240,232,208,0.7)'}}>
            Свободные даты разбирают быстро
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#booking" className="btn-gold text-base px-8 py-4">
              <Icon name="Calendar" size={18} />
              Проверить даты
            </a>
            <a href="https://t.me/rusfantazia" target="_blank" rel="noopener noreferrer"
              className="btn-outline-gold text-base px-8 py-4">
              <Icon name="Send" size={18} />
              Telegram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}