export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  technologies: string[];
  status: string;
  github: string;
  demo?: string;
  featured?: boolean;
  fullDesc?: string;
}

export const projects: Project[] = [
  {
    id: 'afriride',
    title: 'AfriRide',
    category: 'Software',
    shortDesc: 'A localized South African e-hailing platform concept focused on accessibility, safety, and inclusive mobility.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Socket.IO'],
    status: 'Active Development',
    github: 'https://github.com/katleho-sephoko/afriride',
    featured: true,
  },
  {
    id: 'aura',
    title: 'AURA',
    category: 'Software',
    shortDesc: 'A 5-in-1 on-demand beauty ecosystem web application.',
    technologies: ['React', 'HTML', 'Supabase', 'GitHub Pages'],
    status: 'Deployed',
    github: 'https://github.com/katleho-sephoko/aura',
  },
  {
    id: 'campussentry',
    title: 'CampusSentry',
    category: 'Networking / Software',
    shortDesc: 'Campus security dispatch console and student panic alert system using live WLAN telemetry.',
    technologies: ['Node.js', 'Socket.io', 'Render', 'HTML/JS'],
    status: 'Completed',
    github: 'https://github.com/katleho-sephoko/campussentry',
  },
  {
    id: 'smartmoney',
    title: 'SmartMoney SA',
    category: 'Software',
    shortDesc: 'A financial literacy platform with budget planners, interest calculators, and gamified saving trackers.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    status: 'Development',
    github: 'https://github.com/katleho-sephoko/smartmoney',
  },
  {
    id: 'vukamatch',
    title: 'Vuka Match',
    category: 'Software / AI',
    shortDesc: 'Youth employment matching platform featuring interactive CV analysis and opportunity discovery.',
    technologies: ['Python', 'AI', 'Web Dev', 'DB Systems'],
    status: 'Concept / Development',
    github: 'https://github.com/katleho-sephoko/vukamatch',
  },
  {
    id: 'hpc-cluster',
    title: 'HPC Cluster Optimization',
    category: 'Networking / Infrastructure',
    shortDesc: 'High-performance computing infrastructure challenge involving design and optimization of a small HPC cluster.',
    technologies: ['HPE ProLiant', 'AMD EPYC', 'Aruba Networking', 'Linux', 'Ansible', 'OpenMPI'],
    status: 'Completed',
    github: '#',
  },
  {
    id: 'cut-chatbot',
    title: 'University Registration Chatbot',
    category: 'AI / Software',
    shortDesc: 'Registration helper chatbot featuring Gemini API integration and South African multilingual support.',
    technologies: ['HTML/JS', 'Gemini API', 'Prompt Engineering'],
    status: 'Completed',
    github: 'https://github.com/katleho-sephoko/cut-chatbot',
  },
  {
    id: 'dance-analysis',
    title: 'AI Dance Analysis System',
    category: 'AI / Software',
    shortDesc: 'AI-assisted analysis concept for Latin and Ballroom Dance evaluating technique, timing, and posture.',
    technologies: ['Python', 'Machine Learning', 'Computer Vision'],
    status: 'Research / Development',
    github: '#',
  }
];
