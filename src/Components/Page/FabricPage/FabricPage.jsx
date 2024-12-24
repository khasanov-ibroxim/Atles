import React from 'react'
import FabricHeader from './FabricHeader/FabricHeader'
import Navbar from '../../../Components/Navbar/Navbar'
import FabricSection from './FabricSection/FabricSection'
import Footer from '../../../Components/Footer/Footer'
import {useParams} from "react-router-dom";

export default function FabricPage() {
    const {id} = useParams()
    const DataId = parseInt(id)
  return (
    <div>
        <Navbar/>
        <FabricHeader DataId={DataId}/>
        <FabricSection DataId={DataId}/>
        <Footer/>
    </div>
  )
}
