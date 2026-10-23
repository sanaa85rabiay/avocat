import PageHero from '@/components/PageHero';
import ContactBlock from '@/sections/ContactBlock';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  useReveal();
  return (
    <>
      <PageHero
        video="/media/contact.mp4"
        poster="/media/contact-poster.jpg"
        kicker="اتصل بنا"
        title="أبواب المكتب مفتوحة… وكذلك واتساب."
        desc="موعد استشارة، سؤال عاجل، أو ملف يحتاج يداً أمينة — نحن على بُعد رسالة واحدة."
      />
      <ContactBlock />
    </>
  );
}
