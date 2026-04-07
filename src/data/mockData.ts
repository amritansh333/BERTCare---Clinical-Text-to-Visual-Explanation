export interface AnalysisResult {
  id: string;
  summary: string;
  disease: string;
  medication: { name: string; dosage: string }[];
  precautions: string[];
  videoPath: string;
  imagePath: string;
  symptoms: string[];
  riskLevel: 'Low' | 'Medium' | 'High';
}

export const mockAnalyses: Record<string, AnalysisResult> = {

  asthma: {
    id: 'asthma',
    disease: 'Bronchial Asthma',
    summary: 'Chronic inflammatory disorder of the airways resulting in reversible airway obstruction and hyperresponsiveness.',
    symptoms: ['Expiratory wheeze', 'Paroxysmal dyspnea', 'Thoracic tightness', 'Nocturnal cough'],
    medication: [{ name: 'SABA Inhaler', dosage: 'As required' }, { name: 'ICS Therapy', dosage: 'Daily maintenance' }],
    precautions: ['Allergen avoidance', 'Activity modification', 'Peak flow monitoring'],
    videoPath: '/videos/asthma.mp4',
    imagePath: '/images/asthma.jpg',
    riskLevel: 'Medium'
  },

  dengue: {
    id: 'dengue',
    disease: 'Dengue Fever',
    summary: 'Arboviral infection transmitted through Aedes mosquitoes, presenting with severe musculoskeletal pain.',
    symptoms: ['Hyperpyrexia', 'Retro-orbital pain', 'Severe arthralgia', 'Maculopapular rash'],
    medication: [{ name: 'Supportive Therapy', dosage: 'Hydration focus' }, { name: 'Acetaminophen', dosage: 'PRN for fever' }],
    precautions: ['Avoid Platelet-interfering drugs', 'Vector control', 'Intensive hydration'],
    videoPath: '/videos/dengue.mp4',
    imagePath: '/images/dengue.jpg',
    riskLevel: 'Medium'
  },

  diabetes: {
    id: 'diabetes',
    disease: 'Diabetes Mellitus',
    summary: 'A chronic metabolic disorder resulting in elevated blood glucose levels due to insulin-related complications.',
    symptoms: ['Polyuria', 'Polydipsia', 'Visual blurring', 'General lethargy'],
    medication: [{ name: 'Metformin', dosage: '500mg BID' }, { name: 'Insulin Therapy', dosage: 'Titrated units' }],
    precautions: ['Blood glucose monitoring', 'Controlled dietary intake', 'Consistent physical regimen'],
    videoPath: '/videos/diabetes.mp4',
    imagePath: '/images/diabetes.jpg',
    riskLevel: 'Medium'
  },

  fracture: {
    id: 'fracture',
    disease: 'Bone Fracture',
    summary: 'Structural discontinuity of skeletal bone caused by traumatic impact or excessive psychological stress on the bone.',
    symptoms: ['Intense localized pain', 'Visible edema', 'Structural misalignment', 'Functional loss'],
    medication: [{ name: 'Analgesics', dosage: 'PRN for pain' }, { name: 'Calcium/Vitamin D', dosage: 'Daily therapeutic' }],
    precautions: ['Strict immobilization', 'Cryotherapy', 'Non-weight bearing status'],
    videoPath: '/videos/fracture.mp4',
    imagePath: '/images/fracture.jpg',
    riskLevel: 'High'
  },

  heartAttack: {
  id: 'heart-attack',
  disease: 'Heart Attack (Myocardial Infarction)',
  summary: 'A life-threatening condition caused by blockage of blood flow to the heart muscle, leading to tissue damage due to lack of oxygen supply.',
  symptoms: ['Severe chest pain or pressure', 'Shortness of breath', 'Pain radiating to arm, neck, or jaw', 'Sweating', 'Nausea or dizziness'],
  medication: [{ name: 'Aspirin', dosage: 'Immediate use during suspected event (as advised)' },{ name: 'Nitroglycerin', dosage: 'As prescribed for chest pain relief' }],
  precautions: ['Seek immediate medical attention', 'Avoid physical exertion', 'Maintain heart-healthy lifestyle post recovery', 'Regular monitoring and follow-up'],
  videoPath: '/videos/heart-attack.mp4',
  imagePath: '/images/heart-attack.jpg',
  riskLevel: 'High'
  },

  hypertension: {
    id: 'hypertension',
    disease: 'Hypertension',
    summary: 'Sustained elevation of systemic arterial blood pressure, increasing cardiovascular risk factors.',
    symptoms: ['Occipital headache', 'Angina', 'Visual disturbances', 'Epistaxis'],
    medication: [{ name: 'ACE Inhibitors', dosage: 'Once daily' }, { name: 'Beta Blockers', dosage: 'Cardioprotective dose' }],
    precautions: ['Low-sodium diet', 'Aerobic activity', 'Stress reduction techniques'],
    videoPath: '/videos/hypertension.mp4',
    imagePath: '/images/hypertension.jpg',
    riskLevel: 'Medium'
  },

  kidneyStone: {
  id: 'kidney-stone',
  disease: 'Kidney Stone (Renal Calculi)',
  summary: 'Formation of hard mineral and salt deposits within the kidneys, which can obstruct urinary flow and cause severe pain.',
  symptoms: ['Severe flank or lower back pain', 'Pain during urination', 'Blood in urine', 'Nausea and vomiting', 'Frequent urge to urinate'],
  medication: [{ name: 'Pain Relievers (NSAIDs)', dosage: 'As prescribed for pain management' },{ name: 'Alpha Blockers', dosage: 'To help pass the stone more easily' }],
  precautions: ['Increase fluid intake', 'Avoid high-sodium and oxalate-rich foods', 'Follow prescribed dietary changes', 'Regular medical check-up'],
  videoPath: '/videos/kidney-stone.mp4',
  imagePath: '/images/kidney-stone.jpg',
  riskLevel: 'Medium'
  },

  ligamentTear: {
  id: 'ligament-tear',
  disease: 'Ligament Tear',
  summary: 'Injury to the ligament fibers caused by overstretching or sudden joint movement, leading to instability and pain in the affected joint.',
  symptoms: ['Joint pain', 'Swelling', 'Limited range of motion', 'Joint instability', 'Bruising'],
  medication: [{ name: 'NSAIDs', dosage: 'As prescribed for pain and inflammation' },{ name: 'Muscle Relaxants', dosage: 'If required for associated muscle stiffness' }],
  precautions: ['Rest and avoid strain', 'Apply ice packs regularly', 'Use compression and elevation (RICE)', 'Physiotherapy for recovery'],
  videoPath: '/videos/ligament-tear.mp4',
  imagePath: '/images/ligament-tear.jpg',
  riskLevel: 'High'
  },

  tuberculosis: {
    id: 'tuberculosis',
    disease: 'Tuberculosis',
    summary: 'Bacterial infection caused by Mycobacterium tuberculosis primarily manifesting in pulmonary tissue.',
    symptoms: ['Persistent productive cough', 'Unexplained weight loss', 'Nocturnal diaphoresis', 'Chest discomfort'],
    medication: [{ name: 'DOTS course', dosage: 'Standardized course' }, { name: 'Ethambutol', dosage: 'Clinical protocol' }],
    precautions: ['Strict medical adherence', 'Surgical masking', 'Airborne transmission precautions'],
    videoPath: '/videos/tuberculosis.mp4',
    imagePath: '/images/tuberculosis.jpg',
    riskLevel: 'High'
  },




  
  diarrhea: {
    id: 'diarrhea',
    disease: 'Diarrhea',
    summary: 'Episodes of frequent, loose, or watery stools generally caused by viral, bacterial, or parasitic infections.',
    symptoms: ['Frequent loose movements', 'Abdominal cramping', 'Dehydration risk', 'Initial nausea'],
    medication: [{ name: 'ORS', dosage: 'Ongoing replenishment' }, { name: 'Loperamide', dosage: '2mg following movements' }],
    precautions: ['Maintain fluid replacement', 'Adopt bland diet', 'Hand hygiene focus'],
    videoPath: '/videos/diarrhea.mp4',
    imagePath: '/images/diarrhea.jpg',
    riskLevel: 'High'
  },

  malaria: {
    id: 'malaria',
    disease: 'Malaria',
    summary: 'A parasitic infection transmitted via mosquito vectors, characterized by recurrent high fever and shivering.',
    symptoms: ['Cyclic high fever', 'Severe chills', 'Acute headache', 'Muscle fatigue'],
    medication: [{ name: 'ACT Regimen', dosage: 'Clinical schedule' }, { name: 'Chloroquine', dosage: 'Standard course' }],
    precautions: ['Mosquito netting', 'Protective clothing', 'Chemical repellents'],
    videoPath: '/videos/malaria.mp4',
    imagePath: '/images/malaria.jpg',
    riskLevel: 'High'
  },
  
  anemia: {
    id: 'anemia',
    disease: 'Iron Deficiency Anemia',
    summary: 'Hematological deficiency characterized by suboptimal red blood cell count or hemoglobin concentration.',
    symptoms: ['Chronic fatigue', 'Cutaneous pallor', 'Orthostatic dizziness', 'Dyspnea'],
    medication: [{ name: 'Ferrous Sulfate', dosage: 'Daily elemental iron' }, { name: 'Folate/B12', dosage: 'Dietary supplement' }],
    precautions: ['High-iron dietary intake', 'Monitoring CBC levels', 'Nutritional optimization'],
    videoPath: '/videos/anemia.mp4',
    imagePath: '/images/anemia.jpg',
    riskLevel: 'Low'
  },
  
  influenza: {
    id: 'influenza',
    disease: 'Influenza',
    summary: 'Highly contagious viral infection affecting the respiratory system, often presenting seasonally.',
    symptoms: ['High fever', 'Productive or dry cough', 'Myalgia', 'Rhinorrhea'],
    medication: [{ name: 'Antivirals', dosage: 'Early intervention' }, { name: 'Fluid therapy', dosage: 'Maintenance levels' }],
    precautions: ['Vaccination schedule', 'Hand disinfection', 'Physical distancing during peaks'],
    videoPath: '/videos/influenza.mp4',
    imagePath: '/images/influenza.jpg',
    riskLevel: 'Low'
  },

  arthritis: {
    id: 'arthritis',
    disease: 'Arthritis',
    summary: 'Chronic inflammation of articular surfaces within joints, leading to pain and anatomical degradation.',
    symptoms: ['Joint tenderness', 'Morning stiffness', 'Inflammatory edema', 'Limited articulation'],
    medication: [{ name: 'NSAIDs', dosage: 'Anti-inflammatory dose' }, { name: 'DMARDs', dosage: 'Specialist protocol' }],
    precautions: ['Weight management', 'Joint preservation exercises', 'Ergonomic optimization'],
    videoPath: '/videos/arthritis.mp4',
    imagePath: '/images/arthritis.jpg',
    riskLevel: 'Medium'
  },
  
  cholera: {
    id: 'cholera',
    disease: 'Cholera',
    summary: 'Severe acute diarrheal disease caused by Vibrio cholerae leading to rapid and fatal dehydration.',
    symptoms: ['Rice-water stools', 'Muscle cramps', 'Tachycardia', 'Signs of shock'],
    medication: [{ name: 'Aggressive Rehydration', dosage: 'IV as necessary' }, { name: 'Antibiotics', dosage: 'Curative course' }],
    precautions: ['Water purification', 'Sanitary disposal', 'Rigorous food hygiene'],
    videoPath: '/videos/cholera.mp4',
    imagePath: '/images/cholera.jpg',
    riskLevel: 'High'
  },

  migraine: {
    id: 'migraine',
    disease: 'Migraine',
    summary: 'Neurological condition involving neurovascular changes leading to recurrent, severe unilateral headaches.',
    symptoms: ['Unilateral throbbing', 'Emetic symptoms', 'Photophobia', 'Sensory auras'],
    medication: [{ name: 'Triptans', dosage: 'Acute management' }, { name: 'Prophylactics', dosage: 'Preventative course' }],
    precautions: ['Identification of triggers', 'Adequate sleep hygiene', 'Avoidance of environmental stimuli'],
    videoPath: '/videos/migraine.mp4',
    imagePath: '/images/migraine.jpg',
    riskLevel: 'Low'
  },

  pneumonia: {
    id: 'pneumonia',
    disease: 'Pneumonia',
    summary: 'Inflammatory consolidation of pulmonary parenchyma resulting from micro-organic infection.',
    symptoms: ['Purulent sputum cough', 'High-grade fever', 'Pleuritic pain', 'Oxygen desaturation'],
    medication: [{ name: 'Antibiotherapy', dosage: 'Empirical course' }, { name: 'Bronchodilators', dosage: 'Supportive' }],
    precautions: ['Early vaccination', 'Avoidance of pollutants', 'Extended physical rest'],
    videoPath: '/videos/pneumonia.mp4',
    imagePath: '/images/pneumonia.jpg',
    riskLevel: 'High'
  },

  thyroid: {
    id: 'thyroid',
    disease: 'Thyroid Disorder',
    summary: 'Endocrine dysregulation or physical abnormalities affecting the thyroid gland balance.',
    symptoms: ['Metabolic shifts', 'Mood stabilization issues', 'Thermal intolerance', 'Cardiovascular shifts'],
    medication: [{ name: 'Hormone Replacement', dosage: 'Daily physiological dose' }, { name: 'Antithyroid meds', dosage: 'Clinically indicated' }],
    precautions: ['Serum TSH monitoring', 'Nutritional iodine balance', 'Metabolic stress control'],
    videoPath: '/videos/thyroid.mp4',
    imagePath: '/images/thyroid.jpg',
    riskLevel: 'Medium'
  }
};
