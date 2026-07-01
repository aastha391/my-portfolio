export const projects = [
  {
    id: 'campushub',
    title: 'CampusHub',
    subtitle: 'College Life Management Platform',
    date: 'Apr 2026',
    team: 'Team Project · 4 members',
    role: 'Frontend Developer',
    tech: ['React.js', 'Context API', 'CSS', 'JavaScript'],
    description:
      'A multi-role single-page application built to centralize college life for students, admins, and clubs.',
    github: 'https://github.com/aastha391/CampusHub', // paste your GitHub repo URL here
    live: 'https://campus-hub-flax.vercel.app/', // paste your live deployed link here, if any
    points: [
      'Engineered multi-role SPA with 3 dashboards: student, admin, and club',
      'Implemented 5+ core features including events, notes sharing, Q&A, and team formation',
      'Managed global state across 15+ components using Context API',
      'Designed responsive UI improving usability across multiple devices',
    ],
    featured: false,
  },
  {
    id: 'fake-review-detection',
    title: 'Fake Review Detection System',
    subtitle: 'ML-Based Text Classification',
    date: 'Apr 2026',
    team: 'Individual Project',
    role: 'ML Engineer & Full Stack Developer',
    tech: ['Python', 'Scikit-learn', 'TF-IDF', 'SMOTE', 'FastAPI', 'React.js'],
    description:
      'An end-to-end machine learning system that classifies fake vs. genuine product reviews at scale.',
    github: 'https://github.com/aastha391/fake-review-detector', // paste your GitHub repo URL here
    live: 'https://fake-review-detector-pink.vercel.app', // paste your live deployed link here, if any
    points: [
      'Built an end-to-end ML system to classify fake vs genuine reviews on a 40K+ dataset',
      'Designed a preprocessing pipeline improving data quality and feature extraction',
      'Applied TF-IDF vectorization and SMOTE to handle class imbalance effectively',
      'Trained and evaluated multiple models — achieved F1-score of 0.91 and ROC-AUC of 0.97',
      'Deployed FastAPI backend and integrated it with a React frontend',
    ],
    featured: true,
    stats: [
      { label: 'F1-Score', value: '0.91' },
      { label: 'ROC-AUC', value: '0.97' },
      { label: 'Dataset', value: '40K+' },
    ],
  },
  {
    id: 'farmfusion',
    title: 'FarmFusion',
    subtitle: 'Smart Agriculture Decision Support System',
    date: 'Sep 2025',
    team: 'Smart India Hackathon · 6 members',
    role: 'Frontend Developer & Data Integration',
    tech: ['React.js', 'HTML', 'CSS', 'JavaScript', 'IoT Sensors', 'REST APIs'],
    description:
      'A web platform built for the Smart India Hackathon that turns live IoT sensor data into actionable farming insights.',
    github: 'https://github.com/earlykisses/farmer-productivity-app', // paste your GitHub repo URL here
    live: 'https://farmfusion-2816.vercel.app/', // paste your live deployed link here, if any
    points: [
      'Built a web platform analyzing real-time data from 5+ IoT sensors for agricultural insights',
      'Integrated weather APIs to provide soil and climate-based recommendations',
      'Developed responsive frontend across 5+ modules ensuring usability across devices',
      'Collaborated in a 6-member team using Git and improved system reliability through debugging',
    ],
    featured: false,
  },
]
