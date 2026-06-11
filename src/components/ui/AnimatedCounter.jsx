import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end, label, suffix = '+' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 text-center shadow-xl transition-fast dark:border-slate-700/80 dark:bg-slate-900/80">
      <p className="text-4xl font-semibold text-brand-600 dark:text-brand-300">
        {inView ? <CountUp end={end} duration={2.2} separator="," /> : '0'}{suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
