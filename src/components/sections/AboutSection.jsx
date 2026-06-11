import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import AnimatedCounter from '../ui/AnimatedCounter';
import { agencyStats } from '../../data/siteData';

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container">
      <SectionHeader
        eyebrow="About Brandup"
        title="A team focused on craft, speed, and measurable digital growth."
        description="We combine human-centered design with performance engineering to deliver modern websites, web apps, and CRM systems that scale."
      />
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          className="space-y-6 rounded-[2rem] border border-slate-200/80 bg-white/90 p-10 shadow-xl dark:border-slate-700/80 dark:bg-slate-900/85"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">Our approach</p>
          <h3 className="text-3xl font-semibold text-slate-950 dark:text-white">Design systems backed by strong project operations.</h3>
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            From discovery to launch, we create digital products with clear roadmaps, responsive layouts, and clean code. Our work is optimized for user interaction, fast loading, and search engines.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950/80">
              <p className="font-semibold text-slate-950 dark:text-white">Responsive design</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Perfectly tailored to every screen size.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950/80">
              <p className="font-semibold text-slate-950 dark:text-white">SEO-ready structure</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Content and markup optimized for discoverability.</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {agencyStats.map((stat) => (
            <AnimatedCounter key={stat.label} end={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
