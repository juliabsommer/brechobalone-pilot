"use client";

import { useInView } from "@/hooks/useInView";

interface FadeProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export function Fade({ children, delay = 0, className = "" }: FadeProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const delayClass = delay > 0 ? `fade-up-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? "in-view" : ""} ${delayClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
