import { Mail, Phone, MapPin, Send, MessageSquare, Github, Instagram, MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  return (
    <div className="pt-40 pb-24 px-10">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-24">
            <p className="micro-label text-primary-500 mb-4 tracking-[0.3em]">Direct Communication</p>
            <h1 className="text-7xl font-bold tracking-tighter text-neutral-950 dark:text-white uppercase">CONTACT.</h1>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="p-12 theme-card bg-neutral-100/50 dark:bg-neutral-900/50">
                <h2 className="text-2xl font-bold tracking-tighter text-neutral-950 dark:text-white mb-12 uppercase italic">Registry</h2>
                <div className="space-y-12">
                  <div className="flex gap-8 group">
                    <div className="w-12 h-12 theme-border rounded-2xl flex items-center justify-center text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="micro-label mb-2">Message Channel</p>
                      <a href="mailto:pavanvenu007@gmail.com" className="text-neutral-900 dark:text-white text-lg font-bold tracking-tight hover:text-primary-500 transition-colors lowercase">
                        pavanvenu007@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-12 h-12 theme-border rounded-2xl flex items-center justify-center text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="micro-label mb-2">Voice Comms / WhatsApp</p>
                      <a href="https://wa.me/919972914067" target="_blank" rel="noopener noreferrer" className="text-neutral-900 dark:text-white text-lg font-bold tracking-tight hover:text-primary-500 transition-colors">
                        +91 99729 14067
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-12 h-12 theme-border rounded-2xl flex items-center justify-center text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-all">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="micro-label mb-2">Global Index</p>
                      <p className="text-neutral-900 dark:text-white text-lg font-bold tracking-tight">
                        Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800">
                  <p className="micro-label mb-6">Digital Footprint</p>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <a 
                        href="https://github.com/pavanvenu007" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 theme-border rounded-2xl flex items-center justify-center text-neutral-500 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-950 dark:hover:border-white transition-all group"
                      >
                        <Github size={20} />
                      </a>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-600">Personal</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <a 
                        href="https://github.com/pavanvenugopal007" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 theme-border rounded-2xl flex items-center justify-center text-neutral-500 hover:text-white hover:border-white transition-all group"
                      >
                        <Github size={20} />
                      </a>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-600">Projects</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <a 
                        href="https://instagram.com/p_n_v.co" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 theme-border rounded-2xl flex items-center justify-center text-neutral-500 hover:text-white hover:border-white transition-all group"
                      >
                        <Instagram size={20} />
                      </a>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-600">Instagram</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <a 
                        href="https://wa.me/919972914067" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 theme-border rounded-2xl flex items-center justify-center text-neutral-500 hover:text-white hover:border-white transition-all group"
                      >
                        <MessageCircle size={20} />
                      </a>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-600">WhatsApp</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <a 
                        href="https://t.me/pavanvenu007" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 theme-border rounded-2xl flex items-center justify-center text-neutral-500 hover:text-white hover:border-white transition-all group"
                      >
                        <Send size={20} />
                      </a>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-600">Telegram</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="p-12 theme-card bg-neutral-100/50 dark:bg-neutral-900/50">
                <h2 className="text-2xl font-bold tracking-tighter text-neutral-950 dark:text-white mb-10 uppercase italic">Transmission</h2>
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="micro-label px-1">Identifier</label>
                      <input 
                        type="text" 
                        placeholder="NAME"
                        className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl py-5 px-6 text-neutral-950 dark:text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="micro-label px-1">Return Path</label>
                      <input 
                        type="email" 
                        placeholder="EMAIL@SERVER.COM"
                        className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl py-5 px-6 text-neutral-950 dark:text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-primary-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="micro-label px-1">Classification</label>
                    <input 
                      type="text" 
                      placeholder="PROJECT SCOPE"
                      className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl py-5 px-6 text-neutral-950 dark:text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="micro-label px-1">Payload</label>
                    <textarea 
                      rows={6}
                      placeholder="INPUT DATA..."
                      className="w-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-3xl py-5 px-6 text-neutral-950 dark:text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-6 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-black text-xs uppercase tracking-[0.4em] hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white dark:hover:text-white rounded-full transition-all flex items-center justify-center gap-4 group"
                  >
                    Send Signal
                    <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
