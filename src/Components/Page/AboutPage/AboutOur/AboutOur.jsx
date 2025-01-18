import React from 'react'
import './AboutOur.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import foto from '../../../../Assisstest/img/about our.jpg'
import {useTranslation} from "react-i18next";

export default function AboutOur() {
    const {t} = useTranslation();
    return (
        <div className='aboutour'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="top">{t("about.our.title_p")}</p>
                        <h1 className="top">{t("about.our.title_h1")}</h1>
                        <p className="new">{t("about.our.title_desc")}</p>
                        <div className="right-box">
                            <div className="one">
                                <img src={foto} alt=""/>
                            </div>
                            <div className="two">
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon/>
                                        <p className="title">{t("about.our.item_1.title")}</p>
                                    </div>
                                    <p className="bottom">{t("about.our.item_1.bottom")}</p>
                                </div>
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon/>
                                        <p className="title">{t("about.our.item_2.title")}</p>
                                    </div>
                                    <p className="bottom">{t("about.our.item_2.bottom")}</p>
                                </div>
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon/>
                                        <p className="title">{t("about.our.item_3.title")}</p>
                                    </div>
                                    <p className="bottom">{t("about.our.item_3.bottom")}</p>
                                </div>
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon/>
                                        <p className="title">{t("about.our.item_4.title")}</p>
                                    </div>
                                    <p className="bottom">{t("about.our.item_4.bottom")}</p>
                                </div>
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon/>
                                        <p className="title">{t("about.our.item_5.title")}</p>
                                    </div>
                                    <p className="bottom">{t("about.our.item_5.bottom")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
