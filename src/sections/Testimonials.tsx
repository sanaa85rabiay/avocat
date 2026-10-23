import { useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import { RevealDiv } from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { TESTIMONIALS } from '@/data';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const current = TESTIMONIALS[idx];

  return (
    <section
      className="bg-[color:var(--paper)] py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHead
          center
          kicker="شهادات موكلينا"
          title="قالوا عنّا بعد أن وقفنا إلى جانبهم"
        />
        <RevealDiv>
          <div className="relative rounded-[2rem] border border-[rgba(16,31,27,0.08)] bg-[color:var(--white)] p-10 shadow-[0_24px_60px_rgba(16,31,27,0.10)] md:p-14">
            <Quote className="absolute -top-6 start-10 h-12 w-12 rounded-2xl bg-[color:var(--gold)] p-2.5 text-[color:var(--ink)]" />
            <div key={idx} className="reveal in">
              <p className="min-h-28 font-amiri text-2xl font-bold leading-relaxed text-[color:var(--ink)] md:text-[1.7rem]">
                «{current.text}»
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--ink)] font-amiri text-xl font-bold text-[color:var(--gold)]">
                    {current.name.replace('السيدة ', '').replace('السيد ', '').charAt(0)}
                  </span>
                  <div>
                    <p className="font-bold text-[color:var(--ink)]">{current.name}</p>
                    <p className="text-sm text-[color:var(--ink-soft)]">{current.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                    aria-label="الشهادة السابقة"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--sand-line)] text-[color:var(--ink)] transition-colors hover:bg-[color:var(--ink)] hover:text-[color:var(--gold)]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)}
                    aria-label="الشهادة التالية"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--sand-line)] text-[color:var(--ink)] transition-colors hover:bg-[color:var(--ink)] hover:text-[color:var(--gold)]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`الشهادة ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === idx ? 'w-8 bg-[color:var(--gold)]' : 'w-2 bg-[rgba(16,31,27,0.15)] hover:bg-[rgba(16,31,27,0.3)]'
                  }`}
                />
              ))}
            </div>
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
