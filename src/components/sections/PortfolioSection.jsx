import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { portfolioItems } from '../../data/siteData';

const PortfolioSection = () => (
  <section id="portfolio" className="py-20">
    <div className="container">
      <SectionHeader
        eyebrow="Selected work"
        title="A portfolio of clean digital experiences built for engagement and conversion."
        description="Every project blends modern UI, motion-driven storytelling, and measurable business outcomes."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {portfolioItems.map((project) => (
          <motion.article
            key={project.title}
            className="gs_reveal rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-xl transition-all hover:-translate-y-1 hover:border-brand-300/40 hover:shadow-glow dark:border-slate-700/80 dark:bg-slate-900/85"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="mb-5 flex items-center justify-between text-sm font-semibold tracking-[0.18em] uppercase text-brand-600 dark:text-brand-300">
              <span>{project.category}</span>
              <span>2026</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.details}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
