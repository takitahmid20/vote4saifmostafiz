import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

// GET - Fetch all submissions (PROTECTED - Admin Only)
export async function GET(request) {
  try {
    // Check for API key in Authorization header
    const authHeader = request.headers.get('authorization');
    const apiKey = authHeader?.replace('Bearer ', '');

    if (!apiKey || apiKey !== ADMIN_API_KEY) {
      return NextResponse.json(
        { status: 'error', message: 'Unauthorized: Invalid or missing API key' },
        { status: 401 }
      );
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}

// POST - Submit new manifesto
export async function POST(request) {
  try {
    const body = await request.json();
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error submitting data:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to submit data' },
      { status: 500 }
    );
  }
}
