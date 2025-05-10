'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        setShowToast(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('Message sent!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Failed to send message.');
        }

        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <section className="mt-2 md:mt-10 m-0 md:ml-10">
            {/* Sent Notification */}
            {showToast && (
                <div className="absolute bottom-0 right-0 m-4 bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in">
                    {status}
                </div>
            )}

            <div className="w-full text-left">
                {/* Page Title */}
                <h1 className="font-inter text-4xl md:text-6xl font-extrabold tracking-tight gradient ml-4 pb-0 lg:pb-6">
                    Contact Us
                </h1>

                {/* Contact Form */}
                <div className="bg-gray-50 p-4 lg:p-12 rounded-lg shadow-md flex flex-col mt-12">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                        <div>
                            <label className="font-inter text-base md:text-lg font-semibold text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="font-baloo w-full mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label className="font-inter text-base md:text-lg font-semibold text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="font-baloo w-full mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                        </div>

                        <div>
                            <label className="font-inter text-base md:text-lg font-semibold text-gray-700">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="font-baloo w-full mt-2 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="font-inter tracking-tight bg-gradient text-gray-50 font-bold py-3 px-6 rounded-lg hover:border transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* (Optional fallback visible status message) */}
                    {!showToast && status && (
                        <p className="mt-6 font-inter text-gray-900 text-center">
                            {status}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}