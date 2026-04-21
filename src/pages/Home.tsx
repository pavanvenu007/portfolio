import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Globe, Cpu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="pt-20" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-10 overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, scale: titleScale }}
          className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="col-span-12 lg:col-span-8 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary-500 italic">Available for collaboration</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[90px] xl:text-[110px] font-bold leading-[0.85] tracking-tighter text-neutral-950 dark:text-white mb-10 flex flex-col">
              <span>PAVAN</span>
              <span className="text-neutral-500">VENUGOPAL</span>
            </h1>
            
            <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-lg max-w-[450px] mb-12 leading-relaxed">
              BCA & AI/ML Student specializing in building high-performance digital experiences and intelligent systems.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {['Python', 'JavaScript', 'C++', 'Databases'].map(skill => (
                <span key={skill} className="px-4 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[10px] uppercase font-bold tracking-widest text-neutral-600 dark:text-neutral-300 rounded-full">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <Link 
                to="/projects" 
                className="px-10 py-4 bg-primary-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-primary-500 rounded-full transition-all flex items-center gap-3"
              >
                View Work
                <ArrowRight size={16} />
              </Link>
              <Link 
                to="/about" 
                className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary-500/0 hover:border-primary-500 transition-all py-1"
              >
                About Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="col-span-12 lg:col-span-4 relative hidden lg:block"
          >
            <div className="p-8 theme-card relative overflow-hidden group h-[500px] flex flex-col justify-end">
              <div className="absolute inset-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700">
                <img 
                  src="https://picsum.photos/seed/pavan-bold/800/800" 
                  alt="Pavan Venugopal" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-950 via-transparent to-transparent" />
              
              <div className="relative z-10">
                <p className="micro-label text-primary-500 dark:text-primary-400 mb-2 italic">Featured Focus</p>
                <h3 className="text-4xl font-bold mb-4 text-neutral-950 dark:text-white">TALOS AI</h3>
                <p className="text-neutral-400 text-xs max-w-xs leading-relaxed mb-6">
                  An advanced personal assistant built with Python and Gemini API integration for automated workflow management.
                </p>
                <Link to="/projects" className="text-[10px] font-bold uppercase tracking-widest underline decoration-primary-500 underline-offset-4">
                  View Project
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Competencies Section */}
      <section className="py-32 px-10 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Code size={20} />, name: 'Web Dev', desc: 'Custom e-commerce platforms for local businesses.' },
              { icon: <Cpu size={20} />, name: 'AI Systems', desc: 'TALOS assistant and intelligent automation.' },
              { icon: <Database size={20} />, name: 'Architecture', desc: 'Optimized relational database designs.' },
              { icon: <Globe size={20} />, name: 'Systems', desc: 'High-performance C++ backend structures.' }
            ].map((skill, i) => (
              <div key={skill.name}>
                <ScrollReveal delay={i * 0.1}>
                  <div className="group h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-primary-500">{skill.icon}</div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-950 dark:text-white">{skill.name}</h3>
                    </div>
                    <p className="text-neutral-500 text-xs leading-relaxed mb-6">
                      {skill.desc}
                    </p>
                    <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-0 bg-primary-500 group-hover:w-full transition-all duration-700" />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
