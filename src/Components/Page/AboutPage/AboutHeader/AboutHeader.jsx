import React from 'react';
import './AboutHeader.css';
import foto from '../../../../Assisstest/img/about strelka.png';
import { useTranslation } from 'react-i18next';

export default function AboutHeader() {
  const { t } = useTranslation();

  return (
      <div className='aboutheader'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="top">
                {t("about.aboutHeader.title")}
              </h1>
              <div className="box">
                <img src={foto} alt="strelka" />
                <div className="text">
                  <p className="top">{t("about.aboutHeader.box.text")}</p>
                  <a className='number' href={`tel:+998941582000`}>
                    +998 (94) 158-20-00
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
