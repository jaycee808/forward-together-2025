'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4 sm:py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-start">
            <Image
              src="/assets/images/logo-name.svg"
              alt="Forward Together Logo"
              width={500}
              height={250}
              priority
              className="h-16 sm:h-20 md:h-28 lg:h-36 w-auto"
            />
          </Link>

          {/* Nav Links */}
          <div className="w-full md:w-auto">
            <div className="max-w-2xl w-full text-left ml-auto font-inter leading-tight flex flex-row sm:flex-row flex-wrap lg:gap-32 gap-6 font-bold text-base sm:text-lg md:text-xl">
              <NavLink href="/our-story" label="Our Story" />
              <NavLink href="/news" label="News" />
              <NavLink href="/team" label="Team" />
              <NavLink href="/contact" label="Contact" />
            </div>
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