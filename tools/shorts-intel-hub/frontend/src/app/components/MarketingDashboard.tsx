import { useState } from 'react';
import { StatsDashboard } from '@/app/components/StatsDashboard';
import { ScoringSettings } from '@/app/components/ScoringSettings';
import { ArchiveView } from '@/app/components/ArchiveView';
import { ThreeTrackView } from '@/app/components/ThreeTrackView';

const markets = [
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' },
  { code: 'IN', name: 'India' },
  { code: 'ID', name: 'Indonesia' },
];

interface MarketingDashboardProps {
  nyanCatFile: File | null;
  vaynerFile: File | null;
}

export function MarketingDashboard({ nyanCatFile, vaynerFile }: MarketingDashboardProps) {
  const [selectedMarket, setSelectedMarket] = useState('JP');
  const [approvedCount] = useState(0);
  const [activeTab, setActiveTab] = useState<'summary' | 'scoring' | 'archive'>('summary');

  return (
    <div className="px-6 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Yellow-glow control panel */}
        <div className="mb-6 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.15)]">
          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block mb-2 text-foreground">Market</label>
              <select
                value={selectedMarket}
                onChange={(e) => setSelectedMarket(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground"
              >
                {markets.map((market) => (
                  <option key={market.code} value={market.code}>
                    {market.name}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Tabs */}
          <div className="mb-6 border-b border-border">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('summary')}
                className={`px-4 py-3 font-medium transition-colors relative ${
                  activeTab === 'summary'
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Top Topics & Trends
                {activeTab === 'summary' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('scoring')}
                className={`px-4 py-3 font-medium transition-colors relative ${
                  activeTab === 'scoring'
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Scoring Settings
                {activeTab === 'scoring' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('archive')}
                className={`px-4 py-3 font-medium transition-colors relative ${
                  activeTab === 'archive'
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Archive
                {activeTab === 'archive' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            </div>
          </div>

          {/* Stats Dashboard - Only for Summary Tab */}
          {activeTab === 'summary' && (
            <StatsDashboard
              market={selectedMarket}
              totalTrends={0}
              approvedCount={approvedCount}
            />
          )}
        </div>

        {/* Tab Content */}
        {activeTab === 'summary' ? (
          <ThreeTrackView
            nyanCatFile={nyanCatFile}
            vaynerFile={vaynerFile}
            market={selectedMarket}
          />
        ) : activeTab === 'scoring' ? (
          <ScoringSettings />
        ) : (
          <ArchiveView market={selectedMarket} />
        )}
      </div>
    </div>
  );
}