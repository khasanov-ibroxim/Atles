import React from 'react'
import './Footer.css'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import {Link, useNavigate} from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
    const navigate = useNavigate();

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">Пишите, Задавайте Вопросы, Делитесь Идеями!<CommentIcon /></h1>
                        <button className="right" onClick={()=>navigate("/contact")}>Контакты <NorthEastIcon /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <p className="menu">Меню</p>
                        <ul>
                            <li>
                                <Link to='/'>Главная</Link>
                            </li>
                            <li>
                                <Link to='/about'>О нас</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <p className="menu">Производство</p>
                        <ul>
                            <li>
                                <Link to={"/:id/fabric".replace(":id" , 2)}
                                    // onClick={()=>{window.scrollTop}}
                                >
                                    <>Раскройный цех</>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/:id/fabric".replace(":id" , 1)} >
                                    <>Швейный цех</>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/:id/fabric".replace(":id" , 4)} >
                                    <>Контроль качества</>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/:id/fabric".replace(":id" , 3)} >
                                    <>Гладильно упаковочный цех</>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <p className="menu">Контакты</p>
                        <a href={"mailto:atlestextile@gmail.com"} className="bottom">Отправить сообщение <MailOutlineIcon /> </a>
                        <div className="text-top">
                            <a href="tel:+998940287200" className="number">+998(94)028-72-00</a>
                            <a href="tel:+998941387200" className="number">+998(94)138-72-00</a>
                            <a href="tel:+998941582000" className="number">+998(94)158-20-00</a>
                            <a href="tel:+998951204111" className="number">+998(95)120-41-11</a>
                        </div>
                    </div>
                    {/* <div className="col-auto">
                        <p className="menu">Popular updates</p>
                        <div className="box-bottom">
                            <div className="box">
                                <img src={foto1} alt="" />
                                <div className="text">
                                    <a href='#!' className="right">Can textiles lead the way<br />during the pandemic?</a>
                                    <p className="right">March 18, 2021</p>
                                </div>
                            </div>
                            <div className="box">
                                <img src={foto2} alt="" />
                                <div className="text">
                                    <a href="#!" className="right">The Story of a Silk Lends<br />Cotton like...</a>
                                    <p className="right">March 9, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-auto">
                        <p className="menu">Адрес</p>
                        <p className="adres">
                            Узбекистан г.Наманган <br/>
                            Попский район <br/>
                            Улица Чинор, дом 113
                        </p>
                        <div className="col-auto">
                            <p className="menu">Интернет ресурсы</p>
                            <ul className={"footer_social"}>
                                <li>
                                    <a href="#!"><FacebookIcon/></a>
                                </li>
                                <li>
                                    <a href="#!"><InstagramIcon/></a>
                                </li>
                                <li>
                                    <a href="#!"><WhatsAppIcon/></a>
                                </li>
                                <li>
                                    <a href="#!"><TelegramIcon/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
