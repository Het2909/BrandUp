import { FaArrowUp } from 'react-icons/fa';

const Footer = () => (
  <footer className="border-t border-slate-200/70 bg-white/90 py-8 text-slate-600 dark:border-slate-700/70 dark:bg-slate-950/95 dark:text-slate-400">
    <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm">BrandUp © {new Date().getFullYear()}. Built for high-performance digital agencies.</p>
      </div>
      <a href="#top" className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-300">
        <FaArrowUp /> Back to top
      </a>
    </div>
  </footer>
);

export default Footer;
