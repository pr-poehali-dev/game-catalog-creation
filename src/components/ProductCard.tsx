import { Product } from "../data/products";
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

  return (
    <div className="card-game rounded-2xl overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-game-dark/80 via-transparent to-transparent" />
        {product.badge && (
          <span className="absolute top-3 left-3 tag-sale text-white px-2 py-1 rounded-lg uppercase tracking-wider">
            {product.badge}
          </span>
        )}
        {product.isNew && !product.badge && (
          <span className="absolute top-3 left-3 bg-neon-green/90 text-game-dark font-display text-xs px-2 py-1 rounded-lg uppercase">
            НОВИНКА
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-3 bg-black/70 text-neon-green font-display text-xs px-2 py-1 rounded-lg border border-neon-green/30">
            -{discount}%
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-white font-medium text-sm leading-tight mb-2 group-hover:text-neon-green transition-colors">
          {product.name}
        </p>
        <div className="flex items-center gap-1 mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={12}
                className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
              />
            ))}
          </div>
          <span className="text-gray-500 text-xs">({product.reviews})</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="font-display text-lg text-neon-green">{product.price.toLocaleString()} ₽</p>
            {product.oldPrice && (
              <p className="text-gray-600 text-xs line-through">{product.oldPrice.toLocaleString()} ₽</p>
            )}
          </div>
          <button
            onClick={() => onAddToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
            className="btn-neon-green px-3 py-2 rounded-lg text-xs font-display flex items-center gap-1"
          >
            <Icon name="Plus" size={14} />
            В КОРЗИНУ
          </button>
        </div>
      </div>
    </div>
  );
}
