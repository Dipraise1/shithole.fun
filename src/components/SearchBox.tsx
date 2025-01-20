'use client';

import { useState } from 'react';

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="mb-10">
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-6 py-4 text-base rounded-xl border-2 border-gray-800 
                 bg-gray-800 text-white transition-all duration-200
                 focus:outline-none focus:border-[#4fffb0] focus:ring-2 focus:ring-[#4fffb0]/20"
      />
    </div>
  );
}