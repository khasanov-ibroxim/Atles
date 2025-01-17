import React from 'react'
import './AboutHeader.css'
import foto from '../../../../Assisstest/img/about strelka.png'
export default function AboutHeader() {
  return (
    <div className='aboutheader'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="top">
              МЫ СТРЕМИМСЯ К <br/>УСПЕХУ В МИРЕ одежды!
              </h1>
              <div className="box">
                <img src={foto} alt="" />
                <div className="text">
                  <p className="top">О нашей компании</p>
                  <a className='number' href="tel:+998941582000">+998 (94) 158-20-00</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
