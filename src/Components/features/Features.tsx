'use client';

import Image from "next/image";
import { Card } from "../ui/Card";


const featuresData = [
  {
    id: 1,
    icon: "/feat1.png",
    title: "Automated Compliance Tracking",
    description: "Stay audit-ready with real-time compliance updates and automated reporting."
  },
  {
    id: 2,
    icon: "/feat2.png",
    title: "Smart Quality Audits",
    description: "Conduct digital inspections with customizable checklists, reducing paperwork and errors."
  },
  {
    id: 3,
    icon:"/feat3.png",
    title: "Regulatory Management",
    description: "Easily manage evolving food safety regulations and stay ahead of requirements."
  },
  {
    id: 4,
    icon: "/feat4.png",
    title: "Traceability System",
    description: "Track products across the supply chain for full transparency and accountability."
  },
  {
    id: 5,
    icon: "/feat5.png",
    title: "Risk & Corrective Actions",
    description: "Identify issues early as possible and assign corrective actions for fast resolution."
  },
  {
    id: 6,
    icon: "/feat6.png",
    title: "Analytics & Reports",
    description: "Get insights with detailed dashboards, helping you make data-driven decisions."
  }
];

const Features: React.FC = () => {
  return (
    <section className="px-4 py-6 mt-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-6">
          Powerful Features Built for Food Safety
        </h2>
        <p className="text-xl text-center text-gray-500 mb-10">
          Streamline compliance, simplify audits, and ensure top-quality standards with smart tools designed for the food industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {featuresData.map((feature) => (
              <Card key={feature.id} className="bg-white/10 border border-gray-200 rounded-xl shadow-sm p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <div>
                    <p className="text-2xl font-semibold">{feature.title}</p>
                    <p className="text-gray-500 text-lg">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/features.png"
              alt="features"
              width={630}
              height={734}
              className="object-cover rounded-3xl w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
