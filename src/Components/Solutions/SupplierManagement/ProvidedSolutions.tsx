'use client'
import { useState } from "react"
import Image from "next/image"
import { IoArrowForward } from "react-icons/io5"

export default function Solutions() {
    const solutions = [
        {
            title: "Supplier Approval",
            description:
                "Easily manage vendor onboarding and qualification, ensuring only trusted suppliers meet your business and product requirements from the very start.",
        },
        {
            title: "Supplier Auditing",
            description:
                "Conduct regular audits with structured checklists and automated reporting to ensure suppliers meet quality, safety, and regulatory standards consistently.",
        },
        {
            title: "Supplier Compliance",
            description:
                "Track certifications, regulations, and internal compliance requirements in one place, reducing risks of penalties or supply disruptions.",
        },
        {
            title: "Performance Review",
            description:
                "Monitor supplier KPIs with real-time insights into delivery timelines, quality performance, and reliability to make data-driven decisions.",
        },
    ]

    const [activeIndex, setActiveIndex] = useState<number | null>(0)

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
                    Spot and Fix Issues
                </h2>
                <p className="text-lg text-gray-500 text-center max-w-2xl mx-auto mb-16">
                    Maintain reliable supplier performance by addressing management challenges and ensuring consistent quality across your supply chain.
                </p>


                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Content - Solutions List */}
                    <div className="space-y-8">
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className="group cursor-pointer"
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <div
                                    className={`border-l-4 pl-6 py-2 transition-all duration-200 ${activeIndex === index
                                        ? "border-[#00A86B]" // active (expanded)
                                        : "border-transparent hover:border-[#00A86B]" // hover highlight
                                        }`}
                                >
                                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                                        {solution.title}
                                    </h3>

                                    {activeIndex === index && (
                                        <div className="space-y-4">
                                            <p className="text-gray-500 text-lg leading-relaxed">
                                                {solution.description}
                                            </p>
                                            <button className="inline-flex items-center gap-2 text-[#00A86B] hover:text-[#00A86B] font-medium transition-colors duration-200 group/btn">
                                                Learn more
                                                <IoArrowForward className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image
                                src="/provided-solution.png"
                                alt="Two business professionals collaborating while looking at analytics dashboards on computer monitors"
                                width={610}
                                height={440}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
