import React from 'react'
import './FabricHeader.css'
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function FabricHeader({DataId}) {
    const {t} = useTranslation();
    return (
        <div className='fabricHeader'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">
                            {DataId === 1 && t("navbar.fabric.item_2")} {/*Швейный цех*/}
                            {DataId === 2 && t("navbar.fabric.item_1")} {/*Раскройный цех*/}
                            {DataId === 3 && t("navbar.fabric.item_4")} {/*Гладильный и  упаковочный цех*/}
                            {DataId === 4 && t("navbar.fabric.item_3")} {/*Контроль качества*/}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
