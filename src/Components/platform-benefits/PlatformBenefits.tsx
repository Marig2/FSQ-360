'use client';

import Image from 'next/image';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const PlatformBenefits: React.FC = () => {
    const features = [
        {
            id: 1,
            title: "Simplified Compliance",
            description: "Manage audits, suppliers, and certifications all in one place.",
            link: "#"
        },
        {
            id: 2,
            title: "Real-Time Monitoring",
            description: "Track updates and resolve issues instantly with live alerts.",
            link: "#"
        },
        {
            id: 3,
            title: "Trusted by Businesses",
            description: "Built for food brands that value quality and transparency.",
            link: "#"
        }
    ];


    return (
        <section className="bg-gray-900 dark:bg-gray-900 text-white py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative w-full h-[400px] md:h-[500px]">
                    <Image
                        src="/plateform.png"
                        alt="Plateform"
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="text-5xl font-semibold">Why Choose Our Platform</h2>
                    <p className="text-xl text-white">Three simple reasons to trust us for food safety and compliance.</p>
                    <div className="space-y-4">
                        {features.map((feature) => (
                            <Card
                                key={feature.id}
                                className="p-5 flex items-start gap-3"
                            >

                                {/* Text content */}
                                <div>
                                    <h3 className=" text-2xl">{feature.title}</h3>
                                    <p className="text-gray-200 text-lg mb-2">{feature.description}</p>
                                    <Button
                                        variant="outline"
                                        className="text-[#00A86B] p-0 h-auto font-normal"
                                    >
                                        <a href={feature.link}>Learn more →</a>
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlatformBenefits;