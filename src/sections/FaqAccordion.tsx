import { useState } from 'react';
import { Plus } from 'lucide-react';
import { RevealDiv } from '@/components/Reveal';
import { FAQS } from '@/data';

export default function FaqAccordion({ items = FAQS }: { items?: typeof FAQS }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <RevealDiv key={i} delay={0.05 * i}>
            <div
              className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                isOpen ? 'border-[color:var(--gold)] bg-[color:var(--white)]' : 'border-[rgba(16,31,27,0.1)] bg-[rgba(255,253,247,0.6)]'
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-6 text-start"
              >
                <span className="font-amiri text-xl font-bold text-[color:var(--ink)]">{f.q}</span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                    isOpen ? 'rotate-45 bg-[color:var(--gold)] text-[color:var(--ink)]' : 'bg-[color:var(--ink)] text-[color:var(--gold)]'
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <div
                className={`grid transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? '[grid-template-rows:1fr] opacity-100' : '[grid-template-rows:0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-relaxed text-[color:var(--ink-soft)]">{f.a}</p>
                </div>
              </div>
            </div>
          </RevealDiv>
        );
      })}
    </div>
  );
}
