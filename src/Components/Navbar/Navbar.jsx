import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assisstest/img/logo.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import {Link, useNavigate} from 'react-router-dom';
export default function Navbar() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    return (
        <div className="nav-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Link to='/'><img src={logo} alt="" /></Link>
                        <div className={show ? 'null' : 'box'}>
                            <ul>
                                <li>
                                    <Link className='a-text' to='/'>Главная</Link>
                                </li>
                                <li>
                                    <Link className='a-text' to='/about'>О нас</Link>
                                </li>
                                <li className="dropdown_box">
                                    <div className="dropdown_btn">Производство</div>
                                    <div className="dropdown_menu_box">
                                        <Link to={"/:id/fabric".replace(":id" , 2)} className="dropdown_menu_item">
                                            <>Раскройный цех</>
                                        </Link>
                                        <Link to={"/:id/fabric".replace(":id" , 1)} className="dropdown_menu_item">
                                            <>Швейный цех</>
                                        </Link>
                                        <Link to={"/:id/fabric".replace(":id" , 4)} className="dropdown_menu_item">
                                            <>Контроль качества</>
                                        </Link>
                                        <Link to={"/:id/fabric".replace(":id" , 3)} className="dropdown_menu_item">
                                            <>Гладильно упаковочный цех</>
                                        </Link>
                                    </div>
                                </li>


                                <li>
                                    <Link className='a-text' to='/contact'>Контакты</Link>
                                </li>
                            </ul>

                            <div className="box-right">
                                <LocalPhoneIcon/>
                                <div className="text">
                                    <a href="tel:+998941582000" className="number">+998 (94) 158-20-00</a></div>
                            </div>
                            <button className='right' onClick={() => navigate("/contact")}>Cвяжитесь <NorthEastIcon/>
                            </button>
                        </div>
                        <i onClick={() => setShow(!show)} className="bars fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
