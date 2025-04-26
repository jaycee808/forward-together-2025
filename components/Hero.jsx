'use client'

import Link from 'next/link';
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto flex flex-col justify-end items-end my-10 px-4 sm:px-6 lg:px-20 pb-10">
        <div className="max-w-2xl w-full text-left space-y-6">
        <Image
          src="./assets/images/tagline-lowercase.svg"
          alt="Celebrate Diversity, Empower Communities"
          width={100}
          height={100}
          priority
          className="h-16 h-40 md:h-40 lg:h-50 w-auto"
        />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <p className="font-inter text-base sm:text-lg md:text-xl text-gray-900">
              <strong>4WARD2GETHER</strong> is a volunteer-led charity in Ayrshire, Scotland, dedicated to building a more inclusive society.
            </p>
            <p className="font-inter text-base sm:text-lg md:text-xl text-gray-900">
              Through creative sessions and community outreach, we challenge prejudice and spark meaningful conversations.
            </p>
          </div>
          <Link
            href="/our-story"
            className="font-inter block w-full sm:w-fit button-gradient-border font-bold px-6 py-3 rounded-md text-center shimmer-text md:text-2xl lg:text-4xl"
          >
            Our Story →
          </Link>
        </div>
      </div>
    </section>
  );
}