import { CartItem } from "../App";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Icon from "@/components/ui/icon";

interface PromoPageProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

const promos = [
  {
    id: 1,
    title: "КОМПЛЕКТ ГЕЙМЕРА",
    subtitle: "Скидка 40% на полный сет",
    desc: "Клавиатура + мышь + гарнитура + коврик. Всё что нужно для победы.",
    badge: "🔥 Хит",
    gradient: "from-neon-purple/20 to-neon-blue/10",
    border: "border-neon-purple/30",
    accent: "text-neon-purple",
    timer: "01:23:45",
  },
  {
    id: 2,
    title: "ЧЁРНАЯ ПЯТНИЦА",
    subtitle: "До -50% на клавиатуры",
    desc: "Лучшие механические клавиатуры по ценам ниже оптовых. Только 48 часов!",
    badge: "⚡ Молния",
    gradient: "from-yellow-500/10 to-orange-500/10",
    border: "border-yellow-500/30",
    accent: "text-yellow-400",
    timer: "11:07:22",
  },
  {
    id: 3,
    title: "НОВЫЙ СЕЗОН",
    subtitle: "-20% на новинки",
    desc: "Свежие поступления по специальной цене. Первыми оцените новое железо!",
    badge: "✨ Новинки",
    gradient: "from-neon-green/10 to-neon-blue/10",
    border: "border-neon-green/30",
    accent: "text-neon-green",
    timer: "23:59:59",
  },
];

const saleProducts = products.filter(p => p.oldPrice);

export default function PromoPage({ onAddToCart }: PromoPageProps) {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-neon-green text-sm font-body mb-2 uppercase tracking-widest">Специальные предложения</p>
          <h1 className="font-display text-5xl text-white mb-2">
            АКЦИИ <span className="text-gradient-purple">И СКИДКИ</span>
          </h1>
          <p className="text-gray-500">Лучшие предложения — только здесь и только сейчас</p>
        </div>

        {/* Promo cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {promos.map(promo => (
            <div key={promo.id} className={`bg-gradient-to-br ${promo.gradient} border ${promo.border} rounded-2xl p-6 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/3 rounded-full -translate-y-1/2 translate-x-1/2" />
              <span className="inline-block bg-black/40 text-white text-xs px-3 py-1 rounded-full mb-4 font-body">
                {promo.badge}
              </span>
              <h3 className={`font-display text-2xl ${promo.accent} mb-1`}>{promo.title}</h3>
              <p className="text-white font-medium mb-3 font-body">{promo.subtitle}</p>
              <p className="text-gray-400 text-sm mb-5 font-body">{promo.desc}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={14} className="text-gray-500" />
                  <span className="font-display text-gray-300 text-sm">{promo.timer}</span>
                </div>
                <button className={`border ${promo.border} ${promo.accent} text-xs px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors font-display`}>
                  ПОДРОБНЕЕ
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sale products */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="tag-sale text-white px-4 py-2 rounded-xl flex items-center gap-2">
              <Icon name="Percent" size={16} />
              <span className="font-display tracking-wide">ТОВАРЫ СО СКИДКОЙ</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {saleProducts.map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-game-card border border-game-border rounded-3xl p-10 text-center">
          <Icon name="Bell" size={32} className="text-neon-green mx-auto mb-4" />
          <h2 className="font-display text-3xl text-white mb-3">ПЕРВЫМ УЗНАВАЙ ОБ АКЦИЯХ</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto font-body">Подпишись на рассылку и получи купон на скидку 15% на первый заказ</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="твой@email.ru"
              className="flex-1 bg-game-dark border border-game-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/50 transition-colors font-body"
            />
            <button className="btn-neon-green px-6 py-3 rounded-xl font-display whitespace-nowrap">
              ПОДПИСАТЬСЯ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
