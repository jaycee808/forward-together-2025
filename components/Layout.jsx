import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div class="blob-outer-container">
                <div class="blob-inner-container">
                    <div class="blob"></div>
                </div>
            </div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}