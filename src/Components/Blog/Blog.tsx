// components/BlogSection.js
import React from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import Image from "next/image";

export default function Blog() {
  const cards = [
    {
      id: 1,
      image: "/card1.png",
      title: "What is wireframing and when to use?",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      author: "Candice Wu",
      date: "15 Jan 2025",
      categories: ["Design", "Research"],
    },
    {
      id: 2,
      image: "/card2.jpg",
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      author: "Natalie Craig",
      date: "14 Jan 2025",
      categories: ["Design", "Research"],
    },
    {
      id: 3,
      image: "/card3.png",
      title: "Our top 10 Javascript frameworks to use",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      author: "Drew Cano",
      date: "13 Jan 2025",
      categories: ["Software", "Tools", "SaaS"],
    },
  ];

  const categoryColors: Record<string, string> = {
    Design: "bg-blue-100 text-blue-700",
    Research: "bg-purple-100 text-purple-700",
    Software: "bg-green-100 text-green-700",
    Tools: "bg-green-100 text-green-700",
    SaaS: "bg-pink-100 text-pink-700",
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full">
            Blogs & Articles
          </span>
          <h1 className="text-[48px] font-bold mt-2 leading-tight">
            Insights That Strengthen Your Business
          </h1>
          <p className="text-gray-500 mt-2 text-[20px]">
            Explore expert blogs on auditing, compliance, and financial clarity.
          </p>
        </div>
        <Button
          variant="outline"
          className="w-[130px] px-2 border border-gray-200 text-gray-700 text-[16px] rounded-[8px] h-[48px]"
        >
          Explore All
        </Button>
      </div>

      {/* Grid with 3 cards in same row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="overflow-hidden border border-gray-200 rounded-xl shadow-sm"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-gray-500 px-2">
              <div>
                <span className="text-lg font-medium text-green-700">{card.author}</span>
                <span className=" text-lg mx-2 text-green-700">•</span>
                <span className=" text-lg text-green-700">{card.date}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-500 text-lg mb-4">{card.description}</p>



              {/* Categories */}
              <div className="mt-3 flex flex-wrap gap-2">
                {card.categories.map((cat, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded-full ${
                      categoryColors[cat] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {cat}
                  </span>
                ))}
              </div>

            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
