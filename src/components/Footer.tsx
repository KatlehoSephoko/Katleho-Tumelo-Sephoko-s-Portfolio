import { personalInfo } from '@/lib/data';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505] px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div>
          <div className="font-bold text-zinc-100 tracking-widest">{personalInfo.name.toUpperCase()}</div>
          <div className="text-sm text-zinc-400 mt-1">{personalInfo.role}</div>
          <div className="text-xs text-zinc-500 mt-1 flex items-center justify-center md:justify-start gap-1">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> 
             Pretoria, South Africa
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-zinc-400">
          <Link to="/" className="hover:text-emerald-400 transition-colors">Overview</Link>
          <Link to="/about" className="hover:text-emerald-400 transition-colors">About</Link>
          <Link to="/projects" className="hover:text-emerald-400 transition-colors">Projects</Link>
          <Link to="/experience" className="hover:text-emerald-400 transition-colors">Experience</Link>
          <Link to="/education" className="hover:text-emerald-400 transition-colors">Education</Link>
          <Link to="/certifications" className="hover:text-emerald-400 transition-colors">Certs</Link>
        </div>

        <div className="text-xs text-zinc-600 md:text-right">
          <div>© 2026 {personalInfo.name}. All rights reserved.</div>
          <div className="mt-1">Built with React & Vite</div>
        </div>
      </div>
    </footer>
  );
}
