import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
    return (
        <>
        <Navbar />
            <main className="section-spacing">
                <h1 className="text-4xl font-heading mb-4">Contact</h1>
                <p className="font-body">
                Drop us a line.
                </p>
            </main>
        <Footer />
        </>
    );
}