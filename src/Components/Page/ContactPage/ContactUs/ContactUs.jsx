import React from 'react'
import './ContactUs.css'
import foto from '../../../../Assisstest/img/contact.jpg'
import EastIcon from '@mui/icons-material/East';

export default function ContactUs() {
    return (
        <div className='contactus'>
            <div className="box">
                <div className="one">
                    <img src={foto} alt="" />
                </div>
                <div className="two">
                    <h1 className="top">
                        Мы всегда рады <br />вашим вопросам!
                    </h1>
                    <form action="">
                        <input type="text" placeholder='Имя' />
                        <input type="email" placeholder='Почта' />
                        <input type="text" placeholder='Телефон' />
                        <textarea name="" id="" cols="" rows="5" placeholder='Сообщение'></textarea>
                        <a className='contact' href={"#"}>Отправить</a>
                    </form>
                    <a href={"https://maps.app.goo.gl/i6uGKFHJbpeTyzXPA"} className="top">
                        Наши координаты <EastIcon />
                    </a>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3015.9138330226765!2d71.055892!3d40.895705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDUzJzQ0LjUiTiA3McKwMDMnMjEuMiJF!5e0!3m2!1sru!2s!4v1735061303550!5m2!1sru!2s"
                        width="600" height="250" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <p className="top">Электронная почта</p>
                    <a href="mailto:atlestextile@gmail.com" className="email">atlestextile@gmail.com</a>
                    <p className="title">Свяжитесь с нами</p>
                    <a href="tel:+998941582000" className="number">+998(94)158-20-00</a>
                    <a href={"https://maps.app.goo.gl/jEzYGgGzeByror7A8"} className="bottom">
                        Узбекистан г.Наманган <br/>
                        Попский район <br/>
                        Улица Чинор, дом 113
                    </a>
                    <p className="media">Мы в социальных сетях</p>
                    <div className="icon">
                        <div className="i"><i className="fa-brands fa-facebook-f"></i></div>
                        <div className="i"><i className="fa-brands fa-instagram"></i></div>
                        <div className="i"><i className="fa-brands fa-telegram"></i></div>
                        <div className="i"><i className="fa-brands fa-whatsapp"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
