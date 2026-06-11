import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { crmFeatures } from '../../data/siteData';

const CRMSection = () => (
  <section id="crm" className="py-20 bg-slate-50 dark:bg-slate-950/70">
    <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <div className="gs_reveal rounded-[2rem] border border-slate-200/80 bg-white/90 p-10 shadow-xl dark:border-slate-700/80 dark:bg-slate-900/85">
        <SectionHeader
          eyebrow="CRM solutions"
          title="Keep sales, marketing, and conversion data aligned with powerful pipelines."
          description="Create connected customer experiences using automation, tailored workflows, and high-visibility reporting."
        />
        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          {crmFeatures.map((feature) => (
            <li key={feature} className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 dark:border-slate-700/80 dark:bg-slate-950/75">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <motion.div
        className="gs_reveal rounded-[2rem] border border-brand-300/20 bg-brand-500/5 p-10 shadow-xl dark:border-brand-500/25 dark:bg-brand-500/10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="rounded-[2rem] border border-dashed border-brand-300/30 bg-white/90 p-10 text-slate-950 shadow-lg dark:bg-slate-900/95 dark:text-slate-100">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">CRM insight</p>
          <h3 className="mt-4 text-3xl font-semibold">Customer journey analytics made clear.</h3>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            Capture leads, nurture relationships, and automate follow-ups using modern CRM workflows built inside your stack.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950/80">
              <p className="text-xl font-semibold text-brand-600 dark:text-brand-300">35%</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Lead response improvement</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950/80">
              <p className="text-xl font-semibold text-brand-600 dark:text-brand-300">2x</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Faster deal velocity</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CRMSection;
