import { NextResponse } from 'next/server';
import { mockAnalyses } from '@/data/mockData';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const query = prompt.toLowerCase();

    // Check for keywords in the prompt
    let resultKey = 'dengue'; // Default fallback
    
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

    if (
  query.includes('asthma') ||
  query.includes('breathing problem') ||
  query.includes('shortness of breath') ||
  query.includes('wheezing') ||
  query.includes('chest tightness') ||
  query.includes('cough') ||
  query.includes('chronic cough') ||
  query.includes('difficulty breathing') ||
  query.includes('respiratory issue') ||
  query.includes('dust allergy') ||
  query.includes('allergy breathing') ||
  query.includes('night cough') ||
  query.includes('breathlessness') ||
  query.includes('lung problem') ||
  query.includes('airway blockage') ||
  query.includes('asthma attack') ||
  query.includes('heavy breathing') ||
  query.includes('tight chest') ||
  query.includes('inhaler use') ||
  query.includes('dry cough')
) {
  resultKey = 'asthma';
}


if (
  query.includes('dengue') ||
  query.includes('high fever') ||
  query.includes('platelet count low') ||
  query.includes('mosquito bite') ||
  query.includes('body pain') ||
  query.includes('joint pain') ||
  query.includes('muscle pain') ||
  query.includes('rash') ||
  query.includes('headache') ||
  query.includes('eye pain') ||
  query.includes('nausea') ||
  query.includes('vomiting') ||
  query.includes('bleeding gums') ||
  query.includes('fatigue') ||
  query.includes('chills') ||
  query.includes('viral fever') ||
  query.includes('dengue symptoms') ||
  query.includes('platelets drop') ||
  query.includes('skin rash') ||
  query.includes('weakness')
) {
  resultKey = 'dengue';
}


if (
  query.includes('diabetes') ||
  query.includes('sugar') ||
  query.includes('high sugar') ||
  query.includes('glucose') ||
  query.includes('blood sugar') ||
  query.includes('frequent urination') ||
  query.includes('excess thirst') ||
  query.includes('weight loss') ||
  query.includes('fatigue') ||
  query.includes('blurred vision') ||
  query.includes('insulin') ||
  query.includes('type 2 diabetes') ||
  query.includes('type 1 diabetes') ||
  query.includes('hyperglycemia') ||
  query.includes('sugar problem') ||
  query.includes('slow healing') ||
  query.includes('hunger') ||
  query.includes('diabetic') ||
  query.includes('low energy') ||
  query.includes('blood glucose') ||
  query.includes('polyuria')
) {
  resultKey = 'diabetes';
}


if (
  query.includes('fracture') ||
  query.includes('broken bone') ||
  query.includes('bone crack') ||
  query.includes('injury') ||
  query.includes('swelling') ||
  query.includes('bone pain') ||
  query.includes('bone damage') ||
  query.includes('accident injury') ||
  query.includes('fall injury') ||
  query.includes('immobilization') ||
  query.includes('cast') ||
  query.includes('x-ray fracture') ||
  query.includes('bruising') ||
  query.includes('joint pain') ||
  query.includes('trauma') ||
  query.includes('bone break') ||
  query.includes('limb pain') ||
  query.includes('movement difficulty') ||
  query.includes('orthopedic injury') ||
  query.includes('bone injury')
) {
  resultKey = 'fracture';
}


if (
  query.includes('heart attack') ||
  query.includes('chest pain') ||
  query.includes('chest pressure') ||
  query.includes('shortness of breath') ||
  query.includes('arm pain') ||
  query.includes('jaw pain') ||
  query.includes('sweating') ||
  query.includes('nausea') ||
  query.includes('dizziness') ||
  query.includes('cardiac arrest') ||
  query.includes('myocardial infarction') ||
  query.includes('heart problem') ||
  query.includes('tight chest') ||
  query.includes('breathing difficulty') ||
  query.includes('fatigue') ||
  query.includes('palpitations') ||
  query.includes('left arm pain') ||
  query.includes('emergency heart') ||
  query.includes('heart blockage') ||
  query.includes('coronary issue')
) {
  resultKey = 'heart-attack';
}


if (
  query.includes('hypertension') ||
  query.includes('high blood pressure') ||
  query.includes('bp high') ||
  query.includes('blood pressure') ||
  query.includes('headache') ||
  query.includes('dizziness') ||
  query.includes('blurred vision') ||
  query.includes('nosebleed') ||
  query.includes('stress') ||
  query.includes('heart strain') ||
  query.includes('systolic pressure') ||
  query.includes('diastolic pressure') ||
  query.includes('bp problem') ||
  query.includes('chronic bp') ||
  query.includes('fatigue') ||
  query.includes('hypertensive') ||
  query.includes('pressure issue') ||
  query.includes('bp control') ||
  query.includes('cardiovascular risk') ||
  query.includes('high bp symptoms')
) {
  resultKey = 'hypertension';
}


