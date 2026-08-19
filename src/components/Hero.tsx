import React from 'react';
import { Terminal, Github, Linkedin, Mail, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="overview" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden dark:network-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-darker z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 text-forest dark:text-emerald text-sm font-mono mb-6 border border-forest/20">
            <Terminal size={14} />
            <span>Pretoria, South Africa</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
            KATLEHO TUMELO SEPHOKO
          </h1>
          
          <h2 className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-6">
            Network Engineer & Software Developer
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I build reliable systems, connected infrastructure, and practical software solutions. 
            Bridging the gap between networking, cloud technologies, and full-stack development.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="#projects" className="px-6 py-3 bg-forest hover:bg-forest/90 text-white rounded-lg transition-colors font-medium">
              View My Projects
            </a>
            <a href="/Katleho-Sephoko-CV.pdf" className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors font-medium flex items-center gap-2">
              <Download size={18} /> Download CV
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-slate-500 dark:text-slate-400">
            <a href="https://github.com/katleho-sephoko" target="_blank" rel="noreferrer" className="hover:text-forest dark:hover:text-emerald transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/katleho-sephoko" target="_blank" rel="noreferrer" className="hover:text-forest dark:hover:text-emerald transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:katleho@example.com" className="hover:text-forest dark:hover:text-emerald transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
