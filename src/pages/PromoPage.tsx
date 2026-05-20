import { CartItem } from "../App";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Icon from "@/components/ui/icon";

interface PromoPageProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

const HERO_F = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/b33ad7fc-73cb-4914-b6ae-a75977aaae3d.jpg";
const HERO_M = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/88a7ce35-db6d-4af4-abed-f6cf297a1360.jpg";
const COINS = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/e5f2c9f2-3c17-4ed4-b267-809901cce26a.jpg";

const promos = [
  {
    id: 1,
    title: "FLASH SALE",
    subtitle: "-40% на аккаунты",
    desc: "Только сегодня: топовые игровые аккаунты Valorant, Genshin, CS2 по специальной цене",
    badge: "⚡ Молния",
    image: HERO_F,
    accent: "#ff4655",
    timer: "01:23:45",
  },
  {
    id: 2,
    title: "DOUBLE BONUS",
    subtitle: "Удвой валюту",
    desc: "При покупке любой игровой валюты — получи +50% бонусом на следующий заказ",
    badge: "💎 Бонус",
    image: COINS,
    accent: "#fbbf24",
    timer: "11:07:22",
  },
  {
    id: 3,
    title: "STARTER PACK",
    subtitle: "-25% на скины",
    desc: "Соберите свою коллекцию: легендарные скины по сниженной цене для новых игроков",
    badge: "🎁 Подарок",
    image: HERO_M,
    accent: "#bf00ff",
    timer: "23:59:59",
  },
];

const saleProducts = products.filter(p => p.oldPrice);

export default function PromoPage({ onAddToCart }: PromoPageProps) {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <p className="text-red-500 text-sm font-body mb-2 uppercase tracking-widest flex items-center gap-2">
          <Icon name="Flame" size={14} /> Горячие предложения
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-white mb-2">
          АКЦИИ <span className="text-gradient-purple">И СКИДКИ</span>
        </h1>
        <p className="text-gray-500">Лучшие предложения — только здесь и сейчас</p>
      </div>

      {/* Big promo cards */}
      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {promos.map(promo => (
          <div
            key={promo.id}
            className="relative rounded-2xl overflow-hidden h-80 group cursor-pointer"
            style={{ boxShadow: `0 0 0 1px ${promo.accent}40` }}
          >
            <img src={promo.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-game-dark via-game-dark/60 to-game-dark/20" />
            <div className="relative h-full flex flex-col justify-between p-6">
              <div>
                <span className="inline-block bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-body border border-white/10">
                  {promo.badge}
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl mb-1" style={{ color: promo.accent }}>{promo.title}</h3>
                <p className="text-white font-medium mb-2 font-body">{promo.subtitle}</p>
                <p className="text-gray-400 text-sm mb-4 font-body line-clamp-2">{promo.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                    <Icon name="Clock" size={12} className="text-gray-400" />
                    <span className="font-display text-white text-sm">{promo.timer}</span>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-white opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sale products */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="tag-sale text-white px-4 py-2 rounded-xl flex items-center gap-2">
            <Icon name="Percent" size={16} />
            <span className="font-display tracking-wide">ТОВАРЫ СО СКИДКОЙ</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent" />
          <span className="text-gray-500 text-sm">{saleProducts.length} товаров</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {saleProducts.map(p => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="glass-card rounded-3xl p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="relative">
          <Icon name="Bell" size={32} className="text-neon-green mx-auto mb-4" />
          <h2 className="font-display text-3xl text-white mb-3">ПОЛУЧАЙ АКЦИИ В TELEGRAM</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto font-body">Эксклюзивные скидки и промокоды для подписчиков нашего канала</p>
          <button className="btn-neon-purple px-8 py-4 rounded-xl font-display inline-flex items-center gap-2">
            <Icon name="Send" size={18} />
            ПОДПИСАТЬСЯ
          </button>
        </div>
      </div>
    </div>
  );
}
