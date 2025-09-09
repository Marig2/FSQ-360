'use client'
import AboutHero from "@/Components/about-hero/AboutHero";
import BlogsSections from "@/Components/Blogs/BlogsSections";
import NewBlogs from "@/Components/Blogs/NewBlogs";
import Footer from "@/Components/footer/Footer";
import Navbar from "@/Components/navbar/Navbar";
import { useState } from "react";

export default function Blogs() {
    const [search, setSearch] = useState<string>("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log("Search value:", e.target.value);
  };
    return (

        <div className='w-full dark:bg-white'>
            <Navbar/>
              <AboutHero
                    badge="Home >> Blogs"
                    heading="Insights That Drive Better Decisions"
                    subHeading=""
                    description1="Explore expert articles on audits, compliance, and financial growth."
                    description2=""
                   searchValue={search}
                    onSearch={handleSearch}
                  />
                  <NewBlogs/>
                  <BlogsSections/>
                  <Footer/>
        </div>
    )
}
