import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {LanguageProvider} from "./lang/LangContext.jsx";
import {HelmetProvider} from "react-helmet-async";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
    <LanguageProvider>
        <HelmetProvider>
            <App/>
        </HelmetProvider>
    </LanguageProvider>
)
