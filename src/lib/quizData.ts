export interface QuizQuestion {
  id: number;
  question: string;
  answer: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation?: string;
}

export const techSkillsAssessment: QuizQuestion[] = [
  // Programming & Technical Skills
  {
    id: 1,
    question: "You're working on a React project and need to manage component state. What's the modern approach?",
    answer: "Use React hooks like useState and useEffect",
    category: "Programming",
    difficulty: "easy",
    explanation: "React hooks provide a clean way to manage state and side effects in functional components."
  },
  {
    id: 2,
    question: "Your team is deciding on a database for a new project. What factors should you consider?",
    answer: "Data structure, scalability needs, consistency requirements, and team expertise",
    category: "System Design",
    difficulty: "medium",
    explanation: "Database selection depends on data patterns, performance requirements, and team capabilities."
  },
  {
    id: 3,
    question: "You're experiencing slow API responses. What's your debugging approach?",
    answer: "Check network latency, database queries, server resources, and code bottlenecks",
    category: "Performance",
    difficulty: "medium",
    explanation: "Systematic debugging helps identify the root cause of performance issues."
  },

  // Career & Professional Development
  {
    id: 4,
    question: "You're the only person of color on your development team. How do you handle microaggressions?",
    answer: "Document incidents, seek support from mentors, and address patterns constructively",
    category: "Career",
    difficulty: "medium",
    explanation: "Professional handling of bias while protecting your well-being is crucial for long-term success."
  },
  {
    id: 5,
    question: "You want to transition from frontend to full-stack development. What's your learning strategy?",
    answer: "Learn backend frameworks, databases, and deployment while building portfolio projects",
    category: "Career",
    difficulty: "easy",
    explanation: "Hands-on learning with real projects demonstrates practical skills to employers."
  },
  {
    id: 6,
    question: "You're negotiating a job offer at a tech company. What should you consider beyond salary?",
    answer: "Equity, benefits, growth opportunities, work-life balance, and cultural fit",
    category: "Career",
    difficulty: "medium",
    explanation: "Total compensation includes many factors that affect long-term career satisfaction."
  },

  // Cultural Intelligence & Networking
  {
    id: 7,
    question: "You're working with a remote team across different time zones in Africa. How do you manage collaboration?",
    answer: "Establish clear communication protocols, use asynchronous tools, and respect cultural differences",
    category: "Cultural Intelligence",
    difficulty: "medium",
    explanation: "Effective remote collaboration requires cultural awareness and structured communication."
  },
  {
    id: 8,
    question: "You want to build a professional network in the African tech community. Where do you start?",
    answer: "Join African tech communities, attend conferences, contribute to open source, and offer mentorship",
    category: "Networking",
    difficulty: "easy",
    explanation: "Building genuine relationships through contribution and mutual support creates lasting connections."
  },
  {
    id: 9,
    question: "You're presenting a technical solution to stakeholders from different cultural backgrounds. How do you approach it?",
    answer: "Use clear visuals, avoid jargon, provide context, and encourage questions",
    category: "Communication",
    difficulty: "medium",
    explanation: "Effective technical communication considers audience diversity and cultural context."
  },

  // Soft Skills & Leadership
  {
    id: 10,
    question: "Your team is behind on a project deadline. As a junior developer, how do you help?",
    answer: "Identify bottlenecks, offer to take on additional tasks, and communicate blockers early",
    category: "Leadership",
    difficulty: "easy",
    explanation: "Proactive problem-solving and clear communication demonstrate leadership potential."
  },
  {
    id: 11,
    question: "You disagree with a senior developer's technical approach. How do you handle this?",
    answer: "Present your perspective with data, ask questions to understand their reasoning, and find common ground",
    category: "Communication",
    difficulty: "medium",
    explanation: "Professional disagreement requires respect, evidence, and collaborative problem-solving."
  },
  {
    id: 12,
    question: "You're mentoring a junior developer from a different cultural background. What's important to remember?",
    answer: "Be patient, explain context, encourage questions, and respect different learning styles",
    category: "Mentorship",
    difficulty: "easy",
    explanation: "Effective mentorship requires cultural sensitivity and adaptive teaching approaches."
  },

  // Advanced Technical & Strategic
  {
    id: 13,
    question: "You're designing a system that will serve users across Africa. What technical considerations are crucial?",
    answer: "Low bandwidth optimization, offline capabilities, multi-language support, and mobile-first design",
    category: "System Design",
    difficulty: "hard",
    explanation: "African markets require special consideration for connectivity, devices, and user needs."
  },
  {
    id: 14,
    question: "Your startup wants to expand to African markets. What technical infrastructure decisions matter most?",
    answer: "Local hosting, payment integration, regulatory compliance, and scalable architecture",
    category: "Business Strategy",
    difficulty: "hard",
    explanation: "Market expansion requires understanding local technical and regulatory requirements."
  },
  {
    id: 15,
    question: "You're building an AI product for African languages. What are the key challenges?",
    answer: "Limited training data, language diversity, cultural context, and computational resources",
    category: "AI/ML",
    difficulty: "hard",
    explanation: "AI for African languages requires addressing data scarcity and cultural nuances."
  }
];

export const quizCategories = [
  "All",
  "Programming",
  "System Design",
  "Career",
  "Cultural Intelligence",
  "Networking",
  "Communication",
  "Leadership",
  "Mentorship",
  "Performance",
  "Business Strategy",
  "AI/ML"
];

export const difficultyLevels = [
  { value: "all", label: "All Levels" },
  { value: "easy", label: "Beginner" },
  { value: "medium", label: "Intermediate" },
  { value: "hard", label: "Advanced" }
];

// Keep the old export for backward compatibility
export const africanCountriesQuiz = techSkillsAssessment;
