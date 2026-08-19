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
    <section id="projects" className="py-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-100 mb-12">Featured Work</h2>
        
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden flex flex-col lg:flex-row mb-16">
          <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
            <span className="self-start px-3 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full mb-4">
              {featuredProject.badge}
            </span>
            <h3 className="text-3xl font-bold text-zinc-100 mb-4">{featuredProject.title}</h3>
            <p className="text-zinc-400 mb-6">{featuredProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.technologies.map(tech => (
                <span key={tech} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-zinc-100 text-zinc-950 font-medium rounded hover:bg-white transition-colors">View Project</button>
              <a href={featuredProject.github} className="px-4 py-2 border border-zinc-700 text-zinc-300 rounded hover:bg-zinc-800 flex items-center gap-2"><Github size={16} /> GitHub</a>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-800 p-8 flex flex-col justify-center font-mono text-sm">
             <h4 className="text-zinc-500 mb-6 text-center lg:text-left">CONCEPTUAL ARCHITECTURE</h4>
             <div className="space-y-3 max-w-sm mx-auto w-full">
               {featuredProject.architecture.map((layer, index) => (
                 <div key={layer} className="flex flex-col items-center">
                   <div className="w-full text-center py-3 border border-zinc-800 bg-zinc-900 rounded text-emerald-400/80">{layer}</div>
                   {index < featuredProject.architecture.length - 1 && <ArrowDown className="text-zinc-700 my-2" size={16} />}
                 </div>
               ))}
             </div>
          </div>
        </div>
        
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-3 py-1.5 text-xs rounded border transition-colors ${filter === cat ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400" : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-600"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.title} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 flex flex-col h-full group">
              <div className="text-xs font-mono text-emerald-500 mb-2">{project.category}</div>
              <h3 className="text-xl font-bold text-zinc-100 mb-3">{project.title}</h3>
              <p className="text-sm text-zinc-400 mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 text-[10px] bg-zinc-950 border border-zinc-800 text-zinc-400 rounded">{t}</span>
                ))}
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-zinc-800/50">
                <button onClick={() => setSelectedProject(project)} className="text-sm text-zinc-300 hover:text-white flex items-center gap-1 group-hover:text-emerald-400">
                  View Details <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            <div className="sticky top-0 bg-zinc-900/95 backdrop-blur-sm p-6 border-b border-zinc-800 flex justify-between items-start">
              <div>
                <div className="text-xs font-mono text-emerald-500 mb-1">{selectedProject.category}</div>
                <h3 className="text-2xl font-bold text-zinc-100">{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="p-2 text-zinc-400 hover:text-white bg-zinc-800/50 rounded-full"><X size={20} /></button>
            </div>
            <div className="p-6 text-zinc-300 space-y-6">
              <p className="text-lg text-zinc-400">{selectedProject.description}</p>
              <div>
                <h4 className="text-sm font-bold text-zinc-100 mb-3 border-b border-zinc-800 pb-2">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-2 py-1 text-xs bg-zinc-950 border border-zinc-800 text-zinc-400 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-zinc-800 bg-zinc-950/50 flex gap-4 mt-auto">
              <button className="px-4 py-2 border border-zinc-700 text-zinc-300 rounded hover:bg-zinc-800 flex items-center gap-2 text-sm"><Github size={16} /> GitHub Code</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
