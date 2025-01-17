import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../Assisstest/img/logo.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import {Link, useNavigate} from 'react-router-dom';
import {Dropdown, Space} from "antd";
import {languages} from "../../lang/langs.jsx";
import {useTranslation} from "react-i18next";
import {useLanguage} from "../../lang/LangContext.jsx";
import {DownOutlined, MenuOutlined} from "@ant-design/icons";

export default function Navbar({onlyIcon = true}) {
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const {handleLanguageChange, selectedLanguage} = useLanguage();
    const {t} = useTranslation();

    return (
        <div className="nav-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Link to='/'><img src={logo} alt=""/></Link>
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
                                        <Link to={"/:id/fabric".replace(":id", 2)} className="dropdown_menu_item">
                                            <>Раскройный цех</>
                                        </Link>
                                        <Link to={"/:id/fabric".replace(":id", 1)} className="dropdown_menu_item">
                                            <>Швейный цех</>
                                        </Link>
                                        <Link to={"/:id/fabric".replace(":id", 4)} className="dropdown_menu_item">
                                            <>Контроль качества</>
                                        </Link>
                                        <Link to={"/:id/fabric".replace(":id", 3)} className="dropdown_menu_item">
                                            <>Гладильно упаковочный цех</>
                                        </Link>
                                    </div>
                                </li>

                                <li>
                                    <Link className='a-text' to='/contact'>Контакты</Link>
                                </li>
                                <li className={"nav_dropdown"}>
                                    <Dropdown
                                        menu={{
                                            items: languages,
                                            onClick: handleLanguageChange,
                                        }}
                                        style={{zIndex: 9999, cursor: "pointer"}}
                                    >
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                {onlyIcon ? (
                                                    <span style={{
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center"
                                                    }}>{selectedLanguage.icon} <p>{selectedLanguage.label} </p></span>
                                                ) : (
                                                    <>
                                                        {selectedLanguage.icon} {selectedLanguage.label} <DownOutlined/>
                                                    </>
                                                )}
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </li>
                            </ul>


                                <div className="box-right">
                                    <LocalPhoneIcon/>
                                    <div className="text">
                                        <a href="tel:+998941582000" className="number">+998 (94) 158-20-00</a></div>
                                </div>


                        </div>
                        <MenuOutlined
                            className={"bars fa-solid fa-bars"}
                            onClick={() => setShow(!show)} style={{color: "white"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
