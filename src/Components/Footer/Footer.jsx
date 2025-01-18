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
import {useTranslation} from "react-i18next";

export default function Footer() {
    const navigate = useNavigate();
    const {t} = useTranslation();
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">{t("footer.title_top")}<CommentIcon /></h1>
                        <button className="right" onClick={()=>navigate("/contact")}>{t("contacts")} <NorthEastIcon /></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <p className="menu">{t("footer.menu.title")}</p>
                        <ul>
                            <li>
                                <Link to='/'>{t("footer.menu.item_1")}</Link>
                            </li>
                            <li>
                                <Link to='/about'>{t("footer.menu.item_2")}</Link>
                            </li>
                            <li>
                                <Link to='/contact'>{t("footer.menu.item_3")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <p className="menu">{t("footer.fabric.title")}</p>
                        <ul>
                            <li>
                                <Link to={"/:id/fabric".replace(":id" , 2)}
                                    // onClick={()=>{window.scrollTop}}
                                >
                                    {t("footer.fabric.item_1")}
                                </Link>
                            </li>
                            <li>
                                <Link to={"/:id/fabric".replace(":id" , 1)} >
                                    {t("footer.fabric.item_2")}
                                </Link>
                            </li>
                            <li>
                                <Link to={"/:id/fabric".replace(":id" , 4)} >
                                    {t("footer.fabric.item_3")}
                                </Link>
                            </li>
                            <li>
                                <Link to={"/:id/fabric".replace(":id" , 3)} >
                                    {t("footer.fabric.item_4")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-auto">
                        <p className="menu">{t("contacts")}</p>
                        <a href={"mailto:atlestextile@gmail.com"} className="bottom">{t("footer.contacts_text")} <MailOutlineIcon /> </a>
                        <div className="text-top">
                            <a href="tel:+998940287200" className="number">+998(94)028-72-00</a>
                            <a href="tel:+998941387200" className="number">+998(94)138-72-00</a>
                            <a href="tel:+998941582000" className="number">+998(94)158-20-00</a>
                            <a href="tel:+998951204111" className="number">+998(95)120-41-11</a>
                        </div>
                    </div>

                    <div className="col-auto">
                        <p className="menu">{t("footer.address_title")}</p>
                        <p className="adres" dangerouslySetInnerHTML={{__html:t("footer.address")}}></p>
                        <div className="col-auto">
                            <p className="menu">{t("footer.social")}</p>
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
