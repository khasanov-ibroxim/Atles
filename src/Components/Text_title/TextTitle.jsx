import React from 'react'
import './TextTitle.css'
import textile from '../../Assisstest/img/textitle.jpg'
export default function TextTitle() {
    return (
        <section className="textile">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h5>//Шьем с любовью и мастерством</h5>
                        <h1>ДИНАМИЧНО РАЗВИВАЮЩАЯ КОМПАНИЯ С БОЛЬШИМ ПОТЕНЦИАЛОМ</h1>
                        <div className="bigcard">
                            <div className="cardin">
                                <div className="top">
                                    <h3>Сильная команда профессионалов</h3>
                                    <p className="text">
                                        Наши сотрудники — основа нашего успеха. В компании работает 250 квалифицированных специалистов, каждый из которых вносит свой вклад в развитие нашей компании.</p>
                                </div>
                                <div className="center">
                                    <h3>Большое пространство для качественного производства</h3>
                                    <p className="text">
                                        Наши производственные мощности обеспечивают все условия для выполнения заказов и производственных процессов.
                                        Общая площадь производства составляет 2800 квадратных метров.</p>
                                </div>
                                <div className="bottom">
                                    <div className="center">
                                        <h3>Путь от старта до успеха</h3>
                                        <p className="text">
                                            С момента своего основания в первой половине 2023 года наша компания быстро развивалась благодаря инновационному подходу и высокому уровню профессионализма нашей команды.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={textile} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}
