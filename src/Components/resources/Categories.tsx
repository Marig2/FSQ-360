'use client'

import Image from 'next/image';
import { useState } from 'react';

const Categories = () => {
    const [activeTab, setActiveTab] = useState("EBook");
    const ebooks = [
        { id: 1, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (7).png' },
        { id: 2, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image.png' },
        { id: 3, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (1).png' },
        { id: 4, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (2).png' },
        { id: 5, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (3).png' },
        { id: 6, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (4).png' },
        { id: 7, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (5).png' },
        { id: 8, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (6).png' },
    ];

    const tabs = ['E-Books', 'White Papers', 'Data Sheets', 'Case Studies'];

    return (
        <div className="container mx-auto p-4">
            <nav className="flex justify-center" aria-label="Solutions tabs">
                <div className="inline-flex flex-wrap gap-2 md:gap-4 border border-gray-100 py-2 px-2 rounded-2xl">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-2 cursor-pointer rounded-xl text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100
          ${activeTab === tab
                                    ? "bg-black text-white"
                                    : "text-gray-700 hover:text-gray-900"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </nav>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {ebooks.map((ebook) => (
                    <div key={ebook.id} className="rounded-lg overflow-hidden relative">
                        <Image src={ebook.image} alt={ebook.title} width={411} height={280} className="w-full h-auto object-cover" />
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;