import { RevealDiv } from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import { METHOD } from '@/data';

export default function Method() {
  return (
    <section className="bg-[color:var(--paper)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          center
          kicker="منهجية العمل"
          title="أربع خطوات تفصلكم عن ملف محكم الإحكام"
          desc="منهج واضح من أول اجتماع إلى تنفيذ الحكم — تعرفون أين وقف الملف في كل لحظة."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {METHOD.map((m, i) => (
            <RevealDiv key={m.num} delay={0.08 * i}>
              <div className="group relative h-full rounded-3xl border border-[rgba(16,31,27,0.08)] bg-[color:var(--white)] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(16,31,27,0.14)]">
                <span className="font-kufi text-6xl font-bold text-[rgba(16,31,27,0.08)] transition-colors duration-500 group-hover:text-[rgba(201,164,92,0.45)]">
                  {m.num}
                </span>
                <h3 className="mb-3 mt-4 font-amiri text-2xl font-bold text-[color:var(--ink)]">{m.title}</h3>
                <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.desc}</p>
                {i < METHOD.length - 1 && (
                  <span className="absolute -start-3 top-1/2 hidden h-px w-6 bg-[color:var(--gold)] lg:block" />
                )}
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
