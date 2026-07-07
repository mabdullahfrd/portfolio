import { useState, useEffect } from 'react';
import { useScrolled } from '../hooks/useScrolled';
import { Menu, X, Linkedin, Sun, Moon } from 'lucide-react';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Articles',   href: '#articles' },
  { label: 'Contact',    href: '#contact' },
];

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const isScrolled = useScrolled(10);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* ── Active-section tracking via IntersectionObserver ── */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35, rootMargin: '-64px 0px 0px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0D0D0D]/90 backdrop-blur-xl border-b border-[#F0F0F0] dark:border-zinc-800 shadow-[0_1px_8px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 flex items-center justify-between gap-4">

        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl font-bold tracking-tight text-[#1A1A1A] dark:text-white shrink-0"
        >
          mabdullahfrd<span className="text-[#E53E3E]">.</span>
        </a>

        {/* Desktop pill nav */}
        <div className="hidden lg:flex items-center bg-[#F3F4F6] dark:bg-zinc-800/80 rounded-full px-2 py-1.5 gap-0.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white dark:bg-zinc-700 text-[#E53E3E] shadow-sm'
                    : 'text-[#1A1A1A] dark:text-gray-300 hover:text-[#E53E3E] dark:hover:text-[#E53E3E]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[#F3F4F6] dark:hover:bg-zinc-800 text-[#1A1A1A] dark:text-white transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* LinkedIn — desktop */}
          <a
            href="https://www.linkedin.com/in/mabdullahfrd"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-[#666666] dark:text-zinc-400 hover:text-[#E53E3E] dark:hover:text-[#E53E3E] transition-colors px-3 py-2 rounded-full hover:bg-[#F3F4F6] dark:hover:bg-zinc-800"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>

          {/* Hamburger — mobile */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-[#F3F4F6] dark:hover:bg-zinc-800 text-[#1A1A1A] dark:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden absolute top-16 left-0 right-0 bg-white dark:bg-[#0D0D0D] border-b border-[#F0F0F0] dark:border-zinc-800 shadow-lg overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  isActive
                    ? 'bg-[#FFF5F5] dark:bg-zinc-800 text-[#E53E3E]'
                    : 'text-[#1A1A1A] dark:text-gray-200 hover:bg-[#F3F4F6] dark:hover:bg-zinc-800'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="https://www.linkedin.com/in/mabdullahfrd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-sm text-[#666666] dark:text-zinc-400 hover:bg-[#F3F4F6] dark:hover:bg-zinc-800 rounded-xl transition-colors"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
