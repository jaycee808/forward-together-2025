import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import NeatBackground from '@/components/NeatBackground';
export default function Layout({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <NeatBackground />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}