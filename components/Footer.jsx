import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-red-500 text-gray-50 px-6 sm:px-12 lg:px-20 py-12 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
            {/* Logo */}
            <div className="flex flex-col items-center">
            <Image
                src="/assets/images/logo-name.svg"
                alt="Forward Together Logo"
                width={300}
                height={100}
                className="h-20 w-auto"
            />
        
            </div>

            {/* Charity & Social Icons */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-gray-100 mt-6">
            <p className="mb-2 md:mb-0">Registered Charity No. SC053309</p>
            <div className="flex gap-4">
                <SocialIcon href="#" label="Instagram" icon={<Instagram size={20} />} />
                <SocialIcon href="#" label="Twitter" icon={<Twitter size={20} />} />
                <SocialIcon href="#" label="Facebook" icon={<Facebook size={20} />} />
            </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-gray-100 pt-4" />

            {/* Copyright */}
            <div className="text-sm text-gray-100">
                <p>© {new Date().getFullYear()} Forward Together. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
}

function SocialIcon({ href, label, icon }) {
    return (
        <Link
        href={href}
        aria-label={label}
        >
        {icon}
        </Link>
    );
}