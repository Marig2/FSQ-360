import CTASection from '@/Components/CTA/CTASection'
import FAQ from '@/Components/FAQ/FAQ'
import Footer from '@/Components/footer/Footer'
import Navbar from '@/Components/navbar/Navbar'
import CFAFeatures from '@/Components/Products/smart-CFA/CFAFeatures'
import CFAHero from '@/Components/Products/smart-CFA/CFAHero'
import CFAWorkflow from '@/Components/Products/smart-CFA/CFAWorkflow'
import Tools from '@/Components/Products/smart-CFA/Tools'
import React from 'react'

export default function SmartCFA() {
  return (
    <div className='w-full dark:bg-white'>
      <Navbar/>
      <CFAHero/>
      <CFAFeatures/>
      <Tools/>
      <CFAWorkflow/>
      <FAQ/>
      <CTASection/>
      <Footer/>
    </div>
  )
}
