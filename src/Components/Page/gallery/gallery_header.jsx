import React from 'react';
import '../AboutPage/AboutHeader/AboutHeader.css';
import foto from '../../../Assisstest/img/about strelka.png';
import fotoHeader from '../../../Assisstest/gallery/header_gallery.jpg';
import { useTranslation } from 'react-i18next';

export default function GalleryHeader() {
    const { t } = useTranslation();

    return (
        <div className='aboutheader' style={{backgroundImage: `url(${fotoHeader})` , position:"relative"}}>
            <div className="aboutheader_opacity"></div>
            <div className="container" style={{zIndex:"2" , position:"relative"}}>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            {t("gallery.header.title")}
                        </h1>
                        <div className="box">
                            <img src={foto} alt="strelka" />
                            <div className="text">
                                <p className="top">{t("gallery.header.subtext")}</p>
                                <a className='number' href={`tel:+998941582000`}>
                                    +998 (94) 158-20-00
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
