"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Materix() {
  const metrics = [
    { value: "5.6K+", label: "Successful Audits Completed" },
    { value: "120+", label: "Clients Worldwide" },
    { value: "20+", label: "Years of Industry Experience" },
    { value: "99%", label: "Client Retention Rate" },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-white">
      <section className="py-16 px-4 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Team Image */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:mx-0">
                <Image
                  src="/materix.png"
                  alt="Professional team collaborating around a desk in a modern office setting"
                  width={610}
                  height={536}
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Stats Content */}
            <motion.div
              className="order-1 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <p className="text-sm md:text-base mb-4 font-medium px-4 py-1 rounded-xl bg-gray-100 text-gray-500 inline-block">
                  Our Stats
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
                  We’re only just getting started on our journey
                </h2>
              </div>

              {/* Metrics Grid */}
              <motion.div
                className="grid grid-cols-2 gap-8 md:gap-12 justify-items-center md:justify-items-center md:mx-auto"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.2 },
                  },
                }}
                viewport={{ once: true }}
              >
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="text-center md:text-left"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-emerald-800 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-gray-500 text-xl md:text-base">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
