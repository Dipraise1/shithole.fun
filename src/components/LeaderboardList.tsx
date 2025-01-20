// src/components/LeaderboardList.tsx
'use client';

import { useState, useEffect } from 'react';
import { LeaderboardItem } from '@/lib/types';

export default function LeaderboardList() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchLeaderboard = async () => {
    const res = await fetch('/api/leaderboard');
    if (res.ok) {
      const data = await res.json();
      setLeaderboard(data.leaderboard);
    }
  };

  const handleVote = async (country: string) => {
    try {
      const res = await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ country }),
      });
      if (res.ok) {
        const data = await res.json();
        setLeaderboard(data.leaderboard);
        alert(`Thanks for voting for ${country}! 🎉`);
      }
    } catch (error) {
      alert('Error recording vote. Please try again.');
    }
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 30000);
    return () => clearInterval(interval);
  }, []);

  const filteredLeaderboard = leaderboard.filter(item =>
    item.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className="grid gap-4">
      {filteredLeaderboard.map((item, index) => (
        <li
          key={item.country}
          className="bg-gray-800 p-5 rounded-xl flex justify-between items-center 
                   transition-all duration-200 hover:bg-gray-700 hover:-translate-y-0.5"
        >
          <div className="flex items-center gap-5">
            <span className="text-xl font-bold text-[#4fffb0] min-w-8">
              {index + 1}.
            </span>
            <span className="text-2xl">{item.flag}</span>
            <span>
              {item.country} ({item.percentage}%)
            </span>
          </div>
          <button
            onClick={() => handleVote(item.country)}
            className="bg-[#4fffb0] text-gray-900 px-6 py-3 rounded-lg font-semibold
                     transition-all duration-200 hover:scale-105 hover:shadow-lg
                     hover:shadow-[#4fffb0]/20"
          >
            Vote
          </button>
        </li>
      ))}
    </ul>
  );
}