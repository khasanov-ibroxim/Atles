import React from 'react'
import './Header.css'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import foto from '../../Assisstest/img/header title.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {useTranslation} from "react-i18next";
export default function Header() {
  const {t} = useTranslation();

  return (
    <header>
      <div className="header-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="top">

                {t("home.header.welcome")} <img src={foto} alt="" /> <br />
                {t("home.header.br_1")}<br/>{t("home.header.br_2")}
              </h1>
              <div className="box-bottom">
                <a href="#!"><NorthEastIcon />{t("home.header.bottom_btn")} <br /> {t("home.header.bottom_btn2")}</a>
                <p className="bottom">{t("home.header.bottom_text")}</p>
              </div>

              <div className="corusel">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={50}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide><p className="slide">Zinger JACK</p></SwiperSlide>
                  <SwiperSlide><p className="slide">Overlock JACK</p></SwiperSlide>
                  <SwiperSlide><p className="slide">DOSO Richman</p></SwiperSlide>
                  <SwiperSlide><p className="slide">JUKI</p></SwiperSlide>
                  <SwiperSlide><p className="slide">MALRAM</p></SwiperSlide>
                  <SwiperSlide><p className="slide">STEAM</p></SwiperSlide>
                  <SwiperSlide><p className="slide">BOILER</p></SwiperSlide>
                  <SwiperSlide><p className="slide">MEK-80</p></SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
