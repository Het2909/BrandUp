import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { agencyStats } from '../data/siteData';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import useGsapScroll from '../hooks/useGsapScroll';

const About = () => {
  useGsapScroll();

  return (
    <main className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title="We design digital products with a balance of craft and performance."
          description="Brandup is a small team of designers and engineers who build thoughtful digital experiences for modern agencies, SaaS brands, and startups."
        />
        <div className=" lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            className="gs_reveal rounded-[2rem] border border-slate-200/80 bg-white/90 p-10 shadow-xl dark:border-slate-700/80 dark:bg-slate-900/85"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">Craft meets performance</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">A collaborative process built for fast iterations and polished launches.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              We use clear discovery, strong design foundations, and scalable front-end architecture so every launch feels effortless and looks exceptional.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950/80">
                <p className="font-semibold text-slate-950 dark:text-white">Mobile-first design</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Responsive systems that adapt to every screen.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950/80">
                <p className="font-semibold text-slate-950 dark:text-white">Collaborative workflows</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Design reviews, sprint planning, and launch support.</p>
              </div>
            </div>
            
          </motion.div>
          </div>
          <div className="grid gap-7 sm:grid-cols-4" style={{ marginTop: '3rem' }}>
            {agencyStats.map((stat) => (
              <AnimatedCounter key={stat.label} end={stat.value} label={stat.label} />
            ))}
          </div>
        
      </div>
    </main>
  );
};

export default About;
