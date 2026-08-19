import { Mail, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  return (
    <section className="py-24 px-6 relative overflow-hidden h-full flex flex-col justify-center">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Let’s build something that works.</h2>
        <p className="text-zinc-400 mb-10 text-lg">
          I’m open to opportunities in Network Engineering, Software Development, IT Infrastructure, Systems and related technical roles.
        </p>
        
        <form className="space-y-4 max-w-md mx-auto text-left mb-16 p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full bg-white/[0.03] border border-white/5 rounded-lg p-3.5 text-sm text-zinc-300 focus:border-emerald-500 outline-none transition-colors" required />
            <input type="email" placeholder="Email" className="w-full bg-white/[0.03] border border-white/5 rounded-lg p-3.5 text-sm text-zinc-300 focus:border-emerald-500 outline-none transition-colors" required />
          </div>
          <input type="text" placeholder="Subject" className="w-full bg-white/[0.03] border border-white/5 rounded-lg p-3.5 text-sm text-zinc-300 focus:border-emerald-500 outline-none transition-colors" required />
          <textarea placeholder="Message" rows={5} className="w-full bg-white/[0.03] border border-white/5 rounded-lg p-3.5 text-sm text-zinc-300 focus:border-emerald-500 outline-none resize-none transition-colors" required></textarea>
          <button type="submit" className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-bold py-3.5 rounded-lg mt-2 transition-colors">Send Message</button>
        </form>

        <div className="flex flex-wrap justify-center gap-6">
          <a href={`mailto:${personalInfo.email}`} className="text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
            <div className="p-3 bg-white/[0.03] rounded-full border border-white/5"><Mail size={20} /></div>
            <span className="hidden sm:inline">Email Me</span>
          </a>
          <a href={personalInfo.linkedin} className="text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
            <div className="p-3 bg-white/[0.03] rounded-full border border-white/5"><Linkedin size={20} /></div>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a href={personalInfo.github} className="text-zinc-400 hover:text-emerald-400 flex items-center gap-2">
            <div className="p-3 bg-white/[0.03] rounded-full border border-white/5"><Github size={20} /></div>
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
