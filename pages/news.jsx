import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function News() {
    return (
        <>
        <Navbar />
            <main className="section-spacing">
                <h1 className="text-4xl font-heading mb-4">News</h1>
                <p className="font-body">
                Roll up, roll up.
                </p>
            </main>
        <Footer />
        </>
    );
}