import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { OverviewView } from './components/OverviewView';
import { ExplorerView } from './components/ExplorerView';
import { CityIntelligenceView } from './components/CityIntelligenceView';
import { CityCompareView } from './components/CityCompareView';
import { BuildWizardView } from './components/BuildWizardView';
import { IncentivesView } from './components/IncentivesView';
import { ProvidersView } from './components/ProvidersView';
import { AtlasAIChat } from './components/AtlasAIChat';
import { CompanyModal } from './components/CompanyModal';
import { MethodologyModal } from './components/MethodologyModal';
import { GCC_COMPANIES } from './data/gccData';
import { GCCCompany } from './types';
import { ShieldCheck, Info, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('overview');
  const [selectedCompany, setSelectedCompany] = useState<GCCCompany | null>(null);
  const [selectedCityName, setSelectedCityName] = useState<string>('Bengaluru');
  const [compareCityIds, setCompareCityIds] = useState<string[]>(['bengaluru', 'hyderabad', 'chennai']);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState<boolean>(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState<string>('');
  const [aiInitialPrompt, setAiInitialPrompt] = useState<string>('');

  const navigateTab = (tab: NavTab, mode: 'push' | 'replace' = 'push') => {
    setCurrentTab(tab);
    if (typeof window !== 'undefined') {
      if (mode === 'push') {
        window.history.pushState({ tab }, '', window.location.pathname);
      } else {
        window.history.replaceState({ tab }, '', window.location.pathname);
      }
    }
  };

  useEffect(() => {
    const syncFromHistory = (event: PopStateEvent) => {
      const tab = event.state?.tab as NavTab | undefined;
      const validTabs: NavTab[] = ['overview', 'explorer', 'cities', 'compare', 'wizard', 'incentives', 'providers', 'assistant'];
      setCurrentTab(tab && validTabs.includes(tab) ? tab : 'overview');
    };

    window.addEventListener('popstate', syncFromHistory);
    return () => window.removeEventListener('popstate', syncFromHistory);
  }, []);

  const handleSelectCompany = (comp: GCCCompany) => {
    setSelectedCompany(comp);
  };

  const handleSelectCompanyByName = (companyName: string) => {
    const found = GCC_COMPANIES.find(
      (c) => c.company.toLowerCase() === companyName.toLowerCase() ||
             companyName.toLowerCase().includes(c.company.toLowerCase())
    );
    if (found) {
      setSelectedCompany(found);
    } else {
      // Navigate to explorer with search
      setGlobalSearchQuery(companyName);
      navigateTab('explorer');
    }
  };

  const handleSelectCity = (cityName: string) => {
    setSelectedCityName(cityName);
    navigateTab('cities');
  };

  const handleCompareCity = (cityId: string) => {
    if (!compareCityIds.includes(cityId)) {
      setCompareCityIds([...compareCityIds.slice(0, 3), cityId]);
    }
    navigateTab('compare');
  };

  const handleAskAI = (prompt: string) => {
    setAiInitialPrompt(prompt);
    navigateTab('assistant');
  };

  const handleQuickSearch = (query: string) => {
    setGlobalSearchQuery(query);
    if (query.trim() && currentTab !== 'explorer') {
      navigateTab('explorer');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* Global Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onTabChange={(tab) => navigateTab(tab)}
        onOpenMethodology={() => setIsMethodologyOpen(true)}
        onQuickSearch={handleQuickSearch}
        searchQuery={globalSearchQuery}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {currentTab === 'overview' && (
          <OverviewView
            onNavigate={(tab) => navigateTab(tab)}
            onSelectCompany={handleSelectCompany}
            onSelectCity={handleSelectCity}
            onAskAI={handleAskAI}
            onQuickSearch={handleQuickSearch}
          />
        )}

        {currentTab === 'explorer' && (
          <ExplorerView
            onSelectCompany={handleSelectCompany}
            initialSearchQuery={globalSearchQuery}
          />
        )}

        {currentTab === 'cities' && (
          <CityIntelligenceView
            selectedCityName={selectedCityName}
            onCompareCity={handleCompareCity}
            onAskAI={handleAskAI}
            onSelectCompanyByName={handleSelectCompanyByName}
          />
        )}

        {currentTab === 'compare' && (
          <CityCompareView
            initialCityIds={compareCityIds}
            onAskAI={handleAskAI}
            onSelectCityByName={handleSelectCity}
          />
        )}

        {currentTab === 'wizard' && (
          <BuildWizardView
            onAskAI={handleAskAI}
            onExploreCity={handleSelectCity}
          />
        )}

        {currentTab === 'incentives' && (
          <IncentivesView
            onAskAI={handleAskAI}
          />
        )}

        {currentTab === 'providers' && (
          <ProvidersView
            onAskAI={handleAskAI}
          />
        )}

        {currentTab === 'assistant' && (
          <AtlasAIChat
            initialPrompt={aiInitialPrompt}
            onExploreCity={handleSelectCity}
          />
        )}
      </main>

      {/* Global Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs font-mono mt-auto py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <span className="w-5 h-5 rounded-xs bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  GCC
                </span>
                <span>GCC Atlas — India GCC Intelligence Platform</span>
              </div>
              <p className="text-slate-400 text-xs mt-1 max-w-xl font-sans">
                The intelligence layer for building and scaling Global Capability Centres in India. Synthesizing corporate filings, state policies, commercial real estate absorption, and talent indices into decision-ready insights.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsMethodologyOpen(true)}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xs border border-slate-700 transition-colors inline-flex items-center gap-1.5 text-xs font-sans"
              >
                <Info className="w-3.5 h-3.5 text-blue-400" />
                <span>Methodology & Provenance</span>
              </button>
              <button
                onClick={() => {
                  navigateTab('wizard');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xs transition-colors inline-flex items-center gap-1.5 text-xs font-sans"
              >
                <span>Run Build My GCC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>
                Empirical Research Prototype • Last Audited: October 2026 • Verified Public Filings & State Gazettes
              </span>
            </div>
            <div>
              Designed for Global Enterprise Expansion Decision-Makers
            </div>
          </div>
        </div>
      </footer>

      {/* Detailed Company Modal */}
      <CompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
        onSelectCity={handleSelectCity}
        onAskAI={handleAskAI}
      />

      {/* Methodology & Trust Modal */}
      <MethodologyModal
        isOpen={isMethodologyOpen}
        onClose={() => setIsMethodologyOpen(false)}
      />
    </div>
  );
}
