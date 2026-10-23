import PageHero from '@/components/PageHero';
import FaqAccordion from '@/sections/FaqAccordion';
import SectionHead from '@/components/SectionHead';
import { RevealDiv } from '@/components/Reveal';
import CtaBand from '@/sections/CtaBand';
import { waLink } from '@/data';
import { useReveal } from '@/hooks/useReveal';
import { WhatsAppIcon } from '@/sections/Header';

export default function FaqPage() {
  useReveal();
  return (
    <>
      <PageHero
        video="/media/cabinet.mp4"
        poster="/media/cabinet-poster.jpg"
        kicker="الأسئلة الشائعة"
        title="كل ما تودّ معرفته قبل أن تطرق باب المكتب"
        desc="جمعنا أكثر الأسئلة تكراراً التي تصلنا يومياً — وإن لم تجد سؤالك هنا، راسلنا مباشرة."
      />
      <section className="bg-[color:var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <SectionHead
            center
            kicker="إجابات مباشرة"
            title="أسئلتكم الشائعة، بلا لف ولا دوران"
          />
          <RevealDiv>
            <FaqAccordion />
          </RevealDiv>
          <RevealDiv delay={0.15}>
            <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl bg-[color:var(--ink)] p-10 text-center">
              <p className="font-amiri text-2xl font-bold text-[color:var(--white)]">
                لم تجد إجابتك؟ السؤال المجاني لا يكلّف شيئاً.
              </p>
              <a
                href={waLink('مرحباً، لدي سؤال قانوني أود استشاركم فيه.')}
                target="_blank"
                rel="noreferrer"
                className="wa-flash inline-flex items-center gap-2 rounded-full bg-[#25d366] px-7 py-3.5 font-bold text-[#0b3d24]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                اسألوا عبر واتساب
              </a>
            </div>
          </RevealDiv>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
