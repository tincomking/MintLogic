import { ContentMap, Language, TeamMember } from './types';

export const TRANSLATIONS: Record<Language, ContentMap> = {
  [Language.EN]: {
    nav: { solutions: 'Solutions', technology: 'Technology', team: 'Team', contact: 'Contact' },
    hero: {
      badge: 'Hong Kong · MintLogic AI & Web3',
      titleLine1: 'Minting Trust in',
      titleLine2: 'Decentralized Logic',
      description: 'MintLogic empowers traditional sectors to adopt Web3 infrastructure. We provide full-stack support for stablecoin issuance and integrate vertical AI Agents into core business workflows.',
      primaryBtn: 'Explore Solutions',
      secondaryBtn: 'View Documentation'
    },
    bento: {
      web3Title: 'Stablecoin & Payment Operations',
      web3Desc: 'Comprehensive consulting and technical support for regional stablecoin issuance, regulatory compliance, and cross-border payment business execution.',
      aiTitle: 'Vertical AI & Agent Workflows',
      aiDesc: 'Embedding AI Agents into niche industry processes to automate complex logic and upgrade traditional business models.',
      aiFeatures: ['Workflow Automation', 'Vertical Industry AI', 'AI Agent Integration', 'Process Optimization'],
    },
    team: {
      title: 'Core Leadership',
      members: [] // Populated below
    },
    footer: {
      copyright: '© 2024 MintLogic Ltd. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  [Language.ZH_CN]: {
    nav: { solutions: '解决方案', technology: '核心技术', team: '团队', contact: '联系我们' },
    hero: {
      badge: '香港 · MintLogic 智能合规',
      titleLine1: '铸造信任',
      titleLine2: '于去中心化逻辑',
      description: 'MintLogic 致力于协助传统行业进行 Web3 化改造。提供从稳定币发行、合规运营到跨境支付的全栈咨询，并将 AI Agent 深度嵌入垂直业务流。',
      primaryBtn: '探索解决方案',
      secondaryBtn: '查看文档'
    },
    bento: {
      web3Title: '稳定币发行与支付运营',
      web3Desc: '为各地区提供稳定币发行、合规准入、运营管理及跨境支付业务开展的深度咨询与底层技术支持。',
      aiTitle: '垂直行业 AI 与智能体工作流',
      aiDesc: '针对传统行业细分流程进行 AI 改造，通过嵌入 AI Agent（智能体）和工作流实现业务逻辑的自动化与智能化。',
      aiFeatures: ['工作流自动化', '垂直行业模型', 'AI Agent 集成', '业务流程再造'],
    },
    team: {
      title: '核心领导团队',
      members: []
    },
    footer: {
      copyright: '© 2024 MintLogic Ltd. 版权所有。',
      privacy: '隐私政策',
      terms: '服务条款'
    }
  },
  [Language.ZH_TW]: {
    nav: { solutions: '解決方案', technology: '核心技術', team: '團隊', contact: '聯繫我們' },
    hero: {
      badge: '香港 · MintLogic 智能合規',
      titleLine1: '鑄造信任',
      titleLine2: '於去中心化邏輯',
      description: 'MintLogic 致力於協助傳統行業進行 Web3 化改造。提供從穩定幣發行、合規運營到跨境支付的全棧咨詢，並將 AI Agent 深度嵌入垂直業務流。',
      primaryBtn: '探索解決方案',
      secondaryBtn: '查看文檔'
    },
    bento: {
      web3Title: '穩定幣發行與支付運營',
      web3Desc: '為各地區提供穩定幣發行、合規准入、運營管理及跨境支付業務開展的深度咨詢與底層技術支持。',
      aiTitle: '垂直行業 AI 與智能體工作流',
      aiDesc: '針對傳統行業細分流程進行 AI 改造，通過嵌入 AI Agent（智能體）和工作流實現業務邏輯的自動化與智能化。',
      aiFeatures: ['工作流自動化', '垂直行業模型', 'AI Agent 集成', '業務流程再造'],
    },
    team: {
      title: '核心領導團隊',
      members: []
    },
    footer: {
      copyright: '© 2024 MintLogic Ltd. 版權所有。',
      privacy: '隱私政策',
      terms: '服務條款'
    }
  },
  [Language.PT]: {
    nav: { solutions: 'Soluções', technology: 'Tecnologia', team: 'Equipe', contact: 'Contato' },
    hero: {
      badge: 'Hong Kong · MintLogic AI & Web3',
      titleLine1: 'Cunhando Confiança',
      titleLine2: 'Lógica Descentralizada',
      description: 'A MintLogic capacita setores tradicionais a adotar infraestrutura Web3. Oferecemos suporte completo para emissão de stablecoins e integração de Agentes de IA verticais.',
      primaryBtn: 'Explorar Soluções',
      secondaryBtn: 'Documentação'
    },
    bento: {
      web3Title: 'Stablecoin e Operações de Pagamento',
      web3Desc: 'Consultoria abrangente e suporte técnico para emissão regional de stablecoins, conformidade regulatória e execução de pagamentos transfronteiriços.',
      aiTitle: 'IA Vertical e Fluxos de Agentes',
      aiDesc: 'Incorporando Agentes de IA em processos de nicho industrial para automatizar lógica complexa e atualizar modelos de negócios tradicionais.',
      aiFeatures: ['Automação de Fluxo', 'IA Vertical', 'Integração de Agentes', 'Otimização'],
    },
    team: {
      title: 'Liderança',
      members: []
    },
    footer: {
      copyright: '© 2024 MintLogic Ltd.',
      privacy: 'Privacidade',
      terms: 'Termos'
    }
  },
  [Language.DE]: {
    nav: { solutions: 'Lösungen', technology: 'Technologie', team: 'Team', contact: 'Kontakt' },
    hero: {
      badge: 'Hong Kong · MintLogic AI & Web3',
      titleLine1: 'Prägung von Vertrauen',
      titleLine2: 'Dezentrale Logik',
      description: 'MintLogic befähigt traditionelle Sektoren zur Web3-Adoption. Wir bieten Full-Stack-Support für Stablecoin-Emissionen und integrieren vertikale KI-Agenten.',
      primaryBtn: 'Lösungen erkunden',
      secondaryBtn: 'Dokumentation'
    },
    bento: {
      web3Title: 'Stablecoin & Zahlungsverkehr',
      web3Desc: 'Umfassende Beratung und technischer Support für regionale Stablecoin-Emissionen, regulatorische Compliance und grenzüberschreitende Zahlungen.',
      aiTitle: 'Vertikale KI & Agenten-Workflows',
      aiDesc: 'Einbettung von KI-Agenten in Nischenindustrieprozesse zur Automatisierung komplexer Logik und Modernisierung traditioneller Geschäftsmodelle.',
      aiFeatures: ['Workflow-Auto', 'Vertikale KI', 'Agenten-Integration', 'Optimierung'],
    },
    team: {
      title: 'Führungsteam',
      members: []
    },
    footer: {
      copyright: '© 2024 MintLogic Ltd.',
      privacy: 'Datenschutz',
      terms: 'AGB'
    }
  },
  [Language.FR]: {
    nav: { solutions: 'Solutions', technology: 'Technologie', team: 'Équipe', contact: 'Contact' },
    hero: {
      badge: 'Hong Kong · MintLogic AI & Web3',
      titleLine1: 'Frapper la Confiance',
      titleLine2: 'Logique Décentralisée',
      description: 'MintLogic permet aux secteurs traditionnels d\'adopter l\'infrastructure Web3. Support complet pour l\'émission de stablecoins et l\'intégration d\'Agents IA verticaux.',
      primaryBtn: 'Explorer Solutions',
      secondaryBtn: 'Documentation'
    },
    bento: {
      web3Title: 'Stablecoin et Paiements',
      web3Desc: 'Conseil complet et support technique pour l\'émission régionale de stablecoins, la conformité réglementaire et les paiements transfrontaliers.',
      aiTitle: 'IA Verticale et Flux d\'Agents',
      aiDesc: 'Intégration d\'Agents IA dans les processus industriels de niche pour automatiser la logique complexe et moderniser les modèles commerciaux.',
      aiFeatures: ['Automatisation', 'IA Verticale', 'Intégration Agents', 'Optimisation'],
    },
    team: {
      title: 'Direction',
      members: []
    },
    footer: {
      copyright: '© 2024 MintLogic Ltd.',
      privacy: 'Confidentialité',
      terms: 'Conditions'
    }
  },
  [Language.ES]: {
    nav: { solutions: 'Soluciones', technology: 'Tecnología', team: 'Equipo', contact: 'Contacto' },
    hero: {
      badge: 'Hong Kong · MintLogic AI & Web3',
      titleLine1: 'Acuñando Confianza',
      titleLine2: 'Lógica Descentralizada',
      description: 'MintLogic capacita a los sectores tradicionales para adoptar la infraestructura Web3. Soporte para emisión de stablecoins e integración de Agentes de IA.',
      primaryBtn: 'Explorar Soluciones',
      secondaryBtn: 'Documentación'
    },
    bento: {
      web3Title: 'Stablecoin y Pagos',
      web3Desc: 'Consultoría integral y soporte técnico para la emisión regional de stablecoins, cumplimiento regulatorio y ejecución de pagos transfronterizos.',
      aiTitle: 'IA Vertical y Flujos de Agentes',
      aiDesc: 'Incorporación de Agentes de IA en procesos de nicho para automatizar la lógica compleja y actualizar los modelos de negocio tradicionales.',
      aiFeatures: ['Automatización', 'IA Vertical', 'Integración Agentes', 'Optimización'],
    },
    team: {
      title: 'Liderazgo',
      members: []
    },
    footer: {
      copyright: '© 2024 MintLogic Ltd.',
      privacy: 'Privacidad',
      terms: 'Términos'
    }
  }
};

// Team Members data
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Elena Zhang",
    role: "Chief Scientist / AI Lead",
    bio: "Ex-Google DeepMind researcher specializing in NLP and financial risk modeling. Ph.D. in Computer Science from HKUST.",
    imageUrl: "https://picsum.photos/400/400?random=1"
  },
  {
    name: "James Sterling",
    role: "Head of Web3 Strategy",
    bio: "15+ years in investment banking (Goldman Sachs) pivoted to DeFi protocol architecture and RWA tokenization.",
    imageUrl: "https://picsum.photos/400/400?random=2"
  },
  {
    name: "Sarah Chen, JD",
    role: "Chief Legal Officer",
    bio: "Expert in cross-border securities law and digital asset regulation. Bar admissions in NY, London, and Hong Kong.",
    imageUrl: "https://picsum.photos/400/400?random=3"
  },
  {
    name: "Michael Ross",
    role: "Lead Actuary & Risk",
    bio: "Fellow of the Society of Actuaries (FSA). Focuses on algorithmic stablecoin peg stability and insurance pools.",
    imageUrl: "https://picsum.photos/400/400?random=4"
  }
];

// Populate team into translations
Object.keys(TRANSLATIONS).forEach(key => {
    TRANSLATIONS[key as Language].team.members = TEAM_MEMBERS;
});