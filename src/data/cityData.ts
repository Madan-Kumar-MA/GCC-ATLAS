import { CityProfile } from '../types';

export const CITIES_DATA: CityProfile[] = [
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    tier: 'Tier 1 Hub',
    tagline: 'India’s Silicon Valley & Premier GCC Innovation Epicenter',
    estimatedGCCCountRange: '580 – 640 GCCs',
    estimatedShareOfIndiaGCCs: 38,
    majorIndustries: ['Technology & SaaS', 'Semiconductors & ER&D', 'E-Commerce & Retail Tech', 'Aerospace & Defence', 'BFSI Tech & Fintech'],
    talent: {
      softwareEngineering: { rating: 'Very High', notes: 'Unmatched density of tier-1 full stack, cloud architectures, and open-source contributors.' },
      dataAndAI: { rating: 'Very High', notes: 'Highest concentration of generative AI researchers, ML scientists, and data platform architects.' },
      bfsiAndQuant: { rating: 'High', notes: 'Goldman Sachs, Fidelity, and Wells Fargo maintain primary technology centers.' },
      operationsAndSharedServices: { rating: 'High', notes: 'Extensive ecosystem of experienced global capability directors and VP-level leaders.' }
    },
    costs: {
      officeRentalPerSqFt: '₹95 - ₹160/sq.ft/month',
      officeCostLevel: 'High',
      talentCostLevel: 'High',
      operatingCostLevel: 'High',
      costAdvantageBenchmark: 'Base benchmark: Highest compensation levels and real estate rents among Indian tech hubs.'
    },
    infrastructure: {
      internationalAirport: 'Kempegowda International Airport (BLR) – Terminal 2, world-class connectivity to US/EU.',
      metroNetwork: 'Namma Metro (Purple & Green operational; Outer Ring Road Blue Line under active phased rollout).',
      majorTechCorridors: ['Outer Ring Road (ORR Bellandur to Mahadevapura)', 'Whitefield & ITPL', 'Electronic City Phase 1 & 2', 'North Bengaluru / Hebbal & Airport Corridor'],
      powerAndWaterReliability: 'High in Grade-A SEZ tech parks with 100% DG backup; municipal traffic gridlocks on key arterial corridors.',
      gradeAOfficeAvailability: 'Moderate'
    },
    statePolicyTitle: 'Karnataka IT Policy 2020–2025 & Draft Karnataka GCC Policy',
    keyIncentivesSummary: 'Reimbursement of stamp duty (up to 75-100% in Beyond Bengaluru zones; selective R&D and patent incentives in Bengaluru Urban), power tariff concessions, and anchor unit employment generation incentives.',
    notableTenants: ['Microsoft', 'Walmart', 'Goldman Sachs', 'Cisco', 'Boeing', 'Target', 'Adobe', 'Siemens', 'Bosch', 'Lowe’s', 'Google', 'Amazon'],
    strengths: [
      'Deepest and most mature executive talent pool for Global Capability Centres in Asia.',
      'Unmatched startup and VC ecosystem providing rapid tech transfer and partnerships.',
      'Dominant hub for deep-tech, silicon design, robotics, and aerospace ER&D.',
      'Preferred city for tier-1 US/European software engineers relocating back to India.'
    ],
    tradeoffs: [
      'Highest talent attrition rates (16–22% industry average during peak hiring cycles).',
      'Severe peak-hour traffic congestion on Outer Ring Road and Sarjapur corridors.',
      'Premium real-estate rentals and Grade-A tech park supply pinches in prime belts.'
    ],
    overview: 'Bengaluru remains the undisputed capital of India’s GCC landscape, accounting for approximately 38% of all centers nationwide. Multinational companies establish centers here when their primary requirement is cutting-edge product engineering, AI research, and high-complexity digital transformation mandates where depth of talent outweighs cost arbitrage.',
    confidence: 'High',
    source: 'NASSCOM-Zinnov GCC Compendium & Karnataka IT Department',
    sourceUrl: 'https://itbt.karnataka.gov.in',
    lastUpdated: 'October 2026',
    sourceTrail: [
      { name: 'NASSCOM GCC Hub Distribution Report', type: 'Industry Report', verifiedDate: '2024' },
      { name: 'JLL Bengaluru Office Market Monitor', type: 'Real Estate Benchmark', verifiedDate: 'Q3 2024' },
      { name: 'Karnataka ITBT Gazetted Notifications', type: 'Government Policy', verifiedDate: '2024' }
    ]
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    tier: 'Tier 1 Hub',
    tagline: 'High-Velocity GCC Powerhouse with World-Class Infrastructure',
    estimatedGCCCountRange: '260 – 300 GCCs',
    estimatedShareOfIndiaGCCs: 18,
    majorIndustries: ['Technology & Cloud Infrastructure', 'BFSI & Global Risk Platforms', 'Life Sciences & Pharma Informatics', 'Aerospace & Precision Manufacturing'],
    talent: {
      softwareEngineering: { rating: 'Very High', notes: 'Substantial talent pool trained across Microsoft, Google, AWS, and major enterprise campuses.' },
      dataAndAI: { rating: 'High', notes: 'Growing pool of AI and data engineers; premier academic output from IIIT Hyderabad and IIT Hyderabad.' },
      bfsiAndQuant: { rating: 'Very High', notes: 'Home to massive tech and quantitative campuses for JPMorgan, Goldman Sachs, Wells Fargo, and BNY.' },
      operationsAndSharedServices: { rating: 'Very High', notes: 'Established legacy of large-scale corporate operations, risk monitoring, and cloud services.' }
    },
    costs: {
      officeRentalPerSqFt: '₹70 - ₹105/sq.ft/month',
      officeCostLevel: 'Medium',
      talentCostLevel: 'Medium',
      operatingCostLevel: 'Medium',
      costAdvantageBenchmark: '18–25% lower total cost of occupancy compared to prime Bengaluru corridors.'
    },
    infrastructure: {
      internationalAirport: 'Rajiv Gandhi International Airport (HYD) – Expansive capacity, seamless 40-min expressway commute to IT corridor.',
      metroNetwork: 'Hyderabad Metro (Red, Blue, Green corridors with direct connection to HITEC City & Raidurg).',
      majorTechCorridors: ['HITEC City & Madhapur', 'Financial District & Nanakramguda', 'Knowledge City & Raidurg', 'Kokapet (Neopolis Golden Mile)'],
      powerAndWaterReliability: 'Very High – Dedicated 24x7 industrial IT feeders and superior urban expressway grid (Outer Ring Road).',
      gradeAOfficeAvailability: 'Very High'
    },
    statePolicyTitle: 'Telangana ICT Policy 2.0 & Dedicated GCC Strategy',
    keyIncentivesSummary: 'Single-window clearance through TS-iPASS, stamp duty concessions, power subsidy for mega projects, patent reimbursement, and customized incentive packages for marquee GCCs exceeding 1,000 employees.',
    notableTenants: ['Microsoft', 'Goldman Sachs', 'JPMorgan Chase', 'Wells Fargo', 'Amazon', 'ServiceNow', 'Qualcomm', 'Novartis', 'Micron', 'State Street'],
    strengths: [
      'Unsurpassed urban infrastructure: 8-lane Outer Ring Road and planned financial districts.',
      'Proactive, accessible single-window state government administration (Telangana ITE&C).',
      'Abundant availability of mega Grade-A commercial office campuses in Kokapet and Financial District.',
      'Significantly lower employee attrition (12–15%) compared to Bengaluru.'
    ],
    tradeoffs: [
      'Startup and venture ecosystem is smaller than Bengaluru for early-stage niche talent poaching.',
      'Summers experience extreme heat waves (April–May) impacting campus utility loads.',
      'Competition for senior leadership profiles (VP/SVP level) often requires relocation from Bengaluru/Mumbai.'
    ],
    overview: 'Hyderabad has emerged as the most formidable challenger to Bengaluru, commanding an 18% share of India’s GCC landscape. With the proactive governance of Telangana ITE&C, pristine Grade-A business parks in HITEC City and Knowledge City, and cost savings of 20%, it is the top choice for companies looking to establish 500+ seat technology and BFSI centres rapidly.',
    confidence: 'High',
    source: 'Telangana ITE&C Annual Review & Knight Frank Research',
    sourceUrl: 'https://it.telangana.gov.in',
    lastUpdated: 'October 2026',
    sourceTrail: [
      { name: 'Telangana ITE&C Department Official Annual Report', type: 'Government Policy', verifiedDate: '2024' },
      { name: 'Knight Frank India GCC Commercial Real Estate Index', type: 'Real Estate Benchmark', verifiedDate: 'Q3 2024' }
    ]
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    tier: 'Tier 1 Hub',
    tagline: 'SaaS Capital, Engineering R&D & Healthcare Capability Hub',
    estimatedGCCCountRange: '190 – 230 GCCs',
    estimatedShareOfIndiaGCCs: 13,
    majorIndustries: ['Automotive & Industrial ER&D', 'Healthcare & Clinical Trials', 'Enterprise SaaS & Cloud Software', 'Banking Tech & Shared Services'],
    talent: {
      softwareEngineering: { rating: 'High', notes: 'Premier engineering talent base backed by IIT Madras, Anna University, and dense SaaS ecosystem.' },
      dataAndAI: { rating: 'Moderate', notes: 'Solid statistical modeling and biostatistics talent, particularly in healthcare and automotive telematics.' },
      bfsiAndQuant: { rating: 'High', notes: 'Established legacy centers for Standard Chartered, Bank of America, Citi, and Wells Fargo.' },
      operationsAndSharedServices: { rating: 'Very High', notes: 'Exceptionally stable workforce with lowest attrition rates among India’s top tech metros.' }
    },
    costs: {
      officeRentalPerSqFt: '₹65 – ₹95/sq.ft/month',
      officeCostLevel: 'Low',
      talentCostLevel: 'Low',
      operatingCostLevel: 'Low',
      costAdvantageBenchmark: '25–32% lower overall operational costs than Bengaluru; highly cost-efficient long-term talent retention.'
    },
    infrastructure: {
      internationalAirport: 'Chennai International Airport (MAA) – Direct flights to Southeast Asia, Europe, and Middle East.',
      metroNetwork: 'Chennai Metro Phase 1 operational; Phase 2 (118.9 km across 3 corridors) under fast-track execution.',
      majorTechCorridors: ['Old Mahabalipuram Road (OMR / Rajiv Gandhi Salai)', 'Grand Southern Trunk (GST Road)', 'Taramani / Ramanujan IT City', 'Ambattur Industrial & IT Estate'],
      powerAndWaterReliability: 'High in institutional IT parks; coastal city with high seasonal humidity and monsoon rainfall management.',
      gradeAOfficeAvailability: 'High'
    },
    statePolicyTitle: 'Tamil Nadu GCC Policy 2023 & Tamil Nadu R&D Policy 2022',
    keyIncentivesSummary: 'India’s first dedicated state GCC Policy: Payroll subsidies for women and specialized employees, capital subsidies for Grade-A space fitouts, stamp duty concessions, and R&D grants via Guidance Tamil Nadu.',
    notableTenants: ['Walmart Global Tech', 'AstraZeneca', 'Wells Fargo', 'Amazon', 'Cisco', 'Standard Chartered (SCOPE)', 'Ford (GBS)', 'Hitachi Energy', 'Caterpillar', 'Zoho Corp'],
    strengths: [
      'India’s lowest tech employee attrition (typically 8–12%), ensuring deep institutional knowledge.',
      'Deep ER&D specialization combining hardware, mechanical, electrical, and embedded software.',
      'First state government in India to launch a dedicated Global Capability Centre Policy with cash subsidies.',
      'Strong institutional culture of discipline, compliance, and long tenure.'
    ],
    tradeoffs: [
      'Perceived as culturally conservative with less spontaneous nightlife compared to Bengaluru or Mumbai.',
      'Venture capital-backed consumer internet ecosystem is relatively modest compared to North Bengaluru.',
      'Hot and humid tropical climate for a significant portion of the calendar year.'
    ],
    overview: 'Chennai has carved out a unique position in India’s GCC landscape, capturing ~13% of all centers. Recognized as India’s SaaS and automotive capital, Chennai provides global firms with extraordinary talent stability, lowest attrition rates nationwide, and unmatched depth in embedded engineering, automotive software, and life-sciences clinical trial analytics.',
    confidence: 'High',
    source: 'Guidance Tamil Nadu & NASSCOM GCC Compendium',
    sourceUrl: 'https://investingintamilnadu.com',
    lastUpdated: 'September 2026',
    sourceTrail: [
      { name: 'Tamil Nadu GCC Policy 2023 Gazetted Text', type: 'Government Policy', verifiedDate: '2023' },
      { name: 'CBRE Chennai Real Estate & Tech Leasing Monitor', type: 'Real Estate Benchmark', verifiedDate: '2024' }
    ]
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    tier: 'Tier 1 Hub',
    tagline: 'Automotive Software, Engineering R&D & FinTech Innovation Hub',
    estimatedGCCCountRange: '160 – 195 GCCs',
    estimatedShareOfIndiaGCCs: 11,
    majorIndustries: ['Automotive & Mobility Engineering', 'Enterprise Software & ERP', 'Industrial Automation', 'FinTech & Wealth Management Tech'],
    talent: {
      softwareEngineering: { rating: 'High', notes: 'Strong educational pipeline with over 100 engineering institutes; deep enterprise Java/C++ background.' },
      dataAndAI: { rating: 'Moderate', notes: 'Strong focus on industrial IoT, predictive maintenance, and automotive vision algorithms.' },
      bfsiAndQuant: { rating: 'High', notes: 'Substantial presence of European financial institutions including UBS, Deutsche Bank, Credit Suisse, and Barclays.' },
      operationsAndSharedServices: { rating: 'High', notes: 'Experienced middle-management pool with strong European work culture alignment.' }
    },
    costs: {
      officeRentalPerSqFt: '₹70 – ₹100/sq.ft/month',
      officeCostLevel: 'Medium',
      talentCostLevel: 'Medium',
      operatingCostLevel: 'Medium',
      costAdvantageBenchmark: '20–25% lower total employee and office costs compared to Mumbai.'
    },
    infrastructure: {
      internationalAirport: 'Pune International Airport (Lohegaon New Integrated Terminal); expressway connectivity to Mumbai (2.5 hours).',
      metroNetwork: 'Pune Metro Line 1 & Line 2 operational; Hinjawadi to Shivajinagar elevated Metro Line 3 nearing completion.',
      majorTechCorridors: ['Hinjawadi Rajiv Gandhi Infotech Park (Phases 1, 2, 3)', 'Kharadi World Trade Center & EON Free Zone', 'Magarpatta Cybercity', 'Baner & Balewadi'],
      powerAndWaterReliability: 'High in established parks; peak hour traffic between Hinjawadi and city center requires planned transit.',
      gradeAOfficeAvailability: 'High'
    },
    statePolicyTitle: 'Maharashtra IT & ITeS Policy 2023',
    keyIncentivesSummary: 'Stamp duty waiver of up to 100% in designated IT parks, electricity duty exemption for 10–15 years, power tariff subsidy, and specialized incentives for green data centers and high-value ER&D units.',
    notableTenants: ['Siemens', 'Bosch', 'Barclays', 'Deutsche Bank', 'UBS', 'BNY Mellon', 'Mastercard', 'Volkswagen Group Tech', 'PTC Software', 'John Deere'],
    strengths: [
      'Exceptional proximity to Mumbai financial markets while offering suburban quality of life and lower costs.',
      'Stronghold for European automotive and industrial engineering conglomerates.',
      'Vibrant academic ecosystem producing a reliable annual crop of mechanical, computer, and electronics engineers.',
      'Moderate climate and pleasant living environment attractive to young tech talent.'
    ],
    tradeoffs: [
      'Hinjawadi IT corridor experiences significant bottlenecking during evening peak hours.',
      'Airport international flight connectivity is constrained compared to Mumbai or Bengaluru (often routes via BOM).',
      'Fewer consumer internet giants compared to Bengaluru and Delhi NCR.'
    ],
    overview: 'Pune is a premier hub for Engineering R&D (ER&D), automotive software, and European banking captives, accounting for 11% of India’s GCC footprint. Situated just 150 km from Mumbai, it combines access to capital markets with an engineering university belt, making it ideal for deep product engineering and automotive tech.',
    confidence: 'High',
    source: 'Maharashtra Industrial Development Corporation (MIDC) & Colliers Research',
    sourceUrl: 'https://midcindia.org',
    lastUpdated: 'September 2026',
    sourceTrail: [
      { name: 'Maharashtra IT & ITeS Policy 2023 Gazette', type: 'Government Policy', verifiedDate: '2023' },
      { name: 'Colliers India Pune Grade-A Office Absorption', type: 'Real Estate Benchmark', verifiedDate: '2024' }
    ]
  },
  {
    id: 'delhi-ncr',
    name: 'Delhi NCR',
    state: 'Haryana & Uttar Pradesh',
    tier: 'Tier 1 Hub',
    tagline: 'Consumer Internet, Consulting & Telecom Enterprise Engine',
    estimatedGCCCountRange: '150 – 180 GCCs',
    estimatedShareOfIndiaGCCs: 10,
    majorIndustries: ['Telecom & Digital Media', 'Consumer Tech & Global Retail', 'Professional Services & Consulting', 'FinTech & Shared Services'],
    talent: {
      softwareEngineering: { rating: 'High', notes: 'Strong talent pool across Gurugram and Noida, fed by IIT Delhi, DTU, and regional universities.' },
      dataAndAI: { rating: 'High', notes: 'Exceptional talent in business analytics, marketing intelligence, and consumer behavior modeling.' },
      bfsiAndQuant: { rating: 'Moderate', notes: 'Fidelity, American Express, and NatWest run major centers; focus leans toward operations and retail banking.' },
      operationsAndSharedServices: { rating: 'Very High', notes: 'Largest shared-services and global business operations talent pool in North India.' }
    },
    costs: {
      officeRentalPerSqFt: '₹75 – ₹135/sq.ft/month',
      officeCostLevel: 'Medium',
      talentCostLevel: 'Medium',
      operatingCostLevel: 'Medium',
      costAdvantageBenchmark: 'Gurugram Cyber City commands premium pricing; Noida offers 25–35% cost discount.'
    },
    infrastructure: {
      internationalAirport: 'Indira Gandhi International Airport (DEL) – India’s largest international hub; upcoming Jewar Airport in Noida.',
      metroNetwork: 'Delhi Metro & Rapid Metro Gurugram – Unrivaled extensive multi-modal transit system across state borders.',
      majorTechCorridors: ['DLF Cyber City & Golf Course Road (Gurugram)', 'Noida Expressway (Sector 125–135)', 'Udyog Vihar (Gurugram)', 'Noida Sector 62'],
      powerAndWaterReliability: 'High in private integrated commercial complexes; seasonal air quality challenges in winter months (Nov–Dec).',
      gradeAOfficeAvailability: 'High'
    },
    statePolicyTitle: 'Haryana IT & ESDM Policy / UP IT & ITeS Policy',
    keyIncentivesSummary: 'Haryana offers employment generation subsidies and stamp duty concessions; Uttar Pradesh offers substantial capital investment subsidies (up to 25%) and lease rental subsidies for mega IT units in Noida.',
    notableTenants: ['Adobe', 'Microsoft', 'American Express', 'NatWest Group', 'Optum (UnitedHealth)', 'Cisco', 'Ericsson', 'Walmart', 'Samsung R&D', 'Genpact'],
    strengths: [
      'Unmatched geopolitical access to national policy makers, regulatory bodies, and diplomatic missions.',
      'Outstanding international flight connectivity via Delhi Terminal 3.',
      'Extensive Delhi Metro rapid transit connecting suburban talent across three states.',
      'Dual micro-market dynamics: Premium corporate headquarters in Gurugram, high-value scale in Noida.'
    ],
    tradeoffs: [
      'Severe seasonal winter air pollution (smog index spikes during November–December).',
      'Multi-state governance fragmentation between Delhi NCT, Haryana, and Uttar Pradesh administrations.',
      'Higher summer and winter temperature extremes compared to South Indian tech hubs.'
    ],
    overview: 'Delhi NCR (incorporating Gurugram and Noida) represents 10% of India’s GCC landscape. As the political and administrative hub of India with exceptional aviation connectivity, it is chosen by Fortune 500 corporations establishing strategic centers with significant policy alignment, consulting, telecommunications, and digital media workloads.',
    confidence: 'High',
    source: 'Haryana Enterprise Promotion Center & UP IT Department',
    sourceUrl: 'https://haryanaindustries.gov.in',
    lastUpdated: 'October 2026',
    sourceTrail: [
      { name: 'Haryana IT & ESDM Policy Document', type: 'Government Policy', verifiedDate: '2023' },
      { name: 'Cushman & Wakefield NCR Commercial Real Estate', type: 'Real Estate Benchmark', verifiedDate: '2024' }
    ]
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    tier: 'Tier 1 Hub',
    tagline: 'Financial Capital of India & High-Stakes Institutional BFSI Hub',
    estimatedGCCCountRange: '130 – 160 GCCs',
    estimatedShareOfIndiaGCCs: 9,
    majorIndustries: ['Investment Banking & Capital Markets', 'Insurance & Wealth Management Tech', 'Maritime & Global Trade Logistics', 'Media & Entertainment Tech'],
    talent: {
      softwareEngineering: { rating: 'High', notes: 'Premier institution graduates (IIT Bombay, VJTI) specialized in ultra-low latency systems.' },
      dataAndAI: { rating: 'High', notes: 'Highest concentration of financial econometricians, quantitative quants, and risk modelers.' },
      bfsiAndQuant: { rating: 'Very High', notes: 'Undisputed leader in institutional financial market talent, regulatory accounting, and treasury.' },
      operationsAndSharedServices: { rating: 'Very High', notes: 'Deep leadership bench in risk, legal, compliance, custody, and treasury operations.' }
    },
    costs: {
      officeRentalPerSqFt: '₹120 – ₹275/sq.ft/month',
      officeCostLevel: 'High',
      talentCostLevel: 'High',
      operatingCostLevel: 'High',
      costAdvantageBenchmark: 'Bandra-Kurla Complex (BKC) is India’s most expensive real estate; suburban Malad/Airoli offers moderate relief.'
    },
    infrastructure: {
      internationalAirport: 'Chhatrapati Shivaji Maharaj International Airport (BOM); upcoming Navi Mumbai International Airport (NMIAL).',
      metroNetwork: 'Mumbai Metro Lines 2A, 7, and Aqua Line 3 (underground connecting Colaba to SEEPZ).',
      majorTechCorridors: ['Bandra-Kurla Complex (BKC)', 'Mindspace Malad & Goregaon', 'Powai & Vikhroli (LBS Marg)', 'Navi Mumbai (Airoli & Ghansoli Mindspace)'],
      powerAndWaterReliability: 'Very High – Mumbai island grid has historically been India’s most reliable continuous electrical supply.',
      gradeAOfficeAvailability: 'Constrained'
    },
    statePolicyTitle: 'Maharashtra FinTech Policy & IT/ITeS Policy 2023',
    keyIncentivesSummary: 'Fintech capital grants, stamp duty exemptions in IT SEZs, regulatory sandbox access with financial authorities, and specialized infrastructure subsidies in Navi Mumbai.',
    notableTenants: ['JPMorgan Chase', 'Morgan Stanley', 'Citi', 'Barclays', 'Bank of America', 'UBS', 'Macquarie', 'Nomura', 'BNP Paribas', 'Blackstone'],
    strengths: [
      'Unrivaled access to RBI, SEBI, BSE, NSE, and executive headquarters of India’s financial industry.',
      'Top-tier talent in quantitative algorithmic trading, credit underwriting, and capital markets.',
      'Unsurpassed power grid reliability and cosmopolitan lifestyle appeal for global C-level executives.',
      'Deep pool of chartered accountants, financial risk managers (FRM), and corporate legal counsel.'
    ],
    tradeoffs: [
      'India’s highest real-estate rental and residential cost of living.',
      'Limited availability of single-tenant mega campus plots (>1 million sq.ft) in central districts.',
      'Monsoon flood disruption risks in low-lying suburban commuter arteries.'
    ],
    overview: 'Mumbai commands 9% of India’s GCC landscape, but represents the highest concentration of high-value, complex BFSI institutional capability centers. Global investment banks and asset managers choose Mumbai when their GCC mission requires direct access to regulatory bodies, high-frequency quantitative quants, and capital markets technology.',
    confidence: 'High',
    source: 'Maharashtra FinTech Department & JLL Mumbai Capital Markets',
    sourceUrl: 'https://fintech.maharashtra.gov.in',
    lastUpdated: 'September 2026',
    sourceTrail: [
      { name: 'Maharashtra FinTech Policy Gazette', type: 'Government Policy', verifiedDate: '2023' },
      { name: 'JLL Mumbai Prime Office Leasing Review', type: 'Real Estate Benchmark', verifiedDate: '2024' }
    ]
  }
];
