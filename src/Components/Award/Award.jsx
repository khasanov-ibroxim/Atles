import React from "react";
import "./award.css";
import { useTranslation } from "react-i18next";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";

export default function Award() {
    const { t } = useTranslation();

    return (
        <section className="award">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="top">{t("home.award.top")}</p>
                        <h1 className="top">{t("home.award.h1")}</h1>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <WorkspacePremiumOutlinedIcon />
                            <p className="bottom">{t("home.award.quality")}</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <BoltIcon />
                            <p className="bottom">{t("home.award.speed")}</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <PersonOutlineIcon />
                            <p className="bottom">{t("home.award.individual")}</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="box">
                            <DeveloperBoardIcon />
                            <p className="bottom">{t("home.award.technology")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
