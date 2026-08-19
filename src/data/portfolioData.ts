import { Network, Code, Server, Shield, Brain, Database } from 'lucide-react';

export const projects = [
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
    category: 'Networking',
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
    id: 'hpc-cluster',
    title: 'HPC Cluster Optimization',
    category: 'Infrastructure',
    shortDesc: 'High-performance computing infrastructure challenge involving design and optimization of a small HPC cluster.',
    technologies: ['HPE ProLiant', 'AMD EPYC', 'Aruba Networking', 'Linux', 'Ansible', 'OpenMPI'],
    status: 'Completed',
    github: '#',
  },
  {
    id: 'ctf-challenges',
    title: 'Cybersecurity CTF Challenges',
    category: 'Cybersecurity',
    shortDesc: 'Custom steganography and audio Capture the Flag (CTF) challenges designed for a cybersecurity competition.',
    technologies: ['Steganography Tools', 'Audio Reversing', 'Linux'],
    status: 'Completed',
    github: '#',
  },
  {
    id: 'live-lotto',
    title: 'Real-Time Live Lotto',
    category: 'Software',
    shortDesc: 'A real-time live lotto web application featuring synchronized timers and non-repeating ball draws.',
    technologies: ['React', 'JavaScript', 'State Management'],
    status: 'Completed',
    github: '#',
  }
];

export const experience = [
  {
    role: 'IT Technician & Network Engineer (Self-Employed)',
    company: 'Independent Technical Services',
    period: 'Previous',
    description: 'Operated an independent technical service offering comprehensive hardware and software repairs, IT troubleshooting, and network configuration.',
  },
  {
    role: 'Junior Network Engineer',
    company: 'KingBee Technologies',
    period: 'Previous',
    description: 'Responsible for network installation, maintenance, and ensuring robust infrastructure operations.',
  },
  {
    role: 'IT Technician Intern',
    company: 'Kinetix Engineering Solutions',
    period: 'Previous',
    description: 'Provided technical support in IT systems, networking, troubleshooting, and hardware/software environments.',
  },
  {
    role: 'Sales Consultant — Casual',
    company: 'Cosmetic Connection',
    period: 'Dec 2024 – Present',
    description: 'Developing highly transferable communication and customer service skills, focusing on problem-solving and understanding client needs.',
  }
];

export const education = [
  {
    qualification: 'Diploma in Computer Networking',
    institution: 'Central University of Technology',
    year: '2019 – 2025',
    details: 'Network Infrastructure, Systems, IT, Technical Troubleshooting'
  },
  {
    qualification: 'Computer Systems Engineering',
    institution: 'Central University of Technology',
    year: '2016 – 2018',
    details: 'Studies undertaken'
  }
];

export const certifications = [
  { name: 'SANReN Cyber Security Challenge', issuer: 'SANReN', category: 'Competition' },
  { name: 'CHPC Student Cluster Competition', issuer: 'CHPC', category: 'Competition' },
  { name: 'PAICTA Cybersecurity Challenge', issuer: 'PAICTA', category: 'Competition' },
  { name: 'Programming & AI', issuer: 'Samsung Innovation Campus', category: 'Certification' },
  { name: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', category: 'Certification' },
  { name: 'HTML Essentials & IoT Introduction', issuer: 'Cisco', category: 'Certification' }
];

export const skillCategories = [
  { title: 'Network Engineering', icon: Network, skills: ['TCP/IP', 'Routing & Switching', 'Cisco', 'Juniper', 'Fortinet (Prep)', 'Wireshark'] },
  { title: 'Software Development', icon: Code, skills: ['TypeScript / JavaScript', 'React & React Native', 'Node.js & Express', 'Python'] },
  { title: 'Systems & Observability', icon: Server, skills: ['Linux / Ubuntu', 'VMware', 'Ansible', 'Grafana', 'Prometheus', 'Bash'] },
  { title: 'Cybersecurity', icon: Shield, skills: ['Network Security', 'Access Control', 'Authentication', 'CTF Design'] },
  { title: 'Cloud & Database', icon: Database, skills: ['PostgreSQL', 'Supabase', 'Redis', 'Microsoft Azure', 'OpenStack'] },
  { title: 'AI & Automation', icon: Brain, skills: ['Gemini API', 'DeepSeek', 'Prompt Engineering', 'Workflow Automation'] }
];
