import React, { useState } from 'react';
import { Terminal, Download, Server, Code, Workflow, ShieldCheck, ExternalLink, Github } from 'lucide-react';
import { projects, experience, skillCategories, education, certifications } from '../data/portfolioData';

export const Hero = () => (
  <section id="overview" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden dark:network-grid">
    <div className="container mx-auto px-6 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 text-forest dark:text-emerald text-sm font-mono mb-6 border border-forest/20">
        <Terminal size={14} /><span>Pretoria, South Africa</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">KATLEHO TUMELO SEPHOKO</h1>
      <h2 className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-6">Network Engineer & Software Developer</h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">I build reliable systems, connected infrastructure, and practical software solutions.</p>
      <div className="flex justify-center gap-4">
        <a href="#projects" className="px-6 py-3 bg-forest hover:bg-forest/90 text-white rounded-lg transition-colors font-medium">View Projects</a>
        <a href="/Katleho-Sephoko-CV.pdf" className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-lg transition-colors font-medium flex items-center gap-2"><Download size={18} /> CV</a>
      </div>
    </div>
  </section>
);

export const Mindset = () => (
  <section className="py-20 bg-slate-100 dark:bg-dark">
    <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-4 gap-6">
      {[
        { i: <Server size={28}/>, t: 'CONNECT', d: 'Networking, protocols, infrastructure' },
        { i: <Code size={28}/>, t: 'BUILD', d: 'Software, APIs, databases' },
        { i: <Workflow size={28}/>, t: 'AUTOMATE', d: 'Linux, Ansible, scripting' },
        { i: <ShieldCheck size={28}/>, t: 'SECURE', d: 'Cybersecurity, access control' }
      ].map((item, idx) => (
        <div key={idx} className="p-6 bg-white dark:bg-darker border border-slate-200 dark:border-slate-800 rounded-xl hover:-translate-y-1 transition-transform">
          <div className="text-forest dark:text-emerald mb-4">{item.i}</div>
          <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{item.t}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">{item.d}</p>
        </div>
      ))}
    </div>
  </section>
);

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Software', 'Networking', 'Cybersecurity', 'Infrastructure'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white border-b-2 border-forest dark:border-emerald pb-2 inline-block">Projects & Infrastructure</h2>
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${filter === f ? 'bg-forest text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>{f}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div key={p.id} className="bg-white dark:bg-darker border border-slate-200 dark:border-slate-800 p-6 rounded-xl flex flex-col">
              <div className="text-xs font-mono text-forest dark:text-emerald mb-2">{p.category}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{p.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{p.shortDesc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.technologies.slice(0, 4).map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">{t}</span>)}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs text-slate-500">{p.status}</span>
                <a href={p.github} target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-forest dark:hover:text-emerald"><Github size={18} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Timeline = () => (
  <section id="experience" className="py-20 bg-slate-50 dark:bg-dark">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white border-b-2 border-forest dark:border-emerald pb-2 inline-block">Experience & Education</h2>
      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2"><Workflow size={20} className="text-forest" /> Professional Experience</h3>
          <div className="space-y-6 border-l-2 border-slate-200 dark:border-slate-800 pl-6 ml-3">
            {experience.map((ex, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-forest border-4 border-slate-50 dark:border-dark"></div>
                <h4 className="font-bold text-slate-900 dark:text-white">{ex.role}</h4>
                <div className="text-sm text-forest dark:text-emerald font-mono mb-2">{ex.company} • {ex.period}</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{ex.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2"><Terminal size={20} className="text-forest" /> Education</h3>
          <div className="space-y-6 border-l-2 border-slate-200 dark:border-slate-800 pl-6 ml-3">
            {education.map((ed, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-400 dark:bg-slate-600 border-4 border-slate-50 dark:border-dark"></div>
                <h4 className="font-bold text-slate-900 dark:text-white">{ed.qualification}</h4>
                <div className="text-sm text-slate-500 font-mono mb-1">{ed.institution} • {ed.year}</div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{ed.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
