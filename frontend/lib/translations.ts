import type { Lang } from '@/context/LanguageContext';

export type T = { en: string; ko: string };
const t = (en: string, ko: string): T => ({ en, ko });

// Helper to resolve a translation at call-site: tr(T, lang)
export const tr = (trans: T, lang: Lang) => trans[lang];

export const translations = {
  nav: {
    cta: t('Get in touch', '문의하기'),
  },

  // ── Home (tab-a) ────────────────────────────────────────
  home: {
    heroHeadline: t('Connecting Industry & Global Talent', '산업과 글로벌 인재를 연결합니다'),
    heroSub: t(
      'Hypai Labs is a global integrated enterprise spanning infrastructure, manufacturing, digital technology, and investment — driving sustainable growth worldwide.',
      'Hypai Labs는 인프라, 제조, 디지털 기술, 투자를 아우르는 글로벌 통합 기업으로, 전 세계의 지속 가능한 성장을 주도합니다.',
    ),
    heroCTA: t('Explore Our Business', '비즈니스 탐색하기'),
    sectionHeading1: t('Four core businesses.', '4가지 핵심 사업.'),
    sectionHeading2: t('One global vision.', '하나의 글로벌 비전.'),
    sectionSub: t(
      'From large-scale infrastructure to cutting-edge digital technology, Hypai Labs drives sustainable growth through diversified global operations.',
      '대규모 인프라부터 최첨단 디지털 기술까지, Hypai Labs는 다각화된 글로벌 사업을 통해 지속 가능한 성장을 이끕니다.',
    ),
    partnerLabel: t('Global Partner Network', '글로벌 파트너 네트워크'),
    ctaHeading: t('Interested in partnering with Hypai Labs?', 'Hypai Labs와의 파트너십에 관심이 있으신가요?'),
    ctaSub: t(
      "Whether you represent a government, financial institution, or private enterprise — we'd love to explore the opportunity.",
      '정부 기관, 금융 기관, 민간 기업 등 어떤 형태의 협력도 환영합니다.',
    ),
    ctaButton: t('Get in Touch', '문의하기'),
  },

  // ── Stats Bar ────────────────────────────────────────────
  stats: [
    { prefix: 'KRW ', target: 10, suffix: 'T+', label: t('Investment Secured', '투자 유치 규모') },
    { prefix: '',     target: 14, suffix: '+',  label: t('Global Branches',    '해외 지점') },
    { prefix: 'USD ', target: 100, suffix: 'M+', label: t('Annual Exports',   '연간 수출액') },
    { prefix: '',     target: 50, suffix: '+',  label: t('Portfolio Transactions', '포트폴리오 거래') },
  ],

  // ── Pillar Cards ─────────────────────────────────────────
  pillars: [
    {
      icon: '🏗️',
      title: t('Project Development & Infrastructure', '프로젝트 개발 및 인프라'),
      body: t(
        'PPP-based large-scale projects including nuclear power, land reclamation, and special economic zones across Southeast Asia, Africa, and the Middle East.',
        'PPP 방식의 대규모 프로젝트 — 원자력, 매립지, 특별경제구역 등을 동남아시아, 아프리카, 중동 전역에서 추진합니다.',
      ),
    },
    {
      icon: '🌏',
      title: t('Manufacturing & Global Distribution', '제조 및 글로벌 유통'),
      body: t(
        'Integrated SCM across OEM manufacturing, trade, and global distribution — generating over USD 100M in annual exports across 8,000+ channels in Asia.',
        'OEM 제조, 무역, 글로벌 유통을 통합한 SCM으로, 아시아 8,000개 이상의 채널에서 연간 USD 1억 달러 이상의 수출을 창출합니다.',
      ),
    },
    {
      icon: '💻',
      title: t('Digital Technology', '디지털 기술'),
      body: t(
        'Fintech, Blockchain, and AI solutions including VASP-based payment systems (EZPG), AI biometric authentication (Facial DNA), and blockchain incubation (Web3Labs).',
        'VASP 기반 결제 시스템(EZPG), AI 생체인증(Facial DNA), 블록체인 인큐베이터(Web3Labs) 등 핀테크·블록체인·AI 솔루션을 제공합니다.',
      ),
    },
    {
      icon: '💼',
      title: t('Investment Portfolio', '투자 포트폴리오'),
      body: t(
        'Over KRW 10 trillion in investment secured across 50+ transactions spanning entertainment, real estate, healthcare, and manufacturing.',
        '엔터테인먼트, 부동산, 의료, 제조 등 50건 이상의 거래에 걸쳐 KRW 10조 이상의 투자를 유치했습니다.',
      ),
    },
    {
      icon: '🌐',
      title: t('Global Presence', '글로벌 거점'),
      body: t(
        '14+ overseas branches in the US, UK, Turkey, China, Hong Kong, Singapore, the Philippines, and Japan.',
        '미국, 영국, 터키, 중국, 홍콩, 싱가포르, 필리핀, 일본 등 14개 이상의 해외 지점을 운영합니다.',
      ),
    },
    {
      icon: '🤝',
      title: t('Strategic Partners', '전략적 파트너'),
      body: t(
        'Long-term partnerships with world-class organizations including CCCC (ENR Top 5), CITIC Group (Fortune 500), and Sinosure.',
        'CCCC(ENR 5위), CITIC Group(Fortune 500), Sinosure 등 세계 최고 수준의 기관과 장기 파트너십을 맺고 있습니다.',
      ),
    },
  ],

  // ── About (tab-b) ────────────────────────────────────────
  about: {
    badge:       t('Company Overview', '회사 개요'),
    heroLine1:   t('A global enterprise', '글로벌 기업,'),
    heroLine2:   t('built on connection.', '연결로 세워지다.'),
    heroPara:    t(
      'Hypai Labs Co., Ltd. was founded in 2016 in Seoul, Korea. Through partnerships with governments, public institutions, and investors, we connect technology, opportunities, and talent to drive sustainable growth worldwide.',
      'Hypai Labs 주식회사는 2016년 서울에서 설립되었습니다. 정부, 공공기관, 투자자와의 파트너십을 통해 기술·기회·인재를 연결하여 전 세계의 지속 가능한 성장을 이끕니다.',
    ),
    howWeOperate: t('How We Operate', '운영 방식'),
    pillars: [
      {
        title: t('Governments & Public Institutions', '정부 및 공공기관'),
        body:  t(
          'We work alongside governments and public agencies to plan, manage, and execute national infrastructure projects through Public-Private Partnerships (PPP).',
          'PPP(민관협력) 방식으로 정부 및 공공기관과 함께 국가 인프라 프로젝트를 기획·관리·실행합니다.',
        ),
      },
      {
        title: t('Global Distribution', '글로벌 유통'),
        body:  t(
          'Our integrated SCM unifies OEM manufacturing, trade, and distribution across 14+ overseas branches spanning Asia, Europe, and the Middle East.',
          'OEM 제조·무역·유통을 통합한 SCM으로 아시아, 유럽, 중동 등 14개 이상의 해외 지점을 연결합니다.',
        ),
      },
      {
        title: t('Technology & Innovation', '기술 및 혁신'),
        body:  t(
          'From Fintech and Blockchain to AI-powered biometrics, we build next-generation digital ecosystems for a fast-moving world.',
          '핀테크, 블록체인, AI 생체인증까지 — 빠르게 변화하는 세계를 위한 차세대 디지털 생태계를 구축합니다.',
        ),
      },
      {
        title: t('Investment & Growth', '투자 및 성장'),
        body:  t(
          'With over KRW 10 trillion in secured investment and 50+ transactions, we actively create cross-industry synergies across our portfolio.',
          'KRW 10조 이상의 투자 유치와 50건 이상의 거래를 바탕으로, 포트폴리오 전반에 걸쳐 산업 간 시너지를 창출합니다.',
        ),
      },
    ],
    teamsLabel: t('Specialized Teams', '전문 팀'),
    departments: [
      t('Distribution & Trade',        '유통 및 무역'),
      t('Blockchain',                  '블록체인'),
      t('Construction & Infrastructure','건설 및 인프라'),
      t('Finance',                     '금융'),
      t('Content & Culture',           '콘텐츠 및 문화'),
      t('Design & Marketing',          '디자인 및 마케팅'),
      t('HR & General Affairs',        '인사 및 총무'),
    ],
    branchesHeading: t('14+ Overseas Branches', '14개 이상의 해외 지점'),
    branchesSub:     t('A truly global footprint spanning four continents.', '4개 대륙에 걸친 진정한 글로벌 존재감.'),
    partnerBadge:    t('Global Partners', '글로벌 파트너'),
    partnerHeading:  t('Strategic Partner Companies', '전략적 파트너 기업'),
    partnerSub:      t(
      'Long-term relationships with world-class organizations across infrastructure, finance, real estate, and distribution.',
      '인프라, 금융, 부동산, 유통 분야의 세계적 기관들과 맺은 장기적 파트너십.',
    ),
    partnerAreas: {
      'Infrastructure & Construction':          t('Infrastructure & Construction',          '인프라 및 건설'),
      'Infrastructure & Industrial':            t('Infrastructure & Industrial',            '인프라 및 산업'),
      'Equipment Trading & Infrastructure':     t('Equipment Trading & Infrastructure',     '장비 무역 및 인프라'),
      'Construction & Infrastructure':          t('Construction & Infrastructure',          '건설 및 인프라'),
      'Finance, Real Estate & Investment':      t('Finance, Real Estate & Investment',      '금융, 부동산 및 투자'),
      'Export Credit & Risk Insurance':         t('Export Credit & Risk Insurance',         '수출 신용 및 리스크 보험'),
      'Private Equity & Digital Assets':        t('Private Equity & Digital Assets',        '사모펀드 및 디지털 자산'),
      'Real Estate, Tourism & F&B':             t('Real Estate, Tourism & F&B',             '부동산, 관광 및 F&B'),
      'Real Estate & Urban Development':        t('Real Estate & Urban Development',        '부동산 및 도시 개발'),
      'Real Estate & Diversified Investments':  t('Real Estate & Diversified Investments',  '부동산 및 다각화 투자'),
      'Consumer Goods Distribution & Trade':    t('Consumer Goods Distribution & Trade',    '소비재 유통 및 무역'),
    },
  },

  // ── Business (tab-c) ─────────────────────────────────────
  business: {
    badge:     t('Our Business', '사업 분야'),
    heading1:  t('Four pillars.', '4가지 기둥.'),
    heading2:  t('One vision.', '하나의 비전.'),
    sub:       t(
      'Hypai Labs operates across four core business areas, pursuing revenue diversification and sustainable long-term growth through global partnerships.',
      'Hypai Labs는 4개 핵심 사업 분야에서 글로벌 파트너십을 통해 수익 다각화와 지속 가능한 장기 성장을 추구합니다.',
    ),
    tags: {
      'Infrastructure':              t('Infrastructure',              '인프라'),
      'Manufacturing & Distribution':t('Manufacturing & Distribution','제조 및 유통'),
      'Digital Technology':          t('Digital Technology',          '디지털 기술'),
    },
    projects: [
      {
        tag: 'Infrastructure' as const,
        title: 'Philippines Nuclear Power Plant',
        description: t(
          "G2G initiative applying Korean nuclear technology and PM expertise to support the Philippines' energy transition roadmap.",
          '한국의 원자력 기술과 PM 역량을 활용한 G2G 협력으로 필리핀 에너지 전환 로드맵을 지원합니다.',
        ),
        color: 'from-violet-600/20 to-brand-600/20',
        border: 'border-violet-700/30',
      },
      {
        tag: 'Infrastructure' as const,
        title: 'Manila Waterfront City',
        description: t(
          '~USD 3B JV-based coastal mixed-use new city development on 318 hectares in Manila Bay. Phase 2 entry scheduled for 2025.',
          '마닐라만 318헥타르에 JV 방식으로 개발되는 약 30억 달러 규모의 해안 복합 신도시. 2025년 2단계 진입 예정.',
        ),
        color: 'from-cyan-600/20 to-brand-600/20',
        border: 'border-cyan-700/30',
      },
      {
        tag: 'Infrastructure' as const,
        title: 'Addis Tomorrow SEZ, Ethiopia',
        description: t(
          'PPP-based Special Economic Zone (~450,000 m²) integrating residential, commercial, and industrial functions. Phase 1 completion Q1 2026.',
          'PPP 방식의 특별경제구역(약 45만 m²)으로 주거·상업·산업 기능을 통합. 2026년 1분기 1단계 완공.',
        ),
        color: 'from-emerald-600/20 to-brand-600/20',
        border: 'border-emerald-700/30',
      },
      {
        tag: 'Infrastructure' as const,
        title: 'Imam Khomeini Airport, Iran',
        description: t(
          '~USD 30B aviation and logistics hub project linking Europe and Asia, with 55M annual passenger capacity.',
          '유럽과 아시아를 잇는 약 300억 달러 규모의 항공·물류 허브 프로젝트. 연간 5,500만 명 수용 규모.',
        ),
        color: 'from-orange-600/20 to-brand-600/20',
        border: 'border-orange-700/30',
      },
      {
        tag: 'Manufacturing & Distribution' as const,
        title: 'Global Distribution Network',
        description: t(
          'USD 100M+ annual revenues across 8,000+ channels in Taiwan (7-Eleven, Watsons), China (JD.com), Japan (Don Quijote), and Hong Kong.',
          '대만(7-Eleven, Watsons), 중국(JD.com), 일본(돈키호테), 홍콩 등 8,000개 이상의 채널에서 연간 USD 1억 달러 이상의 매출.',
        ),
        color: 'from-pink-600/20 to-brand-600/20',
        border: 'border-pink-700/30',
      },
      {
        tag: 'Digital Technology' as const,
        title: 'Fintech · Blockchain · AI',
        description: t(
          'VASP-based EZPG payment system, AI biometric Facial DNA, and blockchain incubator Web3Labs — building next-generation digital infrastructure.',
          'VASP 기반 EZPG 결제 시스템, AI 생체인증 Facial DNA, 블록체인 인큐베이터 Web3Labs — 차세대 디지털 인프라를 구축합니다.',
        ),
        color: 'from-red-600/20 to-brand-600/20',
        border: 'border-red-700/30',
      },
    ],
  },

  // ── Contact (tab-d) ──────────────────────────────────────
  contact: {
    badge:       t('Get in touch', '문의하기'),
    heading1:    t("Let's build", '함께 만들어갑니다'),
    heading2:    t('something global.', '글로벌한 미래를.'),
    para:        t(
      'Interested in a partnership, investment opportunity, or project collaboration? Reach out to the Hypai Labs team.',
      '파트너십, 투자 기회, 또는 프로젝트 협력에 관심이 있으신가요? Hypai Labs 팀에 연락해 주세요.',
    ),
    channels: [
      { icon: '✉️', label: t('Email',       '이메일'), value: 'master@hypaikorea.com', href: 'mailto:master@hypaikorea.com' },
      { icon: '📍', label: t('Head Office', '본사'),   value: '2F, 88-1 Nonhyeon-dong, Gangnam-gu, Seoul, Korea', href: '#' },
      { icon: '🌐', label: t('Website',     '웹사이트'), value: 'hypaikorea.com', href: '#' },
    ],
    formTitle:       t('Send a message', '메시지 보내기'),
    labelName:       t('Name',    '이름'),
    labelEmail:      t('Email',   '이메일'),
    labelSubject:    t('Subject', '제목'),
    labelMessage:    t('Message', '메시지'),
    placeholderName:    t('Your name',            '성함'),
    placeholderEmail:   t('you@company.com',       '이메일 주소'),
    placeholderSubject: t("What's this about?",   '문의 제목'),
    placeholderMsg:     t('Tell us more...',       '문의 내용을 알려주세요...'),
    sendButton:      t('Send Message', '메시지 전송'),
  },

  // ── Updates (tab-e) ──────────────────────────────────────
  updates: {
    badge:    t('Recent Updates', '최근 업데이트'),
    heading1: t('News &',         '뉴스 및'),
    heading2: t('Announcements',  '공지사항'),
    sub:      t(
      'The latest from Hypai Labs — partnerships, milestones, and project updates.',
      'Hypai Labs의 최신 소식 — 파트너십, 주요 성과, 프로젝트 업데이트.',
    ),
    readMore: t('Read more →', '더 보기 →'),
    types: {
      'Press Release':  t('Press Release',  '보도자료'),
      'Partnership':    t('Partnership',    '파트너십'),
      'Project Update': t('Project Update', '프로젝트 업데이트'),
    },
    articles: [
      {
        date:    t('February 2026', '2026년 2월'),
        type:    'Press Release' as const,
        title:   t(
          'Hypai Labs Secures Strategic MOU with Alliance Global Group',
          'Hypai Labs, Alliance Global Group과 전략적 MOU 체결',
        ),
        excerpt: t(
          'Hypai Labs and Alliance Global Group have signed a Memorandum of Understanding to explore joint development opportunities across real estate, tourism, and food & beverage sectors in Southeast Asia.',
          'Hypai Labs와 Alliance Global Group이 동남아시아 부동산, 관광, 식음료 분야의 공동 개발 기회를 모색하기 위한 양해각서(MOU)에 서명했습니다.',
        ),
      },
      {
        date:    t('January 2026', '2026년 1월'),
        type:    'Partnership' as const,
        title:   t(
          'Expanded Partnership with CITIC Group for Regional Infrastructure',
          '지역 인프라를 위한 CITIC Group과의 파트너십 확대',
        ),
        excerpt: t(
          'Building on a multi-year relationship, Hypai Labs and CITIC Group have deepened their collaboration to co-develop infrastructure projects across the Greater Mekong Subregion, with a focus on logistics corridors and urban development.',
          'Hypai Labs와 CITIC Group이 다년간의 관계를 더욱 강화하여 대메콩강 유역의 물류 회랑 및 도시 개발에 초점을 맞춘 인프라 프로젝트를 공동 개발하기로 했습니다.',
        ),
      },
      {
        date:    t('December 2025', '2025년 12월'),
        type:    'Project Update' as const,
        title:   t(
          'Addis Tomorrow SEZ Phase 1 Reaches Completion Milestone',
          'Addis Tomorrow SEZ 1단계 완공 마일스톤 달성',
        ),
        excerpt: t(
          "The Addis Tomorrow Special Economic Zone in Ethiopia has achieved its Phase 1 completion milestone ahead of schedule. The 450,000 m² PPP-based development integrates residential, commercial, and industrial facilities, marking a major step in Hypai Labs' African expansion.",
          '에티오피아 Addis Tomorrow 특별경제구역이 예정보다 일찍 1단계 완공 마일스톤을 달성했습니다. 45만 m² 규모의 PPP 개발 사업은 주거·상업·산업 시설을 통합하며 Hypai Labs의 아프리카 사업 확장에 중요한 이정표가 되었습니다.',
        ),
      },
    ],
  },

  // ── Investment (tab-f) ───────────────────────────────────
  investment: {
    badge:    t('Investment Portfolio', '투자 포트폴리오'),
    heading1: t('Portfolio',            '포트폴리오'),
    heading2: t('Companies',            '기업'),
    sub:      t(
      'Hypai Labs actively invests in and grows companies across entertainment, technology, healthcare, and creative industries — building cross-sector synergies at a global scale.',
      'Hypai Labs는 엔터테인먼트, 기술, 헬스케어, 크리에이티브 산업 전반에 걸쳐 기업에 투자하고 성장을 지원하며, 글로벌 규모에서 산업 간 시너지를 창출합니다.',
    ),
    portfolio: [
      {
        company: 'Muzik Creative Label',
        sector: t('Fashion / Eyewear', '패션 / 아이웨어'),
        description: t(
          'A creative powerhouse merging music talent development with fashion and lifestyle branding across Asian markets.',
          '음악 인재 발굴과 패션·라이프스타일 브랜딩을 아우르는 아시아 시장의 크리에이티브 강자.',
        ),
        highlight: t(
          'Expanding footprint in K-fashion and eyewear licensing with global distribution partners.',
          '글로벌 유통 파트너와 함께 K패션 및 아이웨어 라이선싱 사업을 확장 중.',
        ),
        color: 'from-pink-600/20 to-brand-600/20',
        border: 'border-pink-700/30',
        tag: 'pink',
      },
      {
        company: 'Guangzhou Foshan Creation Center',
        sector: t('Music & Talent Development', '음악 및 인재 발굴'),
        description: t(
          'A state-of-the-art creative hub in the Pearl River Delta dedicated to discovering, developing, and promoting music talent across Greater China.',
          '주강 삼각주에 위치한 최첨단 크리에이티브 허브로, 중화권 전역의 음악 인재를 발굴·육성·홍보합니다.',
        ),
        highlight: t(
          'Signed 20+ artists; production and IP rights spanning streaming and live events.',
          '20명 이상의 아티스트 계약 체결, 스트리밍 및 라이브 이벤트를 아우르는 제작 및 IP 권리 확보.',
        ),
        color: 'from-violet-600/20 to-brand-600/20',
        border: 'border-violet-700/30',
        tag: 'violet',
      },
      {
        company: 'SatTube TV',
        sector: t('IPTV & OTT Broadcasting', 'IPTV & OTT 방송'),
        description: t(
          'A next-generation IPTV and OTT platform delivering Korean and Asian content to diaspora communities worldwide via satellite and broadband.',
          '위성 및 광대역 통신을 통해 전 세계 재외 동포 커뮤니티에 한국 및 아시아 콘텐츠를 제공하는 차세대 IPTV·OTT 플랫폼.',
        ),
        highlight: t(
          'Active subscribers across 30+ countries with content partnerships in Korea, Japan, and Southeast Asia.',
          '30개국 이상의 활성 구독자 보유, 한국·일본·동남아시아 콘텐츠 파트너십 운영 중.',
        ),
        color: 'from-cyan-600/20 to-brand-600/20',
        border: 'border-cyan-700/30',
        tag: 'cyan',
      },
      {
        company: 'Phu Thai Group JV',
        sector: t('Strategic Consulting', '전략 컨설팅'),
        description: t(
          'A joint venture with Phu Thai Group focused on market-entry strategy and business development consulting for Korean and Chinese enterprises entering Vietnam.',
          '베트남 진출을 위한 한국·중국 기업의 시장 진입 전략 및 사업 개발 컨설팅에 특화된 Phu Thai Group과의 합작 법인.',
        ),
        highlight: t(
          'Facilitated 12+ cross-border investment introductions valued over USD 200M.',
          'USD 2억 달러 이상 규모의 12건 이상 크로스보더 투자 연결 성사.',
        ),
        color: 'from-emerald-600/20 to-brand-600/20',
        border: 'border-emerald-700/30',
        tag: 'emerald',
      },
      {
        company: 'Seoul Medi Cosmetic',
        sector: t('Medical Beauty & Healthcare', '의료 미용 및 헬스케어'),
        description: t(
          'Premium K-beauty and medical cosmetics brand combining dermatological research with luxury skincare formulations for the Asian premium market.',
          '피부 과학 연구와 럭셔리 스킨케어 포뮬레이션을 결합한 아시아 프리미엄 시장을 위한 K-뷰티 의료 화장품 브랜드.',
        ),
        highlight: t(
          'Distributed in 8 countries; flagship clinics in Seoul and Manila.',
          '8개국 유통 중, 서울 및 마닐라에 플래그십 클리닉 운영.',
        ),
        color: 'from-rose-600/20 to-brand-600/20',
        border: 'border-rose-700/30',
        tag: 'rose',
      },
      {
        company: 'Concrete Communication',
        sector: t('Design & Visual Communication', '디자인 및 비주얼 커뮤니케이션'),
        description: t(
          'A full-service creative agency specializing in brand identity, spatial design, and integrated marketing campaigns for enterprise clients across Korea and Southeast Asia.',
          '브랜드 아이덴티티, 공간 디자인, 통합 마케팅 캠페인을 전문으로 하는 한국 및 동남아시아 기업 고객 대상 풀서비스 크리에이티브 에이전시.',
        ),
        highlight: t(
          'Over 150 brand projects completed for Fortune 500 and government clients.',
          'Fortune 500 및 정부 고객을 위해 150건 이상의 브랜드 프로젝트 완료.',
        ),
        color: 'from-orange-600/20 to-brand-600/20',
        border: 'border-orange-700/30',
        tag: 'orange',
      },
    ],
  },
};
