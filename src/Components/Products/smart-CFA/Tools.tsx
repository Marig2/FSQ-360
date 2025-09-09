"use client"

import Image from "next/image"

const featuresTop = [
    {
        id: 1,
        title: "Paperless Flow",
        description:
            "Digitize CAPA processes, removing paperwork and manual errors.",
    },
    {
        id: 2,
        title: "NC Tracker",
        description:
            "Monitor nonconformities from detection through closure with real-time visibility.",
    },
    {
        id: 3,
        title: "Task Scheduler",
        description:
            "Plan corrective actions with automated reminders and task prioritization.",
    },
]

const featuresBottom = [
    {
        id: 4,
        title: "Insight Dashboard",
        description:
            "Visualize CAPA progress and outcomes in one central dashboard.",
    },
    {
        id: 5,
        title: "Auto Alerts",
        description:
            "Send instant alerts to stakeholders for pending or overdue CAPAs.",
    },
    {
        id: 6,
        title: "Template Library",
        description:
            "Use customizable templates for fast, standardized CAPA reporting.",
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
                    Smarter Tools for Faster CAPA Resolution
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                    Automated features that save time, improve accuracy, and ensure corrective actions stick.
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
                        src="/CFATools.png"
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
