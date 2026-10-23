import { useEffect, useRef, useState } from 'react';
import { RevealDiv } from '@/components/Reveal';
import { STATS } from '@/data';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          io.disconnect();
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-kufi text-5xl font-bold text-[color:var(--gold)] md:text-6xl">
      {n.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-[rgba(201,164,92,0.25)] bg-[color:var(--pine)] py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 md:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <RevealDiv key={s.label} delay={0.07 * i} className="text-center">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-3 font-bold text-[rgba(255,253,247,0.85)]">{s.label}</p>
          </RevealDiv>
        ))}
      </div>
    </section>
  );
}
