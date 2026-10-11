import React from 'react';
import { ExternalLink, BookOpen, FileCheck, Building2, Landmark, LineChart } from 'lucide-react';
import { SourceReference } from '../types';

interface SourceBadgeProps {
  source: string;
  sourceType?: SourceReference['type'] | string;
  sourceUrl?: string;
  verifiedDate?: string;
  compact?: boolean;
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({
  source,
  sourceType,
  sourceUrl,
  verifiedDate,
  compact = false
}) => {
  const getIcon = () => {
    switch (sourceType) {
      case 'Government Policy':
        return <Landmark className="w-3 h-3 text-slate-500" />;
      case 'Securities Filing':
        return <FileCheck className="w-3 h-3 text-slate-500" />;
      case 'Company Announcement':
        return <Building2 className="w-3 h-3 text-slate-500" />;
      case 'Real Estate Benchmark':
        return <LineChart className="w-3 h-3 text-slate-500" />;
      default:
        return <BookOpen className="w-3 h-3 text-slate-500" />;
    }
  };

  if (compact) {
    return (
      <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
        {getIcon()}
        <span className="truncate max-w-[200px]" title={source}>{source}</span>
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
            title="Open verified source link"
          >
            <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 py-1 px-2.5 bg-slate-50 border border-slate-200/90 rounded-xs text-xs text-slate-700">
      <div className="flex items-center gap-1 text-slate-500">
        {getIcon()}
        <span className="font-medium text-slate-600">{sourceType || 'Source'}:</span>
      </div>
      <span className="font-mono text-slate-800 truncate max-w-[260px]" title={source}>{source}</span>
      {verifiedDate && (
        <span className="text-[10px] font-mono text-slate-500 border-l border-slate-200 pl-2">
          {verifiedDate}
        </span>
      )}
      {sourceUrl && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-0.5 ml-auto text-[11px] font-medium"
        >
          <span>View Source</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
};
