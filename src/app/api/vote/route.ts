// src/app/api/vote/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { country } = await request.json();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    await db.recordVote(country, ip);
    const leaderboard = await db.getLeaderboard();
    const userVotes = await db.getUserVotes(ip);
    
    return NextResponse.json({ leaderboard, user_votes: userVotes });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to record vote' }, { status: 500 });
  }
}
