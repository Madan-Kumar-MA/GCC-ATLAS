import { DiscrepancyReport, GCCActivitySignal } from '../types';

export const GCC_DISCREPANCY_REPORTS: DiscrepancyReport[] = [
  {
    sourceName: 'NASSCOM – Zinnov GCC India Pulse',
    author: 'NASSCOM & Zinnov Consulting',
    estimatedCount: '1,580 – 1,650 units',
    reportingYear: 'FY 2024–2025',
    definitionUsed: 'Counts discrete captive entities with pure ownership by foreign parents, with minimum 50 full-time specialized knowledge/tech workers.',
    methodologyNotes: 'Filters out 3rd party BPO captives converted to third-party vendors. Focuses on tech, digital engineering, and core enterprise functions.',
    sourceCitation: 'NASSCOM-Zinnov Annual GCC Compendium 2024-2025'
  },
  {
    sourceName: 'EY India GCC Report',
    author: 'Ernst & Young Global Limited',
    estimatedCount: '1,600+ GCCs (projected 2,400+ by 2030)',
    reportingYear: '2024 / Q1 2025 Update',
    definitionUsed: 'Captive centers executing technology, operations, or enterprise transformation mandates with registered corporate presence.',
    methodologyNotes: 'Consolidates multi-center footprints of singular parent conglomerates into parent GCC entities while tracking total installed talent pool (~1.9M).',
    sourceCitation: 'EY India GCC Pulse Survey & Executive Briefing'
  },
  {
    sourceName: 'ANSR GCC Quarterly Benchmark',
    author: 'ANSR Global',
    estimatedCount: '1,720+ active operating centers',
    reportingYear: '2024',
    definitionUsed: 'Campus-level count including secondary satellite hubs established by existing global parent brands in Tier 2 cities.',
    methodologyNotes: 'Treats secondary regional hubs (e.g. an existing Bengaluru firm opening an innovation lab in Coimbatore or Hyderabad) as distinct operating units.',
    sourceCitation: 'ANSR GCC Market Intelligence & Expansion Monitor'
  },
  {
    sourceName: 'CBRE India Office & Research',
    author: 'CBRE South Asia Research',
    estimatedCount: '1,520 institutional occupiers',
    reportingYear: 'H2 2024',
    definitionUsed: 'Large-scale Grade-A commercial office space leases (>25,000 sq.ft) registered to multinational corporate captives.',
    methodologyNotes: 'Real-estate lease footprint tracking. Does not capture early-stage incubators or hybrid flexible workspace memberships under 20 seats.',
    sourceCitation: 'CBRE India Commercial Real Estate & GCC Leasing Index'
  }
];

export const RECENT_GCC_SIGNALS: GCCActivitySignal[] = [
  {
    id: 'sig-01',
    company: 'Adobe',
    city: 'Bengaluru',
    industry: 'Technology',
    activityType: 'AI Lab Setup',
    headline: 'Adobe expands generative AI engineering & Firefly core model labs in Bengaluru campus.',
    date: 'February 2025',
    source: 'Company Press Release & Business Standard',
    sourceUrl: 'https://news.adobe.com',
    scaleEstimate: 'Added ~450 advanced ML engineers'
  },
  {
    id: 'sig-02',
    company: 'Wells Fargo',
    city: 'Hyderabad',
    industry: 'BFSI',
    activityType: 'Facility Expansion',
    headline: 'Wells Fargo leases additional 400,000 sq.ft in HITEC City for enterprise risk & cloud platform modernisation.',
    date: 'January 2025',
    source: 'Registrar of Companies Filing & Economic Times',
    sourceUrl: 'https://economictimes.indiatimes.com',
    scaleEstimate: 'Expansion to support 3,000+ roles'
  },
  {
    id: 'sig-03',
    company: 'Siemens Healthineers',
    city: 'Bengaluru',
    industry: 'Healthcare & Pharma',
    activityType: 'R&D Mandate',
    headline: 'Siemens Healthineers opens dedicated Innovation Centre focused on precision diagnostic imaging & medical AI.',
    date: 'November 2024',
    source: 'Siemens Corporate Media Center',
    sourceUrl: 'https://www.siemens-healthineers.com',
    scaleEstimate: 'R&D campus housing 1,800+ researchers'
  },
  {
    id: 'sig-04',
    company: 'Boeing',
    city: 'Bengaluru',
    industry: 'Industrial & Engineering',
    activityType: 'New Center Launch',
    headline: 'Boeing inaugurates state-of-the-art 43-acre BIETC campus at Devanahalli, its largest tech investment outside the US.',
    date: 'January 2024 / Expanded 2025',
    source: 'Boeing India Corporate & Official Release',
    sourceUrl: 'https://www.boeing.co.in',
    scaleEstimate: 'Campus capacity 3,500+ engineers'
  },
  {
    id: 'sig-05',
    company: 'Goldman Sachs',
    city: 'Hyderabad',
    industry: 'BFSI',
    activityType: 'Facility Expansion',
    headline: 'Goldman Sachs scales operations in Hyderabad hub to over 3,500 professionals across quants, asset management, and cybersecurity.',
    date: 'December 2024',
    source: 'Telangana ITE&C Dept Release & LiveMint',
    sourceUrl: 'https://it.telangana.gov.in',
    scaleEstimate: '3,500+ headcount reached'
  },
  {
    id: 'sig-06',
    company: 'Walmart',
    city: 'Chennai',
    industry: 'Retail & Consumer',
    activityType: 'New Center Launch',
    headline: 'Walmart Global Tech adds specialized supply chain and robotics engineering teams at its Chennai development hub.',
    date: 'October 2024',
    source: 'Walmart Global Tech Newsroom',
    sourceUrl: 'https://tech.walmart.com',
    scaleEstimate: 'Multi-thousand engineer presence across India'
  },
  {
    id: 'sig-07',
    company: 'Bosch',
    city: 'Pune',
    industry: 'Industrial & Engineering',
    activityType: 'R&D Mandate',
    headline: 'Bosch Global Software Technologies expands software-defined vehicle (SDV) engineering unit in Pune.',
    date: 'September 2024',
    source: 'Bosch India Press Briefing',
    sourceUrl: 'https://www.bosch.in',
    scaleEstimate: 'Specialized autonomous driving & EV software'
  },
  {
    id: 'sig-08',
    company: 'JPMorgan Chase',
    city: 'Mumbai',
    industry: 'BFSI',
    activityType: 'Facility Expansion',
    headline: 'JPMorgan Chase inaugurates consolidated 1.1 million sq.ft campus in Mindspace Malad for institutional securities & technology.',
    date: 'May 2024',
    source: 'JPMorgan Press & Mint',
    sourceUrl: 'https://www.jpmorganchase.com',
    scaleEstimate: 'Co-locates technology and investment bank operations'
  }
];

export const MACRO_STATISTICS = {
  trackedGCCsCount: '1,620+',
  trackedGCCsConfidence: 'Consensus Estimate (1,580–1,720 range across primary reports)',
  tier1CitiesCount: 6,
  trackedIndustriesCount: 6,
  talentPoolInstalled: '~1.9 Million FTEs',
  marketEconomicOutput: '~$60 Billion USD in annual export value',
  lastAuditDate: 'October 2026',
  dataFreshnessNotes: 'Indexed from official corporate disclosures, state gazettes, and tier-1 market research reports.'
};
