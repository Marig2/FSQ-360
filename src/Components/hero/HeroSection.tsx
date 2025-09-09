'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/Button';

const HeroSection: React.FC = () => {
    return (
        <section className="w-full flex items-center bg-white dark:bg-white mt-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center sm:px-6 bg-[#EBFFF8] lg:px-12 rounded-2xl">

                    {/* Left Side - Text and Buttons */}
                    <div className="space-y-6 py-10 md:py-16 lg:py-20">
                        {/* Review Badge */}
                        <div className="inline-flex items-center bg-white px-3 py-2 rounded-lg text-sm sm:text-base">
                            <span className="text-green-700 pr-2 font-semibold">4.5</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-yellow-400">☆</span>
                            <span className="ml-2 text-xs sm:text-sm">
                                <span className="text-blue-500">G</span>
                                <span className="text-red-500">o</span>
                                <span className="text-yellow-500">o</span>
                                <span className="text-blue-500">g</span>
                                <span className="text-green-500">l</span>
                                <span className="text-red-500">e</span>
                                <span className="text-gray-800 ps-2">10,000+ Reviews</span>
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            The Smarter Way to
                            <span className="block mt-2">Ensure Quality and</span>
                            <span className="text-[#00A86B] block mt-2">Compliance</span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl">
                            Stay audit-ready, ensure compliance, and build trust with powerful food safety management tools.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Button className="bg-[#00A86B] text-white px-6 py-3 rounded-md text-sm sm:text-base w-full sm:w-auto">
                                Get Started for Free
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-white border border-gray-200 text-gray-900 text-sm sm:text-base rounded-md px-6 py-3 w-full sm:w-auto"
                            >
                                Learn More
                            </Button>
                        </div>

                        {/* Trusted Users */}
                        <div className="inline-flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 text-sm text-gray-600 bg-gray-100 rounded-lg p-3 w-fit">
                            <div className="flex -space-x-2">
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                                    <Image src="/Avatar1.png" alt="Avatar 1" fill className="rounded-full object-cover" />
                                </div>
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                                    <Image src="/Avatar2.png" alt="Avatar 2" fill className="rounded-full object-cover" />
                                </div>
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                                    <Image src="/Avatar3.png" alt="Avatar 3" fill className="rounded-full object-cover" />
                                </div>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-white text-xs sm:text-sm font-semibold flex items-center justify-center rounded-full">
                                    10K+
                                </div>
                            </div>
                            <span className="text-xs sm:text-sm md:text-base">
                                Trusted technology, built to keep you compliant
                            </span>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="rounded-lg overflow-hidden w-full max-w-[480px] lg:max-w-[580px]">
                            <Image
                                src="/hero.png"
                                alt="hero Image"
                                width={582}
                                height={546}
                                className="object-contain w-full h-auto"
                                priority
                            />
                        </div>
                        {/* Carousel Dots */}
                        <div className="flex space-x-2 mt-4">
                            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
