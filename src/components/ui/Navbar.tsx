import * as React from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react" // Import icons for menu toggle
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-[#1F4E79] shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white">
          EyeSpec
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 lg:hidden">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-white/80"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full hover:bg-transparent focus:bg-transparent active:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-lg tracking-wide">
                    HOME
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Eyetest">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full hover:bg-transparent focus:bg-transparent active:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-lg tracking-wide">
                    EYETEST
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Faq">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full hover:bg-transparent focus:bg-transparent active:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-lg tracking-wide">
                    FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/About">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full hover:bg-transparent focus:bg-transparent active:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-lg tracking-wide">
                    ABOUT
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'flex' : 'hidden'} lg:hidden absolute top-[64px] left-0 right-0 flex-col bg-[#1F4E79] border-t border-white/10 p-4 space-y-4`}>
          <Link to="/" className="text-white text-lg" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link to="/Eyetest" className="text-white text-lg" onClick={() => setIsOpen(false)}>
            EYETEST
          </Link>
          <Link to="/Faq" className="text-white text-lg" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <Link to="/About" className="text-white text-lg" onClick={() => setIsOpen(false)}>
            ABOUT
          </Link>
        </div>

        {/* Desktop Mode Toggle */}
        <div className="hidden lg:block">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
