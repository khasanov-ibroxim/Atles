import React from 'react'
import './AboutAbout.css'
import foto from '../../../../Assisstest/img/abouticon.png'
import ser1 from '../../../../Assisstest/img/ser1.png'
import ser2 from '../../../../Assisstest/img/ser2.png'
import ser3 from '../../../../Assisstest/img/ser3.png'
import ser4 from '../../../../Assisstest/img/ser4.png'
import ser5 from '../../../../Assisstest/img/ser5.png'
import { Image } from 'antd'
import {useTranslation} from "react-i18next";
export default function AboutAbout() {
  const {t} = useTranslation()
  return (
    <section className='aboutabout'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="top">
              {t("about.about.top")}
            </p>
            <h1 className="top">
              {t("about.about.title")}
            </h1>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <div className="foto">
                <Image.PreviewGroup
                  items={[ser1
                  ]}
                >
                  <Image
                    src={ser1}
                  />
                </Image.PreviewGroup>
              </div>
              <p className="number">
                {t("about.about.steps.item_1.year")}
              </p>
              <p className="title">
                {t("about.about.steps.item_1.title")}
              </p>
              <p className="bottom">
                {t("about.about.steps.item_1.description")}
              </p>
            </div>

          </div>
          <div className="col-lg-4">
            <div className="box">
              <div className="foto">
                <Image.PreviewGroup
                  items={[ser2
                  ]}
                >
                  <Image
                    src={ser2}
                  />
                </Image.PreviewGroup>
              </div>
              <img src={foto} alt="" />
              <p className="title">
                {t("about.about.steps.item_2.title")}
              </p>
              <p className="bottom">
                {t("about.about.steps.item_2.description")}
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <div className="foto">
                <Image.PreviewGroup
                  items={[ser3
                  ]}
                >
                  <Image
                    src={ser3}
                  />
                </Image.PreviewGroup>
              </div>
              <p className="number">$</p>
              <p className="title">{t("about.about.steps.item_3.title")}</p>
              <p className="bottom">{t("about.about.steps.item_3.description")}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <Image.PreviewGroup
              items={[ser4
              ]}
            >
              <Image
                src={ser4}
              />
            </Image.PreviewGroup>
          </div>
          <div className="col-lg-4">
            <Image.PreviewGroup
              items={[ser5
              ]}
            >
              <Image
                src={ser5}
              />
            </Image.PreviewGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
