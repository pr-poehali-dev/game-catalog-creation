import { useState } from "react";
import { CartItem } from "../App";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import Icon from "@/components/ui/icon";

interface CatalogPageProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

type SortType = "default" | "price_asc" | "price_desc" | "rating";

export default function CatalogPage({ onAddToCart }: CatalogPageProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortType>("default");

  const filtered = products
    .filter(p => activeCategory === "all" || p.category === activeCategory)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <p className="text-neon-green text-sm font-body mb-2 uppercase tracking-widest">Магазин</p>
        <h1 className="font-display text-5xl text-white mb-2">
          КАТАЛОГ <span className="text-gradient-green">ТОВАРОВ</span>
        </h1>
        <p className="text-gray-500">{products.length} товаров в наличии</p>
      </div>

      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Поиск по каталогу..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-game-card border border-game-border rounded-xl pl-11 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/50 transition-colors font-body"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2">
              <Icon name="X" size={16} className="text-gray-500 hover:text-white transition-colors" />
            </button>
          )}
        </div>
        <select
          value={sort}
          onChange={e => setSort(e.target.value as SortType)}
          className="bg-game-card border border-game-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-green/50 font-body cursor-pointer"
        >
          <option value="default">По умолчанию</option>
          <option value="price_asc">Сначала дешевле</option>
          <option value="price_desc">Сначала дороже</option>
          <option value="rating">По рейтингу</option>
        </select>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-body transition-all duration-200 ${
              activeCategory === cat.id
                ? "bg-neon-green text-game-dark font-semibold shadow-lg shadow-neon-green/20"
                : "bg-game-card border border-game-border text-gray-400 hover:border-neon-green/40 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <Icon name="SearchX" size={48} className="text-gray-700 mx-auto mb-4" />
          <p className="font-display text-gray-500 text-xl">НИЧЕГО НЕ НАЙДЕНО</p>
          <p className="text-gray-600 mt-2 font-body">Попробуйте изменить запрос или фильтры</p>
          <button
            onClick={() => { setSearch(""); setActiveCategory("all"); }}
            className="mt-6 px-6 py-3 rounded-xl border border-neon-green/30 text-neon-green hover:bg-neon-green/10 transition-colors text-sm"
          >
            Сбросить фильтры
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
}
