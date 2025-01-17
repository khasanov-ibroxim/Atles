import React from 'react'
import './FabricSection.css'
import fabricSection from '../../../../Assisstest/img/fabricsection.jpg'
import foto1 from '../../../../Assisstest/img/fabric1.jpg'
import foto2 from '../../../../Assisstest/img/fabric2.jpg'
import foto3 from '../../../../Assisstest/img/fabric3.jpg'
import CheckIcon from '@mui/icons-material/Check';

import shveyniy_1 from "../../../../Assisstest/fabric/1/shveyniy_1.jpg"
import shveyniy_2 from "../../../../Assisstest/fabric/1/shveyniy_2.webp"
import shveyniy_3 from "../../../../Assisstest/fabric/1/shveyniy_3.webp"

import rask_1 from "../../../../Assisstest/fabric/2/rask_1.jpg"
import rask_2 from "../../../../Assisstest/fabric/2/rask_2.jpg"
import rask_3 from "../../../../Assisstest/fabric/2/rask_3.webp"
import rask_element from "../../../../Assisstest/fabric/2/element_rask.webp"

import glad_1 from "../../../../Assisstest/fabric/3/glad_1.jpg"
import glad_2 from "../../../../Assisstest/fabric/3/glad_2.webp"
import glad_3 from "../../../../Assisstest/fabric/3/kantrol_3.webp"
import glad_element from "../../../../Assisstest/fabric/3/glad_element.webp"


import kantrol_1 from "../../../../Assisstest/fabric/4/kantrol_1.jpg"
import kantrol_2 from "../../../../Assisstest/fabric/4/kantrol_2.jpg"
import kantrol_3 from "../../../../Assisstest/fabric/4/kantrol_3.jpg"
import kantrol_element from "../../../../Assisstest/fabric/4/kantrol_element.jpg"



