import React, { useState } from 'react';
import {
  Compass,
  Search,
  Building2,
  MapPin,
  GitCompare,
  Wand2,
  FileText,
  Users2,
  Bot,
  Info,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';

export type NavTab =
  | 'overview'
  | 'explorer'
  | 'cities'
  | 'compare'
  | 'wizard'
  | 'incentives'
  | 'providers'
  | 'assistant';

interface NavbarProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenMethodology: () => void;
  onQuickSearch: (query: string) => void;
  searchQuery: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  onOpenMethodology,
  onQuickSearch,
  searchQuery
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'overview', label: 'Overview', icon: <Compass className="w-4 h-4" /> },
    { id: 'explorer', label: 'GCC Explorer', icon: <Building2 className="w-4 h-4" /> },
    { id: 'cities', label: 'City Intelligence', icon: <MapPin className="w-4 h-4" /> },
    { id: 'compare', label: 'Compare', icon: <GitCompare className="w-4 h-4" /> },
    { id: 'wizard', label: 'Build My GCC', icon: <Wand2 className="w-4 h-4" />, badge: 'Wizard' },
    { id: 'incentives', label: 'State Incentives', icon: <FileText className="w-4 h-4" /> },
    { id: 'providers', label: 'Service Providers', icon: <Users2 className="w-4 h-4" /> },
    { id: 'assistant', label: 'Atlas AI', icon: <Bot className="w-4 h-4" />, badge: 'AI' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-2xs backdrop-blur-md bg-white/95">
      {/* Top Banner / Ticker */}
      <div className="bg-slate-900 text-slate-300 text-[11px] font-mono py-1 px-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold tracking-wider uppercase text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Intelligence
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden sm:inline text-slate-300 truncate">
            1,620+ Captive Centers Tracked across 6 Hubs • ~$60B Export Valuation
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3 h-3" />
            <span className="text-[10px]">Data Audit: Oct 2026</span>
          </div>
          <button
            onClick={onOpenMethodology}
            className="text-slate-300 hover:text-white underline decoration-slate-600 transition-colors inline-flex items-center gap-1 text-[11px]"
          >
            <Info className="w-3 h-3" />
            <span>Methodology</span>
          </button>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15 gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0 cursor-pointer" onClick={() => handleNavClick('overview')}>
            <div className="w-9 h-9 rounded-sm bg-blue-900 flex items-center justify-center text-white font-bold font-mono tracking-tighter border border-blue-800 shadow-xs">
              <span className="text-sm tracking-normal font-sans font-black">GCC</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-slate-950 font-sans">
                  GCC Atlas
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 bg-blue-50 text-blue-800 rounded-xs border border-blue-200">
                  INDIA
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-tight -mt-0.5">
                The intelligence layer for building & scaling GCCs
              </p>
            </div>
          </div>

          {/* Global Quick Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-2">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onQuickSearch(e.target.value)}
                placeholder="Search companies, cities, industries, or ask a question..."
                className="w-full pl-9 pr-8 py-1.5 text-xs bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 focus:border-blue-600 rounded-sm focus:outline-hidden transition-all text-slate-900 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => onQuickSearch('')}
                  className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-1.5 rounded-sm text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 border border-blue-200 shadow-2xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className={isActive ? 'text-blue-700' : 'text-slate-400'}>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] font-mono px-1 py-0.2 rounded-2xs uppercase ${
                        isActive
                          ? 'bg-blue-200 text-blue-950 font-bold'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="md:hidden pb-3 pt-1">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onQuickSearch(e.target.value)}
              placeholder="Search companies, cities, industries..."
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-sm focus:outline-hidden focus:border-blue-600 text-slate-900 placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1 shadow-lg animate-in slide-in-from-top duration-150">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-sm ${
                  isActive
                    ? 'bg-blue-50 text-blue-900 font-semibold border border-blue-200'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={isActive ? 'text-blue-700' : 'text-slate-400'}>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[9px] font-mono px-1 py-0.2 rounded-2xs uppercase bg-slate-200 text-slate-700">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMethodology();
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-xs text-slate-600 hover:text-slate-900"
            >
              <Info className="w-4 h-4 text-slate-400" />
              <span>Data Provenance & Methodology</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
