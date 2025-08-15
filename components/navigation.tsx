"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#technical-skills" },
  { name: "Projects", href: "#projects" },
  { name: "Articles", href: "#articles" },
  { name: "GitHub", href: "https://github.com/AshanOdi" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "about", "technical-skills", "projects", "articles", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold gradient-text font-heading hover:scale-105 transition-transform duration-300 cursor-pointer">
            Portfolio
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "")
              const isExternal = item.href.startsWith("http")

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-foreground transition-all duration-300 hover:text-primary hover:scale-110 ${
                    isActive && !isExternal ? "text-primary" : ""
                  }`}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {item.name}
                  {isActive && !isExternal && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-pulse"></div>
                  )}
                </a>
              )
            })}
          </div>

          <Button
            variant="outline"
            className="md:hidden bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            <div className="flex flex-col space-y-1">
              <div className="w-4 h-0.5 bg-current transition-all duration-300"></div>
              <div className="w-4 h-0.5 bg-current transition-all duration-300"></div>
              <div className="w-4 h-0.5 bg-current transition-all duration-300"></div>
            </div>
          </Button>
        </div>
      </div>
    </nav>
  )
}
