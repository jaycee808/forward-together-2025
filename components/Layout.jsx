'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden flex flex-col">

        {/* Blob Background */}
        <div className="blob-outer-container">
            <div className="blob-inner-container">
            <div className="blob"></div>
            </div>
        </div>

        {/* Navbar */}
        <header className="w-full">
            <Navbar />
        </header>

        {/* Page Content */}
        <main className="flex-1 relative z-10 px-6 sm:px-8 lg:px-16 mt-8">
            {children}
        </main>

        {/* Footer */}
        <Footer />

        </div>
    );
}