'use client';

import Link from 'next/link';
import Image from 'next/image'

export default function LandingPage() {
  return (
    <main className="mt-24 md:mt-32 px-2 md:px-12 space-y-32">
      {/* Hero Section */}
      <section className="max-w-5xl w-full text-left space-y-8">
        <h1 className="font-inter text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight gradient pb-0 lg:pb-6">
          Celebrate Diversity,<br /> Empower Communities
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <p className="font-baloo text-base tracking-tight sm:text-lg md:text-xl text-gray-900">
            <strong>4WARD2GETHER</strong> is a volunteer-led charity in Ayrshire, Scotland, dedicated to building a more inclusive society.
          </p>
          <p className="font-baloo text-base tracking-tight sm:text-lg md:text-xl text-gray-900">
            Through creative sessions and community outreach, we challenge prejudice and spark meaningful conversations.
          </p>
        </div>

        {/* <a href="#our-story" className="border-2 border-gray-900 block w-full sm:w-fit text-center md:text-2xl lg:text-2xl py-2 px-4 rounded-md">
          <span className="gradient tracking-tight font-inter font-extrabold">Our Story ↓</span>
        </a> */}
      </section>
      
      {/* Section Divider */}
      {/* <div className="flex my-32">
        <div className="h-0.5 w-2 rounded-md bg-[#e9e91265] mx-1"></div>
        <div className="h-0.5 w-2 rounded-md bg-[#08F1DA81] mx-1"></div>
        <div className="h-0.5 w-[100%] rounded-md bg-[#FF007779] mx-1"></div>
      </div> */}

      {/* Section 1 - The Journey */}
      <section id="our-story" className="space-y-12">
        <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight gradient">
          The Journey
        </h2>
        <hr className="border-t border-gray-400 w-full mt-2" />
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              number: '01',
              title: 'It All Started with a Trip',
              text: `In 2014, Ian Rennie and Sandy Brown visited Belfast with the Tackling Sectarianism Together team. What they experienced inspired action — not just ideas.`,
            },
            {
              number: '02',
              title: 'From Vision to Action',
              text: `By 2015, John Ithell and John Houston joined forces to bring this vision to life. Their first project: “Nil by Mouth,” a student-led concert that sparked real conversations across Ayrshire.`,
            },
            {
              number: '03',
              title: 'Building Momentum',
              text: `Since then, 4WARD2GETHER has grown through events, music, and meaningful partnerships. Each initiative is designed to challenge prejudice, celebrate diversity, and empower communities.`,
            },
          ].map(({ number, title, text }, i) => (
            <div
              key={i}
              className="relative space-y-4"
            >
              <div className="flex">
                <span className="text-2xl font-inter font-extrabold text-gray-400 flex">{number}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-inter font-extrabold gradient">
                {title}
              </h3>
              <p className="font-baloo text-base sm:text-lg md:text-xl text-gray-900 tracking-tight">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2 — OUR FOUNDATIONS */}
      <section className="space-y-12">
        <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight gradient">
          Our Foundations
        </h2>
        <hr className="border-t border-gray-400 w-full mt-2" />
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-inter font-extrabold gradient">Our Mission</h3>
            <p className="font-baloo text-base sm:text-lg md:text-xl text-gray-900 tracking-tight">
              We exist to foster inclusion, promote dialogue, and create change — through arts, education, and community engagement.
            </p>
          </div>

          {/* Beliefs */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-inter font-extrabold gradient">What We Believe</h3>
            <ul className="list-disc list-inside space-y-2 font-baloo text-base sm:text-lg md:text-xl text-gray-900 tracking-tight">
              <li><strong>Diversity matters</strong></li>
              <li><strong>Conversation creates change</strong></li>
              <li><strong>Community is everything</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      {/* <section className="py-16 px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Hands + Arrow */}
          {/* <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/images/hands-pink-arrow.png"
              alt="4WARD2GETHER Hands Arrow"
              width={300}
              height={120}
              className="rotate-[-5deg]"
            />
          </div>  */}

          {/* RIGHT: CTA Content */}
          {/* <div className="space-y-6 text-left">
            <h3 className="font-inter text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight gradient">
              Join the Movement
            </h3>
            <hr className="w-full mt-2" />
            <p className="font-baloo text-lg sm:text-xl md:text-2xl tracking-tight">
              Whether you're a teacher, volunteer, student, or supporter — you're welcome in this movement.
            </p>
              <a href="#our-story" className="border-2 border-gray-900 block w-full sm:w-fit text-center md:text-2xl lg:text-2xl py-2 px-4 rounded-md">
              <span className="gradient tracking-tight font-inter font-extrabold">Get Involved →</span>
            </a>
          </div>
        </div>
      </section> */}

      <section className="bg-[#2600ff30] text-black px-8 py-24 mb-24 rounded-md shadow-xl ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* CTA Text */}
        <div className="space-y-4 text-left">
          <h3 className="font-inter text-3xl md:text-4xl font-extrabold tracking-tight gradient">
          Join the Movement
          </h3>
          <p className="font-baloo text-lg md:text-xl">
          Whether you're a teacher, volunteer, student, or supporter — you're welcome in this movement.
          </p>
          {/* <Link
            href="/contact"
            className="inline-block font-inter font-semibold text-lg md:text-xl border-2 border-white py-2 px-6 rounded hover:bg-white hover:text-[#0C13B1] transition"
          >
          <span className="gradient font-bold uppercase">Get Involved →</span>
          </Link> */}

          <a href="#our-story" className="border-2 border-gray-900 block w-full sm:w-fit text-center md:text-2xl lg:text-2xl py-2 px-4 rounded-md">
          <span className="gradient tracking-tight font-inter font-extrabold">Get Involved →</span>
          </a>
        </div>

        {/* CTA Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/assets/images/hands-pink-arrow.png"
            alt="Hands and Arrow"
            width={220}
            height={100}
            className="rotate-[-10deg] shadow-arrow"
          />
        </div>
      </div>
    </section>
    </main>
  );
}