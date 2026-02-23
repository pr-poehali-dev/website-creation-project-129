import Icon from "@/components/ui/icon";
import { routes } from "@/data/routes";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Routes() {
  useScrollAnimation();

  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="gold-line mx-auto mb-4" />
          <h1 className="section-title text-5xl md:text-6xl mb-4">Готовые маршруты</h1>
          <p className="max-w-xl mx-auto" style={{color:'var(--color-text-muted)'}}>
            Каждый маршрут — продуманный сценарий с остановками, рекомендациями и лучшими местами
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {routes.map((r, i) => (
            <div key={r.id}
              className="animate-on-scroll rounded-2xl overflow-hidden card-hover group flex flex-col"
              style={{background:'var(--color-navy-card)', border:'1px solid var(--color-navy-border)', animationDelay:`${i*0.1}s`}}>
              <div className="relative h-52 overflow-hidden">
                <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(8,15,30,0.9) 0%, transparent 55%)'}} />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded text-xs font-medium"
                  style={{background:'var(--color-gold-soft)', color:'var(--color-gold-light)', border:'1px solid rgba(200,146,15,0.3)'}}>
                  {r.difficulty}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="font-cormorant text-2xl font-semibold mb-1" style={{color:'var(--color-text)'}}>{r.title}</h2>
                <p className="text-sm mb-5" style={{color:'var(--color-text-muted)'}}>{r.subtitle}</p>

                <div className="flex items-center gap-5 text-sm mb-5" style={{color:'var(--color-text-muted)'}}>
                  <span className="flex items-center gap-1.5"><Icon name="Clock" size={14} />{r.duration}</span>
                  <span className="flex items-center gap-1.5"><Icon name="Navigation" size={14} />{r.distance}</span>
                </div>

                <div className="mb-5">
                  <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{color:'var(--color-gold)'}}>Маршрут</p>
                  <div className="flex flex-col gap-1.5">
                    {r.highlights.map((h, hi) => (
                      <div key={h} className="flex items-center gap-2 text-sm" style={{color:'var(--color-text-muted)'}}>
                        <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                          style={{background:'var(--color-gold-soft)', color:'var(--color-gold)'}}>
                          {hi + 1}
                        </div>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-5 flex items-center justify-between" style={{borderTop:'1px solid var(--color-navy-border)'}}>
                  <div>
                    <div className="font-cormorant text-2xl font-semibold" style={{color:'var(--color-gold-light)'}}>
                      от {r.price.toLocaleString()} ₽
                    </div>
                    <div className="text-xs" style={{color:'var(--color-text-muted)'}}>включая кемпер</div>
                  </div>
                  <a href="https://t.me/rusfantazia" target="_blank" rel="noopener noreferrer"
                    className="btn-gold text-sm">
                    <Icon name="Send" size={14} />
                    Обсудить
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl p-8 animate-on-scroll text-center"
          style={{background:'var(--color-navy-card)', border:'1px solid rgba(200,146,15,0.2)'}}>
          <h2 className="section-title text-3xl mb-3">Хотите свой маршрут?</h2>
          <p className="mb-6" style={{color:'var(--color-text-muted)'}}>
            Мы разработаем индивидуальный маршрут под ваши интересы и даты
          </p>
          <a href="https://t.me/rusfantazia" target="_blank" rel="noopener noreferrer"
            className="btn-gold px-8 py-3.5">
            <Icon name="Send" size={16} />
            Написать в Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
