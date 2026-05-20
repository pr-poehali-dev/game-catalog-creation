import { useState } from "react";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import PromoPage from "./pages/PromoPage";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";

export type Page = "home" | "catalog" | "about" | "contacts" | "promo";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: number, qty: number) => {
    if (qty <= 0) { removeFromCart(id); return; }
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <HomePage onNavigate={setCurrentPage} onAddToCart={addToCart} />;
      case "catalog": return <CatalogPage onAddToCart={addToCart} />;
      case "about": return <AboutPage />;
      case "contacts": return <ContactsPage />;
      case "promo": return <PromoPage onAddToCart={addToCart} />;
      default: return <HomePage onNavigate={setCurrentPage} onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-game-dark font-body">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />
      <main>{renderPage()}</main>
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}
