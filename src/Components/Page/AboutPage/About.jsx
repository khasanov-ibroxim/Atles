import React from 'react'
import Navbar from '../../Navbar/Navbar'
import AboutHeader from './AboutHeader/AboutHeader'
import AboutAbout from './AboutAbout/AboutAbout'
import AboutOur from './AboutOur/AboutOur'
import AboutPeople from './AboutPeople/AboutPeople'
import Footer from '../../Footer/Footer'
export default function About() {
  return (
   <>
   <Navbar/>
   <AboutHeader/>
   <AboutAbout/>
   <AboutOur/>
   <AboutPeople/>
   <Footer/>
   </>
  )
}
