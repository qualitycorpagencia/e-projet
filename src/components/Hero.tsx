import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
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
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-industrial-black text-white pt-24 overflow-hidden">
      {/* Background with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="E-Projet Automação Industrial Plant"
          className="w-full h-full object-cover object-center md:object-right transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Gradients: Strong high-contrast dark mask on the left, easing into transparency on the right to keep image clean */}
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-black via-industrial-black/95 to-transparent md:via-industrial-black/75 lg:via-industrial-black/55 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-transparent to-transparent opacity-90 z-0"></div>
      </div>

      {/* Tech Grid Pattern (Aesthetic Touch) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,26,16,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(15,26,16,0.15)_1px,transparent_1px)] bg-[size:40px_40px] z-1"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-green/10 border border-primary-green/30 rounded-full text-xs font-semibold text-primary-green tracking-wider uppercase mb-6 font-barlow animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-space-grotesk tracking-tight uppercase leading-tight text-white mb-6 animate-fade-in">
            {t.hero.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green via-primary-green to-secondary-blue">
              {t.hero.titleLine2}
            </span>{" "}
            {t.hero.titleLine3} <br />
            <span className="text-white border-b-4 border-primary-green">{t.hero.titleHighlight}</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 font-barlow text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            {t.hero.subtext}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("contato")}
              className="group flex items-center justify-center gap-3 bg-primary-green hover:bg-primary-dark-green text-black font-bold font-barlow uppercase tracking-wider text-sm px-8 py-4 rounded transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg shadow-primary-green/20"
            >
              <span>{t.hero.ctaRequest}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-gray-600 hover:border-primary-green font-bold font-barlow uppercase tracking-wider text-sm px-8 py-4 rounded transition-all duration-300 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-primary-green" />
              <span>{t.hero.ctaServices}</span>
            </button>
          </div>
        </div>

        {/* Quick Regional Coverage Status Bar (SEO local optimized) */}
        <div className="mt-20 pt-8 border-t border-gray-800/60 flex flex-wrap gap-x-12 gap-y-4 text-xs font-barlow text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-green animate-ping"></span>
            <span>{t.hero.coverageTitle}</span>
          </div>
          <div className="hover:text-primary-green transition-colors cursor-default">
            {t.hero.locationSertaozinho}
          </div>
          <div className="hover:text-primary-green transition-colors cursor-default">
            {t.hero.locationRibeirao}
          </div>
          <div className="hover:text-primary-green transition-colors cursor-default">
            {t.hero.locationSaoPaulo}
          </div>
        </div>
      </div>
    </section>
  );
}
