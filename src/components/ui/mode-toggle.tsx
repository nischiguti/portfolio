import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <span className="transition-opacity duration-300 ease-in-out">
              {isDark ? (
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300" />
              ) : (
                <Moon className="h-5 w-5 rotate-0 scale-100 transition-all duration-300" />
              )}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
