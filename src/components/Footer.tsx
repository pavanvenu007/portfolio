import { Github, Instagram, Send, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 py-20 px-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-4">
          <div className="text-2xl font-black tracking-tighter text-neutral-950 dark:text-white mb-6">
            Pavan Venugopal<span className="text-primary-500">.</span>
          </div>
          <p className="text-neutral-500 text-xs max-w-xs leading-relaxed">
            BCA & AI/ML Student focused on building clean, functional, and modern digital experiences with intelligent automation.
          </p>
        </div>

        <div className="md:col-span-4 flex flex-col gap-8 md:items-center">
          <div className="flex gap-8">
            <a href="https://github.com/pavanvenu007" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors" title="GitHub Personal">
              <Github size={18} />
            </a>
            <a href="https://github.com/pavanvenugopal007" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors" title="GitHub Projects">
              <Github size={18} />
            </a>
            <a href="https://instagram.com/p_n_v.co" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/919972914067" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors">
              <MessageCircle size={18} />
            </a>
            <a href="https://t.me/pavanvenu007" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors">
              <Send size={18} />
            </a>
            <a href="mailto:pavanvenu007@gmail.com" className="text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col md:items-end gap-6 text-neutral-600 dark:text-neutral-600 text-[10px] font-bold uppercase tracking-widest">
          <div className="flex gap-8 text-left">
            <div>
              <p className="mb-1 text-neutral-400 dark:text-neutral-800">Email</p>
              <p className="text-neutral-950 dark:text-neutral-400">pavanvenu007@gmail.com</p>
            </div>
            <div>
              <p className="mb-1 text-neutral-400 dark:text-neutral-800">WhatsApp</p>
              <p className="text-neutral-950 dark:text-neutral-400">+91 99729 14067</p>
            </div>
            <div>
              <p className="mb-1 text-neutral-400 dark:text-neutral-800">Location</p>
              <p className="text-neutral-950 dark:text-neutral-400">Karnataka, India</p>
            </div>
          </div>
          <p className="opacity-50 text-neutral-600 dark:text-neutral-600 transition-none">&copy; {new Date().getFullYear()} Pavan Venugopal</p>
        </div>
      </div>
    </footer>
  );
}
