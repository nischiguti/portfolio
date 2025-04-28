import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string; // Optional if you want to customize layout later
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <section className={`mb-12 ${className ?? ""}`}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
