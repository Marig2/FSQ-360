'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';

const About: React.FC = () => {
  return (
 <section className="bg-gradient-to-r from-white via-gray-50 to-blue-50 px-4 py-12 md:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Column - Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl tracking-tight text-gray-900 sm:text-5xl lg:text-6xl text-balance">
              Built for Complete Food Safety, Quality, and Compliance Confidence
            </h1>
          </div>

          {/* Right Column - Description and CTA */}
          <div className="space-y-6 lg:pt-4">
            <p className="text-xl text-gray-500 leading-relaxed text-pretty">
              Our platform simplifies compliance management with powerful tools for food safety, quality audits, and
              regulatory traceability. Gain real-time insights, reduce risk, and ensure every process meets the highest
              global standards with ease.
            </p>
            <Button
            variant='outline'
              className="bg-[#00A86B] text-white px-8 py-3 text-base font-medium rounded-lg transition-colors"
            >
              Get Started for Free
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 lg:mt-16">
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
        </div>
      </div>
    </section>
  );
};

export default About;