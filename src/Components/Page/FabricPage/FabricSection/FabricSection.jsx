import React, {useEffect} from 'react'
import './FabricSection.css'

import CheckIcon from '@mui/icons-material/Check';

import shveyniy_1 from "../../../../Assisstest/fabric/1/shveyniy_1.jpg"
import shveyniy_2 from "../../../../Assisstest/fabric/1/shveyniy_2.webp"
import shveyniy_3 from "../../../../Assisstest/fabric/1/shveyniy_3.webp"

import rask_1 from "../../../../Assisstest/fabric/2/rask_1.jpg"
import rask_2 from "../../../../Assisstest/fabric/2/rask_2.jpg"
import rask_3 from "../../../../Assisstest/fabric/2/rask_3.webp"
import rask_element from "../../../../Assisstest/fabric/2/element_rask.webp"

import glad_1 from "../../../../Assisstest/fabric/3/glad_1.jpg"
import glad_2 from "../../../../Assisstest/fabric/3/glad_2.webp"
import glad_3 from "../../../../Assisstest/fabric/3/kantrol_3.webp"
import glad_element from "../../../../Assisstest/fabric/3/glad_element.webp"


import kantrol_1 from "../../../../Assisstest/fabric/4/kantrol_1.jpg"
import kantrol_2 from "../../../../Assisstest/fabric/4/kantrol_2.jpg"
import kantrol_3 from "../../../../Assisstest/fabric/4/kantrol_3.jpg"
import kantrol_element from "../../../../Assisstest/fabric/4/kantrol_element.jpg"
import {useTranslation} from "react-i18next";



