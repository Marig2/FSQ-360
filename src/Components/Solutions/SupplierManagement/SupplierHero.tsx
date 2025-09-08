'use client'

import Image from "next/image"

const SupplerHero = () => {
    return (
        <section className="relative w-full h-screen bg-white px-4 mx-auto pt-20">
        <Image src="/supplierHero.png" alt="" height={566} width={1320} className="object-cover"/>
        </section>
    )
}

export default SupplerHero
