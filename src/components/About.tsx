import { Network, Code, Server, Shield } from "lucide-react";
import { skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-zinc-900 bg-zinc-900/20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-100 mb-12">Engineering meets software.</h2>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 text-zinc-400 space-y-4 text-lg">
            <p>I enjoy understanding how systems connect, how they can be built efficiently, and how software can solve practical problems.</p>
            <p>My approach bridges the gap between the code that runs an application and the underlying network infrastructure that sustains it.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
              <Network className="text-emerald-500 mb-4" />
              <h3 className="text-zinc-100 font-semibold mb-2">NETWORKING</h3>
              <p className="text-sm text-zinc-500">Routing • Switching • TCP/IP • Infrastructure</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
              <Code className="text-emerald-500 mb-4" />
              <h3 className="text-zinc-100 font-semibold mb-2">SOFTWARE</h3>
              <p className="text-sm text-zinc-500">React • TypeScript • Python • Node.js</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
              <Server className="text-emerald-500 mb-4" />
              <h3 className="text-zinc-100 font-semibold mb-2">SYSTEMS</h3>
              <p className="text-sm text-zinc-500">Linux • OpenStack • Ansible • Automation</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
              <Shield className="text-emerald-500 mb-4" />
              <h3 className="text-zinc-100 font-semibold mb-2">SECURITY</h3>
              <p className="text-sm text-zinc-500">Network Security • Cybersecurity • Secure Systems</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-zinc-100 font-mono text-sm mb-4 border-b border-zinc-800 pb-2">{category}</h4>
              <ul className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <li key={skill} className="px-2 py-1 text-xs rounded bg-zinc-900 border border-zinc-800 text-zinc-400">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
