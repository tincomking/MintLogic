export enum Language {
  EN = 'EN',
  ZH_CN = 'ZH-CN',
  ZH_TW = 'ZH-TW',
  PT = 'PT',
  DE = 'DE',
  FR = 'FR',
  ES = 'ES'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ContentMap {
  nav: {
    solutions: string;
    technology: string;
    team: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
  bento: {
    web3Title: string;
    web3Desc: string;
    aiTitle: string;
    aiDesc: string;
    aiFeatures: string[];
  };
  team: {
    title: string;
    members: TeamMember[];
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
  };
}