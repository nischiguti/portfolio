// src/components/header/Header.tsx

import { Button } from "@/components/ui/button";
import { ModeToggle } from "../theme-toggle";
import { MainNav } from "@/components/nav";

export function Header() {
  return (
    <header className="flex justify-between items-center w-full p-4  bg-background">
    <div className="flex items-center gap-x-4">
      <MainNav />
    </div>
    <div className="flex items-center gap-x-2">
      <ModeToggle />
    </div>
  </header>
  );
}
