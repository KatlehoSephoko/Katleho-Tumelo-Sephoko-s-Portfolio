import { certifications } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-24 px-6 relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      
      <div className="w-full max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight text-center md:text-left">Certifications</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map(cert => (
            <div key={cert.name} className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all flex flex-col justify-between group cursor-pointer backdrop-blur-sm min-h-[200px]">
              <div>
                <div className="text-[10px] font-mono text-emerald-500/80 mb-4 tracking-widest uppercase">{cert.category}</div>
                <div className="text-lg font-semibold text-zinc-100 leading-snug mb-5 group-hover:text-white transition-colors">{cert.name}</div>
              </div>
              <div className="flex justify-between items-end border-t border-white/5 pt-5 mt-4">
                 <div className="text-sm font-medium text-zinc-500">{cert.issuer}</div>
                 <button className="text-zinc-600 group-hover:text-emerald-400 transition-colors"><ExternalLink size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
