"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/Components/ui/Button"
import { FiAlignJustify, FiChevronDown } from "react-icons/fi"
import { FaTimes } from "react-icons/fa"

const navLinks = [
  {
    name: "Products",
    href: "/Product",
    dropdown: [
      { name: "Smart Audit", href: "/Smart-Audit" },
      { name: "Smart CPA", href: "/Smart-CPA" },
      { name: "Smart Compliance", href: "/Smart-Compliance" },
      { name: "Smart Docs", href: "/Smart-Docs" },
      { name: "Smart EMP", href: "/Smart-EMP" },
      { name: "Smart Farm", href: "/Smart-Farm" },
      { name: "Smart HACCP", href: "/Smart-HACCP" },
      { name: "Smart IAM", href: "/Smart-IAM" },
      { name: "Smart Lab", href: "/Smart-Lab" },
      { name: "Smart Recall", href: "/Smart-Recall" },
      { name: "Smart Record", href: "/Smart-Record" },
      { name: "Smart Regulatory", href: "/Smart-Regulatory" },
      { name: "Smart Specification", href: "/Smart-Specification" },
      { name: "Smart Supplier", href: "/Smart-Supplier" },
      { name: "Smart Training", href: "/Smart-Training" },
      { name: "Smart Visitor", href: "/Smart-Visitor" },
    ],
  },
  { name: "About Us", href: "/about" },
  {
    name: "Solution",
    href: "/solution",
    dropdown: [
      { name: "Supplier Management", href: "/supplier-management" },
      { name: "Solution 2", href: "/solution/solution2" },
    ],
  },
  { name: "Resources", href: "/resource" },
  { name: "Career", href: "/career" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/Blogs" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false) // mobile menu toggle
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null) // desktop dropdown
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null) // mobile dropdown

  return (
    <nav className="w-full bg-white dark:bg-white sticky top-0 mt-8 z-50">
      <div className="mx-auto px-4 py-3 sm:px-6 lg:px-8 mt-5">
        <div className="flex justify-between items-center rounded-xl">
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
          <div className="hidden md:flex flex-nowrap items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-[#00A86B] hover:font-bold transition whitespace-nowrap">
                    <span>{link.name}</span>
                    <FiChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {activeDropdown === link.name && (
                    <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-[750px] z-50">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#00A86B] rounded-md text-sm border border-gray-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
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
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button
                variant="outline"
                className="px-3 py-2 border border-gray-200 text-gray-700 text-sm lg:text-base rounded-[8px] w-[95px] h-[40px] lg:h-[48px]"
              >
                Login
              </Button>
            </Link>
            <Link href="/book">
              <Button
                variant="outline"
                className="px-3 py-2 bg-[#00A86B] text-white text-sm lg:text-base rounded-[8px] min-w-[138px] h-[40px] lg:h-[48px]"
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
              <div
                className="flex items-center justify-between"
                onClick={() =>
                  setMobileDropdown(mobileDropdown === link.name ? null : link.name)
                }
              >
                <Link
                  href={link.href}
                  className="block text-gray-700 hover:text-[#00A86B] whitespace-nowrap"
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <FiChevronDown
                    className={`h-4 w-4 text-gray-600 transition-transform ${
                      mobileDropdown === link.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Mobile Dropdown */}
              {link.dropdown && mobileDropdown === link.name && (
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

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-3 pt-3">
            <Link href="/login" className="flex-1">
              <Button
                variant="outline"
                className="w-full border border-gray-200 text-gray-700 text-base rounded-[8px] h-[48px]"
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
}
