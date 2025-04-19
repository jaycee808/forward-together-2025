import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col justify-end items-end my-10 px-4 sm:px-6 lg:px-20 pb-10">
        <div className="max-w-2xl w-full text-left space-y-6">
          <h1 className="font-inter text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
            Celebrate Diversity, <br /> Empower Communities
          </h1>
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
            className="font-inter block w-full sm:w-fit border-2 border-black text-black font-semibold px-6 py-3 rounded-md text-center transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Our Story →
          </Link>
        </div>
      </div>
    </section>
  );
}