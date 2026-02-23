import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="border-t" style={{borderColor:'var(--color-navy-border)', background:'var(--color-navy)'}}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background:'linear-gradient(135deg,#e2b020,#c8920f)'}}>
                <span className="text-xs font-bold" style={{color:'var(--color-navy)'}}>РФ</span>
              </div>
              <span className="font-cormorant font-semibold text-xl" style={{color:'var(--color-text)'}}>
                Русская <span style={{color:'var(--color-gold-light)'}}>Фантазия</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{color:'var(--color-text-muted)'}}>
              Аренда прицепов-кемперов и готовые маршруты по России. Путешествуй на своём авто — мы обеспечим комфорт.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://t.me/rusfantazia" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{background:'var(--color-gold-soft)', color:'var(--color-gold-light)'}}>
                <Icon name="Send" size={16} />
              </a>
              <a href="tel:+79000000000"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{background:'var(--color-gold-soft)', color:'var(--color-gold-light)'}}>
                <Icon name="Phone" size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-sm mb-4 tracking-widest uppercase" style={{color:'var(--color-gold)'}}>Навигация</p>
            <div className="flex flex-col gap-2.5">
              {[
                { to: "/", label: "Главная" },
                { to: "/campers", label: "Кемперы" },
                { to: "/routes", label: "Маршруты" },
                { to: "/conditions", label: "Условия аренды" },
                { to: "/contacts", label: "Контакты" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm transition-colors duration-200 hover:text-gold"
                  style={{color:'var(--color-text-muted)'}}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-sm mb-4 tracking-widest uppercase" style={{color:'var(--color-gold)'}}>Контакты</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+79000000000" className="flex items-center gap-2 text-sm transition-colors hover:text-gold"
                style={{color:'var(--color-text-muted)'}}>
                <Icon name="Phone" size={14} />
                +7 (900) 000-00-00
              </a>
              <a href="mailto:info@rusfantazia.ru" className="flex items-center gap-2 text-sm transition-colors hover:text-gold"
                style={{color:'var(--color-text-muted)'}}>
                <Icon name="Mail" size={14} />
                info@rusfantazia.ru
              </a>
              <a href="https://t.me/rusfantazia" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors hover:text-gold"
                style={{color:'var(--color-text-muted)'}}>
                <Icon name="Send" size={14} />
                @rusfantazia
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{borderTop:'1px solid var(--color-navy-border)'}}>
          <p className="text-xs" style={{color:'var(--color-text-muted)'}}>
            © 2024 Русская Фантазия. Все права защищены.
          </p>
          <div className="flex items-center gap-4 text-xs" style={{color:'var(--color-text-muted)'}}>
            <Link to="/privacy" className="hover:text-gold transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}