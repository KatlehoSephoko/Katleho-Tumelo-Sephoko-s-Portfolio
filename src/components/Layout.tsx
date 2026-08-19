import React from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export const Layout = ({ darkMode, setDarkMode, children }: any) => {
  const [navOpen, setNavOpen] = React.useState(false);
  const navLinks = ['Overview', 'Projects', 'Experience', 'Skills', 'Contact'];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-darker/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-lg tracking-tighter text-slate-900 dark:text-white">KTS.</span>
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-600 dark:text-slate-300 hover:text-forest dark:hover:text-emerald transition-colors">
                {link}
              </a>
            ))}
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
          <button className="md:hidden text-slate-900 dark:text-white" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="py-12 bg-white dark:bg-dark border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400">
        <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/katleho-sephoko" className="hover:text-forest dark:hover:text-emerald transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/katleho-sephoko" className="hover:text-forest dark:hover:text-emerald transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:katleho@example.com" className="hover:text-forest dark:hover:text-emerald transition-colors"><Mail size={20} /></a>
        </div>
        <p className="text-sm">© 2026 Katleho Tumelo Sephoko</p>
        <p className="text-sm mt-1">Network Engineer • Software Developer</p>
      </footer>
    </div>
  );
};
