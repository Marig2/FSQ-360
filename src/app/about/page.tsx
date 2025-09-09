import AboutHero from '@/Components/about-hero/AboutHero'
import CTASection from '@/Components/CTA/CTASection'
import FoodSafety from '@/Components/foodSafety/FoodSafety'
import Footer from '@/Components/footer/Footer'
import IndustriesWeServe from '@/Components/industries-serve/IndustriesWeServe'
import OurJourney from '@/Components/Journey/OurJourney'
import Materix from '@/Components/materix/Materix'
import Navbar from '@/Components/navbar/Navbar'
import Partners from '@/Components/partner/Partners'
import Team from '@/Components/Team/Team'
import Testimonial from '@/Components/testimonial/Testimonial'
import React from 'react'

export default function About() {
  return (
    <div className='w-full dark:bg-white'>
    <Navbar/>
    <AboutHero 
    badge='Home >> About Us'
    heading='Empowering Trust Through'
    subHeading='Audits & Compliance'
    description1='We deliver transparent, reliable, and industry-focused solutions that strengthen'
    description2='quality, ensure compliance, and drive lasting business growth.'
    />
    <FoodSafety/>
    <Materix/>
    <OurJourney/>
    <Team/>
    <Testimonial/>
    <Partners/>
    <IndustriesWeServe/>
    <CTASection/>
    <Footer/>
    </div> 
  )
}
