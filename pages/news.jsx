'use client';

export default function News() {
    return (
        <section className="mt-2 md:mt-10 m-0 md:ml-10">
            <div className="w-full text-left">

                {/* Page Title */}
                <h1 className="font-inter text-4xl md:text-6xl font-extrabold tracking-tight gradient ml-4 pb-0 lg:pb-6">
                    News
                </h1>

                {/* Instagram Embed Container */}
                <div className="flex justify-center mt-10">
                    <script src="https://static.elfsight.com/platform/platform.js" async></script>
                    <div className="elfsight-app-16d953f9-96ff-4d19-9d55-4897c8570fb0" data-elfsight-app-lazy></div>
                </div>

            </div>
        </section>
    );
}