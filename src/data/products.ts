export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  isNew?: boolean;
}

const KB_IMG = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/572d00eb-106c-418d-a7b9-a5f2eaf27180.jpg";
const MULTI_IMG = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/4b6db2ec-f572-45bf-9224-ce11e43c6d1a.jpg";
const SETUP_IMG = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/de5ba3f2-d379-4216-8eca-3a636e0de863.jpg";

export const products: Product[] = [
  { id: 1, name: "Клавиатура XKEY Pro RGB", price: 7990, oldPrice: 9990, category: "keyboards", image: KB_IMG, rating: 4.9, reviews: 214, badge: "ХИТ" },
  { id: 2, name: "Игровой набор Starter Pack", price: 12490, oldPrice: 15900, category: "sets", image: MULTI_IMG, rating: 4.8, reviews: 98, badge: "АКЦИЯ" },
  { id: 3, name: "XKEY Ultimate Setup", price: 34990, category: "sets", image: SETUP_IMG, rating: 5.0, reviews: 42, isNew: true },
  { id: 4, name: "Клавиатура XKEY Compact", price: 4990, oldPrice: 5990, category: "keyboards", image: KB_IMG, rating: 4.7, reviews: 176, badge: "АКЦИЯ" },
  { id: 5, name: "Игровая мышь X-Mouse Pro", price: 3490, category: "mice", image: MULTI_IMG, rating: 4.8, reviews: 320, isNew: true },
  { id: 6, name: "Гарнитура XSOUND 7.1", price: 5990, oldPrice: 7490, category: "headsets", image: MULTI_IMG, rating: 4.6, reviews: 89 },
  { id: 7, name: "Геймпад XPAD Elite", price: 6490, category: "gamepads", image: MULTI_IMG, rating: 4.9, reviews: 153, badge: "ХИТ" },
  { id: 8, name: "Коврик XDESK XL RGB", price: 2490, oldPrice: 3290, category: "accessories", image: SETUP_IMG, rating: 4.7, reviews: 267, badge: "АКЦИЯ" },
  { id: 9, name: "Клавиатура XKEY TKL", price: 6990, category: "keyboards", image: KB_IMG, rating: 4.8, reviews: 64, isNew: true },
  { id: 10, name: "Мышь X-Mouse Wireless", price: 4290, oldPrice: 5490, category: "mice", image: MULTI_IMG, rating: 4.7, reviews: 112 },
  { id: 11, name: "Гарнитура XSOUND Wireless", price: 8990, category: "headsets", image: MULTI_IMG, rating: 4.9, reviews: 75, isNew: true },
  { id: 12, name: "Геймпад XPAD Mini", price: 2990, oldPrice: 3990, category: "gamepads", image: MULTI_IMG, rating: 4.5, reviews: 198, badge: "АКЦИЯ" },
];

export const categories = [
  { id: "all", label: "Все товары" },
  { id: "keyboards", label: "Клавиатуры" },
  { id: "mice", label: "Мыши" },
  { id: "headsets", label: "Гарнитуры" },
  { id: "gamepads", label: "Геймпады" },
  { id: "sets", label: "Комплекты" },
  { id: "accessories", label: "Аксессуары" },
];
