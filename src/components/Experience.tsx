import { experience } from "@/lib/data";
import { GitCommit } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-24 px-6 relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      
      <div className="w-full max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight text-center md:text-left">Experience</h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-emerald-500/50 before:via-white/10 before:to-transparent">
          {experience.map((job, i) => (
            <div key={i} className="relative pl-10 md:pl-0 group">
              <div className="md:w-1/2 md:pr-14 md:text-right md:ml-0 md:mr-auto">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">{job.role}</h3>
                <div className="text-emerald-400/80 text-sm font-medium mt-1 mb-2">{job.company}</div>
                <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-5">{job.date} • {job.location}</div>
                <ul className="text-xs text-zinc-400 flex flex-wrap gap-2 md:justify-end">
                  {job.highlights.map(h => (
                    <li key={h} className="bg-white/[0.03] px-3 py-1.5 rounded-md border border-white/5 text-zinc-400 group-hover:border-white/10 transition-colors">{h}</li>
                  ))}
                </ul>
              </div>
              <div className="absolute left-0 md:left-1/2 top-1.5 w-5 h-5 rounded-full border-[4px] border-zinc-950 bg-emerald-500 md:-translate-x-1/2 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 p-8 rounded-2xl border border-white/5 bg-white/[0.01]">
           <h3 className="text-xs font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
             <span className="w-8 h-px bg-zinc-800"></span> Career Topology
           </h3>
           <div className="flex flex-col space-y-5 text-xs font-mono text-zinc-500">
             <div className="flex items-center gap-4"><GitCommit size={16} className="text-zinc-700" /> 2016: Computer Systems Engineering</div>
             <div className="flex items-center gap-4"><GitCommit size={16} className="text-zinc-700" /> 2019: Diploma in Computer Networking</div>
             <div className="flex items-center gap-4"><GitCommit size={16} className="text-zinc-700" /> Technical Certifications</div>
             <div className="flex items-center gap-4 text-emerald-400"><GitCommit size={16} className="text-emerald-500" /> 2026: Network Engineer @ KingBee</div>
           </div>
        </div>
      </div>
    </section>
  );
}
