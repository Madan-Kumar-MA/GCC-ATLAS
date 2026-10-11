import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  TrendingUp,
  MapPin,
  Building2,
  Users,
  Search,
  ExternalLink,
  ShieldCheck,
  HelpCircle,
  Sparkles,
  BarChart3,
  Calendar,
  Layers,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { GCC_COMPANIES } from '../data/gccData';
import { CITIES_DATA } from '../data/cityData';
import { GCC_DISCREPANCY_REPORTS, RECENT_GCC_SIGNALS, MACRO_STATISTICS } from '../data/reportsData';
import { GCCCompany, GCCActivitySignal } from '../types';
import { ConfidenceBadge } from './ConfidenceBadge';
import { SourceBadge } from './SourceBadge';
import { NavTab } from './Navbar';

interface OverviewViewProps {
  onNavigate: (tab: NavTab) => void;
  onSelectCompany: (company: GCCCompany) => void;
  onSelectCity: (cityName: string) => void;
  onAskAI: (prompt: string) => void;
  onQuickSearch: (query: string) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  onNavigate,
  onSelectCompany,
  onSelectCity,
  onAskAI,
  onQuickSearch
}) => {
  const [activeSignalFilter, setActiveSignalFilter] = useState<string>('All');

  // Chart data: City presence
  const cityPresenceData = CITIES_DATA.map((c) => ({
    name: c.name,
    gccCountMin: parseInt(c.estimatedGCCCountRange.split('–')[0].trim(), 10),
    gccCountMax: parseInt(c.estimatedGCCCountRange.split('–')[1].replace('GCCs', '').trim(), 10),
    share: c.estimatedShareOfIndiaGCCs,
    state: c.state
  }));

  // Chart data: Industry distribution
  const industryDistributionData = [
    { name: 'Technology & Software', value: 42, color: '#1e3a8a' },
    { name: 'BFSI & FinTech', value: 21, color: '#2563eb' },
    { name: 'Industrial & ER&D', value: 14, color: '#0284c7' },
    { name: 'Healthcare & Pharma', value: 10, color: '#0d9488' },
    { name: 'Retail & Consumer', value: 8, color: '#d97706' },
    { name: 'Telecom & Media', value: 5, color: '#64748b' },
  ];

  const quickQuestions = [
    'Which city has the strongest technology GCC ecosystem?',
    'Compare Bengaluru and Hyderabad',
    'Which companies have GCCs in Chennai?',
    'What incentives are available in Telangana?'
  ];

  const filteredSignals = activeSignalFilter === 'All'
    ? RECENT_GCC_SIGNALS
    : RECENT_GCC_SIGNALS.filter(s => s.industry.toLowerCase().includes(activeSignalFilter.toLowerCase()));

  return (
    <div className="space-y-10 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-lg p-6 sm:p-10 border border-slate-800 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/60 border border-blue-700/60 rounded-xs text-xs font-mono text-blue-300">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span>Decision-Ready India GCC Intelligence Layer</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            India’s GCC ecosystem, mapped.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            From fragmented consulting reports to decision-ready intelligence. Explore verified company footprints, multi-city cost structures, state subsidies, and evaluate your next capability hub.
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('explorer')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xs shadow-sm transition-all flex items-center gap-2"
            >
              <span>Explore GCC Database</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('compare')}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold rounded-xs transition-all flex items-center gap-2"
            >
              <span>Compare Cities</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate('wizard')}
              className="px-5 py-2.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium rounded-xs transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Run "Build My GCC" Wizard</span>
            </button>
          </div>

          {/* Quick Question Chips */}
          <div className="pt-4 border-t border-slate-800/80">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
              Executive Inquiries & Quick Prompts:
            </span>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => onAskAI(q)}
                  className="text-xs text-left px-3 py-1.5 bg-slate-800/90 hover:bg-blue-900/60 border border-slate-700/80 hover:border-blue-600 text-slate-300 hover:text-white rounded-xs transition-all inline-flex items-center gap-1.5"
                >
                  <Search className="w-3 h-3 text-slate-400" />
                  <span>"{q}"</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. KPI Cards */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            Macro GCC Ecosystem Metrics
          </h2>
          <span className="text-[11px] font-mono text-slate-500">
            Audit Benchmark: {MACRO_STATISTICS.lastAuditDate}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white border border-slate-200 rounded-sm shadow-2xs hover:border-slate-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono text-slate-500 uppercase">GCCs Tracked</span>
              <ConfidenceBadge level="Estimated" showLabel={false} />
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 tracking-tight">
              {MACRO_STATISTICS.trackedGCCsCount}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Consensus range (1,580–1,720 across 4 industry audits)
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-sm shadow-2xs hover:border-slate-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono text-slate-500 uppercase">Tier-1 Metros Profiled</span>
              <ConfidenceBadge level="High" showLabel={false} />
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 tracking-tight">
              {MACRO_STATISTICS.tier1CitiesCount} Cities
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Bengaluru, Hyderabad, Chennai, Pune, NCR, Mumbai
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-sm shadow-2xs hover:border-slate-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono text-slate-500 uppercase">Installed Talent Pool</span>
              <ConfidenceBadge level="Medium" showLabel={false} />
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 tracking-tight">
              {MACRO_STATISTICS.talentPoolInstalled}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Specialized technology, quants & R&D FTEs
            </p>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-sm shadow-2xs hover:border-slate-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono text-slate-500 uppercase">Annual Export Value</span>
              <ConfidenceBadge level="Medium" showLabel={false} />
            </div>
            <div className="text-2xl font-bold font-mono text-slate-900 tracking-tight">
              {MACRO_STATISTICS.marketEconomicOutput}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Direct economic contribution of captive operations
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE PRODUCT DIFFERENTIATOR: Why GCC Numbers Differ (Section 18) */}
      <section className="bg-slate-50 border border-blue-200/80 rounded-lg p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xs bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                GCC Count — Why Numbers Differ Across Reports
              </h3>
              <p className="text-xs text-slate-600">
                Different consulting firms use conflicting legal definitions, campus counts, and reporting thresholds.
              </p>
            </div>
          </div>
          <div className="text-[11px] font-mono text-blue-900 bg-blue-100/80 px-2.5 py-1 rounded-xs border border-blue-200 self-start sm:self-auto">
            Analytical Principle #1: Provenance Over Vanity Figures
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {GCC_DISCREPANCY_REPORTS.map((report, idx) => (
            <div key={idx} className="bg-white p-3.5 border border-slate-200 rounded-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-xs text-slate-900">{report.sourceName}</span>
                </div>
                <div className="font-mono text-sm font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-xs inline-block mb-2 border border-blue-200">
                  {report.estimatedCount}
                </div>
                <p className="text-xs text-slate-700 leading-snug mb-1">
                  <strong>Threshold:</strong> {report.definitionUsed}
                </p>
                <p className="text-[11px] text-slate-500 leading-snug">
                  <strong>Scope Note:</strong> {report.methodologyNotes}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                Reported: {report.reportingYear}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-white/80 rounded-xs border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong>GCC Atlas Transparency Rule:</strong> Rather than forcing a single speculative number as absolute truth, we benchmark across NASSCOM, EY, ANSR, and CBRE so leadership teams can understand exactly what is known, what is inferred, and why legal entities differ from operating physical campuses.
          </span>
        </div>
      </section>

      {/* 4. Visual Analytics: City Presence & Industry Concentration */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* City Presence Bar Chart */}
        <div className="lg:col-span-7 bg-white p-5 border border-slate-200 rounded-lg shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                GCC Presence by City (Estimated Range & Share)
              </h3>
              <p className="text-xs text-slate-500 font-mono">Consensus estimate across active Grade-A office footprints</p>
            </div>
            <button
              onClick={() => onNavigate('compare')}
              className="text-xs text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1"
            >
              Compare All <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cityPresenceData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#475569' }} interval={0} angle={-15} textAnchor="end" />
                <YAxis tick={{ fontSize: 11, fill: '#64748b' }} domain={[0, 700]} />
                <Tooltip
                  formatter={(val: any) => [`${val} GCCs`, 'Max Range Estimate']}
                  contentStyle={{ backgroundColor: '#0f172a', color: '#fff', fontSize: '12px', borderRadius: '4px', border: 'none' }}
                />
                <Bar dataKey="gccCountMax" fill="#1e3a8a" radius={[2, 2, 0, 0]} name="Estimated Active GCCs" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-2 border-t border-slate-100 text-center font-mono text-xs">
            {CITIES_DATA.map((c) => (
              <div
                key={c.id}
                onClick={() => onSelectCity(c.name)}
                className="p-1.5 rounded-xs hover:bg-slate-50 cursor-pointer border border-transparent hover:border-slate-200 transition-colors"
              >
                <div className="font-semibold text-slate-900 text-[11px] truncate">{c.name}</div>
                <div className="text-blue-600 font-bold text-xs">{c.estimatedShareOfIndiaGCCs}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Distribution Chart */}
        <div className="lg:col-span-5 bg-white p-5 border border-slate-200 rounded-lg shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                GCC Ecosystem by Industry Mandate
              </h3>
              <p className="text-xs text-slate-500 font-mono">Percentage distribution of captive units</p>
            </div>
          </div>

          <div className="h-52 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={industryDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={75}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {industryDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(val: any) => [`${val}% of India GCCs`, 'Share']}
                  contentStyle={{ backgroundColor: '#0f172a', color: '#fff', fontSize: '12px', borderRadius: '4px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-100">
            {industryDistributionData.map((ind, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-2xs shrink-0" style={{ backgroundColor: ind.color }} />
                <span className="text-slate-600 truncate">{ind.name}</span>
                <span className="font-mono font-bold text-slate-900 ml-auto">{ind.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recent GCC Activity & Expansion Signals Feed */}
      <section className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div>
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Recent GCC Expansion Signals & Center Announcements
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              Verified corporate lease transactions, R&D inaugurations, and capability expansions
            </p>
          </div>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap gap-1">
            {['All', 'Technology', 'BFSI', 'Engineering', 'Healthcare', 'Retail'].map((f) => (
              <button
                key={f}
                onClick={() => setActiveSignalFilter(f)}
                className={`px-2.5 py-1 text-xs rounded-xs font-mono transition-colors ${
                  activeSignalFilter === f
                    ? 'bg-blue-900 text-white font-medium'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredSignals.map((sig) => (
            <div
              key={sig.id}
              className="p-3.5 border border-slate-200 rounded-sm hover:border-blue-300 hover:shadow-xs transition-all bg-slate-50/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-slate-900">{sig.company}</span>
                    <span className="text-xs font-mono text-slate-500">• {sig.city}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-blue-100 text-blue-800 rounded-xs border border-blue-200">
                    {sig.activityType}
                  </span>
                </div>

                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  {sig.headline}
                </p>

                {sig.scaleEstimate && (
                  <p className="text-[11px] font-mono text-emerald-700 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{sig.scaleEstimate}</span>
                  </p>
                )}
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {sig.date}
                </span>

                <div className="flex items-center gap-1">
                  <span className="truncate max-w-[150px]">{sig.source}</span>
                  {sig.sourceUrl && (
                    <a
                      href={sig.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                    >
                      <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Featured Marquee GCC Profiles Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              Featured GCC Case Studies & Tracked Captives
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              Empirical records with complete timeline, footprint, and source trails
            </p>
          </div>
          <button
            onClick={() => onNavigate('explorer')}
            className="text-xs text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1"
          >
            View All ({GCC_COMPANIES.length}) <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GCC_COMPANIES.slice(0, 6).map((comp) => (
            <div
              key={comp.id}
              onClick={() => onSelectCompany(comp)}
              className="p-4 bg-white border border-slate-200 rounded-sm hover:border-blue-400 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors">
                      {comp.company}
                    </h4>
                    <span className="text-xs font-mono text-slate-500">{comp.industry}</span>
                  </div>
                  <ConfidenceBadge level={comp.confidence} />
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                  {comp.description}
                </p>

                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-mono text-[11px] text-slate-600 truncate">
                      {comp.cities.join(', ')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-mono text-[11px] text-slate-600">
                      {comp.scaleStatus}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400">
                  Est. {comp.establishedYear}
                </span>
                <span className="text-xs text-blue-600 group-hover:translate-x-0.5 transition-transform inline-flex items-center font-medium">
                  Profile Details <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
