import React from 'react'
import './Services.css'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import foto1 from '../../Assisstest/img/foto1.jpg'
import foto2 from '../../Assisstest/img/foto2.jpg'
import foto3 from '../../Assisstest/img/foto3.jpg'
import foto4 from '../../Assisstest/img/foto4.jpg'
import {Link} from 'react-router-dom';

export default function Services() {
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="top">//От идеи до готового изделия</p>
                        <h1 className="top">Открой для себя, как текстиль может изменить стиль!</h1>
                    </div>
                </div>
            </div>
            <div className="title">
                <Link to={"/:id/fabric".replace(":id" , 1)} className="box">
                    <div className="foto">
                        <img src={foto1} alt=""/>
                    </div>
                    <p className="one">01 - Швейный<br/>цех</p>
                    <div className="bottom">
                        <p className="two">
                            Оснащён современным оборудованием <br/>и высококвалифицированным персоналом.
                        </p>
                        <NorthEastIcon/>
                    </div>
                </Link>
                <Link to={"/:id/fabric".replace(":id" , 2)} className="box">
                    <div className="foto">
                        <img src={foto2} alt=""/>
                    </div>
                    <p className="one">02 - Раскройный<br/>цех</p>
                    <div className="bottom">
                        <p className="two">
                            Оснащён передовыми технологиями <br/> и высокоточными машинами,<br/> обеспечивающими
                            точность и
                            скорость раскроя <br/> тканей для дальнейшего производства
                        </p>
                        <NorthEastIcon/>
                    </div>
                </Link>
                <Link to={"/:id/fabric".replace(":id" , 3)} className="box">
                    <div className="foto">
                        <img src={foto3} alt=""/>
                    </div>
                    <p className="one">03 - Гладильно<br/>упаковочный цех</p>
                    <div className="bottom">
                        <p className="two">
                            Оснащён современным оборудованием для <br/> качественной глажки и аккуратной <br/> упаковки
                            готовых изделий
                        </p>
                        <NorthEastIcon/>
                    </div>
                </Link>
                <Link to={"/:id/fabric".replace(":id" , 4)} className="box">
                    <div className="foto">
                        <img src={foto4} alt=""/>
                    </div>
                    <p className="one">04 - Контроль<br/>качества</p>
                    <div className="bottom">
                        <p className="two">
                            Включает многократные проверки на каждом <br/> этапе производства, гарантируя высокие стандарты
                            <br/> продукции и соответствие международным требованиям
                        </p>
                        <NorthEastIcon/>
                    </div>
                </Link>
            </div>
        </section>
    )
}
