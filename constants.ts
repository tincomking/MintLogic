import { ContentMap, Language, TeamMember } from './types';

export const TRANSLATIONS: Record<Language, ContentMap> = {
  [Language.EN]: {
    brandName: 'MintLogic',
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
      members: [
        {
          name: "Lucien Chen",
          role: "Founder & CEO",
          bio: "Former Co-founder & CTO of TRON, architect of the world's largest USDT circulation network. 10+ years in big data, AI, and cryptography. Founder of Volume Network, focused on decentralized storage and stablecoin incentive mechanisms, driving RWA asset securitization.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "Kevin Zhu",
          role: "Co-founder & COO",
          bio: "20+ years at top-3 global AUM commercial banks and China's largest investment fund. Regulatory expert for PBoC and CSRC; drafter of national financial regulations. Led financial institution setup across 10+ countries spanning North America, Europe, Asia, Oceania, and Africa.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "Tian Jia",
          role: "Chief Architect",
          bio: "Chief Scientist of China's first Bitcoin fund (Bitfundpe). Early Bitcoin adopter since 2011 and largest Chinese investor in Bitfinex. Led Zcash support and AI+blockchain innovation (Cortex Labs). Computational neuroscience background driving RWA fund algorithm design and stablecoin compliance models.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Feifei&backgroundColor=030303&body=variant09"
        }
      ]
    },
    footer: {
      copyright: '© 2024 MintLogic Ltd. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  [Language.ZH_CN]: {
    brandName: 'MintLogic 智辑科技',
    nav: { solutions: '解决方案', technology: '核心技术', team: '团队', contact: '联系我们' },
    hero: {
      badge: '香港 · MintLogic 智辑科技',
      titleLine1: '铸造信任',
      titleLine2: '于去中心化逻辑',
      description: 'MintLogic 智辑科技致力于协助传统行业进行 Web3 化改造。提供从稳定币发行、合规运营到跨境支付的全栈咨询，并将 AI Agent 深度嵌入垂直业务流。',
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
      members: [
        {
          name: "Lucien Chen",
          role: "创始人兼CEO",
          bio: "波场（TRON）前联合创始人兼首任CTO，全球最大USDT流通网络底层架构缔造者。10年以上大数据、AI与密码学经验。现任Volume Network创始人，专注去中心化存储与稳定币激励机制，推动RWA资产安全证券化。",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "Kevin Zhu",
          role: "联合创始人",
          bio: "二十多年全球资产管理规模前三的商业银行及中国最大投资基金工作经历。中国人民银行、证监会监管专家，国家金融监管法规起草人。曾在北美、欧洲、亚洲、大洋洲、非洲等十多个国家和地区领导金融机构筹备与展业。",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "Tian Jia",
          role: "首席架构师",
          bio: "中国首个比特币基金（Bitfundpe）首席科学家。2011年比特币早期采用者，Bitfinex最大中国投资者。领导Zcash支持与AI+区块链创新（Cortex Labs智能合约）。计算神经科学背景驱动RWA基金算法设计与稳定币合规模型。",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Feifei&backgroundColor=030303&body=variant09"
        }
      ]
    },
    footer: {
      copyright: '© 2024 MintLogic 智辑科技。版权所有。',
      privacy: '隐私政策',
      terms: '服务条款'
    }
  },
  [Language.ZH_TW]: {
    brandName: 'MintLogic 智輯科技',
    nav: { solutions: '解決方案', technology: '核心技術', team: '團隊', contact: '聯繫我們' },
    hero: {
      badge: '香港 · MintLogic 智輯科技',
      titleLine1: '鑄造信任',
      titleLine2: '於去中心化邏輯',
      description: 'MintLogic 智輯科技致力於協助傳統行業進行 Web3 化改造。提供從穩定幣發行、合規運營到跨境支付的全棧咨詢，並將 AI Agent 深度嵌入垂直業務流。',
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
      members: [
        {
          name: "Lucien Chen",
          role: "創始人兼CEO",
          bio: "波場（TRON）前聯合創始人兼首任CTO，全球最大USDT流通網絡底層架構締造者。10年以上大數據、AI與密碼學經驗。現任Volume Network創始人，專注去中心化存儲與穩定幣激勵機制，推動RWA資產安全證券化。",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "Kevin Zhu",
          role: "聯合創始人",
          bio: "二十多年全球資產管理規模前三的商業銀行及中國最大投資基金工作經歷。中國人民銀行、證監會監管專家，國家金融監管法規起草人。曾在北美、歐洲、亞洲、大洋洲、非洲等十多個國家和地區領導金融機構籌備與展業。",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "Tian Jia",
          role: "首席架構師",
          bio: "中國首個比特幣基金（Bitfundpe）首席科學家。2011年比特幣早期採用者，Bitfinex最大中國投資者。領導Zcash支持與AI+區塊鏈創新（Cortex Labs智能合約）。計算神經科學背景驅動RWA基金算法設計與穩定幣合規模型。",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Feifei&backgroundColor=030303&body=variant09"
        }
      ]
    },
    footer: {
      copyright: '© 2024 MintLogic 智輯科技。版權所有。',
      privacy: '隱私政策',
      terms: '服務條款'
    }
  },
  [Language.PT]: {
    brandName: 'MintLogic',
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
      title: 'Liderança Principal',
      members: [
        {
          name: "Lucien Chen",
          role: "Fundador e CEO",
          bio: "Ex-Cofundador e CTO da TRON, arquiteto da maior rede de circulação USDT do mundo. Mais de 10 anos em big data, IA e criptografia. Fundador da Volume Network, focado em armazenamento descentralizado e mecanismos de incentivo de stablecoins.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "Kevin Zhu",
          role: "Cofundador e COO",
          bio: "Mais de 20 anos nos três maiores bancos comerciais do mundo e no maior fundo de investimento da China. Especialista regulatório para PBoC e CSRC. Liderou operações financeiras em mais de 10 países na América, Europa, Ásia e África.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "Tian Jia",
          role: "Arquiteto-Chefe",
          bio: "Cientista-Chefe do primeiro fundo Bitcoin da China (Bitfundpe). Adotante precoce de Bitcoin desde 2011. Liderou suporte ao Zcash e inovação AI+blockchain (Cortex Labs). Background em neurociência computacional aplicado ao design de algoritmos de fundos RWA.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Feifei&backgroundColor=030303&body=variant09"
        }
      ]
    },
    footer: {
      copyright: '© 2024 MintLogic Ltd.',
      privacy: 'Privacidade',
      terms: 'Termos'
    }
  },
  [Language.DE]: {
    brandName: 'MintLogic',
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
      members: [
        {
          name: "Lucien Chen",
          role: "Gründer & CEO",
          bio: "Ehemaliger Mitgründer und CTO von TRON, Architekt des weltweit größten USDT-Umlaufnetzwerks. Über 10 Jahre Erfahrung in Big Data, KI und Kryptographie. Gründer von Volume Network, fokussiert auf dezentrale Speicherung und Stablecoin-Anreizmechanismen.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "Kevin Zhu",
          role: "Mitgründer & COO",
          bio: "Über 20 Jahre bei den drei größten Geschäftsbanken der Welt und Chinas größtem Investmentfonds. Regulierungsexperte für PBoC und CSRC. Leitete Finanzinstitutionen in über 10 Ländern in Nordamerika, Europa, Asien und Afrika.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "Tian Jia",
          role: "Chefarchitekt",
          bio: "Chefwissenschaftler des ersten Bitcoin-Fonds Chinas (Bitfundpe). Früher Bitcoin-Adopter seit 2011. Leitete Zcash-Unterstützung und KI+Blockchain-Innovation (Cortex Labs). Hintergrund in Computational Neuroscience für RWA-Fondsalgorithmen.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Feifei&backgroundColor=030303&body=variant09"
        }
      ]
    },
    footer: {
      copyright: '© 2024 MintLogic Ltd.',
      privacy: 'Datenschutz',
      terms: 'AGB'
    }
  },
  [Language.FR]: {
    brandName: 'MintLogic',
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
      members: [
        {
          name: "Lucien Chen",
          role: "Fondateur & CEO",
          bio: "Ex-cofondateur et CTO de TRON, architecte du plus grand réseau de circulation USDT au monde. Plus de 10 ans en big data, IA et cryptographie. Fondateur de Volume Network, axé sur le stockage décentralisé et les mécanismes d'incitation aux stablecoins.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "Kevin Zhu",
          role: "Cofondateur & COO",
          bio: "Plus de 20 ans dans les trois plus grandes banques commerciales mondiales et le plus grand fonds d'investissement chinois. Expert réglementaire pour la PBoC et la CSRC. A dirigé des institutions financières dans plus de 10 pays en Amérique, Europe, Asie et Afrique.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "Tian Jia",
          role: "Architecte en Chef",
          bio: "Scientifique en chef du premier fonds Bitcoin chinois (Bitfundpe). Adopteur précoce de Bitcoin depuis 2011. A dirigé le support Zcash et l'innovation IA+blockchain (Cortex Labs). Formation en neurosciences computationnelles appliquée à la conception d'algorithmes de fonds RWA.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Feifei&backgroundColor=030303&body=variant09"
        }
      ]
    },
    footer: {
      copyright: '© 2024 MintLogic Ltd.',
      privacy: 'Confidentialité',
      terms: 'Conditions'
    }
  },
  [Language.ES]: {
    brandName: 'MintLogic',
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
      members: [
        {
          name: "Lucien Chen",
          role: "Fundador y CEO",
          bio: "Excofundador y CTO de TRON, arquitecto de la mayor red de circulación USDT del mundo. Más de 10 años en big data, IA y criptografía. Fundador de Volume Network, enfocado en almacenamiento descentralizado y mecanismos de incentivos de stablecoins.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "Kevin Zhu",
          role: "Cofundador y COO",
          bio: "Más de 20 años en los tres mayores bancos comerciales del mundo y el mayor fondo de inversión de China. Experto regulador para PBoC y CSRC. Dirigió instituciones financieras en más de 10 países de América, Europa, Asia y África.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "Tian Jia",
          role: "Arquitecto Jefe",
          bio: "Científico jefe del primer fondo Bitcoin de China (Bitfundpe). Adoptante temprano de Bitcoin desde 2011. Lideró soporte de Zcash e innovación IA+blockchain (Cortex Labs). Formación en neurociencia computacional aplicada al diseño de algoritmos de fondos RWA.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Feifei&backgroundColor=030303&body=variant09"
        }
      ]
    },
    footer: {
      copyright: '© 2024 MintLogic Ltd.',
      privacy: 'Privacidad',
      terms: 'Términos'
    }
  }
};