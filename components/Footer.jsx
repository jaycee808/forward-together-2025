'use client';

import Link from 'next/link';
import { Instagram, Mail, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <section className="mt-2 md:mt-10 space-y-32">
        <div className="border-t border-gray-900 pt-4 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            
            {/* Social Icons */}
            <div className="flex gap-6 px-28 py-8">
            <SocialIcon href="https://www.instagram.com/4ward2gethersocial" label="Instagram" icon={<Instagram size={24} />} />
            <SocialIcon href="https://www.facebook.com/4ward2gethercelebratingdiversity" label="Facebook" icon={<Facebook size={24} />} />
            <SocialIcon href="mailto:4ward2gether.1@gmail.com" label="Email" icon={<Mail size={24} />} />
            </div>

            {/* Copyright */}
            <div className="font-baloo text-center text-base md:text-xl md:text-left px-2 md:px-28 py-4 md:py-8">
            <p>
                © {new Date().getFullYear()} Forward Together<br />
                Registered Charity No. SC053309
            </p>
            </div>
        </div>
        </section>
    );
}

function SocialIcon({ href, label, icon }) {
    return (
        <Link href={href} aria-label={label} className="hover:text-pink-500 transition-colors">
        {icon}
        </Link>
    );
}