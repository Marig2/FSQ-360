'use client';

import { useState } from "react";
import AboutHero from "@/Components/about-hero/AboutHero";
import Navbar from "@/Components/navbar/Navbar";
import Categories from "@/Components/resources/Categories";
import Footer from "@/Components/footer/Footer";

export default function Resources() {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log("Search value:", e.target.value); // debug
  };

  return (
    <div className="w-full dark:bg-white">
      <Navbar />
      <AboutHero
        badge="Home >> Resources"
        heading="Resources to Guide Your"
        subHeading="Compliance Journey"
        description1="Explore insights, guides, and tools designed to simplify food safety, quality, and"
        description2="compliance."
       searchValue={search}
        onSearch={handleSearch}
      />
      <Categories/>
      <Footer />
    </div>
  );
}
