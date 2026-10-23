import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { RevealDiv } from '@/components/Reveal';
import SectionHead from '@/components/SectionHead';
import LazyVideo from '@/components/LazyVideo';
import { BRAND, waLink } from '@/data';
import { WhatsAppIcon } from './Header';

const SUBJECTS = ['قضية مدنية', 'قضية جنائية', 'قضية تجارية', 'قضية أسرة', 'قضية عقارية', 'قضية اجتماعية', 'استشارة عامة'];

export default function ContactBlock() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', subject: SUBJECTS[0], message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `طلب موعد — مكتب المحامي محمد العربي%0aالاسم: ${form.name}%0aالهاتف: ${form.phone}%0aالمجال: ${form.subject}%0aالموضوع: ${form.message}`;
    window.open(waLink(decodeURIComponent(text)), '_blank');
    setSent(true);
  };

  const input =
    'w-full rounded-xl border border-[rgba(16,31,27,0.15)] bg-[color:var(--white)] px-4 py-3.5 text-[color:var(--ink)] outline-none transition-colors placeholder:text-[rgba(78,90,83,0.6)] focus:border-[color:var(--gold)]';

  return (
    <section className="bg-[color:var(--paper)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          kicker="اتصل بنا"
          title="ابدأوا بخطوة واحدة: راسلونا، والباقي علينا"
          desc="املأوا النموذج وسنتحقق من طلبكم عبر واتساب في الحال، أو اتصلوا بنا مباشرة خلال أوقات العمل."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* نموذج */}
          <RevealDiv className="lg:col-span-3">
            <div className="rounded-3xl border border-[rgba(16,31,27,0.08)] bg-[color:var(--white)] p-8 shadow-[0_20px_50px_rgba(16,31,27,0.08)] md:p-10">
              {sent ? (
                <div className="flex flex-col items-center py-14 text-center">
                  <CheckCircle2 className="h-16 w-16 text-[color:var(--pine)]" />
                  <h3 className="mt-5 font-amiri text-3xl font-bold">تم تجهيز طلبكم</h3>
                  <p className="mt-3 max-w-md text-[color:var(--ink-soft)]">
                    فتحنا لكم واتساب برسالة جاهزة تحمل بياناتكم — أرسلوها فقط وسيتواصل معكم المكتب في أقرب وقت.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-7 rounded-full border border-[color:var(--sand-line)] px-6 py-3 font-bold text-[color:var(--ink)] transition-colors hover:border-[color:var(--gold)]"
                  >
                    إرسال طلب آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-bold">الاسم الكامل</label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={input}
                        placeholder="مثال: يوسف العلوي"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-bold">رقم الهاتف</label>
                      <input
                        id="phone"
                        required
                        dir="ltr"
                        inputMode="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`${input} text-right`}
                        placeholder="06 XX XX XX XX"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-bold">مجال القضية</label>
                    <select
                      id="subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={input}
                    >
                      {SUBJECTS.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-bold">موجز عن الملف</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${input} resize-none`}
                      placeholder="اشرحوا باختصار طبيعة النزاع والطرف الآخر والمرحلة التي وصل إليها الملف…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[color:var(--ink)] px-8 py-4 text-base font-bold text-[color:var(--gold)] transition-colors hover:bg-[color:var(--pine)] sm:w-auto"
                  >
                    إرسال عبر واتساب
                    <Send className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                  </button>
                  <p className="text-sm text-[rgba(78,90,83,0.75)]">
                    بياناتكم تبقى سرية بالكامل ولا تُستخدم إلا للرد على طلبكم.
                  </p>
                </form>
              )}
            </div>
          </RevealDiv>

          {/* معلومات + فيديو */}
          <div className="space-y-6 lg:col-span-2">
            <RevealDiv delay={0.1}>
              <div className="rounded-3xl bg-[color:var(--ink)] p-8 text-[color:var(--white)]">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[color:var(--gold)]" />
                    <div>
                      <p className="font-bold">العنوان</p>
                      <p className="text-sm text-[rgba(255,253,247,0.72)]">{BRAND.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-[color:var(--gold)]" />
                    <div>
                      <p className="font-bold">الهاتف</p>
                      <a href={`tel:${BRAND.phoneLocal.replace(/\s/g, '')}`} dir="ltr" className="text-sm text-[rgba(255,253,247,0.72)] hover:text-[color:var(--gold)]">
                        {BRAND.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-[color:var(--gold)]" />
                    <div>
                      <p className="font-bold">البريد الإلكتروني</p>
                      <a href={`mailto:${BRAND.email}`} className="text-sm text-[rgba(255,253,247,0.72)] hover:text-[color:var(--gold)]">
                        {BRAND.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-[color:var(--gold)]" />
                    <div className="flex-1">
                      <p className="font-bold">أوقات العمل</p>
                      <ul className="mt-1 space-y-1 text-sm text-[rgba(255,253,247,0.72)]">
                        {BRAND.hours.map((h) => (
                          <li key={h.d} className="flex justify-between gap-4">
                            <span>{h.d}</span>
                            <span dir="ltr">{h.h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
                <a
                  href={waLink('مرحباً، أود الاستفسار عن موعد استشارة قانونية.')}
                  target="_blank"
                  rel="noreferrer"
                  className="wa-flash mt-7 flex items-center justify-center gap-2 rounded-full bg-[#25d366] py-3.5 text-sm font-bold text-[#0b3d24]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  رد سريع عبر واتساب
                </a>
              </div>
            </RevealDiv>
            <RevealDiv delay={0.2}>
              <div className="group relative overflow-hidden rounded-3xl">
                <LazyVideo
                  src="/media/contact.mp4"
                  poster="/media/contact-poster.jpg"
                  className="aspect-[3/4] w-full"
                  label="تمثال العدالة في مكتب المحامي محمد العربي"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,31,27,0.7)] to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-6 font-amiri text-xl font-bold text-[color:var(--white)]">
                  مكتبنا في قلب المعاريف يرحّب بكم
                </p>
              </div>
            </RevealDiv>
          </div>
        </div>

        {/* الخريطة */}
        <RevealDiv delay={0.1} className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-[rgba(16,31,27,0.1)] shadow-[0_20px_50px_rgba(16,31,27,0.08)]">
            <iframe
              title="موقع مكتب المحامي محمد العربي — الدار البيضاء"
              src={BRAND.mapEmbed}
              className="h-[420px] w-full grayscale-[35%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}
