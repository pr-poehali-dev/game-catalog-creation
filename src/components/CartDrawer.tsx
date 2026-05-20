import { CartItem } from "../App";
import Icon from "@/components/ui/icon";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, qty: number) => void;
}

export default function CartDrawer({ open, onClose, items, onRemove, onUpdateQuantity }: CartDrawerProps) {
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" onClick={onClose} />
      )}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md z-50 bg-game-card border-l border-game-border flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-game-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neon-green/10 border border-neon-green/30 rounded-lg flex items-center justify-center">
              <Icon name="ShoppingCart" size={16} className="text-neon-green" />
            </div>
            <span className="font-display text-lg text-white">КОРЗИНА</span>
            {items.length > 0 && (
              <span className="cart-badge text-xs px-2 py-0.5 rounded-full">{items.length}</span>
            )}
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/5 transition-colors">
            <Icon name="X" size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-20 h-20 rounded-full bg-game-border flex items-center justify-center">
                <Icon name="ShoppingCart" size={32} className="text-gray-600" />
              </div>
              <div>
                <p className="font-display text-gray-400">КОРЗИНА ПУСТА</p>
                <p className="text-gray-600 text-sm mt-1">Добавьте товары из каталога</p>
              </div>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-3 bg-game-dark/50 rounded-xl p-3 border border-game-border">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{item.name}</p>
                  <p className="text-neon-green font-display text-sm mt-1">{item.price.toLocaleString()} ₽</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-lg border border-game-border hover:border-neon-green/50 flex items-center justify-center transition-colors"
                    >
                      <Icon name="Minus" size={12} className="text-gray-400" />
                    </button>
                    <span className="text-white text-sm w-6 text-center font-display">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-lg border border-game-border hover:border-neon-green/50 flex items-center justify-center transition-colors"
                    >
                      <Icon name="Plus" size={12} className="text-gray-400" />
                    </button>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="p-1 hover:text-red-400 text-gray-600 transition-colors self-start">
                  <Icon name="Trash2" size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-game-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Итого:</span>
              <span className="font-display text-2xl text-neon-green">{total.toLocaleString()} ₽</span>
            </div>
            <button className="btn-neon-green w-full py-4 rounded-xl font-display text-lg tracking-wide">
              ОФОРМИТЬ ЗАКАЗ
            </button>
          </div>
        )}
      </div>
    </>
  );
}
