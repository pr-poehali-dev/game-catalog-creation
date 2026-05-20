export interface Product {
  id: number;
  name: string;
  game: string;
  price: number;
  oldPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  isNew?: boolean;
  rarity?: "common" | "rare" | "epic" | "legendary";
}

const HERO_F = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/b33ad7fc-73cb-4914-b6ae-a75977aaae3d.jpg";
const SKIN = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/eca626ba-76c1-4b81-9042-62caac4deac2.jpg";
const COINS = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/e5f2c9f2-3c17-4ed4-b267-809901cce26a.jpg";
const HERO_M = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/88a7ce35-db6d-4af4-abed-f6cf297a1360.jpg";
const KEY = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/0615a76b-1a62-4ce5-9819-80ebd9703ecc.jpg";

export const products: Product[] = [
  { id: 1, name: "Аккаунт Valorant Immortal", game: "Valorant", price: 4990, oldPrice: 7990, category: "accounts", image: HERO_F, rating: 4.9, reviews: 214, badge: "ХИТ", rarity: "legendary" },
  { id: 2, name: "Аккаунт Genshin AR55 5★", game: "Genshin Impact", price: 8990, oldPrice: 12990, category: "accounts", image: HERO_M, rating: 4.8, reviews: 98, badge: "АКЦИЯ", rarity: "epic" },
  { id: 3, name: "Steam аккаунт 50+ игр", game: "Steam", price: 2990, category: "accounts", image: KEY, rating: 4.7, reviews: 312, isNew: true, rarity: "rare" },
  { id: 4, name: "CS2 Prime ранг Global", game: "CS2", price: 5990, oldPrice: 7490, category: "accounts", image: HERO_F, rating: 4.9, reviews: 156, badge: "ХИТ", rarity: "legendary" },

  { id: 5, name: "Скин Dragon Lore AWP", game: "CS2", price: 12990, category: "skins", image: SKIN, rating: 5.0, reviews: 42, isNew: true, rarity: "legendary" },
  { id: 6, name: "Скин Phantom Reaver", game: "Valorant", price: 1990, oldPrice: 2990, category: "skins", image: SKIN, rating: 4.8, reviews: 320, rarity: "epic" },
  { id: 7, name: "Образ Lara Croft", game: "Fortnite", price: 990, category: "skins", image: HERO_F, rating: 4.9, reviews: 487, badge: "ХИТ", rarity: "rare" },
  { id: 8, name: "Скин Ahri K/DA", game: "League of Legends", price: 1490, oldPrice: 1990, category: "skins", image: HERO_F, rating: 4.7, reviews: 198, rarity: "epic" },

  { id: 9, name: "13 500 V-Bucks", game: "Fortnite", price: 5990, oldPrice: 7990, category: "currency", image: COINS, rating: 4.9, reviews: 1240, badge: "ХИТ", rarity: "epic" },
  { id: 10, name: "10 000 Robux", game: "Roblox", price: 4990, oldPrice: 6490, category: "currency", image: COINS, rating: 4.8, reviews: 890, badge: "АКЦИЯ", rarity: "rare" },
  { id: 11, name: "6 480 Genesis Crystals", game: "Genshin Impact", price: 7990, category: "currency", image: COINS, rating: 4.9, reviews: 567, isNew: true, rarity: "legendary" },
  { id: 12, name: "2 000 VP Valorant", game: "Valorant", price: 1490, category: "currency", image: COINS, rating: 4.7, reviews: 432, rarity: "common" },

  { id: 13, name: "Cyberpunk 2077 Steam", game: "Steam", price: 1490, oldPrice: 2990, category: "keys", image: KEY, rating: 4.6, reviews: 678, badge: "АКЦИЯ", rarity: "rare" },
  { id: 14, name: "Xbox Game Pass 12 мес", game: "Xbox", price: 4490, oldPrice: 5990, category: "keys", image: KEY, rating: 4.9, reviews: 1456, badge: "ХИТ", rarity: "legendary" },
  { id: 15, name: "PlayStation Plus 12 мес", game: "PlayStation", price: 3990, category: "keys", image: KEY, rating: 4.8, reviews: 923, isNew: true, rarity: "epic" },
  { id: 16, name: "Elden Ring Steam", game: "Steam", price: 2490, oldPrice: 3990, category: "keys", image: KEY, rating: 4.9, reviews: 745, rarity: "epic" },
];

export const categories = [
  { id: "all", label: "Все товары", icon: "Sparkles" },
  { id: "accounts", label: "Аккаунты", icon: "UserCircle2" },
  { id: "currency", label: "Игровая валюта", icon: "Coins" },
  { id: "keys", label: "Ключи и подписки", icon: "Key" },
  { id: "skins", label: "Скины", icon: "Swords" },
];

export const games = [
  { name: "Valorant", color: "#ff4655", icon: "🎯" },
  { name: "Genshin Impact", color: "#5b9eff", icon: "⚔️" },
  { name: "CS2", color: "#f4a72d", icon: "🔫" },
  { name: "Fortnite", color: "#7b4dff", icon: "🚀" },
  { name: "Roblox", color: "#ff5757", icon: "🎮" },
  { name: "League of Legends", color: "#00d4ff", icon: "👑" },
];

export const rarityConfig = {
  common: { label: "Common", color: "#9ca3af", glow: "rgba(156,163,175,0.3)" },
  rare: { label: "Rare", color: "#3b82f6", glow: "rgba(59,130,246,0.4)" },
  epic: { label: "Epic", color: "#bf00ff", glow: "rgba(191,0,255,0.5)" },
  legendary: { label: "Legendary", color: "#fbbf24", glow: "rgba(251,191,36,0.5)" },
};
