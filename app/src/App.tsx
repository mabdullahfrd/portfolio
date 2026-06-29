import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import MarqueeStrip from './components/MarqueeStrip';
import ChatWidget from './components/ChatWidget';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}
