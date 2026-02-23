import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const links = [
  { to: "/", label: "Главная" },
  { to: "/campers", label: "Кемперы" },
  { to: "/routes", label: "Маршруты" },
  { to: "/conditions", label: "Условия" },
  { to: "/contacts", label: "Контакты" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-2xl py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background:'linear-gradient(135deg,#e2b020,#c8920f)'}}>
            <span className="text-xs font-bold" style={{color:'var(--color-navy)'}}>РФ</span>
          </div>
          <span className="font-cormorant font-semibold text-xl tracking-wide" style={{color:'var(--color-text)'}}>
            Русская <span style={{color:'var(--color-gold-light)'}}>Фантазия</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${location.pathname === l.to ? "!text-gold-light font-medium" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://t.me/rusfantazia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm px-5 py-2.5"
          >
            <Icon name="Send" size={15} />
            Написать
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
          style={{color:'var(--color-gold-light)'}}
        >
          <Icon name={open ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-gold-soft mt-2 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link text-base py-1" style={{color:'var(--color-text)'}}>
              {l.label}
            </Link>
          ))}
          <a
            href="https://t.me/rusfantazia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full text-center mt-2"
          >
            <Icon name="Send" size={15} />
            Написать в Telegram
          </a>
        </div>
      )}
    </header>
  );
}
