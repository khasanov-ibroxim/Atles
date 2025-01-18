import hand from "../../Assisstest/img/hand.png";
import foto from "../../Assisstest/img/header title.png";
import foto1 from "../../Assisstest/img/our.png";
import React from "react";

const homeTranslations = {
    ru: {
        header: {
            welcome: "ДОБРО",
            br_1: "ПОЖАЛОВАТЬ",
            br_2: "МИР ТЕКСТИЛЯ!",
            bottom_text: "Вдохновляйтесь качественными трикотажными изделиями, созданными с любовью и мастерством. Мы — команда, которая превращает ткани в шедевры, чтобы каждая деталь вашей жизни была красивой и комфортной.",
            bottom_btn: "Создаём",
            bottom_btn2: "вдохновляем",
        },
        text_title: {
            title_h5: "//Шьем с любовью и мастерством",
            title_h1: "ДИНАМИЧНО РАЗВИВАЮЩАЯ КОМПАНИЯ С БОЛЬШИМ ПОТЕНЦИАЛОМ",
            item_1: {
                h3: "Сильная команда профессионалов",
                p: "Наши сотрудники — основа нашего успеха. В компании работает 250 квалифицированных специалистов, каждый из которых вносит свой вклад в развитие нашей компании."
            },
            item_2: {
                h3: "Большое пространство для качественного производства",
                p: "Наши производственные мощности обеспечивают все условия для выполнения заказов и производственных процессов. Общая площадь производства составляет 2800 квадратных метров."
            },
            item_3: {
                h3: "Путь от старта до успеха",
                p: "С момента своего основания в первой половине 2023 года наша компания быстро развивалась благодаря инновационному подходу и высокому уровню профессионализма нашей команды."
            },
        },
        services: {
            title_p: "//От идеи до готового изделия",
            title_h1: "Открой для себя, как текстиль может изменить стиль!",
            item_1: {
                one: "01 - Швейный<br/>цех",
                two: "Оснащён современным оборудованием <br/>и высококвалифицированным персоналом."
            },
            item_2: {
                one: "02 - Раскройный<br/>цех",
                two: ` Оснащён передовыми технологиями <br/> и высокоточными машинами,<br/> обеспечивающими точность и скорость раскроя <br/> тканей для дальнейшего производства`
            },
            item_3: {
                one: "03 - Гладильно<br/>упаковочный цех",
                two: " Оснащён современным оборудованием для <br/> качественной глажки и аккуратной <br/> упаковки готовых изделий"
            },
            item_4: {
                one: "04 - Контроль<br/>качества",
                two: "Включает многократные проверки на каждом <br/> этапе производства, гарантируя высокие стандарты <br/> продукции и соответствие международным требованиям"
            },
        },
        why: {
            title: "ОБЪЁМ ПРОИЗВОДСТВА И ЭКСПОРТ",
            item_1: {
                number: "2500-8000",
                title: "Единиц в день",
                bottom: "Разнообразие продукции и производственные объемы"
            },
            item_2: {
                number: "98,7%",
                title: "Экспортная направленность",
                bottom: "Мы обеспечиваем международные поставки и стремимся расширять географию наших клиентов, предлагая конкурентоспособную продукцию"
            },
            item_3: {
                number: "2 миллиарда",
                title: "сум Ежемесячный объем производства",
                bottom: "Это подтверждает высокий уровень <br/>нашей производственной мощности и стабильность финансовых показателей"
            },
            slide_1:"Лучшее качество",
            slide_2:"Стабильность",
            slide_3:"Дизайн",
            slide_4:"Отвтетственность",
        },
        our:{
            p:"//Преимущества",
            h1: `ЗОЛОТЫЕ <img src='${hand}' alt='' /> ПРАВИЛА <br/> НАШЕГО <img src='${foto}' alt='' /> УСПЕХА <img src='${foto1}' alt='' />`
        },
        award: {
            top: "//ваш надёжный выбор",
            h1: "ПОЧЕМУ ВЫБИРАЮТ НАС?",
            quality: "Качество гарантировано",
            speed: "Скорость выполнения",
            individual: "Индивидуальный подход",
            technology: "Современные технологии"
        }
    },
    en: {
        header: {
            welcome: "WELCOME",
            br_1: "TO THE WORLD",
            br_2: "OF TEXTILES!",
            bottom_text: "Get inspired by quality knitwear created with love and craftsmanship. We are a team that turns fabrics into masterpieces so that every detail of your life is beautiful and comfortable.",
            bottom_btn: "We create",
            bottom_btn2: "We inspire",
        },
        text_title: {
            title_h5: "//We sew with love and skill",
            title_h1: "A DYNAMICLY DEVELOPING COMPANY WITH GREAT POTENTIAL",
            item_1: {
                h3: "A strong team of professionals",
                p: "Our employees are the foundation of our success. The company employs 250 qualified specialists, each of whom contributes to the development of our company."
            },
            item_2: {
                h3: "Large space for high-quality production",
                p: "Our production facilities provide all the conditions for fulfilling orders and production processes. The total production area is 2,800 square meters."
            },
            item_3: {
                h3: "The path from start to success",
                p: "Since its foundation in the first half of 2023, our company has developed rapidly thanks to the innovative approach and high level of professionalism of our team."
            },
        },
        services: {
            title_p: "//From idea to finished product",
            title_h1: "Discover how textiles can change style!",
            item_1: {
                one: "01 - Sewing <br/>shop",
                two: "Equipped with modern equipment <br/> and highly qualified personnel."
            },
            item_2: {
                one: "02 - Cutting <br/>shop",
                two: `Equipped with advanced technology and high-precision machines that ensure precision and speed of cutting fabrics for further cutting`
            },
            item_3: {
                one: "03 - Ironing  <br/> Packaging shop",
                two: "Equipped with modern equipment for high-quality ironing and neat packaging of finished products"
            },
            item_4: {
                one: "04 - Quality <br/>Control",
                two: "Includes multiple checks at each stage of production, ensuring high product standards and compliance with international requirements"
            },
        },
        why: {
            title: "PRODUCTION VOLUME AND EXPORT",
            item_1: {
                number: "2500-8000",
                title: "Units per day",
                bottom: "Product variety and production volumes"
            },
            item_2: {
                number: "98,7%",
                title: "Export focus",
                bottom: "We provide international supplies and strive to expand the geography of our customers, offering competitive products"
            },
            item_3: {
                number: "2 billion",
                title: "sums Monthly production volume",
                bottom: "This confirms the high level of our production capacity and the stability of financial indicators"
            },
            slide_1:"Best quality ",
            slide_2:"Stability",
            slide_3:"Design",
            slide_4:"Responsibility",
        },
        our:{
            p:"//Advantages",
            h1: `GOLDEN <img src='${hand}' alt='' /> RULES <br/> OF OUR  <img src='${foto}' alt='' /> SUCCESS <img src='${foto1}' alt='' />`
        },
        award: {
            top: "//your reliable choice",
            h1: "WHY CHOOSE US?",
            quality: "Quality guaranteed",
            speed: "Speed of execution",
            individual: "Individual approach",
            technology: "Modern technologies"
        }
    }
};

export default homeTranslations;
