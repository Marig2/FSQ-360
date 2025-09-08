'use client'

import Image from "next/image";

const Partners: React.FC = () => {
  const partners = [
    { name: 'aetna', logo: '/partner1.png', width: 100 },
    { name: 'Humana', logo: '/partner2.png', width: 120 },
    { name: 'TRICARE', logo: '/partner3.png', width: 110 },
    { name: 'GEHA', logo: '/partner4.png', width: 130 },
    { name: 'Medicare', logo: '/partner5.png', width: 100 },
    { name: 'UnitedHealthcare', logo: '/partner6.png', width: 150 },
    { name: 'Cigna', logo: '/partner7.png', width: 110 },
    { name: 'MultiPlan', logo: '/partner8.png', width: 150 },
    { name: 'BlueCross BlueShield', logo: '/partner9.png', width: 140 },
    { name: 'careFirst', logo: '/partner10.png', width: 130 },
    { name: 'Oxford Health plan', logo: '/partner11.png', width: 150 },
    { name: 'Anthem', logo: '/partner12.png', width: 120 },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <button className="bg-white text-gray-500 px-4 py-2 rounded-xl mb-4">
            Our Partners
          </button>
          <h2 className="text-5xl md:text-4xl font-semibold mb-4">
            Partnerships That Strengthen Trust
          </h2>
          <p className="text-gray-400 max-w-lg">
            At FSQ, we collaborate with leading associations to tackle global
            food safety and supply chain challenges together.
          </p>
        </div>

        {/* Right Logos */}
        <div className="grid grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-gray-800 p-4 rounded-lg flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={40}
                className="h-auto max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
