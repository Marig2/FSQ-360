"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  quote: string
  name: string
  title: string
  company: string
  avatar: string
}

interface Company {
  name: string
  logo: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "This platform has completely streamlined our supplier management and compliance process. What used to take weeks, now takes hours.",
    name: "Ammar Foley",
    title: "Finance Manager",
    company: "Sisyphus",
    avatar: "/Avatar.png",
  },
  {
    id: 2,
    quote:
      "The automation capabilities have transformed how we handle vendor relationships. Our team is now 3x more efficient.",
    name: "Sarah Chen",
    title: "Operations Director",
    company: "TechFlow",
    avatar: "/Avatar.png",
  },
  {
    id: 3,
    quote: "Implementation was seamless and the ROI was immediate. This is exactly what our procurement team needed.",
    name: "Marcus Rodriguez",
    title: "Procurement Lead",
    company: "InnovateCorp",
    avatar: "/Avatar.png",
  },
]

const companies: Company[] = [
  {name:"", logo: "/Logo wrap.png" },
  {name:"", logo: "/Logo wrap (1).png" },
  { name:"", logo: "/Logo wrap (2).png" },
  { name:"", logo: "/Logo wrap (3).png" },
  {name:"", logo: "/Logo wrap (4).png" },
]

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <main className="min-h-screen">
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Testimonial Content */}
          <div className="text-center mb-12">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight mb-8 text-balance">
              {currentTestimonial.quote}
            </blockquote>

            {/* Avatar and Info */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src={currentTestimonial.avatar || "/placeholder.svg"}
                  alt={`${currentTestimonial.name} headshot`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{currentTestimonial.name}</h3>
                <p className="text-gray-600">
                  {currentTestimonial.title}, {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Company Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center">
                <Image
                  src={company.logo}
                  alt="logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-emerald-500" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
