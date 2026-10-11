import React, { useState, useMemo } from 'react';
import {
  FileText,
  Filter,
  Landmark,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  RotateCcw,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { STATE_INCENTIVES } from '../data/incentivesData';
import { StateIncentive } from '../types';

interface IncentivesViewProps {
  onAskAI: (prompt: string) => void;
}

export const IncentivesView: React.FC<IncentivesViewProps> = ({ onAskAI }) => {
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedIncentiveType, setSelectedIncentiveType] = useState<string>('All');
  const [selectedRelevance, setSelectedRelevance] = useState<string>('All');

  const stateOptions = ['All', 'Tamil Nadu', 'Telangana', 'Karnataka', 'Maharashtra', 'Haryana'];
  const incentiveTypes = ['All', 'Employment Subsidy', 'Stamp Duty Exemption', 'Power Tariff Subsidy', 'R&D Grant', 'Lease Subsidy', 'Capital Subsidy'];
  const relevanceOptions = ['All', 'Direct GCC Policy', 'High'];

  const filteredIncentives = useMemo(() => {
    return STATE_INCENTIVES.filter((inc) => {
      if (selectedState !== 'All' && inc.state !== selectedState) return false;
      if (selectedIncentiveType !== 'All' && inc.incentiveType !== selectedIncentiveType) return false;
      if (selectedRelevance !== 'All' && inc.gccRelevance !== selectedRelevance) return false;
      return true;
    });
  }, [selectedState, selectedIncentiveType, selectedRelevance]);

  const resetFilters = () => {
    setSelectedState('All');
    setSelectedIncentiveType('All');
    setSelectedRelevance('All');
  };

  const hasFilters = selectedState !== 'All' || selectedIncentiveType !== 'All' || selectedRelevance !== 'All';

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Landmark className="w-5 h-5 text-blue-600" />
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">State Incentives & Policy Hub</h1>
            <span className="text-xs font-mono bg-blue-50 text-blue-800 px-2 py-0.5 rounded-xs border border-blue-200">
              Gazetted Policies
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono mt-1">
            Empirical registry of state government fiscal subsidies, stamp duty waivers, and fast-track statutory acts
          </p>
        </div>

        {/* Global Policy Inquiry */}
        <button
          onClick={() => onAskAI('What are the comparative state policy incentives for setting up a GCC in Tamil Nadu vs Telangana vs Karnataka?')}
          className="self-start md:self-auto px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-xs shadow-xs transition-colors flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Ask Atlas AI to Compare Policies</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-2xs space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {/* State */}
          <div>
            <label className="block text-[11px] font-mono text-slate-500 mb-1">State Government</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xs p-1.5 focus:border-blue-600 focus:outline-hidden text-slate-800"
            >
              {stateOptions.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* Incentive Type */}
          <div>
            <label className="block text-[11px] font-mono text-slate-500 mb-1">Incentive Category</label>
            <select
              value={selectedIncentiveType}
              onChange={(e) => setSelectedIncentiveType(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xs p-1.5 focus:border-blue-600 focus:outline-hidden text-slate-800"
            >
              {incentiveTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* GCC Relevance */}
          <div>
            <label className="block text-[11px] font-mono text-slate-500 mb-1">Policy Scope</label>
            <select
              value={selectedRelevance}
              onChange={(e) => setSelectedRelevance(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xs p-1.5 focus:border-blue-600 focus:outline-hidden text-slate-800"
            >
              {relevanceOptions.map((rel) => (
                <option key={rel} value={rel}>{rel === 'All' ? 'All Policies' : rel}</option>
              ))}
            </select>
          </div>

          {/* Reset */}
          <div className="flex items-end">
            <button
              onClick={resetFilters}
              disabled={!hasFilters}
              className={`w-full py-1.5 px-3 rounded-xs text-xs font-mono flex items-center justify-center gap-1.5 border transition-colors ${
                hasFilters
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700 cursor-pointer'
                  : 'bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed opacity-60'
              }`}
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trust Notice */}
      <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-xs text-xs text-blue-900 flex items-start gap-2">
        <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <span>
          <strong>Statutory Accuracy Rule:</strong> GCC Atlas exclusively quotes published, gazetted policy text. Where incentive caps or subsidy rates are conditional upon discretion or case-by-case cabinet memos, we explicitly link to the source notification.
        </span>
      </div>

      {/* Incentives Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredIncentives.map((inc) => (
          <div
            key={inc.id}
            className="bg-white border border-slate-200 rounded-lg p-5 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs font-mono bg-slate-900 text-white px-2 py-0.5 rounded-xs">
                    {inc.state}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-xs border font-medium ${
                    inc.gccRelevance === 'Direct GCC Policy'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 font-bold'
                      : 'bg-blue-50 text-blue-800 border-blue-200'
                  }`}>
                    {inc.gccRelevance}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-xs">
                  {inc.incentiveType}
                </span>
              </div>

              {/* Policy Title */}
              <h3 className="font-bold text-base text-slate-900 tracking-tight leading-snug">
                {inc.policyName}
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Target Sector: {inc.targetSector} • Period: {inc.policyPeriod}
              </p>

              {/* Core Benefit */}
              <div className="mt-3 p-3 bg-emerald-50/60 border border-emerald-200 rounded-sm">
                <span className="text-[11px] font-mono text-emerald-900 uppercase font-bold block mb-1">
                  Verified Benefit:
                </span>
                <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                  {inc.summaryBenefit}
                </p>
              </div>

              {/* Eligibility & Conditions */}
              <div className="mt-3 space-y-2 text-xs text-slate-700">
                <div>
                  <strong className="text-slate-900 font-mono text-[11px] block">Eligibility Threshold:</strong>
                  <p className="text-slate-600 mt-0.5 leading-relaxed">{inc.eligibility}</p>
                </div>
                <div>
                  <strong className="text-slate-900 font-mono text-[11px] block">Key Stipulations:</strong>
                  <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">{inc.keyConditions}</p>
                </div>
              </div>
            </div>

            {/* Footer with Source Trail */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{inc.policyDate}</span>
              </div>

              {inc.sourceUrl ? (
                <a
                  href={inc.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
                >
                  <span>Official Policy Text</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span>See Source</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
