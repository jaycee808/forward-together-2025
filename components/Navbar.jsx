'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full flex items-center justify-between py-2 md:py-4 px-2 md:px-12 relative z-50">

      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/images/logo-3d.svg"
          alt="Forward Together Logo"
          width={160}
          height={80}
          priority
          className="h-40 w-auto"
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-24 font-inter font-bold text-base sm:text-lg md:text-xl shimmer-text tracking-tight">
        <NavLink href="/our-story" label="Our Story" />
        <NavLink href="/news" label="News" />
        <NavLink href="/team" label="Team" />
        <NavLink href="/contact" label="Contact" />
      </div>

      {/* Hamburger button for mobile */}
      <button 
        onClick={toggleMenu} 
        className="lg:hidden absolute top-4 right-4 p-2"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-12 right-2 mt-2 bg-gray-50 shadow-lg rounded-lg p-6 flex flex-col gap-4 font-inter font-bold text-lg z-40 transition-all duration-300 ease-in-out">
          <NavLink href="/our-story" label="Our Story" onClick={closeMenu} />
          <NavLink href="/news" label="News" onClick={closeMenu} />
          <NavLink href="/team" label="Team" onClick={closeMenu} />
          <NavLink href="/contact" label="Contact" onClick={closeMenu} />
        </div>
      )}
      
    </nav>
  );
}

function NavLink({ href, label, onClick }) {
  return (
    <Link href={href} onClick={onClick} className="hover:underline">
      {label}
    </Link>
  );
}