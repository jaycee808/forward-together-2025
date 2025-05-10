'use client';

import Image from 'next/image';

export default function OurTeam() {
    return (
        <section className="mt-2 md:mt-10 m-0 md:ml-10">
            <div className="w-full text-left">

                {/* Page Title */}
                <h1 className="font-inter text-4xl md:text-6xl font-extrabold tracking-tight gradient ml-4 pb-0 lg:pb-6">
                    Our Team
                </h1>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 w-full">

                    {/* Team Member 01 */}
                    <div className="relative bg-gray-50 p-8 rounded-md shadow-md flex flex-col">
                        <div className="relative w-full h-64 mb-6">
                            <Image
                                src="/assets/images/team/ellie.png"
                                alt="Ellie"
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="flex">
                            <h2 className="font-inter tracking-tight text-4xl font-extrabold gradient my-2">
                                Ellie
                            </h2>
                        </div>
                        <hr className="border-gray-400" />
                            <h3 className="flex justify-start lg:justify-end font-baloo tracking-tight text-lg md:text-xl font-semibold text-pink-600 my-2 mr-2">
                                Secretary
                            </h3>
                        <p className="font-baloo tracking-tight text-xl text-gray-900 py-2">
                        Hey, I’m Ellie! I’ve been part of 4WARD2GETHER since 2019 and serve as the group’s Secretary, which basically means I live for spreadsheets!
                        <br /> <br/> 
                        When I'm not buried in coursework at The University of Glasgow, you’ll probably find me on the netball court or out walking my two German Shepherds.
                        </p>
                    </div>

                    {/* Team Member 02 */}
                    <div className="relative bg-gray-50 p-8 rounded-md shadow-md flex flex-col">
                        <div className="relative w-full h-64 mb-6">
                            <Image
                                src="/assets/images/team/hollie.png"
                                alt="Hollie"
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="flex">
                            <h2 className="font-inter tracking-tight text-4xl font-extrabold gradient my-2">
                                Hollie
                            </h2>
                        </div>
                        <hr className="border-gray-400" />
                            <h3 className="flex justify-start lg:justify-end font-baloo tracking-tight ext-lg md:text-xl font-semibold text-pink-600 my-2 mr-2">
                                Social Media & Marketing Officer
                            </h3>
                        <p className="font-baloo tracking-tight text-xl text-gray-900 py-2">
                            Hi, I’m Hollie! I’ve been with 4WARD2GETHER for 5 years and I’m the Social Media and Marketing Officer - which means I’m always finding an excuse to open Canva.
                            <br/> <br/>
                            I’m currently studying Law at The University of Glasgow and dreaming of a future career in Human Rights Law.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}