export default function FabricSection({DataId}) {
    return (
        <div className='fabricSection'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {DataId === 1 && <img className='top-foto' src={shveyniy_1} alt=""/>}
                        {DataId === 2 && <img className='top-foto' src={rask_1} alt=""/>}
                        {DataId === 3 && <img className='top-foto' src={glad_1} alt=""/>}
                        {DataId === 4 && <img className='top-foto' src={kantrol_1} alt=""/>}

                    </div>
                    <div className="col-lg-12">
                        {DataId === 1 && <>
                            <div className="left-text">
                                <h1 className="top">Инновации и качество в каждом стежке</h1>
                                <p className="top">Добро пожаловать в наш швейный цех, где технологии сочетаются с
                                    мастерством. Мы гордимся тем, что используем швейные машины мировых брендов, таких
                                    как JACK, Overlock JACK, DOSO Richman, JUKI и Zinger. Каждая модель была тщательно
                                    выбрана для достижения оптимальной производительности, безупречного качества и
                                    долговечности. Мы уверены, что наше оборудование позволяет создавать продукцию,
                                    которая оправдает ваши ожидания</p>
                            </div>
                        </>}
                        {DataId === 2 && <>
                            <div className="left-text">
                                <h1 className="top">Добро пожаловать в наш раскройный цех — место, где начинается
                                    волшебство создания тканей!</h1>
                                <p className="top">Наш раскройный цех на фабрике — это сердце производственного
                                    процесса, где начинается создание каждой детали нашей будущей продукции. Благодаря
                                    инновационным технологиям, профессионализму и вниманию к каждой ткани мы гарантируем
                                    высочайшее качество и точность раскроя.</p>
                            </div>
                        </>}
                        {DataId === 2 && <img className='foto-1' src={rask_element} alt=""/>}
                        {DataId === 3 && <>
                            <div className="left-text">
                                <h1 className="top">От идеально выглаженных изделий до надежной упаковки — мы заботимся
                                    о каждой детали</h1>
                                <p className="top">Наши гладильный и упаковочный цеха — это сердце фабрики, где качество
                                    превращается в совершенство. Используя утюги MALRAM и комплект STEAM BOILER MEK-80,
                                    мы обеспечиваем безупречную глажку, сохраняя идеальную форму и текстуру каждого
                                    изделия. В сочетании с современным оборудованием и профессионализмом наших
                                    сотрудников мы гарантируем идеальное состояние вашей продукции</p>
                            </div>
                        </>}
                        {DataId === 3 && <img className='foto-1' src={glad_element} alt=""/>}
                        {DataId === 4 && <>
                            <div className="left-text">
                                <h1 className="top">Контроль качества: безупречность на каждом стежке</h1>
                                <p className="top">Контроль качества на нашем швейном производстве — это не просто
                                    формальность, а основа, на которой строится доверие наших клиентов. Мы понимаем, что
                                    важна каждая деталь, и тщательно следим за процессом от начала и до конца. Наши
                                    специалисты внимательно проверяют каждое изделие на всех этапах — от выбора тканей
                                    до финальной отделки. Мы используем самые современные технологии и оборудование для
                                    проверки прочности швов, стыков и фурнитуры, чтобы гарантировать, что каждая вещь,
                                    выходящая из нашего цеха, будет идеальной
                                </p>
                            </div>
                        </>}
                        {DataId === 4 && <img className='foto-1' src={kantrol_element} alt=""/>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="title">
                            {DataId === 1 && "Почему выбирают наш швейный цех?"}
                            {DataId === 2 && "Мы уверены в каждом разрезе"}
                            {DataId === 3 && "Глажение и упаковка: качество, которое можно почувствовать"}
                            {DataId === 4 && "Тщательная проверка каждого изделия — от первой строчки до последнего стежка"}
                        </h1>
                    </div>
                    <div className="col-lg-5">
                        {DataId === 1 && <img className='foto-2' src={shveyniy_2} alt=""/>}
                        {DataId === 2 && <img className='foto-2' src={rask_2} alt=""/>}
                        {DataId === 3 && <img className='foto-2' src={glad_2} alt=""/>}
                        {DataId === 4 && <img className='foto-2' src={kantrol_2} alt=""/>}
                    </div>
                    <div className="col-lg-7">
                        <p className="title">
                            {DataId === 1 && "Мы используем передовое оборудование, чтобы предложить нашим клиентам высочайший уровень качества. В нашем швейном цехе работают только профессионалы и современное оборудование"}
                            {DataId === 2 && "Мы понимаем, насколько важно точное и аккуратное исполнение. В нашем раскройном цехе работает команда опытных специалистов, которые используют передовые технологии для раскроя тканей и материалов. Мы работаем с разными типами тканей и плотностью, что позволяет нам обеспечивать идеальное качество для каждого заказа"}
                            {DataId === 3 && "Мы гордимся тем, что можем предложить индивидуальные решения, которые соответствуют всем вашим требованиям и ожиданиям, сохраняя при этом экологические стандарты упаковки"}
                            {DataId === 4 && "Ни один дефект не остаётся незамеченным — каждый шов, каждая деталь проходят строгую проверку на наличие даже минимальных погрешностей. Это позволяет нам выпускать продукцию, которая соответствует самым высоким стандартам качества"}
                        </p>

                        {DataId === 1 &&
                            <div className="box">
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>современные технологии</p>
                                    <p className="bottom"><CheckIcon/>высокая производительность</p>
                                    <p className="bottom"><CheckIcon/>индивидуальный подход</p>
                                    <p className="bottom"><CheckIcon/>широкий ассортимент</p>
                                </div>
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>высокая точность</p>
                                    <p className="bottom"><CheckIcon/>опытные специалисты</p>
                                    <p className="bottom"><CheckIcon/>гибкость производства</p>
                                    <p className="bottom"><CheckIcon/>контроль качества</p>
                                </div>
                            </div>
                        }
                        {DataId === 2 &&
                            <div className="box">
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>консультация</p>
                                    <p className="bottom"><CheckIcon/>подготовка</p>
                                    <p className="bottom"><CheckIcon/>процесс раскроя </p>
                                    <p className="bottom"><CheckIcon/>скорость</p>
                                </div>
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>высокая точность</p>
                                    <p className="bottom"><CheckIcon/>опытные специалисты</p>
                                    <p className="bottom"><CheckIcon/>гибкость производства</p>
                                    <p className="bottom"><CheckIcon/>контроль качества</p>
                                </div>
                            </div>
                        }
                        {DataId === 3 &&
                            <div className="box">
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>современное оборудование</p>
                                    <p className="bottom"><CheckIcon/>высокая скорость</p>
                                    <p className="bottom"><CheckIcon/>индивидуальный подход </p>
                                    <p className="bottom"><CheckIcon/>экологическая упаковка</p>
                                </div>
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>точность</p>
                                    <p className="bottom"><CheckIcon/>опытные специалисты</p>
                                    <p className="bottom"><CheckIcon/>гибкость производства</p>
                                    <p className="bottom"><CheckIcon/>контроль качества</p>
                                </div>
                            </div>
                        }
                        {DataId === 4 &&
                            <div className="box">
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>современные технологии тестирования</p>
                                    <p className="bottom"><CheckIcon/>многоуверенный контроль</p>
                                    <p className="bottom"><CheckIcon/>тщательная проверка</p>
                                    <p className="bottom"><CheckIcon/>улучшение процессов</p>
                                </div>
                                <div className="one">
                                    <p className="bottom"><CheckIcon/>высокая точность</p>
                                    <p className="bottom"><CheckIcon/>опытные специалисты</p>
                                    <p className="bottom"><CheckIcon/>гибкость производства</p>
                                    <p className="bottom"><CheckIcon/>независимые аудиторы качества</p>
                                </div>
                            </div>
                        }

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <h1 className="bottom">
                            {DataId === 1 && "Overlock JACK: Совершенство в обработке краев"}
                            {DataId === 2 && "Мы — ваш надежный партнер на пути к успеху!"}
                            {DataId === 3 && "Современное оборудование с MALRAM и STEAM BOILER MEK-80"}
                            {DataId === 4 && "Многоуровневый контроль"}
                        </h1>
                        <p className="last">
                            {DataId === 1 && "Машины Overlock JACK — это надежный выбор для обработки краев ткани. С их помощью мы достигаем высокой скорости и точности выполнения швов, обеспечивая идеально обработанные края, которые не будут осыпаться даже после многократных стирок. Эти машины идеально подходят для работы с различными тканями, от легких до плотных"}
                            {DataId === 2 && "Мы предлагаем конкурентоспособные цены, надёжность и высокое качество, что позволяет вам быть уверенными в результате"}
                            {DataId === 3 && "Мы используем утюги MALRAM с комплектом парового утюга MEK-80 для достижения безупречного качества глажки и обработки, обеспечивая идеальную форму каждого изделия."}
                            {DataId === 4 && "Мы применяем несколько этапов контроля качества на всех стадиях производства, чтобы гарантировать идеальное состояние каждого изделия."}
                        </p>
                        <h1 className="bottom">
                            {DataId === 1 && "DOSO Richman: Высокая точность и скорость работы"}
                            {DataId === 2 && "Сделаем ваше производство еще более эффективным"}
                            {DataId === 3 && "Индивидуальный подход к каждому заказу"}
                            {DataId === 4 && "Опытные специалисты"}
                        </h1>
                        <p className="last">
                            {DataId === 1 && "Машины DOSO Richman — это воплощение японского качества и надежности. Эти устройства обладают уникальной способностью справляться с большими объемами производства без ущерба для точности. В нашем цехе DOSO Richman используется для работы с самыми сложными и высококачественными материалами"}
                            {DataId === 2 && "Наша цель — помочь вашему бизнесу добиться успеха благодаря высококачественному раскрою. Присоединяйтесь к числу наших довольных клиентов и убедитесь в этом сами"}
                            {DataId === 3 && "Подбираем оптимальные решения для глажки и упаковки в зависимости от типа продукции и требований клиента, используя передовые технологии."}
                            {DataId === 4 && "Наши эксперты в области шитья внимательно следят за каждым этапом — от выбора ткани до финальной отделки."}
                        </p>
                    </div>
                    <div className="col-lg-7">
                        {DataId === 1 && <img className='foto-3' src={shveyniy_3} alt=""/>}
                        {DataId === 2 && <img className='foto-3' src={rask_3} alt=""/>}
                        {DataId === 3 && <img className='foto-3' src={glad_3} alt=""/>}
                        {DataId === 4 && <img className='foto-3' src={kantrol_3} alt=""/>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="bottom">
                            {DataId === 1 && "JUKI: Японская инженерия для профессионалов"}
                            {DataId === 3 && "Экологическая упаковка"}
                            {DataId === 4 && "Современные технологии тестирования"}
                        </h1>
                        <p className="last">
                            {DataId === 1 && "JUKI — один из самых уважаемых брендов в мире швейной промышленности. Машины JUKI обеспечивают исключительную точность, что делает их идеальными для работы с самыми сложными тканями. Мы используем JUKI для широкого спектра"}
                            {DataId === 3 && "Все упаковочные материалы подбираются с учётом экологических требований, обеспечивая не только сохранность продукции, но и заботу о планете."}
                            {DataId === 4 && "Мы используем передовые технологии и оборудование для проверки прочности швов, стыков и других важных элементов одежды."}
                        </p>
                    </div>

                    <div className="col-lg-12 mt-5">
                        <h1 className="bottom">
                            {DataId === 1 && "Zinger: Доступное качество и надежность"}
                            {DataId === 3 && "Высокая скорость и точность"}
                        </h1>
                        <p className="last">
                            {DataId === 1 && "Zinger — это идеальный вариантZinger используется для более простых операций, что позволяет эффективно организовать рабочие процессы."}
                            {DataId === 3 && "Наши специалисты обеспечивают быструю и качественную обработку продукции, гарантируя её идеальное состояние на выходе."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
