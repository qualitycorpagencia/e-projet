export type Language = "pt" | "en" | "es";

export interface TranslationSchema {
  header: {
    about: string;
    services: string;
    differentials: string;
    portfolio: string;
    cases: string;
    contact: string;
    cta: string;
    taglineMobile: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    titleHighlight: string;
    subtext: string;
    ctaRequest: string;
    ctaServices: string;
    coverageTitle: string;
    locationSertaozinho: string;
    locationRibeirao: string;
    locationSaoPaulo: string;
  };
  about: {
    badge: string;
    title: string;
    yearsText: string;
    yearsLabel: string;
    paragraph1: string;
    paragraph2: string;
    coreValues: {
      strictTitle: string;
      strictDesc: string;
      techTitle: string;
      techDesc: string;
      resultTitle: string;
      resultDesc: string;
    };
    processBadge: string;
    processTitle: string;
    steps: {
      title01: string;
      desc01: string;
      title02: string;
      desc02: string;
      title03: string;
      desc03: string;
      title04: string;
      desc04: string;
    };
  };
  services: {
    badge: string;
    title: string;
    description: string;
    scopeLabel: string;
    clickPrompt: string;
    urgencyTitle: string;
    urgencyText: string;
    urgencyCTA: string;
    items: {
      automacao: {
        title: string;
        desc: string;
        details: string[];
      };
      eletrica: {
        title: string;
        desc: string;
        details: string[];
      };
      projetos: {
        title: string;
        desc: string;
        details: string[];
      };
      solar: {
        title: string;
        desc: string;
        details: string[];
      };
      paineis: {
        title: string;
        desc: string;
        details: string[];
      };
      datacenter: {
        title: string;
        desc: string;
        details: string[];
      };
      infra: {
        title: string;
        desc: string;
        details: string[];
      };
      instrumentacao: {
        title: string;
        desc: string;
        details: string[];
      };
    };
  };
  differentials: {
    badge: string;
    title: string;
    subtext: string;
    plantStatus: string;
    reliabilityTitle: string;
    reliabilityDesc: string;
    efficiencyLabel: string;
    complianceLabel: string;
    items: {
      projects: {
        metric: string;
        label: string;
        desc: string;
      };
      experience: {
        metric: string;
        label: string;
        desc: string;
      };
      support: {
        metric: string;
        label: string;
        desc: string;
      };
      tech: {
        metric: string;
        label: string;
        desc: string;
      };
    };
  };
  portfolio: {
    badge: string;
    title: string;
    subtext: string;
    emptyText: string;
    viewBtn: string;
    modalClient: string;
    modalLoc: string;
    modalYear: string;
    modalCTA: string;
    categories: {
      all: string;
      automacao: string;
      eletrica: string;
      solar: string;
      datacenter: string;
      projetos: string;
      paineis: string;
    };
    projects: {
      proj1: {
        title: string;
        desc: string;
        client: string;
        location: string;
      };
      proj2: {
        title: string;
        desc: string;
        client: string;
        location: string;
      };
      proj3: {
        title: string;
        desc: string;
        client: string;
        location: string;
      };
      proj4: {
        title: string;
        desc: string;
        client: string;
        location: string;
      };
      proj5: {
        title: string;
        desc: string;
        client: string;
        location: string;
      };
      proj6: {
        title: string;
        desc: string;
        client: string;
        location: string;
      };
    };
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    infoOffice: string;
    infoOfficeDesc: string;
    infoCall: string;
    infoEmail: string;
    infoHours: string;
    infoHoursDays: string;
    formTitle: string;
    labelName: string;
    labelCompany: string;
    labelPhone: string;
    labelEmail: string;
    labelMsg: string;
    placeholderName: string;
    placeholderCompany: string;
    placeholderPhone: string;
    placeholderEmail: string;
    placeholderMsg: string;
    btnSubmit: string;
    btnSending: string;
    successTitle: string;
    successDesc: string;
    errTitle: string;
    errDesc: string;
    mapBadge: string;
    mapTitle: string;
    mapDesc: string;
    mapBtn: string;
  };
  footer: {
    copyright: string;
    terms: string;
    privacy: string;
    engineeringPower: string;
    sectionsTitle: string;
    contactBtnRoute: string;
  };
  whatsapp: {
    tooltip: string;
    messageText: string;
    tooltipTitle: string;
    tooltipDesc: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  pt: {
    header: {
      about: "Sobre",
      services: "Serviços",
      differentials: "Diferenciais",
      portfolio: "Portfólio",
      cases: "Casos de Sucesso",
      contact: "Contato",
      cta: "Solicitar Projeto",
      taglineMobile: "Sobre a Empresa",
    },
    hero: {
      badge: "Engenharia & Automação Industrial Premium",
      titleLine1: "Automação Industrial",
      titleLine2: "Inteligente",
      titleLine3: "para Empresas de",
      titleHighlight: "Alta Performance",
      subtext: "Sistemas inteligentes de automação industrial, engenharia elétrica de potência e soluções turnkey completas para maximizar produtividade, garantir conformidade rígida e mitigar paradas operacionais com alta segurança técnica.",
      ctaRequest: "Solicitar Projeto",
      ctaServices: "Conhecer Serviços",
      coverageTitle: "Atendimento Prioritário em:",
      locationSertaozinho: "📍 Sertãozinho (Polo Industrial)",
      locationRibeirao: "📍 Ribeirão Preto & Região",
      locationSaoPaulo: "📍 São Paulo & Grande SP",
    },
    about: {
      badge: "Quem Somos — Engenharia Voltada ao Futuro",
      title: "SOLUÇÕES TURNKEY EM AUTOMAÇÃO E ENGENHARIA ELÉTRICA COM ALCANCE GLOBAL",
      yearsText: "15+",
      yearsLabel: "Anos de Engenharia",
      paragraph1: "A E-Projet é referência no desenvolvimento, integração e comissionamento de soluções tecnológicas avançadas em automação industrial, engenharia elétrica de potência e sistemas de energia. Com sólida base operacional nas regiões estratégicas de Sertãozinho e Ribeirão Preto, nossa atuação rompe fronteiras, modernizando plantas produtivas e térmicas de grande porte em todo o Brasil e América Latina.",
      paragraph2: "Contamos com um corpo técnico altamente qualificado que une teoria analítica rigorosa à vasta vivência prática em campo. Nosso compromisso vai além de simplesmente entregar projetos: garantimos a eficiência, a segurança e a continuidade operacional de sistemas elétricos e automáticos complexos, do startup à operação contínua.",
      coreValues: {
        strictTitle: "Conformidade Rígida",
        strictDesc: "Todos os nossos projetos elétricos e mecânicos seguem religiosamente as normas técnicas aplicáveis, com foco total em NR-10 e NR-12.",
        techTitle: "Tecnologia e Inovação",
        techDesc: "Trabalhamos em parceria direta com os maiores fabricantes globais para entregar o que há de mais moderno em hardware e controladores.",
        resultTitle: "Compromisso com Resultado",
        resultDesc: "Medimos nosso sucesso pelo ganho real de produtividade de nossos clientes, minimizando paradas não programadas e garantindo a máxima disponibilidade operacional em qualquer lugar do continente.",
      },
      processBadge: "Engenharia de Ciclo Fechado",
      processTitle: "Como Trabalhamos",
      steps: {
        title01: "Engenharia de Diagnóstico",
        desc01: "Auditoria técnica pormenorizada de sistemas elétricos, identificando gargalos e oportunidades de otimização na planta.",
        title02: "Engenharia de Projeto",
        desc02: "Desenvolvimento de projetos conceituais, básicos e executivos em plataformas CAD/EPLAN, em total conformidade com normas nacionais e internacionais.",
        title03: "Montagem e Comissionamento",
        desc03: "Montagem de painéis, integração de sistemas e testes de startup/comissionamento em campo com rigorosos protocolos de validação.",
        title04: "Suporte e Operação Contínua",
        desc04: "Assistência técnica especializada, suporte pós-startup e monitoramento preditivo para garantir a máxima disponibilidade dos ativos.",
      },
    },
    services: {
      badge: "Engenharia Multidisciplinar Garantida",
      title: "Soluções Industriais de Ponta a Ponta",
      description: "Combinamos sólida experiência prática e engenharia multidisciplinar para entregar soluções integradas do tipo Turnkey. Projetamos, montamos, comissionamos e sustentamos sistemas elétricos e de automação de alta complexidade, assegurando máxima performance e conformidade normativa absoluta.",
      scopeLabel: "Escopo de Fornecimento:",
      clickPrompt: "Clique para ver escopo técnico +",
      urgencyTitle: "Precisa de adequação técnica normativa urgente?",
      urgencyText: "Desenvolvemos laudos detalhados de engenharia e conformidade NR-10 e NR-12, com diagnóstico preciso e emissão imediata de ART.",
      urgencyCTA: "Falar Com Engenheiro",
      items: {
        automacao: {
          title: "Automação Industrial",
          desc: "Desenvolvimento e integração de arquiteturas de automação robustas, focadas em maximizar a eficiência operacional, segurança e a continuidade de processos industriais complexos.",
          details: [
            "Programação e configuração de CLPs e SDCDs de alta disponibilidade (Siemens, Rockwell, Schneider Electric)",
            "Desenvolvimento de sistemas supervisórios e IHMs avançadas (plantPAX, Elipse E3/Power, WinCC)",
            "Sistemas de instrumentação de campo e redes de controle de processos",
            "Arquitetura e diagnóstico de redes de comunicação industrial (Profinet, EtherNet/IP, Modbus, Profibus)"
          ]
        },
        eletrica: {
          title: "Engenharia Elétrica",
          desc: "Soluções completas em engenharia elétrica de potência, focadas na máxima segurança operacional, eficiência energética e total conformidade normativa.",
          details: [
            "Projetos de subestações de média e alta tensão (MT/AT), cabines primárias e Greenfield/Brownfield",
            "Projetos e laudos de SPDA e aterramento industrial (em total conformidade com a ABNT NBR 5419)",
            "Estudos de curto-circuito, seletividade, coordenação de proteção e ATPV (Energia Incidente - NR-10)",
            "Análise de qualidade de energia, correção de fator de potência e filtragem de harmônicos"
          ]
        },
        projetos: {
          title: "Projetos Industriais",
          desc: "Desenvolvimento de projetos executivos multidisciplinares e documentação técnica precisa para implantação, ampliação e modernização de ativos industriais.",
          details: [
            "Detalhamento eletromecânico, dimensionamento e diagramas de rotas de cabos (leitos, canaletas e eletrodutos)",
            "Laudos de adequação e projetos de engenharia focados em segurança operacional (NR-10 e NR-12)",
            "Modelagem 3D inteligente e conceitos de Gêmeos Digitais (Digital Twins) para gestão de ativos",
            "Levantamento de campo e atualização de documentação técnica (As-Built elétrico, pneumático e de utilidades)"
          ]
        },
        solar: {
          title: "Energia Solar Fotovoltaica",
          desc: "Soluções completas de geração centralizada e distribuída de energia solar, focadas na redução de custos operacionais e na sustentabilidade de grandes plantas industriais.",
          details: [
            "Estudos de viabilidade, dimensionamento e homologação de projetos junto às principais concessionárias de energia",
            "Integração de inversores centrais de alta potência e sistemas com rastreadores solares (trackers)",
            "Projetos de sistemas conectados à rede (On-Grid), sistemas isolados (Off-Grid) e plantas de minigeração distribuída",
            "Sistemas de telemetria para monitoramento em tempo real da geração, análise de eficiência e manutenção preditiva"
          ]
        },
        paineis: {
          title: "Painéis Elétricos TTA/PTTA",
          desc: "Engenharia, integração e montagem de conjuntos de manobra e controle certificados, projetados para máxima continuidade operacional sob as condições industriais mais severas.",
          details: [
            "Centros de Controle de Motores convencionais e inteligentes (CCM / CCMI)",
            "Painéis de Distribuição, Quadros Gerais de Baixa Tensão (QGBT) e cubículos de média tensão (MT)",
            "Projetos e montagens rigorosamente testados em conformidade com a norma ABNT NBR IEC 61439-1/2",
            "Ensaios de rotina em fábrica: testes de isolação, continuidade do circuito de proteção e parametrização/calibração de relés e disjuntores"
          ]
        },
        datacenter: {
          title: "Infraestrutura de Data Center",
          desc: "Projetos e implantação de ambientes de missão crítica, focados em máxima disponibilidade, redundância rígida e segurança física para o processamento de dados industriais.",
          details: [
            "Sistemas de energia ininterrupta de alta confiabilidade (UPS/Nobreaks modulares e paralelos redundantes)",
            "Sistemas de climatização de precisão (CRAC) com controle termo-higrométrico e redundância ativa",
            "Segurança física e lógica: sistemas de controle de acesso por biometria/RFID, monitoramento por CFTV IP e automação predial (BMS)",
            "Topologias elétricas de missão crítica alinhadas às certificações TIER III e TIER IV"
          ]
        },
        infra: {
          title: "Infraestrutura Industrial",
          desc: "Serviços especializados de infraestrutura elétrica e montagem eletromecânica de campo, garantindo máxima robustez física e proteção para os circuitos de potência e controle.",
          details: [
            "Montagem e fixação de sistemas de sustentação: leitos pesados, eletrocalhas, perfilados e dutos subterrâneos",
            "Lançamento, identificação e conectividade de cabos de potência (MT/BT), sinal de instrumentação e redes de fibra óptica",
            "Implantação de malhas de aterramento equipotenciais e sistemas dedicados para instrumentação e automação",
            "Montagem eletromecânica completa de plantas industriais, complexos de mineração e plantas de energia"
          ]
        },
        instrumentacao: {
          title: "Instrumentação e Controle",
          desc: "Sistemas avançados de medição e controle de variáveis analógicas e digitais de processo, assegurando máxima stabilidade, segurança e repetibilidade operacional.",
          details: [
            "Especificação, instalação e calibração de transmissores de campo (pressão, vazão, nível, temperatura e analíticos)",
            "Desenvolvimento de sistemas de telemetria para monitoramento remoto e gestão de ativos (poços, reservatórios e utilidades)",
            "Sintonização, otimização e comissionamento de malhas de controle PID complexas em malha fechada",
            "Configuração e startup de válvulas de controle de alta precisão, posicionadores inteligentes e atuadores pneumáticos"
          ]
        }
      }
    },
    differentials: {
      badge: "Diferenciais E-Projet",
      title: "A Engenharia que Impulsiona a Indústria 4.0",
      subtext: "Nossos indicadores refletem nossa sólida trajetória: integrar sistemas inteligentes de alta confiabilidade operacional com foco absoluto em segurança, eficiência energética sustentável e produtividade de ponta para indústrias de grande porte.",
      plantStatus: "● STATUS DA PLANTA",
      reliabilityTitle: "Foco em Confiabilidade",
      reliabilityDesc: "Nossas soluções mitigam riscos operacionais, minimizam paradas não programadas e eliminam perdas por ineficiência energética ou desconformidade normativa.",
      efficiencyLabel: "EFICIÊNCIA ENERGÊTICA ALCANÇADA",
      complianceLabel: "CONFORMIDADE NORMATIVA (NR-10 / NR-12)",
      items: {
        projects: {
          metric: "+120",
          label: "Projetos Entregues",
          desc: "Sistemas complexos operando com máxima eficiência em plantas estratégicas por todo o Brasil e América Latina."
        },
        experience: {
          metric: "+15",
          label: "Anos de Engenharia",
          desc: "Corpo técnico altamente qualificado liderando engenharia, montagem e comissionamento de projetos complexos em indústrias de base e plantas de energia."
        },
        support: {
          metric: "24/7",
          label: "Suporte Técnico",
          desc: "Atendimento prioritário e de emergência estruturado para mitigar riscos e garantir a máxima disponibilidade operacional dos ativos de nossos clientes."
        },
        tech: {
          metric: "100%",
          label: "Tecnologia de Ponta",
          desc: "Uso de plataformas analíticas avançadas e sólidas parcerias com os maiores fabricantes globais de hardware e software do mercado industrial."
        }
      }
    },
    portfolio: {
      badge: "Casos Práticos de Engenharia Aplicada",
      title: "Casos de Sucesso",
      subtext: "Navegue pelos nossos principais estudos de caso e projetos executados em grandes complexos industriais e usinas, atestando nossa capacidade técnica e excelência operacional em campo por toda a América Latina.",
      emptyText: "Nenhum projeto registrado para esta categoria específica no momento.",
      viewBtn: "Visualizar projeto",
      modalClient: "Cliente",
      modalLoc: "Localização",
      modalYear: "Ano de Entrega",
      modalCTA: "Fazer Projeto Semelhante",
      categories: {
        all: "Todos",
        automacao: "Automação Industrial",
        eletrica: "Engenharia Elétrica",
        solar: "Energia Solar",
        datacenter: "Data Center",
        projetos: "Projetos Industriais",
        paineis: "Painéis Elétricos",
      },
      projects: {
        proj1: {
          title: "Infraestrutura MT — Planta de Bioenergia",
          desc: "Fornecimento turnkey de cubículos blindados de 17,8 kV com tecnologia Metal-Clad, proteção ativa contra arco elétrico (Arc Flash), testes de rotina e homologação nas normas.",
          client: "Grande Indústria de Bioenergia e Grãos",
          location: "Jaíba - MG",
        },
        proj2: {
          title: "Elétrica e Automação — Casa de Força Termelétrica",
          desc: "Implantação integrada com cubículos de MT, CLP Siemens S7-1500, supervisório espelhado redundante, AVR ABB Unitrol, retificadores 125 Vcc com banco de baterias e montagem em campo.",
          client: "Grande Produtor de Papel e Madeira",
          location: "Tunas do Paraná - PR",
        },
        proj3: {
          title: "Automação e Engenharia — Termoelétricas de 10 e 15 MW",
          desc: "Desenvolvimento de inteligência lógica fail-safe (segurança contra falhas) para controle de turbo-geradores e caldeiras, sincronismo Woodward, diagnósticos ópticos e testes TAF/TAC.",
          client: "Grupo Metalúrgico Multinacional",
          location: "São Vicente - SP",
        },
        proj4: {
          title: "Infraestrutura Crítica de Data Center TIER III",
          desc: "Implantação de redundância dinâmica dual-path conectorizada à geradores a diesel, painéis de transferência automática (ATS) e sistema de combate a incêndio com gás FM-200.",
          client: "Tecnologia Digital Corporativa",
          location: "São Paulo - SP",
        },
        proj5: {
          title: "Adequação NR-12 em Prensa Hidráulica",
          desc: "Laudo técnico inicial, projeto mecânico-elétrico, instalação de barreiras de luz de segurança, relés de segurança duplicados e comissionamento com emissão de ART.",
          client: "Indústria de Plásticos e Moldes",
          location: "Sertãozinho - SP",
        },
        proj6: {
          title: "QGD de Alta Tensão (Quadro Geral 2500A)",
          desc: "Projeto térmico e montagem do QGD utilizando pintura epóxi anti-corrosiva de alta espessura, disjuntores abertos motorizados de última geração e barramento de cobre estanhado.",
          client: "Alimentos e Bebidas do Interior",
          location: "Ribeirão Preto - SP",
        },
      }
    },
    contact: {
      badge: "Canais de Comunicação Industrial",
      title: "Consolide seu Projeto Com a E-Projet",
      subtitle: "Fale com Nossa Equipe de Engenheiros",
      desc: "Preencha o formulário técnico para detalhar seus requisitos de projeto. Nossa equipe de engenharia retornará em até 2 horas úteis.",
      infoOffice: "Sede Operacional",
      infoOfficeDesc: "Rua Mário Cunha Júnior, 828 — Jd. Diamante, Sertãozinho - SP",
      infoCall: "Atendimento Telefônico",
      infoEmail: "E-mail de Engenharia",
      infoHours: "Horário de Atendimento",
      infoHoursDays: "Segunda a Sexta — 07:30 às 17:30 (Exceto feriados)",
      formTitle: "Formulário Técnico de Projeto",
      labelName: "Seu Nome Completo",
      labelCompany: "Nome da Empresa ou Indústria",
      labelPhone: "Telefone corporativo (com DDD)",
      labelEmail: "E-mail Profissional",
      labelMsg: "Descrição Sucinta da Necessidade Técnica",
      placeholderName: "Ex: André Mendonça",
      placeholderCompany: "Ex: Indústrias Reunidas S/A",
      placeholderPhone: "Ex: (16) 99999-9999",
      placeholderEmail: "Ex: andre@empresa.com.br",
      placeholderMsg: "Por favor, descreva as especificações gerais elétricas ou de automação do seu maquinário ou infraestrutura...",
      btnSubmit: "Enviar Chamado Técnico",
      btnSending: "Transmitindo chamada...",
      successTitle: "Chamado Técnico Transmitido com Sucesso!",
      successDesc: "Nossa equipe de engenharia elétrica e automação já está ciente de sua necessidade. Entraremos em contato muito breve nos números informados.",
      errTitle: "Falha de Transmissão",
      errDesc: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente enviar novamente.",
      mapBadge: "★ Presença Física Industrial",
      mapTitle: "Sede Operacional & Engenharia",
      mapDesc: "Visite-nos ou agende uma reunião técnica na nossa sede em Sertãozinho/SP.",
      mapBtn: "Como Chegar (Google Maps)",
    },
    footer: {
      copyright: "E-Projet Sistemas de Automação Ltda. Todos os direitos reservados.",
      terms: "Termos de Uso",
      privacy: "Políticas de Privacidade",
      engineeringPower: "Engenharia de Automação, Elétrica de Potência e Projetos Industriais Turnkey.",
      sectionsTitle: "Acesso Rápido",
      contactBtnRoute: "Traçar Rota no Mapa",
    },
    whatsapp: {
      tooltip: "Contato de Emergência Técnica",
      messageText: "Olá E-Projet Engenharia! Vi seu site e gostaria de solicitar um atendimento técnico sobre automação e projetos industriais.",
      tooltipTitle: "Engenharia de Plantão",
      tooltipDesc: "Olá! Precisa de suporte técnico ou quer solicitar o escopo de um novo projeto industrial? Fale com nossos engenheiros agora.",
    }
  },
  en: {
    header: {
      about: "About",
      services: "Services",
      differentials: "Key Features",
      portfolio: "Portfolio",
      cases: "Success Cases",
      contact: "Contact",
      cta: "Request Proposal",
      taglineMobile: "About the Company",
    },
    hero: {
      badge: "Premium Industrial Automation & Engineering",
      titleLine1: "Smart Industrial",
      titleLine2: "Automation",
      titleLine3: "for High",
      titleHighlight: "Performance Companies",
      subtext: "Intelligent industrial automation systems, power electrical engineering, and complete turnkey engineering solutions to maximize productivity, ensure strict compliance, and prevent unscheduled downtime with high technical safety.",
      ctaRequest: "Request Proposal",
      ctaServices: "Explore Services",
      coverageTitle: "Priority Service Area:",
      locationSertaozinho: "📍 Sertãozinho (Industrial Hub)",
      locationRibeirao: "📍 Ribeirão Preto & Region",
      locationSaoPaulo: "📍 São Paulo & Metropolitan Area",
    },
    about: {
      badge: "About Us — Engineering Geared to the Future",
      title: "TURNKEY SOLUTIONS IN AUTOMATION AND ELECTRICAL ENGINEERING WITH GLOBAL REACH",
      yearsText: "15+",
      yearsLabel: "Years of Engineering",
      paragraph1: "E-Projet is a benchmark in the development, integration, and commissioning of advanced technological solutions in industrial automation, power electrical engineering, and energy systems. Powered by a solid operational base in the strategic regions of Sertãozinho and Ribeirão Preto, our performance breaks boundaries, modernizing large-scale productive and thermal plants throughout Brazil and Latin America.",
      paragraph2: "We rely on a highly qualified technical team that joins rigorous analytical theory with vast practical field experience. Our commitment goes beyond simply delivering projects: we guarantee the efficiency, safety, and operational continuity of complex electrical and automatic systems, from startup to continuous operations.",
      coreValues: {
        strictTitle: "Strict Compliance",
        strictDesc: "All our electrical and mechanical projects religiously follow applicable technical standards, with full focus on NR-10 and NR-12.",
        techTitle: "Technology & Innovation",
        techDesc: "We work in direct partnership with leading global manufacturers to deliver the latest in hardware and controllers.",
        resultTitle: "Commitment to Results",
        resultDesc: "We measure our success by the actual productivity gains of our clients, minimizing unscheduled downtimes and ensuring maximum operational availability anywhere in the continent.",
      },
      processBadge: "Closed-Loop Engineering",
      processTitle: "How We Work",
      steps: {
        title01: "Diagnostic Engineering",
        desc01: "Detailed technical audit of electrical systems, identifying bottlenecks and optimization opportunities in the plant.",
        title02: "Project Engineering",
        desc02: "Development of conceptual, basic, and executive projects in CAD/EPLAN platforms, in full compliance with national and international standards.",
        title03: "Assembly & Commissioning",
        desc03: "Panel assembly, system integration, and startup/commissioning field tests with rigorous validation protocols.",
        title04: "Support & Continuous Operation",
        desc04: "Specialized technical assistance, post-startup support, and predictive monitoring to ensure maximum asset availability.",
      },
    },
    services: {
      badge: "Guaranteed Multidisciplinary Engineering",
      title: "End-to-End Industrial Solutions",
      description: "We combine solid practical experience and multidisciplinary engineering to deliver turnkey integrated solutions. We design, build, commission, and sustain highly complex electrical and automation systems, ensuring maximum performance and absolute standard compliance.",
      scopeLabel: "Scope of Delivery:",
      clickPrompt: "Click to reveal technical details +",
      urgencyTitle: "Need swift regulatory compliance?",
      urgencyText: "We produce detailed legal safety assessments (NR-10/NR-12) with immediate engineering certifications (ART).",
      urgencyCTA: "Talk to an Engineer",
      items: {
        automacao: {
          title: "Industrial Automation",
          desc: "Development and integration of robust automation architectures, focused on maximizing operational efficiency, safety, and continuity of complex industrial processes.",
          details: [
            "Programming and configuration of high-availability PLCs and DCSs (Siemens, Rockwell, Schneider Electric)",
            "Development of supervisory SCADA systems and advanced HMIs (plantPAX, Elipse E3/Power, WinCC)",
            "Configuration of field instrumentation systems and process control networks",
            "Architecture and diagnosis of industrial communications networks (Profinet, EtherNet/IP, Modbus, Profibus)"
          ]
        },
        eletrica: {
          title: "Electrical Engineering",
          desc: "Complete solutions in power electrical engineering, focused on maximum operational safety, energy efficiency, and full regulatory compliance.",
          details: [
            "Medium and high voltage substation designs (MV/HV), primary substations, and Greenfield/Brownfield setups",
            "Designs and technical audits for lightning protection systems (LPS) and industrial grounding (fully compliant with ABNT NBR 5419)",
            "Short-circuit diagnostics, selectivity studies, protection coordination maps, and ATPV analysis (Incident Energy - NR-10)",
            "Power quality analysis, power factor correction, and harmonic filtering"
          ]
        },
        projetos: {
          title: "Industrial Projects",
          desc: "Development of multidisciplinary executive projects and precise technical documentation for the deployment, expansion, and modernization of industrial assets.",
          details: [
            "Electro-mechanical detailing, sizing, and cable routing diagrams (trays, conduits, and duct banks)",
            "Adequacy reports and engineering designs focused on operational safety (NR-10 and NR-12 compliance)",
            "Intelligent 3D modeling and Digital Twin concepts (gêmeos digitais) for asset management",
            "Field surveys and technical documentation updates (Electrical, pneumatic, and utilities As-Built packages)"
          ]
        },
        solar: {
          title: "Photovoltaic Solar Energy",
          desc: "High-efficiency clean energy sources engineered for massive manufacturing plants and commercial properties.",
          details: [
            "System sizing, technical submittals, and approvals with local grid companies",
            "Installation of high-power utility-grade solar inverters and solar trackers (rastreadores)",
            "High-performance commercial on-grid and off-grid industrial microgeneration solar grids",
            "Remote web-based generation monitoring and comprehensive preventative diagnostics"
          ]
        },
        paineis: {
          title: "TTA/PTTA Electrical Panels",
          desc: "Engineering, integration, and assembly of certified switchgear and control assemblies, built for maximum operational continuity under the harshest industrial conditions.",
          details: [
            "Conventional and intelligent Motor Control Centers (MCC / iMCC)",
            "Distribution boards, Main Low-Voltage Distribution Boards (MLVDB/QGBT), and medium-voltage cubicles (MV)",
            "Projects and assemblies rigorously tested in compliance with standard ABNT NBR IEC 61439-1/2",
            "Factory routine tests: insulation, protection circuit continuity, and relay/breaker parameterization and calibration"
          ]
        },
        datacenter: {
          title: "Data Center Infrastructure",
          desc: "Design and deployment of mission-critical environments, focused on maximum availability, strict redundancy, and physical security for industrial data processing.",
          details: [
            "High-reliability uninterruptible power supply systems (UPS/modular and parallel redundant systems)",
            "Precision air conditioning systems (CRAC) with thermo-hygrometric control and active redundancy",
            "Physical and logical security: access control systems via biometrics/RFID, CCTV-IP monitoring, and Building Management Systems (BMS)",
            "Mission-critical electrical topologies aligned with TIER III and TIER IV certifications"
          ]
        },
        infra: {
          title: "Industrial Infrastructure",
          desc: "Specialized electric infrastructure services and electromechanical field assembly, ensuring maximum physical robustness and protection for power and control circuits.",
          details: [
            "Mounting and securing support systems: heavy-duty cable trays, ladders, conduits, and underground duct banks",
            "Pulling, identification, and connectivity of power cables (MV/LV), instrumentation signal wires, and fiber optic links",
            "Implementation of equipotential grounding grids and dedicated systems for instrumentation and automation",
            "Complete electromechanical assembly of industrial plants, mining complexes, and power generation facilities"
          ]
        },
        instrumentacao: {
          title: "Instrumentation & Process Control",
          desc: "Advanced system measurement and control of analog and digital process variables, ensuring maximum stability, safety, and operational repeatability.",
          details: [
            "Specification, installation, and calibration of field transmitters (pressure, flow, level, temperature, and analytics)",
            "Development of telemetry systems for remote monitoring and asset management (wells, reservoirs, and utility networks)",
            "Tuning, optimization, and commissioning of complex closed-loop PID control loops",
            "Configuration and commissioning of high-precision control valves, smart positioners, and pneumatic actuators"
          ]
        }
      }
    },
    differentials: {
      badge: "E-Projet Advantages",
      title: "Engineering Fueling Industry 4.0 Transformation",
      subtext: "Our indicators reflect our real daily mission: to engineer highly reliable, safe, and cost-effective industrial solutions to minimize operational waste and secure peak production levels.",
      plantStatus: "● PLANT STATUS ACTIVE",
      reliabilityTitle: "Reliability Built-In",
      reliabilityDesc: "Our solutions mitigate operational risks, minimize unscheduled downtime, and eliminate losses due to energy inefficiency or regulatory non-compliance.",
      efficiencyLabel: "CHIEVED ENERGY EFFICIENCY LEVEL",
      complianceLabel: "SAFETY COMPLIANCE STATUS (NR-10 / NR-12)",
      items: {
        projects: {
          metric: "+120",
          label: "Delivered Projects",
          desc: "Highly tailored systems operating at peak performance across the region."
        },
        experience: {
          metric: "+15",
          label: "Years of Engineering",
          desc: "A veteran engineering core leading complex deployments in multi-million dollar plants."
        },
        support: {
          metric: "24/7",
          label: "Technical Standby",
          desc: "Priority emergency service response to keep factories moving around the clock."
        },
        tech: {
          metric: "100%",
          label: "Cutting-edge Technology",
          desc: "Premium specialized digital tools and strategic partnerships with global brand providers."
        }
      }
    },
    portfolio: {
      badge: "Real Engineering Case Histories",
      title: "Success Cases",
      subtext: "Explore our main case studies and projects executed in large industrial complexes and power plants, proving our technical capability and operational excellence across Latin America.",
      emptyText: "There are currently no projects listed for this specific category.",
      viewBtn: "View Project",
      modalClient: "Client",
      modalLoc: "Location",
      modalYear: "Delivery Year",
      modalCTA: "Request Similar Project",
      categories: {
        all: "All",
        automacao: "Industrial Automation",
        eletrica: "Electrical Engineering",
        solar: "Solar Energy",
        datacenter: "Data Center",
        projetos: "Industrial Blueprints",
        paineis: "Electrical Boards",
      },
      projects: {
        proj1: {
          title: "MV Infrastructure — Bioenergy Plant",
          desc: "Turnkey supply of 17.8 kV Metal-Clad shielded switchgears with active Arc Flash protection, routine factory tests, and final utility homologation.",
          client: "Large Bioenergy & Grain Producer",
          location: "Jaíba - MG, Brazil",
        },
        proj2: {
          title: "Electrical & Automation — Thermoelectric Powerhouse",
          desc: "Integrated deployment with MV switchgears, Siemens S7-1500 PLC, mirrored SCADA servers, ABB Unitrol AVR, 125VDC rectifiers, and field installation.",
          client: "Major Wood & Paper Manufacturer",
          location: "Tunas do Paraná - PR, Brazil",
        },
        proj3: {
          title: "Automation & Engineering — 10 & 15 MW Power Plants",
          desc: "Development of fail-safe control logic, Woodward speed regulators, active synchronization, localized industrial software, and dynamic factory and field testing.",
          client: "Multinational Metallurgy Group",
          location: "São Vicente - SP, Brazil",
        },
        proj4: {
          title: "TIER III Critical Infrastructure Data Center Setup",
          desc: "Bespoke dual-path dynamic electric deployment paired with diesel power generators, automated transition systems (ATS), and a modern inert gas FM-200 fire suppression infrastructure.",
          client: "Corporate Systems Data Center",
          location: "São Paulo - SP, Brazil",
        },
        proj5: {
          title: "Hard Safety Upgrades on Hydraulic Press",
          desc: "Initial safety survey, mechanical and electrical engineering layouts, physical setup of dynamic light barrier curtains, fully redundant safety relays, and legal certification approval.",
          client: "Heavy Plastics & Molding S/A",
          location: "Sertãozinho - SP, Brazil",
        },
        proj6: {
          title: "2500A High-Amperage Main Power Board",
          desc: "Thermal footprinting, physical design, and workshop build of custom 2500A Main Distribution Panel. Designed with heavy epoxy corrosion protections and premium power circuit breakers.",
          client: "Beverage & Food Processing Corp.",
          location: "Ribeirão Preto - SP, Brazil",
        },
      }
    },
    contact: {
      badge: "Industrial Channels of Communication",
      title: "Realize Your Project with E-Projet",
      subtitle: "Talk to Our Technical Engineering Advisers",
      desc: "Fill in our engineering form to coordinate your project scope. Our senior engineering coordinators will formulate a response within 2 active business hours.",
      infoOffice: "Operations Headquarters",
      infoOfficeDesc: "828 Mario Cunha Junior St — Jd. Diamante, Sertaozinho SP, Brazil",
      infoCall: "Telephone Standby",
      infoEmail: "Engineering Mailbox",
      infoHours: "Service Hours",
      infoHoursDays: "Monday to Friday — 07:30 AM to 05:30 PM (UTC-3)",
      formTitle: "Project Technical Request Forms",
      labelName: "Your Full Name",
      labelCompany: "Company Name",
      labelPhone: "Corporate Mobile Number",
      labelEmail: "Business Email Address",
      labelMsg: "Summary of Industrial or Electrical Goals",
      placeholderName: "E.g., John Smith",
      placeholderCompany: "E.g., Global Industrial Parts Ltd.",
      placeholderPhone: "E.g., +1 (555) 0199",
      placeholderEmail: "E.g., john.smith@company.com",
      placeholderMsg: "Please describe the general electrical or automated layout requirements of your machines, facility, or solar targets...",
      btnSubmit: "Submit Legal & Technical Call",
      btnSending: "Broadcasting request...",
      successTitle: "Industrial Inquiry Transmitted to Board!",
      successDesc: "Our senior electrical and automation team has been notified of your project goals. We will coordinate technical responses shortly.",
      errTitle: "Broadcast Unsuccessful",
      errDesc: "An error occurred while transmitting your request. Please try again.",
      mapBadge: "★ Physical Presence",
      mapTitle: "HQ Operacional & Engineering Center",
      mapDesc: "Meet our engineers or organize custom technical workshops in our HQ.",
      mapBtn: "Directions (Google Maps)",
    },
    footer: {
      copyright: "E-Projet Automation Systems Ltda. All rights reserved.",
      terms: "Terms of Service",
      privacy: "Privacy Statement",
      engineeringPower: "High-Performance Industrial Automation, Power Electrical, and Turnkey Engineering.",
      sectionsTitle: "Fast Navigation",
      contactBtnRoute: "Plan Route on Map",
    },
    whatsapp: {
      tooltip: "Emergency Technical Callout",
      messageText: "Hello E-Projet Engineering! I visited your website and am requesting electrical and automation services information.",
      tooltipTitle: "Standby Engineering",
      tooltipDesc: "Hello! Need technical support or want to request the scope of a new industrial project? Talk to our engineers now.",
    }
  },
  es: {
    header: {
      about: "Nosotros",
      services: "Servicios",
      differentials: "Diferenciales",
      portfolio: "Portafolio",
      cases: "Casos de Éxito",
      contact: "Contacto",
      cta: "Solicitar Proyecto",
      taglineMobile: "Sobre la Empresa",
    },
    hero: {
      badge: "Ingeniería y Automatización Industrial de Altoportento",
      titleLine1: "Automatización Industrial",
      titleLine2: "Inteligente",
      titleLine3: "para Empresas de",
      titleHighlight: "Alta Performance",
      subtext: "Sistemas inteligentes de automatización industrial, ingeniería eléctrica de potencia y soluciones turnkey completas para maximizar la productividad, garantizar un cumplimiento normativo riguroso y mitigar paradas operacionales con alta seguridad técnica.",
      ctaRequest: "Solicitar Proyecto",
      ctaServices: "Conocer Servicios",
      coverageTitle: "Presencia de Atención Urgente en:",
      locationSertaozinho: "📍 Sertãozinho (Polo Industrial)",
      locationRibeirao: "📍 Ribeirão Preto y Región",
      locationSaoPaulo: "📍 São Paulo y Área Metropolitana",
    },
    about: {
      badge: "Nosotros — Ingeniería de Cara al Futuro",
      title: "SOLUCIONES TURNKEY EN AUTOMATIZACIÓN E INGENIERÍA ELÉCTRICA CON ALCANCE GLOBAL",
      yearsText: "15+",
      yearsLabel: "Años de Ingeniería",
      paragraph1: "E-Projet es un referente en el desarrollo, integración y puesta en servicio de soluciones tecnológicas avanzadas en automatización industrial, ingeniería eléctrica de potencia y sistemas de energía. Gracias a una sólida base operativa en las regiones estratégicas de Sertãozinho y Ribeirão Preto, nuestra actuación rompe fronteras, modernizando plantas productivas y térmicas de gran envergadura en todo Brasil y América Latina.",
      paragraph2: "Contamos con un cuerpo técnico altamente calificado que une una teoría analítica rigurosa con una amplia experiencia práctica en campo. Nuestro compromiso va más allá de la simple entrega de proyectos: garantizamos la eficiencia, la seguridad y la continuidad operativa de sistemas eléctricos y automáticos complejos, desde la puesta en marcha hasta la operación continua.",
      coreValues: {
        strictTitle: "Cumplimiento Riguroso",
        strictDesc: "Todos nuestros proyectos eléctricos y mecánicos siguen religiosamente las normas técnicas aplicables, con enfoque total en NR-10 y NR-12.",
        techTitle: "Tecnología e Innovación",
        techDesc: "Trabajamos en asociación directa con los mayores fabricantes globales para entregar lo más moderno en hardware y controladores.",
        resultTitle: "Compromiso con los Resultados",
        resultDesc: "Medimos nuestro éxito por el aumento real de la productividad de nuestros clientes, minimizando las paradas no programadas y garantizando la máxima disponibilidad operativa en cualquier lugar del continente.",
      },
      processBadge: "Ingeniería de Ciclo Cerrado",
      processTitle: "Cómo Trabajamos",
      steps: {
        title01: "Ingeniería de Diagnóstico",
        desc01: "Auditoría técnica detallada de sistemas eléctricos, identificando cuellos de botella y oportunidades de optimización en la planta.",
        title02: "Ingeniería de Proyecto",
        desc02: "Desarrollo de proyectos conceptuales, básicos y ejecutivos en plataformas CAD/EPLAN, en total conformidad con las normas nacionales e internacionales.",
        title03: "Montaje y Puesta en Servicio",
        desc03: "Montaje de tableros, integración de sistemas y pruebas de puesta en marcha (commissioning) en campo con rigurosos protocolos de validación.",
        title04: "Soporte y Operación Continua",
        desc04: "Asistencia técnica especializada, soporte post-puesta en marcha y monitoreo predictivo para garantizar la máxima disponibilidad de los activos.",
      },
    },
    services: {
      badge: "Garantía de Ingeniería Multidisciplinaria",
      title: "Soluciones Industriales de Extremo a Extremo",
      description: "Combinamos una sólida experiencia práctica e ingeniería multidisciplinaria para entregar soluciones integradas del tipo Turnkey. Diseñamos, montamos, ponemos en servicio y sustentamos sistemas eléctricos y de automatización de alta complejidad, asegurando el máximo rendimiento y la absoluta conformidad normativa.",
      scopeLabel: "Alcance Técnico del Suministro:",
      clickPrompt: "Haga clic para ver el alcance técnico +",
      urgencyTitle: "¿Requiere homologación reglamentaria con urgencia?",
      urgencyText: "Emitimos informes oficiales de adecuación electromecánica (NR-10/NR-12) listos para inspecciones gubernamentales.",
      urgencyCTA: "Hablar con un Ingeniero",
      items: {
        automacao: {
          title: "Automatización Industrial",
          desc: "Desarrollo e integración de arquitecturas de automatización robustas, enfocadas en maximizar la eficiencia operativa, la seguridad y la continuidad de procesos industriales complejos.",
          details: [
            "Programación y configuración de PLCs y SDCDs de alta disponibilidad (Siemens, Rockwell, Schneider Electric)",
            "Desarrollo de sistemas supervisores SCADA e IHMs avanzadas (plantPAX, Elipse E3/Power, WinCC)",
            "Configuración de sistemas de instrumentación de campo y redes de control de procesos",
            "Arquitectura y diagnóstico de redes de comunicación industrial (Profinet, EtherNet/IP, Modbus, Profibus)"
          ]
        },
        eletrica: {
          title: "Ingeniería Eléctrica",
          desc: "Soluciones completas en ingeniería eléctrica de potencia, enfocadas en la máxima seguridad operativa, eficiencia energética y total conformidad normativa.",
          details: [
            "Proyectos de subestaciones de media y alta tensión (MT/AT), cabinas primarias y Greenfield/Brownfield",
            "Proyectos y dictámenes técnicos de SPDA y puesta a tierra industrial (en total conformidad con la norma ABNT NBR 5419)",
            "Estudios de cortocircuito, selectividad, coordinación de protecciones y ATPV (Energía Incidente - NR-10)",
            "Análisis de calidad de energía, corrección de factor de potencia y filtrado de armónicos"
          ]
        },
        projetos: {
          title: "Proyectos Industriales",
          desc: "Desarrollo de proyectos ejecutivos multidisciplinares y documentación técnica precisa para la implantación, ampliación y modernización de activos industriales.",
          details: [
            "Detalle electromecánico, dimensionamiento y diagramas de rutas de cables (charolas, tuberías y ductos)",
            "Laudos de adecuación y proyectos de ciclo y seguridad operativa (cumplimiento de normas NR-10 y NR-12)",
            "Modelado 3D inteligente y herramientas de Gemelos Digitales (Digital Twins) para la gestión de activos",
            "Levantamientos de campo y actualización de la documentación técnica (As-Built eléctrico, neumático y de servicios)"
          ]
        },
        solar: {
          title: "Energía Solar Fotovoltaica",
          desc: "Generación eléctrica limpia y renovable a gran escala para polígonos industriales y techos de galpones.",
          details: [
            "Cálculo aerodinámico, estructural y aprobación legal ante las principales redes de energía",
            "Montaje de inversores de alta potencia útiles para alimentar maquinarias robustas",
            "Proyectos de autogeneración solar aislados y conectados, de alto rendimiento técnico",
            "Telemetría remota inteligente de rendimiento energético y alertas de mantenimiento autónomo"
          ]
        },
        paineis: {
          title: "Tableros Eléctricos TTA/PTTA",
          desc: "Ingeniería, integración y montaje de conjuntos de maniobra y control certificados, diseñados para la máxima continuidad operativa bajo las condiciones industriales más severas.",
          details: [
            "Centros de Control de Motores convencionales e inteligentes (CCM / CCMI)",
            "Tableros de Distribución, Tableros Generables de Baja Tensión (QGBT) y celdas de media tensión (MT)",
            "Proyectos y montajes rigurosamente probados de acuerdo con la norma ABNT NBR IEC 61439-1/2",
            "Ensayos de rutina en fábrica: pruebas de aislamiento, continuidad del circuito de protección y parametrización/calibración de relés e interruptores"
          ]
        },
        datacenter: {
          title: "Infraestructura de Data Centers",
          desc: "Proyectos e implantación de entornos de misión crítica, enfocados en la máxima disponibilidad, rigurosa redundancia y seguridad física para el procesamiento de datos industriales.",
          details: [
            "Sistemas de energía ininterrumpida de alta confiabilidad (UPS/Nobreaks modulares y paralelos redundantes)",
            "Sistemas de climatización de precisión (CRAC) con control termo-higrométrico y redundancia activa",
            "Seguridad física y lógica: sistemas de control de acceso por biometría/RFID, monitoreo por CCTV IP y automatización de edificios (BMS)",
            "Topologías eléctricas de misión crítica alineadas con las certificaciones TIER III y TIER IV"
          ]
        },
        infra: {
          title: "Infraestructura Física Industrial",
          desc: "Servicios especializados de infraestructura eléctrica y montaje electromecánico de campo, garantizando la máxima robustez física y protección para los circuitos de potencia y control.",
          details: [
            "Montaje y fijación de sistemas de soporte: bandejas portacables pesadas, ductos, perfilados y canalizaciones subterráneas",
            "Tendido, identificación y conectividad de cables de potencia (MT/BT), señal de instrumentación y redes de fibra óptica",
            "Implantación de mallas de puesta a tierra equipotenciales y sistemas dedicados para instrumentación y automatización",
            "Montaje electromecánico completo de plantas industriales, complejos mineros y plantas de energía"
          ]
        },
        instrumentacao: {
          title: "Instrumentación y Lazo de Procesos",
          desc: "Sistemas avanzados de medición y control de variables analógicas y digitales de proceso, asegurando la máxima estabilidad, seguridad y repetibilidad operacional.",
          details: [
            "Especificación, instalación y calibración de transmisores de campo (presión, caudal, nivel, temperatura y analíticos)",
            "Desarrollo de sistemas de telemetría para monitoreo remoto y gestión de activos (pozos, depósitos y servicios auxiliares)",
            "Sintonización, optimización y puesta en servicio de lazos de control PID complejos en lazo cerrado",
            "Configuración y puesta en marcha de válvulas de control de alta precisión, posicionadores inteligentes y actuadores neumáticos"
          ]
        }
      }
    },
    differentials: {
      badge: "Beneficios de E-Projet",
      title: "La Ingeniería Tecnológica Detrás de la Industria 4.0",
      subtext: "Nuestras cifras constatan el objetivo principal: estructurar sistemas sostenibles altamente eficientes con un control exhaustivo de desperdicios y máxima confiabilidad física.",
      plantStatus: "● ESTADO DE PLANTA ACTIVO",
      reliabilityTitle: "Garantía de Operatividad",
      reliabilityDesc: "Nuestras soluciones mitigan riesgos operativos, minimizan paradas no programadas y eliminan pérdidas por ineficiencia energética o disconformidad normativa.",
      efficiencyLabel: "EFICIENCIA ENERGÉTICA PROMEDIO LOGRADA",
      complianceLabel: "ESTADO DE CUMPLIMIENTO EN SEGURIDAD",
      items: {
        projects: {
          metric: "+120",
          label: "Proyectos Realizados",
          desc: "Líneas de control operando establemente de norte a sur de la región."
        },
        experience: {
          metric: "+15",
          label: "Años de Ingeniería",
          desc: "Técnicos calificados comandando proyectos complejos en grandes multinacionales."
        },
        support: {
          metric: "24/7",
          label: "Soporte Técnico Especializado",
          desc: "Asistencia directa de emergencias eléctricas para mitigar detenciones forzadas."
        },
        tech: {
          metric: "100%",
          label: "Herramientas de Avanzada",
          desc: "Diseños auxiliados por simuladores digitales avanzados y componentes de marcas líderes."
        }
      }
    },
    portfolio: {
      badge: "Historias Reales de Ingeniería",
      title: "Casos de Éxito",
      subtext: "Navegue por nuestros principales estudios de caso y proyectos ejecutados en grandes complejos industriales y usinas, demostrando nuestra capacidad técnica y excelencia operacional en campo en toda América Latina.",
      emptyText: "No hay proyectos cargados actualmente para mostrar en esta categoría en particular.",
      viewBtn: "Ver Detalles del Caso",
      modalClient: "Cliente",
      modalLoc: "Ubicación",
      modalYear: "Año de Entrega",
      modalCTA: "Desarrollar Proyecto Similar",
      categories: {
        all: "Todos",
        automacao: "Automatización",
        eletrica: "Ingeniería Eléctrica",
        solar: "Energía Solar",
        datacenter: "Data Center",
        projetos: "Planos Industriales",
        paineis: "Comandos Eléctricos",
      },
      projects: {
        proj1: {
          title: "Infraestructura de MT — Planta de Bioenergía",
          desc: "Suministro turnkey de cubículos blindados de 17,8 kV tipo Metal-Clad con sistemas activos contra arco eléctrico (Arc Flash), pruebas dieléctricas y homologación.",
          client: "Gran Industria de Bioenergía y Granos",
          location: "Jaíba - MG, Brasil",
        },
        proj2: {
          title: "Eléctrica y Automatización — Casa de Fuerza Térmica",
          desc: "Implementación integrada de celdas de MT, PLC Siemens S7-1500, supervisores SCADA redundantes, reguladores automáticos de tensión ABB Unitrol y banco de baterías.",
          client: "Gran Productor de Madera y Papel",
          location: "Tunas do Paraná - PR, Brasil",
        },
        proj3: {
          title: "Automatización e Ingeniería — Termoeléctricas de 10 y 15 MW",
          desc: "Desarrollo de lógica fail-safe para turbogeneradores y calderas de cogeneración, sincronismo digital Woodward, certificación de enlaces ópticos y pruebas de campo.",
          client: "Grupo Metalúrgico Multinacional",
          location: "São Vicente - SP, Brasil",
        },
        proj4: {
          title: "Ingeniería Eléctrica Data Center TIER III",
          desc: "Implementación de redes eléctricas duales con enlaces coordinados a motogeneradores contra fallas de red, conmutadores ATS y protección con agente extintor FM-200.",
          client: "Servidores de Tecnología Digital",
          location: "São Paulo - SP, Brasil",
        },
        proj5: {
          title: "Blindaje de Seguridad NR-12 Prensa Hidráulica",
          desc: "Diagnósticos detallados iniciales, diseños mecánicos, barreras ópticas para proteger operarios, relés cableados en lazos dobles, coordinando homologaciones oficiales.",
          client: "Moldeados Plásticos & Inyecciones pesadas",
          location: "Sertãozinho - SP, Brasil",
        },
        proj6: {
          title: "Tablero General Distribución 2500A (QGD)",
          desc: "Montaje, pruebas y recubrimientos epóxicos de Tablero General de alto amperaje. Diseñado para resistir ambientes industriales abrasivos con interruptores dinámicos integrados.",
          client: "Industria Procesadora de Alimentos",
          location: "Ribeirão Preto - SP, Brasil",
        },
      }
    },
    contact: {
      badge: "Vías de Comunicación Corporativa",
      title: "Concrete su Proyecto Junto a E-Projet",
      subtitle: "Consulte a Nuestro Panel de Ingeniería",
      desc: "Rellene el pliego de solicitudes para que un responsable técnico evalúe sus requerimientos. Contestamos técnicamente en un lapso de 2 horas hábiles.",
      infoOffice: "Vía Operativa Principal",
      infoOfficeDesc: "Calle Mario Cunha Junior Nº 828 — Barrio Jd. Diamante, Sertaozinho SP, Brasil",
      infoCall: "Atención por Teléfono",
      infoEmail: "Buzón de Ingeniería",
      infoHours: "Días de Atención",
      infoHoursDays: "Lunes a Viernes — de 07:30 a 17:30 (Hora Regional UTC-3)",
      formTitle: "Solicitud de Análisis Técnico Comercial",
      labelName: "Su Nombre Completo",
      labelCompany: "Identificación de su Empresa",
      labelPhone: "Teléfono Empresarial con Código",
      labelEmail: "Correo Electrónico Laboral",
      labelMsg: "Breve Resumen de sus Necesidades Técnicas",
      placeholderName: "Ej: Alejandro Gómez",
      placeholderCompany: "Ej: Manufacturas Unidas de Sudamérica S/A",
      placeholderPhone: "Ej: +34 600 000 000",
      placeholderEmail: "Ej: alejandro.gomez@empresa.com",
      placeholderMsg: "Por favor detalle la envergadura del comando electromecánico, cantidad de inversores, automatismos o planos requeridos...",
      btnSubmit: "Transmitir Consulta a Ingeniería",
      btnSending: "Enviando mensaje técnico...",
      successTitle: "¡Inscripción Técnica Comercial Recibida!",
      successDesc: "Hemos registrado sus necesidades correctamente. Un perito en comando y automatismo procederá a realizar evaluaciones directas.",
      errTitle: "No se Pudo Enviar",
      errDesc: "Ocurrió un error al enviar su solicitud. Por favor intente nuevamente en unos minutos.",
      mapBadge: "★ Presencia Industrial Física",
      mapTitle: "Sede de Comando de Ingeniería",
      mapDesc: "Agende visitas o asista a demostraciones técnicas privadas de equipos en nuestra sede.",
      mapBtn: "Direcciones en Google Maps",
    },
    footer: {
      copyright: "E-Projet Sistemas de Automação Ltda. Todos los derechos reservados.",
      terms: "Términos de Uso",
      privacy: "Políticas de Privacidad",
      engineeringPower: "Ingeniería de Automatización, Electricidad de Potencia y Proyectos Industriales Turnkey.",
      sectionsTitle: "Acceso Directo",
      contactBtnRoute: "Planificar Ruta en Mapa",
    },
    whatsapp: {
      tooltip: "Llamada de Emergencia de Planta",
      messageText: "Hola E-Projet Ingeniería! Visité su sitio web y me gustaría programar una evaluación técnica para proyectos de comandos y automatizaciones.",
      tooltipTitle: "Guardia de Ingeniería",
      tooltipDesc: "¡Hola! ¿Necesita soporte técnico o desea solicitar el alcance de un nuevo proyecto industrial? Hable con nuestros ingenieros ahora.",
    }
  }
};
