import React from 'react';
import { Server, Code, Workflow, ShieldCheck } from 'lucide-react';

export const EngineeringMindset = () => {
  const mindsets = [
    { icon: <Server size={28} />, title: 'CONNECT', desc: 'Networking, protocols, infrastructure, and communication.' },
    { icon: <Code size={28} />, title: 'BUILD', desc: 'Software, APIs, databases, and responsive applications.' },
    { icon: <Workflow size={28} />, title: 'AUTOMATE', desc: 'Linux, Ansible, scripting, and infrastructure automation.' },
    { icon: <ShieldCheck size={28} />, title: 'SECURE', desc: 'Cybersecurity, authentication, and network security.' }
  ];

  return (
    <section className="py-20 bg-slate-100 dark:bg-dark">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Engineering Mindset</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {mindsets.map((item, idx) => (
            <div key={idx} className="p-6 bg-white dark:bg-darker border border-slate-200 dark:border-slate-800 rounded-xl hover:-translate-y-1 transition-transform">
              <div className="text-forest dark:text-emerald mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
