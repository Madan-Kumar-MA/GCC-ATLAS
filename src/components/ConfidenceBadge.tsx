import React from 'react';
import { ConfidenceLevel } from '../types';
import { ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';

interface ConfidenceBadgeProps {
  level: ConfidenceLevel;
  showLabel?: boolean;
  className?: string;
}

export const ConfidenceBadge: React.FC<ConfidenceBadgeProps> = ({ level, showLabel = true, className = '' }) => {
  if (level === 'High') {
    return (
      <span
        title="High Confidence: Directly verified via official corporate SEC filings, annual investor reports, or state gazettes."
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-xs text-xs font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80 ${className}`}
      >
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        {showLabel && <span>Verified Fact</span>}
      </span>
    );
  }

  if (level === 'Medium') {
    return (
      <span
        title="Medium Confidence: Derived from public press coverage, industry research summaries, or company releases."
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-xs text-xs font-mono font-medium bg-amber-50 text-amber-800 border border-amber-200/80 ${className}`}
      >
        <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
        {showLabel && <span>Industry Sourced</span>}
      </span>
    );
  }

  return (
    <span
      title="Estimated: Modeled analytical benchmark based on multi-source consulting estimates and leasing indices."
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-xs text-xs font-mono font-medium bg-blue-50 text-blue-800 border border-blue-200/80 ${className}`}
    >
      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
      {showLabel && <span>Analytical Estimate</span>}
    </span>
  );
};
