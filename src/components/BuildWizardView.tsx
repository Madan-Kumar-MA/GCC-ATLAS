import React, { useState } from 'react';
import {
  Wand2,
  Check,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Building2,
  ShieldAlert,
  ChevronRight,
  TrendingUp,
  Award,
  AlertCircle,
  HelpCircle,
  Compass
} from 'lucide-react';
import { CITIES_DATA } from '../data/cityData';
import { WizardInput, WizardRecommendation } from '../types';

interface BuildWizardViewProps {
  onAskAI: (prompt: string) => void;
  onExploreCity: (cityName: string) => void;
}

export const BuildWizardView: React.FC<BuildWizardViewProps> = ({ onAskAI, onExploreCity }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Wizard state
  const [industry, setIndustry] = useState<string>('Technology & Software');
  const [targetScale, setTargetScale] = useState<string>('500');
  const [customHeadcount, setCustomHeadcount] = useState<string>('');
  const [headcountError, setHeadcountError] = useState<string>('');
  const [costSensitivity, setCostSensitivity] = useState<string>('Balanced Growth');
  const [talentFocus, setTalentFocus] = useState<string>('Product Engineering');
  const [priorities, setPriorities] = useState<string[]>(['Balanced Growth', 'Product Engineering']);
  const [preferredCities, setPreferredCities] = useState<string[]>(['Any']);

  const [recommendation, setRecommendation] = useState<WizardRecommendation | null>(null);

  const industryOptions = [
    { id: 'Technology & Software', label: 'Technology & Software', desc: 'Cloud, AI, SaaS, Cybersecurity & Core Engineering' },
    { id: 'Financial Services & BFSI', label: 'Financial Services & BFSI', desc: 'Capital markets, risk engines, payments & asset management' },
    { id: 'Healthcare & Life Sciences', label: 'Healthcare & Life Sciences', desc: 'Clinical trials data, biostatistics, medical device R&D' },
    { id: 'Manufacturing & ER&D', label: 'Manufacturing & ER&D', desc: 'Software-defined vehicles, IoT, embedded systems, avionics' },
    { id: 'Retail & E-Commerce', label: 'Retail & E-Commerce', desc: 'Supply chain graph algorithms, merchandising & retail media' },
    { id: 'Shared Services', label: 'Shared Services', desc: 'Multi-function shared services, finance, HR & legal operations' }
  ];

  const scaleOptions = [
    { id: '100', label: 'Small (100-300)', desc: 'Initial agile pod / specialized Center of Excellence' },
    { id: '250', label: 'Medium (300-800)', desc: 'Mid-scale product engineering & operations hub' },
    { id: '500', label: 'Large (800-2000)', desc: 'Strategic flagship capability center' },
    { id: '1,000', label: 'Enterprise Scale', desc: 'Large multi-functional enterprise captive' },
    { id: '5,000+', label: 'Mega Campus', desc: 'Mega corporate campus with full end-to-end ownership' }
  ];

  const priorityOptions = [
    { id: 'Balanced Growth', label: 'Balanced Growth', desc: 'Strong across talent, cost, and operating efficiency' },
    { id: 'Cost Efficiency', label: 'Cost Efficiency', desc: 'Lower office rentals and competitive compensation retention' },
    { id: 'Product Engineering', label: 'Product Engineering', desc: 'Deep software, cloud, and platform engineering depth' },
    { id: 'Policy Incentives', label: 'Policy Incentives', desc: 'State subsidies, payroll rebates, and single-window clearance' },
    { id: 'Talent Density', label: 'Talent Density', desc: 'Senior leadership, AI researchers, and proven operating talent' },
    { id: 'Operational Infrastructure', label: 'Operational Infrastructure', desc: 'Airport access, expressways, and Grade-A workspace availability' }
  ];

  const costSensitivityOptions = [
    { id: 'Balanced Growth', label: 'Balanced Growth', desc: 'Strong across talent, cost, and operating efficiency' },
    { id: 'Cost Efficiency', label: 'Cost Efficiency', desc: 'Lower office rentals and competitive compensation retention' },
    { id: 'Scale First', label: 'Scale First', desc: 'Prioritize speed-to-mission and market expansion' }
  ];

  const talentFocusOptions = [
    { id: 'Product Engineering', label: 'Product Engineering', desc: 'Deep software, cloud, and platform engineering depth' },
    { id: 'AI Research', label: 'AI Research', desc: 'Generative AI, ML, and data platform innovation' },
    { id: 'Policy Incentives', label: 'Policy Incentives', desc: 'State subsidies, payroll rebates, and single-window clearance' },
    { id: 'Talent Density', label: 'Talent Density', desc: 'Senior leadership, AI researchers, and proven operating talent' },
    { id: 'Operational Infrastructure', label: 'Operational Infrastructure', desc: 'Airport access, expressways, and Grade-A workspace availability' }
  ];

  const cityFilterOptions = [
    'Any',
    'Bengaluru',
    'Hyderabad',
    'Chennai',
    'Pune',
    'Mumbai',
    'Delhi NCR'
  ];

  const togglePriority = (p: string) => {
    if (priorities.includes(p)) {
      if (priorities.length <= 1) return; // Keep at least one
      setPriorities(priorities.filter((item) => item !== p));
    } else {
      setPriorities([...priorities, p]);
    }
  };

  const togglePreferredCity = (c: string) => {
    if (c === 'Any') {
      setPreferredCities(['Any']);
    } else {
      const filtered = preferredCities.filter((item) => item !== 'Any');
      if (filtered.includes(c)) {
        const next = filtered.filter((item) => item !== c);
        setPreferredCities(next.length ? next : ['Any']);
      } else {
        setPreferredCities([...filtered, c]);
      }
    }
  };

  const computeRecommendation = () => {
    // Recommendation logic based on verified heuristics
    const wantsCost = costSensitivity === 'Cost Efficiency' || costSensitivity === 'Balanced Growth';
    const wantsTalent = talentFocus === 'Product Engineering' || talentFocus === 'Talent Density' || talentFocus === 'AI Research';
    const wantsIncentives = talentFocus === 'Policy Incentives';
    const isBigScale = targetScale === '500' || targetScale === '1,000' || targetScale === '5,000+';

    let r1 = {
      cityId: 'hyderabad',
      cityName: 'Hyderabad',
      rank: 1,
      fitScore: 94,
      matchReason: 'Unbeatable balance for 500-person technology center: 18-25% cost arbitrage over Bengaluru, rapid Grade-A space rollout in HITEC City/Kokapet, and proactive single-window administration.',
      advantages: [
        'World-class 8-lane expressway connecting airport to tech corridors in 35 mins',
        '18–25% lower commercial office rentals (₹70–105/sq.ft) vs Bengaluru',
        'Lower talent attrition rate (12–15%) with deep enterprise engineering pool'
      ],
      cautions: [
        'Slightly smaller startup talent poaching pool compared to Bengaluru',
        'Peak summer temperatures (April–May) require optimized HVAC redundancy'
      ]
    };

    let r2 = {
      cityId: 'bengaluru',
      cityName: 'Bengaluru',
      rank: 2,
      fitScore: 91,
      matchReason: 'Unrivaled depth in generative AI, niche product engineering, and executive leadership, making it the top alternative if talent complexity outweighs real-estate costs.',
      advantages: [
        'Highest concentration of senior engineering leadership (VP/Directors) in Asia',
        'Deepest ecosystem for generative AI, silicon design, and deep-tech research',
        'Home to 38% of all GCCs nationwide with instant executive recruitment'
      ],
      cautions: [
        'Highest commercial real-estate costs (₹95–160/sq.ft) and salary competition',
        'Higher talent attrition (18–22%) and severe traffic gridlocks on Outer Ring Road'
      ]
    };

    let r3 = {
      cityId: 'chennai',
      cityName: 'Chennai',
      rank: 3,
      fitScore: 86,
      matchReason: 'Exceptional workforce stability (India\'s lowest attrition: 8-12%) and India\'s only dedicated state GCC Policy with direct payroll cash subsidies.',
      advantages: [
        'Dedicated Tamil Nadu GCC Policy offering ₹20,000/mo payroll subsidy for specialists',
        'Lowest attrition in India ensuring strong multi-year institutional retention',
        'Competitive rental benchmark (₹65–95/sq.ft/month)'
      ],
      cautions: [
        'Less vibrant consumer-tech ecosystem compared to Bengaluru',
        'Senior executive leadership often requires relocation from other metros'
      ]
    };

    // Branching customizations for BFSI
    if (industry === 'Financial Services & BFSI') {
      if (wantsCost) {
        r1.fitScore = 95;
        r1.matchReason = 'Hyderabad is India\'s fastest-growing BFSI tech corridor, housing massive hubs for Goldman Sachs (3,500+), JPMorgan Chase, and Wells Fargo.';
      } else {
        r2 = {
          cityId: 'mumbai',
          cityName: 'Mumbai',
          rank: 2,
          fitScore: 92,
          matchReason: 'Financial capital of India: Proximity to RBI, SEBI, and capital markets makes it ideal for institutional quant and algorithmic trading.',
          advantages: ['Direct access to regulatory authorities', 'Premier algorithmic trading quants'],
          cautions: ['Highest real-estate costs in India', 'Space constraints in central BKC']
        };
      }
    } else if (industry === 'Manufacturing & ER&D') {
      r1 = {
        cityId: 'pune',
        cityName: 'Pune',
        rank: 1,
        fitScore: 95,
        matchReason: 'India\'s automotive and industrial engineering capital: Unmatched embedded software and software-defined vehicle (SDV) talent pool.',
        advantages: ['Automotive R&D hub (Bosch, Siemens, VW Group)', 'Close proximity to Mumbai while 25% cheaper'],
        cautions: ['Constrained direct international flights from Pune airport']
      };
      r2 = {
        cityId: 'chennai',
        cityName: 'Chennai',
        rank: 2,
        fitScore: 91,
        matchReason: 'Hardware, automotive, and industrial testing capital with excellent sea-port logistics.',
        advantages: ['Deep mechanical and electrical engineering pool', 'Lowest employee attrition'],
        cautions: ['Tropical climate during summer months']
      };
    }

    const recResult: WizardRecommendation = {
      shortlist: [r1, r2, r3],
      strategicSummary: `For a ${targetScale}-person ${industry} GCC prioritizing ${priorities.join(' & ')}, ${r1.cityName} offers the optimal operational trajectory. It provides immediate Grade-A scalability, sustainable talent retention, and favorable statutory policy support.`,
      estimatedTimelineMonths: '6 to 9 Months to Day-1 Launch',
      suggestedNextSteps: [
        'Initiate micro-market real-estate site tour across key corridors (e.g. HITEC City, Financial District)',
        'Register under single-window state clearance portal (e.g. TS-iPASS or Guidance TN)',
        'Conduct compensation benchmarking survey with specialized executive recruitment partners',
        'Review standard transfer pricing and PE (Permanent Establishment) tax frameworks with legal counsel'
      ],
      disclaimer: 'This recommendation is an analytical prototype based on available public data and should not be treated as professional legal, tax, or commercial consulting advice.'
    };

    setPriorities(Array.from(new Set([costSensitivity, talentFocus])));

    setRecommendation(recResult);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setRecommendation(null);
    setIndustry('Technology & Software');
    setTargetScale('500');
    setCustomHeadcount('');
    setHeadcountError('');
    setCostSensitivity('Balanced Growth');
    setTalentFocus('Product Engineering');
    setPriorities(['Balanced Growth', 'Product Engineering']);
    setPreferredCities(['Any']);
  };

  return (
    <div className="space-y-6 pb-16 max-w-4xl mx-auto" data-testid="wizard-view">
      {/* Header */}
      <div className="text-center space-y-2 pb-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 rounded-xs text-xs font-mono text-blue-800">
          <Wand2 className="w-3.5 h-3.5 text-blue-600" />
          <span>Interactive Decision Engine</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight" data-testid="wizard-heading">
          Build My GCC — Site Selection Wizard
        </h1>
        <p className="text-xs text-slate-500 font-mono max-w-xl mx-auto">
          Answer 4 strategic questions to generate a tailored city shortlist, tradeoff matrix, and executive roadmap
        </p>
      </div>

      {!recommendation ? (
        <div className="bg-white border border-slate-200 rounded-lg shadow-2xs overflow-hidden" data-testid="wizard-card">
          {/* Step Progress Tracker */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3.5 flex items-center justify-between text-xs font-mono" data-testid="wizard-step-tracker">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900" data-testid="current-step-label">Step {currentStep} of 4:</span>
              <span className="text-slate-500" data-testid="current-step-name">
                {currentStep === 1 && 'Center Function & Mandate'}
                {currentStep === 2 && 'Target Team Scale'}
                {currentStep === 3 && 'Cost Sensitivity'}
                {currentStep === 4 && 'Talent Focus'}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`w-6 h-1.5 rounded-2xs transition-colors ${
                    s <= currentStep ? 'bg-blue-600' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Step 1: Industry */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in duration-150" data-testid="wizard-step-1">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Question 1: What type of GCC are you building?
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Select your primary organizational mandate and business function
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {industryOptions.map((opt) => {
                    const isSelected = industry === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setIndustry(opt.id)}
                        data-testid={`industry-option-${opt.id}`}
                        className={`p-4 rounded-sm border cursor-pointer transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'bg-blue-50/70 border-blue-600 shadow-2xs ring-1 ring-blue-600'
                            : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center border shrink-0 ${
                          isSelected ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check className="w-2.5 h-2.5" />}
                        </div>
                        <div>
                          <h3 className="text-xs font-bold text-slate-900">{opt.label}</h3>
                          <div className="text-[11px] text-slate-500 mt-1 leading-snug">{opt.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Target Scale */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in duration-150" data-testid="wizard-step-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Question 2: What is your approximate target scale?
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Projected full-time employee (FTE) headcount across Year 1 to Year 3
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {scaleOptions.map((opt) => {
                    const isSelected = targetScale === opt.id && !customHeadcount;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => {
                          setTargetScale(opt.id);
                          setCustomHeadcount('');
                          setHeadcountError('');
                        }}
                        data-testid={`scale-option-${opt.id}`}
                        className={`p-3.5 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-50/70 border-blue-600 shadow-2xs ring-1 ring-blue-600'
                            : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center border shrink-0 ${
                            isSelected ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isSelected && <Check className="w-2.5 h-2.5" />}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-900 block">{opt.label}</span>
                            <div className="text-[11px] text-slate-500 font-mono">{opt.desc}</div>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded-xs border border-blue-200">
                          {opt.id} FTEs
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Custom Employee Headcount Input with Validation */}
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <label className="block text-xs font-bold text-slate-800">
                    Or specify custom employee headcount:
                  </label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      value={customHeadcount}
                      onChange={(e) => {
                        const val = e.target.value;
                        setCustomHeadcount(val);
                        if (!val.trim()) {
                          setHeadcountError('');
                          return;
                        }
                        const num = Number(val);
                        if (isNaN(num) || !Number.isInteger(num) || num <= 0) {
                          setHeadcountError('Employee count must be a positive integer greater than 0');
                        } else if (num > 100000) {
                          setHeadcountError('Employee count exceeds supported scale (max 100,000)');
                        } else {
                          setHeadcountError('');
                          setTargetScale(val.trim());
                        }
                      }}
                      placeholder="e.g. 500, 750 (Positive integers only)"
                      data-testid="custom-employees-input"
                      className={`w-full max-w-sm px-3.5 py-2 text-xs bg-slate-50 border rounded-xs focus:outline-hidden transition-colors ${
                        headcountError ? 'border-rose-500 bg-rose-50/40 text-rose-900' : 'border-slate-300 focus:border-blue-600 text-slate-900'
                      }`}
                    />
                  </div>
                  {headcountError && (
                    <p className="text-xs text-rose-600 font-mono flex items-center gap-1.5 pt-0.5" data-testid="scale-error-message">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{headcountError}</span>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Priorities */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in duration-150" data-testid="wizard-step-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Question 3: What cost sensitivity best fits your GCC case?
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Select the strategic tradeoff that best reflects your operating model
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {costSensitivityOptions.map((opt) => {
                    const isSelected = costSensitivity === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setCostSensitivity(opt.id)}
                        data-testid={`cost-option-${opt.id}`}
                        className={`p-4 rounded-sm border cursor-pointer transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'bg-blue-50/70 border-blue-600 shadow-2xs ring-1 ring-blue-600'
                            : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-xs mt-0.5 flex items-center justify-center border shrink-0 ${
                          isSelected ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <div>
                          <h3 className="text-xs font-bold text-slate-900">{opt.label}</h3>
                          <div className="text-[11px] text-slate-500 mt-1 leading-snug">{opt.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Preferred Cities */}
            {currentStep === 4 && (
              <div className="space-y-4 animate-in fade-in duration-150" data-testid="wizard-step-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Question 4: What is your strongest talent focus?
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Pick the operating theme most central to your GCC mandate
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {talentFocusOptions.map((opt) => {
                    const isSelected = talentFocus === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setTalentFocus(opt.id)}
                        data-testid={`talent-option-${opt.id}`}
                        className={`p-4 rounded-sm border cursor-pointer transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'bg-blue-50/70 border-blue-600 shadow-2xs ring-1 ring-blue-600'
                            : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center border shrink-0 ${
                          isSelected ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check className="w-2.5 h-2.5" />}
                        </div>
                        <div>
                          <h3 className="text-xs font-bold text-slate-900">{opt.label}</h3>
                          <div className="text-[11px] text-slate-500 mt-1 leading-snug">{opt.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                data-testid="btn-wizard-back"
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-xs transition-colors cursor-pointer"
              >
                Back
              </button>
            ) : <div />}

            {currentStep < 4 ? (
              <button
                onClick={() => {
                  if (currentStep === 2 && headcountError) return;
                  setCurrentStep(currentStep + 1);
                }}
                disabled={currentStep === 2 && Boolean(headcountError)}
                data-testid="btn-wizard-continue"
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white text-xs font-medium rounded-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Continue</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={computeRecommendation}
                data-testid="btn-wizard-generate"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xs shadow-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Decision Shortlist</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-6 animate-in fade-in duration-200" data-testid="wizard-results-container">
          {/* Shortlist Card */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs space-y-6" data-testid="wizard-results-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-xs border border-blue-200">
                  Recommended Site Selection Shortlist
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                  Tailored Footprint Recommendations
                </h2>
              </div>
              <button
                onClick={handleReset}
                data-testid="btn-wizard-rerun"
                className="self-start sm:self-auto text-xs font-mono text-slate-500 hover:text-slate-800 flex items-center gap-1 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xs transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Re-run Wizard</span>
              </button>
            </div>

            {/* Strategic Summary */}
            <div className="p-4 bg-slate-900 text-white rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-blue-300 text-xs font-mono uppercase font-bold">
                <Compass className="w-4 h-4 text-blue-400" />
                Executive Synthesis
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {recommendation.strategicSummary}
              </p>
              <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
                <span>Estimated Setup Velocity: <strong className="text-emerald-400">{recommendation.estimatedTimelineMonths}</strong></span>
                <button
                  onClick={() => onAskAI(`Explain why ${recommendation.shortlist[0].cityName} was selected as the #1 recommendation for my 500-person GCC. What are the supporting facts?`)}
                  className="text-blue-300 hover:text-white underline font-medium inline-flex items-center gap-1"
                >
                  Ask Atlas AI: "Why {recommendation.shortlist[0].cityName}?" <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Candidate Cards */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                Ranked Shortlist (Based on {targetScale} FTE Scale in {industry}):
              </h3>

              {recommendation.shortlist.map((c) => (
                <div
                  key={c.cityId}
                  data-testid={`recommendation-rank-${c.rank}`}
                  className={`p-5 rounded-md border transition-all ${
                    c.rank === 1
                      ? 'border-blue-500 bg-blue-50/20 shadow-xs'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-7 h-7 rounded-xs font-mono font-bold text-xs flex items-center justify-center ${
                        c.rank === 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        #{c.rank}
                      </span>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900" data-testid={c.rank === 1 ? "top-recommended-city" : `recommendation-city-${c.cityId}`}>{c.cityName}</h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
                      <span className="text-slate-500">Fit Index:</span>
                      <span className={`font-bold px-2 py-0.5 rounded-xs border ${
                        c.rank === 1
                          ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                          : 'bg-slate-100 text-slate-800 border-slate-200'
                      }`}>
                        {c.fitScore}/100
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed font-medium mb-3">
                    {c.matchReason}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs">
                    <div>
                      <span className="font-mono text-[11px] font-bold text-emerald-800 block mb-1">
                        Core Advantages:
                      </span>
                      <ul className="space-y-1 text-slate-600">
                        {c.advantages.map((adv, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-mono text-[11px] font-bold text-amber-800 block mb-1">
                        Cautions & Mitigation:
                      </span>
                      <ul className="space-y-1 text-slate-600">
                        {c.cautions.map((cau, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-amber-600 font-bold">•</span>
                            <span>{cau}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onExploreCity(c.cityName)}
                      className="text-xs text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 font-mono"
                    >
                      Inspect Full {c.cityName} Profile <ChevronRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => onAskAI(`What are the office leasing options and state subsidies for setting up in ${c.cityName}?`)}
                      className="text-xs text-slate-500 hover:text-slate-900 font-mono inline-flex items-center gap-1"
                    >
                      Ask Atlas AI about {c.cityName}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Next Steps */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-sm space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-800">
                Operational Next Steps for GCC Formation:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {recommendation.suggestedNextSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono font-bold text-blue-700 shrink-0">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CRITICAL PROMPT DISCLAIMER */}
            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xs text-xs text-amber-900 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Required Analytical Notice:</strong> {recommendation.disclaimer}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
