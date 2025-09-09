import Banner from '@/Components/Banner/Banner'
import ContactPage from '@/Components/contact-page/ContactPage'
import Footer from '@/Components/footer/Footer'

import Navbar from '@/Components/navbar/Navbar'
import React from 'react'

export default function Contact() {
  return (
    <div className='dark:bg-gray-50'>
        <Banner/>
        <Navbar/>
        <ContactPage/>
        <Footer/>
    </div>
  )
}
