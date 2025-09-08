
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";


export default function OurJourney() {
  return (
    <section className="relative bg-[#0B0F1A] py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Subtitle pill */}
        <p className="inline-block mb-4 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-800 rounded-full">
          Our Features
        </p>

        {/* Title + description */}
        <h2 className="text-5xl md:text-5xl font-semibold text-white mb-4">
          Our Journey at FSQ 360
        </h2>
        <p className="text-gray-200 text-xl mx-auto mb-12">
          We’re shaping the future of smarter, more reliable quality management.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Vision */}
          <div className="bg-[#141A29] p-6 rounded-2xl text-left">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-emerald-100 text-emerald-600 mb-4">
              <FaRegEye size={25}/>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Vision</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We believe in technologies to solve global food supply chain
              challenges by blending functional expertise through our farm to
              fork software solutions.
            </p>
          </div>

          {/* Center Image */}
          <div className="row-span-2 flex justify-center items-center">
            <Image
              src="/journey.jpg" // replace with actual image
              alt="Business meeting analytics"
              width={400}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Mission */}
          <div className="bg-[#141A29] p-6 rounded-2xl text-left">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-emerald-100 text-emerald-600 mb-4">
              <TbTargetArrow size={25}/>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Mission</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are on a mission to provide tech-enabled, cost-effective
              software solutions to ensure quality, food safety, and regulatory
              compliance, in a smarter way, with the latest technologies.
            </p>
          </div>

          {/* How did we start? */}
          <div className="bg-[#141A29] p-6 rounded-2xl text-left">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-emerald-100 text-emerald-600 mb-4">
              <CiCalendar size={25}/>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              How did we start?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our journey started in 2017 out of Montreal to build smart
              software solutions to solve the emerging compliance requirements
              of consumers, customers, and regulatory bodies.
            </p>
          </div>

          {/* What do we do? */}
          <div className="bg-[#141A29] p-6 rounded-2xl text-left">
            <div className="w-10 h-10 flex items-center justify-center rounded-md bg-emerald-100 text-emerald-600 mb-4">
              <IoBriefcaseOutline size={25}/>

            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              What do we do?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our digital solution solves the growing quality and food-safety
              challenges by integrating functional expertise, with Smart
              technologies, through our farm to fork software modules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
