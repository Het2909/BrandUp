import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { portfolioItems } from '../data/siteData';
import useGsapScroll from '../hooks/useGsapScroll';

const Portfolio = () => {
  useGsapScroll();

  return (
    <main className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured case studies built to inspire confidence and clarity."
          description="Explore custom websites, SaaS dashboards, and brand systems that help teams capture attention and launch successfully."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {portfolioItems.map((project) => (
            <motion.article
              key={project.title}
              className="gs_reveal rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-xl transition-all hover:-translate-y-1 hover:border-brand-300/40 hover:shadow-glow dark:border-slate-700/80 dark:bg-slate-900/85"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="mb-4 flex items-center justify-between text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
                <span>{project.category}</span>
                <span>2026</span>
              </div>
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.details}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
