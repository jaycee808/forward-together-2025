import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="blob-outer-container">
                <div className="blob-inner-container">
                    <div className="blob"></div>
                </div>
            </div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}