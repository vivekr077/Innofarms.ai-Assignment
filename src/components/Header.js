"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/produce", label: "Our Produce" },
    { href: "/chef-mixes", label: "Chef Mixes" },
    { href: "/traceability", label: "Traceability" },
    { href: "/chef-advisory", label: "Chef Advisory Council" },
    { href: "/events", label: "Events & Blogs", hasDropdown: true },
  ];
  
  const isActive = (href) => pathname === href;

  return (
    <header className="w-full bg-white relative">
      <div className="w-full  flex items-center justify-between pr-15 pb-7">
        {/* Logo Section - Left */}
        <div className="flex items-center">
          <div className="relative w-[100px] h-[97px] md:w-[142px] md:h-[138px] flex-shrink-0">
            <Image
              src="/Home/logo.svg"
              alt="INNOFarms.AI Logo"
              width={142}
              height={138}
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation Links - Center */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-10">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className={` text-lg font-normal transition-colors ${
                  isActive(link.href)
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
              {/* Dropdown menu can be added here later */}
            </div>
          ))}
        </nav>

        {/* CTA Buttons - Right */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
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
              <Link
                key={link.href}
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
            ))}
            <div className="flex flex-col gap-3 pt-2 border-t border-gray-200">
              <Link
                href="/subscription"
                className="px-6 py-2 border-2 border-[#ff6b47] text-[#ff6b47] rounded-full hover:bg-[#ff6b47] hover:text-white transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscription Plan
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 border-2 border-[#90c695] text-[#90c695] rounded-full hover:bg-[#90c695] hover:text-white transition-colors text-center"
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
