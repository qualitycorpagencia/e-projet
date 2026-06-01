import { useState } from "react";
import { SERVICES_DATA } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { Cpu, Zap, FileText, Sun, Sliders, Server, Layers, ChevronRight, Check, Activity } from "lucide-react";

const iconMap: Record<string, any> = {
  Cpu,
  Zap,
  FileText,
  Sun,
  Sliders,
  Server,
  Layers,
  Activity,
};

export default function Services() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const { t } = useLanguage();

  const toggleDetails = (id: string) => {
    if (activeCardId === id) {
      setActiveCardId(null);
    } else {
      setActiveCardId(id);
    }
  };

  const services = SERVICES_DATA.map((service) => {
    let trans = t.services.items.automacao; // fallback
    if (service.id === "automacao-industrial") trans = t.services.items.automacao;
    else if (service.id === "engenharia-eletrica") trans = t.services.items.eletrica;
    else if (service.id === "projetos-industriais") trans = t.services.items.projetos;
    else if (service.id === "energia-solar") trans = t.services.items.solar;
    else if (service.id === "paineis-eletricos") trans = t.services.items.paineis;
    else if (service.id === "data-center") trans = t.services.items.datacenter;
    else if (service.id === "infraestrutura-industrial") trans = t.services.items.infra;
    else if (service.id === "instrumentacao-controle") trans = t.services.items.instrumentacao;

    return {
      ...service,
      title: trans.title,
      description: trans.desc,
      details: trans.details,
    };
  });

  return (
    <section id="servicos" className="py-24 bg-white text-gray-900 overflow-hidden font-barlow scroll-mt-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-primary-dark-green uppercase tracking-widest block mb-3">
            {t.services.badge}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-space-grotesk uppercase tracking-tight text-gray-950">
            {t.services.title}
          </h2>
          <div className="w-16 h-1 bg-primary-green mx-auto mt-4"></div>
          <p className="text-gray-600 mt-6 text-base md:text-lg">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Cpu;
            const isExpanded = activeCardId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => toggleDetails(service.id)}
                className={`relative group bg-light-gray border rounded p-6 md:p-8 cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between ${
                  isExpanded
                    ? "border-primary-dark-green bg-white shadow-xl shadow-primary-green/10"
                    : "border-gray-200 hover:border-primary-dark-green/50 hover:bg-white hover:shadow-lg hover:shadow-primary-green/5"
                }`}
              >
                {/* Glow Overlay Effect */}
                <div className="absolute -inset-0.5 rounded bg-primary-green/5 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                <div>
                  {/* Service Image Cover */}
                  {service.imageUrl && (
                    <div className="w-full h-48 rounded-lg overflow-hidden mb-6 relative border border-gray-200 bg-gray-100 shadow-sm">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Subtly darkened bottom overlay for high-contrast presentation */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 via-transparent to-transparent"></div>
                    </div>
                  )}

                  {/* Card Header Content */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-lg border transition-all duration-300 ${
                      isExpanded 
                        ? "bg-primary-green/10 border-primary-dark-green text-primary-dark-green" 
                        : "bg-white border-gray-200 text-gray-500 group-hover:text-primary-dark-green group-hover:border-primary-green/50"
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isExpanded ? "rotate-90 text-primary-dark-green" : "group-hover:translate-x-1"
                    }`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-space-grotesk uppercase tracking-wide text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Expandable Technical Details */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-[300px] opacity-100 mt-4 border-t border-gray-200 pt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <span className="block text-xs font-bold text-primary-dark-green uppercase tracking-widest mb-3 font-mono">
                      {t.services.scopeLabel}
                    </span>
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-gray-700 font-barlow leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-primary-dark-green shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Prompt Label at Bottom */}
                {!isExpanded && (
                  <span className="block text-[11px] text-gray-400 font-mono tracking-wider uppercase group-hover:text-primary-dark-green/80 transition-colors mt-4">
                    {t.services.clickPrompt}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Tech Fact Card */}
        <div className="mt-16 bg-gradient-to-r from-industrial-blue/10 to-transparent border border-industrial-blue/20 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-950">
          <div className="flex items-center gap-4">
            <Zap className="w-10 h-10 text-primary-dark-green shrink-0" />
            <div>
              <h4 className="font-bold text-lg text-gray-900">{t.services.urgencyTitle}</h4>
              <p className="text-sm text-gray-600">{t.services.urgencyText}</p>
            </div>
          </div>
          <button 
            onClick={() => {
              const el = document.getElementById("contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full md:w-auto px-6 py-3 bg-white hover:bg-gray-50 border border-primary-dark-green text-primary-dark-green font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer shadow-sm"
          >
            {t.services.urgencyCTA}
          </button>
        </div>

      </div>
    </section>
  );
}
