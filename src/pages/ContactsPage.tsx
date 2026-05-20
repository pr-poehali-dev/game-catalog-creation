import { useState } from "react";
import Icon from "@/components/ui/icon";

const contacts = [
  { icon: "MapPin", label: "Адрес", value: "Москва, ул. Арбат, 42, офис 301" },
  { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67" },
  { icon: "Mail", label: "Email", value: "hello@xkeybox.ru" },
  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–21:00, Сб–Вс: 10:00–18:00" },
];

const socials = [
  { icon: "Send", label: "Telegram", handle: "@xkeybox" },
  { icon: "Instagram", label: "Instagram", handle: "@xkeybox.store" },
  { icon: "Youtube", label: "YouTube", handle: "XKEYBOX Gaming" },
];

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="mb-12">
        <p className="text-neon-green text-sm font-body mb-2 uppercase tracking-widest">Свяжитесь с нами</p>
        <h1 className="font-display text-5xl text-white">
          КОН<span className="text-gradient-green">ТАКТЫ</span>
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: contacts */}
        <div>
          <div className="space-y-4 mb-10">
            {contacts.map((c, i) => (
              <div key={i} className="card-game rounded-2xl p-5 flex items-start gap-4">
                <div className="w-11 h-11 bg-neon-green/10 border border-neon-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={c.icon} fallback="Info" size={20} className="text-neon-green" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-body">{c.label}</p>
                  <p className="text-white font-medium font-body">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="card-game rounded-2xl p-6">
            <h3 className="font-display text-white text-lg mb-4">МЫ В СОЦСЕТЯХ</h3>
            <div className="space-y-3">
              {socials.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="w-9 h-9 bg-game-dark border border-game-border rounded-lg flex items-center justify-center group-hover:border-neon-green/40 transition-colors">
                    <Icon name={s.icon} fallback="Link" size={16} className="text-gray-400 group-hover:text-neon-green transition-colors" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{s.label}</p>
                    <p className="text-gray-500 text-xs">{s.handle}</p>
                  </div>
                  <Icon name="ExternalLink" size={14} className="text-gray-600 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="card-game rounded-2xl p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
              <div className="w-16 h-16 bg-neon-green/10 border border-neon-green/30 rounded-full flex items-center justify-center">
                <Icon name="CheckCircle" size={32} className="text-neon-green" />
              </div>
              <h3 className="font-display text-white text-2xl">СООБЩЕНИЕ ОТПРАВЛЕНО!</h3>
              <p className="text-gray-500 font-body">Мы свяжемся с вами в течение 2 часов</p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                className="mt-4 text-neon-green text-sm hover:underline font-body"
              >
                Отправить ещё одно
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-display text-white text-2xl mb-6">НАПИСАТЬ НАМ</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2 font-body">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="Иван Петров"
                    className="w-full bg-game-dark border border-game-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/50 transition-colors font-body"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2 font-body">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    placeholder="ivan@email.ru"
                    className="w-full bg-game-dark border border-game-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/50 transition-colors font-body"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2 font-body">Сообщение</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="Расскажите, чем можем помочь..."
                    rows={5}
                    className="w-full bg-game-dark border border-game-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-green/50 transition-colors font-body resize-none"
                  />
                </div>
                <button type="submit" className="btn-neon-green w-full py-4 rounded-xl font-display text-base">
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
