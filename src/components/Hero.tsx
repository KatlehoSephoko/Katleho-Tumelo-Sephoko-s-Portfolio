import { Download, Github, Linkedin, Network, Server, Code, Database } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section id="overview" className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-md text-emerald-400 text-xs font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {personalInfo.role}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Building connected systems and <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">practical software.</span>
          </h1>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl leading-relaxed">
            {personalInfo.description}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#projects" className="px-7 py-3.5 bg-zinc-100 hover:bg-white text-zinc-950 font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              View Projects
            </a>
            <a href="/Katleho-Sephoko-CV.pdf" className="px-7 py-3.5 border border-zinc-800 hover:border-zinc-600 bg-zinc-900/30 hover:bg-zinc-900/80 rounded-lg transition-all flex items-center gap-2 text-zinc-300 font-medium backdrop-blur-sm">
              <Download size={18} /> Download CV
            </a>
            <div className="flex items-center gap-5 ml-2 border-l border-zinc-800 pl-6">
              <a href={personalInfo.github} className="text-zinc-500 hover:text-white transition-colors"><Github size={22} /></a>
              <a href={personalInfo.linkedin} className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={22} /></a>
            </div>
          </div>
        </div>
        
        {/* Right Content: Premium Glassmorphism Visual */}
        <div className="hidden lg:flex justify-center items-center h-full">
          <div className="relative w-96 h-96 border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl backdrop-blur-3xl shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            
            {/* Architectural Nodes */}
            <div className="relative z-10 flex flex-col items-center gap-6 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-3 bg-zinc-950/80 border border-zinc-800/80 px-4 py-3 rounded-xl shadow-lg">
                <Network className="text-emerald-500" size={16} /> NETWORK ROUTING
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-zinc-700 to-transparent"></div>
              <div className="flex items-center gap-3 bg-zinc-950/80 border border-zinc-800/80 px-4 py-3 rounded-xl shadow-lg">
                <Server className="text-zinc-300" size={16} /> INFRASTRUCTURE
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-zinc-700 to-transparent"></div>
              <div className="flex items-center gap-3 bg-zinc-950/80 border border-zinc-800/80 px-4 py-3 rounded-xl shadow-lg">
                <Code className="text-emerald-500" size={16} /> APPLICATION LAYER
              </div>
              <div className="w-px h-6 bg-gradient-to-b from-zinc-700 to-transparent"></div>
              <div className="flex items-center gap-3 bg-zinc-950/80 border border-zinc-800/80 px-4 py-3 rounded-xl shadow-lg">
                <Database className="text-zinc-300" size={16} /> POSTGRESQL DATA
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
