import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Github, Linkedin, ArrowLeft } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Overview", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Certs", path: "/certifications" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-100 hover:text-emerald-400 transition-colors">
          {personalInfo.initials}
        </Link>
        
        <div className="hidden lg:flex items-center space-x-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={`font-medium transition-colors ${location.pathname === link.path ? 'text-emerald-400' : 'text-zinc-400 hover:text-white'}`}>
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pl-4 border-l border-zinc-800">
            <a href={personalInfo.github} className="text-zinc-400 hover:text-white"><Github size={18} /></a>
            <a href={personalInfo.linkedin} className="text-zinc-400 hover:text-white"><Linkedin size={18} /></a>
            <a href="/Katleho-Sephoko-CV.pdf" className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/[0.03] border border-white/10 hover:bg-white/[0.1] text-zinc-100 transition-all">
              <Download size={14} /> CV
            </a>
          </div>
        </div>
        <button className="lg:hidden text-zinc-400 hover:text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl pt-24 px-6 lg:hidden flex flex-col justify-between pb-12">
          <div className="flex flex-col space-y-6 text-xl font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)} 
                className={`pb-4 border-b border-white/5 transition-colors flex items-center justify-between ${location.pathname === link.path ? 'text-emerald-400 font-bold' : 'text-zinc-300 hover:text-white'}`}
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-zinc-600">0{navLinks.indexOf(link) + 1}</span>
              </Link>
            ))}
          </div>

          {/* Bottom Action Area with Explicit Close Option */}
          <div className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-around">
              <a href={personalInfo.github} className="text-zinc-400 hover:text-white flex items-center gap-2 text-sm"><Github size={18} /> GitHub</a>
              <a href={personalInfo.linkedin} className="text-zinc-400 hover:text-white flex items-center gap-2 text-sm"><Linkedin size={18} /> LinkedIn</a>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-zinc-200 font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={18} /> Close Menu
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
