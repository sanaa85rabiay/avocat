import { Link } from 'react-router';
import { ArrowLeft, Scale, Gavel, Briefcase, HeartHandshake, Building2, Users } from 'lucide-react';
import { RevealDiv } from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { AREAS } from '@/data';

const ICONS = [Scale, Gavel, Briefcase, HeartHandshake, Building2, Users];

export default function AreasGrid({ limit }: { limit?: number }) {
  const items = limit ? AREAS.slice(0, limit) : AREAS;
  return (
    <section className="bg-[color:var(--parchment)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          center
          kicker="مجالات الممارسة"
          title="تخصصات نُتقنها، وقضايا نحملها كما نحمل أمانة"
          desc="ستة مجالات رئيسية نغطي بها أوسع نطاق من احتياجاتكم القانونية، بفريق يدرس كل ملف على حدة."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((area, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <RevealDiv key={area.id} delay={0.07 * i}>
                <Link
                  to={`/domaines#${area.id}`}
                  className="group flex h-full flex-col rounded-3xl border border-[rgba(16,31,27,0.08)] bg-[color:var(--white)] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--gold)] hover:shadow-[0_24px_50px_rgba(16,31,27,0.14)]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--ink)] text-[color:var(--gold)] transition-colors duration-500 group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--ink)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-kufi text-4xl font-bold text-[rgba(16,31,27,0.1)] transition-colors duration-500 group-hover:text-[rgba(201,164,92,0.5)]">
                      {area.num}
                    </span>
                  </div>
                  <h3 className="mb-3 font-amiri text-2xl font-bold text-[color:var(--ink)]">{area.title}</h3>
                  <p className="mb-6 flex-1 leading-relaxed text-[color:var(--ink-soft)]">{area.short}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[color:var(--pine)] transition-colors group-hover:text-[color:var(--gold-deep)]">
                    اقرأ المزيد
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </span>
                </Link>
              </RevealDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
