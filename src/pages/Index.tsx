import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/902346ac-1e1c-4ace-b493-3de6c76d51a7/files/a2e19f42-795b-4967-8908-325a6db6f203.jpg';

const NAV = [
  { id: 'services', label: 'Услуги' },
  { id: 'works', label: 'Работы' },
  { id: 'about', label: 'Опыт' },
  { id: 'prices', label: 'Цены' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { icon: 'ScanLine', title: 'Компьютерная диагностика', desc: 'Считывание ошибок ЭБУ, проверка датчиков и шин CAN.' },
  { icon: 'BatteryCharging', title: 'Стартер и генератор', desc: 'Диагностика зарядки, замена щёток, реле и АКБ на месте.' },
  { icon: 'Cable', title: 'Проводка и КЗ', desc: 'Поиск обрывов, коротких замыканий, ремонт жгутов.' },
  { icon: 'KeyRound', title: 'Иммобилайзер и ключи', desc: 'Привязка ключей, сброс ошибок противоугонных систем.' },
  { icon: 'Lightbulb', title: 'Свет и оптика', desc: 'Ремонт фар, поворотников, доводчиков и подсветки.' },
  { icon: 'Cpu', title: 'Установка оборудования', desc: 'Сигнализации, камеры, парктроники, реле-распределители.' },
];

const WORKS = [
  { car: 'Toyota Camry', task: 'Не заводился — нашли обрыв в косе ЭБУ', tag: 'Проводка' },
  { car: 'Volkswagen Passat', task: 'Ошибка иммобилайзера, привязали новый ключ', tag: 'Ключи' },
  { car: 'Kia Rio', task: 'Падало напряжение — замена реле-регулятора', tag: 'Генератор' },
  { car: 'BMW X5', task: 'Глючила приборка, восстановили шину CAN', tag: 'Диагностика' },
];

const REVIEWS = [
  { name: 'Дмитрий', car: 'Hyundai Solaris', text: 'Приехал через 25 минут, нашёл причину за полчаса. Машина завелась. Огонь!', rating: 5 },
  { name: 'Анна', car: 'Renault Logan', text: 'Честно сказал, что менять, а что нет. Никакого развода. Рекомендую.', rating: 5 },
  { name: 'Сергей', car: 'Ford Focus', text: 'Спас в ночи, когда сел аккумулятор и не открывались двери. Профи.', rating: 5 },
];

const PRICES = [
  { name: 'Компьютерная диагностика', price: 'от 1 500 ₽' },
  { name: 'Поиск короткого замыкания', price: 'от 2 000 ₽' },
  { name: 'Диагностика стартера/генератора', price: 'от 1 200 ₽' },
  { name: 'Привязка ключа / иммобилайзер', price: 'от 2 500 ₽' },
  { name: 'Ремонт проводки (за участок)', price: 'от 1 800 ₽' },
  { name: 'Выезд по городу', price: 'Бесплатно' },
];

const STATS = [
  { value: '12', label: 'лет опыта' },
  { value: '4500+', label: 'выездов' },
  { value: '30', label: 'минут до вас' },
  { value: '60', label: 'дней гарантии' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-md bg-primary text-primary-foreground">
              <Icon name="Zap" size={20} />
            </span>
            <span className="font-display text-2xl font-700 tracking-wide">ВОЛЬТ</span>
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm font-500 text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button
            onClick={() => scrollTo('contacts')}
            className="hidden md:inline-flex font-display tracking-wide font-600"
          >
            <Icon name="Phone" size={16} className="mr-1" /> Вызвать
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background animate-float-up">
            <div className="container flex flex-col py-4 gap-3">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-left py-2 font-500 uppercase tracking-wide text-muted-foreground"
                >
                  {n.label}
                </button>
              ))}
              <Button onClick={() => scrollTo('contacts')} className="font-display tracking-wide mt-2">
                Вызвать мастера
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-16 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>
        <div className="container relative py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 bg-secondary/10 text-secondary text-sm font-500 mb-6 animate-float-up">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-ring" />
              Выездная автоэлектрика 24/7
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-700 leading-[0.95] uppercase animate-float-up" style={{ animationDelay: '0.1s' }}>
              Авто не заводится?
              <br />
              <span className="text-primary text-glow-yellow">Приедем за 30 минут</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl animate-float-up" style={{ animationDelay: '0.2s' }}>
              Профессиональная диагностика и ремонт автоэлектрики у вас во дворе. Современное оборудование, честная цена и гарантия на каждую работу.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 animate-float-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" onClick={() => scrollTo('contacts')} className="font-display text-lg tracking-wide font-600 glow-yellow h-14 px-8">
                <Icon name="Wrench" size={20} className="mr-2" /> Вызвать мастера
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('prices')} className="font-display text-lg tracking-wide h-14 px-8 border-secondary/50 text-secondary hover:bg-secondary/10 hover:text-secondary">
                Узнать цены
              </Button>
            </div>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl animate-float-up" style={{ animationDelay: '0.4s' }}>
              {STATS.map((s) => (
                <div key={s.label} className="border-l-2 border-primary pl-4">
                  <div className="font-display text-3xl font-700 text-primary">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="container">
          <SectionHead kicker="Что я делаю" title="Услуги диагностики и ремонта" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group relative p-7 rounded-xl bg-card border border-border hover:border-primary/60 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/15 transition-colors" />
                <span className="relative grid place-items-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform">
                  <Icon name={s.icon} size={28} />
                </span>
                <h3 className="font-display text-xl font-600 uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="py-24 bg-card/40 border-y border-border">
        <div className="container">
          <SectionHead kicker="Портфолио" title="Примеры выполненных работ" />
          <div className="grid sm:grid-cols-2 gap-5 mt-12">
            {WORKS.map((w) => (
              <div key={w.car} className="flex gap-5 p-6 rounded-xl bg-background border border-border hover:border-secondary/50 transition-colors">
                <span className="shrink-0 grid place-items-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary">
                  <Icon name="CircleCheckBig" size={24} />
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-lg font-600 uppercase tracking-wide">{w.car}</h3>
                    <span className="text-xs px-2 py-0.5 rounded bg-primary/15 text-primary font-500">{w.tag}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{w.task}</p>
                </div>
              </div>
            ))}
          </div>

          {/* REVIEWS */}
          <h3 className="font-display text-2xl font-600 uppercase tracking-wide mt-16 mb-8 flex items-center gap-3">
            <Icon name="MessageSquareQuote" className="text-primary" /> Отзывы клиентов
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="p-6 rounded-xl bg-background border border-border">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4">«{r.text}»</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-display font-700">
                    {r.name[0]}
                  </span>
                  <div>
                    <div className="font-600 text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.car}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHead kicker="Квалификация" title="12 лет под капотом" align="left" />
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Меня зовут Алексей — выездной автоэлектрик-диагност. За 12 лет починил более 4500 машин: от бюджетных седанов до премиум-внедорожников. Работаю с любыми марками, читаю схемы как открытую книгу.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Профессиональное оборудование: осциллограф, мотор-тестер, дилерские сканеры',
                'Честная диагностика — называю только то, что реально нужно ремонтировать',
                'Гарантия 60 дней на все выполненные работы',
                'Выезд по городу бесплатно, работаю без выходных',
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Icon name="BadgeCheck" className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 stripe-accent opacity-20 rounded-2xl blur-sm" />
            <div className="relative rounded-2xl border border-border bg-card p-8 glow-blue">
              <Icon name="Award" size={48} className="text-primary mb-4" />
              <div className="font-display text-3xl font-700 uppercase mb-2">Сертифицированный мастер</div>
              <p className="text-muted-foreground text-sm">
                Регулярно повышаю квалификацию и работаю с актуальными протоколами диагностики современных авто.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {STATS.slice(0, 2).map((s) => (
                  <div key={s.label} className="rounded-lg bg-background border border-border p-4 text-center">
                    <div className="font-display text-3xl font-700 text-secondary">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 bg-card/40 border-y border-border">
        <div className="container">
          <SectionHead kicker="Прайс-лист" title="Стоимость услуг" />
          <div className="max-w-3xl mx-auto mt-12 rounded-xl border border-border overflow-hidden">
            {PRICES.map((p, i) => (
              <div
                key={p.name}
                className={`flex items-center justify-between gap-4 px-6 py-5 ${i % 2 ? 'bg-background' : 'bg-card'} hover:bg-primary/5 transition-colors`}
              >
                <span className="font-500">{p.name}</span>
                <span className="font-display text-lg font-700 text-primary whitespace-nowrap">{p.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            Точную стоимость назову после диагностики. Без скрытых платежей.
          </p>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto mt-12">
            <AccordionItem value="1">
              <AccordionTrigger className="font-600">Сколько ждать приезда мастера?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">В среднем 30 минут по городу. В часы пик — до часа.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger className="font-600">Даёте ли вы гарантию?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">Да, 60 дней на все работы и установленные запчасти.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
              <AccordionTrigger className="font-600">Работаете ли вы с электромобилями?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">Да, провожу диагностику низковольтных систем гибридов и электрокаров.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHead kicker="Связаться" title="Вызвать мастера" align="left" />
            <p className="text-muted-foreground mt-6">Оставьте заявку или позвоните — отвечу в течение пары минут.</p>
            <div className="mt-8 space-y-4">
              <ContactRow icon="Phone" label="Телефон" value="+7 (900) 123-45-67" />
              <ContactRow icon="MapPin" label="Адрес" value="г. Москва, выезд по всему городу" />
              <ContactRow icon="Clock" label="Часы работы" value="Ежедневно, круглосуточно" />
              <ContactRow icon="Mail" label="Почта" value="master@volt-auto.ru" />
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative rounded-2xl border border-border bg-card p-8"
          >
            <div className="absolute left-0 top-0 h-1 w-full overflow-hidden rounded-t-2xl">
              <div className="h-full w-1/3 bg-primary animate-scan" />
            </div>
            <h3 className="font-display text-2xl font-600 uppercase tracking-wide mb-6">Форма заказа</h3>
            <div className="space-y-4">
              <Input placeholder="Ваше имя" className="h-12 bg-background" />
              <Input placeholder="Телефон" type="tel" className="h-12 bg-background" />
              <Input placeholder="Марка и модель авто" className="h-12 bg-background" />
              <Textarea placeholder="Опишите проблему" rows={4} className="bg-background resize-none" />
              <Button type="submit" size="lg" className="w-full font-display text-lg tracking-wide font-600 glow-yellow h-14">
                <Icon name="Send" size={18} className="mr-2" /> Отправить заявку
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-8 h-8 rounded-md bg-primary text-primary-foreground">
              <Icon name="Zap" size={16} />
            </span>
            <span className="font-display text-xl font-700 tracking-wide">ВОЛЬТ</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Выездной автоэлектрик-диагност</p>
        </div>
      </footer>
    </div>
  );
};

const SectionHead = ({
  kicker,
  title,
  align = 'center',
}: {
  kicker: string;
  title: string;
  align?: 'center' | 'left';
}) => (
  <div className={align === 'center' ? 'text-center' : ''}>
    <div className={`inline-flex items-center gap-2 text-secondary text-sm font-600 uppercase tracking-widest ${align === 'center' ? 'justify-center' : ''}`}>
      <span className="w-6 h-px bg-secondary" /> {kicker}
    </div>
    <h2 className="font-display text-4xl sm:text-5xl font-700 uppercase tracking-tight mt-3">{title}</h2>
  </div>
);

const ContactRow = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
    <span className="grid place-items-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
      <Icon name={icon} size={22} />
    </span>
    <div>
      <div className="text-xs text-muted-foreground uppercase tracking-wide">{label}</div>
      <div className="font-600">{value}</div>
    </div>
  </div>
);

export default Index;
