import React from 'react'
import './TextTitle.css'
import textile from '../../Assisstest/img/textitle.jpg'
import {useTranslation} from "react-i18next";
export default function TextTitle() {
    const {t} = useTranslation()
    return (
        <section className="textile">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h5>{t("home.text_title.title_h5")}</h5>
                        <h1>{t("home.text_title.title_h1")}</h1>
                        <div className="bigcard">
                            <div className="cardin">
                                <div className="top">
                                    <h3>{t("home.text_title.item_1.h3")}</h3>
                                    <p className="text">{t("home.text_title.item_1.p")}</p>
                                </div>
                                <div className="center">
                                    <h3>{t("home.text_title.item_2.h3")}</h3>
                                    <p className="text">{t("home.text_title.item_2.p")}</p>
                                </div>
                                <div className="bottom">
                                    <div className="center">
                                        <h3>{t("home.text_title.item_3.h3")}</h3>
                                        <p className="text">{t("home.text_title.item_3.p")}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={textile} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}
