import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Form from "../form/Form";
export default function Contact() {
    return (
        <section className="relative px-4 py-12 bg-[#F9FAFB] dark:bg-[#F9FAFB]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Left Side - Contact Information */}
                <div>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-gray-500 bg-gray-100 rounded-full">Contact Us</span>
                    <h1 className="text-3xl font-bold mt-6 text-gray-900">Get in Touch With Us</h1>
                    <p className="text-gray-500 mt-6 text-lg">
                        We re here to answer your questions, provide expert guidance, and support your business needs. Reach out today and Lets build lasting success together.
                    </p>
                    <div className="mt-6 space-y-4">
                        {/* Phone */}
                        <div className="flex items-center">
                            <span className="mr-3 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                                <FaPhoneAlt className="text-gray-600 text-lg" />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-sm">Call us at</span>
                                <span className="text-gray-900 font-semibold">+1 (555) 123-4567</span>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center">
                            <span className="mr-3 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                                <MdEmail className="text-gray-600 text-lg" />
                            </span>
                            <div className="flex flex-col">
                                <span className="text-gray-500 text-sm">Email us at</span>
                                <span className="text-gray-900 font-semibold">info@bgcreate.ai</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <Form/>
            </div>
        </section>

    )
}