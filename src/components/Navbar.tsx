import { useState } from "react";
import { Page } from "../App";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  cartCount: number;
  onCartOpen: () => void;
}

const navItems: { id: Page; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "promo", label: "Акции" },
  { id: "about", label: "О магазине" },
  { id: "contacts", label: "Контакты" },
];

export default function Navbar({ currentPage, onNavigate, cartCount, onCartOpen }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-game-dark/90 backdrop-blur-md border-b border-game-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded bg-neon-green flex items-center justify-center">
              <span className="text-game-dark font-display text-sm">X</span>
            </div>
            <span className="font-display text-xl text-white">
              XKEY<span className="text-neon-green">BOX</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-body ${
                  currentPage === item.id
                    ? "text-neon-green bg-neon-green/10 border border-neon-green/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                } ${item.id === "promo" ? "relative" : ""}`}
              >
                {item.id === "promo" && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                )}
                {item.label}
              </button>
            ))}
          </div>

          {/* Cart + mobile */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCartOpen}
              className="relative p-2 rounded-lg border border-game-border hover:border-neon-green/50 transition-all group"
            >
              <Icon name="ShoppingCart" size={20} className="text-gray-300 group-hover:text-neon-green transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 cart-badge text-xs w-5 h-5 rounded-full flex items-center justify-center font-display">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 rounded-lg border border-game-border"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={20} className="text-gray-300" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-game-border mt-2 pt-4 flex flex-col gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? "text-neon-green bg-neon-green/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