if (
  query.includes('kidney stone') ||
  query.includes('stone in kidney') ||
  query.includes('renal calculi') ||
  query.includes('flank pain') ||
  query.includes('back pain') ||
  query.includes('pain urination') ||
  query.includes('blood in urine') ||
  query.includes('urine problem') ||
  query.includes('nausea') ||
  query.includes('vomiting') ||
  query.includes('lower abdomen pain') ||
  query.includes('frequent urination') ||
  query.includes('urinary blockage') ||
  query.includes('burning urination') ||
  query.includes('dehydration') ||
  query.includes('stone pain') ||
  query.includes('kidney pain') ||
  query.includes('urine infection') ||
  query.includes('crystals in urine') ||
  query.includes('urology issue')
) {
  resultKey = 'kidney-stone';
}


if (
  query.includes('ligament tear') ||
  query.includes('ligament injury') ||
  query.includes('sprain') ||
  query.includes('joint pain') ||
  query.includes('swelling') ||
  query.includes('knee injury') ||
  query.includes('ankle injury') ||
  query.includes('joint instability') ||
  query.includes('movement pain') ||
  query.includes('sports injury') ||
  query.includes('bruising') ||
  query.includes('torn ligament') ||
  query.includes('acl tear') ||
  query.includes('knee pain') ||
  query.includes('joint stiffness') ||
  query.includes('limited movement') ||
  query.includes('twisting injury') ||
  query.includes('soft tissue injury') ||
  query.includes('rehabilitation') ||
  query.includes('physiotherapy')
) {
  resultKey = 'ligament-tear';
}



if (
  query.includes('tuberculosis') ||
  query.includes('tb') ||
  query.includes('chronic cough') ||
  query.includes('blood in cough') ||
  query.includes('fever') ||
  query.includes('night sweats') ||
  query.includes('weight loss') ||
  query.includes('fatigue') ||
  query.includes('lung infection') ||
  query.includes('persistent cough') ||
  query.includes('chest pain') ||
  query.includes('breathing issue') ||
  query.includes('infection lungs') ||
  query.includes('tb symptoms') ||
  query.includes('long cough') ||
  query.includes('weakness') ||
  query.includes('bacterial infection') ||
  query.includes('airborne disease') ||
  query.includes('lung disease') ||
  query.includes('cough for weeks')
) {
  resultKey = 'tuberculosis';
}











if (
  query.includes('diarrhea') ||
  query.includes('loose motion') ||
  query.includes('frequent stool') ||
  query.includes('watery stool') ||
  query.includes('stomach upset') ||
  query.includes('abdominal pain') ||
  query.includes('dehydration') ||
  query.includes('vomiting') ||
  query.includes('nausea') ||
  query.includes('food poisoning') ||
  query.includes('infection stomach') ||
  query.includes('bowel movement') ||
  query.includes('cramps') ||
  query.includes('digestive issue') ||
  query.includes('intestinal problem') ||
  query.includes('loose stools') ||
  query.includes('gut infection') ||
  query.includes('weakness') ||
  query.includes('frequent bathroom') ||
  query.includes('stomach infection')
) {
  resultKey = 'diarrhea';
}


if (
  query.includes('malaria') ||
  query.includes('fever with chills') ||
  query.includes('high fever') ||
  query.includes('mosquito bite') ||
  query.includes('sweating') ||
  query.includes('shivering') ||
  query.includes('body ache') ||
  query.includes('headache') ||
  query.includes('fatigue') ||
  query.includes('nausea') ||
  query.includes('vomiting') ||
  query.includes('cyclic fever') ||
  query.includes('infection mosquito') ||
  query.includes('weakness') ||
  query.includes('fever pattern') ||
  query.includes('parasite infection') ||
  query.includes('chills and fever') ||
  query.includes('malaria symptoms') ||
  query.includes('tiredness') ||
  query.includes('high temperature')
) {
  resultKey = 'malaria';
}


if (
  query.includes('anemia') ||
  query.includes('low hemoglobin') ||
  query.includes('iron deficiency') ||
  query.includes('fatigue') ||
  query.includes('weakness') ||
  query.includes('pale skin') ||
  query.includes('shortness of breath') ||
  query.includes('dizziness') ||
  query.includes('low energy') ||
  query.includes('headache') ||
  query.includes('cold hands') ||
  query.includes('cold feet') ||
  query.includes('rapid heartbeat') ||
  query.includes('tiredness') ||
  query.includes('vitamin deficiency') ||
  query.includes('low blood count') ||
  query.includes('breathing difficulty') ||
  query.includes('fainting') ||
  query.includes('lack of iron') ||
  query.includes('blood deficiency')
) {
  resultKey = 'anemia';
}


