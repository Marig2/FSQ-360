"use client"

import Image from "next/image"
import { Card } from "../../ui/Card"
import { motion } from "framer-motion"

const industries = [
  {
    id: 1,
    icon: "/audit-feat-1.png",
    title: "Audit Ready",
    description: "Ensure a successful audit outcome and streamline the auditing process."
  },
  {
    id: 2,
    icon: "/audit-feat-2.png",
    title: "Digital Audit Records",
    description: "Customized audit programs with custom built templates to replace paper-based audit."
  },
  {
    id: 3,
    icon: "/audit-feat-3.png",
    title: "Offline Auditing",
    description: "Conduct audits offline in remote or poor connectivity using the offline audit app."
  },
  {
    id: 4,
    icon: "/audit-feat-4.png",
    title: "NC Management",
    description: "Simplify NC management by assigning corrective actions, monitoring them, and providing reminders"
  },
  {
    id: 5,
    icon: "/audit-feat-5.png",
    title: "Scores and Rating",
    description: "Quantify audit outcomes with automated score based responses and ratings."
  },
  {
    id: 6,
    icon: "/audit-feat-6.png",
    title: "Audit Scheduling",
    description: "Schedule internal or external audits with scheduling feature, and track them to maintain historical schedule compliances"
  },
  {
    id: 7,
    icon: "/audit-feat-7.png",
    title: "Dashboard and Reporting",
    description: "Visualize audit KPIs with our dashboard graphs and reporting features."
  },
  {
    id: 8,
    icon: "/audit-feat-8.png",
    title: "Multi Language",
    description: "Conduct audit in your own language with our multi language support feature."
  },
  {
    id: 9,
    icon: "/audit-feat-9.png",
    title: "Improve Compliance Gaps",
    description: "Efficient audit management feature allows to track and improve compliance gaps."
  }
]

export default function ManagementFeatures() {
  return (
    <section className="relative text-center pt-20 px-4">
      <div className="container mx-auto grid gap-4 grid-cols-1">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center px-3 py-1.5 bg-gray-100 rounded-[12px] shadow-sm text-sm">
            <p className="text-lg font-medium text-gray-500">Features</p>
          </div>
        </div>

        {/* Heading */}
        <div className="flex justify-center flex-col gap-8">
          <h1 className="mt-5 text-4xl leading-tight">
            <span className="text-black">Smarter Audit Management Features</span>
          </h1>
          <p className="text-xl text-[#667085] mx-auto">
            Tools designed to streamline audits, ensure accuracy, and deliver transparency at every step.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
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
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <Card className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-6 transition">
                <Image
                  src={industry.icon}
                  alt={industry.title}
                  width={60}
                  height={60}
                  className="object-contain mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-base">{industry.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
