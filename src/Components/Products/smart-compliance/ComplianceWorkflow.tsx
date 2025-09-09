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
    title: "Identify Requirements",
    description:
      "The platform gathers industry regulations and company policies into one place, helping you identify exactly what compliance standards you need to meet without confusion or delay.",
    image: "/complianceStep1.png",
  },
  {
    id: 2,
    title: "Set Up Controls",
    description:
      "Build workflows, assign responsibilities, and establish processes to ensure compliance tasks are consistently managed, tracked, and documented according to both internal and external requirements.",
    image: "/complianceStep2.png",
  },
  {
    id: 3,
    title: "Monitor Compliance",
    description:
      "Real-time dashboards and notifications track compliance activities, instantly alerting teams about risks, gaps, or deadlines so nothing important is overlooked during daily operations.",
    image: "/complianceStep3.png",
  },
  {
    id: 4,
    title: "Generate Reports",
    description:
      "Create detailed compliance reports instantly for audits, certifications, and internal reviews, ensuring all stakeholders have clear visibility into compliance performance and readiness.",
    image: "/complianceStep4.png",
  },
]

export default function ComplianceWorkflow() {
  return (
    <section className="relative sm:py-10 px-4">
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
