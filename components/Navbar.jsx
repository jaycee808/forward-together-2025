'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-red-600 text-gray-50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo-name.svg"
              alt="Forward Together Logo"
              width={500}
              height={250}
              priority
              className="h-24 md:h-32 lg:h-40 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink href="/our-story" label="Our Story" />
            <NavLink href="/news" label="News" />
            <NavLink href="/team" label="Team" />
            <NavLink href="/contact" label="Contact" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-50 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="absolute top-[8rem] left-0 w-full bg-red-600 px-4 pt-4 pb-6 md:hidden z-40 shadow-lg">
          <MobileNavLink href="/our-story" label="Our Story" />
          <MobileNavLink href="/news" label="News" />
          <MobileNavLink href="/team" label="Team" />
          <MobileNavLink href="/contact" label="Contact" />
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="hover:text-gray-300 transition-colors duration-200"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="block text-lg text-gray-50 hover:text-gray-300 transition-colors duration-200 mb-2"
    >
      {label}
    </Link>
  );
}