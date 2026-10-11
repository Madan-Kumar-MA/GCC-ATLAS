import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Building2,
  MapPin,
  Calendar,
  Users,
  LayoutGrid,
  List,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { GCC_COMPANIES } from '../data/gccData';
import { GCCCompany } from '../types';
import { ConfidenceBadge } from './ConfidenceBadge';
import { SourceBadge } from './SourceBadge';

interface ExplorerViewProps {
  onSelectCompany: (company: GCCCompany) => void;
  initialSearchQuery?: string;
}

export const ExplorerView: React.FC<ExplorerViewProps> = ({
  onSelectCompany,
  initialSearchQuery = ''
}) => {
  const [search, setSearch] = useState(initialSearchQuery);
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedScale, setSelectedScale] = useState<string>('All');
  const [selectedFunction, setSelectedFunction] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Extract unique filter options
  const cityOptions = useMemo(() => {
    const set = new Set<string>();
    GCC_COMPANIES.forEach((c) => c.cities.forEach((city) => set.add(city)));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const industryOptions = useMemo(() => {
    const set = new Set<string>();
    GCC_COMPANIES.forEach((c) => set.add(c.industry));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const scaleOptions = useMemo(() => {
    const set = new Set<string>();
    GCC_COMPANIES.forEach((c) => set.add(c.scaleStatus));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const functionKeywords = [
    'All',
    'AI',
    'Cloud',
    'Trading',
    'Supply Chain',
    'ER&D',
    'Cybersecurity',
    'Life Sciences'
  ];

  // Filtering logic
  const filteredCompanies = useMemo(() => {
    return GCC_COMPANIES.filter((c) => {
      // Text search
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchesName = c.company.toLowerCase().includes(q);
        const matchesHQ = c.globalHeadquarters.toLowerCase().includes(q);
        const matchesCity = c.cities.some((city) => city.toLowerCase().includes(q));
        const matchesDesc = c.description.toLowerCase().includes(q);
        const matchesFn = c.functions.some((fn) => fn.toLowerCase().includes(q));
        if (!matchesName && !matchesHQ && !matchesCity && !matchesDesc && !matchesFn) {
          return false;
        }
      }

      // City filter
      if (selectedCity !== 'All' && !c.cities.includes(selectedCity)) {
        return false;
      }

      // Industry filter
      if (selectedIndustry !== 'All' && c.industry !== selectedIndustry) {
        return false;
      }

      // Scale filter
      if (selectedScale !== 'All' && c.scaleStatus !== selectedScale) {
        return false;
      }

      // Function filter
      if (selectedFunction !== 'All') {
        const fnQ = selectedFunction.toLowerCase();
        const hasFn = c.functions.some((f) => f.toLowerCase().includes(fnQ)) ||
                      c.keyWorkloads.some((k) => k.toLowerCase().includes(fnQ));
        if (!hasFn) return false;
      }

      return true;
    });
  }, [search, selectedCity, selectedIndustry, selectedScale, selectedFunction]);

  const resetFilters = () => {
    setSearch('');
    setSelectedCity('All');
    setSelectedIndustry('All');
    setSelectedScale('All');
    setSelectedFunction('All');
  };

  const hasActiveFilters =
    search.trim() !== '' ||
    selectedCity !== 'All' ||
    selectedIndustry !== 'All' ||
    selectedScale !== 'All' ||
    selectedFunction !== 'All';

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">GCC Explorer</h1>
            <span className="text-xs font-mono bg-blue-50 text-blue-800 px-2 py-0.5 rounded-xs border border-blue-200">
              Database
            </span>
          </div>
          <p className="text-xs text-slate-500 font-mono mt-1">
            Searchable registry of verified Global Capability Centres in India with empirical source trails
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <div className="flex items-center border border-slate-200 rounded-xs bg-slate-50 p-0.5">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-2xs text-xs flex items-center gap-1 transition-colors ${
                viewMode === 'grid' ? 'bg-white shadow-2xs font-semibold text-slate-900' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cards</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-2xs text-xs flex items-center gap-1 transition-colors ${
                viewMode === 'table' ? 'bg-white shadow-2xs font-semibold text-slate-900' : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Table View"
            >
              <List className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Table</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-2xs space-y-3">
        {/* Search input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search company (e.g. Microsoft, Walmart, Wells Fargo), headquarters, functions..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 focus:bg-white border border-slate-200 focus:border-blue-600 rounded-sm focus:outline-hidden text-slate-900 transition-colors"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 pt-1">
          {/* City */}
          <div>
            <label className="block text-[11px] font-mono text-slate-500 mb-1">City Hub</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xs p-1.5 focus:border-blue-600 focus:outline-hidden text-slate-800"
            >
              {cityOptions.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Industry */}
          <div>
            <label className="block text-[11px] font-mono text-slate-500 mb-1">Industry</label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xs p-1.5 focus:border-blue-600 focus:outline-hidden text-slate-800"
            >
              {industryOptions.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          {/* Scale */}
          <div>
            <label className="block text-[11px] font-mono text-slate-500 mb-1">Estimated Scale</label>
            <select
              value={selectedScale}
              onChange={(e) => setSelectedScale(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xs p-1.5 focus:border-blue-600 focus:outline-hidden text-slate-800"
            >
              {scaleOptions.map((sc) => (
                <option key={sc} value={sc}>{sc}</option>
              ))}
            </select>
          </div>

          {/* Function Domain */}
          <div>
            <label className="block text-[11px] font-mono text-slate-500 mb-1">Domain Focus</label>
            <select
              value={selectedFunction}
              onChange={(e) => setSelectedFunction(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xs p-1.5 focus:border-blue-600 focus:outline-hidden text-slate-800"
            >
              {functionKeywords.map((fn) => (
                <option key={fn} value={fn}>{fn}</option>
              ))}
            </select>
          </div>

          {/* Reset button */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1 flex items-end">
            <button
              onClick={resetFilters}
              disabled={!hasActiveFilters}
              className={`w-full py-1.5 px-3 rounded-xs text-xs font-mono flex items-center justify-center gap-1.5 border transition-colors ${
                hasActiveFilters
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

      {/* Results Count & Disclaimer */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
        <span>
          Showing <strong>{filteredCompanies.length}</strong> of <strong>{GCC_COMPANIES.length}</strong> tracked enterprises
        </span>
        <span className="hidden sm:inline">
          Click any card to inspect locations, timeline & source trail
        </span>
      </div>

      {/* Empty State */}
      {filteredCompanies.length === 0 && (
        <div className="p-12 text-center bg-white rounded-lg border border-slate-200 space-y-3">
          <Building2 className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No matching GCC records found</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Try adjusting your search criteria or resetting filters to browse all verified captive centers.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-slate-900 text-white rounded-xs text-xs font-medium hover:bg-slate-800 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Grid View */}
      {viewMode === 'grid' && filteredCompanies.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCompanies.map((c) => (
            <div
              key={c.id}
              onClick={() => onSelectCompany(c)}
              className="bg-white border border-slate-200 rounded-sm p-4 hover:border-blue-400 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors">
                      {c.company}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-mono text-slate-500">{c.industry}</span>
                      <span className="text-[10px] text-slate-400">• Est. {c.establishedYear}</span>
                    </div>
                  </div>
                  <ConfidenceBadge level={c.confidence} />
                </div>

                {/* Cities */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-2.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="font-mono text-[11px] truncate">{c.cities.join(', ')}</span>
                </div>

                {/* Functions Pills */}
                <div className="space-y-1 mb-3">
                  {c.functions.slice(0, 2).map((fn, idx) => (
                    <div key={idx} className="text-[11px] text-slate-700 bg-slate-50 px-2 py-0.5 rounded-2xs border border-slate-200/80 truncate">
                      • {fn}
                    </div>
                  ))}
                  {c.functions.length > 2 && (
                    <span className="text-[10px] font-mono text-slate-400 pl-1">
                      +{c.functions.length - 2} more specialized functions
                    </span>
                  )}
                </div>

                {/* Headcount scale */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-2">
                  <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="font-mono text-[11px] font-medium text-slate-700">{c.scaleStatus}</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <SourceBadge
                  source={c.source}
                  sourceType={c.sourceType}
                  sourceUrl={c.sourceUrl}
                  compact
                />
                <span className="text-blue-600 group-hover:translate-x-0.5 transition-transform inline-flex items-center font-medium shrink-0 ml-2">
                  Details <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === 'table' && filteredCompanies.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-sm shadow-2xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700 border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-2.5 px-4 font-semibold">Company</th>
                  <th className="py-2.5 px-3 font-semibold">Industry</th>
                  <th className="py-2.5 px-3 font-semibold">India Locations</th>
                  <th className="py-2.5 px-3 font-semibold">Scale Bracket</th>
                  <th className="py-2.5 px-3 font-semibold">Established</th>
                  <th className="py-2.5 px-3 font-semibold">Confidence</th>
                  <th className="py-2.5 px-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {filteredCompanies.map((c) => (
                  <tr
                    key={c.id}
                    onClick={() => onSelectCompany(c)}
                    className="hover:bg-slate-50/80 cursor-pointer transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900">{c.company}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{c.globalHeadquarters}</div>
                    </td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-xs font-mono text-[10px]">
                        {c.industry}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-slate-600">
                      {c.cities.join(', ')}
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-slate-800">
                      {c.scaleStatus}
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-slate-600">
                      {c.establishedYear}
                    </td>
                    <td className="py-3 px-3">
                      <ConfidenceBadge level={c.confidence} />
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCompany(c);
                        }}
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-0.5"
                      >
                        Inspect <ChevronRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
