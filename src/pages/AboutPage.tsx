import Icon from "@/components/ui/icon";

const HERO_F = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/b33ad7fc-73cb-4914-b6ae-a75977aaae3d.jpg";
const HERO_M = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/88a7ce35-db6d-4af4-abed-f6cf297a1360.jpg";
const BATTLE = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/22de19f9-6fc5-4d4f-ae51-c355ea5c768a.jpg";

const values = [
  { icon: "Zap", title: "Мгновенно", desc: "Выдача за 1-5 минут после оплаты — без ожиданий и волокиты" },
  { icon: "ShieldCheck", title: "Безопасно", desc: "Все аккаунты и ключи проверены, гарантия на каждый товар" },
  { icon: "Heart", title: "С любовью", desc: "Мы сами геймеры и понимаем, что важно для каждого игрока" },
  { icon: "Trophy", title: "Лучшие цены", desc: "Прямые поставщики и оптовые закупки = выгода для тебя" },
];

const team = [
  { name: "Алексей", role: "Основатель & CEO", emoji: "🎮" },
  { name: "Мария", role: "Менеджер каталога", emoji: "💎" },
  { name: "Дмитрий", role: "Поддержка 24/7", emoji: "🎯" },
];

const steps = [
  { num: "01", title: "Выбери товар", desc: "Просмотри каталог и добавь в корзину что нужно" },
  { num: "02", title: "Оплати удобно", desc: "Карты, СБП, ЮMoney, криптовалюта — на выбор" },
  { num: "03", title: "Получи на email", desc: "Данные приходят мгновенно после оплаты" },
  { num: "04", title: "Играй и побеждай", desc: "Наслаждайся игрой, мы рядом если нужна помощь" },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-neon-green text-sm font-body mb-3 uppercase tracking-widest">О нас</p>
            <h1 className="font-display text-4xl sm:text-6xl text-white leading-tight mb-6">
              МЫ ДЕЛАЕМ<br />
              <span className="text-gradient-green">ИГРЫ</span> ДОСТУПНЕЕ
            </h1>
            <p className="text-gray-400 text-lg mb-5 font-body">
              XKEYBOX — цифровой магазин для геймеров, основанный в 2020 году. Аккаунты, валюта, скины и ключи к топовым играм по честным ценам.
            </p>
            <p className="text-gray-400 font-body mb-8">
              Более 50 000 заказов, тысячи довольных игроков и партнёрство с крупнейшими игровыми платформами.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="font-display text-3xl text-neon-green">50K+</p>
                <p className="text-gray-600 text-xs mt-1">Заказов</p>
              </div>
              <div>
                <p className="font-display text-3xl text-neon-green">2020</p>
                <p className="text-gray-600 text-xs mt-1">Год основания</p>
              </div>
              <div>
                <p className="font-display text-3xl text-neon-green">4.9</p>
                <p className="text-gray-600 text-xs mt-1">Рейтинг</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-neon-purple/30">
              <img src={HERO_F} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-game-dark/80 to-transparent" />
            </div>
            <div className="space-y-4 mt-12">
              <div className="relative rounded-2xl overflow-hidden aspect-square border border-neon-green/30">
                <img src={HERO_M} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-game-dark/80 to-transparent" />
              </div>
              <div className="glass-card rounded-2xl p-4 text-center">
                <p className="font-display text-2xl text-neon-green">2020</p>
                <p className="text-gray-500 text-xs">с тобой</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-game-card/30 border-y border-game-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-neon-green text-sm font-body mb-2 uppercase tracking-widest">Наши ценности</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white">ПОЧЕМУ <span className="text-gradient-green">МЫ?</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="card-game rounded-2xl p-6">
                <div className="w-12 h-12 bg-neon-green/10 border border-neon-green/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={v.icon} fallback="Star" size={22} className="text-neon-green" />
                </div>
                <h3 className="font-display text-white text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm font-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-neon-green text-sm font-body mb-2 uppercase tracking-widest">Как это работает</p>
          <h2 className="font-display text-3xl sm:text-4xl text-white">ВСЁ <span className="text-gradient-purple">ПРОСТО</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="card-game rounded-2xl p-6 relative">
              <p className="font-display text-5xl text-neon-green/20 absolute top-4 right-6">{s.num}</p>
              <div className="relative">
                <h3 className="font-display text-white text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm font-body">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center mb-12">
          <p className="text-neon-green text-sm font-body mb-2 uppercase tracking-widest">Команда</p>
          <h2 className="font-display text-3xl sm:text-4xl text-white">ЛЮДИ ЗА <span className="text-gradient-green">XKEYBOX</span></h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="card-game rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-game-dark rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 border border-neon-green/20">
                {member.emoji}
              </div>
              <p className="font-display text-white text-lg">{member.name}</p>
              <p className="text-neon-green text-sm font-body mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <img src={BATTLE} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="relative bg-game-dark/40 backdrop-blur-sm border border-neon-green/20 rounded-3xl p-10 sm:p-16 text-center">
            <h2 className="font-display text-3xl sm:text-5xl text-white mb-4">ГОТОВ К НОВЫМ ПОБЕДАМ?</h2>
            <p className="text-gray-300 mb-8 max-w-md mx-auto font-body">Тысячи геймеров уже выбрали XKEYBOX. Присоединяйся!</p>
            <a href="#" className="btn-neon-green inline-block px-10 py-4 rounded-xl font-display">
              СМОТРЕТЬ КАТАЛОГ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
