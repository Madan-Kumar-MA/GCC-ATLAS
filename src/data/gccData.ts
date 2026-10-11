import { GCCCompany } from '../types';

export const GCC_COMPANIES: GCCCompany[] = [
  {
    id: 'microsoft',
    company: 'Microsoft',
    globalHeadquarters: 'Redmond, WA, USA',
    industry: 'Technology',
    cities: ['Bengaluru', 'Hyderabad', 'Delhi NCR', 'Pune'],
    locations: [
      { city: 'Hyderabad', state: 'Telangana', campusName: 'Gachibowli IDC (India Development Center)', isPrimary: true },
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Vigyan Nagar & Outer Ring Road Campus', isPrimary: false },
      { city: 'Delhi NCR', state: 'Uttar Pradesh', campusName: 'Noida Sector 16A Taj Mahal Inspired Campus', isPrimary: false }
    ],
    functions: [
      'Core Windows & Azure Cloud Kernel Engineering',
      'Copilot & Generative AI Research (MSR India)',
      'Enterprise Security & Identity Engineering',
      'Developer Division & GitHub Core Services',
      'Global Customer Support & Consulting Services'
    ],
    establishedYear: 1998,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 20,000+ employees across India (IDC + Global Sales/Services)',
    status: 'Expanding',
    keyWorkloads: ['Azure Hyper-scale cloud management', 'Office 365 core services', 'Microsoft Research AI foundational models'],
    description: 'Microsoft India Development Center (IDC) was established in 1998 in Hyderabad and represents Microsoft’s largest R&D facility outside Redmond. It owns key architectural components across Azure, Windows, AI, and Office products.',
    timeline: [
      { year: 1998, title: 'IDC Inaugurated in Hyderabad', description: 'Established as Microsoft’s first dedicated offshore product engineering center.', source: 'Microsoft Corporate History' },
      { year: 2005, title: 'Microsoft Research India Founded in Bengaluru', description: 'World-class basic computer science and applied algorithms research institute opened.', source: 'MSR Press Release' },
      { year: 2021, title: 'Noida Hub Inaugurated', description: 'Engineering hub opened in NCR with architecture inspired by the Taj Mahal.', source: 'Microsoft India News Center' },
      { year: 2024, title: 'Advancing AI Initiatives', description: 'Pledged broad skilling initiative and deepened Copilot infrastructure workloads in Hyderabad and Bengaluru.', source: 'Satya Nadella India Keynote' }
    ],
    recentSignals: [
      'Opened additional engineering floorplates in Noida for Azure global networking.',
      'Active patent filings in multilingual speech and low-resource LLM inference.'
    ],
    confidence: 'High',
    source: 'Microsoft Annual 10-K & Microsoft IDC Official Disclosures',
    sourceUrl: 'https://www.microsoft.com/en-in/about',
    sourceType: 'Securities Filing',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'SEC Form 10-K Global Footprint', type: 'Securities Filing', verifiedDate: 'August 2024', url: 'https://www.sec.gov' },
      { name: 'Microsoft India Official Site', type: 'Company Announcement', verifiedDate: 'October 2024', url: 'https://news.microsoft.com/en-in' }
    ]
  },
  {
    id: 'walmart',
    company: 'Walmart Global Tech',
    globalHeadquarters: 'Bentonville, AR, USA',
    industry: 'Retail & Consumer',
    cities: ['Bengaluru', 'Chennai', 'Delhi NCR'],
    locations: [
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Aura Greenidge & Kadubeesanahalli', isPrimary: true },
      { city: 'Chennai', state: 'Tamil Nadu', campusName: 'RMZ Millenia, Perungudi', isPrimary: false },
      { city: 'Delhi NCR', state: 'Haryana', campusName: 'Gurugram Tech Center', isPrimary: false }
    ],
    functions: [
      'Omnichannel Retail Supply Chain Algorithms',
      'Automated Inventory Replenishment & Pricing Engines',
      'Computer Vision for Autonomous Checkout & Fulfillment',
      'Global FinTech & Merchant Payment Platforms',
      'Cybersecurity & Global SOC'
    ],
    establishedYear: 2011,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 8,500 – 10,000 tech associates in India',
    status: 'Expanding',
    keyWorkloads: ['Supply Chain Graph AI', 'Global E-Commerce Web Platforms', 'Store Associate Digital Assistants'],
    description: 'Walmart Global Tech India builds enterprise technology platforms powering over 10,500 stores and club locations across 19 countries, serving 255 million customers weekly.',
    timeline: [
      { year: 2011, title: 'Walmart Labs India Formed in Bengaluru', description: 'Started through strategic acquisitions and engineering build-out in Bengaluru.', source: 'Company Press Release' },
      { year: 2018, title: 'Chennai Center Scaled', description: 'Expanded into Chennai to recruit deep enterprise software and supply chain engineers.', source: 'Walmart Global Tech Blog' },
      { year: 2022, title: 'Rebranded as Walmart Global Tech', description: 'Consolidated end-to-end retail technology product ownership.', source: 'NASSCOM Compendium' },
      { year: 2024, title: 'Supply Chain AI Hub Launch', description: 'Expanded robotics simulation and predictive routing engineering teams.', source: 'Economic Times' }
    ],
    recentSignals: [
      'Expanded autonomous warehouse routing platform engineers in Chennai and Bengaluru.',
      'Active collaboration with Indian Institute of Science (IISc) on edge retail computing.'
    ],
    confidence: 'High',
    source: 'Walmart Inc. Annual Disclosures & Walmart Global Tech Newsroom',
    sourceUrl: 'https://tech.walmart.com',
    sourceType: 'Company Announcement',
    lastVerified: 'September 2026',
    sourceTrail: [
      { name: 'Walmart Global Tech Newsroom', type: 'Company Announcement', verifiedDate: 'July 2024', url: 'https://tech.walmart.com' },
      { name: 'NASSCOM Retail Tech GCC Report', type: 'Industry Report', verifiedDate: '2024' }
    ]
  },
  {
    id: 'jpmorgan',
    company: 'JPMorgan Chase & Co.',
    globalHeadquarters: 'New York, NY, USA',
    industry: 'BFSI',
    cities: ['Mumbai', 'Bengaluru', 'Hyderabad'],
    locations: [
      { city: 'Mumbai', state: 'Maharashtra', campusName: 'Mindspace Malad & BKC (Nesco Goregaon)', isPrimary: true },
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Embassy TechVillage, Bellandur', isPrimary: false },
      { city: 'Hyderabad', state: 'Telangana', campusName: 'Salarpuria Sattva Knowledge City', isPrimary: false }
    ],
    functions: [
      'Algorithmic Trading & High-Frequency Risk Engine Tech',
      'Global Payments Infrastructure & Onyx Blockchain',
      'Quantitative Research & Capital Markets Analytics',
      'Regulatory Compliance & Basel III/IV Risk Reporting',
      'Cybersecurity & Global Technology Operations'
    ],
    establishedYear: 2002,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 45,000+ corporate centers and tech headcount across India',
    status: 'Established',
    keyWorkloads: ['ATHENA cross-asset risk management system', 'Global Treasury Services APIs', 'Fraud Machine Learning'],
    description: 'JPMorgan Chase’s Corporate Centers in India are an integral component of the firm’s global operating model, executing sophisticated quantitative analytics, core trading infrastructure, and round-the-clock enterprise technology.',
    timeline: [
      { year: 2002, title: 'Inception of India Technology Center', description: 'Established shared operations and software development in Mumbai.', source: 'JPMC Corporate Archive' },
      { year: 2015, title: 'Bengaluru & Hyderabad Footprint Scaled', description: 'Multi-campus expansion dedicated to Athena trading system and cloud platforms.', source: 'JPMC News' },
      { year: 2021, title: 'Consolidation at Knowledge City Hyderabad', description: 'Leased 1 million+ sq.ft campus in HITEC City corridor.', source: 'Telangana Today' },
      { year: 2024, title: 'Inauguration of Consolidate Mumbai Campus', description: 'Opened state-of-the-art campus in Mindspace Malad.', source: 'LiveMint' }
    ],
    recentSignals: [
      'Increased hiring for Quantitative Analysts (PhDs/Math grads) for fixed income models in Mumbai.',
      'Core contribution to Onyx digital asset networks and real-time cross-border settlements.'
    ],
    confidence: 'High',
    source: 'JPMorgan Chase Global Corporate Annual Report & India Media Releases',
    sourceUrl: 'https://www.jpmorganchase.com/careers/locations/india',
    sourceType: 'Securities Filing',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'JPMorgan Chase Global Corporate Center Disclosures', type: 'Securities Filing', verifiedDate: '2024' },
      { name: 'Telangana State Investment Records', type: 'Government Policy', verifiedDate: '2024' }
    ]
  },
  {
    id: 'goldman-sachs',
    company: 'Goldman Sachs',
    globalHeadquarters: 'New York, NY, USA',
    industry: 'BFSI',
    cities: ['Bengaluru', 'Hyderabad'],
    locations: [
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Helios Business Park, Outer Ring Road', isPrimary: true },
      { city: 'Hyderabad', state: 'Telangana', campusName: 'Salarpuria Sattva Knowledge City', isPrimary: false }
    ],
    functions: [
      'Seculending & Global Prime Brokerage Platforms',
      'SecDB Distributed Pricing & Risk Calculation System',
      'Asset & Wealth Management Portfolio Analytics',
      'Firmwide Quantitative Research & Strategy',
      'Internal Cloud & Distributed Infrastructure Engineering'
    ],
    establishedYear: 2004,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 9,000+ professionals across Bengaluru and Hyderabad',
    status: 'Expanding',
    keyWorkloads: ['SecDB architecture evolution', 'Digital banking APIs', 'Risk data engineering'],
    description: 'Goldman Sachs Bengaluru is the firm’s second-largest office in the world after New York. It houses engineers, quants, and operations professionals who build core software that drives global capital markets.',
    timeline: [
      { year: 2004, title: 'Bengaluru Office Inception', description: 'Established as an engineering and operations hub.', source: 'GS Press Archive' },
      { year: 2019, title: 'Helios Campus Inaugurated', description: 'Moved to a state-of-the-art $250M 1.2M sq.ft sustainable campus in Bengaluru.', source: 'GS Press Release' },
      { year: 2021, title: 'Hyderabad Office Established', description: 'Opened second location focused on engineering and asset management.', source: 'Telangana IT Dept' },
      { year: 2024, title: 'Hyderabad Milestone Reached', description: 'Office crossed 3,500 people, accelerating quant and platform roles.', source: 'BusinessLine' }
    ],
    recentSignals: [
      'Hyderabad office expanded to 3,500+ professionals across engineering and asset management.',
      'Active developer contributions to Legend data platform open-source initiative.'
    ],
    confidence: 'High',
    source: 'Goldman Sachs Official Press Room & Regulatory Disclosures',
    sourceUrl: 'https://www.goldmansachs.com/careers/locations/india',
    sourceType: 'Company Announcement',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'Goldman Sachs India Official Career Portal', type: 'Company Announcement', verifiedDate: '2024' },
      { name: 'Telangana ITE&C Annual Review', type: 'Government Policy', verifiedDate: '2024' }
    ]
  },
  {
    id: 'wells-fargo',
    company: 'Wells Fargo',
    globalHeadquarters: 'San Francisco, CA, USA',
    industry: 'BFSI',
    cities: ['Hyderabad', 'Bengaluru', 'Chennai'],
    locations: [
      { city: 'Hyderabad', state: 'Telangana', campusName: 'DivyaSree Orion SEZ, Raidurg', isPrimary: true },
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Embassy TechVillage, Outer Ring Road', isPrimary: false },
      { city: 'Chennai', state: 'Tamil Nadu', campusName: 'Ramanujan IT City, Taramani', isPrimary: false }
    ],
    functions: [
      'Commercial & Consumer Banking Core Software',
      'Financial Crimes Risk Modeling & AML Engines',
      'Enterprise Architecture & Multi-Cloud Infrastructure',
      'Data Analytics & Credit Decision Science',
      'Internal Audit & Global Operations'
    ],
    establishedYear: 2006,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 28,000+ employees across Hyderabad, Bengaluru, and Chennai',
    status: 'Expanding',
    keyWorkloads: ['Enterprise Data Lake', 'Digital Banking Modernization', 'Cyber Defence Operations'],
    description: 'Wells Fargo India & Philippines is a critical talent and execution anchor for Wells Fargo globally, executing critical technology engineering, data management, and operational workflows.',
    timeline: [
      { year: 2006, title: 'Inauguration in Hyderabad', description: 'Began technology operations in Hyderabad.', source: 'Company History' },
      { year: 2011, title: 'Bengaluru Campus Established', description: 'Added software engineering and quantitative modeling center.', source: 'Industry Filings' },
      { year: 2019, title: 'Chennai Footprint Added', description: 'Expanded operations and enterprise risk functions in Ramanujan IT City.', source: 'NASSCOM' },
      { year: 2025, title: 'HITEC City Floorplate Expansion', description: 'Leased 400k+ sq.ft for cloud and enterprise architecture transformation.', source: 'Registrar of Companies' }
    ],
    recentSignals: [
      'Significant expansion in cloud and cyber operations in Hyderabad.',
      'Expanded strategic engineering mandates in AI-powered credit scoring.'
    ],
    confidence: 'High',
    source: 'Wells Fargo India Disclosures & Ministry of Corporate Affairs Filings',
    sourceUrl: 'https://www.wellsfargo.com',
    sourceType: 'Securities Filing',
    lastVerified: 'September 2026',
    sourceTrail: [
      { name: 'Wells Fargo India Corporate Disclosure', type: 'Company Announcement', verifiedDate: '2024' },
      { name: 'CBRE Commercial Leasing Reports', type: 'Real Estate Benchmark', verifiedDate: '2024' }
    ]
  },
  {
    id: 'target',
    company: 'Target Corporation',
    globalHeadquarters: 'Minneapolis, MN, USA',
    industry: 'Retail & Consumer',
    cities: ['Bengaluru'],
    locations: [
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Manyata Embassy Business Park', isPrimary: true }
    ],
    functions: [
      'Guest Experience & Target.com Mobile Applications',
      'Merchandising & Supply Chain Machine Learning',
      'Target Accelerator Program (Global Retail Startups)',
      'Digital Media & Roundel AdTech Engineering',
      'Store Automation & Robotics Platform'
    ],
    establishedYear: 2005,
    scaleStatus: '2,500–5,000',
    estimatedHeadcount: 'Estimated 4,000 – 4,500 team members in Bengaluru',
    status: 'Established',
    keyWorkloads: ['Target.com backend architecture', 'Cart and promotional calculation microservices', 'Retail media algorithms'],
    description: 'Target India is an extension of Target’s headquarters operations in Minneapolis, delivering strategic capabilities in digital product engineering, data science, merchandising, and marketing technology.',
    timeline: [
      { year: 2005, title: 'Target India Inception', description: 'Opened dedicated center in Manyata Tech Park, Bengaluru.', source: 'Target Corporate Release' },
      { year: 2014, title: 'Target Accelerator Launched', description: 'First retail accelerator in India supporting retail tech startups globally.', source: 'Tech in Asia' },
      { year: 2023, title: 'Roundel AdTech Scale', description: 'India team leads development of Target’s high-margin retail media network engine.', source: 'Target Tech Blog' }
    ],
    recentSignals: [
      'Accelerated deployment of generative AI models for personalizing search results on Target.com.',
      'Active mentor network through Target Accelerator cohort 12.'
    ],
    confidence: 'High',
    source: 'Target Corp Press Statements & Target in India Portal',
    sourceUrl: 'https://corporate.target.com/careers/target-in-india',
    sourceType: 'Company Announcement',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'Target Corporation Global Annual Report', type: 'Securities Filing', verifiedDate: 'March 2024' },
      { name: 'Target India Portal', type: 'Company Announcement', verifiedDate: '2024' }
    ]
  },
  {
    id: 'adobe',
    company: 'Adobe Inc.',
    globalHeadquarters: 'San Jose, CA, USA',
    industry: 'Technology',
    cities: ['Delhi NCR', 'Bengaluru'],
    locations: [
      { city: 'Delhi NCR', state: 'Uttar Pradesh', campusName: 'Noida Sector 25A & Sector 132 Campus', isPrimary: true },
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Prestige Tech Cloud, Hebbal', isPrimary: false }
    ],
    functions: [
      'Acrobat & PDF Core Platform Engineering',
      'Firefly Generative AI Models & Prompt Workflows',
      'Photoshop Web & Creative Cloud Rendering Engines',
      'Experience Platform & Real-Time CDP',
      'Core Patents & Advanced Research Lab'
    ],
    establishedYear: 1997,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 7,500+ employees in India (~30% of global workforce)',
    status: 'Expanding',
    keyWorkloads: ['Adobe Document Cloud core backend', 'Generative AI Firefly pipelines', 'Creative Cloud web services'],
    description: 'Adobe India is Adobe’s largest R&D center outside the United States. Nearly 30% of Adobe’s global patent filings originate from its Noida and Bengaluru engineering labs.',
    timeline: [
      { year: 1997, title: 'Inauguration in Noida', description: 'First R&D lab established with a handful of engineers.', source: 'Adobe History' },
      { year: 2005, title: 'Bengaluru Campus Opened', description: 'Expanded into South India to acquire enterprise tech and digital marketing talent.', source: 'Press Release' },
      { year: 2023, title: 'Tower Campus Opened in Bengaluru', description: 'Inaugurated dedicated 10-story innovation tower in Hebbal.', source: 'The Hindu BusinessLine' },
      { year: 2025, title: 'Generative AI Center of Excellence', description: 'Expanded Firefly and Sensei core modeling labs in Bengaluru.', source: 'Business Standard' }
    ],
    recentSignals: [
      'India engineering team co-developed key components of Adobe Firefly for Enterprise.',
      'Extensive hiring for ML compilers and GPU optimization specialists.'
    ],
    confidence: 'High',
    source: 'Adobe Inc. 10-K & Official Adobe India Media Briefings',
    sourceUrl: 'https://news.adobe.com',
    sourceType: 'Securities Filing',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'Adobe Inc Form 10-K Global Facilities', type: 'Securities Filing', verifiedDate: 'January 2024' },
      { name: 'Adobe India Newsroom', type: 'Company Announcement', verifiedDate: '2024' }
    ]
  },
  {
    id: 'cisco',
    company: 'Cisco Systems',
    globalHeadquarters: 'San Jose, CA, USA',
    industry: 'Technology',
    cities: ['Bengaluru', 'Delhi NCR', 'Mumbai'],
    locations: [
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Cisco Globalization Centre East, Cessna Business Park', isPrimary: true },
      { city: 'Delhi NCR', state: 'Haryana', campusName: 'DLF Cyber City, Gurugram', isPrimary: false }
    ],
    functions: [
      'Catalyst Switch & Router Silicon Architecture',
      'ThousandEyes & AppDynamics Telemetry Platform',
      'Webex Collaboration Infrastructure & AI Audio/Video Processing',
      'Next-Gen Firewalls & Zero-Trust Cloud Security',
      'Global Supply Chain & Advanced Manufacturing'
    ],
    establishedYear: 1995,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 15,000+ employees in India (largest outside San Jose)',
    status: 'Established',
    keyWorkloads: ['Cisco IOS XR networking OS', 'Secure Access Service Edge (SASE)', 'Silicon One ASIC testing'],
    description: 'Cisco Globalization Centre East in Bengaluru serves as a co-headquarters for emerging markets, housing engineering, customer experience, supply chain, and sales operations.',
    timeline: [
      { year: 1995, title: 'India Operations Initiated', description: 'Early presence focused on networking R&D.', source: 'Cisco Archives' },
      { year: 2007, title: 'Globalization Centre East Established', description: 'Invested over $1B in a world-class campus in Cessna Business Park, Bengaluru.', source: 'Cisco Press Release' },
      { year: 2023, title: 'Domestic Manufacturing Launch Announced', description: 'Targeting $1B in domestic manufacturing and export from Tamil Nadu.', source: 'Ministry of Electronics and IT' }
    ],
    recentSignals: [
      'Expanded AI networking fabric engineering for modern data center switches.',
      'Active hardware lab validation for optical interconnects.'
    ],
    confidence: 'High',
    source: 'Cisco Systems SEC Filings & Cisco India Press Desk',
    sourceUrl: 'https://www.cisco.com/c/en_in/about.html',
    sourceType: 'Securities Filing',
    lastVerified: 'September 2026',
    sourceTrail: [
      { name: 'Cisco Systems 10-K Facilities Table', type: 'Securities Filing', verifiedDate: '2024' },
      { name: 'NASSCOM Hardware R&D GCC Report', type: 'Industry Report', verifiedDate: '2024' }
    ]
  },
  {
    id: 'siemens',
    company: 'Siemens AG',
    globalHeadquarters: 'Munich, Germany',
    industry: 'Industrial & Engineering',
    cities: ['Bengaluru', 'Pune', 'Mumbai', 'Chennai'],
    locations: [
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Electronic City R&D Campus', isPrimary: true },
      { city: 'Pune', state: 'Maharashtra', campusName: 'Siemens Technology and Services, Baner', isPrimary: false },
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Siemens Healthineers Campus, Electronic City', isPrimary: false }
    ],
    functions: [
      'Digital Twin & Siemens Xcelerator Platform Engineering',
      'Industrial IoT Edge Firmware & Factory Automation',
      'Smart Grid Automation & Power Transmission SCADA Software',
      'Healthcare Diagnostic Medical Imaging & AI (Healthineers)',
      'Rail Automation & Signalling Software Systems'
    ],
    establishedYear: 2004,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 10,000+ software & engineering R&D professionals in India',
    status: 'Expanding',
    keyWorkloads: ['Industrial Copilot for factory floor', 'Xcelerator cloud microservices', 'CT/MRI image reconstruction'],
    description: 'Siemens Technology and Services Private Limited (STS) in India operates as Siemens’ central R&D powerhouse, creating cutting-edge software and industrial AI for worldwide deployment.',
    timeline: [
      { year: 2004, title: 'Corporate Technology India Formed', description: 'Consolidated research departments in Electronic City, Bengaluru.', source: 'Siemens Corporate' },
      { year: 2018, title: 'Pune Center Expanded', description: 'Scaled industrial software, PLM, and discrete manufacturing tools.', source: 'Press Release' },
      { year: 2024, title: 'Healthineers Innovation Center Dedication', description: 'Inaugurated dedicated healthcare tech campus in Bengaluru.', source: 'Healthineers Media' }
    ],
    recentSignals: [
      'Joint engineering with Microsoft on generative AI for industrial automation code generation.',
      'Expanded railway signaling and electrification engineering division in Pune.'
    ],
    confidence: 'High',
    source: 'Siemens AG Annual Report & Siemens Ltd India Filings',
    sourceUrl: 'https://www.siemens.com/in/en.html',
    sourceType: 'Securities Filing',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'Siemens AG Global Group Annual Report', type: 'Securities Filing', verifiedDate: '2024' },
      { name: 'BSE/NSE Disclosures Siemens Limited', type: 'Securities Filing', verifiedDate: '2024' }
    ]
  },
  {
    id: 'bosch',
    company: 'Bosch (BGSW)',
    globalHeadquarters: 'Gerlingen, Germany',
    industry: 'Industrial & Engineering',
    cities: ['Bengaluru', 'Pune', 'Hyderabad', 'Coimbatore'],
    locations: [
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Adugodi Spark.NXT Campus & Electronic City', isPrimary: true },
      { city: 'Pune', state: 'Maharashtra', campusName: 'Panchshil Business Park, Balewadi', isPrimary: false },
      { city: 'Hyderabad', state: 'Telangana', campusName: 'HITEC City Tech Center', isPrimary: false }
    ],
    functions: [
      'Software-Defined Vehicle (SDV) Core Operating System',
      'Autonomous Driving & ADAS Radar/Camera Sensor Fusion',
      'Battery Management Systems (BMS) & Electric Powertrain',
      'Connected Mobility Cloud & Telematics Platforms',
      'Smart Manufacturing Industry 4.0 Solutions'
    ],
    establishedYear: 1997,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 30,000+ associates at Bosch Global Software Technologies (BGSW)',
    status: 'Established',
    keyWorkloads: ['AUTOSAR adaptive platform', 'Vehicle computer microcontrollers', 'Vision-based driver monitoring'],
    description: 'Bosch Global Software Technologies (BGSW), formerly Robert Bosch Engineering and Business Solutions, is one of the world’s largest software centers outside Germany, delivering end-to-end mobility and digital solutions.',
    timeline: [
      { year: 1997, title: 'RBEI Inception in Bengaluru', description: 'Began as engineering arm for automotive components software.', source: 'Bosch History' },
      { year: 2022, title: 'Spark.NXT Campus Inauguration', description: 'Invested ₹800 Crore in a futuristic 75-acre smart campus in Adugodi, Bengaluru.', source: 'Bosch Press Briefing' },
      { year: 2022, title: 'Rebranded as BGSW', description: 'Reflected pivot toward global software-defined mobility and IoT.', source: 'Company Release' },
      { year: 2024, title: 'Pune & Hyderabad SDV Centers Expansion', description: 'Opened dedicated test benches for electric vehicle architecture.', source: 'Financial Express' }
    ],
    recentSignals: [
      'Collaborations with global OEMs for next-generation zonal vehicle architectures.',
      'Active research patents in generative AI for synthetic automotive test data generation.'
    ],
    confidence: 'High',
    source: 'Bosch Global Software Technologies Official Disclosures & Spark.NXT Briefings',
    sourceUrl: 'https://www.bosch-softwaretechnologies.com',
    sourceType: 'Company Announcement',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'BGSW Corporate Portal', type: 'Company Announcement', verifiedDate: '2024' },
      { name: 'NASSCOM ER&D (Engineering R&D) GCC Compendium', type: 'Industry Report', verifiedDate: '2024' }
    ]
  },
  {
    id: 'astrazeneca',
    company: 'AstraZeneca',
    globalHeadquarters: 'Cambridge, United Kingdom',
    industry: 'Healthcare & Pharma',
    cities: ['Chennai', 'Bengaluru'],
    locations: [
      { city: 'Chennai', state: 'Tamil Nadu', campusName: 'Ramanujan IT City & OMR Campus', isPrimary: true },
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Manyata Embassy Business Park', isPrimary: false }
    ],
    functions: [
      'Clinical Trial Data Management & Biostatistics',
      'Pharmacovigilance & Drug Safety Surveillance',
      'AI-driven Molecular Target Discovery Screening',
      'Global Supply Chain & Logistics Operations',
      'Enterprise Commercial Digital Solutions'
    ],
    establishedYear: 2014,
    scaleStatus: '2,500–5,000',
    estimatedHeadcount: 'Estimated 3,500 – 4,000 professionals in Chennai and Bengaluru',
    status: 'Expanding',
    keyWorkloads: ['Global Clinical Trials Operations', 'Regulatory Submissions Dossier Preparation', 'Post-marketing safety analytics'],
    description: 'AstraZeneca’s Global Capability Centre in Chennai serves as a strategic cornerstone for the biopharma giant, executing clinical trial analysis, drug safety reporting, and digital health technology for patients worldwide.',
    timeline: [
      { year: 2014, title: 'Chennai Global Innovation & Technology Centre (GITC)', description: 'Established shared tech and clinical data center in Chennai.', source: 'AZ Press Release' },
      { year: 2022, title: 'Expansion into Complex Clinical Analytics', description: 'Added biostatisticians and medical writers for Phase III global oncology trials.', source: 'BioSpectrum' },
      { year: 2024, title: 'AI Drug Discovery Collaborations', description: 'Co-developed machine learning models for early-stage antibody binding prediction.', source: 'Times of India' }
    ],
    recentSignals: [
      'Expanded bioinformatics team for real-world evidence (RWE) oncology studies.',
      'Recognized by Tamil Nadu government for premier life-sciences talent development.'
    ],
    confidence: 'High',
    source: 'AstraZeneca PLC Global Annual Report & Tamil Nadu Investment Bureau',
    sourceUrl: 'https://www.astrazeneca.com/country-sites/india.html',
    sourceType: 'Securities Filing',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'AstraZeneca PLC Annual Report 2023', type: 'Securities Filing', verifiedDate: 'February 2024' },
      { name: 'Guidance Tamil Nadu GCC Dashboard', type: 'Government Policy', verifiedDate: '2024' }
    ]
  },
  {
    id: 'lowes',
    company: 'Lowe’s Companies, Inc.',
    globalHeadquarters: 'Mooresville, NC, USA',
    industry: 'Retail & Consumer',
    cities: ['Bengaluru'],
    locations: [
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Manyata Embassy Business Park', isPrimary: true }
    ],
    functions: [
      'Omnichannel E-Commerce & Merchandising Platforms',
      'Supply Chain Optimization & Last-Mile Routing',
      'Spatial 3D Home Improvement Design Tools',
      'Store Point-of-Sale (POS) & Associate Mobility Solutions',
      'Business Intelligence & Enterprise Data Platforms'
    ],
    establishedYear: 2014,
    scaleStatus: '2,500–5,000',
    estimatedHeadcount: 'Estimated 3,800 – 4,200 associates in Bengaluru',
    status: 'Established',
    keyWorkloads: ['Lowes.com high-concurrency order engine', 'Automated vendor stock replenishment', 'Omniverse digital twin integration'],
    description: 'Lowe’s India delivers innovation in technology, analytics, and business operations to power the world’s second-largest home improvement retailer, serving 17+ million customers weekly.',
    timeline: [
      { year: 2014, title: 'Lowe’s India Established', description: 'Set up engineering office in Manyata Business Park, Bengaluru.', source: 'Lowe’s Corporate News' },
      { year: 2020, title: 'Full Product Ownership Transition', description: 'Expanded mandate to full lifecycle ownership of pricing, supply chain, and mobile apps.', source: 'Economic Times' },
      { year: 2024, title: 'Decade Celebration & Digital Twin Labs', description: 'Celebrated 10 years in India with advanced spatial computing and NVIDIA Omniverse store modeling.', source: 'Business Standard' }
    ],
    recentSignals: [
      'Built spatial 3D room planning simulation tools adopted in thousands of US stores.',
      'Active developer contributions to store associate mobile workflows.'
    ],
    confidence: 'High',
    source: 'Lowe’s Companies Annual 10-K & Lowe’s India Corporate Communications',
    sourceUrl: 'https://corporate.lowes.com',
    sourceType: 'Securities Filing',
    lastVerified: 'September 2026',
    sourceTrail: [
      { name: 'Lowe’s Companies 10-K SEC Filing', type: 'Securities Filing', verifiedDate: '2024' },
      { name: 'Lowe’s India Media Statements', type: 'Company Announcement', verifiedDate: '2024' }
    ]
  },
  {
    id: 'fidelity',
    company: 'Fidelity Investments',
    globalHeadquarters: 'Boston, MA, USA',
    industry: 'BFSI',
    cities: ['Bengaluru', 'Chennai'],
    locations: [
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Embassy GolfLinks Business Park (EGL)', isPrimary: true },
      { city: 'Chennai', state: 'Tamil Nadu', campusName: 'TRIL InfoPark, Taramani', isPrimary: false }
    ],
    functions: [
      'Retirement Services & 401(k) Recordkeeping Systems',
      'Brokerage Clearing & Trading Microservices',
      'Quantitative Asset Allocation & Risk Analytics',
      'Digital Customer Experiences & Wealth Management APIs',
      'Cybersecurity & Cloud Platform Engineering'
    ],
    establishedYear: 2001,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 8,000 – 10,000 associates across Bengaluru and Chennai',
    status: 'Established',
    keyWorkloads: ['Institutional Workplace Solutions', 'Personal Investing Mobile Backend', 'Zero-Trust Cloud Governance'],
    description: 'Fidelity Investments India (FMR India) operates as a primary capability hub, delivering technology, operations, and analytical services to support millions of individual investors and employer-sponsored benefit plans.',
    timeline: [
      { year: 2001, title: 'India Footprint Initiated', description: 'Opened technology center in Bengaluru.', source: 'FMR Corporate' },
      { year: 2006, title: 'Chennai Campus Added', description: 'Expanded operations in Taramani tech corridor.', source: 'Industry Release' },
      { year: 2023, title: 'Focus on Cloud-Native Modernization', description: 'Accelerated migration of legacy core recordkeeping systems to AWS/Kubernetes.', source: 'NASSCOM' }
    ],
    recentSignals: [
      'Expanded microservices architecture for real-time portfolio rebalancing.',
      'Consistent top ranking in Great Place to Work India BFSI sector.'
    ],
    confidence: 'High',
    source: 'FMR India Official Media Portal & Industry Reports',
    sourceUrl: 'https://india.fidelity.com',
    sourceType: 'Company Announcement',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'Fidelity Investments India Corporate Disclosure', type: 'Company Announcement', verifiedDate: '2024' },
      { name: 'NASSCOM BFSI GCC Index', type: 'Industry Report', verifiedDate: '2024' }
    ]
  },
  {
    id: 'boeing',
    company: 'Boeing (BIETC)',
    globalHeadquarters: 'Arlington, VA, USA',
    industry: 'Industrial & Engineering',
    cities: ['Bengaluru', 'Chennai'],
    locations: [
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Boeing India Engineering & Technology Center (BIETC), Devanahalli', isPrimary: true },
      { city: 'Chennai', state: 'Tamil Nadu', campusName: 'Sholinganallur Center', isPrimary: false }
    ],
    functions: [
      'Avionics Software & Flight Control Systems',
      'Aerospace Structural Analysis & Digital Twin Simulation',
      'Commercial Airplane Cabin Interior Engineering',
      'Data Analytics for Fleet Maintenance & Health Monitoring',
      'Supply Chain & Direct Material Localization'
    ],
    establishedYear: 2016,
    scaleStatus: '2,500–5,000',
    estimatedHeadcount: 'Estimated 3,500 – 4,500 engineers and technologists',
    status: 'Expanding',
    keyWorkloads: ['777X & 787 structural sub-assemblies', 'Aircraft health monitoring telemetry', 'Flight management computers'],
    description: 'The Boeing India Engineering & Technology Center (BIETC) at Devanahalli is Boeing’s largest software and engineering R&D facility outside the United States, representing a ₹1,600 Crore ($200M+) direct capital investment.',
    timeline: [
      { year: 2016, title: 'BIETC Established', description: 'Formed dedicated engineering center in Bengaluru.', source: 'Boeing Press' },
      { year: 2019, title: 'Groundbreaking at Devanahalli', description: 'Commenced construction on 43-acre integrated high-tech campus.', source: 'Karnataka Udyog Mitra' },
      { year: 2024, title: 'Campus Inaugurated by Prime Minister', description: 'Formally inaugurated 43-acre campus housing thousands of aerospace engineers.', source: 'PMO & Boeing Media Release' }
    ],
    recentSignals: [
      'Expanded avionics software verification test rigs in Devanahalli.',
      'Partnering with Indian aerospace universities on additive manufacturing and composite materials.'
    ],
    confidence: 'High',
    source: 'Boeing Corporate News & Karnataka State High Level Clearance Committee',
    sourceUrl: 'https://www.boeing.co.in/boeing-in-india/boeing-india-engineering-and-technology-center.page',
    sourceType: 'Company Announcement',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'Boeing Corporate Press Release', type: 'Company Announcement', verifiedDate: 'January 2024' },
      { name: 'Karnataka Commerce & Industries Department Gazette', type: 'Government Policy', verifiedDate: '2024' }
    ]
  },
  {
    id: 'google',
    company: 'Google',
    globalHeadquarters: 'Mountain View, CA, USA',
    industry: 'Technology',
    cities: ['Hyderabad', 'Bengaluru'],
    locations: [
      { city: 'Hyderabad', state: 'Telangana', campusName: 'Google Gachibowli Campus', isPrimary: true },
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Bagmane Capital & RMZ Infinity', isPrimary: false }
    ],
    functions: [
      'Google Cloud Platform (GCP) Kernel & Infrastructure',
      'Android Core Framework & Mobile Services',
      'Google Pay UPI Global Payment Protocol Engineering',
      'Search Quality & Multilingual NLP Models',
      'Google DeepMind India Applied Research'
    ],
    establishedYear: 2004,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 10,000+ employees across Hyderabad and Bengaluru',
    status: 'Expanding',
    keyWorkloads: ['GCP Infrastructure', 'Google Pay Architecture', 'Android Core Engineering'],
    description: 'Google India is an integral product engineering pillar for Alphabet globally, driving core software development across Android, Google Cloud, and global Payments.',
    timeline: [
      { year: 2004, title: 'Inauguration in Hyderabad and Bengaluru', description: 'Established initial software engineering teams.', source: 'Google Corporate' },
      { year: 2022, title: 'New 3.3M sq.ft Campus Groundbreaking', description: 'Began construction of massive owned campus in Gachibowli, Hyderabad.', source: 'Telangana Govt' }
    ],
    recentSignals: [
      'Deepened Google DeepMind India Indic language AI model training initiatives.',
      'Active expansion of GCP security architecture engineers.'
    ],
    confidence: 'High',
    source: 'Alphabet Inc. 10-K & Official Google India Releases',
    sourceUrl: 'https://about.google/intl/ALL_in/',
    sourceType: 'Securities Filing',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'SEC Form 10-K Global Footprint', type: 'Securities Filing', verifiedDate: '2024', url: 'https://www.sec.gov' }
    ]
  },
  {
    id: 'amazon',
    company: 'Amazon',
    globalHeadquarters: 'Seattle, WA, USA',
    industry: 'Technology',
    cities: ['Hyderabad', 'Bengaluru', 'Chennai'],
    locations: [
      { city: 'Hyderabad', state: 'Telangana', campusName: 'Amazon Financial District (World Largest Campus)', isPrimary: true },
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'World Trade Center, Malleshwaram', isPrimary: false }
    ],
    functions: [
      'AWS Cloud Computing Microservices & Distributed Databases',
      'Global Retail Catalog AI & Recommendation Engines',
      'Alexa Multilingual NLU & Edge Machine Learning',
      'Supply Chain Logistics Robotics Optimization',
      'Global Devices Hardware Reliability Labs'
    ],
    establishedYear: 2004,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 65,000+ employees across corporate and fulfillment networks',
    status: 'Established',
    keyWorkloads: ['AWS DynamoDB and S3 core components', 'Amazon Retail Platform', 'Alexa Speech Services'],
    description: 'Amazon’s Hyderabad campus in the Financial District is its largest campus building globally, hosting tens of thousands of software engineers, cloud architects, and business leaders.',
    timeline: [
      { year: 2004, title: 'India Development Center Inception', description: 'Opened first development center in Hyderabad.', source: 'Amazon News' },
      { year: 2019, title: 'Global Largest Campus Inauguration', description: 'Inaugurated 9.5-acre campus in Hyderabad housing 15,000+ employees.', source: 'Amazon Press Release' }
    ],
    recentSignals: [
      'Expanded AWS bedrock generative AI client solution teams in Bengaluru and Hyderabad.',
      'Active developer contributions to automated packaging algorithms.'
    ],
    confidence: 'High',
    source: 'Amazon.com Inc. Annual Report & Media Disclosures',
    sourceUrl: 'https://www.amazon.in',
    sourceType: 'Securities Filing',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'Amazon Global Real Estate Portfolio', type: 'Securities Filing', verifiedDate: '2024' }
    ]
  },
  {
    id: 'ibm',
    company: 'IBM',
    globalHeadquarters: 'Armonk, NY, USA',
    industry: 'Technology',
    cities: ['Bengaluru', 'Pune', 'Hyderabad', 'Delhi NCR'],
    locations: [
      { city: 'Bengaluru', state: 'Karnataka', campusName: 'Manyata Embassy Business Park', isPrimary: true },
      { city: 'Pune', state: 'Maharashtra', campusName: 'Hinjawadi Infotech Park', isPrimary: false }
    ],
    functions: [
      'IBM watsonx Generative AI Platform Development',
      'Red Hat OpenShift Enterprise Hybrid Cloud Engineering',
      'Quantum Computing Algorithms & Qiskit Open Source Framework',
      'Mainframe Z-Systems Modernization Services',
      'IBM Security QRadar SIEM Architecture'
    ],
    establishedYear: 1993,
    scaleStatus: '5,000+ employees',
    estimatedHeadcount: 'Estimated 50,000+ professionals across India development centers',
    status: 'Established',
    keyWorkloads: ['watsonx platform components', 'Red Hat OpenShift', 'IBM Cloud Satellite'],
    description: 'IBM India Research Laboratory and Systems Development Labs in Bengaluru and Pune design mission-critical enterprise systems, watsonx AI models, and hybrid cloud solutions for Global 2000 clients.',
    timeline: [
      { year: 1993, title: 'IBM Operations Established in India', description: 'Re-entered India as Tata Information Systems Ltd.', source: 'IBM History' },
      { year: 2023, title: 'watsonx India Development Center Scale', description: 'Dedicated AI labs opened in Bengaluru and Kochi.', source: 'IBM Newsroom' }
    ],
    recentSignals: [
      'Launched GenAI Innovation Center for client co-creation in Bengaluru.',
      'Active academic research partnerships with IIT Bombay and IIT Madras.'
    ],
    confidence: 'High',
    source: 'IBM Corporation Annual 10-K & IBM India Media Room',
    sourceUrl: 'https://www.ibm.com/in-en',
    sourceType: 'Securities Filing',
    lastVerified: 'October 2026',
    sourceTrail: [
      { name: 'IBM Annual Report Global Facilities', type: 'Securities Filing', verifiedDate: '2024' }
    ]
  }
];
