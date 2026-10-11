import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Building2,
  TrendingUp,
  DollarSign,
  Plane,
  Train,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  GitCompare,
  Bot,
  ExternalLink,
  ShieldCheck,
  Award
} from 'lucide-react';
import { CITIES_DATA } from '../data/cityData';
import { CityProfile } from '../types';
import { ConfidenceBadge } from './ConfidenceBadge';
import { SourceBadge } from './SourceBadge';

interface CityIntelligenceViewProps {
  selectedCityName?: string;
  onCompareCity: (cityId: string) => void;
  onAskAI: (prompt: string) => void;
  onSelectCompanyByName: (companyName: string) => void;
}

export const CityIntelligenceView: React.FC<CityIntelligenceViewProps> = ({
  selectedCityName,
  onCompareCity,
  onAskAI,
  onSelectCompanyByName
}) => {
  const initialCity = selectedCityName
    ? CITIES_DATA.find((c) => c.name.toLowerCase() === selectedCityName.toLowerCase()) || CITIES_DATA[0]
    : CITIES_DATA[0];

  const [activeCityId, setActiveCityId] = useState<string>(initialCity.id);

  useEffect(() => {
    if (!selectedCityName) return;
    const found = CITIES_DATA.find(
      (c) => c.name.toLowerCase() === selectedCityName.toLowerCase()
    );
    if (found) setActiveCityId(found.id);
  }, [selectedCityName]);

  const activeCity: CityProfile =
    CITIES_DATA.find((c) => c.id === activeCityId) || CITIES_DATA[0];

  const getTalentColor = (rating: string) => {
    switch (rating) {
      case 'Very High':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'High':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      default:
        return 'text-amber-700 bg-amber-50 border-amber-200';
    }
  };

  const getCostBadge = (level: 'High' | 'Medium' | 'Low') => {
    switch (level) {
      case 'High':
        return <span className="px-2 py-0.5 text-xs font-mono rounded-xs bg-rose-50 text-rose-700 border border-rose-200 font-semibold">High Cost</span>;
      case 'Medium':
        return <span className="px-2 py-0.5 text-xs font-mono rounded-xs bg-amber-50 text-amber-700 border border-amber-200 font-semibold">Moderate Cost</span>;
      case 'Low':
        return <span className="px-2 py-0.5 text-xs font-mono rounded-xs bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">Cost Advantage</span>;
    }
  };

  return (
    <div className="space-y-6 pb-16" data-testid="cities-view">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h1 className="text-2xl font-bold tracking-tight text-slate-900" data-testid="city-intelligence-heading">City Intelligence Hubs</h1>
            <span className="text-xs font-mono bg-blue-50 text-blue-800 px-2 py-0.5 rounded-xs border border-blue-200">
              6 Metros
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono mt-1">
            Deep-dive geographic benchmarking: talent depth, real-estate costs, infrastructure, and state policies
          </p>
        </div>

        {/* Global Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onCompareCity(activeCity.id)}
            data-testid="btn-compare-active-city"
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>Compare {activeCity.name} in Matrix</span>
          </button>
        </div>
      </div>

      {/* City Tabs Selector */}
      <div className="flex overflow-x-auto gap-2 pb-2 border-b border-slate-200 scrollbar-none" data-testid="city-tabs-container">
        {CITIES_DATA.map((city) => {
          const isActive = city.id === activeCityId;
          return (
            <button
              key={city.id}
              onClick={() => setActiveCityId(city.id)}
              data-testid={`city-tab-${city.id}`}
              className={`px-4 py-2.5 rounded-t-sm text-xs font-medium whitespace-nowrap transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'border-blue-700 text-blue-900 bg-blue-50/70 font-bold'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>{city.name}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-2xs ${
                isActive ? 'bg-blue-200 text-blue-900 font-semibold' : 'bg-slate-200 text-slate-700'
              }`}>
                {city.estimatedShareOfIndiaGCCs}% Share
              </span>
            </button>
          );
        })}
      </div>

      {/* Active City Profile Header Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-2xs space-y-4" data-testid="active-city-card">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-mono font-bold bg-slate-900 text-white rounded-xs" data-testid="active-city-name">
                {activeCity.name}, {activeCity.state}
              </span>
              <span className="px-2 py-0.5 text-xs font-mono bg-blue-100 text-blue-900 rounded-xs border border-blue-200">
                {activeCity.tier}
              </span>
              <ConfidenceBadge level={activeCity.confidence} />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight" data-testid="active-city-tagline">
              {activeCity.tagline}
            </h2>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed max-w-3xl" data-testid="active-city-overview">
              {activeCity.overview}
            </p>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm shrink-0 font-mono text-right sm:text-right" data-testid="active-city-presence-stats">
            <span className="text-[11px] text-slate-500 uppercase block">Estimated Presence</span>
            <span className="text-xl font-bold text-blue-700" data-testid="active-city-presence-range">{activeCity.estimatedGCCCountRange}</span>
            <span className="text-[11px] text-slate-500 block mt-0.5">
              ~{activeCity.estimatedShareOfIndiaGCCs}% of National GCC Footprint
            </span>
          </div>
        </div>

        {/* Quick Industry Pills */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-500 font-semibold">Major Hub Sectors:</span>
          {activeCity.majorIndustries.map((ind, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 text-xs bg-slate-100 text-slate-800 rounded-xs font-mono border border-slate-200"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>

      {/* Grid: Talent Indicators & Cost Indicators */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Talent Indicators */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-2xs space-y-4" data-testid="talent-ecosystem-section">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                Talent Depth & Domain Competency
              </h3>
              <p className="text-xs text-slate-500 font-mono">Qualitative indicators based on installed leadership and engineering scale</p>
            </div>
          </div>

          <div className="space-y-3">
            {/* Software Engineering */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-slate-900">Software & Cloud Architecture</span>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-xs border ${getTalentColor(activeCity.talent.softwareEngineering.rating)}`}>
                  {activeCity.talent.softwareEngineering.rating}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeCity.talent.softwareEngineering.notes}
              </p>
            </div>

            {/* Data & AI */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-slate-900">Data Science & Generative AI</span>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-xs border ${getTalentColor(activeCity.talent.dataAndAI.rating)}`}>
                  {activeCity.talent.dataAndAI.rating}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeCity.talent.dataAndAI.notes}
              </p>
            </div>

            {/* BFSI & Quant */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-slate-900">BFSI, Quant & Financial Modeling</span>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-xs border ${getTalentColor(activeCity.talent.bfsiAndQuant.rating)}`}>
                  {activeCity.talent.bfsiAndQuant.rating}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeCity.talent.bfsiAndQuant.notes}
              </p>
            </div>

            {/* Operations */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-slate-900">Global Operations & Executive Leadership</span>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-xs border ${getTalentColor(activeCity.talent.operationsAndSharedServices.rating)}`}>
                  {activeCity.talent.operationsAndSharedServices.rating}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeCity.talent.operationsAndSharedServices.notes}
              </p>
            </div>
          </div>
        </div>

        {/* Cost Indicators */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-2xs space-y-4 flex flex-col justify-between" data-testid="cost-real-estate-section">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  Relative Cost & Real Estate Indicators
                </h3>
                <p className="text-xs text-slate-500 font-mono">Commercial office rentals and operational cost benchmark</p>
              </div>
            </div>

            {/* Big Rental Figure */}
            <div className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-sm mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono uppercase text-emerald-900 font-semibold">Grade-A Office Rental Range</span>
                <span className="text-[11px] font-mono text-emerald-800">Per Sq. Ft / Month</span>
              </div>
              <div className="text-2xl font-black font-mono text-emerald-950 tracking-tight" data-testid="office-rental-value">
                {activeCity.costs.officeRentalPerSqFt}
              </div>
              <p className="text-xs text-emerald-900 font-medium mt-1">
                {activeCity.costs.costAdvantageBenchmark}
              </p>
            </div>

            {/* Relative Level Matrix */}
            <div className="grid grid-cols-3 gap-3 mb-4 font-mono">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm text-center">
                <span className="text-[10px] text-slate-500 block mb-1">Office Cost</span>
                {getCostBadge(activeCity.costs.officeCostLevel)}
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm text-center">
                <span className="text-[10px] text-slate-500 block mb-1">Talent Cost</span>
                {getCostBadge(activeCity.costs.talentCostLevel)}
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm text-center">
                <span className="text-[10px] text-slate-500 block mb-1">Operating Cost</span>
                {getCostBadge(activeCity.costs.operatingCostLevel)}
              </div>
            </div>

            {/* Grade-A Availability */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-sm text-xs space-y-1">
              <div className="flex items-center justify-between font-mono">
                <span className="text-slate-600">Grade-A Space Availability:</span>
                <span className="font-bold text-slate-900">{activeCity.infrastructure.gradeAOfficeAvailability}</span>
              </div>
              <div className="flex items-center justify-between font-mono">
                <span className="text-slate-600">Power & Utility Feeders:</span>
                <span className="font-semibold text-slate-900">{activeCity.infrastructure.powerAndWaterReliability}</span>
              </div>
            </div>
          </div>

          {/* Quick AI Question */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">Need deeper cost modeling?</span>
            <button
              onClick={() => onAskAI(`What are the office and talent cost tradeoffs of setting up a GCC in ${activeCity.name}?`)}
              className="text-xs font-mono text-blue-700 hover:text-blue-900 font-semibold inline-flex items-center gap-1 cursor-pointer"
            >
              Ask Atlas AI about {activeCity.name} costs <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Infrastructure & State Policy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Infrastructure */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-2xs space-y-3" data-testid="infrastructure-section">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
            <Plane className="w-4 h-4 text-blue-600" />
            Infrastructure & Connectivity
          </h3>

          <div className="space-y-2.5 text-xs text-slate-700">
            <div>
              <span className="font-semibold text-slate-900 block font-mono text-[11px] mb-0.5">International Aviation:</span>
              <p className="text-slate-600 bg-slate-50 p-2 border border-slate-200 rounded-xs">
                {activeCity.infrastructure.internationalAirport}
              </p>
            </div>

            <div>
              <span className="font-semibold text-slate-900 block font-mono text-[11px] mb-0.5">Urban Rapid Transit:</span>
              <p className="text-slate-600 bg-slate-50 p-2 border border-slate-200 rounded-xs">
                {activeCity.infrastructure.metroNetwork}
              </p>
            </div>

            <div>
              <span className="font-semibold text-slate-900 block font-mono text-[11px] mb-0.5">Primary Tech Corridors:</span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeCity.infrastructure.majorTechCorridors.map((tc, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-blue-50 text-blue-900 rounded-xs font-mono text-[11px] border border-blue-200">
                    {tc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* State Policy & Incentives */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-2xs space-y-3 flex flex-col justify-between" data-testid="policy-incentives-section">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              State Government Policy & Fiscal Incentives
            </h3>

            <div className="mt-3 space-y-3">
              <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-sm">
                <span className="text-[11px] font-mono text-blue-900 uppercase font-bold block mb-1">
                  Active Framework:
                </span>
                <span className="font-semibold text-slate-900 text-xs block">
                  {activeCity.statePolicyTitle}
                </span>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  {activeCity.keyIncentivesSummary}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500 font-mono">Government Authority: {activeCity.state}</span>
            {activeCity.sourceUrl && (
              <a
                href={activeCity.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 font-mono text-xs"
              >
                Official State Portal <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Strengths & Tradeoffs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white border border-emerald-200 rounded-lg p-5 shadow-2xs space-y-3" data-testid="strengths-section">
          <h3 className="text-sm font-bold text-emerald-900 flex items-center gap-2 uppercase font-mono text-xs tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Competitive Strengths for {activeCity.name}
          </h3>
          <ul className="space-y-2 text-xs text-slate-700">
            {activeCity.strengths.map((str, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-emerald-50/40 p-2 rounded-xs border border-emerald-100">
                <span className="text-emerald-700 font-bold shrink-0">•</span>
                <span className="leading-relaxed">{str}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tradeoffs */}
        <div className="bg-white border border-rose-200 rounded-lg p-5 shadow-2xs space-y-3" data-testid="tradeoffs-section">
          <h3 className="text-sm font-bold text-rose-900 flex items-center gap-2 uppercase font-mono text-xs tracking-wider">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Operational Tradeoffs & Risks
          </h3>
          <ul className="space-y-2 text-xs text-slate-700">
            {activeCity.tradeoffs.map((tro, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-rose-50/40 p-2 rounded-xs border border-rose-100">
                <span className="text-rose-700 font-bold shrink-0">•</span>
                <span className="leading-relaxed">{tro}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Notable GCC Tenants */}
      <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-2xs space-y-3" data-testid="marquee-tenants-section">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-blue-600" />
          Major Multinationals with GCC Footprint in {activeCity.name}
        </h3>
        <p className="text-xs text-slate-500 font-mono">
          Click any company to inspect full center timeline and engineering workload details
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {activeCity.notableTenants.map((compName, idx) => (
            <button
              key={idx}
              onClick={() => onSelectCompanyByName(compName)}
              data-testid={`notable-tenant-btn-${idx}`}
              className="px-3 py-1.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-800 hover:text-blue-900 text-xs font-medium rounded-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>{compName}</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Source Citation */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600" data-testid="city-source-citation">
        <SourceBadge
          source={activeCity.source}
          sourceUrl={activeCity.sourceUrl}
          verifiedDate={activeCity.lastUpdated}
        />
        <span className="font-mono text-slate-500 text-[11px]">
          Audited under GCC Atlas City Intelligence Matrix
        </span>
      </div>
    </div>
  );
};
