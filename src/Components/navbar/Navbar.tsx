'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/Components/ui/Button"
import { FiAlignJustify, FiChevronDown } from "react-icons/fi"
import { FaTimes } from "react-icons/fa"


const navLinks = [
  { name: "Products", href: "/Product", dropdown: [
    { name: "Smart Audit", href: "/Smart-Audit" },
    { name: "Product 2", href: "/products/product2" },
    { name: "Product 3", href: "/products/product3" },
  ]},
  { name: "About Us", href: "/about" },
  { name: "Solution", href: "/solution", dropdown: [
    { name: " Supplier Management", href: "/supplier-management" },
    { name: "Solution 2", href: "/solution/solution2" },
  ]},
  { name: "Resources", href: "/resource" },
  { name: "Career", href: "/career" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/Blogs" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    
    
    <nav className="w-full bg-white fixed top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex justify-between items-center rounded-[12px]">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={166}
                height={48}
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-nowrap items-center space-x-4 sm:space-x-6 lg:space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-[#00A86B] hover:font-bold transition whitespace-nowrap">
                    <span>{link.name}</span>
                    <FiChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#00A86B] whitespace-nowrap"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#00A86B] hover:font-bold transition whitespace-nowrap"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-nowrap items-center space-x-3 lg:space-x-4">
            <Link href="/login">
              <Button
                variant="outline"
                className="px-3 py-2 border border-gray-200 text-gray-700 text-[14px] lg:text-[16px] rounded-[8px] w-[80px] lg:w-[95px] h-[40px] lg:h-[48px] cursor-pointer"
              >
                Login
              </Button>
            </Link>
            <Link href="/book">
              <Button
                variant="outline"
                className="px-3 py-2 bg-[#00A86B] text-white text-[14px] lg:text-[16px] rounded-[8px] min-w-[120px] lg:min-w-[138px] h-[40px] lg:h-[48px] cursor-pointer"
              >
                Book Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FiAlignJustify className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  className="block text-gray-700 hover:text-[#00A86B] whitespace-nowrap"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <FiChevronDown className="h-4 w-4 text-gray-600" />
                )}
              </div>
              {/* Show dropdown links inline on mobile */}
              {link.dropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-600 hover:text-[#00A86B] whitespace-nowrap"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-col space-y-3 pt-3">
            <Link href="/login" className="flex-1">
              <Button
                variant="outline"
                className="w-full border border-gray-200 text-gray-700 text-[16px] rounded-[8px] h-[48px]"
              >
                Login
              </Button>
            </Link>
            <Link href="/book" className="flex-1">
              <Button
                variant="outline"
                className="w-full bg-[#00A86B] text-white rounded-[8px] h-[48px]"
              >
                Book Demo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
};