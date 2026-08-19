"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Overview", "About", "Projects", "Experience", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <div 
          className="text-xl font-bold tracking-tighter text-zinc-100 cursor-pointer hover:text-emerald-400 transition-colors"
          onClick={() => scrollTo('overview')}
        >
          {personalInfo.initials}
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm">
          {navLinks.map((link) => (
            <button 
              key={link} 
              onClick={() => scrollTo(link.toLowerCase())} 
              className="text-zinc-400 hover:text-emerald-400 transition-colors font-medium"
            >
              {link}
            </button>
          ))}
          
          <div className="flex items-center space-x-4 pl-4 border-l border-zinc-800">
            <a href={personalInfo.github} className="text-zinc-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href={personalInfo.linkedin} className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="/Katleho-Sephoko-CV.pdf" className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 hover:bg-emerald-900/40 border border-zinc-700 hover:border-emerald-500/50 transition-all text-zinc-100">
              <Download size={14} /> CV
            </a>
          </div>
        </div>

        <button 
          className="md:hidden text-zinc-400 hover:text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col">
          <div className="flex flex-col space-y-6 text-xl font-medium">
            {navLinks.map((link) => (
              <button 
                key={link} 
                onClick={() => scrollTo(link.toLowerCase())} 
                className="text-left text-zinc-300 hover:text-emerald-400 border-b border-zinc-800 pb-4 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
            <a href="/Katleho-Sephoko-CV.pdf" className="flex-1 flex justify-center items-center gap-2 px-4 py-3 rounded-md bg-emerald-600 text-zinc-950 font-bold">
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
