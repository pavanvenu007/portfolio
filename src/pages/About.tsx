import { CheckCircle2, Calendar, MapPin, Briefcase } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <div className="pt-40 pb-24 px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start mb-32">
            <div className="md:col-span-7">
              <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] tracking-tighter text-neutral-950 dark:text-white mb-10">
                DRIVEN BY<br/><span className="text-neutral-500">CURIOSITY.</span>
              </h1>
              <div className="space-y-6 text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl">
                <p>
                  I'm <span className="text-neutral-950 dark:text-white font-bold tracking-tight">Pavan Venugopal</span>, a BCA & AI/ML student merging computer science fundamentals with modern web architecture. My focus lies at the intersection of machine learning, high-performance code, and intelligent system design.
                </p>
                <p>
                  I believe software should be as resilient as it is intuitive. From local business transformations to autonomous AI agents, I build with a focus on structural integrity and future-proof logic.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                  <p className="micro-label mb-2">Location</p>
                  <p className="text-sm font-medium">Karnataka, India</p>
                </div>
                <div>
                  <p className="micro-label mb-2">Availability</p>
                  <p className="text-sm font-medium">Q3 2024</p>
                </div>
                <div>
                  <p className="micro-label mb-2">Discipline</p>
                  <p className="text-sm font-medium">BCA, AI/ML & Web Dev</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-5 relative">
              <div className="theme-card p-4">
                <div className="aspect-[4/5] rounded-xl overflow-hidden grayscale contrast-125">
                  <img 
                    src="https://picsum.photos/seed/pavan-about/800/1000" 
                    alt="Pavan workspace" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-primary-600 text-white rounded-xl shadow-2xl">
                <p className="text-[10px] uppercase font-black tracking-[0.2em]">Current Goal</p>
                <p className="text-sm font-bold mt-1 tracking-tight italic">AI Integration Specialist</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ScrollReveal direction="left">
            <h2 className="text-3xl font-bold tracking-tighter mb-10 border-b border-neutral-200 dark:border-neutral-800 pb-4 text-neutral-950 dark:text-white">CORE EXPERTISE</h2>
            <div className="space-y-4">
              {[
                { skill: 'Systems Design', tools: 'Python, C++, System Architecture' },
                { skill: 'Modern Web', tools: 'React, Tailwind, Node.js' },
                { skill: 'Information Ops', tools: 'SQL, NoSQL, Data Modeling' },
                { skill: 'Intelligence', tools: 'Large Language Models, AI Agents' }
              ].map((item) => (
                <div key={item.skill} className="p-6 theme-card group hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-all">
                  <h3 className="text-neutral-950 dark:text-white font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {item.skill}
                  </h3>
                  <p className="text-neutral-500 text-xs">{item.tools}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <h2 className="text-3xl font-bold tracking-tighter mb-10 border-b border-neutral-200 dark:border-neutral-800 pb-4 text-neutral-950 dark:text-white">MILESTONES</h2>
            <div className="space-y-10">
              {[
                { 
                  year: '24', 
                  title: 'AI RESEARCHER', 
                  desc: 'Development of TALOS, a Gemini-integrated personal assistant architecture.' 
                },
                { 
                  year: '23', 
                  title: 'FULL-STACK FREELANCE', 
                  desc: 'Building responsive e-commerce and local business solutions from the ground up.' 
                },
                { 
                  year: '22', 
                  title: 'ACADEMIC START', 
                  desc: 'Commenced BCA core studies focusing on algorithms and computational theory.' 
                }
              ].map((milestone) => (
                <div key={milestone.title} className="flex gap-8 group text-left">
                  <div className="text-2xl font-black text-neutral-200 dark:text-neutral-800 group-hover:text-primary-500 transition-colors tracking-tighter self-start italic">{milestone.year}</div>
                  <div>
                    <h3 className="text-neutral-950 dark:text-white font-bold text-sm uppercase tracking-widest mb-2">{milestone.title}</h3>
                    <p className="text-neutral-500 text-xs leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
