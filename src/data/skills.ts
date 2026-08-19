import { Network, Code, Server, Shield, Brain, Terminal, Database, Cpu } from 'lucide-react';

export const skillCategories = [
  {
    title: 'Network Engineering',
    icon: Network,
    skills: ['TCP/IP', 'Routing & Switching', 'Cisco', 'Juniper', 'Fortinet (Prep)', 'Wireshark', 'EVE-NG']
  },
  {
    title: 'Software Development',
    icon: Code,
    skills: ['TypeScript / JavaScript', 'React & React Native', 'Node.js & Express', 'Python', 'PHP', 'WordPress']
  },
  {
    title: 'Systems & Observability',
    icon: Server,
    skills: ['Linux / Ubuntu', 'VMware / Virtualization', 'Ansible', 'Grafana', 'Prometheus', 'Bash Scripting']
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: ['Network Security', 'Access Control', 'Authentication', 'CTF Challenge Design', 'Steganography']
  },
  {
    title: 'Cloud & Database',
    icon: Database,
    skills: ['PostgreSQL', 'Supabase', 'Redis', 'Microsoft Azure', 'OpenStack']
  },
  {
    title: 'AI & Automation',
    icon: Brain,
    skills: ['Gemini API', 'DeepSeek', 'ChatGPT Integrations', 'Prompt Engineering', 'Workflow Automation']
  }
];
