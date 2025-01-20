// src/components/MainContent.tsx
'use client';

import SearchBox from './SearchBox';
import LeaderboardList from './LeaderboardList';
import StatsContainer from './StatsContainer';
import VotingHistory from './VotingHistory';
import AboutSection from './AboutSection';

export default function MainContent() {
  return (
    <>
      <StatsContainer />
      <VotingHistory />
      <SearchBox />
      <LeaderboardList />
      <AboutSection />
    </>
  );