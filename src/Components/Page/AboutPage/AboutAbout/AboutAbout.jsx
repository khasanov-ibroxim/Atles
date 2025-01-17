import React from 'react'
import './AboutAbout.css'
import foto from '../../../../Assisstest/img/abouticon.png'
import ser1 from '../../../../Assisstest/img/ser1.png'
import ser2 from '../../../../Assisstest/img/ser2.png'
import ser3 from '../../../../Assisstest/img/ser3.png'
import ser4 from '../../../../Assisstest/img/ser4.png'
import ser5 from '../../../../Assisstest/img/ser5.png'
import { Image } from 'antd'
export default function AboutAbout() {
  return (
    <section className='aboutabout'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="top">
                //о нас
            </p>
            <h1 className="top">
              ПРОФЕССИОНАЛИЗМ, КАЧЕСТВО И ИННОВАЦИИ
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
                2023 год
              </p>
              <p className="title">
                ПЕРВЫЕ ШАГИ В МИРЕ ТЕКСТИЛЯ
              </p>
              <p className="bottom">
                Компания начала свою деятельность в первой половине 2023 года и с тех пор стремительно наращивает производственные мощности и экспортные операции.
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
                СЕРТИФИКАТЫ
              </p>
              <p className="bottom">
                Мы уделяем особое внимание качеству и соответствию международным требованиям. Вся продукция сертифицирована по системе GS1 Узбекистан и имеет необходимые документы, включая «Декларацию о соответствии» и «Сертификат соответствия», полученные в Российской Федерации.
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
              <p className="title">НАШИ ДОСТИЖЕНИЯ</p>
              <p className="bottom">Мы гордимся тем, что успешно сотрудничаем с ведущими странами, такими как Российская Федерация и Республика Беларусь, поставляя высококачественные текстильные изделия.</p>
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
