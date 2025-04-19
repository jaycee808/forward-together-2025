import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="text-gray-900 px-6 sm:px-12 lg:px-20 py-12 mt-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center md:text-left">
            
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">

            <div className="w-full w-auto flex justify-center justify-end">
                <Image
                src="/assets/images/hands-together.svg"
                alt="Hands Together"
                width={100}
                height={100}
                className="h-24 w-24 sm:h-28 sm:w-28"
                />
            </div>
            </div>

            {/* Charity Info & Social Icons */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-900 font-inter gap-4">
            <p>Registered Charity No. SC053309</p>
            <div className="flex gap-4">
                <SocialIcon href="#" label="Instagram" icon={<Instagram size={20} />} />
                <SocialIcon href="#" label="Twitter" icon={<Twitter size={20} />} />
                <SocialIcon href="#" label="Facebook" icon={<Facebook size={20} />} />
            </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-gray-900 pt-2" />

            {/* Copyright */}
            <div className="font-inter text-sm text-gray-900 text-center">
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
        className="hover:text-gray-600 transition-colors"
        >
        {icon}
        </Link>
    );
}
