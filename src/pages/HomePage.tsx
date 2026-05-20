import { Page, CartItem } from "../App";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Icon from "@/components/ui/icon";

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

const KB_IMG = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/572d00eb-106c-418d-a7b9-a5f2eaf27180.jpg";

const stats = [
  { value: "5 000+", label: "Довольных клиентов" },
  { value: "300+", label: "Товаров в каталоге" },
  { value: "24/7", label: "Поддержка" },
  { value: "1 день", label: "Доставка по Москве" },
];

const features = [
  { icon: "Zap", title: "Быстрая доставка", desc: "По Москве за 1 день, по России за 3-7 дней" },
  { icon: "Shield", title: "Гарантия 2 года", desc: "Официальная гарантия на все товары" },
  { icon: "RotateCcw", title: "Возврат 30 дней", desc: "Вернём деньги без вопросов" },
  { icon: "Headphones", title: "Поддержка 24/7", label: "Всегда на связи", desc: "Помогаем с выбором и проблемами" },
];

export default function HomePage({ onNavigate, onAddToCart }: HomePageProps) {
  const hitProducts = products.filter(p => p.badge === "ХИТ" || p.rating >= 4.8).slice(0, 4);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
        <div className="hero-glow absolute inset-0" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-green rounded-full opacity-40 animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 py-20">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span className="text-neon-green text-sm font-body">Новая коллекция 2026</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-6">
              ИГРАЙ<br />
              <span className="text-gradient-green">НА НОВОМ</span><br />
              УРОВНЕ
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md font-body">
              Профессиональное игровое железо для тех, кто не признаёт компромиссов. Скорость, точность, стиль.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("catalog")}
                className="btn-neon-green px-8 py-4 rounded-xl font-display text-base"
              >
                СМОТРЕТЬ КАТАЛОГ
              </button>
              <button
                onClick={() => onNavigate("promo")}
                className="btn-neon-purple px-8 py-4 rounded-xl font-display text-base"
              >
                🔥 АКЦИИ
              </button>
            </div>
          </div>

          <div className="relative animate-float" style={{ animationDuration: "5s" }}>
            <div className="absolute inset-0 bg-neon-green/10 rounded-3xl blur-3xl" />
            <img
              src={KB_IMG}
              alt="Игровая клавиатура"
              className="relative rounded-3xl w-full object-cover shadow-2xl border border-neon-green/20"
              style={{ maxHeight: "450px" }}
            />
            <div className="absolute -bottom-4 -right-4 bg-game-card border border-neon-green/40 rounded-2xl p-4 neon-border-green">
              <p className="font-display text-neon-green text-2xl">-20%</p>
              <p className="text-gray-400 text-xs">на первый заказ</p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-game-card/80 backdrop-blur-md border-t border-game-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-neon-green text-xl">{stat.value}</p>
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hit Products */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-neon-green text-sm font-body mb-2 uppercase tracking-widest">Топ продаж</p>
            <h2 className="font-display text-4xl text-white">ХИТЫ <span className="text-gradient-purple">НЕДЕЛИ</span></h2>
          </div>
          <button
            onClick={() => onNavigate("catalog")}
            className="flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors text-sm font-body"
          >
            Все товары <Icon name="ArrowRight" size={16} />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hitProducts.map(p => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Banner promo */}
      <section className="mx-4 sm:mx-6 max-w-7xl lg:mx-auto mb-20 rounded-3xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-neon-purple/20 to-neon-green/10 border border-neon-purple/30 p-10 md:p-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
            <img src={KB_IMG} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-lg">
            <span className="tag-sale text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
              🔥 Горящее предложение
            </span>
            <h2 className="font-display text-4xl text-white mb-4">СКИДКА ДО 40%<br />НА КОМПЛЕКТЫ</h2>
            <p className="text-gray-300 mb-6 font-body">Собери полный игровой сет и сэкономь до 8 000 рублей. Предложение ограничено!</p>
            <button
              onClick={() => onNavigate("promo")}
              className="btn-neon-purple px-8 py-4 rounded-xl font-display"
            >
              ЗАБРАТЬ СКИДКУ
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card-game rounded-2xl p-6 flex flex-col gap-3">
              <div className="w-12 h-12 bg-neon-green/10 border border-neon-green/20 rounded-xl flex items-center justify-center">
                <Icon name={f.icon} fallback="Zap" size={24} className="text-neon-green" />
              </div>
              <h3 className="font-display text-white text-lg">{f.title}</h3>
              <p className="text-gray-500 text-sm font-body">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-game-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-neon-green flex items-center justify-center">
              <span className="text-game-dark font-display text-xs">X</span>
            </div>
            <span className="font-display text-white">XKEY<span className="text-neon-green">BOX</span></span>
          </div>
          <p className="text-gray-600 text-sm">© 2026 XKEYBOX. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-neon-green transition-colors"><Icon name="Send" size={18} /></a>
            <a href="#" className="text-gray-500 hover:text-neon-green transition-colors"><Icon name="Instagram" size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}