import { Shield, Cpu, Zap, Activity, Users, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const coreValues = [
    {
      icon: <Shield className="w-6 h-6 text-primary-green" />,
      title: t.about.coreValues.strictTitle,
      description: t.about.coreValues.strictDesc,
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary-green" />,
      title: t.about.coreValues.techTitle,
      description: t.about.coreValues.techDesc,
    },
    {
      icon: <Activity className="w-6 h-6 text-primary-green" />,
      title: t.about.coreValues.resultTitle,
      description: t.about.coreValues.resultDesc,
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white text-gray-900 overflow-hidden font-barlow scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Showcase (Left Side) */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 w-full rounded bg-industrial-black p-4 shadow-2xl shadow-gray-900/10">
              <img
                src="https://lh3.googleusercontent.com/d/16uCUES1aqNFjIVYciOr51EFgSAUj1RSA"
                alt="Engenharia E-Projet Integrada"
                className="w-full h-auto rounded grayscale hover:grayscale-0 transition-all duration-750"
                referrerPolicy="no-referrer"
              />
              {/* Overlay Stat Card */}
              <div className="absolute -bottom-6 -right-6 bg-primary-green text-black px-6 py-5 rounded-lg shadow-xl shadow-primary-green/20">
                <span className="block text-4xl font-extrabold font-space-grotesk leading-none">{t.about.yearsText}</span>
                <span className="block text-xs uppercase tracking-widest font-bold mt-1">{t.about.yearsLabel}</span>
              </div>
            </div>

            {/* Background design accents */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-primary-green/30 z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-primary-green/30 z-0"></div>
            <div className="absolute top-1/4 right-0 w-24 h-24 bg-secondary-blue/10 rounded-full blur-xl z-0"></div>
          </div>

          {/* Texts (Right Side) */}
          <div className="lg:col-span-7">
            {/* Tagline */}
            <span className="text-xs font-bold uppercase tracking-widest text-industrial-blue block mb-3">
              {t.about.badge}
            </span>
            
            {/* Main Section Header */}
            <h2 className="text-3xl md:text-4xl font-extrabold font-space-grotesk tracking-tight uppercase leading-snug text-gray-950 mb-6">
              {t.about.title}
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t.about.paragraph1}
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              {t.about.paragraph2}
            </p>

            {/* Core Values Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreValues.map((value, idx) => (
                <div 
                  key={idx} 
                  className="bg-light-gray p-6 rounded border border-gray-200 hover:border-primary-green/55 transition-all duration-300 group"
                >
                  <div className="mb-4 duration-300 group-hover:scale-110 inline-block">
                    {value.icon}
                  </div>
                  <h4 className="text-base font-bold uppercase font-barlow text-gray-900 mb-2 leading-tight">
                    {value.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-normal">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Infographic */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary-dark-green uppercase tracking-wider block mb-2">{t.about.processBadge}</span>
            <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk uppercase tracking-tight text-gray-950">{t.about.processTitle}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 hidden md:block -translate-y-4 -z-10"></div>
            
            {[
              { step: "01", title: t.about.steps.title01, desc: t.about.steps.desc01 },
              { step: "02", title: t.about.steps.title02, desc: t.about.steps.desc02 },
              { step: "03", title: t.about.steps.title03, desc: t.about.steps.desc03 },
              { step: "04", title: t.about.steps.title04, desc: t.about.steps.desc04 }
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-6 rounded border border-gray-100 shadow-sm relative text-center">
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-industrial-black text-primary-green font-mono text-sm font-semibold flex items-center justify-center border-2 border-primary-green">
                  {p.step}
                </span>
                <h4 className="font-bold text-gray-900 mt-4 mb-2">{p.title}</h4>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
