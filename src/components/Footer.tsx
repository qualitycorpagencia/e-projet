import { Zap, Mail, Phone, MapPin, Clock, ExternalLink, Linkedin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface FooterProps {
  onOpenLegal: (tab: "privacy" | "cookies") => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const { t, currentView, setCurrentView } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    if (currentView.page === "cases") {
      setCurrentView({ page: "home" });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <footer className="bg-[#050906] text-white pt-20 pb-8 border-t border-gray-900 font-barlow relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-green/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo, Description & Socials */}
          <div className="flex flex-col gap-6 lg:col-span-5 md:col-span-2">
            <div 
              className="w-[500px] max-w-full h-[100px] bg-white rounded-xl overflow-hidden flex items-center justify-start cursor-pointer group transition-transform duration-300 hover:scale-105" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1RbdsK6rFfA41EnOt4U9-8HVtAf8AnqZC" 
                alt="E-Projet Logo" 
                referrerPolicy="no-referrer"
                className="h-full w-auto object-contain object-left"
              />
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-xs text-justify">
              E-Projet — {t.footer.engineeringPower}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-primary-green/20 hover:text-primary-green rounded text-gray-400 transition-all cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-primary-green/20 hover:text-primary-green rounded text-gray-400 transition-all cursor-pointer">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-primary-green/20 hover:text-primary-green rounded text-gray-400 transition-all cursor-pointer">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            
            {/* Logo Rodapé Config URL info */}
            <span className="text-[9px] text-gray-600 font-mono tracking-widest mt-2 uppercase">
              Logo asset: 1RbdsK6rFfA41EnOt4U9-8HVtAf8AnqZC
            </span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-col gap-5 lg:col-span-2 md:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-primary-green pl-3 leading-none">
              {t.footer.sectionsTitle}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-gray-400">
              <button onClick={() => handleScrollTo("sobre")} className="text-left hover:text-primary-green transition-colors cursor-pointer">{t.header.about}</button>
              <button onClick={() => handleScrollTo("servicos")} className="text-left hover:text-primary-green transition-colors cursor-pointer">{t.header.services}</button>
              <button onClick={() => handleScrollTo("diferenciais")} className="text-left hover:text-primary-green transition-colors cursor-pointer">{t.header.differentials}</button>
              <button onClick={() => handleScrollTo("portfolio")} className="text-left hover:text-primary-green transition-colors cursor-pointer">{t.header.portfolio}</button>
              <button onClick={() => handleScrollTo("contato")} className="text-left hover:text-primary-green transition-colors cursor-pointer">{t.header.cta}</button>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-5 lg:col-span-2 md:col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-primary-green pl-3 leading-none">
              {t.header.contact}
            </h4>
            <div className="flex flex-col gap-4 text-xs text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-primary-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-gray-200">{t.contact.infoOffice}</span>
                  <span>{t.contact.infoOfficeDesc}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4.5 h-4.5 text-primary-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-gray-200">{t.contact.infoCall}</span>
                  <span>(16) 3947-4454</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4.5 h-4.5 text-primary-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-gray-200">{t.contact.infoEmail}</span>
                  <span>contato@e-projet.com.br</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4.5 h-4.5 text-primary-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-gray-200">{t.contact.infoHours}</span>
                  <span>{t.contact.infoHoursDays}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stylish Geographic Coverage Card (Responsive Map representation) */}
          <div className="flex flex-col gap-5 lg:col-span-3 md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-primary-green pl-3 leading-none">
              {t.contact.mapTitle}
            </h4>
            
            {/* Visual Vector-Styled Location Badge Card */}
            <div className="bg-light-gray/5 border border-white/10 rounded-lg p-4 relative overflow-hidden flex flex-col gap-3">
              <div className="absolute top-0 right-0 w-12 h-12 bg-primary-green/10 rounded-full blur-lg"></div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-green animate-pulse"></div>
                <span className="text-xs font-semibold text-white">Sertãozinho & Ribeirão Preto</span>
              </div>
              
              <p className="text-[11px] text-gray-400 leading-normal">
                {t.contact.mapDesc}
              </p>

              <a 
                href="https://share.google/o4HvMfL3nt140ja18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-white/5 hover:bg-primary-green hover:text-black py-2 rounded text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>{t.footer.contactBtnRoute}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Base bar info */}
        <div className="pt-8 border-t border-gray-900/80 flex flex-col xl:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-mono tracking-wide">
          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-x-4 gap-y-2">
            <span>&copy; {currentYear} {t.footer.copyright}</span>
            <span className="hidden md:inline text-gray-800">|</span>
            <button 
              onClick={() => onOpenLegal("privacy")} 
              className="hover:text-primary-green transition-colors cursor-pointer text-left font-mono"
            >
              {t.footer.privacy}
            </button>
            <span className="text-gray-800">|</span>
            <button 
              onClick={() => onOpenLegal("cookies")} 
              className="hover:text-primary-green transition-colors cursor-pointer text-left font-mono"
            >
              Política de Cookies
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center xl:justify-end gap-x-4 gap-y-2">
            <span className="hover:text-primary-green transition-colors cursor-default">CNPJ 00.000.000/0001-00</span>
            <span className="hidden md:inline text-gray-800">|</span>
            <span className="hover:text-primary-green transition-colors cursor-default">Sertãozinho • Ribeirão Preto • São Paulo</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
