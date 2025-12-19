"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/produce", label: "Our Produce" },
    { href: "/chef-mixes", label: "Chef Mixes" },
    { href: "/traceability", label: "Traceability" },
    { href: "/chef-advisory", label: "Chef Advisory Council" },
    { 
      href: "/events", 
      label: "Events & Blogs", 
      hasDropdown: true,
      dropdownItems: [
        { href: "/events", label: "Events" },
        { href: "/blogs", label: "Blogs" },
      ]
    },
  ];
  
  const isActive = (href) => pathname === href;

  return (
    <header className="w-full bg-white relative">
      <div className="w-full  flex items-center justify-between lg:pr-8 pb-1 lg:pb-7">
        {/* Logo Section - Left */}
        <div className="flex items-center">
          <Link href="/Home" className="relative w-[70px] h-[68px] md:w-[100px] md:h-[97px] flex-shrink-0">
            <Image
              src="/Home/logo.svg"
              alt="INNOFarms.AI Logo"
              width={100}
              height={97}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-10">
          {navLinks.map((link) => (
            <div 
              key={link.href} 
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setIsDesktopDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsDesktopDropdownOpen(false)}
            >
              <Link
                href={link.href}
                className={` text-lg font-normal transition-colors ${
                  isActive(link.href) || (link.hasDropdown && (isActive("/events") || isActive("/blogs")))
                    ? "text-[#E3572B]"
                    : "text-[#1E1E1E] hover:text-[#E3572B]"
                } ${link.hasDropdown ? "flex items-center gap-1" : ""}`}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {/* Dropdown menu */}
              {link.hasDropdown && link.dropdownItems && (
                <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 z-50 ${
                  isDesktopDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                  <div className="py-2">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsDesktopDropdownOpen(false)}
                        className={`block px-4 py-2 text-base font-normal transition-colors ${
                          isActive(item.href)
                            ? "text-[#E3572B] bg-[#E3572B]/10"
                            : "text-[#1E1E1E] hover:text-[#E3572B] hover:bg-[#E3572B]/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons - Right */}
        {!isMenuOpen && (
          <div className="hidden lg:flex items-center gap-2 lg:gap-3">
          <Link
            href="/subscription"
            className="px-4 lg:px-2 py-3 border border-[#E3572B] text-[#E3572B] font-semibold rounded-full hover:bg-[#E3572B] hover:text-white transition-colors whitespace-nowrap text-sm lg:text-base"
          >
            Subscription Plan
          </Link>
          <Link
            href="/contact"
            className="px-4 lg:px-3 py-3 border border-[#3D550C] text-[#3D550C] font-semibold rounded-full hover:bg-[#3D550C] hover:text-white transition-colors whitespace-nowrap text-sm lg:text-base"
          >
            Contact us
          </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#1E1E1E] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#1E1E1E] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#1E1E1E] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="w-full px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.hasDropdown && link.dropdownItems ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                      className={`w-full text-left text-base font-normal transition-colors flex items-center justify-between ${
                        isActive(link.href) || (isActive("/events") || isActive("/blogs"))
                          ? "text-[#E3572B]"
                          : "text-[#1E1E1E]"
                      }`}
                    >
                      {link.label}
                      <svg 
                        className={`w-4 h-4 transition-transform ${openDropdown === link.href ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.href && (
                      <div className="pl-4 mt-2 flex flex-col gap-2">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-normal transition-colors ${
                              isActive(item.href)
                                ? "text-[#E3572B]"
                                : "text-[#1E1E1E]"
                            }`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-base font-normal transition-colors ${
                      isActive(link.href)
                        ? "text-[#E3572B]"
                        : "text-[#1E1E1E] hover:text-[#E3572B]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-2 border-t border-gray-200">
              <Link
                href="/subscription"
                className="px-6 py-3 border border-[#E3572B] text-[#E3572B] font-semibold rounded-full hover:bg-[#E3572B] hover:text-white transition-colors text-center text-sm lg:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscription Plan
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-[#3D550C] text-[#3D550C] font-semibold rounded-full hover:bg-[#3D550C] hover:text-white transition-colors text-center text-sm lg:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </nav>
        </div>
      )}

    </header>
  );
}
