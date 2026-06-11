import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { services } from '../data/siteData';
import useGsapScroll from '../hooks/useGsapScroll';

const Services = () => {
  useGsapScroll();

  return (
    <main className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Digital product services for modern brands and revenue teams."
          description="From discovery to implementation, each engagement is built to scale with clear milestones and measurable results."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((item) => (
            <motion.article
              key={item.title}
              className="gs_reveal rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-xl transition-all hover:-translate-y-1 hover:border-brand-300/40 hover:shadow-glow dark:border-slate-700/80 dark:bg-slate-900/85"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-50 text-2xl dark:bg-brand-500/15">
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
