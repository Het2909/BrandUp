import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { services } from '../../data/siteData';

const ServicesSection = () => (
  <section id="services" className="py-20">
    <div className="container">
      <SectionHeader
        eyebrow="Our services"
        title="Full-service design and engineering for ambitious digital brands."
        description="We help teams build better products through modern web development, meaningful brand systems, and sales workflows that actually move the needle."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <motion.article
            key={service.title}
            className="gs_reveal rounded-[2rem] border border-slate-200/75 bg-white/90 p-8 shadow-xl transition-all hover:-translate-y-1 hover:border-brand-300/40 hover:shadow-glow dark:border-slate-700/80 dark:bg-slate-900/85"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-50 text-2xl dark:bg-brand-500/15">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
