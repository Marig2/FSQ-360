"use client"

import Image from "next/image"
import { FiArrowUpRight } from "react-icons/fi"

type Tag = {
  label: string
  color: string
}

type Post = {
  id: number
  author: string
  date: string
  title: string
  description: string
  image: string
  tags: Tag[]
}

const posts: Post[] = [
  {
    id: 1,
    author: "Alec Whitten",
    date: "17 Jan 2025",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/blogContent.png",
    tags: [
      { label: "Leadership", color: "bg-purple-100 text-purple-600" },
      { label: "Management", color: "bg-blue-100 text-blue-600" },
    ],
  },
  {
    id: 2,
    author: "Demi Wilkinson",
    date: "16 Jan 2025",
    title: "PM mental models and their internal",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    image:"/blogContent1.png",
    tags: [
      { label: "Product", color: "bg-green-100 text-green-600" },
      { label: "Research", color: "bg-indigo-100 text-indigo-600" },
      { label: "Frameworks", color: "bg-orange-100 text-orange-600" },
    ],
  },
  {
    id: 3,
    author: "Candice Wu",
    date: "15 Jan 2025",
    title: "What is wireframing and when to use?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/blogContent2.png",
    tags: [
      { label: "Design", color: "bg-pink-100 text-pink-600" },
      { label: "Research", color: "bg-indigo-100 text-indigo-600" },
    ],
  },
  {
    id: 4,
    author: "Natali Craig",
    date: "14 Jan 2025",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image:"/blogContent3.jpg",
    tags: [
      { label: "Design", color: "bg-pink-100 text-pink-600" },
      { label: "Research", color: "bg-indigo-100 text-indigo-600" },
    ],
  },
  {
    id: 5,
    author: "Drew Cano",
    date: "13 Jan 2025",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "/blogContent4.png",
    tags: [
      { label: "Software", color: "bg-green-100 text-green-600" },
      { label: "Tools", color: "bg-red-100 text-red-600" },
      { label: "SaaS", color: "bg-yellow-100 text-yellow-600" },
    ],
  },
  {
    id: 6,
    author: "Orlando Diggs",
    date: "12 Jan 2025",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    image: "/blogContent5.png",
    tags: [
      { label: "Podcasts", color: "bg-purple-100 text-purple-600" },
      { label: "Customer Success", color: "bg-blue-100 text-blue-600" },
    ],
  },
]

export default function BlogsSections() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 dark:bg-white">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-medium text-[#00A86B]">{post.author}</span>
                <span className="font-medium text-[#00A86B] pl-2">• {post.date}</span>

                
              </p>

              <h3 className="text-2xl font-semibold text-black mb-2 flex items-start justify-between gap-2">
                {post.title}
                <FiArrowUpRight className="w-5 h-5 text-gray-500" />
              </h3>

              <p className="text-gray-500 text-[16px] flex-1 mb-4">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 text-xs rounded-full font-medium ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
