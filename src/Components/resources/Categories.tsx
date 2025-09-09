'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion,  Variants } from 'framer-motion'

const Categories = () => {
  const [activeTab, setActiveTab] = useState("E-Books")

  const ebooks = [
    { id: 1, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (7).png' },
    { id: 2, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image.png' },
    { id: 3, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (1).png' },
    { id: 4, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (2).png' },
    { id: 5, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (3).png' },
    { id: 6, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (4).png' },
    { id: 7, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (5).png' },
    { id: 8, title: 'Thinking About The Future Of Food Safety - A Foresight Report', image: '/Image (6).png' },
  ]

  const tabs = ['E-Books', 'White Papers', 'Data Sheets', 'Case Studies']

  // Animation variants
  const container:Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  

  const item:Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <div className="container mx-auto p-4">
      {/* Tabs */}
      <nav className="flex justify-center" aria-label="Solutions tabs">
        <div className="inline-flex flex-wrap gap-2 md:gap-4 border border-gray-100 py-2 px-2 rounded-2xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 cursor-pointer rounded-xl text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100
                ${activeTab === tab
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:text-gray-900'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Grid with animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {ebooks.map((ebook) => (
          <motion.div
            key={ebook.id}
            variants={item} // ✅ now works since parent controls animation
            className="rounded-lg overflow-hidden relative"
          >
            <Image
              src={ebook.image}
              alt={ebook.title}
              width={411}
              height={280}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Categories
