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
          name: "Zhiqiang Chen",
          role: "CEO",
          bio: "Veteran of NetEase, Tencent, Google, 360, and Alibaba. Expert in Ad & Recommendation systems and AI/ML. Former Co-founder & CTO of TRON; Former President of AntPool (Bitmain), the world's largest mining manufacturer.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "Yu Zhu",
          role: "COO",
          bio: "Experience at CCB, SPDB, and HFT Investment. Regulatory expert for PBoC and CSRC; drafter of National Financial Standards. Global compliance leader across five continents with deep expertise in regional financial setup.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "Feifei Dai",
          role: "Product Director",
          bio: "Former Deputy GM at Kunlun Wanwei Tiangong (AI commercialization 0-1). Former Deputy GM of Alibaba Cloud Finance. 20+ years in IT at Oracle, HP, and Teradata. Strategic advisor for Bowang Reinsurance.",
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
          name: "陈志强",
          role: "CEO",
          bio: "曾在网易、腾讯、谷歌、360、阿里巴巴工作，主导广告与推荐系统搭建。前波场联合创始人兼 CTO；前比特大陆蚂蚁矿池总裁，拥有全球顶级区块链基础设施运营经验。",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "朱于",
          role: "COO",
          bio: "曾职于建行、浦发、汇添富。人行及证监会监管专家，国家金融标准委员会法规起草人。曾在北美、欧洲、亚洲等十多个国家和地区领导金融筹备，具丰富全球合规经验。",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "戴飞飞",
          role: "产品总监",
          bio: "前昆仑万维天工商业化副总经理，推动 AI 大模型商业化从 0 到 1。曾任阿里云金融行业副总经理及 Oracle、HP 资深职位，深耕 IT 与互联网领域近 20 年。",
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
          name: "陳志強",
          role: "CEO",
          bio: "曾在網易、騰訊、谷歌、360、阿里巴巴工作，主導廣告與推薦系統搭建。前波場聯合創始人兼 CTO；前比特大陸螞蟻礦池總裁，擁有全球頂級區塊鏈基礎設施運營經驗。",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "朱於",
          role: "COO",
          bio: "曾職於建行、浦發、匯添富。人行及證監會監管專家，國家金融標準委員會法規起草人。曾在北美、歐洲、亞洲等十多個國家和地區領導金融籌備，具豐富全球合規經驗。",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "戴飛飛",
          role: "產品總監",
          bio: "前昆侖萬維天工商業化副總經理，推動 AI 大模型商業化從 0 到 1。曾任阿里云金融行業副總經理及 Oracle、HP 資深職位，深耕 IT 與互聯網領域近 20 年。",
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
          name: "Zhiqiang Chen",
          role: "CEO",
          bio: "Veterano da NetEase, Tencent, Google e Alibaba. Especialista em sistemas de recomendação. Ex-Cofundador e CTO da TRON; Ex-Presidente da AntPool (Bitmain), o maior fabricante de mineração do mundo.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "Yu Zhu",
          role: "COO",
          bio: "Experiência no CCB, SPDB e HFT Investment. Especialista regulatório para o PBoC e CSRC. Redator de Normas Financeiras Nacionais e líder de conformidade global.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "Feifei Dai",
          role: "Diretora de Produto",
          bio: "Ex-Diretora na Kunlun Wanwei Tiangong (IA 0-1). Ex-Diretora Adjunta da Alibaba Cloud Finance. Mais de 20 anos em TI na Oracle, HP e Teradata.",
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
          name: "Zhiqiang Chen",
          role: "CEO",
          bio: "Veteran von NetEase, Tencent, Google und Alibaba. Experte für Empfehlungssysteme. Ehemaliger Mitbegründer und CTO von TRON; Ehemaliger Präsident von AntPool (Bitmain).",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "Yu Zhu",
          role: "COO",
          bio: "Erfahrung bei CCB, SPDB und HFT Investment. Regulierungsexperte für PBoC und CSRC. Verfasser nationaler Finanzstandards und globaler Compliance-Führer.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "Feifei Dai",
          role: "Produktdirektorin",
          bio: "Ehem. stellv. GM bei Kunlun Wanwei Tiangong. Ehem. stellv. GM für Alibaba Cloud Finance. Über 20 Jahre IT-Erfahrung bei Oracle und HP.",
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
          name: "Zhiqiang Chen",
          role: "CEO",
          bio: "Vétéran de NetEase, Tencent, Google et Alibaba. Expert en systèmes de recommandation. Ex-Cofundador e CTO da TRON; Ex-Président d'AntPool (Bitmain).",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "Yu Zhu",
          role: "COO",
          bio: "Expérience chez CCB, SPDB et HFT Investment. Expert en réglementation pour la PBoC et la CSRC. Rédacteur de normes financières et leader de la conformité mondiale.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "Feifei Dai",
          role: "Directrice Produit",
          bio: "Ancienne DG adjointe chez Kunlun Wanwei Tiangong (IA 0-1). Ancienne DG adjointe chez Alibaba Cloud Finance. Plus de 20 ans en IT chez Oracle et HP.",
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
          name: "Zhiqiang Chen",
          role: "CEO",
          bio: "Veterano de NetEase, Tencent, Google y Alibaba. Experto en sistemas de recomendación. Ex-Cofundador e CTO da TRON; Ex-Presidente de AntPool (Bitmain).",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Zhiqiang&backgroundColor=030303&body=variant01"
        },
        {
          name: "Yu Zhu",
          role: "COO",
          bio: "Experiencia en CCB, SPDB y HFT Investment. Experto regulador para el PBoC y la CSRC. Redactor de normas financieras nacionales y líder de cumplimiento.",
          imageUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=YuZhu&backgroundColor=030303&body=variant13"
        },
        {
          name: "Feifei Dai",
          role: "Directora de Producto",
          bio: "Antigua DG adjunta en Kunlun Wanwei Tiangong. Antigua DG adjunta en Alibaba Cloud Finance. Más de 20 años en TI en Oracle, HP e Teradata.",
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