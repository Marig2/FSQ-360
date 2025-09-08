"use client"

import Image from "next/image"

const featuresTop = [
    {
        id: 1,
        title: "Digital Auditing",
        description:
            "Conduct audits seamlessly with zero paperwork, ensuring efficiency and faster compliance tracking.",
    },
    {
        id: 2,
        title: "Issue Management",
        description:
            "Identify, document, and resolve non-conformities quickly to maintain consistent quality standards.",
    },
    {
        id: 3,
        title: "Smart Scheduling",
        description:
            "Plan, assign, and track audit activities with ease to boost productivity.",
    },
]

const featuresBottom = [
    {
        id: 4,
        title: "Insight Dashboard",
        description:
            "Monitor real-time performance, compliance status, and progress through visual dashboards.",
    },
    {
        id: 5,
        title: "Instant Alerts",
        description:
            "Stay informed with timely notifications about tasks, updates, and audit schedules.",
    },
    {
        id: 6,
        title: "Template Library",
        description:
            "Access ready-to-use, customizable audit templates to standardize and simplify audit processes.",
    },
]

export default function ComplianceFeatures() {
    return (
        <section className="relative py-20 px-4">
            <div className="container mx-auto text-center">
                {/* Badge */}
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-xl">
                        Features
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                    Smart Features, Smarter Compliance
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                    Unlock powerful tools that simplify food safety, quality, and compliance
                    management in one seamless platform.
                </p>

                {/* Split Border (half green, half gray) */}
                <div className="flex w-full mb-10">
                    <div className="w-1/3 border-b-4 border-[#00A86B]"></div>
                    <div className="w-full border-b-4 border-gray-200"></div>
                </div>

                {/* Top Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10">

                    {featuresTop.map((feature) => (
                        <div key={feature.id} className="px-4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-base">{feature.description}</p>
                        </div>
                    ))}
                </div>



                {/* Image */}
                <div className="relative w-full h-64 sm:h-96 lg:h-[400px] rounded-2xl overflow-hidden mb-10">
                    <Image
                        src="/Compliance.png"
                        alt="Feature Preview"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Split Border (half green, half gray) */}
                <div className="flex w-full mb-10">
                    
                    <div className="w-full border-b-2 border-gray-200"></div>
                </div>

                {/* Bottom Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {featuresBottom.map((feature) => (
                        <div key={feature.id} className="px-4">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 text-base">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
