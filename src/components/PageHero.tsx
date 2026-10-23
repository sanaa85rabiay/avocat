import { RevealDiv } from './Reveal';

type Props = {
  video: string;
  poster: string;
  kicker: string;
  title: string;
  desc?: string;
};

/** ترويسة الصفحات الداخلية: فيديو خلفي + عنوان */
export default function PageHero({ video, poster, kicker, title, desc }: Props) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-[color:var(--ink)] pt-36 pb-16 md:min-h-[68vh]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,31,27,0.96)] via-[rgba(16,31,27,0.55)] to-[rgba(16,31,27,0.45)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <RevealDiv>
          <p className="mb-4 flex items-center gap-3 text-sm font-bold tracking-wide text-[color:var(--gold)]">
            <span className="inline-block h-px w-10 bg-[color:var(--gold)]" />
            {kicker}
          </p>
          <h1 className="max-w-3xl font-amiri text-5xl font-bold leading-[1.6] text-[color:var(--white)] md:text-6xl">
            {title}
          </h1>
          {desc && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[rgba(255,253,247,0.8)]">{desc}</p>}
        </RevealDiv>
      </div>
    </section>
  );
}
