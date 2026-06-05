import { useState, useEffect } from "react";
import { Menu, X, Zap, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../translations";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, currentView, setCurrentView } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (currentView.page === "cases") {
      setCurrentView({ page: "home" });
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const topOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - topOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 120);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const topOffset = 80; // height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-200 py-3 md:py-4 shadow-md shadow-gray-200/15"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => {
              if (currentView.page === "cases") {
                setCurrentView({ page: "home" });
                window.scrollTo({ top: 0, behavior: "instant" });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0 lg:mr-4 xl:mr-8"
          >
            <img 
              src="/logo-header.png" 
              alt="E-Projet Logo" 
              referrerPolicy="no-referrer"
              className="h-12 md:h-15 w-auto max-w-[200px] md:max-w-[245px] object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center lg:gap-2.5 xl:gap-5 2xl:gap-8 font-barlow shrink-0">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-[12px] xl:text-[13px] 2xl:text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-primary-dark-green transition-colors cursor-pointer relative py-1 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-green after:transition-all hover:after:w-full"
            >
              {t.header.about}
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-[12px] xl:text-[13px] 2xl:text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-primary-dark-green transition-colors cursor-pointer relative py-1 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-green after:transition-all hover:after:w-full"
            >
              {t.header.services}
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-[12px] xl:text-[13px] 2xl:text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-primary-dark-green transition-colors cursor-pointer relative py-1 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-green after:transition-all hover:after:w-full"
            >
              {t.header.differentials}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-[12px] xl:text-[13px] 2xl:text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-primary-dark-green transition-colors cursor-pointer relative py-1 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-green after:transition-all hover:after:w-full"
            >
              {t.header.portfolio}
            </button>
            <button
              onClick={() => {
                setCurrentView({ page: "cases" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`text-[12px] xl:text-[13px] 2xl:text-sm font-bold uppercase tracking-wider hover:text-primary-dark-green transition-colors cursor-pointer relative py-1 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-green after:transition-all hover:after:w-full ${
                currentView.page === "cases"
                  ? "text-primary-dark-green after:w-full font-bold"
                  : "text-gray-800 after:w-0"
              }`}
            >
              {t.header.cases}
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-[12px] xl:text-[13px] 2xl:text-sm font-bold uppercase tracking-wider text-gray-800 hover:text-primary-dark-green transition-colors cursor-pointer relative py-1 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-green after:transition-all hover:after:w-full"
            >
              {t.header.contact}
            </button>

            {/* Desktop Language Selector (Flag Icons) */}
            <div className="flex items-center gap-1.5 xl:gap-2 border-l border-gray-100 pl-2.5 xl:pl-4 shrink-0">
              <button
                onClick={() => setLanguage("pt")}
                title="Português (BR)"
                className={`w-6 h-6 xl:w-6.5 xl:h-6.5 2xl:w-7 2xl:h-7 rounded-full border-2 overflow-hidden flex items-center justify-center transition-all duration-300 transform cursor-pointer hover:scale-110 active:scale-95 ${
                  language === "pt"
                    ? "border-primary-green ring-2 ring-primary-green/25 scale-105"
                    : "border-gray-200 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src="https://flagcdn.com/br.svg"
                  alt="Português (BR)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
              <button
                onClick={() => setLanguage("en")}
                title="English (US)"
                className={`w-6 h-6 xl:w-6.5 xl:h-6.5 2xl:w-7 2xl:h-7 rounded-full border-2 overflow-hidden flex items-center justify-center transition-all duration-300 transform cursor-pointer hover:scale-110 active:scale-95 ${
                  language === "en"
                    ? "border-primary-green ring-2 ring-primary-green/25 scale-105"
                    : "border-gray-200 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="English (US)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
              <button
                onClick={() => setLanguage("es")}
                title="Español (ES)"
                className={`w-6 h-6 xl:w-6.5 xl:h-6.5 2xl:w-7 2xl:h-7 rounded-full border-2 overflow-hidden flex items-center justify-center transition-all duration-300 transform cursor-pointer hover:scale-110 active:scale-95 ${
                  language === "es"
                    ? "border-primary-green ring-2 ring-primary-green/25 scale-105"
                    : "border-gray-200 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src="https://flagcdn.com/es.svg"
                  alt="Español (ES)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
            </div>

            {/* Desktop CTA Button */}
            <button
              onClick={() => scrollToSection("contato")}
              className="flex items-center gap-1.5 bg-primary-green hover:bg-primary-dark-green text-black font-semibold text-[11px] xl:text-[13px] 2xl:text-sm px-2.5 py-1.5 xl:px-4 xl:py-2.5 rounded transition-all duration-300 transform active:scale-95 cursor-pointer shadow-lg shadow-primary-green/20 shrink-0 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
              <span>{t.header.cta}</span>
            </button>
          </nav>

          {/* Mobile Menu Trigger & Switcher */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Quick Mobile Switcher Flags */}
            <div className="flex items-center gap-1.5 mr-1">
              <button
                onClick={() => setLanguage("pt")}
                className={`w-6.5 h-6.5 rounded-full border-2 overflow-hidden flex items-center justify-center transition-all ${
                  language === "pt" ? "border-primary-green ring-1 ring-primary-green/20" : "border-transparent opacity-50"
                }`}
              >
                <img
                  src="https://flagcdn.com/br.svg"
                  alt="Português (BR)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`w-6.5 h-6.5 rounded-full border-2 overflow-hidden flex items-center justify-center transition-all ${
                  language === "en" ? "border-primary-green ring-1 ring-primary-green/20" : "border-transparent opacity-50"
                }`}
              >
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="English (US)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`w-6.5 h-6.5 rounded-full border-2 overflow-hidden flex items-center justify-center transition-all ${
                  language === "es" ? "border-primary-green ring-1 ring-primary-green/20" : "border-transparent opacity-50"
                }`}
              >
                <img
                  src="https://flagcdn.com/es.svg"
                  alt="Español (ES)"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-primary-dark-green transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white px-4 pt-4 pb-6 absolute top-full left-0 w-full shadow-xl border-b border-gray-200">
          <div className="flex flex-col gap-4 font-barlow">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left text-lg font-medium text-gray-800 hover:text-primary-dark-green py-2 border-b border-gray-100"
            >
              {t.header.taglineMobile}
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-left text-lg font-medium text-gray-800 hover:text-primary-dark-green py-2 border-b border-gray-100"
            >
              {t.header.services}
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-left text-lg font-medium text-gray-800 hover:text-primary-dark-green py-2 border-b border-gray-100"
            >
              {t.header.differentials}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left text-lg font-medium text-gray-800 hover:text-primary-dark-green py-2 border-b border-gray-100"
            >
              {t.header.portfolio}
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setCurrentView({ page: "cases" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`text-left text-lg font-medium py-2 border-b border-gray-100 hover:text-primary-dark-green ${
                currentView.page === "cases" ? "text-primary-dark-green font-semibold" : "text-gray-800"
              }`}
            >
              {t.header.cases}
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-left text-lg font-medium text-gray-800 hover:text-primary-dark-green py-2 border-b border-gray-100"
            >
              {t.header.contact}
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="flex items-center justify-center gap-2 bg-primary-green hover:bg-primary-dark-green text-black font-semibold text-base py-3 rounded mt-2 transition-all cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>{t.header.cta}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
