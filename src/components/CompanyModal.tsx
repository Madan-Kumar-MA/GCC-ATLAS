import React from 'react';
import { X, Building2, MapPin, Calendar, Users, Cpu, Clock, CheckCircle2, ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';
import { GCCCompany } from '../types';
import { ConfidenceBadge } from './ConfidenceBadge';
import { SourceBadge } from './SourceBadge';

interface CompanyModalProps {
  company: GCCCompany | null;
  onClose: () => void;
  onSelectCity?: (city: string) => void;
  onAskAI?: (prompt: string) => void;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({ company, onClose, onSelectCity, onAskAI }) => {
  if (!company) return null;

  return (
    <div data-testid="company-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="bg-white rounded-lg border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Top Header */}
        <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-start justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2 py-0.5 text-xs font-mono font-medium rounded-xs bg-blue-100 text-blue-900 border border-blue-200">
                {company.industry}
              </span>
              <ConfidenceBadge level={company.confidence} />
              <span className={`px-2 py-0.5 text-xs font-mono font-medium rounded-xs border ${
                company.status === 'Expanding'
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-slate-100 text-slate-800 border-slate-300'
              }`}>
                {company.status}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              {company.company}
            </h2>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Global HQ: {company.globalHeadquarters} • Established in India: {company.establishedYear}
            </p>
          </div>

          <button
            data-testid="btn-close-company-modal"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 rounded-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-50 rounded-sm border border-slate-200 font-mono text-xs">
            <div>
              <span className="text-slate-500 block text-[11px]">Primary Footprint</span>
              <span className="font-semibold text-slate-900">{company.cities.join(', ')}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Scale Bracket</span>
              <span className="font-semibold text-slate-900">{company.scaleStatus}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">First Established</span>
              <span className="font-semibold text-slate-900">{company.establishedYear}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Audit Date</span>
              <span className="font-semibold text-slate-900">{company.lastVerified}</span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">Executive Overview</h3>
            <p className="text-sm text-slate-800 leading-relaxed bg-white p-3 border border-slate-200 rounded-sm">
              {company.description}
            </p>
            {company.estimatedHeadcount && (
              <p className="text-xs text-slate-600 font-mono mt-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <span><strong>Headcount Transparency:</strong> {company.estimatedHeadcount}</span>
              </p>
            )}
          </div>

          {/* India Locations & Campuses */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">India Campuses & Facilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {company.locations.map((loc, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-sm flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900 text-xs">{loc.city}, {loc.state}</span>
                      {loc.isPrimary && (
                        <span className="text-[10px] font-mono bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-xs">
                          Primary Center
                        </span>
                      )}
                    </div>
                    {loc.campusName && (
                      <p className="text-xs text-slate-600 mt-0.5 truncate">{loc.campusName}</p>
                    )}
                    {onSelectCity && (
                      <button
                        onClick={() => {
                          onClose();
                          onSelectCity(loc.city);
                        }}
                        className="text-[11px] text-blue-600 hover:text-blue-800 font-medium mt-1 inline-flex items-center gap-1"
                      >
                        Explore {loc.city} Hub <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key GCC Functions & Workloads */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">Core Mandates & Engineering Workloads</h3>
            <div className="space-y-1.5">
              {company.functions.map((fn, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs bg-slate-50/60 p-2 border border-slate-200/80 rounded-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800">{fn}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              Evolution Timeline
            </h3>
            <div className="relative pl-4 border-l-2 border-slate-200 space-y-4 py-1">
              {company.timeline.map((evt, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white ring-1 ring-slate-300" />
                  <div className="text-xs font-mono font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded-xs border border-blue-200">{evt.year}</span>
                    <span>{evt.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{evt.description}</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">Source: {evt.source}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Signals */}
          {company.recentSignals && company.recentSignals.length > 0 && (
            <div className="p-3.5 bg-amber-50/50 border border-amber-200/80 rounded-sm">
              <h4 className="text-xs font-bold text-amber-900 uppercase font-mono tracking-wider mb-1.5">Recent Signals & Expansion Signals</h4>
              <ul className="text-xs space-y-1 text-slate-700">
                {company.recentSignals.map((sig, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{sig}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Source Trail Section */}
          <div className="border-t border-slate-200 pt-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Source Trail & Audit Record
            </h3>
            <div className="p-3 bg-slate-50 rounded-sm border border-slate-200 space-y-2 text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-slate-600"><strong>Primary Citation:</strong> {company.source}</span>
                {company.sourceUrl && (
                  <a
                    href={company.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 text-[11px]"
                  >
                    Open Source Document <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {company.sourceTrail && company.sourceTrail.length > 0 && (
                <div className="pt-2 border-t border-slate-200/80 space-y-1">
                  <span className="text-[11px] text-slate-500 font-mono block">Document Chain:</span>
                  {company.sourceTrail.map((st, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[11px] font-mono text-slate-600">
                      <span>• {st.name} ({st.type})</span>
                      <span className="text-slate-500">{st.verifiedDate}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          {onAskAI ? (
            <button
              onClick={() => {
                onClose();
                onAskAI(`Tell me more about ${company.company}'s GCC operations in India, including key engineering capabilities and locations.`);
              }}
              className="text-xs font-mono text-blue-700 hover:text-blue-900 inline-flex items-center gap-1.5 font-medium"
            >
              Ask Atlas AI about {company.company} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : <div />}

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-xs transition-colors"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
