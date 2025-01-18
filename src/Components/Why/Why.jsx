import React, { useEffect, useState, useRef } from 'react'
import './Why.css'
import star from '../../Assisstest/img/star.png'
import {useTranslation} from "react-i18next";
export default function Why() {
    const {t} = useTranslation()
    return (
        <section className='why'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">{t("home.why.title")}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="number">{t("home.why.item_1.number")}</p>
                            <p className="title">{t("home.why.item_1.title")}</p>
                            <p className="bottom">{t("home.why.item_1.bottom")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="number">{t("home.why.item_2.number")}</p>
                            <p className="title">{t("home.why.item_2.title")}</p>
                            <p className="bottom">{t("home.why.item_2.bottom")}</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="number">{t("home.why.item_3.number")}</p>
                            <p className="title">{t("home.why.item_2.title")}</p>
                            <p className="bottom">{t("home.why.item_3.bottom")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel">
                <div className="logo-slider">
                    <div className="logos-slide">
                        <div className="logos-slide_item">{t("home.why.slide_1")} <img src={star} alt=""/></div>
                        <div className="logos-slide_item">{t("home.why.slide_2")} <img src={star} alt=""/></div>
                        <div className="logos-slide_item">{t("home.why.slide_3")} <img src={star} alt=""/></div>
                        <div className="logos-slide_item">{t("home.why.slide_4")} <img src={star} alt=""/></div>
                        <div className="logos-slide_item">{t("home.why.slide_1")} <img src={star} alt=""/></div>
                        <div className="logos-slide_item">{t("home.why.slide_2")} <img src={star} alt=""/></div>
                        <div className="logos-slide_item">{t("home.why.slide_3")} <img src={star} alt=""/></div>
                        <div className="logos-slide_item">{t("home.why.slide_4")} <img src={star} alt=""/></div>
                        <div className="logos-slide_item">{t("home.why.slide_1")} <img src={star} alt=""/></div>
                        <div className="logos-slide_item">{t("home.why.slide_2")} <img src={star} alt=""/></div>
                        <div className="logos-slide_item">{t("home.why.slide_3")} <img src={star} alt=""/></div>
                        <div className="logos-slide_item">{t("home.why.slide_4")} <img src={star} alt=""/></div>

                    </div>
                </div>
            </div>

        </section>
    )
}
