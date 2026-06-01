import { useState, useMemo, useEffect } from "react";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Building, 
  CheckCircle, 
  ChevronRight, 
  Search, 
  Info,
  Shield,
  Activity,
  Zap,
  Cpu,
  FileText
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CASES_DATA, CaseStudy } from "../data/cases";
import { motion, AnimatePresence } from "motion/react";

export default function CasesPage() {
  const { language, setCurrentView } = useLanguage();
  const cases = CASES_DATA[language] || CASES_DATA.pt;

  const [activeTab, setActiveTab] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCaseId, setSelectedCaseId] = useState<string>("case-1");

  // Reset selected case when tab or search shifts, if the previous selected isn't in filtered list
  const filteredCases = useMemo(() => {
    return cases.filter((item) => {
      const matchTab = activeTab === "Todos" || item.category === activeTab;
      const matchSearch = searchQuery === "" || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.client && item.client.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchTab && matchSearch;
    });
  }, [cases, activeTab, searchQuery]);

  // Handle defaulting when filtered collection updates
  useEffect(() => {
    if (filteredCases.length > 0) {
      const foundCurrent = filteredCases.some(c => c.id === selectedCaseId);
      if (!foundCurrent) {
        setSelectedCaseId(filteredCases[0].id);
      }
    }
  }, [filteredCases, selectedCaseId]);

  const selectedCase = useMemo(() => {
    return cases.find(c => c.id === selectedCaseId) || cases[0];
  }, [cases, selectedCaseId]);

  // Labels based on language
  const labels = {
    pt: {
      title: "Casos de Sucesso",
      subtitle: "Estudos de engenharia multidisciplinar aplicada e comissionamento de grande porte.",
      buttonBack: "Voltar para Início",
      searchPlaceholder: "Buscar por localização, cliente ou desafio...",
      challengesTitle: "O Desafio",
      solutionTitle: "A Solução e Escopo Fornecido",
      resultTitle: "O Resultado",
      badgeLocation: "Localização",
      badgeClient: "Cliente",
      badgeYear: "Ano",
      badgeStatus: "Status",
      noResults: "Nenhum estudo de caso encontrado.",
      filtersTitle: "Especialidades",
    },
    en: {
      title: "Success Case Studies",
      subtitle: "Applied multidisciplinary engineering research and heavy-duty field startup operations.",
      buttonBack: "Back to Home",
      searchPlaceholder: "Search by location, client, or challenge details...",
      challengesTitle: "The Challenge",
      solutionTitle: "Solution & Supplied Scope",
      resultTitle: "The Result",
      badgeLocation: "Location",
      badgeClient: "Client",
      badgeYear: "Year",
      badgeStatus: "Status",
      noResults: "No case studies found.",
      filtersTitle: "Specialties",
    },
    es: {
      title: "Casos de Éxito",
      subtitle: "Estudios avanzados de ingeniería multidisciplinaria y puesta en marcha de gran porte.",
      buttonBack: "Volver al Inicio",
      searchPlaceholder: "Buscar por ubicación, cliente o detalles del desafío...",
      challengesTitle: "El Desafío",
      solutionTitle: "Solución y Alcance Suministrado",
      resultTitle: "El Resultado",
      badgeLocation: "Ubicación",
      badgeClient: "Cliente",
      badgeYear: "Año",
      badgeStatus: "Estado",
      noResults: "No se encontraron casos de éxito.",
      filtersTitle: "Especialidades",
    }
  }[language] || {
    title: "Casos de Sucesso",
    subtitle: "Estudos de engenharia de grande porte aplicados e comissionados.",
    buttonBack: "Voltar para Início",
    searchPlaceholder: "Buscar estudo...",
    challengesTitle: "O Desafio",
    solutionTitle: "A Solução e Escopo Fornecido",
    resultTitle: "O Resultado",
    badgeLocation: "Localização",
    badgeClient: "Cliente",
    badgeYear: "Ano",
    badgeStatus: "Status",
    noResults: "Nenhum encontrado.",
    filtersTitle: "Especialidades",
  };

  const categories = [
    "Todos",
    "Automação Industrial",
    "Engenharia Elétrica",
    "Painéis Elétricos",
    "Projetos Industriais"
  ];

  const handleBackToHome = () => {
    setCurrentView({ page: "home" });
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="min-h-screen bg-[#edf3ee] text-[#080e0a] font-barlow pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 border-b border-zinc-200 pb-8">
          <button
            onClick={handleBackToHome}
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-primary-dark-green transition-all uppercase tracking-wider font-semibold group w-fit cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{labels.buttonBack}</span>
          </button>
          
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-space-grotesk tracking-tight uppercase text-zinc-900">
              {labels.title}
            </h1>
            <p className="text-zinc-600 text-sm md:text-base mt-2 max-w-2xl">
              {labels.subtitle}
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-10 bg-white border border-zinc-250/20 p-4 rounded-lg shadow-sm">
          
          {/* Categories select elements */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setSearchQuery("");
                }}
                className={`text-xs uppercase font-semibold tracking-wider px-4 py-2.5 rounded transition-all cursor-pointer ${
                  activeTab === cat
                    ? "bg-primary-dark-green text-white scale-105 shadow-sm"
                    : "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 bg-white border border-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar widget */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 pointer-events-none">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={labels.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-primary-dark-green transition-all font-mono"
            />
          </div>
        </div>

        {/* Catalog layout */}
        {filteredCases.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-zinc-300 rounded-lg bg-white shadow-sm">
            <p className="text-zinc-500 text-sm">{labels.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column list (5 columns on desktop) */}
            <div className="lg:col-span-5 space-y-4 max-h-[82vh] overflow-y-auto pr-2 custom-scrollbar">
              {filteredCases.map((item) => {
                const isActive = item.id === selectedCaseId;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedCaseId(item.id)}
                    className={`p-5 rounded border transition-all duration-300 cursor-pointer relative group text-left ${
                      isActive 
                        ? "bg-white border-primary-dark-green shadow-md shadow-primary-dark-green/5"
                        : "bg-white border-zinc-200/80 hover:border-primary-dark-green/40 hover:bg-zinc-50/50"
                    }`}
                  >
                    {/* Active highlight side line */}
                    {isActive && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary-dark-green" />
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-primary-dark-green uppercase tracking-wider font-mono">
                        {item.badge}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-extrabold bg-zinc-100 border border-zinc-200 text-zinc-650 px-2.5 py-0.5 rounded">
                        {item.category}
                      </span>
                    </div>

                    <h3 className={`text-base font-bold font-space-grotesk tracking-wide mb-2 transition-colors ${
                      isActive ? "text-primary-dark-green font-bold" : "text-zinc-900 group-hover:text-primary-dark-green"
                    }`}>
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2.5 text-xs text-zinc-500 mt-1.5 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-primary-dark-green shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column immersive details (7 columns on desktop) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCase.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-zinc-200 rounded-lg overflow-hidden shadow-xl shadow-industrial-black/15 relative text-left"
                >
                  
                  {/* Hero Header Cover image */}
                  <div className="relative h-64 md:h-80 w-full overflow-hidden">
                    <img
                      src={selectedCase.imageUrl}
                      alt={selectedCase.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-black/80 via-industrial-black/10 to-transparent"></div>
                    
                    {/* Floating state badge */}
                    <div className="absolute bottom-4 left-6 flex items-center gap-2 bg-zinc-950/90 border border-primary-dark-green/35 px-3.5 py-1.5 rounded text-[11px] font-bold text-primary-green font-mono tracking-wide uppercase shadow-sm">
                      <Shield className="w-3.5 h-3.5 text-primary-green" />
                      <span>{selectedCase.badge}</span>
                    </div>
                  </div>

                  {/* Body Content Sheet */}
                  <div className="p-6 md:p-8">
                    
                    {/* Localized tags line */}
                    <div className="flex flex-wrap gap-2.5 mb-5 select-none">
                      <span className="text-[10px] font-extrabold text-primary-dark-green uppercase bg-[#2ca814]/10 px-3 py-1 rounded tracking-widest border border-primary-dark-green/15">
                        {selectedCase.category}
                      </span>
                      {selectedCase.year && (
                        <span className="text-[10px] font-extrabold text-zinc-600 uppercase bg-zinc-100 border border-zinc-200 px-3 py-1 rounded tracking-widest">
                          {selectedCase.year}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl md:text-3.5xl font-extrabold font-space-grotesk tracking-tight uppercase leading-tight text-zinc-900 mb-6 font-bold">
                      {selectedCase.title}
                    </h2>

                    {/* Meta Specifications Table Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-zinc-50 border border-zinc-200 rounded-lg p-4 mb-8 font-mono text-xs">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-primary-dark-green shrink-0" />
                        <div>
                          <span className="block text-[10px] uppercase text-zinc-400 font-bold">{labels.badgeLocation}</span>
                          <span className="text-zinc-700 font-medium">{selectedCase.location}</span>
                        </div>
                      </div>

                      {selectedCase.client && (
                        <div className="flex items-center gap-3">
                          <Building className="w-4 h-4 text-primary-dark-green shrink-0" />
                          <div>
                            <span className="block text-[10px] uppercase text-zinc-400 font-bold">{labels.badgeClient}</span>
                            <span className="text-zinc-700 font-medium">{selectedCase.client}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-3 sm:col-span-2 border-t border-zinc-200 pt-3 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary-dark-green shrink-0" />
                        <div>
                          <span className="block text-[10px] uppercase text-zinc-400 font-bold">{labels.badgeStatus}</span>
                          <span className="text-primary-dark-green font-medium">{selectedCase.status}</span>
                        </div>
                      </div>
                    </div>

                    {/* Section: Challenge */}
                    <div className="mb-8">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary-dark-green font-mono border-b border-zinc-100 pb-2 mb-3.5 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-primary-dark-green" />
                        <span>{labels.challengesTitle}</span>
                      </h4>
                      <p className="text-zinc-700 text-sm leading-relaxed font-sans">
                        {selectedCase.challenge}
                      </p>
                    </div>

                    {/* Section: Solution */}
                    <div className="mb-8">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary-dark-green font-mono border-b border-zinc-100 pb-2 mb-3.5 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-primary-dark-green" />
                        <span>{labels.solutionTitle}</span>
                      </h4>
                      <p className="text-zinc-700 text-sm leading-relaxed font-sans mb-4">
                        {selectedCase.solutionIntro}
                      </p>
                      <ul className="space-y-3 font-sans text-sm text-zinc-700 mt-2">
                        {selectedCase.solutionDetails.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-primary-dark-green mt-1 shrink-0 font-bold">✓</span>
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Section: Result */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-primary-dark-green font-mono border-b border-zinc-100 pb-2 mb-3.5 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary-dark-green" />
                        <span>{labels.resultTitle}</span>
                      </h4>
                      <div className="bg-primary-dark-green/5 border border-primary-dark-green/20 border-l-4 border-l-primary-dark-green rounded p-4 text-zinc-700 text-sm leading-relaxed font-sans">
                        {selectedCase.result}
                      </div>
                    </div>

                    {/* Bottom CTA block */}
                    <div className="mt-10 pt-6 border-t border-zinc-200 flex justify-end">
                      <button
                        onClick={() => {
                          setCurrentView({ page: "home" });
                          setTimeout(() => {
                            const el = document.getElementById("contato");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        className="px-6 py-3 bg-primary-dark-green hover:bg-zinc-800 hover:text-white text-white font-semibold uppercase tracking-wider text-xs rounded transition-all cursor-pointer shadow-md shadow-primary-dark-green/15 active:scale-95"
                      >
                        Falar Com Engenheiro Responsável
                      </button>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
