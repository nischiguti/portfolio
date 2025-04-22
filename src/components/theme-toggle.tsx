import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;

    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-toggle"
        checked={!isDark}
        onCheckedChange={(checked) => setIsDark(!checked)}
      />
      <Label htmlFor="theme-toggle">
        {isDark ? (
          <Moon className="h-5 w-5 transition-transform duration-300" />
        ) : (
          <Sun className="h-5 w-5 transition-transform duration-300" />
        )}
      </Label>
    </div>
  );
}
