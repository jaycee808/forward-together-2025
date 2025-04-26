'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-start">
      <div className="flex gap-6 lg:gap-12 font-inter font-bold text-base sm:text-lg md:text-xl shimmer-text">
        <NavLink href="/our-story" label="Our Story" />
        <NavLink href="/news" label="News" />
        <NavLink href="/team" label="Team" />
        <NavLink href="/contact" label="Contact" />
      </div>
    </nav>
  );
}

function NavLink({ href, label }) {
  return (
    <Link href={href} className="hover:underline">
      {label}
    </Link>
  );
}