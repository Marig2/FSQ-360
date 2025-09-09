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
    title: "Identify Issues",
    description:
      "Capture nonconformities in real time from audits, inspections, or reports, ensuring no problem goes unnoticed and immediate actions can be initiated without delays.",
    image: "/CFAStep1.png",
  },
  {
    id: 2,
    title: "Analyze Causes",
    description:
      "Use systematic root cause analysis methods to understand underlying problems, enabling your teams to eliminate guesswork and focus on accurate, evidence-based solutions that deliver real impact.",
    image: "/CFAStep2.png",
  },
  {
    id: 3,
    title: "Take Actions",
    description:
      "Assign corrective and preventive actions to responsible personnel with clear timelines, workflows, and accountability, ensuring problems are effectively addressed and compliance requirements are consistently met.",
    image: "/CFAStep3.png",
  },
  {
    id: 4,
    title: "Track & Close",
    description:
      "Monitor CAPA progress through dashboards and alerts, verify effectiveness of implemented actions, and close cases only when compliance standards and long-term preventive measures are fully achieved.",
    image: "/CFAStep4.png",
  },
]

export default function CFAWorkflow() {
  return (
    <section className="relative sm:py-16 px-4">
      <div className="container mx-auto">
        {/* Badge */}
        <div className="mb-4 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl">
            How it works
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-4">
          A Simple Path from Detection to Resolution
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-16">
          Follow a structured four-step workflow that transforms issues into opportunities for compliance and continuous improvement.
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
