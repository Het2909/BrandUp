import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';
import logo2 from '../../assets/lightthemelogo.png';
import logo1 from '../../assets/blackthemelogo.png';


const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'CRM', to: '/crm' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-40 mx-auto w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/95">
      <div className="container flex items-center justify-between gap-4 py-5">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
          {/* <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-glow">B</span> */}
          {theme === 'light' && (
            <img src={logo1} alt="Brandup Logo" className="h-11 w-auto" />
          )}
          {theme === 'dark' && (
            <img src={logo2} alt="Brandup Logo" className="h-11 w-auto" />
          )}
          {/* Brandup */}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-fast ${isActive ? 'text-brand-600 dark:text-brand-300' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-fast hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200/80 bg-white/95 py-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/95 md:hidden">
          <div className="container flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-medium transition-fast ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-slate-800 dark:text-brand-300' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};


export default Navbar;
