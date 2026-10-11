import React, { useState, useMemo } from 'react';
import {
  Users2,
  Filter,
  ShieldCheck,
  Building2,
  MapPin,
  ExternalLink,
  Award,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { SERVICE_PROVIDERS } from '../data/providersData';
import { ServiceProvider } from '../types';

interface ProvidersViewProps {
  onAskAI: (prompt: string) => void;
}

export const ProvidersView: React.FC<ProvidersViewProps> = ({ onAskAI }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedEvidenceStrength, setSelectedEvidenceStrength] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const categories = [
    'All',
    'Consulting & Strategy',
    'Real Estate & Advisory',
    'Legal & Regulatory',
    'Executive Search & Recruitment',
    'EOR & Global Payroll',
    'Facility & Workspaces'
  ];

  const cityOptions = ['All', 'Bengaluru', 'Hyderabad', 'Mumbai', 'Delhi NCR', 'Chennai', 'Pune'];

  const filteredProviders = useMemo(() => {
    return SERVICE_PROVIDERS.filter((p) => {
      if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
      if (selectedEvidenceStrength !== 'All' && p.evidenceStrength !== selectedEvidenceStrength) return false;
      if (selectedCity !== 'All' && !p.indiaPresence.some((city) => city.includes(selectedCity))) return false;
      return true;
    });
  }, [selectedCategory, selectedEvidenceStrength, selectedCity]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedEvidenceStrength('All');
    setSelectedCity('All');
  };

  const getEvidenceBadge = (strength: 'High' | 'Medium' | 'Low') => {
    if (strength === 'High') {
      return (
        <span className="px-2 py-0.5 text-xs font-mono font-medium rounded-xs bg-emerald-50 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-600" />
          <span>Evidence: High</span>
        </span>
      );
    }
    if (strength === 'Medium') {
      return (
        <span className="px-2 py-0.5 text-xs font-mono font-medium rounded-xs bg-amber-50 text-amber-800 border border-amber-200 inline-flex items-center gap-1">
          <AlertCircle className="w-3 h-3 text-amber-600" />
          <span>Evidence: Medium</span>
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 text-xs font-mono font-medium rounded-xs bg-slate-100 text-slate-700 border border-slate-200 inline-flex items-center gap-1">
        <span>Evidence: Low</span>
      </span>
    );
  };

  return (
    <div data-testid="providers-view" className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Users2 className="w-5 h-5 text-blue-600" />
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Ecosystem Service Providers Directory</h1>
            <span className="text-xs font-mono bg-blue-50 text-blue-800 px-2 py-0.5 rounded-xs border border-blue-200">
              Vetted Registry
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono mt-1">
            Empirical directory of advisory, legal, real estate, and recruitment firms with documented GCC track records
          </p>
        </div>

        {/* Global Partner Inquiry */}
        <button
          data-testid="btn-ask-ai-vendors"
          onClick={() => onAskAI('Which service providers in India have the strongest evidence of setting up technology GCCs in Bengaluru and Hyderabad?')}
          className="self-start md:self-auto px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-xs shadow-xs transition-colors flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Ask Atlas AI About Vendors</span>
        </button>
      </div>

      {/* Product Differentiator Notice: Referral Bias Solution */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 space-y-2">
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <Award className="w-4 h-4 text-blue-600" />
          <span>Solving the "Word-of-Mouth" Referral Trap</span>
        </div>
        <p className="text-slate-600 leading-relaxed">
          Multinational companies planning India GCCs historically selected real-estate brokers, law firms, and recruiters almost entirely through informal word-of-mouth referrals. GCC Atlas introduces an explicit <strong>Evidence Strength Rating</strong> (High / Medium / Low) verifying publicly documented client case studies, regulatory registrations, and court filings before claiming a firm delivered a center.
        </p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-2xs space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {/* Category */}
          <div>
            <label className="block text-[11px] font-mono text-slate-500 mb-1">Service Category</label>
            <select
              data-testid="filter-provider-category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xs p-1.5 focus:border-blue-600 focus:outline-hidden text-slate-800"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Evidence Strength */}
          <div>
            <label className="block text-[11px] font-mono text-slate-500 mb-1">Evidence Strength</label>
            <select
              data-testid="filter-provider-evidence"
              value={selectedEvidenceStrength}
              onChange={(e) => setSelectedEvidenceStrength(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xs p-1.5 focus:border-blue-600 focus:outline-hidden text-slate-800"
            >
              <option value="All">All Levels</option>
              <option value="High">High (Public Named Case Studies / Filings)</option>
              <option value="Medium">Medium (Industry Surveyed)</option>
              <option value="Low">Low (General Corporate Registration)</option>
            </select>
          </div>

          {/* Geography */}
          <div>
            <label className="block text-[11px] font-mono text-slate-500 mb-1">India Office Footprint</label>
            <select
              data-testid="filter-provider-city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xs p-1.5 focus:border-blue-600 focus:outline-hidden text-slate-800"
            >
              {cityOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Reset */}
          <div className="flex items-end">
            <button
              data-testid="btn-reset-providers"
              onClick={resetFilters}
              className="w-full py-1.5 px-3 rounded-xs text-xs font-mono flex items-center justify-center gap-1.5 border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Directory Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProviders.map((prov) => (
          <div
            key={prov.id}
            data-testid={`provider-card-${prov.id}`}
            className="bg-white border border-slate-200 rounded-lg p-5 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span data-testid="provider-category-badge" className="font-bold text-xs font-mono bg-blue-100 text-blue-900 px-2 py-0.5 rounded-xs border border-blue-200">
                  {prov.category}
                </span>
                <span data-testid="provider-evidence-badge">{getEvidenceBadge(prov.evidenceStrength)}</span>
              </div>

              {/* Company Name */}
              <h3 data-testid="provider-company-name" className="font-bold text-lg text-slate-900 tracking-tight">
                {prov.company}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Headquarters: {prov.headquarters}
              </p>

              {/* Geographic Footprint */}
              <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-2 font-mono">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>India Presence: {prov.indiaPresence.join(', ')}</span>
              </div>

              {/* Core Services */}
              <div className="mt-3 space-y-1.5">
                <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold block">Core Capabilities:</span>
                {prov.coreServices.map((srv, idx) => (
                  <div key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold shrink-0">•</span>
                    <span>{srv}</span>
                  </div>
                ))}
              </div>

              {/* Documented GCC Track Record */}
              <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-sm">
                <span className="text-[11px] font-mono text-slate-900 uppercase font-bold block mb-1">
                  Documented GCC Engagement:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {prov.gccTrackRecord}
                </p>
                {prov.sampleEngagements && prov.sampleEngagements.length > 0 && (
                  <ul className="mt-2 space-y-1 text-[11px] text-slate-600 border-t border-slate-200/80 pt-1.5">
                    {prov.sampleEngagements.map((eng, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{eng}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Evidence Audit Trail */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="truncate max-w-[220px]" title={prov.evidenceSource}>
                Proof: {prov.evidenceSource}
              </span>
              {prov.sourceUrl && (
                <a
                  href={prov.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 shrink-0"
                >
                  <span>Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
