import { Globe, Layout, Database, Smartphone, ArrowRight, Zap, Shield, Search } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  {
    icon: <Globe size={28} />,
    title: 'Local Business Websites',
    description: 'Transform your offline presence into a digital powerhouse. Dedicated websites optimized for local discovery and customer conversion.',
    features: ['Service Showcases', 'Booking Integration', 'Contact Management']
  },
  {
    icon: <Layout size={28} />,
    title: 'UI/UX Design & Dev',
    description: 'Beautiful, intuitive interfaces built with the latest technologies. I focus on performance, accessibility, and user experience.',
    features: ['Responsive Design', 'Accessibility', 'Interactive Prototypes']
  },
  {
    icon: <Database size={28} />,
    title: 'Backend Systems',
    description: 'Robust database management and server-side logic to power your data-heavy applications and internal tools.',
    features: ['API Development', 'Database Design', 'Security Implementation']
  },
  {
    icon: <Smartphone size={28} />,
    title: 'AI Integration',
    description: 'Integrating modern AI capabilities like chatbots and automated workflows into your existing digital products.',
    features: ['Custom Chatbots', 'Data Processing', 'Workflow Automation']
  }
];

export default function Services() {
  return (
    <div className="pt-40 pb-24 px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-24">
            <p className="micro-label text-primary-500 mb-4 tracking-[0.3em]">Operational Capabilities</p>
            <h1 className="text-7xl font-bold tracking-tighter text-neutral-950 dark:text-white">SERVICES.</h1>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 mb-32 overflow-hidden rounded-[2rem]">
          {services.map((service, i) => (
            <div key={service.title} className="bg-white dark:bg-neutral-950 p-12 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors group">
              <ScrollReveal delay={i * 0.1}>
                <div className="flex flex-col h-full">
                  <div className="text-primary-500 mb-8 transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-4 uppercase tracking-tighter">{service.title}</h3>
                  <p className="text-neutral-500 text-sm mb-10 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-auto space-y-3">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 text-[10px] font-bold uppercase tracking-widest">
                        <ArrowRight size={10} className="text-primary-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <ScrollReveal>
          <div className="flex flex-wrap justify-between items-center gap-12 py-20 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
            {[
              { icon: <Zap size={20} />, title: 'VELOCITY', desc: 'Optimized deployment cycles.' },
              { icon: <Shield size={20} />, title: 'INTEGRITY', desc: 'Secure data architectures.' },
              { icon: <Search size={20} />, title: 'VISIBILITY', desc: 'Search engine dominance.' }
            ].map(benefit => (
              <div key={benefit.title} className="flex gap-4">
                <div className="text-primary-500 shrink-0">{benefit.icon}</div>
                <div>
                  <h4 className="text-neutral-950 dark:text-white text-xs font-black tracking-widest uppercase mb-1">{benefit.title}</h4>
                  <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-wider">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-32 p-20 theme-card text-center bg-neutral-50 dark:bg-neutral-900/10 border-dashed transition-colors duration-300">
            <h2 className="text-5xl font-bold tracking-tighter text-neutral-950 dark:text-white mb-8 italic">SCALE YOUR INFRASTRUCTURE</h2>
            <p className="text-neutral-500 text-sm max-w-lg mx-auto mb-12 uppercase tracking-[0.2em] leading-relaxed">
              Tailored digital engineering for the modern marketplace.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <a href="/contact" className="px-10 py-4 bg-neutral-950 dark:bg-primary-600 text-white font-black text-xs uppercase tracking-widest hover:bg-primary-600 dark:hover:bg-primary-500 transition-all flex items-center justify-center gap-3">
                Request Brief <ArrowRight size={16} />
              </a>
              <a href="/projects" className="text-xs font-black uppercase tracking-widest text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center gap-2">
                Browse Archive
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
