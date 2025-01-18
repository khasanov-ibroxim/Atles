import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import homeTranslations from "./translations/homeTranslate.jsx";
import aboutTranslations from "./translations/aboutTranslate.jsx";
import contactTranslate from "./translations/contactTranslate.jsx";
import FabricTranslate from "./translations/fabricTranslate.jsx";

const resources = {
    ru: {
        translation: {
            home: homeTranslations.ru,
            about: aboutTranslations.ru,
            fabric:FabricTranslate.ru,
            contact: contactTranslate.ru,

            navbar: {
                home: "Главная",
                about: "О нас",
                production: "Производство",
                contact: "Контакты",
                fabric:{
                    item_1:"Раскройный цех",
                    item_2:"Швейный цех",
                    item_3:"Контроль качества",
                    item_4:"Гладильно упаковочный цех",
                }
            },

            footer:{
                title_top:"Пишите, Задавайте Вопросы, Делитесь Идеями!",
                menu:{
                    title:"Меню",
                    item_1:"Главная",
                    item_2:"О нас",
                    item_3:"Контакты"
                },
                fabric:{
                    title:"Производство",
                    item_1:"Раскройный цех",
                    item_2:"Швейный цех",
                    item_3:"Контроль качества",
                    item_4:"Гладильно упаковочный цех",
                },
                contacts_text:"Отправить сообщение",
                address_title:"Адрес",
                address:"Узбекистан г.Наманган <br/> Попский район <br/> Улица Чинор, дом 113",
                social:"Интернет ресурсы"
            },
            contacts:"Контакты"
        },
    },
    en: {
        translation: {
            home: homeTranslations.en,
            about: aboutTranslations.en,
            fabric:FabricTranslate.en,
            contact: contactTranslate.en,

            navbar: {
                home: "Home",
                about: "About Us",
                production: "Production",
                contact: "Contacts",
                fabric:{
                    item_1:"Cutting shop",
                    item_2:"Sewing Shop",
                    item_3:"Quality Control",
                    item_4:"Ironing and packaging shop",
                }
            },
            footer:{
                title_top:"Write, Ask Questions, Share Ideas!",
                menu:{
                    title:"Menu",
                    item_1:"Home",
                    item_2:"About us",
                    item_3:"Contacts"
                },
                fabric:{
                    title:"Production",
                    item_1:"Cutting shop",
                    item_2:"Sewing shop",
                    item_3:"Quality control",
                    item_4:"Ironing and packing shop",
                },
                contacts_text:"Send message",
                address_title:"Address",
                address:"Uzbekistan, Namangan<br/> Pop district<br/> Chinor street, house 113",
                social:"Internet resources"
            },
            contacts:"Contacts"
        }
    },
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false,
        },
        resources,
    });

export default i18n;
