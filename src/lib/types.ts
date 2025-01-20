export interface Stats {
    unique_voters: number;
    total_votes: number;
    votes_per_ip_average: number;
  }
  
  export interface LeaderboardItem {
    country: string;
    flag: string;
    percentage: number;
    votes: number;
  }
  
  export interface Vote {
    country: string;
    timestamp: string;
  }
  
  export interface VotingHistory {
    votes: Vote[];
  }