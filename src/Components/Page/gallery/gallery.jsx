import React, {useState, useEffect} from 'react';
import {useTranslation} from "react-i18next";
import "./gallery.css";
import header from "../../../Assisstest/gallery/header_gallery.jpg";

// Import Swiper styles and components
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import GalleryHeader from "./gallery_header.jsx";
import Navbar from "../../Navbar/Navbar.jsx";
import Footer from "../../Footer/Footer.jsx";

const Gallery = () => {
    const {t} = useTranslation();
    const [activeEmbed, setActiveEmbed] = useState("nCRV670PJYc?si=sKTyGE4B9L2RD4M-");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    const handleChangeEmbed = (embed) => {
        setActiveEmbed(embed);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const galleryItems = [
        {id: "nCRV670PJYc?si=sKTyGE4B9L2RD4M-", image: "https://img.youtube.com/vi/nCRV670PJYc/maxresdefault.jpg"},
        {id: "xW7Iqf3KzE8?si=CMvrhUbgMegaYiFB", image: "https://img.youtube.com/vi/xW7Iqf3KzE8/mqdefault.jpg"},
        {id: "6m1wkexoDMc?si=wPULjQYvTsiw9dM9", image: "https://img.youtube.com/vi/6m1wkexoDMc/maxresdefault.jpg"},
    ];

    return (
        <div>
            <Navbar/>
            <GalleryHeader/>
            <div className="gallery_box container">
                <div className="gallery_box_title aboutabout">
                    <div className="col-lg-12">
                        <p className="top">
                            {t("gallery.box.subtitle")}
                        </p>
                        <h1 className="top" style={{paddingBottom:"0"}}>
                            {t("gallery.box.title")}
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 active_video">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{minHeight: "300px"}}
                            src={`https://www.youtube.com/embed/${activeEmbed}&amp;controls=0`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="col-lg-6 gallery_item_box">
                        {isMobile ? (
                            <Swiper
                                pagination={{clickable: true}}
                                spaceBetween={0}
                                slidesPerView={1.3}
                                style={{width: "100%"}}
                            >
                                {galleryItems.map((item) => (
                                    <SwiperSlide key={item.id} onClick={() => handleChangeEmbed(item.id)}>
                                        <div className={`gallery_item`}>
                                            {activeEmbed === item.id && <div className="gallery_item_opacity"></div>}
                                            <img src={item.image} alt="Poster"/>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            galleryItems.map((item) => (
                                <div className="col-lg-6" key={item.id} onClick={() => handleChangeEmbed(item.id)}>
                                    <div className={`gallery_item`}>
                                        {activeEmbed === item.id && <div className="gallery_item_opacity"></div>}
                                        <img src={item.image} alt="Poster"/>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Gallery;