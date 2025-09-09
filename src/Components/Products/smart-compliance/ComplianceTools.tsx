"use client"

import Image from "next/image"

const featuresTop = [
    {
        id: 1,
        title: "Paperless Audits",
        description:
            "Digitize compliance workflows, eliminating manual paperwork and inefficiencies.",
    },
    {
        id: 2,
        title: "NC Tracker",
        description:
            "Monitor non-conformities with clear records and structured resolution paths.",
    },
    {
        id: 3,
        title: "Automated Scheduling",
        description:
            "Schedule compliance checks and updates automatically to avoid missed deadlines.",
    },
]

const featuresBottom = [
    {
        id: 4,
        title: "Analytics Dashboard",
        description:
            "Gain actionable insights from real-time compliance data and metrics.",
    },
    {
        id: 5,
        title: "Instant Notifications",
        description:
            "Receive alerts for upcoming audits, changes, or compliance risks instantly.",
    },
    {
        id: 6,
        title: "Template Library",
        description:
            "Use pre-built templates to standardize compliance checks and documentation.",
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
                    Smart Features for Smarter Compliance
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                    Integrated tools that make compliance easier, faster, and more effective.
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
                        src="/ComplianceTools.png"
                        alt="Tools"
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
