import React from 'react'
import './FabricHeader.css'
import {useParams} from "react-router-dom";
export default function FabricHeader({DataId}) {

  return (
    <div className='fabricHeader'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="top">
              {DataId === 1 && "Швейный цех"}
              {DataId === 2 && "Раскройный цех"}
              {DataId === 3 && "Гладильный и  упаковочный цех"}
              {DataId === 4 && "Контроль качества"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
