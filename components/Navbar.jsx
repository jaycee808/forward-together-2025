'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4 sm:py-6">
        <div className="flex flex-col md:flex-row justify-center lg:justify-between items-start md:items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-start relative z-10">
            <Image
              src="/assets/images/logo-3d.svg"
              alt="Forward Together Logo"
              width={500}
              height={250}
              priority
              className="h-16 h-40 md:h-40 lg:h-50 w-auto"
            />
          </Link>

          {/* Nav Links */}
          <div className="w-full md:w-auto">
            <div className="max-w-2xl w-full text-left ml-auto font-inter leading-tight flex flex-row flex-wrap lg:gap-32 gap-6 font-bold text-base sm:text-lg md:text-xl shimmer-text">
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