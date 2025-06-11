import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-[#1F4E79] border-white/20 hover:bg-[#1F4E79]/90 hover:border-white/30"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all text-white dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all text-white dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#1F4E79] border-white/20">
        <DropdownMenuItem onClick={() => setTheme("light")} className="text-white hover:bg-[#1F4E79]/90 focus:bg-[#1F4E79]/90">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="text-white hover:bg-[#1F4E79]/90 focus:bg-[#1F4E79]/90">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("custom")} className="text-white hover:bg-[#1F4E79]/90 focus:bg-[#1F4E79]/90">
          Custom
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="text-white hover:bg-[#1F4E79]/90 focus:bg-[#1F4E79]/90">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}