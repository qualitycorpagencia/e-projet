import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Shield, Cookie, FileText, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "privacy" | "cookies";
  setActiveTab: (tab: "privacy" | "cookies") => void;
}

export function LegalModal({ isOpen, onClose, activeTab, setActiveTab }: LegalModalProps) {
  const { language } = useLanguage();

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Translatable texts for the modal tabs and titles
  const content = {
    pt: {
      title: "Políticas Legais & Conformidade",
      privacyTab: "Política de Privacidade",
      cookiesTab: "Política de Cookies",
      closeBtn: "Fechar",
      lastUpdated: "Última atualização: 01 de Junho de 2026",
      
      privacy: {
        introTitle: "1. Compromisso com a Privacidade",
        introText: "Na E-Projet Sistemas de Automação Ltda., a privacidade e a segurança dos dados de nossos clientes, parceiros e visitantes são tratadas com o mais alto rigor técnico e jurídico. Desenvolvemos esta política em total conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/18) e com o Regulamento Geral sobre a Proteção de Dados (GDPR) da União Europeia, garantindo transparência impecável na coleta e tratamento de dados.",
        
        collectTitle: "2. Dados que Coletamos",
        collectText: "Ao interagir com nosso ecossistema industrial digital, podemos coletar:",
        collectItem1: "Dados Identificadores Voluntários: Nome, e-mail corporativo, telefone e nome da sua indústria, fornecidos espontaneamente através do nosso canal oficial de atendimento e formulário técnico.",
        collectItem2: "Dados de Logística Digital: Endereço IP, dados de geolocalização aproximada do acesso, tipo de dispositivo, navegador de internet e registros cronológicos de interação.",
        
        purposeTitle: "3. Finalidade do Tratamento",
        purposeText: "Todos os dados coletados possuem finalidades intrinsecamente ligadas ao fornecimento dos nossos serviços de engenharia:",
        purposeItem1: "Elaboração de diagnósticos técnicos e cotações de projetos elétricos, sistemas de automação de processos e adequações (NR-10 / NR-12).",
        purposeItem2: "Atendimento de suporte preventivo ou de emergência operacional.",
        purposeItem3: "Otimização de tráfego, garantindo que o portal de engenharia carregue de forma ágil e otimizada.",
        
        retentionTitle: "4. Retenção e Segurança",
        retentionText: "Retemos as informações coletadas apenas pelo tempo estritamente necessário para cumprir com as propostas comerciais abertas ou obrigações regulatórias. Aplicamos rígidos padrões de segurança digital (criptografia de ponta, firewalls e controle rigoroso de acesso lógico) para impedir perda, roubo, vazamentos ou acessos não autorizados.",
        
        rightsTitle: "5. Seus Direitos (LGPD/GDPR)",
        rightsText: "Como titular dos dados, você possui pleno direito legal de solicitar:",
        rightsItem1: "Confirmação e acesso rápido aos seus dados armazenados.",
        rightsItem2: "Correção de dados inválidos, incompletos ou desatualizados.",
        rightsItem3: "Revogação imediata de consentimento de uso e eliminação completa da base de dados.",
        rightsItem4: "Contato oficial de Encarregado de Proteção de Dados pelo canal: contato@e-projet.com.br"
      },
      cookies: {
        introTitle: "1. O que são Cookies?",
        introText: "Cookies são pequenos arquivos alfanuméricos transmitidos e gravados no seu dispositivo físico quando você acessa nosso ambiente digital. Eles servem de base para que o site funcione de forma integrada e para fornecer dados úteis sobre o comportamento de navegação, permitindo uma navegação personalizada e de alta performance.",
        
        typesTitle: "2. Tipos de Cookies que Utilizamos",
        typesText: "Nosso site emprega de forma limitada os seguintes cookies:",
        typesItem1: "Cookies Essenciais e Técnicos: Indispensáveis para que o site atue corretamente. Eles gravam dados cruciais como preferências de idioma (Português, Inglês ou Espanhol) e dados de requisição sem identificar dados pessoais permanentes.",
        typesItem2: "Cookies de Análise de Performance (Ex: Google Analytics): Coletam estatísticas de tráfego anonimizadas para avaliarmos quais seções (como Portfólio ou Serviços) são mais acessadas, nos permitindo programar melhorias estruturais no site.",
        
        controlTitle: "3. Como Gerenciar Seus Cookies",
        controlText: "Você possui autonomia completa para rejeitar, bloquear ou remover cookies instalados em seu dispositivo a qualquer momento. Você pode ajustar essas preferências diretamente nas configurações internas do navegador da internet que estiver utilizando (Chrome, Edge, Firefox, Safari ou outros). Lembre-se, porém, que desativar cookies cruciais pode mitigar de forma parcial a funcionalidade e o carregamento imediato deste e de outros portais na web."
      }
    },
    en: {
      title: "Legal Policies & Compliance",
      privacyTab: "Privacy Policy",
      cookiesTab: "Cookie Policy",
      closeBtn: "Close",
      lastUpdated: "Last updated: June 01, 2026",
      
      privacy: {
        introTitle: "1. Our Committment to Privacy",
        introText: "At E-Projet Sistemas de Automação Ltda., the privacy and security of our clients', partners', and visitors' data are treated with the highest technical and legal standards. We have formulated this policy in complete harmony with the Brazilian General Data Protection Law (LGPD - Law No. 13.709/18) and the General Data Protection Regulation (GDPR) of the European Union, ensuring absolute transparency in how data is collected and processed.",
        
        collectTitle: "2. Collected Data",
        collectText: "When interacting with our digital industrial platform, we may capture:",
        collectItem1: "Voluntarily Shared Data: Full name, business email, telephone number, and the name of your industry, freely submitted via our official technical form.",
        collectItem2: "Digital Logistics Data: IP Address, approximate location metrics, browser types, hardware device profiles, and interaction timestamps.",
        
        purposeTitle: "3. Scope of Processing",
        purposeText: "Any gathered information is utilized exclusively for core industrial engineering goals:",
        purposeItem1: "Crafting technical diagnoses and pricing proposals for complex electrical, automation, or safety (NR-10 / NR-12) projects.",
        purposeItem2: "Coordinating preventive technical standbys or emergency operational assistance.",
        purposeItem3: "Optimizing bandwidth and web loads to make our server response extremely rapid for you.",
        
        retentionTitle: "4. Storage and Data Security",
        retentionText: "We keep your details stored only as long as required to process continuous commercial requests or regulatory compliance. We implement high-grade server firewalls, end-to-end encryption, and rigorous access control vectors to protect against leakage, unauthorized modifications, or logic theft.",
        
        rightsTitle: "5. Your Data Rights",
        rightsText: "In strict accordance with privacy legislations, you can demand:",
        rightsItem1: "Instant confirmation and access to your personal files.",
        rightsItem2: "Prompt corrections of outdated, skewed, or incomplete data records.",
        rightsItem3: "Full revocation of consent and final wipe of your personal logs from our secure database.",
        rightsItem4: "Official data protection contact: contato@e-projet.com.br"
      },
      cookies: {
        introTitle: "1. What are Cookies?",
        introText: "Cookies are small alphanumeric data packets saved on your physical storage device when you load our online framework. They serve to streamline performance, log your operational preferences, and furnish helpful traffic analytics, aiding in high-performance digital load operations.",
        
        typesTitle: "2. Types of Cookies We Deploy",
        typesText: "Our web portal uses the following types of digital cookies:",
        typesItem1: "Essential & Structural Cookies: Critical for vital web navigation. They persist choices such as your selected language (Portuguese, English, or Spanish) and layout variables without saving permanent raw personal records.",
        typesItem2: "Analytical & Performance Cookies (e.g., Google Analytics): Gather completely anonymous interaction logs to track which sections (like Portfolio or Services) capture interest, letting us continuously polish our platform.",
        
        controlTitle: "3. Controlling Cookie Settings",
        controlText: "You hold the final decision to reject, disable, or cleanse cookies from your browser history. You can adjust your cookie block lists inside your specific web program settings (Chrome, Edge, Firefox, Safari, etc.). Note that restricting crucial framework cookies may result in slight performance degradations across various website navigations."
      }
    },
    es: {
      title: "Políticas Legales y Cumplimiento",
      privacyTab: "Política de Privacidad",
      cookiesTab: "Política de Cookies",
      closeBtn: "Cerrar",
      lastUpdated: "Última actualización: 01 de junio de 2026",
      
      privacy: {
        introTitle: "1. Compromiso con la Privacidad",
        introText: "En E-Projet Sistemas de Automação Ltda., la privacidad y la seguridad de los datos de nuestros clientes, socios y visitantes son tratadas con el más estricto rigor técnico y jurídico. Desarrollamos esta política de total conformidad con la Ley General de Protección de Datos Personales de Brasil (LGPD - Ley nº 13.709/18) y el Reglamento General de Protección de Datos (GDPR) de la Unión Europea, garantizando una transparencia impecable.",
        
        collectTitle: "2. Datos que Recopilamos",
        collectText: "Al interactuar con nuestro portal industrial digital, podemos recopilar:",
        collectItem1: "Datos Identificadores Voluntarios: Nombre completo, correo electrónico corporativo, teléfono de contacto y nombre de su empresa, provistos libremente en nuestros formularios.",
        collectItem2: "Datos de Navegación Tecnológica: Dirección IP, geolocalización aproximada, navegador, sistema operativo y registros cronológicos de navegación.",
        
        purposeTitle: "3. Finalidad del Tratamiento",
        purposeText: "Todos los datos se utilizan exclusivamente para los fines de nuestra actividad de ingeniería:",
        purposeItem1: "Elaboración de laudos técnicos, cotizaciones de proyectos eléctricos, automatización industrial compleja y adecuaciones de seguridad normativa (NR-10 / NR-12).",
        purposeItem2: "Soporte preventivo y atención de llamadas técnicas de emergencia.",
        purposeItem3: "Optimización de la plataforma para asegurar velocidades de carga de alto nivel.",
        
        retentionTitle: "4. Retención y Seguridad de Datos",
        retentionText: "Retenemos los registros únicamente durante el tiempo necesario para responder las solicitudes comerciales u obligaciones legales. Aplicamos rígidos estándares de seguridad electrónica (cifrado de extremo a extremo y cortafuegos) para evitar accesos no autorizados o pérdida de información.",
        
        rightsTitle: "5. Sus Derechos de Privacidad",
        rightsText: "Usted, como titular legítimo de los datos, puede solicitar en cualquier momento:",
        rightsItem1: "Confirmación del tratamiento y acceso inmediato a sus registros.",
        rightsItem2: "Corrección o actualización de algún dato parcial o incorrecto.",
        rightsItem3: "Revocación inmediata del consentimiento de almacenamiento y borrado permanente de nuestra base de datos.",
        rightsItem4: "Contacto de protección de de datos: contato@e-projet.com.br"
      },
      cookies: {
        introTitle: "1. ¿Qué son las Cookies?",
        introText: "Las cookies son pequeños archivos de texto que se instalan de forma lógica en su dispositivo al cargar nuestro portal digital. Permiten registrar parámetros útiles sobre el uso técnico, facilitando una experiencia fluida, rápida y totalmente adaptada a su idioma de preferencia.",
        
        typesTitle: "2. Tipos de Cookies que Empleamos",
        typesText: "Utilizamos las siguientes clasificaciones de cookies de manera limitada:",
        typesItem1: "Cookies Esenciales e Instrumentales: Indispensables para la operatividad del sitio web. Guardan preferencias inmediatas como el idioma seleccionado (Portugués, Inglés, Español) y estados de navegación temporales.",
        typesItem2: "Cookies de Rendimiento y Análisis (Ej. Google Analytics): Registran de forma totalmente anónima la forma en que los visitantes interactúan con el portal de ingeniería, con el fin de optimizar las secciones técnicas.",
        
        controlTitle: "3. Gestión y Configuración de Cookies",
        controlText: "Usted tiene la plena libertad de bloquear, inhabilitar o suprimir las cookies de su navegador. Puede modificar estas configuraciones ingresando al menú de privacidad de su navegador de internet (Chrome, Edge, Firefox, Safari u otros). Considere que bloquear ciertos tipos esenciales de cookies colectivas puede alterar temporalmente el rendimiento de esta plataforma digital."
      }
    }
  };

  const t = content[language === "es" ? "es" : language === "en" ? "en" : "pt"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8">
          
          {/* Backdrop Blur Overlays */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-[#090f0b] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white z-10"
          >
            {/* Glowing effect at the top */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary-green to-transparent"></div>
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <div className="flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-primary-green" />
                <h3 className="font-montserrat font-bold text-base sm:text-lg uppercase tracking-wider text-white">
                  {t.title}
                </h3>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-gray-450 hover:text-primary-green bg-white/5 hover:bg-white/10 rounded-lg transition-all"
                aria-label={t.closeBtn}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs Selector Navigation */}
            <div className="flex border-b border-white/5 bg-[#050906]/80 px-6">
              <button 
                onClick={() => setActiveTab("privacy")}
                className={`relative py-4 px-4 font-montserrat font-bold text-xs uppercase tracking-widest transition-colors ${
                  activeTab === "privacy" ? "text-primary-green" : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" />
                  {t.privacyTab}
                </span>
                {activeTab === "privacy" && (
                  <motion.div 
                    layoutId="activeLegalTabLine"
                    className="absolute bottom-0 inset-x-4 h-0.5 bg-primary-green"
                  />
                )}
              </button>

              <button 
                onClick={() => setActiveTab("cookies")}
                className={`relative py-4 px-4 font-montserrat font-bold text-xs uppercase tracking-widest transition-colors ${
                  activeTab === "cookies" ? "text-primary-green" : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Cookie className="w-3.5 h-3.5" />
                  {t.cookiesTab}
                </span>
                {activeTab === "cookies" && (
                  <motion.div 
                    layoutId="activeLegalTabLine"
                    className="absolute bottom-0 inset-x-4 h-0.5 bg-primary-green"
                  />
                )}
              </button>
            </div>

            {/* Scrollable Document Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-thumb-primary-green scrollbar-track-transparent">
              <div className="text-[10px] text-gray-500 font-mono mb-6 uppercase tracking-wider">
                {t.lastUpdated}
              </div>

              {activeTab === "privacy" ? (
                /* PRIVACY POLICY CONTENT */
                <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-barlow text-justify">
                  <section className="space-y-2">
                    <h4 className="font-montserrat font-bold text-white text-base text-left border-l-2 border-primary-green pl-3">
                      {t.privacy.introTitle}
                    </h4>
                    <p>{t.privacy.introText}</p>
                  </section>

                  <section className="space-y-3">
                    <h4 className="font-montserrat font-bold text-white text-base text-left border-l-2 border-primary-green pl-3">
                      {t.privacy.collectTitle}
                    </h4>
                    <p>{t.privacy.collectText}</p>
                    <ul className="space-y-2.5 pl-2 mt-2">
                      <li className="flex items-start gap-2 text-left">
                        <Check className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                        <span>{t.privacy.collectItem1}</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <Check className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                        <span>{t.privacy.collectItem2}</span>
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h4 className="font-montserrat font-bold text-white text-base text-left border-l-2 border-primary-green pl-3">
                      {t.privacy.purposeTitle}
                    </h4>
                    <p>{t.privacy.purposeText}</p>
                    <ul className="space-y-2.5 pl-2 mt-2">
                      <li className="flex items-start gap-2 text-left">
                        <Check className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                        <span>{t.privacy.purposeItem1}</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <Check className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                        <span>{t.privacy.purposeItem2}</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <Check className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                        <span>{t.privacy.purposeItem3}</span>
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-2">
                    <h4 className="font-montserrat font-bold text-white text-base text-left border-l-2 border-primary-green pl-3">
                      {t.privacy.retentionTitle}
                    </h4>
                    <p>{t.privacy.retentionText}</p>
                  </section>

                  <section className="space-y-3">
                    <h4 className="font-montserrat font-bold text-white text-base text-left border-l-2 border-primary-green pl-3">
                      {t.privacy.rightsTitle}
                    </h4>
                    <p>{t.privacy.rightsText}</p>
                    <ul className="space-y-2.5 pl-2 mt-2">
                      <li className="flex items-start gap-2 text-left">
                        <Check className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                        <span>{t.privacy.rightsItem1}</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <Check className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                        <span>{t.privacy.rightsItem2}</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <Check className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                        <span>{t.privacy.rightsItem3}</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <Check className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                        <span className="font-semibold text-white">{t.privacy.rightsItem4}</span>
                      </li>
                    </ul>
                  </section>
                </div>
              ) : (
                /* COOKIE POLICY CONTENT */
                <div className="space-y-6 text-sm text-gray-300 leading-relaxed font-barlow text-justify">
                  <section className="space-y-2">
                    <h4 className="font-montserrat font-bold text-white text-base text-left border-l-2 border-primary-green pl-3">
                      {t.cookies.introTitle}
                    </h4>
                    <p>{t.cookies.introText}</p>
                  </section>

                  <section className="space-y-3">
                    <h4 className="font-montserrat font-bold text-white text-base text-left border-l-2 border-primary-green pl-3">
                      {t.cookies.typesTitle}
                    </h4>
                    <p>{t.cookies.typesText}</p>
                    <ul className="space-y-2.5 pl-2 mt-2">
                      <li className="flex items-start gap-2 text-left">
                        <Check className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                        <span>{t.cookies.typesItem1}</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <Check className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                        <span>{t.cookies.typesItem2}</span>
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-2">
                    <h4 className="font-montserrat font-bold text-white text-base text-left border-l-2 border-primary-green pl-3">
                      {t.cookies.controlTitle}
                    </h4>
                    <p>{t.cookies.controlText}</p>
                  </section>
                </div>
              )}
            </div>

            {/* Modal Actions Footer */}
            <div className="px-6 py-4 border-t border-white/5 bg-[#050906]/80 flex justify-end gap-3">
              <button 
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-primary-green hover:bg-primary-dark-green text-black font-semibold rounded-lg text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer text-center"
              >
                {t.closeBtn}
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface CookieConsentBannerProps {
  onOpenPrivacy: () => void;
  onOpenCookies: () => void;
}

export function CookieConsentBanner({ onOpenPrivacy, onOpenCookies }: CookieConsentBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Check if user has already accepted cookies in localStorage
    const consent = localStorage.getItem("cookie_consent_accepted");
    if (!consent) {
      // Delay visibility slightly for optimal user flow
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent_accepted", "true");
    setIsVisible(false);
  };

  const translations = {
    pt: {
      text: "Utilizamos cookies e tecnologias analíticas de alta performance para aprimorar a sua navegação e personalizar os nossos diagnósticos de engenharia elétrico-industrial. Ao continuar em nosso portal, você concorda com nossas políticas.",
      accept: "Aceitar Cookies",
      readPrivacy: "Política de Privacidade",
      readCookies: "Política de Cookies"
    },
    en: {
      text: "We use high-performance cookies and analytical technologies to optimize your navigation and customize our industrial operations proposals. By continuing to browse, you agree with our terms of service and compliance statements.",
      accept: "Accept All",
      readPrivacy: "Privacy Statement",
      readCookies: "Cookie Policy"
    },
    es: {
      text: "Utilizamos cookies y tecnologías de análisis técnico para mejorar la experiencia de usuario y personalizar nuestras ofertas de ingeniería. Al continuar navegando, usted consiente la instalación y lectura de nuestras políticas.",
      accept: "Aceptar Todo",
      readPrivacy: "Privacidad",
      readCookies: "Cookies"
    }
  };

  const t = translations[language === "es" ? "es" : language === "en" ? "en" : "pt"];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-lg z-[9900] bg-[#090f0b]/95 backdrop-blur-md border border-primary-green/20 rounded-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-left flex flex-col gap-4"
        >
          {/* Top glowing ambient line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary-green/50 to-transparent"></div>

          <div className="flex gap-3 items-start col-span-1">
            <div className="p-2 bg-primary-green/10 text-primary-green rounded-lg shrink-0 mt-0.5">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-white flex items-center gap-1.5">
                LGPD & Cookies
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed text-justify">
                {t.text}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 pt-1 border-t border-white/5">
            <div className="flex items-center gap-2.5 text-[10px] text-gray-500 font-mono uppercase tracking-wider mr-auto">
              <button 
                onClick={onOpenPrivacy}
                className="hover:text-primary-green transition-colors cursor-pointer"
              >
                {t.readPrivacy}
              </button>
              <span>•</span>
              <button 
                onClick={onOpenCookies}
                className="hover:text-primary-green transition-colors cursor-pointer"
              >
                {t.readCookies}
              </button>
            </div>

            <button 
              onClick={handleAccept}
              className="flex items-center gap-1.5 px-4 py-2 bg-primary-green hover:bg-primary-dark-green text-black font-bold rounded-lg text-[10px] uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>{t.accept}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
