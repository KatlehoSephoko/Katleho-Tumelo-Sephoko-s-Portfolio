import { Network, Code, Server, Shield } from "lucide-react";
import { skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">Engineering meets software.</h2>
        
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 text-zinc-400 space-y-6 text-lg leading-relaxed">
            <p>I enjoy understanding how systems connect, how they can be built efficiently, and how software can solve practical problems.</p>
            <p>My approach bridges the critical gap between the code that runs an application and the underlying network infrastructure that sustains it.</p>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Network, title: "NETWORKING", desc: "Routing • Switching • TCP/IP" },
              { icon: Code, title: "SOFTWARE", desc: "React • TypeScript • Python" },
              { icon: Server, title: "SYSTEMS", desc: "Linux • OpenStack • Ansible" },
              { icon: Shield, title: "SECURITY", desc: "Cybersecurity • Secure Systems" }
            ].map((card, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-white/10 backdrop-blur-sm">
                <card.icon className="text-emerald-500 mb-5 opacity-80 group-hover:opacity-100 transition-opacity" size={28} />
                <h3 className="text-zinc-100 font-semibold mb-2 tracking-wide">{card.title}</h3>
                <p className="text-sm text-zinc-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-zinc-800"></span> {category}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <li key={skill} className="px-3 py-1.5 text-xs font-medium rounded-md bg-zinc-900/50 border border-zinc-800/80 text-zinc-400 hover:text-zinc-200 transition-colors cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
