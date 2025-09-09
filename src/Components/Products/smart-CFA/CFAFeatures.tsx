"use client"

import Image from "next/image"
import { Card } from "../../ui/Card"
import { motion } from "framer-motion"

const industries = [
  {
    id: 1,
    icon: "/CFAFea1.png",
    title: "Issue Logging",
    description: "Log issues instantly to prevent delays in corrective action workflows."
  },
  {
    id: 2,
    icon: "/CFAFea2.png",
    title: "Root Cause",
    description: "Identify true causes behind nonconformities with guided analysis tools."
  },
  {
    id: 3,
    icon: "/CFAFea3.png",
    title: "Action Plans",
    description: "Design corrective steps clearly with timelines and responsible team members."
  },
  {
    id: 4,
    icon: "/audit-feat-4.png",
    title: "Preventive Actions",
    description: "Introduce measures to avoid repeat issues and strengthen compliance processes."
  },
  {
    id: 5,
    icon: "/CFAFea5.png",
    title: "Task Assignment",
    description: "Assign and track tasks with built-in accountability for faster resolutions."
  },
  {
    id: 6,
    icon: "/CFAFea6.png",
    title: "Document Control",
    description: "Attach and manage CAPA documentation securely for easy audits."
  },
  {
    id: 7,
    icon: "/CFAFea7.png",
    title: "Audit Readiness",
    description: "Be prepared for internal or external audits with traceable CAPA records."
  },
  {
    id: 8,
    icon: "/CFAFea8.png",
    title: "Performance Tracking",
    description: "Measure effectiveness of actions with built-in progress monitoring dashboards."
  },
  {
    id: 9,
    icon: "/CFAFea9.png",
    title: "Regulatory Compliance",
    description: "Ensure compliance with industry standards through structured CAPA workflows."
  }
]

export default function CFAFeatures() {
  return (
    <section className="relative text-center sm:pt-12 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center px-3 py-1.5 bg-gray-100 rounded-xl shadow-sm text-sm sm:text-base">
            <p className="font-medium text-gray-500">Features</p>
          </div>
        </div>

        {/* Heading */}
        <div className="flex justify-center flex-col gap-6 sm:gap-8 max-w-3xl mx-auto">
          <h1 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            <span className="text-black">Comprehensive CAPA Capabilities</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#667085] mx-auto px-2">
            Essential tools to detect, analyze, and resolve issues effectively.
          </p>
        </div>

        {/* Cards Grid with Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              <Card className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-6 sm:p-8 transition hover:shadow-lg">
                <Image
                  src={industry.icon}
                  alt={industry.title}
                  width={60}
                  height={60}
                  className="object-contain mb-4 sm:mb-6"
                />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  {industry.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
