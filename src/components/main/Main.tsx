import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
      {children}
    </main>
  );
}
