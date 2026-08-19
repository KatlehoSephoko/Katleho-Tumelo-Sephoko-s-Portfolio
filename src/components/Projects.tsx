import { useState } from "react";
import { ArrowRight, ArrowDown, Github, X } from "lucide-react";
import { featuredProject, projects } from "@/lib/data";

type Project = typeof projects[0];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = ["All", "Networking", "Software", "AI", "Cybersecurity", "Cloud", "IoT"];
  const filteredProjects = projects.filter(p => filter === "All" || p.category.includes(filter));

  return (
    <section id="projects" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">Featured Work</h2>
        
        {/* Featured Project */}
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden flex flex-col lg:flex-row mb-20 shadow-2xl backdrop-blur-sm">
          <div className="p-8 lg:p-14 lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full tracking-wider uppercase">
                {featuredProject.badge}
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-5 tracking-tight">{featuredProject.title}</h3>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">{featuredProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {featuredProject.technologies.map(tech => (
                <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-md">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <button className="px-5 py-2.5 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-200 transition-colors">View Project</button>
              <a href={featuredProject.github} className="px-5 py-2.5 border border-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-2"><Github size={18} /> Source</a>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-zinc-950/50 border-t lg:border-t-0 lg:border-l border-white/5 p-8 lg:p-14 flex flex-col justify-center font-mono text-sm relative">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
             <h4 className="text-zinc-500 mb-8 text-center lg:text-left text-xs tracking-widest uppercase">Conceptual Architecture</h4>
             <div className="space-y-4 max-w-sm mx-auto w-full relative z-10">
               {featuredProject.architecture.map((layer, index) => (
                 <div key={layer} className="flex flex-col items-center">
                   <div className="w-full text-center py-3.5 border border-white/5 bg-white/[0.02] backdrop-blur-md rounded-xl text-zinc-300 shadow-lg">{layer}</div>
                   {index < featuredProject.architecture.length - 1 && <ArrowDown className="text-zinc-700 my-2" size={16} />}
                 </div>
               ))}
             </div>
          </div>
        </div>
        
        {/* Project Grid */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 text-xs font-medium rounded-full border transition-all ${filter === cat ? "bg-zinc-100 border-zinc-100 text-zinc-950" : "bg-transparent border-zinc-800 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.title} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex flex-col h-full group cursor-pointer" onClick={() => setSelectedProject(project)}>
              <div className="text-[10px] font-mono text-emerald-500 mb-4 tracking-widest uppercase">{project.category}</div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
              <p className="text-sm text-zinc-400 mb-8 flex-grow leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 text-[10px] bg-zinc-900 border border-zinc-800/80 text-zinc-400 rounded-md">{t}</span>
                ))}
              </div>
              <div className="flex justify-between items-center pt-5 border-t border-white/5">
                <span className="text-sm font-medium text-zinc-400 group-hover:text-white flex items-center gap-2 transition-colors">
                  View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md">
          <div className="bg-zinc-950 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col relative">
            <div className="sticky top-0 bg-zinc-950/80 backdrop-blur-xl p-6 border-b border-white/5 flex justify-between items-start z-10">
              <div>
                <div className="text-[10px] font-mono text-emerald-500 mb-2 tracking-widest uppercase">{selectedProject.category}</div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"><X size={20} /></button>
            </div>
            <div className="p-8 text-zinc-300 space-y-8">
              <p className="text-lg text-zinc-400 leading-relaxed">{selectedProject.description}</p>
              <div>
                <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
