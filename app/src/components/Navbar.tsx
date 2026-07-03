import { useState } from 'react';
import { useScrolled } from '../hooks/useScrolled';
import { Menu, X, Linkedin, Sun, Moon } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Blog', href: '#about' },
  { label: 'Talks', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const isScrolled = useScrolled(10);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#121212]/90 backdrop-blur-xl border-b border-[#F0F0F0] dark:border-zinc-800 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl font-bold tracking-tight text-[#1A1A1A] dark:text-white shrink-0"
        >
          mabdullahfrd<span className="text-[#E53E3E]">.</span>
        </a>

        {/* Desktop Nav Pill */}
        <div className="hidden md:flex items-center bg-[#F3F4F6] dark:bg-zinc-800 rounded-full px-2 py-1.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                link.label === 'Home'
                  ? 'text-[#E53E3E]'
                  : 'text-[#1A1A1A] dark:text-gray-200 hover:text-[#E53E3E] dark:hover:text-[#E53E3E]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[#F3F4F6] dark:hover:bg-zinc-800 text-[#1A1A1B] dark:text-white transition-colors hover:scale-105 active:scale-95"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* LinkedIn (desktop only) */}
          <a
            href="https://linkedin.com/in/mabdullahfrd"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-[#666666] dark:text-zinc-400 hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#1A1A1A] dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-[#121212] border-b border-[#F0F0F0] dark:border-zinc-800 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 text-sm font-medium rounded-lg text-[#1A1A1A] dark:text-gray-200 hover:bg-[#F3F4F6] dark:hover:bg-zinc-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://linkedin.com/in/mabdullahfrd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm text-[#666666] dark:text-zinc-400 hover:bg-[#F3F4F6] dark:hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
