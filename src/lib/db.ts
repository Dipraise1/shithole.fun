import { sql } from '@vercel/postgres';
import { LeaderboardItem, Stats, VotingHistory } from './types';

export const db = {
  async getStats(): Promise<Stats> {
    const result = await sql`
      SELECT 
        COUNT(DISTINCT ip_address) as unique_voters,
        COUNT(*) as total_votes,
        CAST(COUNT(*) AS FLOAT) / COUNT(DISTINCT ip_address) as votes_per_ip_average
      FROM votes;
    `;
    return result.rows[0] as Stats;
  },

  async getLeaderboard(): Promise<LeaderboardItem[]> {
    const result = await sql`
      WITH vote_counts AS (
        SELECT 
          country,
          COUNT(*) as vote_count,
          100.0 * COUNT(*) / SUM(COUNT(*)) OVER () as percentage
        FROM votes
        GROUP BY country
      )
      SELECT 
        v.country,
        c.flag,
        v.percentage,
        v.vote_count as votes
      FROM vote_counts v
      JOIN countries c ON c.name = v.country
      ORDER BY v.vote_count DESC;
    `;
    return result.rows as LeaderboardItem[];
  },

  async getUserVotes(ip: string): Promise<VotingHistory> {
    const result = await sql`
      SELECT country, created_at as timestamp
      FROM votes
      WHERE ip_address = ${ip}
      ORDER BY created_at DESC;
    `;
    return { votes: result.rows as Vote[] };
  },

  async recordVote(country: string, ip: string): Promise<void> {
    await sql`
      INSERT INTO votes (country, ip_address)
      VALUES (${country}, ${ip});
    `;
  }
};