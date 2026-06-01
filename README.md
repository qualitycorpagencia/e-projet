# E-Projet — Projetos e Soluções em Automação Industrial

Este é o site institucional moderno, premium e otimizado da **E-Projet**, desenvolvido especialmente para atender aos exigentes requisitos do segmento de automação industrial e de engenharia elétrica de alto padrão.

## 🚀 Tecnologias Utilizadas

O projeto foi construído sobre uma arquitetura de alta performance utilizando:
- **HTML5 Sémantico** & **Vite** para empacotamento ultrarrápido
- **Tailwind CSS** para estilização modular e altamente performática
- **TypeScript** garantindo código robusto, escalável e livre de erros
- **Lucide Icons** para ícones modernos e minimalistas (sem imagens externas quebradas)
- **Google Fonts** ("Barlow Condensed" para títulos expressivos e "Barlow" para leitura fluida)

---

## 📂 Estrutura do Projeto

O código está modularizado e estruturado de forma profissional para fácil edição e manutenção:

```bash
├── public/                 # Arquivos estáticos copiados na raiz do build
│   ├── robots.txt          # Diretrizes para indexadores e buscadores
│   └── sitemap.xml         # Sitemap estruturado para SEO avançado
├── src/
│   ├── components/         # Módulos independentes e reutilizáveis
│   │   ├── Header.tsx      # Menu de navegação fixo com efeito de desfoque e responsividade hamburger
│   │   ├── Hero.tsx        # Seção principal de alto impacto visual
│   │   ├── About.tsx       # Setor "Sobre a Empresa" e infográficos metodológicos
│   │   ├── Services.tsx    # Cards interativos com gavetas técnicas expansíveis de serviços
│   │   ├── Differentials.tsx # Indicadores, métricas e telemetria da planta
│   │   ├── Portfolio.tsx   # Grid de portfólio filtrável por categoria com zoom modal
│   │   ├── ContactForm.tsx # Formulário de captação de leads e chamada CTA para Whatsapp
│   │   ├── Footer.tsx      # Rodapé completo (contatos, redes sociais e rota interativa)
│   │   └── WhatsappButton.tsx # Widget de contato permanente com balão atrativo inteligente
│   ├── types.ts            # Tipagens globais estritas de dados
│   ├── data.ts             # Armazenamento limpo do conteúdo e mídias do site
│   ├── App.tsx             # Arquivo agregador principal
│   ├── main.tsx            # Ponto de entrada React / Vite dom
│   └── index.css           # Estilos globais, importação de fontes e animações de fenda premium
├── index.html              # Estrutura base de carregamento com LocalBusiness JSON-LD para SEO Local
├── package.json            # Dependências de compilação
└── vite.config.ts          # Arquivos de configurações do compilador
```

---

## 📈 Otimizações de SEO & Performance

O site conta com as seguintes melhorias que garantem um carregamento em menos de 1 segundo e ótima indexação nos buscadores:
1. **Dados Estruturados LocalBusiness (JSON-LD):** Metatags inseridas diretamente no `<head>` especificando o endereço físico, telefone, área de cobertura (Sertãozinho, Ribeirão Preto e São Paulo) e dados de contato para posicionamento no Google Maps.
2. **Preload de Fontes:** As fontes Barlow e Barlow Condensed são pré-carregadas para evitar desvio de layout (CLS).
3. **Lazy Loading de Imagens:** Fotos industriais carregadas de forma diferida em alta compressão.
4. **Sitemap & Robots inclusos:** Prontos para homologação no Google Search Console.

---

## 🛠️ Como Executar ou Fazer o Deploy

### Execução Local (Desenvolvimento)
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicialize o servidor em modo de desenvolvimento rápida:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:3000` no seu navegador.

### Compilação de Produção (para Netlify / Hostinger)
Para gerar os arquivos estáticos compilados em HTML, CSS e JS puros:
1. Execute o script de build:
   ```bash
   npm run build
   ```
2. Uma pasta `/dist` será criada na raiz do seu projeto.
3. Transfira todo o conteúdo de dentro da pasta `/dist` para o diretório público do seu provedor de hospedagem de preferência (como a pasta `public_html` na Hostinger ou conectando o repositório diretamente na Netlify).
