import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="py-24 px-6 relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      
      <div className="w-full max-w-3xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight text-center md:text-left">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors backdrop-blur-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white tracking-tight">{edu.degree}</h3>
                <span className="text-[10px] text-emerald-400/80 font-mono bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-widest">{edu.date}</span>
              </div>
              <div className="text-base text-zinc-400 mb-6">{edu.institution}</div>
              
              {edu.focus && edu.focus.length > 0 && (
                <div className="mb-6">
                  <div className="text-[10px] font-bold text-zinc-500 mb-3 uppercase tracking-widest">Focus Areas</div>
                  <div className="flex flex-wrap gap-2">
                    {edu.focus.map(f => (
                      <span key={f} className="text-xs px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300">{f}</span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="text-xs text-zinc-500 font-medium tracking-wide uppercase pt-4 border-t border-white/5">
                Status: <span className="text-zinc-300 ml-1">{edu.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
