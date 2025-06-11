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
    <>
      <nav className="bg-[#1F4E79] shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo */}
          <div className="w-[100px] lg:w-[200px]">
            <Link to="/" className="text-3xl font-bold text-white">
              EYESPEC
            </Link>
          </div>

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

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
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

          {/* Desktop Mode Toggle - Fixed Width */}
          <div className="hidden lg:block w-[100px] lg:w-[200px] flex justify-end">
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-[#1F4E79] transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:hidden
        `}
      >
        <div className="flex flex-col p-6">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-white/80"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className="text-white text-lg hover:text-white/80 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link 
              to="/Eyetest" 
              className="text-white text-lg hover:text-white/80 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              EYETEST
            </Link>
            <Link 
              to="/Faq" 
              className="text-white text-lg hover:text-white/80 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/About" 
              className="text-white text-lg hover:text-white/80 transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar
