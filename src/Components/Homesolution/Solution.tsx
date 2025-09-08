'use client';
import React from 'react';
import Image from 'next/image';

import { useState } from "react";
import { Button } from '../ui/Button';

const tabs = [
    "Food Safety Programs",
    "GFSI Software",
    "Compliance",
    "Quality",
    "Audit & Gap",
    "Learning",
    "Supplier",
];

const Solution: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Food Safety Programs");
    return (
        <section className="bg-white mt-8 px-4 sm:px-6 lg:px-8" aria-labelledby="solutions-heading">
            <div className="container mx-auto">
                {/* Heading and Subheading */}
                <div className="text-center space-y-4 mb-8">
                    <h2 id="solutions-heading" className="text-4xl md:text-5xl text-black">
                        Smart Solutions for Every Need
                    </h2>
                    <p className="text-gray-500 text-[20px] text-base md:text-lg">
                       From compliance to quality, our tools simplify workflows and boost efficiency across industries.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <nav
                        className="flex flex-wrap justify-center gap-2 md:gap-4 border border-gray-100 py-2 px-3 rounded-2xl"
                        aria-label="Solutions tabs"
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 cursor-pointer rounded-xl text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100
          ${activeTab === tab
                                        ? "bg-black text-white"
                                        : "text-gray-700 hover:text-gray-900"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>


                {/* Content Area */}
                <div className="bg-gray-50 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Text Content */}
                    <div className="space-y-4">
                        <h3 className="text-[32px] md:text-3xl text-black">
                            Supplier Management
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base">
                            Build stronger, safer supplier networks with end-to-end visibility. Our supplier management solution helps you onboard, monitor, and evaluate suppliers while maintaining compliance with food safety standards. Reduce risks, ensure traceability, and keep quality consistent across your entire supply chain.
                        </p>
                        <p className="text-gray-500 text-sm md:text-base">
                          Build stronger, safer supplier networks with end-to-end visibility. Our supplier management solution helps you onboard, monitor, and evaluate suppliers while maintaining compliance with food safety standards. Reduce risks, ensure traceability, and keep quality consistent across your entire supply chain.
                        </p>
                        <Button className="bg-[#00A86B] text-white px-6 py-3 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
                            Learn More
                        </Button>
                    </div>

                    {/* Image */}
                    <div className="relative h-64 md:h-auto">
                        <Image
                            src="/supplier.png"
                            alt="Person managing supplier inventory with clipboard and produce"
                            width={582}
                            height={382}
                            className="object-cover rounded-2xl"

                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;