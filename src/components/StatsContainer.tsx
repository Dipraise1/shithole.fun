// src/components/StatsContainer.tsx
'use client';

import { useEffect, useState } from 'react';
import { Stats } from '@/lib/types';

export default function StatsContainer() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch('/api/stats');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!stats) return null;

  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-gray-700 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-[#4fffb0] mb-2">{stats.unique_voters}</div>
        <div className="text-sm opacity-90">Unique Voters</div>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-[#4fffb0] mb-2">{stats.total_votes}</div>
        <div className="text-sm opacity-90">Total Votes</div>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-[#4fffb0] mb-2">
          {stats.votes_per_ip_average.toFixed(2)}
        </div>
        <div className="text-sm opacity-90">Avg Votes per IP</div>
      </div>
    </div>
  );
}