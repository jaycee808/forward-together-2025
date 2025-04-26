'use client';

import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Mail, Facebook } from 'lucide-react';

export default function Layout({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden flex flex-col lg:flex-row">

            {/* Blob Background */}
            <div className="blob-outer-container">
                <div className="blob-inner-container">
                    <div className="blob"></div>
                </div>
            </div>

            {/* Left Column */}
            <div className="flex flex-col items-center w-full lg:w-1/4 py-8 px-4 lg:px-8 relative z-10">

                {/* Logo */}
                <div className="w-full flex justify-center lg:justify-start">
                    <Link href="/">
                        <Image
                            src="/assets/images/logo-3d.svg"
                            alt="Forward Together Logo"
                            width={200}
                            height={100}
                            priority
                            className="h-30 lg:h-40 w-auto"
                        />
                    </Link>
                </div>

            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between w-full lg:w-3/4 py-8 px-6 sm:px-8 lg:px-16 relative z-10 min-h-screen">

                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <main className="flex-1 mt-10">
                    {children}
                </main>

                {/* Footer */}
                <footer className="w-full text-xs font-inter text-gray-900 mt-12 sm:mt-16">
                    <div className="border-t border-gray-900 pt-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                        
                        {/* Social Icons */}
                        <div className="flex gap-6">
                            <SocialIcon href="https://www.instagram.com/4ward2gethersocial" label="Instagram" icon={<Instagram size={24} />} />
                            <SocialIcon href="https://www.facebook.com/4ward2gethercelebratingdiversity" label="Facebook" icon={<Facebook size={24} />} />
                            <SocialIcon href="mailto:ward2gether.1@gmail.com" label="Email" icon={<Mail size={24} />} />
                        </div>

                        {/* Copyright */}
                        <div className="text-center sm:text-left">
                            <p>
                                © {new Date().getFullYear()} Forward Together<br />
                                Registered Charity No. SC053309
                            </p>
                        </div>

                    </div>
                </footer>
            </div>
        </div>
    );
}

function SocialIcon({ href, label, icon }) {
    return (
        <Link href={href} aria-label={label} className="hover:text-pink-500 transition-colors">
            {icon}
        </Link>
    );
}