if (
  query.includes('influenza') ||
  query.includes('flu') ||
  query.includes('viral flu') ||
  query.includes('fever') ||
  query.includes('cough') ||
  query.includes('sore throat') ||
  query.includes('runny nose') ||
  query.includes('body ache') ||
  query.includes('chills') ||
  query.includes('fatigue') ||
  query.includes('headache') ||
  query.includes('cold') ||
  query.includes('nasal congestion') ||
  query.includes('sneezing') ||
  query.includes('respiratory infection') ||
  query.includes('viral infection') ||
  query.includes('high temperature') ||
  query.includes('flu symptoms') ||
  query.includes('weakness') ||
  query.includes('dry cough')
) {
  resultKey = 'influenza';
}


if (
  query.includes('arthritis') ||
  query.includes('joint pain') ||
  query.includes('joint swelling') ||
  query.includes('stiff joints') ||
  query.includes('inflammation joints') ||
  query.includes('knee pain') ||
  query.includes('pain movement') ||
  query.includes('joint stiffness') ||
  query.includes('bone pain') ||
  query.includes('rheumatoid') ||
  query.includes('osteoarthritis') ||
  query.includes('limited movement') ||
  query.includes('swelling joints') ||
  query.includes('chronic pain') ||
  query.includes('joint issue') ||
  query.includes('mobility problem') ||
  query.includes('pain in joints') ||
  query.includes('inflammation') ||
  query.includes('stiffness') ||
  query.includes('joint discomfort')
) {
  resultKey = 'arthritis';
}


if (
  query.includes('cholera') ||
  query.includes('severe diarrhea') ||
  query.includes('watery diarrhea') ||
  query.includes('dehydration') ||
  query.includes('vomiting') ||
  query.includes('rapid fluid loss') ||
  query.includes('stomach infection') ||
  query.includes('contaminated water') ||
  query.includes('loose motion') ||
  query.includes('muscle cramps') ||
  query.includes('weakness') ||
  query.includes('infection water') ||
  query.includes('gut infection') ||
  query.includes('intestinal infection') ||
  query.includes('low blood pressure') ||
  query.includes('frequent stool') ||
  query.includes('fluid loss') ||
  query.includes('severe dehydration') ||
  query.includes('digestive infection') ||
  query.includes('bacterial infection')
) {
  resultKey = 'cholera';
}


if (
  query.includes('migraine') ||
  query.includes('severe headache') ||
  query.includes('head pain') ||
  query.includes('throbbing pain') ||
  query.includes('light sensitivity') ||
  query.includes('sound sensitivity') ||
  query.includes('nausea') ||
  query.includes('vomiting') ||
  query.includes('one sided headache') ||
  query.includes('blurred vision') ||
  query.includes('aura') ||
  query.includes('dizziness') ||
  query.includes('head pressure') ||
  query.includes('chronic headache') ||
  query.includes('visual disturbance') ||
  query.includes('eye pain') ||
  query.includes('stress headache') ||
  query.includes('neural pain') ||
  query.includes('intense headache') ||
  query.includes('pulsating pain')
) {
  resultKey = 'migraine';
}


if (
  query.includes('pneumonia') ||
  query.includes('lung infection') ||
  query.includes('chest pain') ||
  query.includes('cough') ||
  query.includes('fever') ||
  query.includes('difficulty breathing') ||
  query.includes('shortness of breath') ||
  query.includes('phlegm') ||
  query.includes('chills') ||
  query.includes('fatigue') ||
  query.includes('respiratory infection') ||
  query.includes('wet cough') ||
  query.includes('high fever') ||
  query.includes('chest congestion') ||
  query.includes('bacterial infection') ||
  query.includes('viral pneumonia') ||
  query.includes('breathing issue') ||
  query.includes('lung disease') ||
  query.includes('infection lungs') ||
  query.includes('weakness')
) {
  resultKey = 'pneumonia';
}


if (
  query.includes('thyroid') ||
  query.includes('thyroid problem') ||
  query.includes('hypothyroidism') ||
  query.includes('hyperthyroidism') ||
  query.includes('weight gain') ||
  query.includes('weight loss') ||
  query.includes('fatigue') ||
  query.includes('hair loss') ||
  query.includes('hormonal imbalance') ||
  query.includes('neck swelling') ||
  query.includes('goiter') ||
  query.includes('cold intolerance') ||
  query.includes('heat intolerance') ||
  query.includes('slow metabolism') ||
  query.includes('fast heartbeat') ||
  query.includes('mood swings') ||
  query.includes('tiredness') ||
  query.includes('hormone issue') ||
  query.includes('metabolism problem') ||
  query.includes('thyroid symptoms')
) {
  resultKey = 'thyroid';
}






    


    const analysis = mockAnalyses[resultKey];

    // Artificial 1 second API overhead (frontend adds another 4.5s for skeleton feel)
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(analysis);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to synthesize prompt' }, { status: 500 });
  }
}
