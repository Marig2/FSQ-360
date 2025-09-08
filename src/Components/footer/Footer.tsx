'use client'

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-50 px-4">
            {/* Newsletter Section */}
            <div className="bg-[#002D1B] text-white rounded-xl max-w-7xl px-6 py-10 mt-10 mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Left Side */}
                    <div>
                        <h2 className="text-2xl font-bold">Stay Updated With United Auditors</h2>
                        <p className="text-white/80 mt-2">
                            Get compliance insights, audit tips, and industry updates delivered to your inbox.
                            No spam—just valuable knowledge.
                        </p>
                    </div>

                    {/* Newsletter Input + Disclaimer */}
                    <div className="flex flex-col w-full lg:w-1/2">
                        {/* Input & Button */}
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:flex-1 px-4 py-3 border border-gray-200 ring-gray-100 rounded-lg focus:ring-gray-200"
                            />
                            <button className="bg-[#00A86B] px-6 py-3 rounded-md text-white font-semibold hover:bg-[#008a59]">
                                Subscribe
                            </button>
                        </div>

                        {/* Disclaimer text right below */}
                        <p className="text-white/70 text-sm mt-3">
                            By submitting your email address, you agree to our Privacy Policy and Terms of Service.
                            You can unsubscribe anytime via the link in your email.
                        </p>
                    </div>
                </div>
            </div>


            {/* Footer Main */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {/* Logo & Contact */}
                <div>
                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={160}
                            height={60}
                            priority
                        />
                    </div>

                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#00A86B] rounded-full flex items-center justify-center">
                                <FaPhoneAlt className="text-white" />
                            </span>
                            <div>
                                <p className="text-gray-500 text-sm">Contact Us</p>
                                <p className="text-gray-800 font-medium">(703) 348-9111</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 bg-[#00A86B] rounded-full flex items-center justify-center">
                                <MdEmail className="text-white text-lg" />
                            </span>
                            <div>
                                <p className="text-gray-500 text-sm">Email Us</p>
                                <p className="text-gray-800 font-medium">email.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                        <li>Blogs</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Products</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>Smart Audit</li>
                        <li>Smart Audit</li>
                        <li>Smart Audit</li>
                        <li>Smart Audit</li>
                        <li>Smart Audit</li>
                        <li>Smart Audit</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Solutions</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>Audit Management</li>
                        <li>Audit Management</li>
                        <li>Audit Management</li>
                        <li>Audit Management</li>
                        <li>Audit Management</li>
                        <li>Audit Management</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Legals</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>Terms of Services</li>
                        <li>Privacy Policy</li>
                        <li>Licenses</li>
                    </ul>
                </div>
            </div>


            {/* Bottom Bar */}
            <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
                © 2025 FSQ 360. All rights reserved. Under Construction for better ADA compliance.
            </div>
        </footer>
    );
}
