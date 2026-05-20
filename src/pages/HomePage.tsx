import { Page, CartItem } from "../App";
import { products, games, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import Icon from "@/components/ui/icon";

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

const HERO_F = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/b33ad7fc-73cb-4914-b6ae-a75977aaae3d.jpg";
const HERO_M = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/88a7ce35-db6d-4af4-abed-f6cf297a1360.jpg";
const BATTLE = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/22de19f9-6fc5-4d4f-ae51-c355ea5c768a.jpg";

const stats = [
  { value: "50K+", label: "Заказов" },
  { value: "4.9", label: "Рейтинг" },
  { value: "24/7", label: "Поддержка" },
  { value: "5 мин", label: "Доставка" },
];

const features = [
  { icon: "Zap", title: "Мгновенная выдача", desc: "Получи товар на email сразу после оплаты" },
  { icon: "ShieldCheck", title: "Гарантия 30 дней", desc: "Замена или возврат при любых проблемах" },
  { icon: "Lock", title: "Безопасно", desc: "Все аккаунты проверены, данные защищены" },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Всегда поможем в Telegram и онлайн" },
];

export default function HomePage({ onNavigate, onAddToCart }: HomePageProps) {
  const hitProducts = products.filter(p => p.badge === "ХИТ" || p.rarity === "legendary").slice(0, 4);
  const newProducts = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center grid-bg overflow-hidden">
        <div className="hero-glow absolute inset-0" />
        
        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-green/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-8 items-center relative z-10 py-20">
          <div className="lg:col-span-3 animate-fade-in">
            <div className="inline-flex items-center gap-2 game-pill rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              <span className="text-white text-sm font-body">🎮 Цифровой магазин #1</span>
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.9] mb-6 tracking-tight">
              ТВОЯ<br />
              <span className="text-gradient-green">ИГРОВАЯ</span><br />
              <span className="text-gradient-purple">ВСЕЛЕННАЯ</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg font-body">
              Аккаунты, валюта, скины и ключи для топовых игр. Мгновенная доставка, честные цены, тысячи отзывов.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => onNavigate("catalog")}
                className="btn-neon-green px-8 py-4 rounded-xl font-display text-base flex items-center gap-2"
              >
                <Icon name="Sparkles" size={18} />
                ВЫБРАТЬ ТОВАР
              </button>
              <button
                onClick={() => onNavigate("promo")}
                className="px-8 py-4 rounded-xl font-display text-base border border-white/20 text-white hover:border-neon-green hover:text-neon-green transition-all flex items-center gap-2"
              >
                <Icon name="Flame" size={18} />
                АКЦИИ
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="font-display text-2xl text-neon-green">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 to-neon-green/20 rounded-3xl blur-3xl" />
            <div className="relative grid grid-cols-2 gap-3">
              <div className="space-y-3 mt-8">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-neon-purple/40 group">
                  <img src={HERO_F} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-game-dark via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-[10px] text-neon-purple uppercase tracking-widest font-display">Valorant</p>
                    <p className="text-white font-display text-sm">Аккаунт Immortal</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-neon-green/40 group">
                  <img src={HERO_M} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-game-dark via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-[10px] text-neon-green uppercase tracking-widest font-display">Genshin</p>
                    <p className="text-white font-display text-sm">AR55 5★</p>
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-4 text-center">
                  <p className="font-display text-3xl text-neon-green">-30%</p>
                  <p className="text-gray-400 text-xs mt-1">на первый заказ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMES BAR */}
      <section className="py-12 border-y border-game-border bg-game-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-6">Топ игр</p>
          <div className="flex flex-wrap justify-center gap-3">
            {games.map(game => (
              <button
                key={game.name}
                onClick={() => onNavigate("catalog")}
                className="glass-card rounded-xl px-5 py-3 flex items-center gap-2 hover:scale-105 transition-transform group"
                style={{ borderColor: game.color + "40" }}
              >
                <span className="text-xl">{game.icon}</span>
                <span className="text-white text-sm font-medium group-hover:text-neon-green transition-colors">{game.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-neon-green text-sm font-body mb-2 uppercase tracking-widest">Выбери категорию</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white">ЧТО ТЕБЯ <span className="text-gradient-green">ИНТЕРЕСУЕТ?</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.filter(c => c.id !== "all").map(cat => (
            <button
              key={cat.id}
              onClick={() => onNavigate("catalog")}
              className="card-game rounded-2xl p-6 text-left group relative overflow-hidden"
            >
              <div className="w-14 h-14 bg-neon-green/10 border border-neon-green/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-neon-green group-hover:text-game-dark transition-all">
                <Icon name={cat.icon} fallback="Box" size={26} className="text-neon-green group-hover:text-game-dark transition-colors" />
              </div>
              <h3 className="font-display text-white text-lg mb-1">{cat.label}</h3>
              <p className="text-gray-500 text-xs">от {Math.min(...products.filter(p => p.category === cat.id).map(p => p.price)).toLocaleString()} ₽</p>
              <Icon name="ArrowUpRight" size={20} className="absolute top-6 right-6 text-gray-700 group-hover:text-neon-green transition-colors" />
            </button>
          ))}
        </div>
      </section>

      {/* HITS */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Icon name="Flame" size={16} className="text-red-500" />
              <p className="text-red-500 text-sm font-body uppercase tracking-widest">Топ продаж</p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-white">ХИТЫ <span className="text-gradient-green">НЕДЕЛИ</span></h2>
          </div>
          <button onClick={() => onNavigate("catalog")} className="flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors text-sm font-body">
            Все товары <Icon name="ArrowRight" size={16} />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hitProducts.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}
        </div>
      </section>

      {/* BIG PROMO BANNER */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <img src={BATTLE} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-game-dark via-game-dark/80 to-game-dark/20" />
          <div className="relative p-10 md:p-16 max-w-lg">
            <span className="tag-sale text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4">
              🔥 Только сегодня
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-4">
              СКИДКА 40%<br />
              НА АККАУНТЫ
            </h2>
            <p className="text-gray-300 mb-6 font-body">Прокачанные аккаунты Valorant, Genshin Impact, CS2 — забери со скидкой до конца дня!</p>
            <button onClick={() => onNavigate("promo")} className="btn-neon-purple px-8 py-4 rounded-xl font-display">
              ЗАБРАТЬ СКИДКУ
            </button>
          </div>
        </div>
      </section>

      {/* NEW */}
      {newProducts.length > 0 && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Sparkles" size={16} className="text-neon-green" />
                <p className="text-neon-green text-sm font-body uppercase tracking-widest">Новинки</p>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-white">ТОЛЬКО <span className="text-gradient-purple">ПОСТУПИЛО</span></h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {newProducts.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}
          </div>
        </section>
      )}

      {/* FEATURES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-white">ПОЧЕМУ <span className="text-gradient-green">XKEYBOX?</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />
          <div className="relative">
            <Icon name="Gift" size={40} className="text-neon-green mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-5xl text-white mb-4">ПОДПИШИСЬ И ЗАБЕРИ -15%</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto font-body">Промокод на первый заказ + эксклюзивные акции в Telegram</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="твой@email.ru" className="flex-1 bg-game-dark border border-game-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/50 transition-colors font-body" />
              <button className="btn-neon-green px-6 py-3 rounded-xl font-display whitespace-nowrap">ПОЛУЧИТЬ КОД</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
            <a href="#" className="text-gray-500 hover:text-neon-green transition-colors"><Icon name="MessageCircle" size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
