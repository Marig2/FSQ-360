import Banner from '@/Components/Banner/Banner'
import Blog from '@/Components/Blog/Blog'
import Footer from '@/Components/footer/Footer'
import Navbar from '@/Components/navbar/Navbar'
import ProvidedSolutions from '@/Components/Solutions/SupplierManagement/ProvidedSolutions'
import SupplierHero from '@/Components/Solutions/SupplierManagement/SupplierHero'
import SupplierWorkflow from '@/Components/Solutions/SupplierManagement/SupplierWorkflow'
import React from 'react'

export default function SupplierManagement() {
  return (
    <div className='w-full dark:bg-white'>
        <Banner/>
        <Navbar/>
        <SupplierHero/>
        <ProvidedSolutions/>
        <SupplierWorkflow/>
        <Blog/>
        <Footer/>
    </div>
  )
}
