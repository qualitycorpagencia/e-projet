import { ServiceCard, DifferentialItem, PortfolioProject } from "./types";

export const SERVICES_DATA: ServiceCard[] = [
  {
    id: "automacao-industrial",
    title: "Automação Industrial",
    description: "Desenvolvimento e integração de arquiteturas de automação robustas, focadas em maximizar a eficiência operacional, segurança e a continuidade de processos industriais complexos.",
    iconName: "Cpu",
    imageUrl: "/automacao-industrial.jpg",
    details: [
      "Programação e configuração de CLPs e SDCDs de alta disponibilidade (Siemens, Rockwell, Schneider Electric)",
      "Desenvolvimento de sistemas supervisórios e IHMs avançadas (plantPAX, Elipse E3/Power, WinCC)",
      "Sistemas de instrumentação de campo e redes de controle de processos",
      "Arquitetura e diagnóstico de redes de comunicação industrial (Profinet, EtherNet/IP, Modbus, Profibus)"
    ]
  },
  {
    id: "engenharia-eletrica",
    title: "Engenharia Elétrica",
    description: "Soluções completas em engenharia elétrica de potência, focadas na máxima segurança operacional, eficiência energética e total conformidade normativa.",
    iconName: "Zap",
    imageUrl: "https://lh3.googleusercontent.com/d/1JffDMATT9aiTXFuE4-whz3o5rcUxDVPK",
    details: [
      "Projetos de subestações de média e alta tensão (MT/AT), cabines primárias e Greenfield/Brownfield",
      "Projetos e laudos de SPDA e aterramento industrial (em total conformidade com a ABNT NBR 5419)",
      "Estudos de curto-circuito, seletividade, coordenação de proteção e ATPV (Energia Incidente - NR-10)",
      "Análise de qualidade de energia, correção de fator de potência e filtragem de harmônicos"
    ]
  },
  {
    id: "projetos-industriais",
    title: "Projetos Industriais",
    description: "Desenvolvimento de projetos executivos multidisciplinares e documentação técnica precisa para implantação, ampliação e modernização de ativos industriais.",
    iconName: "FileText",
    imageUrl: "/projetos-industriais.jpg",
    details: [
      "Detalhamento eletromecânico, dimensionamento e diagramas de rotas de cabos (leitos, canaletas e eletrodutos)",
      "Laudos de adequação e projetos de engenharia focados em segurança operacional (NR-10 e NR-12)",
      "Modelagem 3D inteligente e conceitos de Gêmeos Digitais (Digital Twins) para gestão de ativos",
      "Levantamento de campo e atualização de documentação técnica (As-Built elétrico, pneumático e de utilidades)"
    ]
  },
  {
    id: "energia-solar",
    title: "Energia Solar Fotovoltaica",
    description: "Soluções completas de geração centralizada e distribuída de energia solar, focadas na redução de custos operacionais e na sustentabilidade de grandes plantas industriais.",
    iconName: "Sun",
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800",
    details: [
      "Estudos de viabilidade, dimensionamento e homologação de projetos junto às principais concessionárias de energia",
      "Integração de inversores centrais de alta potência e sistemas com rastreadores solares (trackers)",
      "Projetos de sistemas conectados à rede (On-Grid), sistemas isolados (Off-Grid) e plantas de minigeração distribuída",
      "Sistemas de telemetria para monitoramento em tempo real da geração, análise de eficiência e manutenção predictiva"
    ]
  },
  {
    id: "paineis-eletricos",
    title: "Painéis Elétricos TTA/PTTA",
    description: "Engenharia, integração e montagem de conjuntos de manobra e controle certificados, projetados para máxima continuidade operacional sob as condições industriais mais severas.",
    iconName: "Sliders",
    imageUrl: "https://lh3.googleusercontent.com/d/1ivz6LWalEpBF9e8fNA2-Xnz0O_sLH9Ol",
    details: [
      "Centros de Controle de Motores convencionais e inteligentes (CCM / CCMI)",
      "Painéis de Distribuição, Quadros Gerais de Baixa Tensão (QGBT) e cubículos de média tensão (MT)",
      "Projetos e montagens rigorosamente testados em conformidade com a norma ABNT NBR IEC 61439-1/2",
      "Ensaios de rotina em fábrica: testes de isolação, continuidade do circuito de proteção e parametrização/calibração de relés e disjuntores"
    ]
  },
  {
    id: "data-center",
    title: "Infraestrutura de Data Center",
    description: "Projetos e implantação de ambientes de missão crítica, focados em máxima disponibilidade, redundância rígida e segurança física para o processamento de dados industriais.",
    iconName: "Server",
    imageUrl: "/data-center.jpg",
    details: [
      "Sistemas de energia ininterrupta de alta confiabilidade (UPS/Nobreaks modulares e paralelos redundantes)",
      "Sistemas de climatização de precisão (CRAC) com controle termo-higrométrico e redundância ativa",
      "Segurança física e lógica: sistemas de controle de acesso por biometria/RFID, monitoramento por CFTV IP e automação predial (BMS)",
      "Topologias elétricas de missão crítica alinhadas às certificações TIER III e TIER IV"
    ]
  },
  {
    id: "infraestrutura-industrial",
    title: "Infraestrutura Industrial",
    description: "Serviços especializados de infraestrutura elétrica e montagem eletromecânica de campo, garantindo máxima robustez física e proteção para os circuitos de potência e controle.",
    iconName: "Layers",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800",
    details: [
      "Montagem e fixação de sistemas de sustentação: leitos pesados, eletrocalhas, perfilados e dutos subterrâneos",
      "Lançamento, identificação e conectividade de cabos de potência (MT/BT), sinal de instrumentação e redes de fibra óptica",
      "Implantação de malhas de aterramento equipotenciais e sistemas dedicados para instrumentação e automação",
      "Montagem eletromecânica completa de plantas industriais, complexos de mineração e plantas de energia"
    ]
  },
  {
    id: "instrumentacao-controle",
    title: "Instrumentação e Controle",
    description: "Sistemas avançados de medição e controle de variáveis analógicas e digitais de processo, assegurando máxima estabilidade, segurança e repetibilidade operacional.",
    iconName: "Activity",
    imageUrl: "https://lh3.googleusercontent.com/d/1dS10LJR96DL8p6V_OwVscvpl-LMCABlr",
    details: [
      "Especificação, instalação e calibração de transmissores de campo (pressão, vazão, nível, temperatura e analíticos)",
      "Desenvolvimento de sistemas de telemetria para monitoramento remoto e gestão de ativos (poços, reservatórios e utilidades)",
      "Sintonização, otimização e comissionamento de malhas de controle PID complexas em malha fechada",
      "Configuração e startup de válvulas de controle de alta precisão, posicionadores inteligentes e atuadores pneumáticos"
    ]
  }
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    id: "projetos",
    metric: "+120",
    label: "Projetos Entregues",
    description: "Sistemas complexos operando com máxima eficiência em plantas estratégicas por todo o Brasil e América Latina."
  },
  {
    id: "experiencia",
    metric: "+15",
    label: "Anos de Engenharia",
    description: "Corpo técnico altamente qualificado liderando engenharia, montagem e comissionamento de projetos complexos em indústrias de base e plantas de energia."
  },
  {
    id: "suporte",
    metric: "24/7",
    label: "Suporte Técnico",
    description: "Atendimento prioritário e de emergência estruturado para mitigar riscos e garantir a máxima disponibilidade operacional dos ativos de nossos clientes."
  },
  {
    id: "tecnologia",
    metric: "100%",
    label: "Tecnologia de Ponta",
    description: "Uso de plataformas analíticas avançadas e sólidas parcerias com os maiores fabricantes globais de hardware e software do mercado industrial."
  }
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: "proj-1",
    title: "Infraestrutura MT — Planta de Bioenergia",
    category: "Engenharia Elétrica",
    imageUrl: "https://lh3.googleusercontent.com/d/1e_ypqmhhcyTneFRgkCJHOGyxZHz0pVNU",
    description: "Fornecimento turnkey de cubículos blindados de 17,8 kV com tecnologia Metal-Clad, proteção ativa contra arco elétrico (Arc Flash), testes de rotina e homologação nas normas.",
    client: "Grande Indústria de Bioenergia e Grãos",
    location: "Jaíba - MG",
    year: "2025"
  },
  {
    id: "proj-2",
    title: "Elétrica e Automação — Casa de Força Termelétrica",
    category: "Automação Industrial",
    imageUrl: "https://lh3.googleusercontent.com/d/18Y4Z0GptbQzIREXaUJdXlJbtykfneVyc",
    description: "Implantação integrada com cubículos de MT, CLP Siemens S7-1500, supervisório espelhado redundante, AVR ABB Unitrol, retificadores 125 Vcc com banco de baterias e montagem em campo.",
    client: "Grande Produtor de Papel e Madeira",
    location: "Tunas do Paraná - PR",
    year: "2024"
  },
  {
    id: "proj-3",
    title: "Automação e Engenharia — Termoelétricas de 10 e 15 MW",
    category: "Projetos Industriais",
    imageUrl: "https://lh3.googleusercontent.com/d/1pSKQLumXgwy5HdPza-ZO3HxR1_yE_I9r",
    description: "Desenvolvimento de inteligência lógica fail-safe (segurança contra falhas) para controle de turbo-geradores e caldeiras, sincronismo Woodward, diagnósticos ópticos e testes TAF/TAC.",
    client: "Grupo Metalúrgico Multinacional",
    location: "São Vicente - SP",
    year: "2025"
  }
];
