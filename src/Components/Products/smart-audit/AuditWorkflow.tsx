"use client"

import Image from "next/image"

type Step = {
  id: number
  title: string
  description: string
  image: string
}

const steps: Step[] = [
  {
    id: 1,
    title: "Plan Your Audit",
    description:
      "Easily schedule audits, assign responsibilities, and prepare requirements ahead of time for a structured and organized workflow.",
    image: "/step1.png",
  },
  {
    id: 2,
    title: "Conduct Digitally",
    description:
      "Use paperless tools to capture findings, upload evidence, and document observations directly in the system with full accuracy.",
    image: "/step2.png",
  },
  {
    id: 3,
    title: "Manage Non-Conformities",
    description:
      "Identify, track, and resolve issues effectively while ensuring corrective actions are monitored to maintain ongoing compliance.",
    image: "/step3.png",
  },
  {
    id: 4,
    title: "Analyze & Report",
    description:
      "Generate real-time reports and dashboards that provide valuable insights, helping businesses make data-driven decisions confidently.",
    image: "/step4.png",
  },
]

export default function AuditWorkflow() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto">
        {/* Badge */}
        <div className="mb-4 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl">
            How it works
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-4">
          How Smart Audit Works
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-16">
          Streamline your entire audit journey with clear, simple, and automated steps.
        </p>

        {/* Timeline */}
        <div className="relative">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 relative"
              >
                {/* Step connector line */}
                <div
                  className={`hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px ${
                    step.id === 1
                      ? "bg-green-600" // solid green for Step 1
                      : "border-l-2 border-dotted border-gray-400" // dotted for others
                  }`}
                ></div>

                {/* Step marker at top of border */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -top-6">
                  <div className="flex flex-col items-center bg-white px-2">
                    <span className="text-xs uppercase text-gray-500">Step</span>
                    <span className="text-green-600 font-bold text-lg">
                      {String(step.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`relative w-full h-64 sm:h-80 lg:h-72 rounded-2xl overflow-hidden ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div
                  className={`relative ${
                    index % 2 === 0
                      ? "lg:order-2 lg:pl-12 text-left"
                      : "lg:order-1 lg:pr-12 text-left"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
