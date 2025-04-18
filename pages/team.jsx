import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Team() {
    return (
        <>
        <Navbar />
            <main className="section-spacing">
                <h1 className="text-4xl font-heading mb-4">Team</h1>
                <p className="font-body">
                Meet the team.
                </p>
            </main>
        <Footer />
        </>
    );
}