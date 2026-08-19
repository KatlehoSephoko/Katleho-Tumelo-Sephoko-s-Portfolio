"use client";

import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 px-6 border-t border-zinc-900 bg-gradient-to-b from-zinc-950 to-zinc-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6 tracking-tight">Let’s build something that works.</h2>
          <p className="text-zinc-400 mb-10 text-lg">
            I’m open to opportunities in Network Engineering, Software Development, IT Infrastructure, Systems and related technical roles.
          </p>
          
          <form className="space-y-4 max-w-md mx-auto text-left mb-16 p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-medium text-zinc-400">Name</label>
                <input id="name" type="text" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md p-3 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" required />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-medium text-zinc-400">Email</label>
                <input id="email" type="email" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md p-3 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" required />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="subject" className="text-xs font-medium text-zinc-400">Subject</label>
              <input id="subject" type="text" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md p-3 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" required />
            </div>
            <div className="space-y-1">
              <label htmlFor="message" className="text-xs font-medium text-zinc-400">Message</label>
              <textarea id="message" rows={5} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md p-3 text-sm text-zinc-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none" required></textarea>
            </div>
            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold py-3 rounded-md transition-colors mt-2">
              Send Message
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-6">
            <a href={`mailto:${personalInfo.email}`} className="text-zinc-400 hover:text-emerald-400 flex items-center gap-2 transition-colors">
              <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800"><Mail size={20} /></div>
              <span className="hidden sm:inline">Email Me</span>
            </a>
            <a href={personalInfo.linkedin} className="text-zinc-400 hover:text-emerald-400 flex items-center gap-2 transition-colors">
              <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800"><Linkedin size={20} /></div>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href={personalInfo.github} className="text-zinc-400 hover:text-emerald-400 flex items-center gap-2 transition-colors">
              <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800"><Github size={20} /></div>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-900 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <div className="font-bold text-zinc-100 tracking-widest">{personalInfo.name.toUpperCase()}</div>
            <div className="text-sm text-zinc-400 mt-1">{personalInfo.role}</div>
            <div className="text-xs text-zinc-500 mt-1 flex items-center justify-center md:justify-start gap-1">
               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> 
               Pretoria, South Africa
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
            {["Overview", "Projects", "Certifications", "Experience"].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-emerald-400 transition-colors">{link}</a>
            ))}
          </div>

          <div className="text-xs text-zinc-600 md:text-right">
            <div>© 2026 {personalInfo.name}. All rights reserved.</div>
            <div className="mt-1 flex items-center justify-center md:justify-end gap-1">Built with React & TypeScript</div>
          </div>
        </div>
      </footer>
    </>
  );
}
