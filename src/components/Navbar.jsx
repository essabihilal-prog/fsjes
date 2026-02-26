import { useState } from 'react';

export function Navbar({ navItems, lang, onLangChange, rtl }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-brand.blue text-white font-bold">F</div>
          <div>
            <p className="text-sm font-semibold text-brand.blue">FSJESK</p>
            <p className="text-xs text-slate-500">Université Cadi Ayyad</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-slate-700 hover:text-brand.blue">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onLangChange(lang === 'fr' ? 'ar' : 'fr')}
            className="rounded-lg border border-brand.blue px-3 py-1.5 text-sm font-semibold text-brand.blue"
            aria-label="Language switcher"
          >
            {lang === 'fr' ? 'AR' : 'FR'}
          </button>
          <button
            className="lg:hidden rounded-lg border border-slate-300 p-2"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden" dir={rtl ? 'rtl' : 'ltr'}>
          <ul className="space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand.neutral">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
