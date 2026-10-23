import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import { RevealDiv } from '@/components/Reveal';
import Testimonials from '@/sections/Testimonials';
import CtaBand from '@/sections/CtaBand';
import { VALUES, TIMELINE, BRAND } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function Cabinet() {
  useReveal();
  return (
    <>
      <PageHero
        video="/media/cabinet.mp4"
        poster="/media/cabinet-poster.jpg"
        kicker="المكتب"
        title="مكتب صغير في حجمه، كبير في ملفاته"
        desc="قصة مكتب العربي للمحاماة، وقيم لا نساوم عليها منذ اليوم الأول."
      />

      {/* القصة */}
      <section className="bg-[color:var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHead
                kicker="قصتنا"
                title="من قاعات المحاكم الكبرى إلى مكتبنا الخاص"
                desc="درس المحامي محمد العربي أصول المهنة لدى كبار محامي الدار البيضاء، وترافع في مئات القضايا أمام المحاكم الابتدائية والاستئنافية، قبل أن يؤسس في 2018 مكتبه الخاص برؤية واضحة: مكتب يقيس نجاحه لا بعدد الجلسات، بل بما يسترده الموكلون من حقوق."
              />
              <RevealDiv delay={0.15}>
                <p className="leading-relaxed text-[color:var(--ink-soft)]">
                  اليوم، يستقبل المكتب بفريقه القضايا من كل جهات المملكة، ويحتفظ بقاعدة موكلين ثابتة من
                  الأفراد والمقاولات التي تستشيرنا قبل أن تخطو أي خطوة قانونية. {BRAND.bar}، ويشارك
                  بانتظام في الملتقيات والتكوينات المهنية.
                </p>
              </RevealDiv>
              <RevealDiv delay={0.25}>
                <Link
                  to="/domaines"
                  className="group mt-8 inline-flex items-center gap-3 font-bold text-[color:var(--pine)] transition-colors hover:text-[color:var(--gold-deep)]"
                >
                  تصفحوا مجالات الممارسة
                  <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                </Link>
              </RevealDiv>
            </div>
            <RevealDiv delay={0.1} className="relative">
              <div className="absolute -inset-4 rounded-[2rem] border border-[color:var(--sand-line)]" />
              <div className="group relative overflow-hidden rounded-[1.6rem] shadow-[0_30px_60px_rgba(16,31,27,0.22)]">
                <img
                  src="/media/portrait.jpg"
                  alt="المحامي محمد العربي في مكتبه بالدار البيضاء"
                  className="img-zoom aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* القيم */}
      <section className="pattern-dots-dark bg-[color:var(--ink)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHead
            dark
            center
            kicker="قيمنا"
            title="أربعة مبادئ تُكتب في أول صفحة من كل ملف"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <RevealDiv key={v.title} delay={0.07 * i}>
                <div className="h-full rounded-3xl border border-[rgba(201,164,92,0.18)] bg-[rgba(255,253,247,0.04)] p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(201,164,92,0.5)]">
                  <span className="font-kufi text-4xl font-bold text-[color:var(--gold)]">«</span>
                  <h3 className="mb-3 font-amiri text-2xl font-bold text-[color:var(--white)]">{v.title}</h3>
                  <p className="leading-relaxed text-[rgba(255,253,247,0.7)]">{v.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* المسار المهني */}
      <section className="bg-[color:var(--parchment)] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionHead center kicker="المسار المهني" title="محطات كوّنت المحامي الذي يستقبلكم اليوم" />
          <div className="relative space-y-8 border-s-2 border-[color:var(--gold)] ps-8">
            {TIMELINE.map((t, i) => (
              <RevealDiv key={t.year} delay={0.08 * i}>
                <div className="relative">
                  <span className="absolute -start-[41px] top-1 h-4 w-4 rounded-full border-4 border-[color:var(--paper)] bg-[color:var(--gold)]" />
                  <p className="font-kufi text-2xl font-bold text-[color:var(--gold-deep)]">{t.year}</p>
                  <h3 className="mt-1 font-amiri text-2xl font-bold text-[color:var(--ink)]">{t.title}</h3>
                  <p className="mt-2 leading-relaxed text-[color:var(--ink-soft)]">{t.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
