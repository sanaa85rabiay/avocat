import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { RevealDiv } from '@/components/Reveal';
import Method from '@/sections/Method';
import CtaBand from '@/sections/CtaBand';
import { AREAS } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function Domaines() {
  useReveal();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <>
      <PageHero
        video="/media/domaines.mp4"
        poster="/media/domaines-poster.jpg"
        kicker="مجالات الممارسة"
        title="في كل قضية، هناك حق يستحق أن يُدافع عنه"
        desc="ستة مجالات نمارسها يومياً أمام المحاكم المغربية — اختر مجالك وتعرف على كيفية مرافقتنا لك."
      />

      {/* المجالات التفصيلية */}
      <section className="bg-[color:var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl space-y-20 px-5 md:px-8">
          {AREAS.map((a) => (
            <div
              key={a.id}
              id={a.id}
              className="grid scroll-mt-32 items-start gap-10 lg:grid-cols-5"
            >
              <RevealDiv className="lg:col-span-2">
                <p className="font-kufi text-7xl font-bold text-[rgba(16,31,27,0.07)]">{a.num}</p>
                <h2 className="mt-2 font-amiri text-4xl font-bold text-[color:var(--ink)] md:text-5xl">
                  {a.title}
                </h2>
                <p className="mt-4 text-lg font-bold text-[color:var(--gold-deep)]">{a.short}</p>
                <div className="mt-4 h-1 w-24 bg-[color:var(--gold)]" />
              </RevealDiv>
              <RevealDiv delay={0.1} className="lg:col-span-3">
                <p className="leading-loose text-[color:var(--ink-soft)]">{a.desc}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 rounded-xl bg-[color:var(--white)] p-4 text-sm font-bold text-[color:var(--ink)] shadow-[0_8px_24px_rgba(16,31,27,0.06)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--pine)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </RevealDiv>
            </div>
          ))}
        </div>
      </section>

      {/* المنهجية */}
      <div className="border-t border-[rgba(16,31,27,0.06)]">
        <Method />
      </div>

      <CtaBand />
    </>
  );
}
