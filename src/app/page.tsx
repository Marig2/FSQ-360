import About from "@/Components/about/About";
import Blog from "@/Components/Blog/Blog";
import ClientLogo from "@/Components/client-logo/ClientLogo";
import FAQ from "@/Components/FAQ/FAQ";
import Features from "@/Components/features/Features";
import HeroSection from "@/Components/hero/HeroSection";
import Navbar from "@/Components/navbar/Navbar";
import PlatformBenefits from "@/Components/platform-benefits/PlatformBenefits";
import Statistics from "@/Components/statistics/Statistics";
import Contact from "@/Components/contact/Contact";
import CTASection from "@/Components/CTA/CTASection";
import Footer from "@/Components/footer/Footer";
import Testimonial from "@/Components/testimonial/Testimonial";
import Banner from "@/Components/Banner/Banner";
import Solution from "@/Components/Homesolution/Solution";


export default function Home() {
  return (
    <>
      <Banner/>
      <Navbar/>
      <HeroSection/>
      <ClientLogo/>
      <About/>
      <Statistics/>
      <Solution/>
      <Features />
      <PlatformBenefits/>
      <Testimonial />
      <FAQ/>
      <Blog/>
      <Contact />
      <CTASection/>
      <Footer />
    </>
  );
}
