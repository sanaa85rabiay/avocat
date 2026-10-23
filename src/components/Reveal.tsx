import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function RevealDiv({ children, className = '', delay = 0 }: Props) {
  return (
    <div className={`reveal ${className}`} style={{ ['--d' as string]: `${delay}s` }}>
      {children}
    </div>
  );
}
