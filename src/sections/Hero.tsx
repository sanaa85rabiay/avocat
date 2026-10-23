import { Link } from 'react-router';
import { ArrowLeft, Scale } from 'lucide-react';
import { RevealDiv } from '@/components/Reveal';
import { BRAND } from '@/data';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[color:var(--ink)]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/media/consultation.mp4"
        poster="/media/consultation-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-l from-[rgba(16,31,27,0.92)] via-[rgba(16,31,27,0.6)] to-[rgba(16,31,27,0.35)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(16,31,27,0.9)] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-36 md:px-8">
        <RevealDiv>
          <p className="mb-6 hidden items-center gap-3 rounded-full border border-[rgba(201,164,92,0.4)] bg-[rgba(16,31,27,0.5)] px-5 py-2 text-sm font-bold text-[color:var(--gold)] backdrop-blur-sm md:inline-flex">
            <Scale className="h-4 w-4" />
            {BRAND.bar}
          </p>
        </RevealDiv>
        <RevealDiv delay={0.1}>
          <h1 className="max-w-4xl font-amiri text-5xl font-bold leading-[1.6] text-[color:var(--white)] md:text-7xl md:leading-[1.55]">
            حين يتعلق الأمر
            <span className="text-[color:var(--gold)]"> بحقوقكم،</span>
            <br />
            لا نقبل إلا بالإنصاف الكامل
          </h1>
        </RevealDiv>
        <RevealDiv delay={0.2}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[rgba(255,253,247,0.82)] md:text-xl">
            مكتب المحامي محمد العربي بالدار البيضاء يقف إلى جانبكم في أصعب لحظات النزاع: دفاع جنائي متين،
            ترافع مدني دقيق، واستشارات تجارية وأسرية وعقارية تحمي ما تملكون ومن تحبون.
          </p>
        </RevealDiv>
        <RevealDiv delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--gold)] px-8 py-4 text-base font-bold text-[color:var(--ink)] transition-all hover:bg-[color:var(--white)]"
            >
              احجز استشارتك الأولى
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              to="/domaines"
              className="inline-flex items-center gap-3 rounded-full border border-[rgba(255,253,247,0.45)] px-8 py-4 text-base font-bold text-[color:var(--white)] transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              اكتشف مجالات الممارسة
            </Link>
          </div>
        </RevealDiv>
        <RevealDiv delay={0.4}>
          <p className="mt-10 font-latin text-lg italic tracking-wide text-[rgba(201,164,92,0.9)]">
            Cabinet El Arabi — Avocats & Conseils, Casablanca
          </p>
        </RevealDiv>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="h-10 w-6 rounded-full border-2 border-[rgba(255,253,247,0.4)] p-1">
          <div className="h-2 w-full animate-bounce rounded-full bg-[color:var(--gold)]" />
        </div>
      </div>
    </section>
  );
}
