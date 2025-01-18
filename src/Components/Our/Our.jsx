import React from 'react'
import './Our.css'
import hand from '../../Assisstest/img/hand.png'
import foto from '../../Assisstest/img/header title.png'
import foto1 from '../../Assisstest/img/our.png'
import {useTranslation} from "react-i18next";
export default function Our() {
    const {t} = useTranslation()
  return (
    <section className='our'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="top">
                        {t("home.our.p")}
                    </p>
                    <h1 className="top" dangerouslySetInnerHTML={{__html:t("home.our.h1")}}></h1>
                </div>
            </div>
        </div>
    </section>
  )
}
