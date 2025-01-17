import React from 'react'
import Header from '../Header/Header'
import TextTitle from '../Text_title/TextTitle'
import Services from '../Services/Services'
import Why from '../Why/Why'
import Our from '../Our/Our'
import Award from '../Award/Award'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
export default function Home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <TextTitle/>
            <Services/>
            <Why/>
            <Our/>
            <Award/>
            <Footer/>
        </div>
    )
}
