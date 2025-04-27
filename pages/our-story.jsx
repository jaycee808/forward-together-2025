'use client';

import Link from 'next/link';

export default function OurStory() {
    return (
        <section className="mt-10 md:ml-10">
        <div className="max-w-6xl w-full text-left">

            {/* Page Title */}
            <h1 className="font-inter text-4xl md:text-6xl font-extrabold tracking-tight gradient ml-4 pb-0 lg:pb-6">
            Our Story
            </h1>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 w-80 lg:w-350">

            {/* Section Card Template */}

            {/* Section 01 */}
            <div className="relative bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex justify-end items-start">
                    <span className="text-2xl font-inter font-extrabold text-gray-400">01</span>
                </div>
                <hr className="my-1 border-gray-400" />
                <h2 className="font-inter tracking-tight text-xl sm:text-2xl md:text-3xl font-extrabold gradient my-4 mb-4">
                It All Started with a Trip
                </h2>
                <p className="font-inter text-base tracking-tight sm:text-lg md:text-xl text-gray-900">
                In 2014, Ian Rennie and Sandy Brown visited Belfast with the Tackling Sectarianism Together team.
                What they experienced inspired action - not just ideas.
                </p>
            </div>

            {/* Section 02 */}
            <div className="relative bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex justify-end items-start">
                    <span className="text-2xl font-inter font-extrabold text-gray-400">02</span>
                </div>
                <hr className="my-2 border-gray-400" />
                <h2 className="font-inter tracking-tight text-xl sm:text-2xl md:text-3xl font-extrabold gradient my-4 mb-4">
                From Vision to Action
                </h2>
                <p className="font-inter text-base sm:text-lg md:text-xl text-gray-900 tracking-tight">
                By 2015, John Ithell and John Houston joined forces to bring this vision to life.
                Their first project: “Nil by Mouth,” a student-led concert that sparked real conversations across Ayrshire.
                </p>
            </div>

            {/* Section 03 */}
            <div className="relative bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex justify-end items-start">
                    <span className="text-2xl font-inter font-extrabold text-gray-400">03</span>
                </div>
                <hr className="my-2 border-gray-400" />
                <h2 className="font-inter tracking-tight text-xl sm:text-2xl md:text-3xl font-extrabold gradient mb-4 my-4">
                Building Momentum
                </h2>
                <p className="font-inter text-base sm:text-lg md:text-xl text-gray-900 tracking-tight">
                Since then, 4WARD2GETHER has grown through events, music, and meaningful partnerships.
                Each initiative is designed to challenge prejudice, celebrate diversity, and empower communities.
                </p>
            </div>

            {/* Section 04 */}
            <div className="relative bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex justify-end items-start">
                    <span className="text-2xl font-inter font-extrabold text-gray-400">04</span>
                </div>
                <hr className="my-2 border-gray-400" />
                <h2 className="font-inter tracking-tight text-xl sm:text-2xl md:text-3xl font-extrabold gradient mb-4 my-4">
                Our Mission
                </h2>
                <p className="font-inter text-base sm:text-lg md:text-xl text-gray-900 tracking-tight">
                We exist to foster inclusion, promote dialogue, and create change - through arts, education, and community engagement.
                </p>
            </div>

            {/* Section 05 */}
            <div className="relative bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex justify-end items-start">
                    <span className="text-2xl font-inter font-extrabold text-gray-400">05</span>
                </div>
                <hr className="my-2 border-gray-400" />
                <h2 className="font-inter tracking-tight text-xl sm:text-2xl md:text-3xl font-extrabold gradient mb-6 my-4">
                What We Believe
                </h2>
                <ul className="list-disc list-inside space-y-4 font-inter text-base sm:text-lg md:text-xl text-gray-900 tracking-tight">
                <li><span className="font-bold">Diversity matters</span></li>
                <li><span className="font-bold">Conversation creates change</span></li>
                <li><span className="font-bold">Community is everything</span></li>
                </ul>
            </div>

            {/* Section 06 */}
            <div className="relative bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex justify-end items-start">
                    <span className="text-2xl font-inter font-extrabold text-gray-400">06</span>
                </div>
                <hr className="my-2 border-gray-400" />
                <h2 className="font-inter tracking-tight text-xl sm:text-2xl md:text-3xl font-extrabold gradient mb-4 my-4">
                Join Us
                </h2>
                <p className="font-inter text-base sm:text-lg md:text-xl text-gray-900 mb-6 tracking-tight">
                Whether you’re a teacher, volunteer, student, or supporter - you’re welcome in this movement.
                </p>
                <Link
                href="/contact"
                className="border-2 border-gray-900 font-inter font-semibold block w-full sm:w-fit text-center md:text-2xl lg:text-2xl py-2 px-4"
                >
                <span className="gradient font-inter tracking-tight font-extrabold">Get Involved →</span>
                </Link>
            </div>

            </div>

        </div>
        </section>
    );
}