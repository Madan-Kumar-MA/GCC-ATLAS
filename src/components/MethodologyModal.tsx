import React from 'react';
import { X, ShieldAlert, CheckCircle2, AlertTriangle, Layers, Database, Compass, Lightbulb, ExternalLink } from 'lucide-react';
import { GCC_DISCREPANCY_REPORTS } from '../data/reportsData';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MethodologyModal: React.FC<MethodologyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div data-testid="methodology-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-lg border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" />
            <div>
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">GCC Atlas Methodology & Trust Architecture</h2>
              <p className="text-xs text-slate-500 font-mono">Principles of Data Provenance, Verification, and Scoring</p>
            </div>
          </div>
          <button
            data-testid="btn-close-methodology-modal"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 rounded-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Trust Statement */}
          <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-sm">
            <h3 className="font-semibold text-blue-900 flex items-center gap-1.5 mb-1">
              <ShieldAlert className="w-4 h-4 text-blue-700" />
              Core Principle: Transparent Data Provenance
            </h3>
            <p className="text-xs leading-relaxed text-blue-950">
              GCC Atlas strictly separates <strong>verified empirical facts</strong> (statutory filings, official corporate press releases, state government gazetted policies), <strong>industry estimates</strong> (NASSCOM, EY, CBRE research consensus), and <strong>analytical scores</strong>. We do not invent unsupported metrics or present estimates as absolute truths.
            </p>
          </div>

          {/* Section: What GCC Atlas is vs is not */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-emerald-200/90 bg-emerald-50/30 rounded-sm">
              <h4 className="font-semibold text-emerald-900 flex items-center gap-1.5 mb-2 text-xs uppercase tracking-wider font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                What GCC Atlas Is
              </h4>
              <ul className="text-xs space-y-2 text-slate-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>An intelligence layer synthesizing corporate filings, state policies, real-estate absorption benchmarks, and talent maps into decision-ready insights.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>A comparative decision engine for executives evaluating multi-city footprint expansion in India.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>A verified source trail where every data record can be audited back to its publication origin.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 border border-rose-200/90 bg-rose-50/30 rounded-sm">
              <h4 className="font-semibold text-rose-900 flex items-center gap-1.5 mb-2 text-xs uppercase tracking-wider font-mono">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                What GCC Atlas Is Not
              </h4>
              <ul className="text-xs space-y-2 text-slate-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Not an official government census or legal regulatory authority.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Not confidential proprietary headcount surveillance; where headcount is non-public, it is marked as "Not disclosed" or given as bracketed estimates.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Not a replacement for tailored legal or tax counsel prior to entity incorporation.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section: Why GCC Counts Differ */}
          <div>
            <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-slate-600" />
              Why Industry GCC Numbers Differ
            </h3>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Consulting reports frequently quote conflicting numbers (ranging from 1,520 to 1,720+ GCCs in India). Rather than picking one number arbitrarily, GCC Atlas documents the methodological reasons:
            </p>

            <div className="border border-slate-200 rounded-sm divide-y divide-slate-200 overflow-hidden text-xs">
              {GCC_DISCREPANCY_REPORTS.map((report, idx) => (
                <div key={idx} className="p-3 bg-slate-50/40 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between font-semibold text-slate-900 mb-1">
                    <span>{report.sourceName}</span>
                    <span className="font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded-xs border border-blue-200">
                      {report.estimatedCount}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-1"><strong className="text-slate-700">Definition:</strong> {report.definitionUsed}</p>
                  <p className="text-slate-500 text-[11px]"><strong className="text-slate-600">Methodology Note:</strong> {report.methodologyNotes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Confidence Framework */}
          <div>
            <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
              <Compass className="w-4 h-4 text-slate-600" />
              Confidence Framework Levels
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 border border-emerald-200 bg-emerald-50/40 rounded-sm">
                <span className="font-mono font-bold text-emerald-800 block mb-1">HIGH (Verified Fact)</span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Direct primary evidence: SEC 10-K, MCA ROC statutory filings, signed state gazette policies, official corporate inaugurations.
                </p>
              </div>
              <div className="p-3 border border-amber-200 bg-amber-50/40 rounded-sm">
                <span className="font-mono font-bold text-amber-800 block mb-1">MEDIUM (Industry Sourced)</span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Published NASSCOM, EY, or Zinnov research papers, verified press interviews by Managing Directors, commercial leasing news.
                </p>
              </div>
              <div className="p-3 border border-blue-200 bg-blue-50/40 rounded-sm">
                <span className="font-mono font-bold text-blue-800 block mb-1">ESTIMATED (Analytical)</span>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Algorithmic scoring models, multi-factor suitability rankings, or benchmark ranges where confidential numbers are withheld.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Future Opportunity / Monetization */}
          <div className="p-4 bg-slate-100/70 border border-slate-200 rounded-sm">
            <h3 className="font-semibold text-slate-900 flex items-center gap-1.5 mb-2 text-xs uppercase tracking-wider font-mono">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              Future Roadmap & Monetization Horizon
            </h3>
            <p className="text-xs text-slate-600 mb-2 leading-relaxed">
              In a commercial rollout, GCC Atlas provides significant monetization opportunities for global expansion decision-makers:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700">
              <div className="p-2 bg-white border border-slate-200 rounded-xs">
                <strong>• Enterprise Subscriptions:</strong> Real-time GCC expansion alerts, real estate lease expirations, and talent compensation feeds.
              </div>
              <div className="p-2 bg-white border border-slate-200 rounded-xs">
                <strong>• Premium Site Selection Tool:</strong> Micro-market GIS layers down to specific tech park corridors and power sub-stations.
              </div>
              <div className="p-2 bg-white border border-slate-200 rounded-xs">
                <strong>• Verified Provider Marketplace:</strong> RFP matching for vetted legal, tax, EOR, and executive search partners.
              </div>
              <div className="p-2 bg-white border border-slate-200 rounded-xs">
                <strong>• Custom Research & Advisory APIs:</strong> Direct REST/GraphQL integration into corporate strategy dashboards.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Audit Review: October 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-sans font-medium rounded-xs transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
