'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="mt-2 md:mt-10 m-0 md:ml-10">
      <div className="max-w-2xl w-full text-left space-y-8">

        <h1 className="font-inter text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight gradient pb-0 lg:pb-6">
            Celebrate Diversity, <br /> Empower Communities
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <p className="font-baloo text-base tracking-tight sm:text-lg md:text-xl text-gray-900">
            <strong>4WARD2GETHER</strong> is a volunteer-led charity in Ayrshire, Scotland, dedicated to building a more inclusive society.
          </p>
          <p className="font-baloo text-base tracking-tight sm:text-lg md:text-xl text-gray-900">
            Through creative sessions and community outreach, we challenge prejudice and spark meaningful conversations.
          </p>
        </div>

        <Link
        href="/our-story"
        className="border-2 border-gray-900 block w-full sm:w-fit text-center md:text-2xl lg:text-2xl py-2 px-4"
        >
        <span className="gradient tracking-tight font-inter font-extrabold">Our Story →</span>
        </Link>
      </div>
    </section>
  );
}