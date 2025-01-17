import React, { useEffect, useState, useRef } from 'react'
import './Why.css'
import star from '../../Assisstest/img/star.png'
export default function Why() {
    return (
        <section className='why'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <p className="top">//Бизнес-бустWhy us</p> */}
                        <h1 className="top">ОБЪЁМ ПРОИЗВОДСТВА И ЭКСПОРТ</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="number">2500-8000</p>
                            <p className="title">Единиц в день</p>
                            <p className="bottom">Разнообразие продукции и производственные объемы</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="number">98,7%</p>
                            <p className="title">Экспортная направленность</p>
                            <p className="bottom">Мы обеспечиваем международные поставки и стремимся расширять географию наших клиентов, предлагая конкурентоспособную продукцию</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="number">2 миллиарда</p>
                            <p className="title">сум Ежемесячный объем производства</p>
                            <p className="bottom">Это подтверждает высокий уровень <br/>нашей производственной мощности и стабильность финансовых показателей</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel">
                <div className="logo-slider">
                    <div className="logos-slide">
                        <div className="logos-slide_item">Лучшее качество <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Стабильность <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Дизайн <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Отвтетственность <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Лучшее качество <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Стабильность <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Дизайн <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Отвтетственность <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Лучшее качество <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Стабильность <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Дизайн <img src={star} alt=""/></div>
                        <div className="logos-slide_item">Отвтетственность <img src={star} alt=""/></div>

                    </div>
                </div>
            </div>

        </section>
    )
}
