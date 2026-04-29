import { useEffect, useState } from 'react';
import { MarketingDashboard } from '@/app/components/MarketingDashboard';
import { DataUpload } from '@/app/components/DataUpload';
import { BarChart3, Upload, Youtube } from 'lucide-react';
import { subscribeToCurrent, type SharedState } from '@/services/sharedState';

const EMPTY_STATE: SharedState = {
  nyanCat: null,
  vayner: null,
  matchSummary: null,
  matchResult: null,
};

export default function App() {
  const [activeView, setActiveView] = useState<'dashboard' | 'upload'>('dashboard');
  const [state, setState] = useState<SharedState>(EMPTY_STATE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsub = subscribeToCurrent((next) => {
      setState(next);
      setHydrated(true);
    });
    return unsub;
  }, []);

  return (
    <div className="size-full flex flex-col bg-background">
      <header className="border-b border-border bg-card">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Youtube className="size-8 text-primary" />
                <div>
                  <h1 className="text-foreground text-lg">Shorts Intel Hub</h1>
                  <p className="text-muted-foreground text-xs">APAC Marketing Intelligence Platform</p>
                </div>
              </div>
            </div>
            <nav className="flex gap-2">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium ${
                  activeView === 'dashboard'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                <BarChart3 className="size-4" />
                Marketing Dashboard
              </button>
              <button
                onClick={() => setActiveView('upload')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium ${
                  activeView === 'upload'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                <Upload className="size-4" />
                Data Upload
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        {activeView === 'dashboard' ? (
          <MarketingDashboard state={state} hydrated={hydrated} />
        ) : (
          <DataUpload state={state} hydrated={hydrated} />
        )}
      </main>
    </div>
  );
}
