"use client"

import Image from "next/image"
import { Card } from "../../ui/Card"
import { motion } from "framer-motion"

const industries = [
  {
    id: 1,
    icon: "/CFAFea1.png",
    title: "Policy Control",
    description: "Proactive notifications to identify compliance risks early."
  },
  {
    id: 2,
    icon: "/CFAFea2.png",
    title: "Risk Alerts",
    description: "Identify true causes behind nonconformities with guided analysis tools."
  },
  {
    id: 3,
    icon: "/CFAFea3.png",
    title: "Audit Logs",
    description: "Complete digital trail for accountability and transparency."
  },
  {
    id: 4,
    icon: "/audit-feat-4.png",
    title: "Data Security",
    description: "Secure handling of sensitive compliance documents."
  },
  {
    id: 5,
    icon: "/CFAFea5.png",
    title: "Quick Reports",
    description: "Generate compliance reports instantly with real-time accuracy."
  },
  {
    id: 6,
    icon: "/CFAFea6.png",
    title: "Task Automation",
    description: "Automate routine compliance tasks for efficiency."
  },
  {
    id: 7,
    icon: "/CFAFea7.png",
    title: "Custom Rules",
    description: "Define and configure compliance rules to fit your needs."
  },
  {
    id: 8,
    icon: "/CFAFea8.png",
    title: "Team Access",
    description: "Role-based permissions ensure the right access for the right people."
  },
  {
    id: 9,
    icon: "/CFAFea9.png",
    title: "Global Standard",
    description: "Stay aligned with ISO, GFSI, HACCP, and other frameworks."
  }
]

export default function ComplianceFeatures() {
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
            <span className="text-black">Powerful Tools for Total Compliance</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#667085] mx-auto px-2">
            Designed to simplify regulatory workflows, reduce risks, and keep your business compliant at every stage.
          </p>
        </div>

        {/* Cards Grid with animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
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
        </div>
      </div>
    </section>
  )
}
