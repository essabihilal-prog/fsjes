import { useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { announcements, navigation, programs, quickActions, resources } from './data/content';

const i18n = {
  fr: {
    title: 'Faculté des Sciences Juridiques, Économiques et Sociales',
    subtitle: 'Kelâa des Sraghna - Université Cadi Ayyad',
    lead: 'Plateforme académique moderne, claire et bilingue au service des étudiants et des enseignants.',
    search: 'Rechercher une information, un programme ou une annonce…',
    sections: {
      programs: 'Formations',
      announcements: 'Dernières annonces',
      resources: 'Ressources étudiantes',
      ds: 'Design system institutionnel',
      ia: 'Architecture de l’information',
      dashboard: 'Espace étudiant (prototype)'
    }
  },
  ar: {
    title: 'كلية العلوم القانونية والاقتصادية والاجتماعية',
    subtitle: 'قلعة السراغنة - جامعة القاضي عياض',
    lead: 'منصة أكاديمية حديثة وواضحة ثنائية اللغة في خدمة الطلبة والأساتذة.',
    search: 'ابحث عن معلومة أو تكوين أو إعلان…',
    sections: {
      programs: 'التكوينات',
      announcements: 'آخر الإعلانات',
      resources: 'موارد الطلبة',
      ds: 'نظام التصميم المؤسساتي',
      ia: 'هندسة المعلومات',
      dashboard: 'فضاء الطالب (نموذج أولي)'
    }
  }
};

const filters = {
  fr: ['Tous', 'Examens', 'Admissions', 'Événements'],
  ar: ['الكل', 'الامتحانات', 'الولوج', 'الفعاليات']
};

export default function App() {
  const [lang, setLang] = useState('fr');
  const [activeFilter, setActiveFilter] = useState(0);

  const rtl = lang === 'ar';
  const t = i18n[lang];

  const filteredAnnouncements = useMemo(() => {
    if (activeFilter === 0) return announcements[lang];
    return announcements[lang].filter((item) => item.type === filters[lang][activeFilter]);
  }, [lang, activeFilter]);

  return (
    <div className={rtl ? 'font-arabic' : 'font-sans'} dir={rtl ? 'rtl' : 'ltr'}>
      <Navbar navItems={navigation[lang]} lang={lang} onLangChange={setLang} rtl={rtl} />

      <main>
        <section className="bg-gradient-to-br from-brand.blue to-brand.blueLight text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-white/80">FSJESK</p>
            <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{t.title}</h1>
            <p className="mt-3 text-lg text-white/90">{t.subtitle}</p>
            <p className="mt-6 max-w-3xl text-white/90">{t.lead}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {quickActions[lang].map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className="rounded-xl bg-white px-5 py-3 font-semibold text-brand.blue shadow-soft hover:bg-brand.neutral"
                >
                  {action.label}
                </a>
              ))}
            </div>

            <label htmlFor="search" className="sr-only">Search</label>
            <input
              id="search"
              type="search"
              placeholder={t.search}
              className="mt-8 w-full max-w-2xl rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-brand.ink outline-none ring-brand.palm focus:ring"
            />
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-3 md:px-8">
          <Card title={t.sections.programs}>
            {programs[lang].map((program) => (
              <article key={program.title} className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-semibold text-brand.blue">{program.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{program.desc}</p>
              </article>
            ))}
          </Card>

          <Card title={t.sections.announcements}>
            <div className="mb-3 flex flex-wrap gap-2">
              {filters[lang].map((filter, index) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(index)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    activeFilter === index ? 'bg-brand.palm text-white' : 'bg-brand.neutral text-slate-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <ul className="space-y-3">
              {filteredAnnouncements.map((item) => (
                <li key={item.title} className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand.palm">{item.type}</p>
                  <p className="font-medium text-slate-800">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.date}</p>
                </li>
              ))}
            </ul>
          </Card>

          <Card title={t.sections.resources}>
            <ul className="space-y-2">
              {resources[lang].map((resource) => (
                <li key={resource} className="rounded-lg bg-brand.neutral px-3 py-2 text-sm text-slate-700">
                  {resource}
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl border border-dashed border-brand.blue p-4">
              <p className="font-semibold text-brand.blue">{t.sections.dashboard}</p>
              <p className="text-sm text-slate-600">Login, notes, absences et demandes administratives.</p>
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Card title={t.sections.ds}>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>Blue: #0C4A8A (RGB 12, 74, 138)</li>
                <li>Palm: #B9743A (RGB 185, 116, 58)</li>
                <li>Neutral: #F5F7FA | White: #FFFFFF</li>
                <li>Typography: Inter (FR) + Tajawal/Noto Sans Arabic (AR)</li>
                <li>8px spacing scale, 12-col responsive grid</li>
              </ul>
            </Card>
            <Card title={t.sections.ia}>
              <ol className="list-decimal space-y-1 ps-5 text-sm text-slate-700">
                <li>Home</li>
                <li>About</li>
                <li>Programs (Licence, Master, Doctorat)</li>
                <li>Departments</li>
                <li>Research</li>
                <li>Student Services</li>
                <li>News & Announcements</li>
                <li>Contact</li>
              </ol>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <h2 className="mb-4 text-lg font-semibold text-brand.blue">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
