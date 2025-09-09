'use client'

import Image from "next/image"

const logos = [
  { src: "/company1.png", alt: "Boltshift" },
  { src: "/company2.png", alt: "Euphoria" },
  { src: "/company3.png", alt: "FocalPoint" },
  { src: "/company4.png", alt: "Norse Star" },
  { src: "/company5.png", alt: "Quantum" },
  { src: "/company6.png", alt: "Railspeed" },
  { src: "/company7.png", alt: "Solar" },
  { src: "/company8.png", alt: "Watchtower" },
  { src: "/company9.png", alt: "QuartzAI" },
  { src: "/company10.png", alt: "Lightbox" },
  { src: "/company11.png", alt: "Lightbox" },
  { src: "/company12.png", alt: "Lightbox" },
  { src: "/company13.png", alt: "Lightbox" },
  { src: "/company14.png", alt: "Lightbox" },
]

export default function ClientLogo() {
  return (
    <section className="relative text-center pt-20 mt-6 dark:bg-white">
      <div className="ccontainer mx-auto grid gap-4 grid-cols-1">

        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee space-x-16">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={48}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  )
}
