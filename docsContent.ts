import { Language } from './types';

export interface DocSection {
  title: string;
  content: string[];
}

export interface Documentation {
  mainTitle: string;
  sections: DocSection[];
}

// Fixed missing language entries for DOCS_CONTENT to satisfy Record<Language, Documentation>
export const DOCS_CONTENT: Record<Language, Documentation> = {
  [Language.ZH_CN]: {
    mainTitle: "MintLogic 智辑科技 业务架构与战略蓝图 2024-2026",
    sections: [
      {
        title: "1. 企业使命与愿景",
        content: [
          "MintLogic 智辑科技致力于成为连接传统产业与 Web3 逻辑的“智能连接器”。",
          "我们的核心愿景是通过“去中心化信任”与“垂直领域 AI”的双轮驱动，协助传统行业完成从“信息化”到“智能化与去中心化”的底层逻辑跃迁。",
          "在价值互联的时代，我们相信每一个传统产业都值得用分布式账本重构信用，用 AI 智能体重构效率。"
        ]
      },
      {
        title: "2. 核心业务支柱",
        content: [
          "【Web3 基础设施 - 稳定币与支付】",
          "提供全栈式区域性稳定币（Stablecoin）发行方案。涵盖从底层公链技术选型、合规准入咨询、储备资产透明审计到跨境清结算支付网关的完整链路。重点服务于具有跨境结算需求的国际贸易与金融机构。",
          "【AI 垂直智能体 - 业务逻辑自动化】",
          "不仅是通用的 AI 工具，而是深度嵌入垂直行业（如再保险、供应链金融、法律风控）的 AI Agents。通过解析复杂业务规则，将传统的人工审批 and 决策流程转化为自动化的智能工作流。"
        ]
      },
      {
        title: "3. 竞争优势",
        content: [
          "【顶级跨界团队】由前谷歌/阿里 AI 专家、前波场 CTO 与比特大陆总裁、以及人行监管专家组成的“海陆空”闭环团队。",
          "【合规先行】在香港及东南亚拥有深厚的合规执照筹备经验与监管沟通渠道，确保所有 Web3 改造均在监管框架内运行。",
          "【工程化落地】深耕 IT 近 20 年的交付经验，能够实现从 0 到 1 的商业化演进。"
        ]
      },
      {
        title: "4. 三阶段发展规划",
        content: [
          "阶段一：筑基（2024）- 完成多币种稳定币发行套件（MintLogic SDK）的标准化，并落地至少两个垂直行业的 AI Agent 标杆案例。",
          "阶段二：扩张（2025）- 获得关键地区的支付与结算牌照，构建跨国界、跨币种的 Web3 支付联盟，AI 智能体实现跨平台协作。",
          "阶段三：生态（2026）- 建立基于去中心化逻辑的智能产业互联网，让“信任”和“逻辑”成为可编程的数字资产。"
        ]
      }
    ]
  },
  [Language.ZH_TW]: {
    mainTitle: "MintLogic 智輯科技 業務架構與戰略藍圖 2024-2026",
    sections: [
      {
        title: "1. 企業使命與願景",
        content: [
          "MintLogic 智輯科技致力於成為連接傳統產業與 Web3 邏輯的「智能連接器」。",
          "我們的核心願景是通過「去中心化信任」與「垂直領域 AI」的雙輪驅動，協助傳統行業完成從「信息化」到「智能化與去中心化」的底層邏輯躍遷。",
          "在價值互聯的時代，我們相信每一個傳統產業都值得用分佈式賬本重構信用，用 AI 智能體重構效率。"
        ]
      },
      {
        title: "2. 核心業務支柱",
        content: [
          "【Web3 基礎設施 - 穩定幣與支付】",
          "提供全棧式區域性穩定幣（Stablecoin）發行方案。涵蓋從底層公鏈技術選型、合規准入咨詢、儲備資產透明審計到跨境清結算支付網關的完整鏈路。重點服務於具有跨境結算需求的國際貿易與金融機構。",
          "【AI 垂直行業智能體 - 業務邏輯自動化】",
          "不僅是通用的 AI 工具，而是深度嵌入垂直行業（如再保險、供應鏈金融、法律風控）的 AI Agents。通過解析複雜業務規則，將傳統的人工審批和決策流程轉化為自動化的智能工作流。"
        ]
      },
      {
        title: "3. 競爭優勢",
        content: [
          "【頂級跨界團隊】由前谷歌/阿里 AI 專家、前波場 CTO 與比特大陸總裁、以及人行監管專家組成的「海陸空」閉環團隊。",
          "【合規先行】在香港及東南亞擁有深厚的合規執照籌備經驗與監管溝通渠道，確保所有 Web3 改造均在監管框架內運行。",
          "【工程化落地】深耕 IT 近 20 年的交付經驗，能夠實現從 0 到 1 的商業化演進。"
        ]
      },
      {
        title: "4. 三階段發展規劃",
        content: [
          "階段一：築基（2024）- 完成多幣種穩定幣發行套件（MintLogic SDK）的標準化，並落地至少兩個垂直行業的 AI Agent 標竿案例。",
          "階段二：擴張（2025）- 獲得關鍵地區的支付與結算牌照，構建跨國界、跨幣種的 Web3 支付聯盟，AI 智能體實現跨平台協作。",
          "階段三：生態（2026）- 建立基於去中心化邏輯的智能產業互聯網，讓「信任」和「邏輯」成為可編程的數字資產。"
        ]
      }
    ]
  },
  [Language.EN]: {
    mainTitle: "MintLogic Business Architecture & Strategic Roadmap 2024-2026",
    sections: [
      {
        title: "1. Mission & Vision",
        content: [
          "MintLogic aims to be the 'Intelligent Connector' between traditional industries and Web3 logic.",
          "Our core vision is to drive the transition of traditional sectors from 'Informatization' to 'Intelligence & Decentralization' through the dual engines of Decentralized Trust and Vertical AI.",
          "In the era of Value Internet, we believe every traditional industry deserves to reconstruct credit with distributed ledgers and efficiency with AI Agents."
        ]
      },
      {
        title: "2. Core Business Pillars",
        content: [
          "[Web3 Infrastructure - Stablecoin & Payments]",
          "Providing full-stack regional stablecoin issuance solutions. This includes public chain selection, compliance consulting, transparent reserve auditing, and cross-border settlement gateways. We primarily serve international trade and financial institutions.",
          "[AI Vertical Agents - Logic Automation]",
          "Beyond general AI tools, we develop AI Agents deeply embedded in vertical industries (e.g., Reinsurance, Supply Chain Finance, Legal Tech). By parsing complex business rules, we transform manual processes into automated intelligent workflows."
        ]
      },
      {
        title: "3. Competitive Advantages",
        content: [
          "[Elite Cross-disciplinary Team] A unique blend of AI experts from Google/Alibaba, blockchain pioneers from TRON/Bitmain, and regulatory experts from PBoC.",
          "[Compliance First] Deep experience in regulatory communication and license preparation in Hong Kong and SE Asia, ensuring all Web3 transformations operate within legal frameworks.",
          "[Proven Execution] Nearly 20 years of IT delivery experience, capable of driving commercial evolution from 0 to 1 and beyond."
        ]
      },
      {
        title: "4. Three-Phase Growth Roadmap",
        content: [
          "Phase 1: Foundation (2024) - Standardize the multi-currency Stablecoin SDK and establish benchmark AI Agent cases in at least two vertical sectors.",
          "Phase 2: Scaling (2025) - Obtain payment and settlement licenses in key regions, building a cross-border Web3 payment alliance.",
          "Phase 3: Ecosystem (2026) - Establish a decentralized intelligent industrial internet, making 'Trust' and 'Logic' programmable digital assets."
        ]
      }
    ]
  },
  [Language.PT]: {
    mainTitle: "Arquitetura de Negócios e Roteiro Estratégico MintLogic 2024-2026",
    sections: [
      {
        title: "1. Missão e Visão",
        content: [
          "A MintLogic visa ser o 'Conector Inteligente' entre as indústrias tradicionais e a lógica Web3.",
          "Nossa visão principal é impulsionar a transição dos setores tradicionais da 'Informatização' para a 'Inteligência e Descentralização' através dos motores duplos de Confiança Descentralizada e IA Vertical.",
          "Na era da Internet do Valor, acreditamos que toda indústria tradicional merece reconstruir o crédito com livros-razão distribuídos e a eficiência com Agentes de IA."
        ]
      },
      {
        title: "2. Pilares de Negócios Principais",
        content: [
          "[Infraestrutura Web3 - Stablecoin e Pagamentos]",
          "Fornecendo soluções completas de emissão de stablecoins regionais. Isso inclui seleção de blockchain, consultoria de conformidade, auditoria transparente de reservas e gateways de liquidação transfronteiriça.",
          "[Agentes Verticais de IA - Automação de Lógica]",
          "Além de ferramentas gerais de IA, desenvolvemos Agentes de IA profundamente inseridos em indústrias verticais (ex: Resseguros, Finanças da Cadeia de Suprimentos). Ao analisar regras de negócios complexas, transformamos processos manuais em fluxos de trabalho inteligentes automatizados."
        ]
      },
      {
        title: "3. Vantagens Competitivas",
        content: [
          "[Equipe Interdisciplinar de Elite] Uma mistura única de especialistas em IA do Google/Alibaba, pioneiros em blockchain da TRON/Bitmain e especialistas regulatórios.",
          "[Conformidade em Primeiro Lugar] Ampla experiência em comunicação regulatória e preparação de licenças em Hong Kong e Sudeste Asiático.",
          "[Execução Comprovada] Quase 20 anos de experiência em entrega de TI, capaz de impulsionar a evolução comercial de 0 a 1."
        ]
      },
      {
        title: "4. Roteiro de Crescimento em Três Fases",
        content: [
          "Fase 1: Fundação (2024) - Padronizar o SDK de Stablecoin multimoeda e estabelecer casos de referência de Agentes de IA.",
          "Fase 2: Escalonamento (2025) - Obter licenças de pagamento e liquidação em regiões-chave, construindo uma aliança de pagamentos Web3 transfronteiriça.",
          "Fase 3: Ecossistema (2026) - Estabelecer uma internet industrial inteligente descentralizada, tornando 'Confiança' e 'Lógica' ativos digitais programáveis."
        ]
      }
    ]
  },
  [Language.DE]: {
    mainTitle: "MintLogic Geschäftsarchitektur & Strategische Roadmap 2024-2026",
    sections: [
      {
        title: "1. Mission & Vision",
        content: [
          "MintLogic strebt danach, der 'Intelligente Connector' zwischen traditionellen Industrien und der Web3-Logik zu sein.",
          "Unsere Kernvision ist es, den Übergang traditioneller Sektoren von der 'Informatisierung' hin zu 'Intelligenz & Dezentralisierung' durch die dualen Motoren dezentrales Vertrauen und vertikale KI voranzutreiben.",
          "Im Zeitalter des Value Internet glauben wir, dass jede traditionelle Industrie es verdient, Kredit mit Distributed Ledgers und Effizienz mit KI-Agenten neu zu konstruieren."
        ]
      },
      {
        title: "2. Kerngeschäftssäulen",
        content: [
          "[Web3-Infrastruktur - Stablecoin & Zahlungsverkehr]",
          "Bereitstellung von Full-Stack-Lösungen für die Emission regionaler Stablecoins. Dies umfasst die Auswahl der Blockchain, Compliance-Beratung, transparente Reserveprüfung und grenzüberschreitende Settlement-Gateways.",
          "[Vertikale KI-Agenten - Logik-Automatisierung]",
          "Über allgemeine KI-Tools hinaus entwickeln wir KI-Agenten, die tief in vertikale Industrien (z. B. Rückversicherung, Lieferkettenfinanzierung) eingebettet sind. Durch das Parsen komplexer Geschäftsregeln transformieren wir manuelle Prozesse in automatisierte intelligente Workflows."
        ]
      },
      {
        title: "3. Wettbewerbsvorteile",
        content: [
          "[Elite-Team] Eine einzigartige Mischung aus KI-Experten von Google/Alibaba, Blockchain-Pionieren von TRON/Bitmain und Regulierungsexperten.",
          "[Compliance First] Tiefgreifende Erfahrung in der regulatorischen Kommunikation und Lizenzvorbereitung in Hong Kong und Südostasien.",
          "[Bewährte Ausführung] Fast 20 Jahre Erfahrung in der IT-Auslieferung, fähig, die kommerzielle Entwicklung von 0 auf 1 voranzutreiben."
        ]
      },
      {
        title: "4. Drei-Phasen-Wachstums-Roadmap",
        content: [
          "Phase 1: Fundament (2024) - Standardisierung des Multi-Währungs-Stablecoin-SDKs und Etablierung von KI-Agenten-Referenzfällen.",
          "Phase 2: Skalierung (2025) - Erhalt von Zahlungs- und Abrechnungslizenzen in Schlüsselregionen, Aufbau einer grenzüberschreitenden Web3-Zahlungsallianz.",
          "Phase 3: Ökosystem (2026) - Aufbau eines dezentralen intelligenten Industrie-Internets, das 'Vertrauen' und 'Logik' zu programmierbaren digitalen Assets macht."
        ]
      }
    ]
  },
  [Language.FR]: {
    mainTitle: "Architecture Commerciale et Feuille de Route Stratégique MintLogic 2024-2026",
    sections: [
      {
        title: "1. Mission et Vision",
        content: [
          "MintLogic vise à être le 'Connecteur Intelligent' entre les industries traditionnelles et la logique Web3.",
          "Notre vision centrale est de conduire la transition des secteurs traditionnels de l'informatisation vers l'intelligence et la décentralisation via le double moteur de la confiance décentralisée et de l'IA verticale.",
          "À l'ère de l'Internet de la Valeur, nous pensons que chaque industrie traditionnelle mérite de reconstruire le crédit avec des registres distribués et l'efficacité avec des agents IA."
        ]
      },
      {
        title: "2. Piliers Commerciaux Centraux",
        content: [
          "[Infrastructure Web3 - Stablecoin & Paiements]",
          "Fournir des solutions complètes d'émission de stablecoins régionaux. Cela inclut la sélection de la blockchain, le conseil en conformité, l'audit transparent des réserves et les passerelles de règlement transfrontalières.",
          "[Agents IA Verticaux - Automatisation de la Logique]",
          "Au-delà des outils IA généraux, nous développons des agents IA profondément intégrés dans les industries verticales (ex: réassurance, finance de la chaîne d'approvisionnement). En analysant des règles métier complexes, nous transformons les processus manuelles en flux de travail intelligents automatisés."
        ]
      },
      {
        title: "3. Avantages Compétitifs",
        content: [
          "[Équipe d'Élite Interdisciplinaire] Un mélange unique d'experts en IA de Google/Alibaba, de pionniers de la blockchain de TRON/Bitmain et d'experts en réglementation.",
          "[La Conformité d'Abord] Expérience approfondie en communication réglementaire et préparation de licences à Hong Kong et en Asie du Sud-Est.",
          "[Exécution Éprouvée] Près de 20 ans d'expérience en livraison informatique, capable de piloter l'évolution commerciale de 0 à 1."
        ]
      },
      {
        title: "4. Feuille de Route en Trois Phases",
        content: [
          "Phase 1 : Fondations (2024) - Standardiser le SDK Stablecoin multi-devises et établir des cas de référence d'agents IA.",
          "Phase 2 : Expansion (2025) - Obtenir des licences de paiement et de règlement dans les régions clés, en construisant une alliance de paiement Web3 transfrontalière.",
          "Phase 3 : Écosystème (2026) - Établir un internet industriel intelligent décentralisé, faisant de la 'Confiance' et de la 'Logique' des actifs numériques programmables."
        ]
      }
    ]
  },
  [Language.ES]: {
    mainTitle: "Arquitectura de Negocios y Hoja de Ruta Estratégica de MintLogic 2024-2026",
    sections: [
      {
        title: "1. Misión y Visión",
        content: [
          "MintLogic aspira a ser el 'Conector Inteligente' entre las industrias tradicionales y la lógica Web3.",
          "Nuestra visión principal es impulsar la transición de los sectores tradicionales de la informatización a la inteligencia y la descentralización mediante el motor dual de la confianza descentralizada y la IA vertical.",
          "En la era del Internet del Valor, creemos que toda industria tradicional merece reconstruir el crédito con libros de contabilidad distribuidos y la eficiencia con agentes de IA."
        ]
      },
      {
        title: "2. Pilares de Negocios Principales",
        content: [
          "[Infraestructura Web3 - Stablecoin y Pagos]",
          "Suministro de soluciones integrales de emisión de stablecoins regionales. Esto incluye la selección de la cadena de bloques, consultoría de cumplimiento, auditoría transparente de reservas y pasarelas de liquidación trasfronterizas.",
          "[Agentes de IA Verticales - Automatización de Lógica]",
          "Más allá de las herramientas generales de IA, desarrollamos agentes de IA profundamente integrados en industrias verticales (p. ej., reaseguros, finanzas de la cadena de suministro). Al analizar reglas comerciales complejas, transformamos los procesos manuales en flujos de trabajo inteligentes automatizados."
        ]
      },
      {
        title: "3. Ventajas Competitivas",
        content: [
          "[Equipo Interdisciplinario de Élite] Una mezcla única de expertos en IA de Google/Alibaba, pioneros de la cadena de bloques de TRON/Bitmain y expertos en regulación.",
          "[Cumplimiento Primero] Experiencia profunda en comunicación regulatoria y preparación de licencias en Hong Kong y el sudeste asiático.",
          "[Ejecución Probada] Casi 20 años de experiencia en entrega de TI, capaz de impulsar la evolución comercial de 0 a 1."
        ]
      },
      {
        title: "4. Hoja de Ruta de Crecimiento en Tres Fases",
        content: [
          "Fase 1: Cimentación (2024) - Estandarizar el SDK de Stablecoin multidivisa y establecer casos de referencia de agentes de IA.",
          "Phase 2: Escalamiento (2025) - Obtener licencias de pago y liquidación en regiones clave, construyendo una alianza de pagos Web3 transfronteriza.",
          "Phase 3: Ecosystem (2026) - Establecer una internet industrial inteligente descentralizada, convirtiendo la 'Confianza' y la 'Lógica' en activos digitales programables."
        ]
      }
    ]
  }
};