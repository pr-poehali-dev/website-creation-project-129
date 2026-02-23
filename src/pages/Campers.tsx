import { useState } from "react";
import Icon from "@/components/ui/icon";
import { campers } from "@/data/campers";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Campers() {
  useScrollAnimation();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="gold-line mx-auto mb-4" />
          <h1 className="section-title text-5xl md:text-6xl mb-4">Наши кемперы</h1>
          <p className="max-w-xl mx-auto" style={{color:'var(--color-text-muted)'}}>
            Каждый кемпер — продуманное пространство для вашего идеального путешествия
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {campers.map((c, i) => (
            <div key={c.id}
              className="animate-on-scroll rounded-2xl overflow-hidden"
              style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)', animationDelay:`${i*0.1}s`}}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{background:'linear-gradient(to right, transparent 60%, rgba(14,26,51,0.5))'}} />
                  {c.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded font-semibold text-sm"
                      style={{background:'var(--color-gold)', color:'var(--color-navy)'}}>
                      {c.badge}
                    </div>
                  )}
                </div>

                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="font-cormorant text-3xl font-semibold mb-1" style={{color:'var(--color-text)'}}>{c.name}</h2>
                    <p className="mb-5" style={{color:'var(--color-text-muted)'}}>{c.subtitle}</p>

                    <div className="flex items-center gap-6 mb-6 text-sm" style={{color:'var(--color-text-muted)'}}>
                      <span className="flex items-center gap-1.5"><Icon name="Users" size={15} />{c.capacity} человека</span>
                      <span className="flex items-center gap-1.5"><Icon name="Ruler" size={15} />{c.length} метров</span>
                    </div>

                    <div className="mb-5">
                      <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{color:'var(--color-gold)'}}>Особенности</p>
                      <div className="flex flex-wrap gap-2">
                        {c.features.map((f) => (
                          <span key={f} className="text-xs px-3 py-1 rounded-full flex items-center gap-1"
                            style={{background:'var(--color-gold-soft)', color:'var(--color-gold-light)', border:'1px solid rgba(200,146,15,0.2)'}}>
                            <Icon name="Check" size={11} />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{color:'var(--color-gold)'}}>Комплектация</p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {c.equipment.map((e) => (
                          <span key={e} className="text-xs flex items-center gap-1.5" style={{color:'var(--color-text-muted)'}}>
                            <Icon name="Dot" size={14} style={{color:'var(--color-gold)', flexShrink:0} as React.CSSProperties} />
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 mt-6" style={{borderTop:'1px solid var(--color-navy-border)'}}>
                    <div>
                      <div className="font-cormorant text-3xl font-semibold" style={{color:'var(--color-gold-light)'}}>
                        {c.price.toLocaleString()} ₽
                      </div>
                      <div className="text-xs" style={{color:'var(--color-text-muted)'}}>за {c.priceUnit}</div>
                    </div>
                    <div className="flex gap-3">
                      <a href="https://t.me/rusfantazia" target="_blank" rel="noopener noreferrer"
                        className="btn-outline-gold text-sm">
                        <Icon name="Send" size={14} />
                        Telegram
                      </a>
                      <a href="/#booking" className="btn-gold text-sm">
                        <Icon name="Calendar" size={14} />
                        Забронировать
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
