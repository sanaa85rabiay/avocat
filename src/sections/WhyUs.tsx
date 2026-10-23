import { RevealDiv } from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import LazyVideo from '@/components/LazyVideo';
import { COMMITMENTS } from '@/data';

export default function WhyUs() {
  return (
    <section className="pattern-dots-dark bg-[color:var(--ink)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <RevealDiv className="order-2 lg:order-1">
            <div className="group relative overflow-hidden rounded-[1.6rem] border border-[rgba(201,164,92,0.25)] shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
              <LazyVideo
                src="/media/hero.mp4"
                poster="/media/hero-poster.jpg"
                className="aspect-[3/4] w-full"
                label="لقطات سينمائية من عالم العدالة والمحاماة"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,31,27,0.75)] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="font-amiri text-2xl font-bold text-[color:var(--white)]">جلسة استماع، لا جلسة انتظار</p>
                <p className="mt-1 text-sm text-[rgba(255,253,247,0.75)]">
                  نخصص لملفكم الوقت الذي يستحق — من أول لقاء.
                </p>
              </div>
            </div>
          </RevealDiv>

          <div className="order-1 lg:order-2">
            <SectionHead
              dark
              kicker="لماذا مكتبنا؟"
              title="أربعة التزامات نوقّعها باسمنا في كل ملف"
              desc="الفرق بين محامٍ وآخر ليس في الجلسة فقط، بل فيما يحدث قبلها وبعدها."
            />
            <div className="space-y-5">
              {COMMITMENTS.map((c, i) => (
                <RevealDiv key={c.title} delay={0.08 * i}>
                  <div className="flex gap-5 rounded-2xl border border-[rgba(201,164,92,0.18)] bg-[rgba(255,253,247,0.04)] p-6 transition-colors duration-500 hover:border-[rgba(201,164,92,0.45)]">
                    <span className="font-kufi text-3xl font-bold text-[color:var(--gold)]">{i + 1}</span>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-[color:var(--white)]">{c.title}</h3>
                      <p className="leading-relaxed text-[rgba(255,253,247,0.7)]">{c.desc}</p>
                    </div>
                  </div>
                </RevealDiv>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
