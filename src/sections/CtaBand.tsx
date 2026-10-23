import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { RevealDiv } from '@/components/Reveal';
import { waLink } from '@/data';
import { WhatsAppIcon } from './Header';

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--pine)] py-20">
      <div className="pattern-dots-dark absolute inset-0" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 text-center md:px-8">
        <RevealDiv>
          <h2 className="max-w-3xl font-amiri text-4xl font-bold leading-[1.6] text-[color:var(--white)] md:text-5xl">
            لا تنتظر أن يشتدّ النزاع…
            <span className="text-[color:var(--gold)]"> الاستشارة المبكرة توفر عليكم سنوات</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[rgba(255,253,247,0.78)]">
            رأي قانوني واحد اليوم قد يغيّر مجرى ملفكم كله غداً. تواصلوا معنا وسنرد عليكم في أقرب وقت.
          </p>
        </RevealDiv>
        <RevealDiv delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--gold)] px-8 py-4 text-base font-bold text-[color:var(--ink)] transition-all hover:bg-[color:var(--white)]"
            >
              اطلب موعداً الآن
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
            <a
              href={waLink('مرحباً، أود الاستفسار عن موعد استشارة قانونية.')}
              target="_blank"
              rel="noreferrer"
              className="wa-flash inline-flex items-center gap-3 rounded-full bg-[#25d366] px-8 py-4 text-base font-bold text-[#0b3d24] transition-transform hover:scale-[1.04]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              راسلنا عبر واتساب
            </a>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
