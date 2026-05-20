import { useState } from "react";
import { CartItem } from "../App";
import { products, categories, games } from "../data/products";
import ProductCard from "../components/ProductCard";
import Icon from "@/components/ui/icon";

interface CatalogPageProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void;
}

type SortType = "default" | "price_asc" | "price_desc" | "rating";

export default function CatalogPage({ onAddToCart }: CatalogPageProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortType>("default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);

  const filtered = products
    .filter(p => activeCategory === "all" || p.category === activeCategory)
    .filter(p => !activeGame || p.game === activeGame)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.game.toLowerCase().includes(search.toLowerCase()))
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <p className="text-neon-green text-sm font-body mb-2 uppercase tracking-widest">Магазин</p>
        <h1 className="font-display text-4xl sm:text-5xl text-white mb-2">
          КАТАЛОГ <span className="text-gradient-green">ТОВАРОВ</span>
        </h1>
        <p className="text-gray-500">{filtered.length} из {products.length} товаров</p>
      </div>

      {/* Top: Search + Sort */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Поиск по названию или игре..."
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
          <option value="default">По популярности</option>
          <option value="price_asc">Сначала дешевле</option>
          <option value="price_desc">Сначала дороже</option>
          <option value="rating">По рейтингу</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-[260px,1fr] gap-6">
        {/* Sidebar filters */}
        <aside className="space-y-5">
          {/* Categories */}
          <div className="card-game rounded-2xl p-5">
            <h3 className="font-display text-white text-sm mb-4 flex items-center gap-2">
              <Icon name="Filter" size={14} className="text-neon-green" />
              КАТЕГОРИИ
            </h3>
            <div className="space-y-1">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                    activeCategory === cat.id
                      ? "bg-neon-green/10 text-neon-green border border-neon-green/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <Icon name={cat.icon} fallback="Box" size={16} />
                  <span className="font-body">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Games */}
          <div className="card-game rounded-2xl p-5">
            <h3 className="font-display text-white text-sm mb-4 flex items-center gap-2">
              <Icon name="Gamepad2" size={14} className="text-neon-green" />
              ИГРЫ
            </h3>
            <div className="space-y-1">
              <button
                onClick={() => setActiveGame(null)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                  !activeGame ? "bg-white/5 text-white" : "text-gray-500 hover:text-white"
                }`}
              >
                <span>🎮</span>
                <span className="font-body">Все игры</span>
              </button>
              {games.map(game => (
                <button
                  key={game.name}
                  onClick={() => setActiveGame(game.name)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                    activeGame === game.name ? "bg-white/5 text-white" : "text-gray-500 hover:text-white"
                  }`}
                >
                  <span>{game.icon}</span>
                  <span className="font-body">{game.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price range */}
          <div className="card-game rounded-2xl p-5">
            <h3 className="font-display text-white text-sm mb-4 flex items-center gap-2">
              <Icon name="DollarSign" size={14} className="text-neon-green" />
              ЦЕНА
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <span className="font-display text-neon-green">{priceRange[0].toLocaleString()} ₽</span>
              <span>—</span>
              <span className="font-display text-neon-green">{priceRange[1].toLocaleString()} ₽</span>
            </div>
            <input
              type="range"
              min={0}
              max={15000}
              step={500}
              value={priceRange[1]}
              onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full accent-neon-green"
            />
          </div>

          {(activeCategory !== "all" || activeGame || search || priceRange[1] !== 15000) && (
            <button
              onClick={() => { setActiveCategory("all"); setActiveGame(null); setSearch(""); setPriceRange([0, 15000]); }}
              className="w-full px-4 py-3 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors text-sm font-body"
            >
              Сбросить фильтры
            </button>
          )}
        </aside>

        {/* Products */}
        <div>
          {filtered.length === 0 ? (
            <div className="card-game rounded-2xl text-center py-20 px-6">
              <Icon name="SearchX" size={48} className="text-gray-700 mx-auto mb-4" />
              <p className="font-display text-gray-500 text-xl">НИЧЕГО НЕ НАЙДЕНО</p>
              <p className="text-gray-600 mt-2 font-body">Попробуйте изменить фильтры</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
