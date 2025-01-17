import React from 'react'
import './Award.css'
// import star from '../../Assisstest/img/star1.png'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import BoltIcon from '@mui/icons-material/Bolt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
export default function Award() {
    return (
        <section className='award'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="top">//ваш надёжный выбор</p>
                        <h1 className="top">ПОЧЕМУ ВЫБИРАЮТ НАС?</h1>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <WorkspacePremiumOutlinedIcon/>
                            <p className="bottom">Качество гарантировано</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <BoltIcon/>
                            <p className="bottom">Скорость выполнения</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <PersonOutlineIcon/>
                            <p className="bottom">Индивидуальный подход</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <DeveloperBoardIcon/>
                            <p className="bottom">Современные технологии</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
