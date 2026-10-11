import React, { useState, useMemo } from 'react';
import {
  GitCompare,
  Check,
  Plus,
  X,
  Sparkles,
  Info,
  Sliders,
  ArrowRight,
  TrendingUp,
  Award,
  DollarSign,
  Building2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { CITIES_DATA } from '../data/cityData';
import { CityProfile } from '../types';
import { ConfidenceBadge } from './ConfidenceBadge';

interface CityCompareViewProps {
  initialCityIds?: string[];
  onAskAI: (prompt: string) => void;
  onSelectCityByName?: (cityName: string) => void;
}

export const CityCompareView: React.FC<CityCompareViewProps> = ({
  initialCityIds = ['bengaluru', 'hyderabad', 'chennai'],
  onAskAI,
  onSelectCityByName
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    initialCityIds.length >= 2 ? initialCityIds : ['bengaluru', 'hyderabad', 'chennai']
  );

  // Strategy Priority Preset: Balanced, Cost-First, DeepTech-First, RapidScale
  const [priorityPreset, setPriorityPreset] = useState<'balanced' | 'cost' | 'deeptech' | 'rapidscale'>('balanced');

  const selectedCities: CityProfile[] = useMemo(() => {
    return selectedIds
      .map((id) => CITIES_DATA.find((c) => c.id === id))
      .filter((c): c is CityProfile => Boolean(c));
  }, [selectedIds]);

  const toggleCity = (cityId: string) => {
    if (selectedIds.includes(cityId)) {
      if (selectedIds.length <= 2) return; // Keep at least 2
      setSelectedIds(selectedIds.filter((id) => id !== cityId));
    } else {
      if (selectedIds.length >= 4) {
        // Replace last one if at max 4
        setSelectedIds([...selectedIds.slice(1), cityId]);
      } else {
        setSelectedIds([...selectedIds, cityId]);
      }
    }
  };

  // Transparent scoring methodology computation (0-100)
  // Factors:
  // 1. Talent Pool & Seniority (Tech & AI + BFSI)
  // 2. Cost Advantage (Inverted: low cost = high score)
  // 3. Infrastructure & Scalability
  // 4. Policy Incentives & Ease
  const cityScores = useMemo(() => {
    return selectedCities.map((city) => {
      // Talent Score (0-100)
      let talentRaw = 70;
      if (city.id === 'bengaluru') talentRaw = 96;
      else if (city.id === 'hyderabad') talentRaw = 88;
      else if (city.id === 'chennai') talentRaw = 82;
      else if (city.id === 'pune') talentRaw = 80;
      else if (city.id === 'delhi-ncr') talentRaw = 83;
      else if (city.id === 'mumbai') talentRaw = 87;

      // Cost Score (Higher is better cost arbitrage / cheaper)
      let costRaw = 65;
      if (city.costs.operatingCostLevel === 'Low') costRaw = 94; // Chennai
      else if (city.costs.operatingCostLevel === 'Medium') costRaw = 82; // Hyderabad, Pune, NCR
      else costRaw = 55; // Bengaluru, Mumbai (expensive)

      // Infrastructure & Office Velocity (0-100)
      let infraRaw = 75;
      if (city.id === 'hyderabad') infraRaw = 95; // Wide expressways, Kokapet
      else if (city.id === 'delhi-ncr') infraRaw = 90; // Airport + Metro
      else if (city.id === 'bengaluru') infraRaw = 74; // Traffic congestion
      else if (city.id === 'mumbai') infraRaw = 78; // Space pinch
      else if (city.id === 'chennai') infraRaw = 84;
      else if (city.id === 'pune') infraRaw = 81;

      // Policy & State Support (0-100)
      let policyRaw = 75;
      if (city.id === 'chennai') policyRaw = 92; // Dedicated GCC policy cash subsidies
      else if (city.id === 'hyderabad') policyRaw = 93; // TS-iPASS single window
      else if (city.id === 'bengaluru') policyRaw = 82;
      else if (city.id === 'pune' || city.id === 'mumbai') policyRaw = 80;
      else if (city.id === 'delhi-ncr') policyRaw = 78;

      // Weight weights based on preset
      let wTalent = 0.35;
      let wCost = 0.25;
      let wInfra = 0.25;
      let wPolicy = 0.15;

      if (priorityPreset === 'cost') {
        wCost = 0.50;
        wTalent = 0.20;
        wInfra = 0.15;
        wPolicy = 0.15;
      } else if (priorityPreset === 'deeptech') {
        wTalent = 0.55;
        wInfra = 0.20;
        wCost = 0.15;
        wPolicy = 0.10;
      } else if (priorityPreset === 'rapidscale') {
        wInfra = 0.40;
        wCost = 0.25;
        wPolicy = 0.20;
        wTalent = 0.15;
      }

      const totalScore = Math.round(
        talentRaw * wTalent +
        costRaw * wCost +
        infraRaw * wInfra +
        policyRaw * wPolicy
      );

      return {
        city,
        totalScore,
        breakdown: {
          talentRaw,
          costRaw,
          infraRaw,
          policyRaw
        }
      };
    }).sort((a, b) => b.totalScore - a.totalScore);
  }, [selectedCities, priorityPreset]);

  // Recommendation text based on top scoring city
  const topCandidate = cityScores[0];
  const secondCandidate = cityScores[1];

  const getRecommendationRationale = () => {
    if (!topCandidate) return '';

    if (topCandidate.city.id === 'hyderabad') {
      return `Based on your selected priority weighting (${priorityPreset.toUpperCase()}), Hyderabad emerges with the highest composite index (${topCandidate.totalScore}/100). It optimizes the balance between premier enterprise engineering depth, 18–25% lower occupancy costs than Bengaluru, and superior campus scalability in the Financial District and Kokapet corridor.`;
    }

    if (topCandidate.city.id === 'bengaluru') {
      return `Under the DEEP-TECH weighting, Bengaluru commands the lead (${topCandidate.totalScore}/100) due to its unmatched density of 580+ GCCs, tier-1 generative AI researchers, and silicon engineering talent, offsetting its higher commercial real estate and talent cost structure.`;
    }

    if (topCandidate.city.id === 'chennai') {
      return `Under the COST-EFFICIENCY weighting, Chennai scores highest (${topCandidate.totalScore}/100) driven by India's lowest tech talent attrition (8–12%), 25–30% real-estate cost savings, and Tamil Nadu's dedicated GCC Policy providing direct payroll cash subsidies.`;
    }

    return `Based on your selected parameters, ${topCandidate.city.name} ranks highest (${topCandidate.totalScore}/100), closely followed by ${secondCandidate?.city.name} (${secondCandidate?.totalScore}/100). Review the side-by-side dimensional table below to audit individual tradeoffs.`;
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <GitCompare className="w-5 h-5 text-blue-600" />
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">City Comparison Matrix</h1>
            <span className="text-xs font-mono bg-blue-50 text-blue-800 px-2 py-0.5 rounded-xs border border-blue-200">
              Interactive Matrix
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono mt-1">
            Side-by-side dimensional benchmarking with transparent analytical scoring methodology
          </p>
        </div>

        {/* City Toggle Selector Chips */}
        <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
          <span className="text-[11px] font-mono text-slate-500 mr-1">Select 2–4 Hubs:</span>
          {CITIES_DATA.map((c) => {
            const isSelected = selectedIds.includes(c.id);
            return (
              <button
                key={c.id}
                onClick={() => toggleCity(c.id)}
                className={`px-2.5 py-1 text-xs font-mono rounded-xs border transition-all flex items-center gap-1 ${
                  isSelected
                    ? 'bg-blue-900 text-white border-blue-900 font-semibold'
                    : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300'
                }`}
              >
                {isSelected ? <Check className="w-3 h-3 text-emerald-400" /> : <Plus className="w-3 h-3 text-slate-400" />}
                <span>{c.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Strategic Priority Presets */}
      <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-slate-600" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              Score Methodology & Priority Weighting:
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            Scores dynamically recompute across 4 dimensions
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            onClick={() => setPriorityPreset('balanced')}
            className={`p-2.5 rounded-xs border text-left transition-all ${
              priorityPreset === 'balanced'
                ? 'bg-blue-50 border-blue-600 text-blue-950 font-semibold shadow-2xs'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <div className="text-xs font-bold">Balanced Mandate</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">Talent (35%) • Cost (25%) • Infra (25%)</div>
          </button>

          <button
            onClick={() => setPriorityPreset('cost')}
            className={`p-2.5 rounded-xs border text-left transition-all ${
              priorityPreset === 'cost'
                ? 'bg-blue-50 border-blue-600 text-blue-950 font-semibold shadow-2xs'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <div className="text-xs font-bold">Cost-Arbitrage First</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">Cost (50%) • Talent (20%) • Policy (15%)</div>
          </button>

          <button
            onClick={() => setPriorityPreset('deeptech')}
            className={`p-2.5 rounded-xs border text-left transition-all ${
              priorityPreset === 'deeptech'
                ? 'bg-blue-50 border-blue-600 text-blue-950 font-semibold shadow-2xs'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <div className="text-xs font-bold">Deep-Tech & AI First</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">Talent (55%) • Infra (20%) • Cost (15%)</div>
          </button>

          <button
            onClick={() => setPriorityPreset('rapidscale')}
            className={`p-2.5 rounded-xs border text-left transition-all ${
              priorityPreset === 'rapidscale'
                ? 'bg-blue-50 border-blue-600 text-blue-950 font-semibold shadow-2xs'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <div className="text-xs font-bold">Rapid Scalability</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">Infra & Grade-A (40%) • Cost (25%)</div>
          </button>
        </div>
      </div>

      {/* AI Recommendation Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-lg p-5 sm:p-6 shadow-md border border-blue-800 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-mono font-bold tracking-wider text-blue-300 uppercase">
              Atlas AI Comparative Synthesis
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-blue-800/80 border border-blue-700 text-blue-200">
            Weighted Analytical Model
          </span>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
          {getRecommendationRationale()}
        </p>

        <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-xs font-mono">
            {cityScores.map(({ city, totalScore }, idx) => (
              <span key={city.id} className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-emerald-400' : 'bg-slate-400'}`} />
                <span className="text-slate-300">{city.name}:</span>
                <span className="font-bold text-white">{totalScore}/100</span>
              </span>
            ))}
          </div>

          <button
            onClick={() => onAskAI(`Compare ${selectedCities.map(c => c.name).join(' vs ')} for a new GCC establishment. What are the key decision criteria?`)}
            className="text-xs font-mono text-blue-300 hover:text-white underline decoration-blue-500 inline-flex items-center gap-1 transition-colors"
          >
            Ask Atlas AI to elaborate on this comparison <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-2xs overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            <h2 className="text-sm font-bold text-slate-900 font-sans">
              Side-by-Side Factor Evaluation ({selectedCities.length} Cities)
            </h2>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            Source: GCC Atlas Benchmarking Index
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/70 border-b border-slate-200 font-mono text-slate-700">
                <th className="py-3 px-4 w-44 font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Evaluation Dimension
                </th>
                {selectedCities.map((c) => {
                  const scoreObj = cityScores.find((cs) => cs.city.id === c.id);
                  return (
                    <th key={c.id} className="py-3 px-4 font-bold text-slate-900 min-w-48">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-sans font-bold">{c.name}</span>
                        {scoreObj && (
                          <span className="text-xs font-mono bg-blue-100 text-blue-900 px-2 py-0.5 rounded-xs border border-blue-200 font-bold">
                            {scoreObj.totalScore}/100
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-500 font-normal font-mono mt-0.5">{c.state} • {c.tier}</div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {/* GCC Ecosystem Presence */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-mono font-semibold text-slate-900 bg-slate-50/40">
                  GCC Ecosystem Size
                </td>
                {selectedCities.map((c) => (
                  <td key={c.id} className="py-3 px-4">
                    <div className="font-bold text-slate-900 font-mono">{c.estimatedGCCCountRange}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">~{c.estimatedShareOfIndiaGCCs}% of National Footprint</div>
                  </td>
                ))}
              </tr>

              {/* Technology & AI Talent */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-mono font-semibold text-slate-900 bg-slate-50/40">
                  Software & AI Depth
                </td>
                {selectedCities.map((c) => (
                  <td key={c.id} className="py-3 px-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="font-bold text-slate-900">{c.talent.softwareEngineering.rating}</span>
                      <span className="text-[10px] font-mono text-slate-500">(Software)</span>
                    </div>
                    <div className="text-[11px] text-slate-600 leading-snug">
                      {c.talent.dataAndAI.notes}
                    </div>
                  </td>
                ))}
              </tr>

              {/* BFSI & Quant Talent */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-mono font-semibold text-slate-900 bg-slate-50/40">
                  BFSI & Quant Talent
                </td>
                {selectedCities.map((c) => (
                  <td key={c.id} className="py-3 px-4">
                    <span className="font-bold text-slate-900 block mb-0.5">{c.talent.bfsiAndQuant.rating}</span>
                    <span className="text-[11px] text-slate-600 leading-snug">{c.talent.bfsiAndQuant.notes}</span>
                  </td>
                ))}
              </tr>

              {/* Relative Office Cost */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-mono font-semibold text-slate-900 bg-slate-50/40">
                  Office Rental Benchmark
                </td>
                {selectedCities.map((c) => (
                  <td key={c.id} className="py-3 px-4">
                    <div className="font-mono font-bold text-slate-900 text-xs text-emerald-800">
                      {c.costs.officeRentalPerSqFt}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Level: {c.costs.officeCostLevel} Cost</div>
                  </td>
                ))}
              </tr>

              {/* Relative Talent & Operating Cost */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-mono font-semibold text-slate-900 bg-slate-50/40">
                  Operating Cost Arbitrage
                </td>
                {selectedCities.map((c) => (
                  <td key={c.id} className="py-3 px-4 text-[11px] text-slate-600">
                    <div className="font-medium text-slate-800">{c.costs.costAdvantageBenchmark}</div>
                  </td>
                ))}
              </tr>

              {/* Talent Attrition Rate */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-mono font-semibold text-slate-900 bg-slate-50/40">
                  Typical Attrition Range
                </td>
                {selectedCities.map((c) => {
                  let att = '14–18%';
                  if (c.id === 'chennai') att = '8–12% (Lowest in India)';
                  else if (c.id === 'hyderabad') att = '12–15%';
                  else if (c.id === 'bengaluru') att = '18–22% (Highest competition)';
                  else if (c.id === 'pune') att = '12–16%';
                  return (
                    <td key={c.id} className="py-3 px-4 font-mono font-medium text-slate-800">
                      {att}
                    </td>
                  );
                })}
              </tr>

              {/* Infrastructure & Grade-A Space */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-mono font-semibold text-slate-900 bg-slate-50/40">
                  Infrastructure & Space
                </td>
                {selectedCities.map((c) => (
                  <td key={c.id} className="py-3 px-4 text-[11px] space-y-1">
                    <div><strong>Grade-A Vacancy:</strong> {c.infrastructure.gradeAOfficeAvailability}</div>
                    <div className="text-slate-600">{c.infrastructure.internationalAirport.split('–')[0]}</div>
                  </td>
                ))}
              </tr>

              {/* State Incentives Summary */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-mono font-semibold text-slate-900 bg-slate-50/40">
                  State Policy Support
                </td>
                {selectedCities.map((c) => (
                  <td key={c.id} className="py-3 px-4 text-[11px] text-slate-700 leading-snug">
                    <div className="font-semibold text-blue-900 mb-0.5">{c.statePolicyTitle.split('&')[0]}</div>
                    <div className="text-slate-600 line-clamp-3">{c.keyIncentivesSummary}</div>
                  </td>
                ))}
              </tr>

              {/* Notable Marquee Tenants */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-mono font-semibold text-slate-900 bg-slate-50/40">
                  Marquee GCC Examples
                </td>
                {selectedCities.map((c) => (
                  <td key={c.id} className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {c.notableTenants.slice(0, 5).map((tn, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 bg-slate-100 text-slate-800 rounded-2xs font-mono text-[10px] border border-slate-200">
                          {tn}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Transparent Methodology Explanatory Callout */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 space-y-1.5 font-mono">
          <div className="flex items-center gap-1.5 font-bold text-slate-800">
            <Info className="w-3.5 h-3.5 text-blue-600" />
            <span>Score Methodology & Analytical Transparency:</span>
          </div>
          <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
            Prototype composite scores (0–100) are normalized weighted scores calculated across verified talent availability, commercial Grade-A rental differentials, infrastructure velocity, and statutory policy concessions. They represent a decision-support model and do not constitute an official government ranking or commercial consulting mandate.
          </p>
        </div>
      </div>
    </div>
  );
};
