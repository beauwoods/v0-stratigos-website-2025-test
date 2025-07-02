"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, Shield, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Industries",
      href: "#industries",
      dropdown: [
        { name: "Medical Device Security", href: "/medical-device-security" },
        { name: "Financial Services", href: "/financial-services-security" },
        { name: "Non-Profit Organizations", href: "/nonprofit-security" },
        { name: "IoT Device Security", href: "/iot-device-security" },
      ],
    },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        { name: "Assess Risk", href: "/assess-cybersecurity-risk" },
        { name: "Technical Security Testing", href: "/technical-security-testing" },
        { name: "Expert Advisory", href: "/cybersecurity-advisory-services" },
        { name: "Program Development", href: "/security-program-development" },
      ],
    },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay before closing
  }

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold">Stratigos Security</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-300 hover:text-yellow-500 transition-colors duration-200 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-0 w-64 bg-white text-black rounded-lg shadow-lg py-2 z-50"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 hover:bg-gray-100 transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a href={item.href} className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-yellow-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-gray-400 hover:text-yellow-500 transition-colors duration-200 text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
