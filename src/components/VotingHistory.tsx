'use client';

import { useEffect, useState } from 'react';
import { Vote } from '@/lib/types';

export default function VotingHistory() {
  const [votes, setVotes] = useState<Vote[]>([]);

  useEffect(() => {
    const fetchVotes = async () => {
      const res = await fetch('/api/my-votes');
      if (res.ok) {
        const data = await res.json();
        setVotes(data.votes);
      }
    };

    fetchVotes();
    const interval = setInterval(fetchVotes, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-8">
      <h3 className="text-[#4fffb0] text-xl font-bold mb-4">Your Voting History</h3>
      <ul className="grid gap-3">
        {votes.length > 0 ? (
          votes.map((vote, index) => (
            <li
              key={index}
              className="bg-gray-700 p-4 rounded-lg flex justify-between items-center"
            >
              <span>{vote.country}</span>
              <span className="text-sm opacity-75">
                {new Date(vote.timestamp).toLocaleString()}
              </span>
            </li>
          ))
        ) : (
          <li className="bg-gray-700 p-4 rounded-lg text-center">No votes yet</li>
        )}
      </ul>
    </div>
  );
}