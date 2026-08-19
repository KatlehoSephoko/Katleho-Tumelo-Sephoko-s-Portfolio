"use client";

import { Download, Github, Linkedin, ArrowDown } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section id="overview" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-wide">
            {personalInfo.role.toUpperCase()}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 leading-tight mb-6">
            Building connected systems and practical software solutions.
          </h1>
          <p className="text-lg text-zinc-400 mb-8 max-w-xl">
            {personalInfo.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-medium rounded-md transition-colors">
              View Projects
            </a>
            <a href="/Katleho-Sephoko-CV.pdf" className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 rounded-md transition-colors flex items-center gap-2 text-zinc-100">
              <Download size={18} /> Download CV
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a href={personalInfo.github} className="text-zinc-400 hover:text-zinc-100"><Github size={20} /></a>
              <a href={personalInfo.linkedin} className="text-zinc-400 hover:text-zinc-100"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:flex justify-center items-center h-full opacity-80">
          <div className="relative w-80 h-80 flex flex-col items-center justify-center font-mono text-xs text-zinc-500 space-y-8">
             {/* Decorative abstract lines/nodes can be placed here, using text layout for simplicity */}
            <span className="bg-zinc-950 px-4 py-2 border border-zinc-800 rounded">NETWORK</span>
            <ArrowDown size={14} className="text-emerald-500/50" />
            <span className="bg-zinc-950 px-4 py-2 border border-zinc-800 rounded">SYSTEMS</span>
            <ArrowDown size={14} className="text-emerald-500/50" />
            <span className="bg-zinc-950 px-4 py-2 border border-zinc-800 rounded">APPLICATIONS</span>
            <ArrowDown size={14} className="text-emerald-500/50" />
            <span className="bg-zinc-950 px-4 py-2 border border-zinc-800 rounded">DATA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
