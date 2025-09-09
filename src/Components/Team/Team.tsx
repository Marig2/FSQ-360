'use client'

import Image from "next/image"
import { motion } from "framer-motion"

type TeamMember = {
  name: string
  role: string
  roleColor: string
  description: string
  image: string
}

const team: TeamMember[] = [
  {
    name: "Amélie Laurent",
    role: "Founder & CEO",
    roleColor: "text-emerald-600",
    description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: "/team1.png",
  },
  {
    name: "Nikolas Gibbons",
    role: "Engineering Manager",
    roleColor: "text-emerald-600",
    description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    image: "/team2.png",
  },
  {
    name: "Sienna Hewitt",
    role: "Product Manager",
    roleColor: "text-emerald-600",
    description: "Former PM for Linear, Lambda School, and On Deck.",
    image: "/team3.png",
  },
  {
    name: "Lily-Rose Chedjou",
    role: "Frontend Developer",
    roleColor: "text-emerald-600",
    description: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: "/team4.png",
  },
  {
    name: "Zahra Christensen",
    role: "Backend Developer",
    roleColor: "text-emerald-600",
    description: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
    image: "/team5.png",
  },
  {
    name: "Caitlyn King",
    role: "Product Designer",
    roleColor: "text-emerald-600",
    description: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
    image: "/team6.png",
  },
  {
    name: "Zaid Schwartz",
    role: "UX Researcher",
    roleColor: "text-emerald-600",
    description: "Lead user research for Slack. Contractor for Netflix and Udacity.",
    image: "/team7.png",
  },
  {
    name: "Marco Kelly",
    role: "Customer Success",
    roleColor: "text-emerald-600",
    description: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.",
    image: "/team8.png",
  },
]

export default function Team() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Subtitle pill */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block mb-4 px-4 py-1.5 text-sm font-medium bg-white text-gray-500 rounded-xl"
        >
          Our Team
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-5xl font-semibold text-gray-900 mb-4"
        >
          Meet the Experts
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-500 max-w-2xl text-xl mx-auto mb-12"
        >
          A passionate team of auditors, innovators, and compliance specialists
          dedicated to advancing food safety and quality worldwide.
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={cardVariants} transition={{ duration: 0.6 }}>
              <div className="text-center lg:text-left">
                <div className="mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={296}
                    height={296}
                    className="object-cover w-full rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className={`text-xl ${member.roleColor} mb-2`}>{member.role}</p>
                <p className="text-lg text-gray-500">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
