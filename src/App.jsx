import * as React from 'react'
import ShuffleHero from './component/ShuffleHero'
import Navbar from './component/Navbar'
import AboutHero from './component/AboutHero'
import AboutUs from './component/AboutUs'
import PricingSection from './component/PricingSection'
import ContactSection from './component/ContactSection'
import Footer from './component/Footer'

function App() {
 
  return (
    <>
     <Navbar/>
    <ShuffleHero/>
    <AboutHero/>
    <AboutUs/>
    <PricingSection/>
    <ContactSection/>
    <Footer/>
    </>  
  )
}

export default App