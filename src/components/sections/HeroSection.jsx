import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => (
  <section id="top" className="hero-fade overflow-hidden py-20 sm:py-28" style={{ width: '100%' }}>
    <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
          Digital agency excellence
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
          Build modern web products that scale, convert, and feel premium.
        </h1>
        <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          Brandup creates polished digital experiences with React, motion, CRM automation and a design-first development process for ambitious teams.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Start your project <FaArrowRight className="ml-3" />
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            View work
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-glow dark:border-slate-700/80 dark:bg-slate-900/85"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="absolute -right-6 top-10 h-24 w-24 rounded-full bg-brand-400/15 blur-2xl" />
        <div className="space-y-5">
          <div className="rounded-3xl bg-slate-950/95 p-6 text-white shadow-xl dark:bg-slate-800/95">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Agency growth system</p>
            <h2 className="mt-4 text-2xl font-semibold">Design, build, and optimize every digital touchpoint.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 dark:border-slate-700/80 dark:bg-slate-950/70">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Performance</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Fast build, fast loading, fast conversions.</p>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 dark:border-slate-700/80 dark:bg-slate-950/70">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Refinement</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Iterative launches focused on measurable impact.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
