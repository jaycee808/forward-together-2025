import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OurStory() {
    return (
        <>
        <Navbar />
            <main className="section-spacing">
                <h1 className="text-4xl font-heading mb-4">Our Story</h1>
                <p className="font-body">
                Let me tell you a story.
                </p>
            </main>
        <Footer />
        </>
    );
}