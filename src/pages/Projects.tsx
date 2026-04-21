import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const projects = [
  {
    id: 1,
    title: 'TALOS',
    category: 'AI System / OS',
    description: 'Tactical Algorithmic Logic Operating System — A JARVIS-inspired personal AI assistant built in Python. Features voice input/output, persistent memory via Google Drive, Telegram notifications, and cross-network access via Tailscale.',
    image: 'https://picsum.photos/seed/talos-ai/800/500',
    tags: ['Python', 'SpeechRecognition', 'gTTS', 'Google Drive API'],
    link: '#',
    github: '#',
    isWip: false
  },
  {
    id: 2,
    title: "Co'Du'de",
    category: 'Development Tool',
    description: "Co-Dude / Code-Dude / Code-U-Dude — A VS Code inspired collaborative code editor with TALOS as the built-in AI coding assistant. Designed as a developer playground, for developers, by a developer.",
    image: 'https://picsum.photos/seed/codude/800/500',
    tags: ['React', 'WebSockets', 'Monaco Editor', 'AI Integration'],
    link: '#',
    github: '#',
    isWip: true
  },
  {
    id: 3,
    title: 'ImpLangia',
    category: 'Programming Language',
    description: 'Import-Language-ia — A universal programming language with a single .impla file extension that executes any language just by importing it. Write Python, C++, Java or any language inside one .impla file using a simple import [language] syntax.',
    image: 'https://picsum.photos/seed/implangia/800/500',
    tags: ['Language Design', 'Interpreter', 'Python', 'Cross-Platform'],
    link: '#',
    github: '#',
    isWip: true
  }
];

export default function Projects() {
  return (
    <div className="pt-40 pb-24 px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-24">
            <p className="micro-label text-primary-500 mb-4 tracking-[0.3em]">Selected Engineering</p>
            <h1 className="text-7xl font-bold tracking-tighter text-white">CASE STUDIES.</h1>
          </div>
        </ScrollReveal>

        <div className="space-y-40">
          {projects.map((project, i) => (
            <div key={project.id}>
              <ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center`}>
                  <div className={`lg:col-span-12 xl:col-span-7 relative group ${i % 2 === 0 ? '' : 'xl:order-2'}`}>
                    <div className="theme-card p-4 overflow-hidden border-neutral-700/50">
                      <div className="aspect-video relative overflow-hidden rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 contrast-110">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-transparent mix-blend-overlay" />
                        
                        {project.isWip && (
                          <div className="absolute top-6 right-6 z-20">
                            <span className="px-4 py-1.5 bg-primary-600 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                              WIP
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`lg:col-span-12 xl:col-span-5 ${i % 2 === 0 ? '' : 'xl:order-1'}`}>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <span className="w-8 h-[1px] bg-primary-500" />
                      <span className="micro-label text-white tracking-[0.2em]">{project.category}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white leading-none uppercase">{project.title}</h2>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-10 max-w-md">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-black uppercase tracking-widest text-neutral-500 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-10">
                      <a href={project.link} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white border-b-2 border-primary-500 pb-1 hover:text-primary-500 hover:border-transparent transition-all">
                        Launch Project
                      </a>
                      <a href={project.github} className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                        <Github size={16} /> <span className="text-[10px] font-bold uppercase tracking-widest">Source</span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-40 p-16 theme-card bg-neutral-900/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary-500" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">INQUIRIES?</h2>
            <p className="text-neutral-500 text-sm max-w-lg mx-auto mb-12 uppercase tracking-widest font-medium">
              Architecting tailored solutions for forward-thinking enterprises.
            </p>
            <a href="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-white text-neutral-950 font-black text-xs uppercase tracking-[0.3em] hover:bg-primary-500 hover:text-white rounded-full transition-all shadow-2xl">
              Engage Now <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
