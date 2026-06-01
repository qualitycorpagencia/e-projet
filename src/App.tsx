import { useState } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import CasesPage from "./components/CasesPage";
import { LegalModal, CookieConsentBanner } from "./components/LegalModal";

function AppContent() {
  const { currentView } = useLanguage();
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; tab: "privacy" | "cookies" }>({
    isOpen: false,
    tab: "privacy",
  });

  const handleOpenLegal = (tab: "privacy" | "cookies") => {
    setLegalModal({ isOpen: true, tab });
  };

  return (
    <div className="min-h-screen bg-industrial-black text-white relative font-barlow overflow-x-hidden antialiased selection:bg-primary-green selection:text-black">
      {/* Decorative ambient glowing grids */}
      <div className="absolute top-[30vh] left-5 w-40 h-40 bg-primary-green/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-[160vh] right-5 w-60 h-60 bg-secondary-blue/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Main Structural Layout Components */}
      <Header />
      
      {currentView.page === "cases" ? (
        <CasesPage />
      ) : (
        <main>
          <Hero />
          <About />
          <Services />
          <Differentials />
          <Portfolio />
          <ContactForm />
        </main>
      )}

      <Footer onOpenLegal={handleOpenLegal} />

      {/* Floating interactive Widget */}
      <WhatsappButton />

      {/* Legal policies Modal */}
      <LegalModal 
        isOpen={legalModal.isOpen} 
        onClose={() => setLegalModal(prev => ({ ...prev, isOpen: false }))} 
        activeTab={legalModal.tab} 
        setActiveTab={(tab) => setLegalModal({ isOpen: true, tab })} 
      />

      {/* Cookie Consent banner notification */}
      <CookieConsentBanner 
        onOpenPrivacy={() => handleOpenLegal("privacy")} 
        onOpenCookies={() => handleOpenLegal("cookies")} 
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
