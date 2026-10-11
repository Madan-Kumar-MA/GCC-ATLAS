import { ServiceProvider } from '../types';

export const SERVICE_PROVIDERS: ServiceProvider[] = [
  {
    id: 'cbre-advisory',
    company: 'CBRE South Asia',
    category: 'Real Estate & Advisory',
    headquarters: 'Dallas, TX, USA (India HQ: Gurugram)',
    indiaPresence: ['Bengaluru', 'Hyderabad', 'Chennai', 'Mumbai', 'Pune', 'Delhi NCR'],
    coreServices: [
      'Commercial Grade-A Office Site Selection & Micro-market Analytics',
      'Lease Structuring, Turnkey Fitout Project Management',
      'SEZ / STPI Regulatory Compliance & Land Acquisition Advisory'
    ],
    gccTrackRecord: 'Advised on 100+ multinational corporate real-estate entries in India; tracks comprehensive quarterly GCC leasing indices.',
    sampleEngagements: [
      'Site selection and master-lease advisory for US tech giant in Outer Ring Road Bengaluru',
      'Consolidated 400,000 sq.ft footprint transaction for European automotive tech center in Pune'
    ],
    evidenceSource: 'CBRE India Commercial Real Estate Reports & Public Press Disclosures',
    evidenceStrength: 'High',
    evidenceNotes: 'Publicly registered broker for major institutional Grade-A tech park leasing transactions.',
    sourceUrl: 'https://www.cbre.co.in'
  },
  {
    id: 'jll-advisory',
    company: 'JLL India (Jones Lang LaSalle)',
    category: 'Real Estate & Advisory',
    headquarters: 'Chicago, IL, USA (India HQ: Mumbai)',
    indiaPresence: ['Bengaluru', 'Hyderabad', 'Mumbai', 'Delhi NCR', 'Pune', 'Chennai'],
    coreServices: [
      'Tenant Representation & Workplace Strategy',
      'Capital Markets & Built-to-Suit (BTS) Development',
      'Energy Sustainability & LEED Certification Consulting'
    ],
    gccTrackRecord: 'Represented major Fortune 500 tech and BFSI captives in high-density markets like HITEC City and BKC.',
    sampleEngagements: [
      'Built-to-suit campus advisory for Fortune 50 BFSI corporate center in Hyderabad',
      'Workplace transformation study for Fortune 100 retailer in Manyata Business Park'
    ],
    evidenceSource: 'JLL India Research Quarterly Publications',
    evidenceStrength: 'High',
    evidenceNotes: 'Documented transaction advisor for premier Fortune 500 campus leases.',
    sourceUrl: 'https://www.jll.co.in'
  },
  {
    id: 'ey-gcc-services',
    company: 'EY India (Ernst & Young)',
    category: 'Consulting & Strategy',
    headquarters: 'London, UK (India HQ: Mumbai)',
    indiaPresence: ['Bengaluru', 'Hyderabad', 'Mumbai', 'Gurugram', 'Chennai', 'Pune'],
    coreServices: [
      'GCC Setup Roadmap & Feasibility Benchmarking',
      'Operating Model Design & Global Process Carve-outs',
      'Direct/Indirect Tax Structuring, Transfer Pricing Defense'
    ],
    gccTrackRecord: 'Published flagship EY India GCC Pulse Survey; active advisory team advising foreign parent boards on entity setup.',
    sampleEngagements: [
      'End-to-end entity setup roadmap for European industrial robotics company',
      'Transfer pricing documentation and Advance Pricing Agreement (APA) for US tech firm'
    ],
    evidenceSource: 'EY India GCC Pulse Publications & Thought Leadership',
    evidenceStrength: 'High',
    evidenceNotes: 'Longstanding market advisory presence with recognized published benchmarks.',
    sourceUrl: 'https://www.ey.com/en_in/gcc'
  },
  {
    id: 'deloitte-strategy',
    company: 'Deloitte Touche Tohmatsu India',
    category: 'Consulting & Strategy',
    headquarters: 'London, UK (India HQ: Mumbai)',
    indiaPresence: ['Bengaluru', 'Hyderabad', 'Mumbai', 'Delhi NCR', 'Chennai', 'Pune'],
    coreServices: [
      'GCC Talent Strategy & Compensation Benchmarking',
      'Enterprise Architecture & Digital Center of Excellence Incubation',
      'Cross-Border Corporate Governance & Regulatory Approvals'
    ],
    gccTrackRecord: 'Extensive strategy engagements guiding US and EMEA multinationals from BOT (Build-Operate-Transfer) to captive ownership.',
    sampleEngagements: [
      'Talent blueprint and compensation banding for UK fintech establishing in Bengaluru',
      'Cross-border IT IP transfer structure for medical device manufacturer'
    ],
    evidenceSource: 'Deloitte India Publications & Industry Panel Keynotes',
    evidenceStrength: 'High',
    evidenceNotes: 'Documented advisory practice in GCC maturity frameworks.',
    sourceUrl: 'https://www.deloitte.com/in'
  },
  {
    id: 'ansr-global',
    company: 'ANSR',
    category: 'Consulting & Strategy',
    headquarters: 'Dallas, TX / Bengaluru, India',
    indiaPresence: ['Bengaluru', 'Hyderabad', 'Pune'],
    coreServices: [
      'End-to-End GCC Design, Build & Scaling (GCC-as-a-Service)',
      'Talent Acquisition & Executive Leadership Onboarding',
      'Workspace Infrastructure & Strategic Supplier Management'
    ],
    gccTrackRecord: 'Publicly credited with helping establish over 130+ GCCs in India, including Target, Lowe’s, Wells Fargo, and Delta Air Lines.',
    sampleEngagements: [
      'Assisted Target Corporation in founding Target India operations in 2005',
      'Designed and executed GCC incubation for Lowe’s Companies and Advance Auto Parts'
    ],
    evidenceSource: 'Company Disclosures, Case Studies & Harvard Business Review Studies',
    evidenceStrength: 'High',
    evidenceNotes: 'Specialized pure-play GCC builder with named client case studies on public record.',
    sourceUrl: 'https://ansr.com'
  },
  {
    id: 'khaitan-legal',
    company: 'Khaitan & Co',
    category: 'Legal & Regulatory',
    headquarters: 'Mumbai, India',
    indiaPresence: ['Mumbai', 'Bengaluru', 'Delhi NCR', 'Chennai', 'Kolkata'],
    coreServices: [
      'Foreign Direct Investment (FDI) & Reserve Bank of India (RBI) Compliances',
      'Labor Laws, Employment Contracts & IP Assignment Documentation',
      'SEZ / STPI Approvals & Cross-Border Data Privacy (DPDP Act)'
    ],
    gccTrackRecord: 'Premier full-service Indian corporate law firm representing foreign parent corporations entering Indian jurisdiction.',
    sampleEngagements: [
      'Incorporation and regulatory filings for US medical software captive entity',
      'Digital Personal Data Protection Act compliance audit for global banking GCC'
    ],
    evidenceSource: 'Chambers and Partners / Legal 500 Rankings & Corporate Filings',
    evidenceStrength: 'High',
    evidenceNotes: 'Tier-1 ranked legal counsel across corporate and employment practice.',
    sourceUrl: 'https://www.khaitanco.com'
  },
  {
    id: 'trilegal',
    company: 'Trilegal',
    category: 'Legal & Regulatory',
    headquarters: 'Mumbai / Delhi, India',
    indiaPresence: ['Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad'],
    coreServices: [
      'Employment Law, Executive Restructuring & Non-Compete Enforceability',
      'Technology & Cross-Border Data Transfers',
      'Corporate Secretarial & MCA Governance'
    ],
    gccTrackRecord: 'Advised Fortune 500 corporations on Indian labor code transitions and entity structuring.',
    sampleEngagements: [
      'Employment contracts and equity incentive scheme structuring for US SaaS GCC',
      'Regulatory compliance for AI research center cross-border code sync'
    ],
    evidenceSource: 'Legal 500 Asia Pacific & Bar Council Registry',
    evidenceStrength: 'High',
    evidenceNotes: 'Recognized corporate practice in technology and labor law.',
    sourceUrl: 'https://www.trilegal.com'
  },
  {
    id: 'korn-ferry',
    company: 'Korn Ferry India',
    category: 'Executive Search & Recruitment',
    headquarters: 'Los Angeles, CA, USA (India HQ: Gurugram)',
    indiaPresence: ['Bengaluru', 'Mumbai', 'Delhi NCR'],
    coreServices: [
      'GCC Managing Director (Center Head) & C-Level Executive Search',
      'Leadership Assessment & Succession Planning',
      'Total Rewards & Compensation Structure Design'
    ],
    gccTrackRecord: 'Placed center heads and VP-engineering leaders for numerous Fortune 500 GCCs.',
    sampleEngagements: [
      'Appointed India Managing Director for US enterprise software company in Bengaluru',
      'Recruited Global Head of Quantitative Risk for European investment bank in Hyderabad'
    ],
    evidenceSource: 'Executive Search Information & Industry Leadership Announcements',
    evidenceStrength: 'Medium',
    evidenceNotes: 'Well established global executive search brand; specific placement details confidential.',
    sourceUrl: 'https://www.kornferry.com'
  },
  {
    id: 'michael-page',
    company: 'Michael Page India (PageGroup)',
    category: 'Executive Search & Recruitment',
    headquarters: 'Weybridge, UK (India HQ: Mumbai)',
    indiaPresence: ['Bengaluru', 'Mumbai', 'Delhi NCR', 'Chennai'],
    coreServices: [
      'Mid-to-Senior Engineering, Data Science & Finance Recruitment',
      'Salary Benchmark Reports & Candidate Market Mapping',
      'Contract Staffing for Specialized Niche Skills'
    ],
    gccTrackRecord: 'Publishes annual India Salary Benchmark Report tracking GCC engineering compensation across cities.',
    sampleEngagements: [
      'Hired initial 50-member engineering core team for Nordic logistics technology GCC',
      'Built actuarial and clinical analytics team for US healthcare captive in Chennai'
    ],
    evidenceSource: 'Michael Page India Salary Benchmark Reports 2024',
    evidenceStrength: 'High',
    evidenceNotes: 'Published public salary benchmarks and broad tech recruitment portfolio.',
    sourceUrl: 'https://www.michaelpage.co.in'
  },
  {
    id: 'deel-eor',
    company: 'Deel',
    category: 'EOR & Global Payroll',
    headquarters: 'San Francisco, CA, USA',
    indiaPresence: ['Bengaluru (Operations across India)'],
    coreServices: [
      'Employer of Record (EOR) for Rapid Pre-Incorporation Hiring',
      'Statutory Compliance (EPFO, ESI, Professional Tax)',
      'Multi-Currency Contractor & Direct Payroll Management'
    ],
    gccTrackRecord: 'Enables foreign firms to hire Indian talent within days while formal legal entity incorporation is pending.',
    sampleEngagements: [
      'Onboarded first 15 founding engineers for US Series C startup while ROC registration was underway',
      'Managed compliance and payroll for distributed remote research teams across India'
    ],
    evidenceSource: 'Deel Platform Case Studies & Global Payroll Reports',
    evidenceStrength: 'Medium',
    evidenceNotes: 'Primarily used for agile pre-GCC incubation and bridge hiring prior to full captive incorporation.',
    sourceUrl: 'https://www.deel.com'
  },
  {
    id: 'awfis-workspaces',
    company: 'Awfis Space Solutions',
    category: 'Facility & Workspaces',
    headquarters: 'Delhi NCR, India',
    indiaPresence: ['Bengaluru', 'Hyderabad', 'Pune', 'Mumbai', 'Chennai', 'Delhi NCR', 'Kolkata'],
    coreServices: [
      'Enterprise Managed Workspaces & Custom Built-to-Suit Fitouts',
      'Flexible Incubation Seats for Day-1 GCC Operational Readiness',
      'Facilities Management & Physical Security Compliance'
    ],
    gccTrackRecord: 'Publicly listed provider (NSE/BSE: AWFIS) supporting multinational enterprises in hybrid and incubation workspaces.',
    sampleEngagements: [
      'Provided 300-seat dedicated managed workspace for US tech firm scaling in Hyderabad',
      'Temporary 100-seat incubation facility for European automotive firm in Pune'
    ],
    evidenceSource: 'SEBI IPO Prospectus & BSE/NSE Regulatory Filings',
    evidenceStrength: 'High',
    evidenceNotes: 'Public company with audited disclosures regarding enterprise client contracts.',
    sourceUrl: 'https://www.awfis.com'
  }
];
