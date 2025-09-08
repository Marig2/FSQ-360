// components/BlogSection.js
import React, { useState } from 'react';
import { Card } from '../ui/Card';
import Image from 'next/image';


export default function NewBlogs() {
  const [activeTab, setActiveTab] = useState("View all");
  const tabs = ['View all', 'Design', 'Product', 'Software Development', 'Customer Success'];
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
          <nav className="flex justify-center" aria-label="Solutions tabs">
                <div className="inline-flex flex-wrap gap-2 md:gap-4 border border-gray-100 py-2 px-2 rounded-2xl">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-2 cursor-pointer rounded-xl text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100
          ${activeTab === tab
                                    ? "bg-[#00A86B] text-white"
                                    : "text-gray-700 hover:text-gray-900"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </nav>
        
      </div>

      {/* Grid with 3 cards in same row */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side (Card 1) */}
        <div className="flex-1">
          <Card className="overflow-hidden h-full">
            <div className="relative w-full h-48">
              <Image
                src="/blog.png"
                alt="Presentation Image"
                width={624}
                height={251}
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="p-4">
              <h1 className="text-[24px] font-semibold">UX review presentations</h1>
              <p className="text-gray-500 text-[18px] mt-2">
                How do you create compelling presentations that wow your colleagues and impress your managers?
              </p>
              <div className="flex gap-3 mt-2">
                <span className="inline-block px-3 py-1 text-sm font-medium mt-2 text-[#6941C6] bg-[#F9F5FF] rounded-full">Design</span>
                <span className="inline-block px-3 py-1 text-sm font-medium mt-2 text-[#3538CD] bg-[#EEF4FF] rounded-full">Research</span>
                <span className="inline-block px-3 py-1 text-sm font-medium mt-2 text-[#C11574] bg-[#FCCEEE] rounded-full">Design</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right side (Card 2 + Card 3 stacked) */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Card 2 */}
          <Card className="flex flex-row items-center overflow-hidden w-full">
            <div className="relative w-40 h-40 flex-shrink-0">
              <Image
                src="/blog3.png"
                alt="Financial Clarity"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="p-4 flex-1">
              <p className="text-[#00A86B] text-[14px] font-semibold">Phoenix Baker • 19 Jan 2025</p>
              <p className="text-[20px] font-semibold">Migrating to Linear 101</p>
              <p className="text-gray-500 text-[16px] mt-2">
                Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...
              </p>
              <div className="mt-2 flex gap-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-[#026AA2] bg-[#F0F9FF] rounded-full">Software</span>
                <span className="inline-block px-3 py-1 text-sm font-medium text-[##C11574] bg-[#FDF2FA] rounded-full">Research</span>
              </div>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="flex flex-row items-center overflow-hidden w-full">
            <div className="relative w-40 h-40 flex-shrink-0">
              <Image
                src="/blog2.png"
                alt="Audit Practices"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="p-4 flex-1">
              <p className="text-[#00A86B] text-[14px] font-semibold">Lana Steiner • 18 Jan 2025</p>
              <p className="text-[20px] font-semibold">Building your API stack</p>
              <p className="text-gray-500 text-[16px] mt-2">
                The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...
              </p>
              <div className="mt-2 flex gap-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-[#026AA2] bg-[#F0F9FF] rounded-full">Software</span>
                <span className="inline-block px-3 py-1 text-sm font-medium text-[##C11574] bg-[#FDF2FA] rounded-full">Research</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
