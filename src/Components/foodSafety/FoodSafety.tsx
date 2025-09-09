
import Image from "next/image"
import { Button } from "../ui/Button"

export default function FoodSafetyPage() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-white to-sky-50 dark:bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start border border-gray-100 px-6 py-8 rounded-xl">
          {/* Left Column - First Image */}
          <div className="relative">
            <Image
              src="/food2.png"
              alt="Food safety inspector examining fresh produce in laboratory"
              width={608}
              height={468}
              className="rounded-2xl w-full h-auto"
              priority
            />
          </div>

          {/* Right Column - Text Content and Second Image */}
          <div className="space-y-8">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-5xl font-semibold text-gray-900 leading-tight text-balance">
                We Make Food Safety Seamless and Reliable
              </h1>

              <p className="text-xl text-gray-500 leading-relaxed text-pretty">
                In today’s fast-paced world, compliance and safety demand smarter solutions. FSQ 360 empowers businesses with powerful audit, compliance, and quality management tools—bridging food safety gaps with technology-driven efficiency and trust.
              </p>

              <Button
                variant="outline"
                className="bg-[#00A86B] text-white px-8 py-3 text-base font-medium rounded-lg cursor-pointer"
              >
                Get Started for Free
              </Button>
            </div>

            {/* Second Image */}
            <div className="relative">
              <Image
                src="/food1.png"
                alt="Food safety dashboard on laptop showing analytics and charts"
                width={490}
                height={250}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
