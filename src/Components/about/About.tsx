'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-white via-gray-50 to-blue-50 dark:bg-white px-4 py-12 sm:px-6 md:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Column - Main Heading */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Built for Complete Food Safety, Quality, and Compliance Confidence
            </h1>
          </motion.div>

          {/* Right Column - Description and CTA */}
          <motion.div
            className="space-y-6 lg:pt-4 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Our platform simplifies compliance management with powerful tools for food safety, quality audits, and
              regulatory traceability. Gain real-time insights, reduce risk, and ensure every process meets the highest
              global standards with ease.
            </p>
            <Button
              variant="outline"
              className="bg-[#00A86B] text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-medium rounded-lg transition-colors w-full sm:w-auto"
            >
              Get Started for Free
            </Button>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="mt-10 md:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/about.png"
              alt="Point of sale system showing food safety compliance interface in a restaurant kitchen environment"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
