import React from 'react'
import './Services.css'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import foto1 from '../../Assisstest/img/foto1.jpg'
import foto2 from '../../Assisstest/img/foto2.jpg'
import foto3 from '../../Assisstest/img/foto3.jpg'
import foto4 from '../../Assisstest/img/foto4.jpg'
import {Link} from 'react-router-dom';
import {useTranslation} from "react-i18next";

export default function Services() {
    const {t} = useTranslation();
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="top" >{t("home.services.title_p")}</p>
                        <h1 className="top">{t("home.services.title_h1")}</h1>
                    </div>
                </div>
            </div>
            <div className="title">
                <Link to={"/:id/fabric".replace(":id" , 1)} className="box">
                    <div className="foto">
                        <img src={foto1} alt=""/>
                    </div>
                    <p className="one" dangerouslySetInnerHTML={{ __html: t("home.services.item_1.one") }}></p>
                    <div className="bottom">
                        <p className="two" dangerouslySetInnerHTML={{ __html: t("home.services.item_1.two") }}></p>
                        <NorthEastIcon/>
                    </div>
                </Link>
                <Link to={"/:id/fabric".replace(":id" , 2)} className="box">
                    <div className="foto">
                        <img src={foto2} alt=""/>
                    </div>
                    <p className="one" dangerouslySetInnerHTML={{ __html: t("home.services.item_2.one") }}></p>
                    <div className="bottom">
                        <p className="two" dangerouslySetInnerHTML={{ __html: t("home.services.item_2.two") }}></p>
                        <NorthEastIcon/>
                    </div>
                </Link>
                <Link to={"/:id/fabric".replace(":id" , 3)} className="box">
                    <div className="foto">
                        <img src={foto3} alt=""/>
                    </div>
                    <p className="one" dangerouslySetInnerHTML={{ __html: t("home.services.item_3.one") }}></p>
                    <div className="bottom">
                        <p className="two" dangerouslySetInnerHTML={{ __html: t("home.services.item_3.two") }}></p>
                        <NorthEastIcon/>
                    </div>
                </Link>
                <Link to={"/:id/fabric".replace(":id" , 4)} className="box">
                    <div className="foto">
                        <img src={foto4} alt=""/>
                    </div>
                    <p className="one" dangerouslySetInnerHTML={{ __html: t("home.services.item_4.one") }}></p>
                    <div className="bottom">
                        <p className="two" dangerouslySetInnerHTML={{ __html: t("home.services.item_4.two") }}></p>
                        <NorthEastIcon/>
                    </div>
                </Link>
            </div>
        </section>
    )
}
