import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left column: text */}
          <div className="md:w-1/2 text-left">
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold leading-tight">
              Celebrate Diversity,<br />Empower Communities
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-900 max-w-xl">
              <strong>4WARD2GETHER</strong> is a volunteer-led charity in Ayrshire, Scotland, dedicated to building a more inclusive society. 
              Through creative sessions and community outreach, we challenge prejudice and spark meaningful conversations.
            </p>
            <div className="mt-10">
              <Link
                href="/our-story"
                className="nav-link inline-block bg-gray-50 text-gray-900 border-4 border-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-md transition-colors duration-200"
              >
                Our Story →
              </Link>
            </div>
          </div>

          {/* Right column: image */}
          {/* <div className="md:w-1/2">
            <Image
              src="/assets/images/purple-arrow.svg"
              alt="Purple Arrow"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}