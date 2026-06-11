import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import CRM from './pages/CRM';
import About from './pages/About';
import Contact from './pages/Contact';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 }
};

const PageWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical'
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="flex-1"
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_28%),#f8fafc] dark:bg-[#060a1f] transition-fast">
          <Navbar />
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/crm" element={<CRM />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageWrapper>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
