import { RevealDiv } from './Reveal';

type Props = {
  kicker: string;
  title: string;
  desc?: string;
  dark?: boolean;
  center?: boolean;
};

export default function SectionHead({ kicker, title, desc, dark = false, center = false }: Props) {
  return (
    <RevealDiv className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 flex items-center gap-3 text-sm font-bold tracking-wide text-[color:var(--gold-deep)]">
        <span className="inline-block h-px w-10 bg-[color:var(--gold)]" />
        {kicker}
        {center && <span className="inline-block h-px w-10 bg-[color:var(--gold)]" />}
      </p>
      <h2
        className={`font-amiri text-4xl font-bold leading-[1.6] md:text-5xl ${
          dark ? 'text-[color:var(--white)]' : 'text-[color:var(--ink)]'
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-[rgba(255,253,247,0.75)]' : 'text-[color:var(--ink-soft)]'}`}>
          {desc}
        </p>
      )}
    </RevealDiv>
  );
}
