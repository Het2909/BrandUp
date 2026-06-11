import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { crmFeatures } from '../data/siteData';
import useGsapScroll from '../hooks/useGsapScroll';

const CRM = () => {
  useGsapScroll();

  return (
    <main className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="CRM"
          title="CRM products that support growth teams with automation and reporting."
          description="Deliver the right lead data to sales and marketing with intelligent workflows, dashboards, and integrations."
        />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            className="gs_reveal rounded-[2rem] border border-slate-200/80 bg-white/90 p-10 shadow-xl dark:border-slate-700/80 dark:bg-slate-900/85"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-brand-600">Strategy</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">Keep every pipeline aligned with intelligent systems.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
              We design CRM integrations that support lead capture, nurture sequences, and stakeholder reporting without adding complexity.
            </p>
          </motion.div>
          <div className="space-y-4">
            {crmFeatures.map((feature) => (
              <motion.div
                key={feature}
                className="gs_reveal rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm dark:border-slate-700/80 dark:bg-slate-950/85"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <p className="text-sm text-slate-600 dark:text-slate-300">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CRM;
