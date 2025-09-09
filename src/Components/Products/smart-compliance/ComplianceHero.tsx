'use client'
import Image from "next/image"



const ComplianceHero = () => {
    return (
        <section className="w-full px-4 sm:px-6 lg:px-12 py-6">
            <div className="relative w-full max-w-7xl mx-auto">
                <Image
                    src="/ComplianceHero.png"
                    alt="Smart CAPA – Corrective and Preventive Action Made Simple"
                    width={1440}
                    height={638}
                    priority
                    className="w-full h-auto rounded-3xl object-cover"
                />
            </div>
        </section>
    )
}

export default ComplianceHero
