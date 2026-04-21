import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl py-4 border-b border-neutral-200 dark:border-neutral-800' : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-neutral-950 dark:text-white">
          PV<span className="text-primary-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-black dark:hover:text-white ${
                location.pathname === link.path ? 'text-neutral-950 dark:text-white' : 'text-neutral-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Link 
            to="/contact" 
            className="px-6 py-2.5 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-[10px] font-black uppercase tracking-widest hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white rounded-full transition-all"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle Icons & Switch */}
        <div className="md:hidden flex items-center gap-6">
          <ThemeToggle />
          <button 
            className="text-neutral-950 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800"
          >
            <div className="flex flex-col p-10 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                    location.pathname === link.path ? 'text-primary-500' : 'text-neutral-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
