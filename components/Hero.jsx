'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="lg:mt-30">
      <div className="max-w-2xl w-full text-left space-y-8">
        
        <Image
          src="/assets/images/tagline-uppercase.svg"
          alt="Celebrate Diversity, Empower Communities"
          width={500}
          height={200}
          priority
          className="h-16 md:h-20 lg:h-24 w-auto"
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
        className="button-gradient-border gradient-one font-inter block w-full sm:w-fit text-center md:text-2xl lg:text-2xl uppercase"
        >
        Our Story →
        </Link>

      </div>
    </section>
  );
}