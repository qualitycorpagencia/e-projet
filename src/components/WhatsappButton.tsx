import { useState, useEffect } from "react";
import { Phone, MessageSquare, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function WhatsappButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Show tool tip notification automatically after 4 seconds to catch attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/5516994347777?text=${encodeURIComponent(t.whatsapp.messageText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 font-barlow">
      
      {/* Dynamic Notification Message Tooltip */}
      {showTooltip && (
        <div className="bg-white text-gray-900 border border-gray-100 rounded-lg py-3 px-4 shadow-2xl relative max-w-xs animate-fade-in flex items-start gap-2.5">
          {/* Close trigger button */}
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-gray-400 hover:text-gray-600 rounded-full cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
 
          <div className="p-1.5 bg-[#25d366]/10 rounded text-[#25d366] shrink-0 mt-0.5">
            <MessageSquare className="w-4 h-4" />
          </div>

          <div className="pr-3">
            <span className="block text-xs font-bold text-gray-900">{t.whatsapp.tooltipTitle}</span>
            <span className="block text-[11px] text-gray-500 leading-normal mt-0.5">
              {t.whatsapp.tooltipDesc}
            </span>
          </div>

          {/* Map point Arrow */}
          <div className="absolute right-5 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45"></div>
        </div>
      )}

      {/* Primary Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25d366] hover:bg-[#1ebd5d] text-white rounded-full shadow-2xl shadow-[#25d366]/40 transition-all duration-300 transform hover:scale-110 active:scale-90 group cursor-pointer"
      >
        {/* Glow pulsing ring around the button */}
        <span className="absolute -inset-1 rounded-full bg-[#25d366] opacity-30 animate-ping z-0 group-hover:opacity-0 transition-opacity"></span>
        
        <Phone className="w-6 h-6 relative z-10 animate-[bounce_3s_infinite]" />
      </a>
    </div>
  );
}
