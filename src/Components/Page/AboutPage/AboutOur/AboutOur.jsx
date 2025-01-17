import React from 'react'
import './AboutOur.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import foto from '../../../../Assisstest/img/about our.jpg'
export default function AboutOur() {
    return (
        <div className='aboutour'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="top">//ваш текстильный партнёр</p>
                        <h1 className="top">Мы – ваш надежный партнер !</h1>
                        <p className="new">
                            «ATLES POP TEXTILE» MCHJ — динамично развивающееся предприятие, начавшее свою работу в 2023 году. Мы экспортируем текстильную продукцию в Россию и Беларусь, а также гордимся наличием международных сертификатов качества. Наша компания располагает современным производственным оборудованием от ведущих китайских и турецких производителей, что позволяет нам обеспечивать высокое качество продукции.
                            С общей производственной площадью 2800 м² и командой профессионалов из 250 сотрудников мы готовы предложить нашим клиентам лучшие решения в области текстильного производства. В октябре 2024 года мы успешно приняли участие в международной выставке «Uzbekistan Textile EXPO Осень 2024».
                        </p>
                        <div className="right-box">
                            <div className="one">
                                <img src={foto} alt="" />
                            </div>
                            <div className="two">
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon />
                                        <p className="title">Современное оборудование</p>
                                    </div>
                                    <p className="bottom">
                                        Мы располагаем передовыми машинами и станками от ведущих производителей из Китая и Турции:   Zinger JACK, Overlock JACK, DOSO Richman, JUKI
                                    </p>
                                </div>
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon />
                                        <p className="title">Уникальные технологии:</p>
                                    </div>
                                    <p className="bottom">
                                        Наша фабрика оснащена паровым гладильным аппаратом MALRAM в комплекте с паровым котлом MEK-80, что позволяет нам добиваться высокой производственной эффективности и качества готовой продукции.
                                    </p>
                                </div>
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon />
                                        <p className="title">Наши мощности</p>
                                    </div>
                                    <p className="bottom">
                                        Производственная площадь: 2800м²
                                        Количество сотрудников: 250 квалифицированных специалистов, обеспечивающих высокие стандарты производства и контроля качества.
                                    </p>
                                </div>
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon />
                                        <p className="title">Объем производства и экспортные достижения</p>
                                    </div>
                                    <p className="bottom">
                                        Ежедневное производство нашей компании варьируется от 2500 до 8000 единиц продукции в зависимости от типа изделий, из которых впечатляющие 98,7% отправляются на экспорт. В среднем в месяц мы выпускаем продукцию на сумму около 2 миллиардов сумов, что подтверждает стабильность и эффективность нашей работы.
                                    </p>
                                </div>
                                <div className="box">
                                    <div className="text">
                                        <CheckCircleIcon />
                                        <p className="title">Участие в крупнейших выставках</p>
                                    </div>
                                    <p className="bottom">
                                        В октябре 2024 года мы приняли участие в международной выставке «Uzbekistan Textile EXPO Autumn 2024», что стало важным шагом к укреплению наших позиций на рынке и расширению деловых связей.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
