import { NextResponse } from 'next/server';
import { mockAnalyses } from '@/data/mockData';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const query = prompt.toLowerCase();

    // Check for keywords in the prompt
    let resultKey = 'diarrhea'; // Default fallback
    
    // Iterating through our 15+ diseases in mockData
    const keywords = Object.keys(mockAnalyses);
    
    for (const key of keywords) {
      // Check if prompt contains the exact keyword or common synonyms
      if (query.includes(key.toLowerCase())) {
        resultKey = key;
        break;
      }
    }

    // Special handling for synonyms or related terms
    if (query.includes('sugar') || query.includes('glucose') || query.includes('diabetes')) {
      resultKey = 'sugar';
    }
    if (query.includes('blood') || query.includes('low')) {
      resultKey = 'anemia';
    }
    if (query.includes('cough') && query.includes('weight')) {
      resultKey = 'tuberculosis';
    }
    if (query.includes('ache') && query.includes('head')) {
      resultKey = 'migraine';
    }
    if (query.includes('headache') || query.includes('epistaxis')) {
      resultKey = 'hypertension';
    }

    const analysis = mockAnalyses[resultKey];

    // Artificial 1 second API overhead (frontend adds another 4.5s for skeleton feel)
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(analysis);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to synthesize prompt' }, { status: 500 });
  }
}
