'use client'

import { Button } from "../ui/Button";
import Image from "next/image";

export default function CTASection() {
    return (
        <section className="bg-white dark:bg-white px-4 py-12 flex justify-center">
            {/* CTA box */}
            <div className="bg-[#00A86B] rounded-2xl px-8 sm:pt-4 flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full relative overflow-hidden">

                {/* Left Content */}
                <div className="text-left max-w-xl z-10">
                    <h2 className="text-3xl text-white sm:pt-3">
                        Take the Next Step in Food Safety
                    </h2>
                    <p className="text-white/90 text-lg mt-4">
                        Join our platform today to simplify compliance and strengthen supplier trust.
                    </p>
                    <Button
                        variant="outline"
                        className="mt-6 bg-white text-[#00A86B] px-6 py-3 rounded-lg font-medium text-base hover:bg-gray-100 cursor-pointer"
                    >
                        Get Started Now
                    </Button>
                </div>

                {/* Right Side Image */}
                <div className="relative mt-8 lg:mt-0 lg:ml-16 pr-8 w-full max-w-sm z-10">
                    <Image
                        src="/auditReport.png"
                        alt="Audit Report"
                        width={400}
                        height={300}
                        className="rounded-xl shadow-lg rotate-3"
                    />
                </div>

                {/* Background Grid pattern */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>
        </section>
    );
}
