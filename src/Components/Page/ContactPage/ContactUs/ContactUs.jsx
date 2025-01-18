import React from 'react';
import './ContactUs.css';
import foto from '../../../../Assisstest/img/contact.jpg';
import EastIcon from '@mui/icons-material/East';
import {useTranslation} from "react-i18next";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ContactUs() {
    const {t} = useTranslation();

    return (
        <div className='contactus'>
            <div className="box">
                <div className="one">
                    <img src={foto} alt={t("contact.contact.title")}/>
                </div>
                <div className="two">
                    <h1 className="top">{t("contact.contact.title")}</h1>
                    <form action="">
                        <input type="text" placeholder={t("contact.contact.form.name")}/>
                        <input type="email" placeholder={t("contact.contact.form.email")}/>
                        <input type="text" placeholder={t("contact.contact.form.phone")}/>
                        <textarea
                            cols=""
                            rows="5"
                            placeholder={t("contact.contact.form.message")}
                        ></textarea>
                        <a className='contact' href={"#"}>{t("contact.contact.form.send")}</a>
                    </form>
                    <a href={"https://maps.app.goo.gl/i6uGKFHJbpeTyzXPA"} className="top">
                        {t("contact.contact.coordinates")} <EastIcon/>
                    </a>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3015.9138330226765!2d71.055892!3d40.895705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDUzJzQ0LjUiTiA3McKwMDMnMjEuMiJF!5e0!3m2!1sru!2s!4v1735061303550!5m2!1sru!2s"
                        width="600" height="250" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <p className="top">{t("contact.contact.email")}</p>
                    <a href="mailto:atlestextile@gmail.com" className="email">atlestextile@gmail.com</a>
                    <p className="title">{t("contact.contact.contact_us")}</p>
                    <a href="tel:+998941582000" className="number">{t("contact.contact.phone_number")}</a>
                    <a href={"https://maps.app.goo.gl/jEzYGgGzeByror7A8"} className="bottom">
                        {t("contact.contact.address.line1")} <br/>
                        {t("contact.contact.address.line2")} <br/>
                        {t("contact.contact.address.line3")}
                    </a>
                    <p className="media">{t("contact.contact.social_media")}</p>
                    <div className="icon">
                        <div className="i"><FacebookIcon/></div>
                        <div className="i"><InstagramIcon/></div>
                        <div className="i"><TelegramIcon/></div>
                        <div className="i"><WhatsAppIcon/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
