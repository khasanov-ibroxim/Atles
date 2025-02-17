import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Page/Home'
import About from './Components/Page/AboutPage/About'
import Contact from './Components/Page/ContactPage/Contact'
import FabricPage from './Components/Page/FabricPage/FabricPage'
import Gallery from "./Components/Page/gallery/gallery.jsx";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/:id/fabric' element={<FabricPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
