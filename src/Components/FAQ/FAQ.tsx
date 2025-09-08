"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer:
        "We provide auditing services across diverse sectors, including finance, manufacturing, retail, and technology, ensuring compliance and industry-focused solutions.",
    },
    {
      question: "How do you ensure audit accuracy?",
      answer:
        "Our auditors follow strict methodologies, advanced tools, and industry best practices to ensure precision and reliability in every audit we perform.",
    },
    {
      question: "Do you offer international auditing services?",
      answer:
        "Yes, we provide global auditing solutions tailored to meet regional compliance standards while ensuring consistency worldwide.",
    },
    {
      question: "What makes your firm different from others?",
      answer:
        "We combine cutting-edge technology with experienced professionals, ensuring audits that are efficient, transparent, and reliable.",
    },
    {
      question: "How can I request a consultation?",
      answer:
        "Simply reach out through our contact form or give us a call. Our team will schedule a consultation at your convenience.",
    },
  ];

  const toggleFAQ = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block px-3 py-1 text-sm font-medium text-gray-500 bg-gray-100 rounded-full">
          FAQs
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-2">
          Find quick answers to common queries about our auditing services.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-sm border border-gray-100"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-6 py-4 text-lg font-semibold text-gray-800"
            >
              {faq.question}
              {openIndex === index ? (
                <FaMinus className="text-gray-500" />
              ) : (
                <FaPlus className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-sm md:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
