export interface CaseStudy {
  id: string;
  title: string;
  badge: string;
  location: string;
  status: string;
  challenge: string;
  solutionIntro: string;
  solutionDetails: string[];
  result: string;
  imageUrl: string;
  category: string;
  client?: string;
  year?: string;
}

export const CASES_DATA: Record<"pt" | "en" | "es", CaseStudy[]> = {
  pt: [
    {
      id: "case-1",
      title: "Infraestrutura Elétrica e Comissionamento de Média Tensão para Nova Planta de Bioenergia",
      badge: "Estudo de Caso 01",
      location: "Jaíba, Minas Gerais",
      status: "Concluído dentro do prazo regulamentar e com conformidade normativa absoluta",
      challenge: "Uma grande indústria do setor de bioenergia e agricultura necessitava implantar a infraestrutura elétrica de potência e os sistemas de manobra para a sua nova planta industrial de processamento de milho, exigindo equipamentos de alta confiabilidade operacional capazes de suportar severos níveis de curto-circuito.",
      solutionIntro: "A E-Projet desenvolveu o projeto executivo eletromecânico e assumiu o fornecimento completo turnkey dos sistemas de distribuição de média tensão da planta:",
      solutionDetails: [
        "Cubículos de Média Tensão (17,8 kV / 31,5 kA): Fornecimento de 5 cubículos blindados com chaparia certificada e tecnologia Metal-Clad, incluindo um cubículo dedicado exclusivamente para à alimentação do gerador diesel de emergência.",
        "Segurança Ativa Avançada: Integração de sistemas digitais microprocessados com proteção contra arco elétrico (Arc Flash) de base pontual e relés de proteção inteligentes com comunicação nativa TCP/IP.",
        "Montagem e Integração de Campo: Engenharia de acoplamento com barramentos e dutos de intersecção entre os cubículos novos e os sistemas existentes da usina.",
        "Serviços Especializados: Logística interna complexa (transporte, içamento e posicionamento dos painéis), confecção de muflas e execução de rigorosos testes de rotina em fábrica (ensaios de isolamento, integridade e calibração de disjuntores).",
        "Startup e Engenharia Legal: Comissionamento completo em campo com entrega de documentação As-Built e emissão da respectiva ART (Anotação de Responsabilidade Técnica)."
      ],
      result: "O projeto foi entregue e integrado com sucesso, cumprindo rigorosamente o cronograma estabelecido com a janela de parada da planta. Todas as instalações foram homologadas seguindo as últimas edições das normas nacionais e internacionais de segurança (como a ABNT NBR IEC 62271-200 e NR-10), garantindo à unidade industrial máxima continuidade operativa e proteção patrimonial.",
      imageUrl: "https://lh3.googleusercontent.com/d/1e_ypqmhhcyTneFRgkCJHOGyxZHz0pVNU",
      category: "Engenharia Elétrica",
      client: "Grande Indústria de Bioenergia e Grãos",
      year: "2025"
    },
    {
      id: "case-2",
      title: "Solução Turnkey de Elétrica e Automação para Nova Casa de Força e Termoelétrica",
      badge: "Estudo de Caso 02",
      location: "Tunas do Paraná, Paraná",
      status: "Concluído dentro do prazo acordado e com conformidade normativa absoluta",
      challenge: "Uma indústria de grande porte do segmento madeireiro demandava a implantação completa do sistema elétrico e de automação para a sua nova Casa de Força e planta termoelétrica (Caldeira e Turbina), necessitando de uma integradora multidisciplinar que assumisse desde o projeto conceitual até a montagem física e o startup definitivo dos ativos de cogeração.",
      solutionIntro: "A E-Projet executou o fornecimento integrado de engenharia, painéis, gerenciamento e infraestrutura de campo para o complexo de geração:",
      solutionDetails: [
        "Distribuição e Média Tensão (17,5 kV): Fornecimento de cubículos de média tensão em conformidade com a norma IEC 62271-200 (Entrada da Concessionária, Cubículo do Gerador e Despacho da Caldeira), incluindo cubículos dedicados de proteção de surto e fechamento de neutro do gerador.",
        "Sistemas de Automação Avançada: Integração de Painel de Controle principal equipado com CLP de alta performance da linha Siemens S7-1500 e Interfaces Homem-Máquina (IHMs) Touchscreen de 10 polegadas.",
        "Sistemas Supervisórios Redundantes: Desenvolvimento e configuração de licenças de supervisório espelhadas em servidores redundantes para a operação unificada das áreas da Caldeira, Turbina e utilidades de suporte (Torres e Tratamento de Água).",
        "Controle de Geração e Proteção: Fornecimento e parametrização de Painel AVR equipado com regulador automático de tensão de última geração (tecnologia ABB Unitrol) e integração de relés de proteção de gerador dedicados (Schweitzer SEL-700G1).",
        "Sustentação Elétrica e Baixa Tensão: Fornecimento de banco de baterias industriais com retificador de 125 Vcc, Quadros de Distribuição de Corrente Contínua e Alternada (QDCC/QDCA), Centros de Controle de Motores (CCMs) e coluna automática para correção do fator de potência de 400 kVAr.",
        "Infraestrutura e Montagem de Campo: Implantação completa da malha de aterramento e SPDA (ABNT NBR 5410 / NBR 14039), montagem eletromecânica de leitos pesados e eletrodutos galvanizados, lançamento e identificação de cabos de potência e instrumentação blindada, além de calibração em malha fechada dos instrumentos de processo.",
        "Ensaios Técnicos e Engenharia Consultiva: Realização de estudos de curto-circuito, coordenação e seletividade da térmica, testes de ensaios dielétricos (Hipot), certificação óptica por OTDR e diagnóstico físico/lógico das redes de comunicação industrial Modbus/Profinet."
      ],
      result: "Com a mobilização de um canteiro de obras estruturado com laboratório metrológico e equipes de engenharia em tempo integral, o projeto foi concluído respeitando rigidamente o plano de qualidade e o cronograma do cliente. A entrega foi oficializada sem pendências através do fornecimento do Data-Book técnico com os projetos atualizados em formato As-Built e a respectiva emissão de ART, assegurando à planta termoelétrica máxima eficiência na cogeração de energia e total segurança operativa.",
      imageUrl: "https://lh3.googleusercontent.com/d/18Y4Z0GptbQzIREXaUJdXlJbtykfneVyc",
      category: "Automação Industrial",
      client: "Grande Produtor de Papel e Madeira",
      year: "2024"
    },
    {
      id: "case-3",
      title: "Engenharia de Integração, Automação e Comissionamento para Usinas Termoelétricas de 10 MW e 15 MW",
      badge: "Estudo de Caso 03",
      location: "São Vicente, São Paulo",
      status: "Concluído dentro do prazo regulamentar e com estrita conformidade normativa",
      challenge: "Um grande grupo industrial metalúrgico necessitava integrar os sistemas de controle e sincronismo de duas usinas termoelétricas de cogeração (de 10 MW e 15 MW). O projeto exigia a centralização das lógicas operacionais de turbo-geradores e caldeiras sob uma arquitetura de alta confiabilidade e com o conceito rigoroso de falha segura (fail-safe).",
      solutionIntro: "A E-Projet assumiu a inteligência do projeto, responsabilizando-se pelo desenvolvimento completo da engenharia de sistemas, softwares de controle e procedimentos de teste:",
      solutionDetails: [
        "Engenharia de Detalhamento Multidisciplinar: Elaboração de diagramas trifilares e de comando para os painéis elétricos, diagramas de interligação de campo, listas de redes, arquiteturas lógicas e modelagem de intertravamentos complexos de segurança da planta.",
        "Filosofia de Controle e Automação: Desenvolvimento e parametrização de lógicas de controle avançadas para Controladores Lógicos Programáveis (CLPs) baseados na norma IEC 61131, garantindo imunidade total contra interferências eletromecânicas e de radiofrequência (EMI-RFI) nos sinais de campo.",
        "Controle de Turbina e Sincronismo: Integração e programação de reguladores eletrônicos de turbina (padrão Woodward) e sistemas digitais de sincronismo automático em conformidade com as exigências técnicas dos geradores.",
        "Interface de Operação Redundante: Criação e configuração de telas dinâmicas para sistema supervisório industrial centralizado, estruturado para rodar de forma distribuída em servidores principais e estações de engenharia.",
        "Rigor em Redes e Diagnósticos: Execução de ensaios lógicos na rede de comunicação Modbus TCP, incluindo auditoria física de sinal e emissão de laudos técnicos de certificação de redes metálicas e enlaces de fibra óptica (via tecnologia OTDR/Etherscope).",
        "Ensaios de Fábrica e Campo: Realização de Testes de Aceitação em Fábrica (TAF) estruturados — com ensaios funcionais de comando, medições de resistência ôhmica e isolação (Megger) — e posterior comissionamento em campo, totalizando um cronograma dedicado de 30 dias de comissionamento e 15 dias de operação assistida pós-startup.",
        "Engenharia Legal e Treinamento: Capacitação técnica e operacional das equipes de engenharia e manutenção do cliente, entrega do Data-Book finalizado no formato As-Built e homologação do projeto sob as diretrizes da NR-10 com emissão da ART."
      ],
      result: "A arquitetura proposta foi implantada com sucesso, assegurando que, na iminência de qualquer anomalia de processo, a lógica de segurança de falha segura entrasse em ação instantaneamente para proteger os ativos e os operadores. Os prazos e as janelas operacionais de parada da usina foram rigorosamente respeitados, resultando em um sistema de cogeração altamente estável, eficiente e aderente aos mais altos padrões de qualidade técnica do setor elétrico.",
      imageUrl: "https://lh3.googleusercontent.com/d/1pSKQLumXgwy5HdPza-ZO3HxR1_yE_I9r",
      category: "Projetos Industriais",
      client: "Grupo Metalúrgico Multinacional",
      year: "2025"
    },
    {
      id: "case-4",
      title: "Engenharia Chave na Mão, Infraestrutura de Média Tensão e Sistemas de Sincronismo para Complexo Agroindustrial (Ethanol de Milho)",
      badge: "Estudo de Caso 04",
      location: "Paraguai (Operação Internacional)",
      status: "Concluído dentro do cronograma macro e com conformidade técnica absoluta",
      challenge: "Um grande complexo agroindustrial demandava o desenvolvimento de engenharia, o fornecimento de equipamentos de potência e a execução de serviços especializados para a implantação completa de sua Casa de Força e sistemas de cogeração. O desafio central consistia em estruturar uma rede robusta de distribuição em média tensão e implementar um sistema inteligente de controle de carga capaz de operar em múltiplos cenários de paralelismo elétrico com segurança e estabilidade contínua.",
      solutionIntro: "A E-Projet assumiu o escopo integrado em regime de gerenciamento e montagem especializada de campo:",
      solutionDetails: [
        "Robustez em Média Tensão (17,5 kV / 23 kV): Fornecimento de 11 cubículos de média tensão em invólucros metálicos (blindagem Metal-Clad categoria LSC2B-PM) projetados para classe de 17,5 kV com corrente de 1250 A e suportabilidade a curto-circuito de 31,5 kA. O arranjo incluiu cubículos dedicados para entrada/medição, saída do gerador, transformador zigue-zague e despacho para múltiplas áreas fabris (Caldeira, Destilaria, Fermentação, Secagem e Utilidades), além de cubículo de medição na classe de 23 kV e 6 cubículos de seccionamento (PNSEC).",
        "Controle, Excitação e Sincronismo Avançado (PCS): Implantação do Painel de Sincronismo equipado com os mais avançados dispositivos de mercado, incluindo controladores automáticos de carga ativa e reativa (Woodward DSLC-2-5 e MSLC-2-5). O sistema foi projetado para gerenciar com segurança três cenários críticos de operação: alimentação exclusiva pela concessionária (ANDE), geração isolada, ou operação em paralelo simultâneo entre a concessionária e o turbo-gerador principal.",
        "Modernização e Engenharia de Proteção: Execução de retrofit completo no painel de controle e proteção do turbo-gerador, utilizando Controladores Lógicos Programáveis (CLPs) com redundância de energia segura, regulador eletrônico de velocidade, sistema de proteção contra sobrevelocidade e relés microprocessados de proteção de gerador (Schweitzer SEL-751/851 e SEL-700G).",
        "Distribuição Elétrica Contínua: Fornecimento de Quadros Auxiliares de Baixa Tensão (QDCA) e Quadros de Distribuição de Corrente Contínua (QDCC) alimentados por dois sistemas retificadores/carregadores tiristorizados microcontrolados de 125 Vcc associados a bancos de baterias estacionárias seladas do tipo VRLA-AGM.",
        "Fornecimento de Subestações de Potência: Gerenciamento técnico e fornecimento de 8 transformadores trifásicos a seco encapsulados em resina epóxi a vácuo de 2000 kVA (classe de 15 kV com monitoramento térmico por sensores), 1 transformador trifásico de aterramento Zigue-Zague de 300 kVA e 1 transformador externo a óleo mineral de 3750 kVA para acoplamento na classe de 23,1 kV / 13,8 kV.",
        "Instalação, Testes e Ensaios Especiais: Montagem eletromecânica de campo completa, parametrização integral de todos os relés e IHMs, lançamento e interligação de cabos de força, comando e controle, segregação de circuitos e redes Ethernet/IP administradas. O plano de comissionamento incluiu a execução de ensaios severos de isolação (Megger), testes de rigidez dielétrica (Hipot), testes funcionais de intertravamento, imposição de carga, subfrequência/sobrefrequência e ensaios de curto-circuito do gerador com rejeição e descarte automático de cargas."
      ],
      result: "A e-projet ativou um canteiro de obras de alta eficiência operacional gerenciado por engenheiros residentes e técnicos de segurança em regime integral. O sistema foi comissionado e colocado em operação com absoluto sucesso, garantindo a validação total das telas de processo e lógicas de automação antes do startup final. O encerramento do projeto deu-se com a entrega do Data-Book corporativo consolidado, incluindo os diagramas executivos atualizados em formato As-Built (.dwg) e a emissão das respectivas ARTs, fornecendo ao complexo agroindustrial uma das plantas de geração e distribuição de energia mais seguras e tecnológicas da região.",
      imageUrl: "https://lh3.googleusercontent.com/d/1SR60KJobcAJMH5c-_InEqBbikeXF18ca",
      category: "Painéis Elétricos",
      client: "Agroindustrial Paraguai S/A",
      year: "2024"
    },
    {
      id: "case-5",
      title: "Integração de Sistemas, Engenharia de Controle e Fornecimento de Painéis para Planta Térmica de 7 MW",
      badge: "Estudo de Caso 05",
      location: "Divinópolis, Minas Gerais",
      status: "Concluído dentro do cronograma estabelecido e com estrita conformidade normativa",
      challenge: "Uma indústria de grande porte necessitava implantar os sistemas elétricos e de automação para uma nova planta termoelétrica de 7 MW. O projeto exigia uma integradora técnica especializada que assumisse a responsabilidade pelo fornecimento dos conjuntos de manobra, engenharia de software e proteção do turbo-gerador, garantindo alto desempenho sob rígidos conceitos de segurança operacional e de falha segura (fail-safe).",
      solutionIntro: "A E-Projet executou o fornecimento completo de hardware e software industrial, assumindo a inteligência técnica e a coordenação das instalações elétricas de campo:",
      solutionDetails: [
        "Distribuição e Média Tensão (MT): Fornecimento de conjuntos funcionais certificados para operação abrigada, abrangendo o Cubículo de Entrada da Concessionária, Cubículo de Entrada do Gerador, Cubículo de Despacho da Casa de Força e Caldeira, além dos painéis dedicados de neutro e surto do gerador.",
        "Controle de Geração e Proteção: Fornecimento e comissionamento do Painel de Proteção e Controle do Turbo-Gerador integrado ao Painel de Excitação e ao sistema de partida da bomba de Corrente Contínua (CC).",
        "Infraestrutura em Baixa Tensão: Fornecimento do Centro de Controle de Motores (CCM) da Casa de Força e da Caldeira, Painel de Controle da Caldeira, além do retificador industrial associado ao banco de baterias estacionárias para alimentação de emergência.",
        "Engenharia de Automação e Sistemas: Desenvolvimento de lógicas avançadas de controle e intertravamento para Controladores Lógicos Programáveis (CLPs) baseados na norma IEC 61131, além da modelagem e configuração das telas dinâmicas do software supervisório de processo.",
        "Estudos Elétricos e Ensaios Técnicos: Elaboração de estudos analíticos de curto-circuito e seletividade da planta, testes de rigidez dielétrica (Hipot), medições de isolamento e ensaios funcionais completos executados em Teste de Aceitação em Fábrica (TAF).",
        "Comissionamento e Startup Especializado: Execução de cronograma dedicado em campo totalizando 150 horas de comissionamento técnico e 80 horas de startup, cobrindo a parametrização e calibração de todos os instrumentos, inversores de frequência e sistemas de proteção da turbina.",
        "Capacitação e Data-Book: Fornecimento de treinamentos operacionais e de engenharia para a equipe de manutenção do cliente, entrega de toda a documentação revisada em formato executivo As-Built (.dwg) e emissão de ART com taxas inclusas perante o CREA."
      ],
      result: "A solução foi integrada e comissionada com absoluto sucesso, operando com total imunidade a interferências eletromagnéticas (EMI-RFI) no chão de fábrica. O projeto cumpriu rigorosamente as normas regulamentadoras de segurança elétrica e baixa/média tensão (NR-10, ABNT NBR 5410 e NBR 14039), entregando ao cliente uma planta térmica altamente eficiente, estável e autossuficiente.",
      imageUrl: "https://lh3.googleusercontent.com/d/10TSOlBEiTa7_VHtYCtxc66Q9rN-67WnS",
      category: "Automação Industrial",
      client: "Siderúrgica Industrial Centro-Oeste",
      year: "2025"
    },
    {
      id: "case-6",
      title: "Engenharia de Sistemas, Integração em Rede Ethernet e Automação Centralizada (COI) para Planta de Bioenergia",
      badge: "Estudo de Caso 06",
      location: "Montes Claros de Goiás, Goiás",
      status: "Concluído dentro do prazo estipulado e com alta conformidade técnica",
      challenge: "Uma planta industrial de bioenergia de grande porte demandava a centralização operacional de suas diversas áreas de processo sob um único Centro de Operações Integradas (COI). O projeto exigia o processamento em tempo real de um volume massivo de variáveis físicas analógicas e digitais espelhadas por setores complexos, requerendo uma arquitetura de rede industrial de alta velocidade, imune a interferências e estruturada sob rígidos critérios de segurança de falha segura (fail-safe).",
      solutionIntro: "A E-Projet assumiu o desenvolvimento integral da inteligência de controle, o fornecimento de painéis de processamento e a infraestrutura lógica de dados da planta:",
      solutionDetails: [
        "Arquitetura de Controle Centralizada (COI): Configuração e integração de uma infraestrutura robusta para servidores SCADA (padrão Dell PowerEdge com licenças redundantes) operando de maneira espelhada para alimentar 8 estações clientes (Clients) e 1 máquina dedicada de engenharia.",
        "Processamento de Alta Performance (+900 Pontos): Desenvolvimento e parametrização de lógicas para Controladores Lógicos Programáveis (CLPs) da linha Rockwell Automation ControlLogix, gerenciando de forma unificada uma lista complexa de 946 pontos de entrada e saída físicos (I/O) e inversores conectados por rede.",
        "Automação de Processos Multidisciplinares: Integração e controle em malha fechada de variáveis críticas de 6 grandes áreas agroindustriais: Difusor e Moenda (acionamentos, intertravamento), Tratamento de Caldo (termo-controle), Fermentação Continuada (10 dornas com Brix/temperatura), Destilaria e Caldeiras (colunas e ventiladores), e Utilidades (captação, ETA, radares).",
        "Infraestrutura Lógica e Fusão de Fibra Óptica: Montagem de gabinetes estruturados padrão Rack 19\" e execução de serviços especializados de conectorização e fusão de fibra óptica para interligar os painéis de remota de campo ao COI. A malha foi estruturada em anel óptico de alta disponibilidade através de switches gerenciáveis e protocolo Ethernet/IP.",
        "Ensaios Técnicos e Homologação: Execução de Testes de Aceitação em Fábrica (TAF) estruturados, auditoria com emissão de laudos de certificação de redes metálicas e ópticas (via OTDR/Etherscope) e cumprimento de um cronograma rigoroso em campo totalizando 1.900 horas dedicadas entre comissionamento, startup e operação assistida.",
        "Engenharia Legal e Capacitação: Treinamento especializado (nivel operacional e engenharia) para o corpo técnico do cliente, entrega de Data-Book corporativo completo com os diagramas elétricos revisados em formato As-Built e validação sob as normas NBR 5410, NBR 14039 e NR-10 com emissão de ART."
      ],
      result: "A nova Casa de Controle e os sistemas de campo foram integrados com sucesso absoluto, respeitando rigorosamente a janela de transição e o cronograma macro da indústria. A unificação das dornas, difusor e utilidades no COI permitiu à planta otimizar o brix, estabilizar as pressões de vapor e mitigar paradas não programadas por meio de uma operação 100% digital, segura e com rastreabilidade total de dados.",
      imageUrl: "https://lh3.googleusercontent.com/d/1alrEiirHqZdFATmDN9hw0GQr8QaRS1_E",
      category: "Projetos Industriais",
      client: "Usinas de Bioenergia do Centro-Oeste S/A",
      year: "2024"
    }
  ],
  en: [
    {
      id: "case-1",
      title: "Electrical Infrastructure and Medium Voltage Commissioning for a New Bioenergy Plant",
      badge: "Case Study 01",
      location: "Jaíba, Minas Gerais, Brazil",
      status: "Completed within the regulatory term with absolute regulatory compliance",
      challenge: "A major bioenergy and agriculture industry needed to implement high-power electrical infrastructure and switchgear systems for its new corn-processing industrial plant, requiring highly reliable assets capable of withstanding severe short-circuit currents.",
      solutionIntro: "E-Projet developed the executive electromechanical designs and assumed the full turnkey supply of the plant's medium voltage distribution networks:",
      solutionDetails: [
        "Medium Voltage Switchgear (17.8 kV / 31.5 kA): Supplied 5 metal-clad certified panels, including an exclusive panel to back up the emergency diesel cogeneration generators.",
        "Advanced Active Safety: Integrated digital microprocessed systems featuring localized Arc Flash fiber-optic protection and smart protection relays with native TCP/IP protocols.",
        "Field Assembly and Coupling: Integrated busbars and connecting ducts to seamlessly link new switchgear modules with the mill's active plant infrastructure.",
        "Specialized Services: Handled complex internal logistics, structural hauling, factory validation testing (megger, insulation levels, and circuit breaker calibrations).",
        "Start-up & Legal Engineering: Delivered complete site commissioning, custom As-Built technical booklets, and official legal engineering licenses (ART)."
      ],
      result: "The project was integrated right on track during scheduled plant shutdowns. All substations and layouts complied with international and Brazilian safety codes (such as ABNT NBR IEC 62271-200 and NR-10), protecting assets and ensuring maximum uptime.",
      imageUrl: "https://lh3.googleusercontent.com/d/1e_ypqmhhcyTneFRgkCJHOGyxZHz0pVNU",
      category: "Electrical Engineering",
      client: "Major bioenergy and grains processor",
      year: "2025"
    },
    {
      id: "case-2",
      title: "Electrical and Automation Turnkey Integration for a Powerhouse & Thermoelectric Unit",
      badge: "Case Study 02",
      location: "Tunas do Paraná, Paraná, Brazil",
      status: "Completed within schedule and absolute technical compliance",
      challenge: "A leading timber and laminates manufacturer required complete electrical and industrial controls automation for its new cogeneration Powerhouse (boilers and steam turbine), seeking a multidisciplinary integrator to drive engineering designs, board fabrication, and on-site startup.",
      solutionIntro: "E-Projet successfully delivered integrated turnkey systems spanning technical planning, panels, field operations, and installation:",
      solutionDetails: [
        "Medium Voltage Switchgear (17.5 kV): Implemented certified boards meeting IEC 62271-200 frameworks, including localized surge arresters and generator neutral grounding cubs.",
        "Advanced Automation Cabinets: Integrated a centralized PLC console utilizing Siemens S7-1500 controllers and 10-inch tactile wide-screen Operator Interfaces (HMIs).",
        "Redundant SCADA Engineering: Configured centralized control servers utilizing redundant configurations to coordinate Boilers, Turbines, and water cooling resources.",
        "Generator Automatic Protection (AVR): Deployed automated voltage regulators (ABB Unitrol) integrated with dedicated Schweitzer SEL-700G1 generator protection units.",
        "Battery Bank & Distribution: Furnished a heavy-duty industrial backup accumulator bank paired with continuous 125 Vdc rectifiers and localized 400 kVAR power factor capacitors.",
        "Structured Field Cabling and Grounding: Built structural galvanized cable grids, laid heavy-duty armored cables, balanced ground-loop grids, and tuned process instrument signals.",
        "Technical Diagnostics: Conducted exhaustive structural short-circuit, protection coordination, Hi-pot dielectric checks, and OTDR fiber optic integrity metrics."
      ],
      result: "Supported by a fully structured job-site laboratory and a residential engineering crew, the mill went online cleanly and on schedule. Deliverables normalized energy exports with fully documented As-Built books and certified safety audits.",
      imageUrl: "https://lh3.googleusercontent.com/d/18Y4Z0GptbQzIREXaUJdXlJbtykfneVyc",
      category: "Industrial Automation",
      client: "Major Paper & Lumber Producer",
      year: "2024"
    },
    {
      id: "case-3",
      title: "Integration, Automation, and Commissioning for 10 MW and 15 MW Thermoelectric Power Plants",
      badge: "Case Study 03",
      location: "São Vicente, São Paulo, Brazil",
      status: "Completed cleanly with strict adherence to safety standards",
      challenge: "A major steel and metallurgy group needed to consolidate the controls and auto-synchronization loops of two thermoelectric plants (10 MW and 15 MW). The setup required absolute fail-safe control systems over steam turbo-generators and boilers.",
      solutionIntro: "E-Projet drove the central intelligence of the project, delivering complete system drawings, custom logic code, and validation protocols:",
      solutionDetails: [
        "Multidisciplinary Detail Design: Drafted safety schematics, field layout diagrams, network topologies, and high-integrity process interlock models.",
        "Industrial PLC Philosophy: Formulated and executed structured control loops based on IEC 61131 engines, securing high electrical noise (EMI-RFI) immunity on field signals.",
        "Turbine Speed and Sync Control: Programmed and debugged Woodward digital hydraulic controllers and automated generator synchronization modules.",
        "Redundant Supervisory Operations: Created rich process screens spanning multiple servers, enabling unified plant status visibility for remote engineering hubs.",
        "Process Network Verification: Audited industrial Modbus TCP networks with physical wire certifiers and OTDR fiber checks to ensure bulletproof data frames.",
        "Comprehensive Testing: Directed structured Factory Acceptance Tests (FAT) and subsequent 30-day site testing and 15-day assisted operations post-startup."
      ],
      result: "The final deployment verified that the fail-safe interlocks execute instantaneously to protect operators and machinery in case of system anomalies. Industrial cogenerations achieved maximum stability and thermal outputs.",
      imageUrl: "https://lh3.googleusercontent.com/d/1pSKQLumXgwy5HdPza-ZO3HxR1_yE_I9r",
      category: "Industrial Projects",
      client: "Multinational Metallurgy Group",
      year: "2025"
    },
    {
      id: "case-4",
      title: "EPC Turnkey Engineering, Medium Voltage Infrastructure and Sync Controls for a Mega Corn Ethanol Plant",
      badge: "Case Study 04",
      location: "Paraguay (International Operation)",
      status: "Completed ahead of schedule with premium quality engineering",
      challenge: "An international agricultural powerhouse demanded specialized EPC engineering, heavy-duty switchboard delivery, and on-site integration for a massive new processing facility. The plant required complex medium voltage grid synchronization across multiple co-generation layouts.",
      solutionIntro: "E-Projet coordinated the entire sub-execution, handling designs, transport, integration, and field startup:",
      solutionDetails: [
        "Heavy MV Distribution (17.5 kV / 23 kV): Provided 11 LSC2B-PM metal-clad compartments withstanding 31.5 kA short-circuits, covering key utility sectors (Fermentation, Boilers, Distillation) and an specialized 23 kV concession cell.",
        "Synchronized Control Panels (PCS): Integrated advanced active power control cabinets utilizing Woodward DSLC-2-5 and MSLC-2-5 networks to manage grid parallel island, load sheds, and export loops.",
        "Protection Upgrade and Retrofitting: Upgraded active turbo-generator protections using hot-standby redundant controllers and microprocessed Schweitzer SEL gear.",
        "Substation Power Delivery: Managed and supplied eight 2000 kVA vacuum-cast resin transformers and 3750 kVA oil-immersed grid coupling units.",
        "Assisted Commissioning: Supervised extensive insulation checks (Megger), dielectric trials (Hipot), load-rejection scenarios, and automated load control."
      ],
      result: "Supported by on-site resident engineers, the custom COI console and field actuators achieved 100% automated stability. The client recognized the project as one of the safest and most technically advanced plants in South America.",
      imageUrl: "https://lh3.googleusercontent.com/d/1SR60KJobcAJMH5c-_InEqBbikeXF18ca",
      category: "Electric Panels",
      client: "Agroindustrial Paraguay S.A.",
      year: "2024"
    },
    {
      id: "case-5",
      title: "Systems Integration, Control Engineering, and Switchboard Supply for a 7 MW Thermoelectric Unit",
      badge: "Case Study 05",
      location: "Divinópolis, Minas Gerais, Brazil",
      status: "Completed successfully matching all regulatory requirements",
      challenge: "A leading metallurgical manufacturer sought to commission electric and control layers for a new 7 MW steam turbine. High performance was required under rigid fail-safe safety rules that protect multi-million dollar machinery.",
      solutionIntro: "E-Projet supplied complete industrial hardware and software, coordinating all electromechanical field integrations:",
      solutionDetails: [
        "Medium Voltage Framework (MT): Supplied functional certified structures for incoming cells, generator feeds, and boiler distributions.",
        "Turbine & Generator Control: Commissioned central protection cabinets coupled to smart excitation units and auxiliary DC start pumps.",
        "Low Voltage Cabinets: Fabricated certified Motor Control Centers (MCCs) in compliance with NBR IEC 61439 safety guidelines.",
        "Software Engineering: Programmed advanced PLC interlock code and built dynamic scada monitoring panels visualizing thermodynamic states.",
        "Site Acceptance and Commissioning: Conducted 150 hours of intensive site diagnostics and 80 hours of active star-up, aligning frequency converters and vibration transducers."
      ],
      result: "The integrated control platform achieved complete immunity to site electromagnetic noise (EMI-RFI). The client secured an energy-independent plant operating with state-of-the-art safety standards.",
      imageUrl: "https://lh3.googleusercontent.com/d/10TSOlBEiTa7_VHtYCtxc66Q9rN-67WnS",
      category: "Industrial Automation",
      client: "Midwest Steel Smelter Corp",
      year: "2025"
    },
    {
      id: "case-6",
      title: "Control System Engineering, Ethernet Networking and Centralized Operations (COI) for Bioenergy Plant",
      badge: "Case Study 06",
      location: "Montes Claros de Goiás, Goiás, Brazil",
      status: "Validated under budget and with premium response diagnostics",
      challenge: "A state-of-the-art bioenergy factory required integrating all operational systems under a single Central Operations Room (COI). The request required real-time tracking of 946 complex I/O endpoints distributed over harsh, signal-congested spaces.",
      solutionIntro: "E-Projet executed the structural controls design, Ethernet IP network fiber architecture, and remote telemetry panels:",
      solutionDetails: [
        "Central Control Room (COI): Deployed high-availability SCADA servers operating in hot-backup modes to support 8 local operator clients and 1 engineering workstation.",
        "High-Performance Processors: Configured Rockwell Automation ControlLogix controllers managing high-density analog loops, speed drives, and process parameters.",
        "Multidisciplinary Process Control: Tuned automated closed loops for mill diffusers, juice liming reactors, continuous fermentation vats, and multiple steam outputs.",
        "Fiber Ring Topology: Designed high-speed Ethernet optical rings with industrial managed switches securing fast ring recovery and complete diagnostic analytics.",
        "Validation and Training: Executed 1,900 hours of technical commissioning and delivered extensive on-the-field training to plant operators."
      ],
      result: "The unified operations room allowed the plant to stabilize steam demands, prevent unplanned production stops, and optimize ethanol output using a 100% digital, traceable system.",
      imageUrl: "https://lh3.googleusercontent.com/d/1alrEiirHqZdFATmDN9hw0GQr8QaRS1_E",
      category: "Industrial Projects",
      client: "Midwest Bioenergy Distilleries S.A.",
      year: "2024"
    }
  ],
  es: [
    {
      id: "case-1",
      title: "Infraestructura Eléctrica y Comisionamiento de Media Tensión para Nueva Planta de Bioenergía",
      badge: "Estudio de Caso 01",
      location: "Jaíba, Minas Gerais, Brasil",
      status: "Concluido en plazo y con conformidad absoluta de las normas de seguridad",
      challenge: "Una importante industria del sector de la bioenergía requería la implementación de infraestructura eléctrica de potencia y sistemas de conmutación para su nueva planta de procesamiento de maíz, exigiendo equipos robustos capaces de soportar altas corrientes de cortocircuito.",
      solutionIntro: "E-Projet desarrolló la ingeniería ejecutiva completa y asumió el suministro turnkey de las celdas y la red de distribución de media tensión:",
      solutionDetails: [
        "Celda de Media Tensión (17,8 kV / 31,5 kA): Entrega de celdas certificadas Metal-Clad, que incluyen paneles dedicados para la sincronización con generadores diésel de emergencia.",
        "Seguridad Activa Avanzada: Sistemas digitales microprocesados con protección contra arco eléctrico (Arc Flash) mediante fibra óptica y relés inteligentes con interfaz TCP/IP nativa.",
        "Montaje y Acoplamiento de Campo: Ingeniería de barras y ductos para conectar de forma segura las nuevas secciones con la distribución general existente.",
        "Pruebas de Rutina en Fábrica: Logística, ensayos de aislamiento (Megger), rigidez dieléctrica (Hipot) y calibraciones de interruptores de potencia."
      ],
      result: "La planta entró en operación de manera segura durante las paradas programadas. Todas las instalaciones cumplen rigurosamente las normativas ABNT NBR IEC 62271-200 y NR-10, garantizando la continuidad operativa y protegiendo el capital invertido.",
      imageUrl: "https://lh3.googleusercontent.com/d/1e_ypqmhhcyTneFRgkCJHOGyxZHz0pVNU",
      category: "Ingeniería Eléctrica",
      client: "Gran Productor de Bioenergía y Granos",
      year: "2025"
    },
    {
      id: "case-2",
      title: "Solución Turnkey Eléctrica y de Automatización para Casa de Fuerza y Termoeléctrica",
      badge: "Estudio de Caso 02",
      location: "Tunas do Paraná, Paraná, Brasil",
      status: "Concluido con éxito y conformidad técnica absoluta",
      challenge: "Un productor líder en el mercado de la madera y papel requería la automatización y electrificación de su nueva Casa de Fuerza y turbina de vapor. El cliente necesitaba un socio tecnológico para asumir desde la ingeniería básica hasta el montaje de campo y el comisionamiento.",
      solutionIntro: "E-Projet suministró la ingeniería de detalle, los tableros generales, el software de control y la infraestructura eléctrica de la planta:",
      solutionDetails: [
        "Distribución y Media Tensión (17,5 kV): Suministro de celdas blindadas conforme a la norma IEC 62271-200, incluyendo protección contra sobretensiones transitorias.",
        "Controlador Lógico Programable (CLP): Configuración de un PLC de alto rendimiento Siemens S7-1500 con pantallas de terminales de operador táctiles de 10 pulgadas.",
        "Servidores de Control Redundantes: Desarrollo del software SCADA con arquitectura redundante para coordinar las operaciones de calderas, turbinas y tratamiento de agua.",
        "Control de Campo y Protecciones: Suministro de reguladores automáticos de tensión (AVR ABB Unitrol) y relés de protección SEL-700G1.",
        "Sistemas Auxiliares DC y Respaldo: Banco de baterías estacionarias con cargador/rectificador de 125 Vcc y CCMs para el comando de motores."
      ],
      result: "La planta termoeléctrica opera con la máxima eficiencia técnica, exportando energía con estabilidad total y documentación técnica As-Built y ART del CREA.",
      imageUrl: "https://lh3.googleusercontent.com/d/18Y4Z0GptbQzIREXaUJdXlJbtykfneVyc",
      category: "Automatización Industrial",
      client: "Multinacional de Papel y Madera",
      year: "2024"
    },
    {
      id: "case-3",
      title: "Ingeniería de Integración, Automatización y Comisionamiento para Centrales Termoeléctricas de 10 MW y 15 MW",
      badge: "Estudio de Caso 03",
      location: "São Vicente, São Paulo, Brasil",
      status: "Concluido dentro del plazo regulatorio y estrictas normas internacionales",
      challenge: "Un importante holding metalúrgico necesitaba centralizar y sincronizar el control de dos termoeléctricas (10 MW y 15 MW) bajo una arquitectura robusta, estable y con concepto de seguridad de falla segura (fail-safe).",
      solutionIntro: "E-Projet asumió la inteligencia operativa de la planta, integrando diagramas lógicos, códigos de automatización y parámetros de calibración:",
      solutionDetails: [
        "Ingeniería Ejecutiva Detallada: Desarrollo de planos de interconexión, diagramas de control, arquitectura de redes y matrices de interbloqueos de seguridad.",
        "Código y Lógica en CLPs: Implementación de códigos industriales según el estándar IEC 61131, con alta inmunidad a ruido eléctrico.",
        "Control y Sincronismo de Turbinas: Integración de reguladores de velocidad Woodward y sistemas de sincronización automática perante generadores.",
        "Procedimientos de Pruebas: Pruebas estructuradas de aceptación en fábrica (FAT) y posterior comisionamiento con 30 días de pruebas y 15 días de operación asistida."
      ],
      result: "El despliegue garantizó que los lazos de parada segura actúan de forma instantánea ante cualquier desviación del proceso, asegurando la máxima fiabilidad operativa.",
      imageUrl: "https://lh3.googleusercontent.com/d/1pSKQLumXgwy5HdPza-ZO3HxR1_yE_I9r",
      category: "Projetos Industriais",
      client: "Grupo Metalúrgico Multinacional",
      year: "2025"
    },
    {
      id: "case-4",
      title: "Ingeniería Chave na Mão, Infraestructura de Media Tensión y Sistemas de Sincronismo para Planta de Etanol de Maíz",
      badge: "Estudio de Caso 04",
      location: "Paraguay (Operación Internacional)",
      status: "Concluido superando los objetivos de calidad y cronograma",
      challenge: "Un importante complejo agroindustrial extranjero requería ingeniería EPC para integrar su cogeneración y planta de distribución en media tensión. Se requería sincronizar de forma autónoma varios escenarios de conexión a red pública e isla.",
      solutionIntro: "E-Projet asumió la responsabilidad técnica, la entrega de equipos de potencia, las redes de control y el comisionamiento general:",
      solutionDetails: [
        "Distribución Alta Potencia: 11 celdas Metal-Clad de 17.5 kV que soportan cortocircuitos de 31.5 kA para proteger áreas de molienda y destilación.",
        "Lazo de Sincronización Avanzado (PCS): Tablero con controladores de carga Woodward para gestionar la transferencia de potencia sin perturbaciones en la red.",
        "Retrofitting de Turbina: Modernización de la protección del turbogenerador con controladores redundantes acoplados a relés Schweitzer SEL.",
        "Pruebas de Puesta en Marcha: Pruebas dieléctricas en campo de alta tensión, calibración de transductores y rechazo de carga automatizada."
      ],
      result: "Nuestros ingenieros residentes garantizaron que todos los sistemas SCADA y tableros operaran integrados al 100%. El cliente cuenta ahora con una de las instalaciones de distribución eléctrica más seguras de la región.",
      imageUrl: "https://lh3.googleusercontent.com/d/1SR60KJobcAJMH5c-_InEqBbikeXF18ca",
      category: "Painéis Elétricos",
      client: "Agroindustrial Paraguay S.A.",
      year: "2024"
    },
    {
      id: "case-5",
      title: "Integración de Sistemas, Ingeniería de Control y Suministro de Tableros para Planta Térmica de 7 MW",
      badge: "Estudio de Caso 05",
      location: "Divinópolis, Minas Gerais, Brasil",
      status: "Concluido con éxito absoluto con total cumplimiento regulatorio",
      challenge: "Una importante siderúrgica buscaba integrar todos los automatismos y tableros de comando para comandar una turbina de vapor de 7 MW. Se requería alta inmunidad a ruido de alta frecuencia y total seguridad contra cortocircuitos.",
      solutionIntro: "E-Projet suministró la ingeniería de sistemas, los tableros generales homologados y el comisionamiento integrado:",
      solutionDetails: [
        "Tableros de Media Tensión (MT): Suministro de paneles para acometidas y despacho con interruptores de vacío certificados.",
        "Comando de Turbogenerador: Tablero de control integrado con el AVR de excitación y automatismos de bombas auxiliares de CC.",
        "Tableros de Baja Tensión: Centros de control de motores (CCM) construidos y probados bajo la directiva NBR IEC 61439.",
        "Calibración y Puesta en Marcha: 150 horas de comisionamiento de campo y 80 horas de startup supervisando transductores de temperatura y vibraciones."
      ],
      result: "Los sistemas operan de forma óptima sin interrupciones por ruido electromagnético. El cliente cuenta ahora con generación eléctrica estable y 100% independiente para alimentar sus hornos industriales.",
      imageUrl: "https://lh3.googleusercontent.com/d/10TSOlBEiTa7_VHtYCtxc66Q9rN-67WnS",
      category: "Automação Industrial",
      client: "Acería y Aceros del Centro S.A.",
      year: "2025"
    },
    {
      id: "case-6",
      title: "Ingeniería de Control, Red Ethernet de Alta Velocidad y Operación Centralizada (COI) para Planta de Bioenergía",
      badge: "Estudio de Caso 06",
      location: "Montes Claros de Goiás, Goiás, Brazil",
      status: "Concluido y entregado en total conformidad técnica",
      challenge: "Una destilería de bioenergía moderna buscaba conectar y centralizar la visualización de 6 grandes plantas de proceso aisladas bajo una sola Sala de Operaciones Centrales (COI), gestionando 946 puntos de entrada/salida físicos.",
      solutionIntro: "E-Projet diseñó la red de fibra óptica en anillo, los armarios de servidores dedicados y el SCADA general:",
      solutionDetails: [
        "Sala de Operación Remota (COI): Depliegue de servidores SCADA robustos configurados en espejo redundante que alimentan 8 terminales de operadores.",
        "Automatización Multidisciplinaria: Lazos en moliendas, destilación, reactores, fermentación continua y tratamiento de agua de calderas.",
        "Red en Anillo de Alta Velocidad: Switches gestionados Ethernet IP de grado industrial que permiten recuperar canales de datos en milisegundos en caso de roturas físicas de cables.",
        "Ingeniería Legal: Entrega de documentación ejecutiva As-Built, listado de variables y emisión de licencias ART."
      ],
      result: "La unificación de variables redujo de forma drástica las paradas no programadas, permitiendo que el cliente optimizara de manera digital toda la cadena de molienda y almacenamiento de biocombustibles.",
      imageUrl: "https://lh3.googleusercontent.com/d/1alrEiirHqZdFATmDN9hw0GQr8QaRS1_E",
      category: "Projetos Industriais",
      client: "Usinas de Bioenergia do Centro-Oeste S/A",
      year: "2024"
    }
  ]
};
