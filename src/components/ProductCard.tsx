import { Product, rarityConfig } from "../data/products";
import { CartItem } from "../App";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  product: Product;
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  const rarity = product.rarity ? rarityConfig[product.rarity] : null;

  return (
    <div
      className="card-game rounded-2xl overflow-hidden group cursor-pointer relative"
      style={rarity ? { boxShadow: `0 0 0 1px ${rarity.glow}` } : {}}
    >
      {rarity && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{ boxShadow: `0 0 30px ${rarity.glow}, inset 0 0 30px ${rarity.glow}` }}
        />
      )}

      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-game-dark via-game-dark/40 to-transparent" />

        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-body border border-white/10">
            {product.game}
          </span>
          <div className="flex flex-col gap-1 items-end">
            {product.badge && (
              <span className="tag-sale text-white px-2 py-1 rounded-md uppercase tracking-wider text-[10px]">
                {product.badge}
              </span>
            )}
            {product.isNew && !product.badge && (
              <span className="bg-neon-green text-game-dark font-display text-[10px] px-2 py-1 rounded-md uppercase">
                NEW
              </span>
            )}
            {discount && (
              <span className="bg-red-500/90 text-white font-display text-[10px] px-2 py-1 rounded-md">
                -{discount}%
              </span>
            )}
          </div>
        </div>

        {rarity && (
          <div className="absolute bottom-3 left-3">
            <span
              className="text-[10px] uppercase tracking-widest font-display px-2 py-1 rounded backdrop-blur-sm border"
              style={{ color: rarity.color, borderColor: rarity.color + "60", background: rarity.color + "10" }}
            >
              {rarity.label}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 relative">
        <p className="text-white font-medium text-sm leading-tight mb-2 group-hover:text-neon-green transition-colors line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </p>
        <div className="flex items-center gap-1 mb-3">
          <Icon name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-white text-xs font-medium">{product.rating}</span>
          <span className="text-gray-600 text-xs">({product.reviews})</span>
        </div>
        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="font-display text-lg text-neon-green leading-none">{product.price.toLocaleString()} ₽</p>
            {product.oldPrice && (
              <p className="text-gray-600 text-xs line-through mt-1">{product.oldPrice.toLocaleString()} ₽</p>
            )}
          </div>
          <button
            onClick={() => onAddToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
            className="btn-neon-green w-9 h-9 rounded-lg text-xs font-display flex items-center justify-center flex-shrink-0"
            aria-label="В корзину"
          >
            <Icon name="Plus" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