export default function FabricSection({DataId}) {
    const { t, i18n } = useTranslation()

    return (
        <div className='fabricSection'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {DataId === 1 && <img className='top-foto' src={shveyniy_1} alt=""/>}
                        {DataId === 2 && <img className='top-foto' src={rask_1} alt=""/>}
                        {DataId === 3 && <img className='top-foto' src={glad_1} alt=""/>}
                        {DataId === 4 && <img className='top-foto' src={kantrol_1} alt=""/>}

                    </div>
                    <div className="col-lg-12">
                        {DataId === 1 && <>
                            <div className="left-text">
                                <h1 className="top">{t("fabric.item_1.title")}</h1>
                                <p className="top">{t("fabric.item_1.description")}</p>
                            </div>
                        </>}
                        {DataId === 2 && <>
                            <div className="left-text">
                                <h1 className="top">{t("fabric.item_2.title")}</h1>
                                <p className="top">{t("fabric.item_2.description")}</p>
                            </div>
                        </>}
                        {DataId === 2 && <img className='foto-1' src={rask_element} alt=""/>}
                        {DataId === 3 && <>
                            <div className="left-text">
                                <h1 className="top">{t("fabric.item_3.title")}</h1>
                                <p className="top">{t("fabric.item_3.description")}</p>
                            </div>
                        </>}
                        {DataId === 3 && <img className='foto-1' src={glad_element} alt=""/>}
                        {DataId === 4 && <>
                            <div className="left-text">
                                <h1 className="top">{t("fabric.item_4.title")}</h1>
                                <p className="top">{t("fabric.item_4.description")}</p>
                            </div>
                        </>}
                        {DataId === 4 && <img className='foto-1' src={kantrol_element} alt=""/>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="title">
                            {DataId === 1 && t("fabric.item_1.heading")}
                            {DataId === 2 && t("fabric.item_2.heading")}
                            {DataId === 3 && t("fabric.item_3.heading")}
                            {DataId === 4 && t("fabric.item_4.heading")}
                        </h1>
                    </div>
                    <div className="col-lg-5">
                        {DataId === 1 && <img className='foto-2' src={shveyniy_2} alt=""/>}
                        {DataId === 2 && <img className='foto-2' src={rask_2} alt=""/>}
                        {DataId === 3 && <img className='foto-2' src={glad_2} alt=""/>}
                        {DataId === 4 && <img className='foto-2' src={kantrol_2} alt=""/>}
                    </div>
                    <div className="col-lg-7">
                        <p className="title">
                            {DataId === 1 && t("fabric.item_1.content")}
                            {DataId === 2 && t("fabric.item_2.content")}
                            {DataId === 3 && t("fabric.item_3.content")}
                            {DataId === 4 && t("fabric.item_4.content")}
                        </p>

                        {DataId === 1 &&
                            <div className="box">
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_1.items.item_1")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_1.items.item_2")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_1.items.item_3")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_1.items.item_4")}</p>
                                </div>
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_1.items.item_5")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_1.items.item_6")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_1.items.item_7")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_1.items.item_8")}</p>
                                </div>
                            </div>
                        }
                        {DataId === 2 &&
                            <div className="box">
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_2.items.item_1")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_2.items.item_2")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_2.items.item_3")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_2.items.item_4")}</p>
                                </div>
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_2.items.item_5")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_2.items.item_6")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_2.items.item_7")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_2.items.item_8")}</p>
                                </div>
                            </div>
                        }
                        {DataId === 3 &&
                            <div className="box">
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_3.items.item_1")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_3.items.item_2")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_3.items.item_3")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_3.items.item_4")}</p>
                                </div>
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_3.items.item_5")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_3.items.item_6")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_3.items.item_7")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_3.items.item_8")}</p>
                                </div>
                            </div>
                        }
                        {DataId === 4 &&
                            <div className="box">
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_4.items.item_1")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_4.items.item_2")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_4.items.item_3")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_4.items.item_4")}</p>
                                </div>
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_4.items.item_5")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_4.items.item_6")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_4.items.item_7")}</p>
                                    <p className="bottom"><CheckIcon/>{t("fabric.item_4.items.item_8")}</p>
                                </div>
                            </div>
                        }

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <h1 className="bottom">
                            {DataId === 1 && t("fabric.item_1.news.item_1.title")}
                            {DataId === 2 && t("fabric.item_2.news.item_1.title")}
                            {DataId === 3 && t("fabric.item_3.news.item_1.title")}
                            {DataId === 4 && t("fabric.item_4.news.item_1.title")}
                        </h1>
                        <p className="last">
                            {DataId === 1 && t("fabric.item_1.news.item_1.content")}
                            {DataId === 2 && t("fabric.item_2.news.item_1.content")}
                            {DataId === 3 && t("fabric.item_3.news.item_1.content")}
                            {DataId === 4 && t("fabric.item_4.news.item_1.content")}
                        </p>
                        <h1 className="bottom">
                            {DataId === 1 && t("fabric.item_1.news.item_2.title")}
                            {DataId === 2 && t("fabric.item_2.news.item_2.title")}
                            {DataId === 3 && t("fabric.item_3.news.item_2.title")}
                            {DataId === 4 && t("fabric.item_4.news.item_2.title")}
                        </h1>
                        <p className="last">
                            {DataId === 1 && t("fabric.item_1.news.item_2.content")}
                            {DataId === 2 && t("fabric.item_2.news.item_2.content")}
                            {DataId === 3 && t("fabric.item_3.news.item_2.content")}
                            {DataId === 4 && t("fabric.item_4.news.item_2.content")}
                        </p>
                    </div>
                    <div className="col-lg-7">
                        {DataId === 1 && <img className='foto-3' src={shveyniy_3} alt=""/>}
                        {DataId === 2 && <img className='foto-3' src={rask_3} alt=""/>}
                        {DataId === 3 && <img className='foto-3' src={glad_3} alt=""/>}
                        {DataId === 4 && <img className='foto-3' src={kantrol_3} alt=""/>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="bottom">
                            {DataId === 1 && t("fabric.item_1.news.item_3.title")}
                            {DataId === 3 && t("fabric.item_3.news.item_3.title")}
                            {DataId === 4 && t("fabric.item_4.news.item_3.title")}
                        </h1>
                        <p className="last">
                            {DataId === 1 && t("fabric.item_1.news.item_3.content")}
                            {DataId === 3 && t("fabric.item_3.news.item_3.content")}
                            {DataId === 4 && t("fabric.item_4.news.item_3.content")}
                        </p>
                    </div>

                    <div className="col-lg-12 mt-5">
                        <h1 className="bottom">
                            {DataId === 1 && t("fabric.item_1.news.item_4.title")}
                            {DataId === 3 && t("fabric.item_3.news.item_4.title")}
                        </h1>
                        <p className="last">
                            {DataId === 1 && t("fabric.item_1.news.item_4.content")}
                            {DataId === 3 && t("fabric.item_3.news.item_4.content")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
