import { Link } from 'react-router';
import { ArrowLeft, Award, BookOpen, Landmark } from 'lucide-react';
import { RevealDiv } from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';

const HIGHLIGHTS = [
  { icon: Landmark, title: 'عضوية مهنية', desc: 'عضو فاعل في جمعية هيئة المحامين بالمغرب' },
  { icon: Award, title: 'اعترافات وشواهد', desc: 'شهادات تقدير في الترافع من نقابة المحامين' },
  { icon: BookOpen, title: 'تكوين مستمر', desc: 'مواكبة دائمة لأحدث المستجدات التشريعية والقضائية' },
];

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--paper)] py-24 md:py-32">
      <div className="pattern-dots pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              kicker="عن المكتب"
              title="خمس عشرة سنة من الدفاع عن الحق، والكلمة عندنا أمانة"
              desc="بدأ المحامي محمد العربي مساره في قاعات المحاكم باحثاً عن الإنصاف، وأسس مكتبه الخاص في قلب الدار البيضاء ليكون ملاذاً لكل من يبحث عن رأي قانوني صريح ودفاع لا يهادن. نؤمن أن المحاماة قبل أن تكون مهنة، هي رسالة: أن يصل الحق إلى أصحابه."
            />
            <RevealDiv delay={0.15}>
              <ul className="space-y-4">
                {HIGHLIGHTS.map((h) => (
                  <li key={h.title} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--ink)] text-[color:var(--gold)]">
                      <h.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <strong className="block text-lg text-[color:var(--ink)]">{h.title}</strong>
                      <span className="text-[color:var(--ink-soft)]">{h.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </RevealDiv>
            <RevealDiv delay={0.25}>
              <Link
                to="/cabinet"
                className="group mt-9 inline-flex items-center gap-3 font-bold text-[color:var(--pine)] transition-colors hover:text-[color:var(--gold-deep)]"
              >
                تعرّف أكثر على المكتب
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Link>
            </RevealDiv>
          </div>

          <RevealDiv delay={0.1} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-[color:var(--sand-line)]" />
            <div className="group relative overflow-hidden rounded-[1.6rem] shadow-[0_30px_60px_rgba(16,31,27,0.22)]">
              <img
                src="/media/office.jpg"
                alt="المحامي محمد العربي أثناء العمل في مكتبه بالدار البيضاء"
                className="img-zoom aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(16,31,27,0.92)] to-transparent p-6 pt-16">
                <p className="font-amiri text-2xl font-bold text-[color:var(--white)]">المحامي محمد العربي</p>
                <p className="mt-1 text-sm text-[rgba(255,253,247,0.75)]">{HIGHLIGHTS[0].desc}</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -start-6 rounded-2xl bg-[color:var(--gold)] px-6 py-4 shadow-xl md:-start-10">
              <p className="font-kufi text-3xl font-bold text-[color:var(--ink)]">15+</p>
              <p className="text-sm font-bold text-[rgba(16,31,27,0.75)]">سنة من الممارسة</p>
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}
