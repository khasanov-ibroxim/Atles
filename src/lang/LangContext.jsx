import { createContext, useContext, useState } from "react";
import i18n from "../lang/i18n";
import { languages } from "./langs";

const LangContext = createContext();

const LanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        const initialLanguageKey =
            localStorage.getItem("selectedLanguage") || languages[0].key;
        return languages.find((lang) => lang.key === initialLanguageKey);
    });

    const handleLanguageChange = (value) => {
        const newLanguage = languages.find((lang) => lang.key === value.key);
        if (newLanguage) {
            setSelectedLanguage(newLanguage);
            i18n.changeLanguage(newLanguage.code);
            localStorage.setItem("selectedLanguage", newLanguage.key);
        } else {
            console.error("Language not found for key:", value.key);
        }
    };

    return (
        <LangContext.Provider
            value={{
                selectedLanguage,
                handleLanguageChange,
            }}
        >
            {children}
        </LangContext.Provider>
    );
};

function useLanguage() {
    const context = useContext(LangContext);

    if (context === undefined) {
        throw new Error("Language context was used outside of LangProvider");
    }

    return context;
}

export { LanguageProvider, useLanguage };
