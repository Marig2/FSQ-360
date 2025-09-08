"use client"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";

type Step = {
  id: number
  title: string
  description: string
  image: string
}

const steps: Step[] = [
  {
    id: 1,
    title: "Smart Supplier as a Supplier Management Solution",
    description:
      "Gain control over vendor risk with customizable requirements and structured documentation, ensuring every supplier is properly qualified, monitored, and aligned with your business standards.",
    image: "/issue1.png",
  },
  {
    id: 2,
    title: "Smart Specification as a Supplier Management Solution",
    description:
      "Facilitate clear communication and mutual agreement of material specifications between customers and suppliers, minimizing misunderstandings and strengthening supply chain consistency through centralized documentation and approval workflows.",
    image: "/issue2.png",
  },
  {
    id: 3,
    title: "Smart Audit as a Supplier Management Solution",
    description:
      "Evaluate supplier readiness with comprehensive audits, helping identify compliance gaps early, drive continuous improvement, and maintain high standards of quality, safety, and regulatory conformance across your supply chain.",
    image: "/issue3.png",
  },
  {
    id: 4,
    title: "Smart Compliance as a Supplier Management Solution",
    description:
      "Automate compliance checks by verifying products against agreed specifications, enabling faster approvals, reducing delays in material release, and ensuring accurate, timely processes that align with industry and regulatory requirements.",
    image: "/issue4.png",
  },
  {
    id: 5,
    title: "Smart CAPA as a Supplier Management Solution",
    description:
      "Streamline the management of supplier complaints and deviations with structured investigations, root cause analysis, and corrective/preventive actions to resolve issues quickly and strengthen supplier performance reliability.",
    image: "/issue5.png",
  },
]

export default function SupplierWorkflow() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto">
        {/* Badge */}
        <div className="mb-4 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl">
            Solutions
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-4">
          Solutions We Provide
        </h2>
        <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-16">
          Empowering businesses with tools to streamline supplier approval, auditing, compliance tracking, and performance evaluation for stronger, more reliable supply chains.
        </p>

        {/* Timeline */}
        <div className="relative">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 relative"
              >
                {/* Step connector line
                <div
                  className={`hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px ${
                    step.id === 1
                      ? "bg-green-600" // solid green for Step 1
                      : "border-l-2 border-dotted border-gray-400" // dotted for others
                  }`}
                ></div> */}

                {/* Step marker at top of border */}
                {/* <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -top-6">
                  <div className="flex flex-col items-center bg-white px-2">
                    <span className="text-xs uppercase text-gray-500">Step</span>
                    <span className="text-green-600 font-bold text-lg">
                      {String(step.id).padStart(2, "0")}
                    </span>
                  </div>
                </div> */}

                {/* Image */}
                <div
                  className={`relative w-full h-64 px-4 sm:h-80 lg:h-72 rounded-2xl overflow-hidden ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"
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
                  className={`relative ${index % 2 === 0
                    ? "lg:order-2 lg:pl-12 text-left"
                    : "lg:order-1 lg:pr-12 text-left"
                    }`}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500">{step.description}</p>

                  <div className="flex">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-[#00A86B] hover:underline mt-2"
                    >
                      Learn More
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
