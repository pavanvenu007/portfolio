import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { ReactNode, useEffect } from 'react';
import ScrollProgressBar from './components/ScrollProgressBar';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1500], [0, -200]);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative selection:bg-primary-500 selection:text-white bg-neutral-950 min-h-screen overflow-hidden">
        <ScrollProgressBar />
        
        {/* Background Interactive Parallax Blobs */}
        <motion.div 
          style={{ y: y1 }}
          className="fixed top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="fixed bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full -z-10 pointer-events-none" 
        />

        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
