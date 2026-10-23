type Props = {
  variant?: 'dark' | 'light';
  compact?: boolean;
};

export function LogoMark({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      {/* النجمة الثمانية المغربية */}
      <path
        d="M32 4 38.5 15.2 50.8 13.2 48.8 25.5 60 32 48.8 38.5 50.8 50.8 38.5 48.8 32 60 25.5 48.8 13.2 50.8 15.2 38.5 4 32 15.2 25.5 13.2 13.2 25.5 15.2Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* ميزان العدالة */}
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 16v28" />
        <path d="M21 22h22" />
        <path d="M21 22l-4.6 9h9.2L21 22z" />
        <path d="M43 22l-4.6 9h9.2L43 22z" />
        <path d="M25 46h14" />
      </g>
      <circle cx="32" cy="16" r="2.6" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ variant = 'dark', compact = false }: Props) {
  const ink = variant === 'dark' ? 'text-[color:var(--ink)]' : 'text-[color:var(--white)]';
  const sub = variant === 'dark' ? 'text-[color:var(--gold-deep)]' : 'text-[color:var(--gold)]';
  return (
    <span className={`inline-flex items-center gap-3 ${ink}`}>
      <LogoMark className="h-11 w-11 shrink-0 text-[color:var(--gold)]" />
      {!compact && (
        <span className="leading-tight">
          <span className="block font-amiri text-xl font-bold">المحامي محمد العربي</span>
          <span className={`block text-[11px] font-medium tracking-wide ${sub}`}>
            مكتب المحاماة والاستشارات القانونية — الدار البيضاء
          </span>
        </span>
      )}
    </span>
  );
}
