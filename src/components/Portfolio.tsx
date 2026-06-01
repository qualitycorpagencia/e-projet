import { useState } from "react";
import { PORTFOLIO_DATA } from "../data";
import { PortfolioProject } from "../types";
import { useLanguage } from "../context/LanguageContext";
import { X, Calendar, MapPin, Building, ArrowUpRight, Filter } from "lucide-react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const { t, language, setCurrentView } = useLanguage();

  const categories = [
    { key: "Todos", display: t.portfolio.categories.all },
    { key: "Automação Industrial", display: t.portfolio.categories.automacao },
    { key: "Engenharia Elétrica", display: t.portfolio.categories.eletrica },
    { key: "Projetos Industriais", display: t.portfolio.categories.projetos },
  ];

  const projects = PORTFOLIO_DATA.map((proj) => {
    let trans = t.portfolio.projects.proj1; // default
    let displayCategory = t.portfolio.categories.automacao;

    if (proj.id === "proj-1") {
      trans = t.portfolio.projects.proj1;
      displayCategory = t.portfolio.categories.eletrica;
    } else if (proj.id === "proj-2") {
      trans = t.portfolio.projects.proj2;
      displayCategory = t.portfolio.categories.automacao;
    } else if (proj.id === "proj-3") {
      trans = t.portfolio.projects.proj3;
      displayCategory = t.portfolio.categories.projetos;
    }

    return {
      ...proj,
      title: trans.title,
      description: trans.desc,
      client: trans.client,
      location: trans.location,
      displayCategory,
    };
  });

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(proj => proj.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-industrial-black text-white overflow-hidden font-barlow scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold text-primary-green uppercase tracking-widest block mb-3">
              {t.portfolio.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-space-grotesk uppercase tracking-tight text-white mb-2">
              {t.portfolio.title}
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              {t.portfolio.subtext}
            </p>
          </div>

          {/* Categories / Filter controls */}
          <div className="flex items-center gap-2 flex-wrap bg-light-gray/5 border border-white/10 p-1.5 rounded-lg font-barlow">
            <div className="p-2 text-primary-green hidden lg:block">
              <Filter className="w-4 h-4" />
            </div>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`text-xs uppercase font-semibold tracking-wider px-4 py-2 rounded transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.key
                    ? "bg-primary-green text-black scale-105"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.display}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-[#0f1a10] border border-gray-800/80 rounded overflow-hidden cursor-pointer shadow-lg shadow-black/40 hover:border-primary-green/60 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image with zoom on hover */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Category tag bubble */}
                <span className="absolute top-4 left-4 bg-black/85 backdrop-blur-md text-primary-green text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 border border-primary-green/30 rounded">
                  {project.displayCategory}
                </span>
              </div>

              {/* Text Hover Reveal overlay */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-primary-green shrink-0" />
                  <span>{project.location}</span>
                </div>
                
                <h3 className="text-base md:text-lg font-bold font-space-grotesk uppercase tracking-wide leading-tight text-white mb-3 group-hover:text-primary-green transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary-green uppercase tracking-wider font-mono opacity-80 group-hover:opacity-100 transition-all">
                  <span>{t.portfolio.viewBtn}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state callback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-gray-800 rounded">
            <span className="text-gray-400 text-sm">{t.portfolio.emptyText}</span>
          </div>
        )}

        {/* Modal Overlay for details */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-industrial-black border border-primary-green/45 rounded-lg max-w-2xl w-full text-white shadow-2xl relative overflow-hidden animate-fade-in animate-scale-up font-barlow">
              {/* Header Cover Image */}
              <div className="relative h-60 w-full">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/40 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/80 rounded-full text-gray-400 hover:text-white cursor-pointer hover:border hover:border-primary-green/40 duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Information body content */}
              <div className="p-6 md:p-8">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary-green bg-primary-green/10 px-2 py-1 rounded">
                  {(selectedProject as any).displayCategory || selectedProject.category}
                </span>

                <h3 className="text-3xl font-bold font-space-grotesk uppercase tracking-wide my-4 leading-none text-white">
                  {selectedProject.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Sub Metadata rows Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-800 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded text-primary-green">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-gray-500 font-bold">{t.portfolio.modalClient}</span>
                      <span className="font-semibold text-gray-200">{selectedProject.client}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded text-primary-green">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-gray-500 font-bold">{t.portfolio.modalLoc}</span>
                      <span className="font-semibold text-gray-200">{selectedProject.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded text-primary-green">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-gray-500 font-bold">{t.portfolio.modalYear}</span>
                      <span className="font-semibold text-gray-200">{selectedProject.year}</span>
                    </div>
                  </div>
                </div>

                {/* Confirm contact link inside modal */}
                <div className="mt-8 pt-4 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      const el = document.getElementById("contato");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-3 bg-primary-green hover:bg-primary-dark-green text-black font-bold uppercase tracking-wider text-xs rounded transition-all cursor-pointer"
                  >
                    {t.portfolio.modalCTA}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cases de Sucesso Dedicated Link Banner */}
        <div className="mt-20 border-t border-gray-800/80 pt-16 text-center max-w-4xl mx-auto">
          <div className="bg-[#0b120b] border border-primary-green/30 rounded-lg p-8 sm:p-12 relative overflow-hidden group">
            {/* Ambient decorative layout glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#122413] blur-3xl rounded-full group-hover:bg-primary-green/10 transition-all duration-500"></div>
            
            <span className="text-[10px] font-extrabold text-primary-green uppercase tracking-widest font-mono bg-primary-green/10 px-3 py-1.5 border border-primary-green/15 rounded select-none">
              {language === "en" ? "Technical Deep Dive" : language === "es" ? "Ingeniería en Detalle" : "Dossiê de Engenharia"}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-space-grotesk tracking-wide uppercase mt-6 mb-4 text-white">
              {language === "en" 
                ? "Browse Our Detailed Case Studies" 
                : language === "es" 
                  ? "Explore Nuestros Estudios de Caso Detallados" 
                  : "Explore Nossos Estudos de Caso Detalhados"}
            </h3>

            <p className="text-sm text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              {language === "en"
                ? "Access full documentation, technical scopes, and field results for major industrial plants and power substations engineered across Latin America."
                : language === "es"
                  ? "Acceda a la documentación técnica, alcances suministrados y resultados de campo para grandes plantas industriales y subestaciones eléctricas por toda América Latina."
                  : "Acesse a documentação técnica completa, escopos de fornecimento e resultados de campo para grandes complexos industriais e subestações de energia por toda a América Latina."}
            </p>

            <button
              onClick={() => {
                setCurrentView({ page: "cases" });
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
              className="inline-flex items-center gap-2 bg-primary-green hover:bg-primary-dark-green text-black font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg shadow-primary-green/15"
            >
              <span>
                {language === "en" 
                  ? "View Detailed Engineering Cases" 
                  : language === "es" 
                    ? "Ver Casos de Éxito Detallados" 
                    : "Ver Casos de Sucesso Detalhados"}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
