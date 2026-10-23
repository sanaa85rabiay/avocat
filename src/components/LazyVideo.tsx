import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  poster: string;
  className?: string;
  label?: string;
};

/** فيديو لا يبدأ التحميل إلا عند اقترابه من شاشة المستخدم */
export default function LazyVideo({ src, poster, className = '', label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setLoad(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: '350px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role={label ? 'img' : undefined}
      aria-label={label}
      className={`relative overflow-hidden bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${poster})` }}
    >
      {load && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />
      )}
    </div>
  );
}
