import { DIFFERENTIALS_DATA } from "../data";
import { useLanguage } from "../context/LanguageContext";
import { Award, ShieldCheck, Clock, ShieldAlert } from "lucide-react";

export default function Differentials() {
  const { t } = useLanguage();

  const iconMap: Record<number, any> = {
    0: <Award className="w-8 h-8 text-primary-green" />,
    1: <ShieldCheck className="w-8 h-8 text-primary-green" />,
    2: <Clock className="w-8 h-8 text-primary-green" />,
    3: <ShieldAlert className="w-8 h-8 text-primary-green" />,
  };

  const differentials = DIFFERENTIALS_DATA.map((diff, idx) => {
    let trans = t.differentials.items.projects; // fallback
    if (diff.id === "projetos") trans = t.differentials.items.projects;
    else if (diff.id === "experiencia") trans = t.differentials.items.experience;
    else if (diff.id === "suporte") trans = t.differentials.items.support;
    else if (diff.id === "tecnologia") trans = t.differentials.items.tech;

    return {
      ...diff,
      metric: trans.metric,
      label: trans.label,
      description: trans.desc,
    };
  });

  return (
    <section id="diferenciais" className="py-24 bg-white text-gray-900 overflow-hidden font-barlow scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-dark-green mb-3 block">
              {t.differentials.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-space-grotesk uppercase tracking-tight leading-snug text-gray-950">
              {t.differentials.title}
            </h2>
          </div>
          <div className="lg:col-span-5 text-gray-500 text-sm md:text-base">
            {t.differentials.subtext}
          </div>
        </div>

        {/* Numbers & Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((diff, idx) => {
            const icon = iconMap[idx] || <Award className="w-8 h-8 text-primary-green" />;
            return (
              <div 
                key={diff.id}
                className="bg-light-gray border border-gray-200 hover:border-primary-green/60 p-8 rounded transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual Line at top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-primary-green transition-colors duration-300"></div>

                {/* Metric Icon */}
                <div className="mb-6 bg-white w-14 h-14 rounded border border-gray-100 flex items-center justify-center shadow-sm">
                  {icon}
                </div>

                {/* Metric Big Number */}
                <span className="block text-5xl md:text-6xl font-black font-space-grotesk leading-none tracking-tight text-gray-950 mb-3 group-hover:text-primary-dark-green transition-colors">
                  {diff.metric}
                </span>

                {/* Metric Label */}
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-2 font-barlow">
                  {diff.label}
                </h4>

                {/* Metric Description */}
                <p className="text-xs text-gray-500 leading-normal">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Telemetry Layout (Aesthetic, clean, non-clutter) */}
        <div className="mt-16 bg-[#0f1a10] border border-primary-green/20 rounded p-8 text-white grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-mono tracking-wider text-primary-green uppercase mb-2">{t.differentials.plantStatus}</span>
            <h4 className="text-2xl font-bold font-space-grotesk uppercase tracking-wide">{t.differentials.reliabilityTitle}</h4>
            <p className="text-xs text-gray-400 mt-2">{t.differentials.reliabilityDesc}</p>
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex justify-between items-center text-xs font-mono mb-2 text-gray-300">
              <span>{t.differentials.efficiencyLabel}</span>
              <span className="text-primary-green font-bold">99.8%</span>
            </div>
            <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
              <div className="bg-primary-green h-full rounded-full w-[99.8%] animate-pulse"></div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex justify-between items-center text-xs font-mono mb-2 text-gray-300">
              <span>{t.differentials.complianceLabel}</span>
              <span className="text-primary-green font-bold">100%</span>
            </div>
            <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
              <div className="bg-primary-green h-full rounded-full w-[100%]"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
