// src/app/api/my-votes/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const votes = await db.getUserVotes(ip);
    return NextResponse.json(votes);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch voting history' }, { status: 500 });
  }
}