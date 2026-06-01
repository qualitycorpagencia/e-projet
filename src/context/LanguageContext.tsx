import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS, Language, TranslationSchema } from "../translations";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  currentView: { page: "home" | "cases"; caseId?: string };
  setCurrentView: (view: { page: "home" | "cases"; caseId?: string }) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<{ page: "home" | "cases"; caseId?: string }>({ page: "home" });
  // Try to load initial language from localStorage, default to 'pt'
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("e_projet_lang");
      if (saved === "pt" || saved === "en" || saved === "es") {
        return saved;
      }
    } catch (e) {
      // Ignored
    }
    return "pt";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("e_projet_lang", lang);
    } catch (e) {
      // Ignored
    }
  };

  // Keep html lang and SEO meta tags in sync with selected language
  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
    
    // Dynamic titles and metadata definitions for high performance indexing
    const titles: Record<Language, string> = {
      pt: "E-Projet — Automação Industrial, Engenharia Elétrica e Painéis TTA/PTTA",
      en: "E-Projet — High-Performance Industrial Automation & Power Electrical Engineering",
      es: "E-Projet — Automatización Industrial de Altoportento e Ingeniería Eléctrica Turnkey"
    };

    const descriptions: Record<Language, string> = {
      pt: "E-Projet Automação e Engenharia: Projetos Elétricos de Potência, Programação de CLPs, Sistemas SCADA, Adequação NR-10/NR-12 e Montagem de Painéis Elétricos de alta qualidade técnica.",
      en: "E-Projet Engineering: Industry-grade Automation, Power Substation design, PLC programming, SCADA development, safety assessments (NR-10/NR-12) and certified TTA/PTTA panels.",
      es: "E-Projet Ingeniería: Automatización industrial, diseño de subestaciones, programación de PLCs, desarrollo SCADA, adecuación legal NR-10/NR-12 y tableros certificados TTA/PTTA."
    };

    document.title = titles[language];

    // Find and update meta description tag
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptions[language]);
    }

    // Find and update Open Graph title tag
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", titles[language]);
    }

    // Find and update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", descriptions[language]);
    }
  }, [language]);

  const value: LanguageContextProps = {
    language,
    setLanguage,
    t: TRANSLATIONS[language],
    currentView,
    setCurrentView,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
