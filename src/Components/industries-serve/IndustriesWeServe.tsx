"use client"

import { Card } from "../ui/Card"

const industries = [
    { icon: "/Diet.png", title: "Food & Beverage Manufacturing" },
    { icon: "/Dairy products.png", title: "Dairy, Meat & Poultry" },
    { icon: "/Dish.png", title: "Seafood & Aquaculture" },
    { icon: "/Bakery.png", title: "Bakery, Snacks & Confectionery" },
    { icon: "/Package.png", title: "Packaging & Logistics" },
    { icon: "/Store.png", title: "Food Retail Chains" },
    { icon: "/Car.png", title: "Automotive Manufacturing" },
    { icon: "/Spaceship.png", title: "Aerospace & Defense" },
    { icon: "/Construction.png", title: "Construction & Engineering" },
    { icon: "/Delivery.png", title: "Transport & Supply Chain Logistics" },
]

export default function IndustriesWeServe() {
    return (
        <section className="relative text-center pt-20 px-4">
            <div className="container mx-auto grid gap-4 grid-cols-1">
                {/* Badge */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center px-3 py-1.5  bg-gray-100 rounded-[12px] shadow-sm text-sm">
                        <p className="text-[14px] sm:text-[18px] font-medium text-[#667085]">
                            Our Reach
                        </p>
                    </div>
                </div>

                {/* Heading */}
                <div className="flex justify-center flex-col gap-8">
                    <h1 className="mt-5 text-[28px] sm:text-[40px] md:text-[60px] font-extrabold leading-tight">
                        
                        <span className="text-black">Industries We Serve</span>
                        
                    </h1>

                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#667085] mx-auto">
                        Food, manufacturing, logistics, and beyond—tailored audits for every industry.
                    </p>
                </div>

                
                


                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    {
                        industries.map((industry, index) => (
                            <Card key={index} className="bg-[#E7E7E740] p-6 rounded-lg shadow-sm hover:shadow-md">
                                <img src={industry.icon} alt={industry.title} className="w-[56px] h-[56px] mb-4 mx-auto" />
                                <p className="text-[20px] text-black font-medium text-center">
                                    {industry.title}
                                </p>
                            </Card>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}
