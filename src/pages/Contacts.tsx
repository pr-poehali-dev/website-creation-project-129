import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contacts() {
  useScrollAnimation();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="gold-line mx-auto mb-4" />
          <h1 className="section-title text-5xl md:text-6xl mb-4">Контакты</h1>
          <p className="max-w-xl mx-auto" style={{color:'var(--color-text-muted)'}}>
            Напишите нам — ответим в течение 15 минут
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-on-scroll flex flex-col gap-6">
            {[
              { icon: "Send", label: "Telegram", value: "@rusfantazia", href: "https://t.me/rusfantazia" },
              { icon: "Phone", label: "Телефон", value: "+7 (900) 000-00-00", href: "tel:+79000000000" },
              { icon: "Mail", label: "Email", value: "info@rusfantazia.ru", href: "mailto:info@rusfantazia.ru" },
            ].map((c) => (
              <a key={c.label} href={c.href} target={c.icon === "Send" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl p-5 transition-all duration-200 card-hover group"
                style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)'}}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                  style={{background:'var(--color-gold-soft)'}}>
                  <Icon name={c.icon} fallback="Info" size={20} style={{color:'var(--color-gold-light)'} as React.CSSProperties} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold mb-0.5" style={{color:'var(--color-gold)'}}>{c.label}</div>
                  <div className="font-semibold" style={{color:'var(--color-text)'}}>{c.value}</div>
                </div>
              </a>
            ))}

            <div className="rounded-xl p-5" style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)'}}>
              <div className="text-xs uppercase tracking-widest font-semibold mb-2" style={{color:'var(--color-gold)'}}>Режим работы</div>
              <div className="text-sm" style={{color:'var(--color-text)'}}>Пн–Вс: 9:00 — 22:00</div>
              <div className="text-xs mt-1" style={{color:'var(--color-text-muted)'}}>В поездке — поддержка 24/7</div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{animationDelay:'0.15s'}}>
            {sent ? (
              <div className="rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center"
                style={{background:'var(--color-navy-card)', border:'1px solid rgba(200,146,15,0.2)'}}>
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-cormorant text-2xl mb-2" style={{color:'var(--color-gold-light)'}}>Сообщение отправлено!</h3>
                <p className="text-sm" style={{color:'var(--color-text-muted)'}}>Мы свяжемся с вами в течение 15 минут.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)'}}>
                <h3 className="font-cormorant text-2xl font-semibold mb-2" style={{color:'var(--color-text)'}}>Напишите нам</h3>
                {[
                  { name: "name", placeholder: "Ваше имя", type: "text" },
                  { name: "phone", placeholder: "Телефон или Telegram", type: "text" },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none"
                    style={{background:'var(--color-navy)', border:'1px solid var(--color-navy-border)', color:'var(--color-text)'}}
                  />
                ))}
                <textarea
                  placeholder="Ваш вопрос или пожелание..."
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg px-4 py-3 text-sm outline-none resize-none"
                  style={{background:'var(--color-navy)', border:'1px solid var(--color-navy-border)', color:'var(--color-text)'}}
                />
                <button type="submit" className="btn-gold py-3.5 mt-1">
                  <Icon name="Send" size={16} />
                  Отправить
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
