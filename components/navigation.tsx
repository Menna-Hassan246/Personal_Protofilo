"use client"

import { useState, useEffect } from "react"
import { Home, User, GraduationCap, Briefcase, Code, Mail } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
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

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      const navbarHeight = 80
      const targetPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="circular-nav" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-circle">
            <span>MH</span>
          </div>
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`} id="nav-menu">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <li key={item.name} className="nav-item">
                <button onClick={() => scrollToSection(item.href)} className="nav-link">
                  <div className="nav-circle">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span>{item.name}</span>
                </button>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="nav-toggle" id="mobile-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="hamburger-circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
