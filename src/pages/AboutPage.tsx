import Icon from "@/components/ui/icon";

const SETUP_IMG = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/de5ba3f2-d379-4216-8eca-3a636e0de863.jpg";
const MULTI_IMG = "https://cdn.poehali.dev/projects/d137b09d-482d-4c40-93d3-c7932eb75cd2/files/4b6db2ec-f572-45bf-9224-ce11e43c6d1a.jpg";

const values = [
  { icon: "Target", title: "Точность выбора", desc: "Каждый товар проходит тест наших геймеров. В каталоге только то, что реально работает." },
  { icon: "Trophy", title: "Качество без компромиссов", desc: "Работаем только с проверенными брендами и официальными поставщиками." },
  { icon: "Users", title: "Сообщество", desc: "Более 5000 геймеров уже доверяют XKEYBOX. Присоединяйся к лучшим." },
  { icon: "Zap", title: "Скорость", desc: "Быстрая доставка, оперативная поддержка и мгновенный возврат при необходимости." },
];

const team = [
  { name: "Алексей Кириллов", role: "Основатель", emoji: "🎮" },
  { name: "Мария Синева", role: "Менеджер каталога", emoji: "⌨️" },
  { name: "Дмитрий Орлов", role: "Техподдержка", emoji: "🎧" },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-neon-green text-sm font-body mb-3 uppercase tracking-widest">Наша история</p>
            <h1 className="font-display text-5xl text-white leading-tight mb-6">
              МЫ <span className="text-gradient-green">ГЕЙМЕРЫ</span>,<br />
              КАК И ВЫ
            </h1>
            <p className="text-gray-400 text-lg mb-5 font-body">
              XKEYBOX основан в 2020 году командой геймеров, которые устали от переплат в крупных магазинах и некачественного оборудования.
            </p>
            <p className="text-gray-400 font-body">
              Мы собрали каталог из лучших игровых периферий, которые используем сами. Честные цены, честные отзывы, честная поддержка.
            </p>
            <div className="flex gap-6 mt-8">
              <div className="text-center">
                <p className="font-display text-3xl text-neon-green">2020</p>
                <p className="text-gray-600 text-xs mt-1">Год основания</p>
              </div>
              <div className="w-px bg-game-border" />
              <div className="text-center">
                <p className="font-display text-3xl text-neon-green">5K+</p>
                <p className="text-gray-600 text-xs mt-1">Клиентов</p>
              </div>
              <div className="w-px bg-game-border" />
              <div className="text-center">
                <p className="font-display text-3xl text-neon-green">300+</p>
                <p className="text-gray-600 text-xs mt-1">Товаров</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-neon-purple/10 rounded-3xl blur-3xl" />
            <img
              src={SETUP_IMG}
              alt="Наш магазин"
              className="relative rounded-3xl w-full object-cover border border-neon-purple/20 shadow-2xl"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-game-card/30 border-y border-game-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-white mb-10 text-center">
            НАШИ <span className="text-gradient-green">ПРИНЦИПЫ</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="font-display text-3xl text-white mb-10 text-center">
          НАША <span className="text-gradient-purple">КОМАНДА</span>
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="card-game rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-game-dark rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 border border-game-border">
                {member.emoji}
              </div>
              <p className="font-display text-white text-lg">{member.name}</p>
              <p className="text-neon-green text-sm font-body mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <img src={MULTI_IMG} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="relative bg-game-card/80 border border-neon-green/20 rounded-3xl p-12 text-center backdrop-blur-sm">
            <h2 className="font-display text-4xl text-white mb-4">ГОТОВ ИГРАТЬ НА МАКСИМУМ?</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto font-body">Найди своё оборудование в нашем каталоге</p>
            <a href="#" className="btn-neon-green inline-block px-10 py-4 rounded-xl font-display">
              В КАТАЛОГ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
