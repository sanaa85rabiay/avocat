import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import { NAV, BRAND, waLink } from '@/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-[rgba(201,164,92,0.22)] transition-all duration-500 ${
          solid
            ? 'bg-[rgba(255,253,247,0.94)] shadow-[0_10px_40px_rgba(16,31,27,0.10)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
          <Link to="/" aria-label="الصفحة الرئيسية" className={solid ? '' : '[&_*]:!text-[color:var(--white)]'}>
            <Logo variant={solid ? 'dark' : 'light'} />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="التنقل الرئيسي">
            {NAV.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `link-gold text-sm font-bold transition-colors ${
                    solid
                      ? isActive
                        ? 'text-[color:var(--ink)]'
                        : 'text-[color:var(--ink-soft)] hover:text-[color:var(--ink)]'
                      : isActive
                        ? 'text-[color:var(--gold)]'
                        : 'text-[rgba(255,253,247,0.85)] hover:text-[color:var(--white)]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BRAND.phoneLocal.replace(/\s/g, '')}`}
              className={`hidden items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-colors xl:inline-flex ${
                solid
                  ? 'border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--gold)]'
                  : 'border-[rgba(255,253,247,0.5)] text-[color:var(--white)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span dir="ltr">{BRAND.phoneDisplay}</span>
            </a>
            <a
              href={waLink('مرحباً، أود الاستفسار عن موعد استشارة قانونية.')}
              target="_blank"
              rel="noreferrer"
              className="wa-flash hidden items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-bold text-[#0b3d24] transition-transform hover:scale-[1.04] sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              واتساب
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={open}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
                solid
                  ? 'border-[color:var(--sand-line)] text-[color:var(--ink)]'
                  : 'border-[rgba(255,253,247,0.4)] text-[color:var(--white)]'
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* قائمة الموبايل ملء الشاشة */}
      <div
        className={`pattern-dots-dark fixed inset-0 z-40 flex flex-col justify-between bg-[rgba(16,31,27,0.97)] px-6 pb-10 pt-28 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-2" aria-label="قائمة الهاتف">
          {NAV.map((item, i) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `border-b border-[rgba(201,164,92,0.15)] py-4 font-amiri text-3xl font-bold transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                } ${
                  isActive ? 'text-[color:var(--gold)]' : 'text-[color:var(--white)] hover:text-[color:var(--gold)]'
                }`
              }
              style={{ transitionDelay: `${0.06 * i + 0.1}s` }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div
          className={`flex flex-col gap-3 transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <a
            href={waLink('مرحباً، أود الاستفسار عن موعد استشارة قانونية.')}
            target="_blank"
            rel="noreferrer"
            className="wa-flash flex items-center justify-center gap-2 rounded-full bg-[#25d366] py-4 text-base font-bold text-[#0b3d24]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            تحدث معنا عبر واتساب
          </a>
          <a
            href={`tel:${BRAND.phoneLocal.replace(/\s/g, '')}`}
            className="flex items-center justify-center gap-2 rounded-full border border-[rgba(255,253,247,0.3)] py-4 text-base font-bold text-[color:var(--white)]"
          >
            <Phone className="h-5 w-5 text-[color:var(--gold)]" />
            <span dir="ltr">{BRAND.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </>
  );
}

export function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 9.88 9.9c0 5.44-4.43 9.87-9.88 9.87m8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41" />
    </svg>
  );
}
