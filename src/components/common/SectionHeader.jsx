const SectionHeader = ({ eyebrow, title, description }) => (
  <div className="mb-10 max-w-2xl">
    {eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.35em] text-brand-600 dark:text-brand-300">{eyebrow}</p>}
    <h2 className="text-3xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>}
  </div>
);

export default SectionHeader;
