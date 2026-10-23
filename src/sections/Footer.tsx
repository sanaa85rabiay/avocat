import { Link } from 'react-router';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Logo from '@/components/Logo';
import { NAV, BRAND, AREAS, waLink } from '@/data';
import { WhatsAppIcon } from './Header';

export default function Footer() {
  return (
    <footer className="pattern-dots-dark bg-[color:var(--ink)] text-[color:var(--white)]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 leading-relaxed text-[rgba(255,253,247,0.7)]">
              مكتب محاماة واستشارات قانونية بالدار البيضاء. ندافع عن حقوقكم في الملفات المدنية والجنائية
              والتجارية والأسرية والعقارية والاجتماعية، بإتقان وسرية ومصارحة.
            </p>
            <p className="mt-4 font-latin text-sm italic tracking-wide text-[color:var(--gold)]">
              La justice commence par un conseil avisé.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-amiri text-xl font-bold text-[color:var(--gold)]">روابط سريعة</h3>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.path}>
                  <Link to={n.path} className="text-[rgba(255,253,247,0.75)] transition-colors hover:text-[color:var(--gold)]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-amiri text-xl font-bold text-[color:var(--gold)]">مجالات الممارسة</h3>
            <ul className="space-y-3">
              {AREAS.map((a) => (
                <li key={a.id}>
                  <Link
                    to={`/domaines#${a.id}`}
                    className="text-[rgba(255,253,247,0.75)] transition-colors hover:text-[color:var(--gold)]"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-amiri text-xl font-bold text-[color:var(--gold)]">تواصل معنا</h3>
            <ul className="space-y-4 text-[rgba(255,253,247,0.75)]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[color:var(--gold)]" />
                <span>{BRAND.address}</span>
              </li>
              <li>
                <a href={`tel:${BRAND.phoneLocal.replace(/\s/g, '')}`} className="flex items-center gap-3 transition-colors hover:text-[color:var(--gold)]">
                  <Phone className="h-5 w-5 shrink-0 text-[color:var(--gold)]" />
                  <span dir="ltr">{BRAND.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 transition-colors hover:text-[color:var(--gold)]">
                  <Mail className="h-5 w-5 shrink-0 text-[color:var(--gold)]" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[color:var(--gold)]" />
                <span>
                  الاثنين — الجمعة: 9:00 — 18:30
                  <br />
                  السبت: 10:00 — 14:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-[rgba(201,164,92,0.2)] pt-8 lg:flex-row">
          <div className="text-center lg:text-start">
            <p className="text-sm text-[rgba(255,253,247,0.55)]">
              © {new Date().getFullYear()} مكتب المحامي محمد العربي — جميع الحقوق محفوظة.
            </p>
            <p className="mt-2 text-xs text-[rgba(255,253,247,0.4)]">
              هذا الموقع افتراضي بغرض تقريب صورة المواقع الإلكترونية التي نعدها للسادة المحامين.
            </p>
          </div>
          <a
            href={waLink('مرحباً، أود الاستفسار عن موعد استشارة قانونية.')}
            target="_blank"
            rel="noreferrer"
            className="wa-flash inline-flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-bold text-[#0b3d24] transition-transform hover:scale-[1.04]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            استشارة عبر واتساب
          </a>
        </div>
      </div>
    </footer>
  );
}
