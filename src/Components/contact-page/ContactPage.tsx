import { FaPhoneAlt } from "react-icons/fa";
import Form from "../form/Form";
import { MdEmail } from "react-icons/md";


export default function ContactPage() {
    return (
        <section className="relative bg-gray-50 min-h-screen text-center pt-20 px-4 mt-6 dark:bg-white">
            <div className="container mx-auto grid gap-4 grid-cols-1 px-3 py-6 ">
                {/* Badge */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center px-3 py-1.5 bg-white rounded-xl text-sm">
                        <p className="text-lg sm:text-lg font-medium text-[#667085]">
                            Home {">>"}  Contect
                        </p>
                    </div>
                </div>

                {/* Heading */}
                <div className="flex justify-center flex-col gap-8">
                    <h1 className="mt-5 text-[28px] sm:text-[40px] md:text-[60px] font-semibold leading-tight text-gray-900">
                        We’re Here to Help You
                    </h1>

                    <p className="mt-4 text-xl text-gray-500 mx-auto">
                        Contact our team for care, questions, or quick support anytime.
                    </p>
                </div>

                <Form />

                <div className="flex justify-center items-center mt-6 space-x-8">
                    {/* Phone */}
                    <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                            <FaPhoneAlt className="text-gray-600 text-lg" />
                        </span>
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-base">Call us at</span>
                            <span className="text-gray-900 font-semibold">+1 (555) 123-4567</span>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                            <MdEmail className="text-gray-600 text-lg" />
                        </span>
                        <div className="flex flex-col">
                            <span className="text-gray-500 text-base">Email us at</span>
                            <span className="text-gray-900 font-semibold">info@bgcreate.ai</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
