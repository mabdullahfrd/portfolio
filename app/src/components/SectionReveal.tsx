import { type ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function SectionReveal({ children, delay = 0, className = '' }: SectionRevealProps) {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const delayClass = delay > 0 ? `reveal-delay-${Math.min(delay, 5)}` : '';

  return (
    <div
      ref={ref}
      className={`reveal-element ${isInView ? 'revealed' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
