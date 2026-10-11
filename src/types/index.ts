export type ConfidenceLevel = 'High' | 'Medium' | 'Estimated';

export interface SourceReference {
  name: string;
  type: 'Government Policy' | 'Company Announcement' | 'Industry Report' | 'Securities Filing' | 'Real Estate Benchmark';
  url?: string;
  verifiedDate: string;
  notes?: string;
}

export interface GCCLocation {
  city: string;
  state: string;
  campusName?: string;
  isPrimary?: boolean;
}

export interface GCCTimelineEvent {
  year: number | string;
  title: string;
  description: string;
  source: string;
}

export interface GCCCompany {
  id: string;
  company: string;
  globalHeadquarters: string;
  industry: 'Technology' | 'BFSI' | 'Healthcare & Pharma' | 'Retail & Consumer' | 'Industrial & Engineering' | 'Telecommunications';
  cities: string[];
  locations: GCCLocation[];
  functions: string[];
  establishedYear: number | string; // e.g. 2001 or "Pre-2005"
  scaleStatus: '5,000+ employees' | '2,500–5,000' | '1,000–2,500' | '500–1,000' | '<500' | 'Not disclosed';
  estimatedHeadcount?: string;
  status: 'Expanding' | 'Established' | 'Recently Launched';
  keyWorkloads: string[];
  description: string;
  timeline: GCCTimelineEvent[];
  recentSignals: string[];
  confidence: ConfidenceLevel;
  source: string;
  sourceUrl?: string;
  sourceType: SourceReference['type'];
  lastVerified: string;
  sourceTrail: SourceReference[];
}

export interface CityTalentRating {
  softwareEngineering: { rating: 'Very High' | 'High' | 'Moderate'; notes: string };
  dataAndAI: { rating: 'Very High' | 'High' | 'Moderate'; notes: string };
  bfsiAndQuant: { rating: 'Very High' | 'High' | 'Moderate'; notes: string };
  operationsAndSharedServices: { rating: 'Very High' | 'High' | 'Moderate'; notes: string };
}

export interface CityCostIndicators {
  officeRentalPerSqFt: string; // e.g., "₹85 – ₹140/sq.ft/month"
  officeCostLevel: 'High' | 'Medium' | 'Low';
  talentCostLevel: 'High' | 'Medium' | 'Low';
  operatingCostLevel: 'High' | 'Medium' | 'Low';
  costAdvantageBenchmark: string; // e.g. "15-20% lower than Bengaluru"
}

export interface CityInfrastructure {
  internationalAirport: string;
  metroNetwork: string;
  majorTechCorridors: string[];
  powerAndWaterReliability: string;
  gradeAOfficeAvailability: 'Very High' | 'High' | 'Moderate' | 'Constrained';
}

export interface CityProfile {
  id: string;
  name: string;
  state: string;
  tier: 'Tier 1 Hub' | 'High-Growth Challenger Hub';
  tagline: string;
  estimatedGCCCountRange: string; // "550 – 620"
  estimatedShareOfIndiaGCCs: number; // percentage
  majorIndustries: string[];
  talent: CityTalentRating;
  costs: CityCostIndicators;
  infrastructure: CityInfrastructure;
  statePolicyTitle: string;
  keyIncentivesSummary: string;
  notableTenants: string[];
  strengths: string[];
  tradeoffs: string[];
  overview: string;
  confidence: ConfidenceLevel;
  source: string;
  sourceUrl?: string;
  lastUpdated: string;
  sourceTrail: SourceReference[];
}

export interface StateIncentive {
  id: string;
  state: string;
  policyName: string;
  policyPeriod: string;
  targetSector: string;
  gccRelevance: 'High' | 'Direct GCC Policy' | 'General IT/ITeS';
  incentiveType: 'Stamp Duty Exemption' | 'Power Tariff Subsidy' | 'Employment Subsidy' | 'R&D Grant' | 'Capital Subsidy' | 'Lease Subsidy';
  summaryBenefit: string;
  eligibility: string;
  keyConditions: string;
  source: string;
  sourceUrl?: string;
  policyDate: string;
  verificationStatus: 'Verified in State Gazetted Policy' | 'Public Policy Draft' | 'Consulting Synthesis';
}

export interface ServiceProvider {
  id: string;
  company: string;
  category: 'Consulting & Strategy' | 'Real Estate & Advisory' | 'Legal & Regulatory' | 'Tax & Compliance' | 'Executive Search & Recruitment' | 'EOR & Global Payroll' | 'Facility & Workspaces';
  headquarters: string;
  indiaPresence: string[];
  coreServices: string[];
  gccTrackRecord: string;
  sampleEngagements: string[];
  evidenceSource: string;
  evidenceStrength: 'High' | 'Medium' | 'Low';
  evidenceNotes: string;
  sourceUrl?: string;
}

export interface DiscrepancyReport {
  sourceName: string;
  author: string;
  estimatedCount: string;
  reportingYear: string;
  definitionUsed: string;
  methodologyNotes: string;
  sourceCitation: string;
}

export interface GCCActivitySignal {
  id: string;
  company: string;
  city: string;
  industry: string;
  activityType: 'New Center Launch' | 'Facility Expansion' | 'R&D Mandate' | 'AI Lab Setup';
  headline: string;
  date: string;
  source: string;
  sourceUrl?: string;
  scaleEstimate?: string;
}

export interface WizardInput {
  industry: string;
  targetScale: string;
  priorities: string[];
  preferredCities: string[];
}

export interface WizardRecommendation {
  shortlist: {
    cityId: string;
    cityName: string;
    rank: number;
    fitScore: number;
    matchReason: string;
    advantages: string[];
    cautions: string[];
  }[];
  strategicSummary: string;
  estimatedTimelineMonths: string;
  suggestedNextSteps: string[];
  disclaimer: string;
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  structuredData?: {
    recommendation?: string;
    reasoning?: string;
    dataUsed?: string[];
    sources?: SourceReference[];
    confidence?: ConfidenceLevel;
    recommendedCityIds?: string[];
  };
}
