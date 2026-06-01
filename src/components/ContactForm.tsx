import { useState, ChangeEvent, FormEvent } from "react";
import { ContactFormData } from "../types";
import { useLanguage } from "../context/LanguageContext";
import { Send, Phone, CheckCircle, AlertCircle, Building, User, Mail, Smartphone, MessageSquare, MapPin, ExternalLink, Clock } from "lucide-react";

export default function ContactForm() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const localTexts = {
    pt: {
      validationError: "Por favor, preencha todos os campos obrigatórios.",
      successBtnReopen: "Abrir Cliente de E-mail de Novo",
      successBtnNew: "Enviar Nova Mensagem",
      subjectTemplate: "Contato E-Projet",
      bodySalutation: "Prezada Equipe E-Projet,",
      bodyLead: "Gostaria de solicitar um orçamento para o seguinte escopo técnico:",
      bodySectionRequester: "DADOS DO REQUISITANTE",
      bodyLabelName: "Nome",
      bodyLabelCompany: "Empresa",
      bodyLabelPhone: "Telefone",
      bodyLabelEmail: "E-mail",
      bodyLabelNotSpecified: "Não especificado",
      bodySectionProject: "SOLICITAÇÃO DO PROJETO",
      bodyLabelMsgSecure: "Mensagem transmitida com segurança via portal tecnológico E-Projet."
    },
    en: {
      validationError: "Please fill in all required fields.",
      successBtnReopen: "Reopen Email Client",
      successBtnNew: "Send New Message",
      subjectTemplate: "E-Projet Technical Pitch",
      bodySalutation: "Dear E-Projet Team,",
      bodyLead: "I would like to request a technical proposal for the following project scope:",
      bodySectionRequester: "CLIENT INFORMATION",
      bodyLabelName: "Name",
      bodyLabelCompany: "Company",
      bodyLabelPhone: "Phone",
      bodyLabelEmail: "Email",
      bodyLabelNotSpecified: "Not specified",
      bodySectionProject: "PROJECT SPECIFICATIONS",
      bodyLabelMsgSecure: "Inquiry successfully transmitted via E-Projet Industrial Portal."
    },
    es: {
      validationError: "Por favor, complete todos los campos obligatorios.",
      successBtnReopen: "Abrir Correo de Nuevo",
      successBtnNew: "Enviar Otro Mensaje",
      subjectTemplate: "Contacto Técnico E-Projet",
      bodySalutation: "Estimada E-Projet,",
      bodyLead: "Me gustaría solicitar una propuesta formal para el siguiente alcance del proyecto:",
      bodySectionRequester: "INFORMACIÓN DEL SOLICITANTE",
      bodyLabelName: "Nombre",
      bodyLabelCompany: "Empresa",
      bodyLabelPhone: "Teléfono",
      bodyLabelEmail: "Correo",
      bodyLabelNotSpecified: "No especificado",
      bodySectionProject: "DETALLES DEL PROYECTO",
      bodyLabelMsgSecure: "Formulario transmitido formalmente a través del Portal de E-Projet."
    }
  }[language] || {
    validationError: "Por favor, preencha todos os campos obrigatórios.",
    successBtnReopen: "Abrir Cliente de E-mail de Novo",
    successBtnNew: "Enviar Nova Mensagem",
    subjectTemplate: "Contato E-Projet",
    bodySalutation: "Prezada Equipe E-Projet,",
    bodyLead: "Gostaria de solicitar um orçamento para o seguinte escopo técnico:",
    bodySectionRequester: "DADOS DO REQUISITANTE",
    bodyLabelName: "Nome",
    bodyLabelCompany: "Empresa",
    bodyLabelPhone: "Telefone",
    bodyLabelEmail: "E-mail",
    bodyLabelNotSpecified: "Não especificado",
    bodySectionProject: "SOLICITAÇÃO DO PROJETO",
    bodyLabelMsgSecure: "Mensagem transmitida com segurança via portal tecnológico E-Projet."
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Basic quick verification using localized validation message
    if (!formData.name || !formData.email || !formData.message || !formData.phone) {
      setError(localTexts.validationError);
      setLoading(false);
      return;
    }

    // Structure the email subject and body for a professional corporate delivery
    const subject = encodeURIComponent(`${localTexts.subjectTemplate} [${formData.company || formData.name}]`);
    const body = encodeURIComponent(
      `${localTexts.bodySalutation}\n\n` +
      `${localTexts.bodyLead}\n\n` +
      `--------------------------------------------------\n` +
      `📄 ${localTexts.bodySectionRequester}\n` +
      `--------------------------------------------------\n` +
      `• ${localTexts.bodyLabelName}: ${formData.name}\n` +
      `• ${localTexts.bodyLabelCompany}: ${formData.company || localTexts.bodyLabelNotSpecified}\n` +
      `• ${localTexts.bodyLabelPhone}: ${formData.phone}\n` +
      `• ${localTexts.bodyLabelEmail}: ${formData.email}\n\n` +
      `--------------------------------------------------\n` +
      `📝 ${localTexts.bodySectionProject}\n` +
      `--------------------------------------------------\n` +
      `${formData.message}\n\n` +
      `--------------------------------------------------\n` +
      `${localTexts.bodyLabelMsgSecure}`
    );

    const mailtoUrl = `mailto:contato@e-projet.com.br?subject=${subject}&body=${body}`;

    // Simulate submission delivery and execute client-side redirection
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Auto-trigger the mail engine redirection
      window.location.href = mailtoUrl;
    }, 1200);
  };

  return (
    <section id="contato" className="py-24 bg-white text-gray-950 overflow-hidden font-barlow scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* CONTACT INFO DETAILS CARD (Left Column - 5 cols) */}
          <div className="lg:col-span-5 bg-industrial-black text-white p-8 md:p-10 rounded-xl border border-primary-green/20 relative overflow-hidden shadow-2xl shadow-gray-900/10">
            <div className="absolute -inset-0.5 rounded bg-primary-green/5 blur -z-10"></div>
            
            <span className="text-xs font-bold text-primary-green uppercase tracking-wider block mb-3 font-mono">
              {t.contact.badge}
            </span>
            
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold font-space-grotesk uppercase tracking-tight text-white mb-6 leading-snug">
              {t.contact.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {t.contact.desc}
            </p>

            {/* Direct Contact Channels */}
            <div className="space-y-6 mb-10 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white uppercase tracking-wider text-[10px] mb-1 font-mono">{t.contact.infoOffice}</span>
                  <span className="text-gray-400 leading-relaxed">{t.contact.infoOfficeDesc}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white uppercase tracking-wider text-[10px] mb-1 font-mono">{t.contact.infoCall}</span>
                  <span className="text-gray-400 font-mono">(16) 3947-4454</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white uppercase tracking-wider text-[10px] mb-1 font-mono">{t.contact.infoEmail}</span>
                  <span className="text-gray-400">contato@e-projet.com.br</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white uppercase tracking-wider text-[10px] mb-1 font-mono">{t.contact.infoHours}</span>
                  <span className="text-gray-400">{t.contact.infoHoursDays}</span>
                </div>
              </div>
            </div>

            {/* Immediate Whatsapp Action button */}
            <a
              href={`https://wa.me/551639474454?text=${encodeURIComponent(t.whatsapp.messageText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#1ebd5d] text-white font-bold uppercase tracking-wider text-sm py-4 rounded-lg transition-all duration-300 shadow-lg shadow-[#25d366]/20 cursor-pointer"
            >
              <Phone className="w-5 h-5 shrink-0" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* PREMIUM FORM WORKFLOW (Right Column - 7 cols) */}
          <div className="lg:col-span-7 bg-light-gray p-8 md:p-12 border border-gray-200 rounded-xl relative">
            <h3 className="text-xl md:text-2xl font-extrabold font-space-grotesk uppercase tracking-wide text-gray-950 mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mb-8">
              {t.contact.subtitle}
            </p>

            {/* Error alerts */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Success panel */}
            {success ? (
              <div className="py-8 text-center flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-primary-dark-green mb-4 stroke-[1.5]" />
                <h4 className="text-2xl font-bold font-space-grotesk uppercase text-gray-950 mb-2">{t.contact.successTitle}</h4>
                <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                  {t.contact.successDesc}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={`mailto:contato@e-projet.com.br?subject=E-Projet%20Engenharia%20%E2%80%94%20Contato`}
                    className="px-6 py-3 bg-primary-dark-green hover:bg-black hover:text-white text-white text-xs font-bold uppercase tracking-widest rounded transition-all duration-300"
                  >
                    {localTexts.successBtnReopen}
                  </a>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({
                        name: "",
                        company: "",
                        phone: "",
                        email: "",
                        message: ""
                      });
                    }}
                    className="px-6 py-3 bg-industrial-black hover:bg-black text-white text-xs font-bold uppercase tracking-widest rounded transition-all duration-300"
                  >
                    {localTexts.successBtnNew}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 font-mono">
                      {t.contact.labelName}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.placeholderName}
                        className="w-full bg-white border border-gray-200 focus:border-primary-green focus:ring-1 focus:ring-primary-green/30 rounded px-4 py-3 pl-10 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400"
                      />
                      <User className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
                    </div>
                  </div>

                  {/* Company field */}
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 font-mono">
                      {t.contact.labelCompany}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={t.contact.placeholderCompany}
                        className="w-full bg-white border border-gray-200 focus:border-primary-green focus:ring-1 focus:ring-primary-green/30 rounded px-4 py-3 pl-10 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400"
                      />
                      <Building className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 font-mono">
                      {t.contact.labelPhone}
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.placeholderPhone}
                        className="w-full bg-white border border-gray-200 focus:border-primary-green focus:ring-1 focus:ring-primary-green/30 rounded px-4 py-3 pl-10 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400"
                      />
                      <Smartphone className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 font-mono">
                      {t.contact.labelEmail}
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.placeholderEmail}
                        className="w-full bg-white border border-gray-200 focus:border-primary-green focus:ring-1 focus:ring-primary-green/30 rounded px-4 py-3 pl-10 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400"
                      />
                      <Mail className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Message field */}
                <div className="relative">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 font-mono">
                    {t.contact.labelMsg}
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder={t.contact.placeholderMsg}
                      className="w-full bg-white border border-gray-200 focus:border-primary-green focus:ring-1 focus:ring-primary-green/30 rounded px-4 py-3 pl-10 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 resize-none"
                    ></textarea>
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-gray-400" />
                  </div>
                </div>

                {/* Form submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-industrial-black hover:bg-black text-white font-bold font-barlow uppercase tracking-wider text-xs py-4 rounded transition-all flex items-center justify-center gap-3 shadow-lg shadow-gray-950/20 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-green border-t-transparent rounded-full animate-spin"></div>
                      <span>{t.contact.btnSending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-primary-green" />
                      <span>{t.contact.btnSubmit}</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Interactive Map Component */}
        <div className="mt-16 border border-gray-200 rounded-xl overflow-hidden bg-light-gray p-4 md:p-6 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <div>
              <span className="text-xs font-bold text-primary-dark-green uppercase tracking-widest block mb-2 font-mono">
                {t.contact.mapBadge}
              </span>
              <h4 className="text-xl md:text-2xl font-extrabold font-space-grotesk uppercase tracking-tight text-gray-950">
                {t.contact.mapTitle}
              </h4>
              <p className="text-gray-500 text-xs md:text-sm mt-1">
                {t.contact.mapDesc}
              </p>
            </div>
            <div className="text-xs text-gray-700 bg-white border border-gray-200 rounded-lg p-3 md:p-4 shrink-0 shadow-sm flex flex-col gap-1.5 max-w-sm w-full md:w-auto">
              <div className="flex items-center gap-2 font-semibold text-gray-950">
                <MapPin className="w-4 h-4 text-primary-green shrink-0" />
                <span>Rua Mário Cunha Júnior, 828</span>
              </div>
              <p className="text-gray-500 font-medium pl-6">
                Jd. Diamante — Sertãozinho - SP <br />
                CEP: 14177-145
              </p>
              <a
                href="https://share.google/o4HvMfL3nt140ja18"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary-dark-green hover:text-black transition-colors cursor-pointer"
              >
                <span>{t.contact.mapBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Google Maps Interactive IFrame Embed */}
          <div className="relative w-full h-[320px] md:h-[420px] rounded-lg overflow-hidden border border-gray-200 bg-white shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.2863486337653!2d-48.0001099238381!3d-21.141018380295822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9e1e792e3ac45%3A0xe9f7ef8ff52ff9a9!2sR.%20M%C3%A1rio%20Cunha%20Jr.%2C%20828%20-%20Jardim%20Diamante%2C%20Sert%C3%A3ozinho%20-%20SP%2C%2014177-145!5e0!3m2!1spt-BR!2sbr!4v1716744000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização E-Projet Engenharia"
              className="grayscale-[10%] contrast-[105%] filter hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
