import { certifications } from "@/lib/data";
import { ExternalLink, FileText } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-24 px-6 relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      
      <div className="w-full max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight text-center md:text-left">Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {certifications.map(cert => (
            <div key={cert.name} className="p-6 md:p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col group backdrop-blur-sm">
              
              {/* Header */}
              <div className="mb-6">
                <div className="text-[10px] font-mono text-emerald-500/80 mb-3 tracking-widest uppercase flex items-center gap-2">
                  <FileText size={12} />
                  {cert.category}
                </div>
                <div className="text-xl font-bold text-zinc-100 leading-snug">{cert.name}</div>
              </div>
              
              {/* Image Preview using the raw GitHub links */}
              <div className="w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden border border-white/10 mb-6 bg-zinc-950/50 flex-grow relative flex justify-center items-center p-2">
                <img 
                  src={cert.image} 
                  alt={`${cert.name} Certificate`} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              
              {/* Footer with link to the actual PDF */}
              <div className="flex justify-between items-center border-t border-white/5 pt-5 mt-auto">
                 <div className="text-sm font-medium text-zinc-500">{cert.issuer}</div>
                 
                 <a 
                   href={cert.file} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors bg-white/[0.05] hover:bg-white/[0.1] px-4 py-2 rounded-lg border border-white/10"
                 >
                   <span className="text-xs font-semibold">View PDF</span>
                   <ExternalLink size={16} />
                 </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
