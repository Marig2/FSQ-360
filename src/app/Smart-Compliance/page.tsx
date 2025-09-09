import CTASection from '@/Components/CTA/CTASection'
import FAQ from '@/Components/FAQ/FAQ'
import Footer from '@/Components/footer/Footer'
import Navbar from '@/Components/navbar/Navbar'
import ComplianceFeatures from '@/Components/Products/smart-compliance/ComplianceFeatures'
import ComplianceHero from '@/Components/Products/smart-compliance/ComplianceHero'
import ComplianceTools from '@/Components/Products/smart-compliance/ComplianceTools'
import ComplianceWorkflow from '@/Components/Products/smart-compliance/ComplianceWorkflow'
import React from 'react'

export default function SmartCompliance() {
  return (
    <div className='w-full dark:bg-white'>
      <Navbar />
      <ComplianceHero />
      <ComplianceFeatures />
      <ComplianceTools />
      <ComplianceWorkflow />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  )
}
