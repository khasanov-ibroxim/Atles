import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import homeTranslations from "./translations/homeTranslate.jsx";
import aboutTranslations from "./translations/aboutTranslate.jsx";
import productsTranslations from "./translations/productsTranslate.jsx";
import contactTranslate from "./translations/contactTranslate.jsx";

const resources = {
    ru: {
        translation: {
            home: homeTranslations.ru,
            about: aboutTranslations.ru,
            products: productsTranslations.ru,
            contact: contactTranslate.ru,

            navbar: {
                home: "Главная",
                about: "О нас",
                products: "Продукция",
                contact: "Контакты",
            },

            footer:{},
            contacts:"Контакты"
        },
    },
    en: {
        translation: {
            home: homeTranslations.en,
            about: aboutTranslations.en,
            products: productsTranslations.en,
            contact: contactTranslate.en,

            navbar: {
                home: "Home",
                about: "About",
                products: "Products",
                contact: "Contacts",
            },
            footer:{},
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
