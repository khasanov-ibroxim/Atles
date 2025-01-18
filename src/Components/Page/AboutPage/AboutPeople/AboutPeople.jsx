import React from 'react'
import './AboutPeople.css'
import foto1 from '../../../../Assisstest/img/about rasm 1.jpg'
import foto2 from '../../../../Assisstest/img/about rasm 2.jpg'
import foto3 from '../../../../Assisstest/img/about rasm 3.jpg'
import foto4 from '../../../../Assisstest/img/about rasm 4.jpg'
import foto5 from '../../../../Assisstest/img/about rasm 5.jpg'
import foto6 from '../../../../Assisstest/img/about rasm 6.jpeg'
import foto7 from '../../../../Assisstest/img/about rasm 7.jpg'
import foto8 from '../../../../Assisstest/img/about rasm 8.jpg'
import {useTranslation} from "react-i18next";

export default function AboutPeople() {
    const {t} = useTranslation();
    return (
        <div className='aboutpeople'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto1} alt=""/>
                            <div className="box-hover">
                                <p className="hover-name">
                                    {t("about.aboutPeople.item_1.name")}
                                </p>
                                <p className="bottom" style={{fontSize: "15px"}}
                                dangerouslySetInnerHTML={{__html:t("about.aboutPeople.item_1.details")}}
                                >
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto2} alt=""/>
                            <div className="box-hover">
                                <p className="hover-name">
                                    {t("about.aboutPeople.item_2.name")}
                                </p>
                                <p className="bottom"  dangerouslySetInnerHTML={{__html:t("about.aboutPeople.item_2.details")}}>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto3} alt=""/>
                            <div className="box-hover">
                                <p className="hover-name">
                                    {t("about.aboutPeople.item_3.name")}
                                </p>
                                <p className="bottom"  dangerouslySetInnerHTML={{__html:t("about.aboutPeople.item_3.details")}}>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto4} alt=""/>
                            <div className="box-hover">
                                <p className="hover-name">
                                    {t("about.aboutPeople.item_4.name")}
                                </p>
                                <p className="bottom"
                                   dangerouslySetInnerHTML={{__html:t("about.aboutPeople.item_4.details")}}
                                >

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto5} alt=""/>
                            <div className="box-hover">
                                <p className="hover-name">
                                    {t("about.aboutPeople.item_5.name")}
                                </p>
                                <p className="bottom"
                                   dangerouslySetInnerHTML={{__html:t("about.aboutPeople.item_5.details")}}
                                >

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto6} alt=""/>
                            <div className="box-hover">
                                <p className="hover-name">
                                    {t("about.aboutPeople.item_6.name")}
                                </p>
                                <p className="bottom"
                                   dangerouslySetInnerHTML={{__html:t("about.aboutPeople.item_6.details")}}
                                >

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto7} alt=""/>
                            <div className="box-hover">
                                <p className="hover-name">
                                    {t("about.aboutPeople.item_7.name")}
                                </p>
                                <p className="bottom"
                                   dangerouslySetInnerHTML={{__html:t("about.aboutPeople.item_7.details")}}
                                >

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <img src={foto8} alt=""/>
                            <div className="box-hover">
                                <p className="hover-name">{t("about.aboutPeople.item_8.name")}</p>
                                <p className="bottom"
                                   dangerouslySetInnerHTML={{__html:t("about.aboutPeople.item_8.details")}}
                                >
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
