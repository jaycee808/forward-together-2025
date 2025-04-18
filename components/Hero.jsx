import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-red-600 text-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-tight">
          Celebrate Diversity,<br />Empower Communities
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-50">
          <strong>4WARD2GETHER</strong> is a volunteer-led charity in Ayrshire, Scotland, dedicated to building a more inclusive society. 
          Through creative sessions and community outreach, we challenge prejudice and spark meaningful conversations.
        </p>
        <div className="mt-10">
          <Link
            href="/our-story"
            className="inline-block bg-gray-50 text-red-600 hover:bg-gray-300 font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            Our Story →
          </Link>
        </div>
      </div>
    </section>
  );
}