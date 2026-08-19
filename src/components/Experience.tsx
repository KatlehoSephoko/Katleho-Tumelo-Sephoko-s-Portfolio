import { experience, education, certifications } from "@/lib/data";
import { ExternalLink, GitCommit } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold text-zinc-100 mb-8 flex items-center gap-2">Experience</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500/50 before:via-zinc-800 before:to-transparent">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-8 md:pl-0">
                <div className="md:w-1/2 md:pr-12 md:text-right md:ml-0 md:mr-auto">
                  <h3 className="text-lg font-bold text-zinc-100">{job.role}</h3>
                  <div className="text-emerald-400 text-sm mb-1">{job.company}</div>
                  <div className="text-zinc-500 text-xs mb-4">{job.date} • {job.location}</div>
                  <ul className="text-sm text-zinc-400 flex flex-wrap gap-2 md:justify-end">
                    {job.highlights.map(h => (
                      <li key={h} className="bg-zinc-900 px-2 py-1 rounded text-xs border border-zinc-800">{h}</li>
                    ))}
                  </ul>
                </div>
                <div className="absolute left-0 md:left-1/2 top-1 w-5 h-5 rounded-full border-4 border-zinc-950 bg-emerald-500 md:-translate-x-1/2"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-20">
             <h3 className="text-sm font-mono text-zinc-500 mb-6 uppercase tracking-widest text-center md:text-left">Career Topology</h3>
             <div className="flex flex-col space-y-4 text-xs font-mono text-zinc-400">
               <div className="flex items-center gap-3"><GitCommit size={16} className="text-emerald-500" /> 2016: Computer Systems Engineering</div>
               <div className="flex items-center gap-3"><GitCommit size={16} className="text-zinc-700" /> 2019: Diploma in Computer Networking</div>
               <div className="flex items-center gap-3"><GitCommit size={16} className="text-zinc-700" /> Technical Certifications</div>
               <div className="flex items-center gap-3"><GitCommit size={16} className="text-zinc-700" /> IT / Engineering Experience</div>
               <div className="flex items-center gap-3"><GitCommit size={16} className="text-zinc-700" /> Software & Technology Projects</div>
               <div className="flex items-center gap-3 text-emerald-400"><GitCommit size={16} className="text-emerald-500" /> 2026: Network Engineering + Software Development</div>
             </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-zinc-100 mb-8">Education</h2>
          <div className="space-y-6 mb-16">
            {education.map((edu, i) => (
              <div key={i} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-zinc-100">{edu.degree}</h3>
                  <span className="text-xs text-zinc-500 font-mono bg-zinc-950 px-2 py-1 rounded">{edu.date}</span>
                </div>
                <div className="text-sm text-emerald-400 mb-3">{edu.institution}</div>
                <div className="text-xs text-zinc-400 border-l-2 border-zinc-700 pl-2">Status: {edu.status}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-zinc-100 mb-8">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map(cert => (
              <div key={cert.name} className="p-5 border border-zinc-800 rounded-xl bg-zinc-900/10 flex flex-col justify-between group">
                <div>
                  <div className="text-xs font-mono text-emerald-500 mb-2">{cert.category}</div>
                  <div className="font-medium text-zinc-200 leading-tight mb-4">{cert.name}</div>
                </div>
                <div className="flex justify-between items-end border-t border-zinc-800/50 pt-3 mt-2">
                   <div className="text-xs text-zinc-500">{cert.issuer}</div>
                   <button className="text-zinc-600 group-hover:text-emerald-400"><ExternalLink size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
