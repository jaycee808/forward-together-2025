'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="relative text-gray-900 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-start">
              <Image
                src="/assets/images/logo-name.svg"
                alt="Forward Together Logo"
                width={500}
                height={250}
                priority
                className="h-20 md:h-28 lg:h-36 w-auto"
              />
            </Link>
          </div>

          {/* Nav Links */}
          <div className="nav-link flex flex-wrap justify-start md:justify-end gap-6 font-semibold text-base md:text-lg">
            <NavLink href="/our-story" label="Our Story" />
            <NavLink href="/news" label="News" />
            <NavLink href="/team" label="Team" />
            <NavLink href="/contact" label="Contact" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="hover:underline"
    >
      {label}
    </Link>
  );
}