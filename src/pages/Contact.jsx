import SectionHeader from '../components/common/SectionHeader';
import useGsapScroll from '../hooks/useGsapScroll';
import { useState } from 'react';

const Contact = () => {
  useGsapScroll();


  const [formData, setFormData] = useState({
  name: '',
  phone: '',
  email: '',
  service: 'Website redesign',
  message: '',
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    await fetch(
      'https://script.google.com/macros/s/AKfycbxAy8BpeV-1bNldtO_DA03Sm61NQuUzVIYgDVJxuIZCYYPkebwaTzCkLc3qHSii_9Op/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      }
    );

    alert('Thank you! We will contact you shortly.');

    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Website redesign',
      message: '',
    });
  } catch (error) {
    console.error(error);
    alert('Failed to send inquiry.');
  } finally {
    setLoading(false);
  }
};




  return (
    <main className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Send your project brief and we’ll respond with a plan for launch."
          description="Whether you need a polished website, CRM integration, or a full digital refresh, we’ll design a solution rooted in strategy and performance."
        />
        <div className="gs_reveal rounded-[2rem] border border-slate-200/80 bg-white/90 p-10 shadow-xl dark:border-slate-700/80 dark:bg-slate-900/85">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <label className="block text-sm font-medium text-slate-950 dark:text-slate-100">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition-fast focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-brand-300 dark:focus:ring-brand-300/20"
                placeholder="Jordan Lee"
              />
            </label>
            <label className="block text-sm font-medium text-slate-950 dark:text-slate-100">
              Phone number
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition-fast focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-brand-300 dark:focus:ring-brand-300/20"
                placeholder="+91 9876543210"
              />
            </label>
            <label className="block text-sm font-medium text-slate-950 dark:text-slate-100">
              Business email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition-fast focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-brand-300 dark:focus:ring-brand-300/20"
                placeholder="business@company.com"
              />
            </label>
            <label className="block text-sm font-medium text-slate-950 dark:text-slate-100">
              Project type
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition-fast focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-brand-300 dark:focus:ring-brand-300/20"
              >
                <option>Website redesign</option>
                <option>New product launch</option>
                <option>CRM automation</option>
                <option>Custom project</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-slate-950 dark:text-slate-100">
              Brief
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition-fast focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-brand-300 dark:focus:ring-brand-300/20"
                placeholder="What are your goals and timeline?"
              />
            </label>
            {/* <button type="button" className="inline-flex w-full items-center justify-center rounded-3xl bg-brand-600 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-brand-700">
              Send inquiry
            </button> */}

            <button
  type="submit"
  disabled={loading}
  className="inline-flex w-full items-center justify-center rounded-3xl bg-brand-600 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
>
  {loading ? 'Sending...' : 'Send Inquiry'}
</button>

          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
