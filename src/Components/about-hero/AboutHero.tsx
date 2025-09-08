'use client'
import { CiSearch } from "react-icons/ci";


interface Prop {
  badge: string;
  heading: string;
  subHeading: string;
  description1: string;
  description2: string;
  searchValue?: string;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AboutHero({
  badge,
  heading,
  subHeading,
  description1,
  description2,
  searchValue,
  onSearch,
}: Prop) {


  return (
    <section className="relative text-center pt-20 px-4 mt-6">
      <div className="container mx-auto grid gap-4 grid-cols-1 bg-gray-50 px-3 py-6 rounded-4xl">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center px-3 py-1.5 bg-white rounded-xl text-sm">
            <p className="text-lg sm:text-[18px] font-medium text-[#667085]">
              {badge}
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="flex justify-center flex-col gap-8">
          <h1 className="mt-5 text-[28px] sm:text-[40px] md:text-[60px] font-semibold leading-tight text-gray-900">
            <span className="text-black">{heading}</span>
            <span className="block text-black">{subHeading}</span>
          </h1>

          <p className="mt-4 text-xl text-gray-500 mx-auto">
            {description1}
            <span className="block">{description2}</span>
          </p>
        </div>

        {/* Search Input */}

        {onSearch && (
          <div className="mt-6 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
              {/* Icon */}
              <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

              {/* Input */}
              <input
                type="search"
                value={searchValue}
                onChange={onSearch}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
