import { Scale } from 'lucide-react';
import { MARQUEE_ITEMS } from '@/data';

export default function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div dir="rtl" className="overflow-hidden border-y border-[rgba(201,164,92,0.25)] bg-[color:var(--ink)] py-5">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="mx-6 flex items-center gap-6 whitespace-nowrap font-amiri text-xl font-bold text-[rgba(255,253,247,0.85)]"
              >
                {item}
                <Scale className="h-4 w-4 text-[color:var(--gold)]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
