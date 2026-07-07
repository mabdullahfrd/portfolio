import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import MarqueeStrip from './components/MarqueeStrip';
import ChatWidget from './components/ChatWidget';
import BackToTop from './components/BackToTop';
import HeroSection from './sections/HeroSection';
import FeaturedWorkSection from './sections/FeaturedWorkSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ArticlesSection from './sections/ArticlesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';

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
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-white dark:bg-[#0D0D0D] transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* Marquee strip between hero and projects */}
        <MarqueeStrip />

        {/* 2. Featured Work — immediately visible after hero */}
        <FeaturedWorkSection />

        {/* 3. About */}
        <AboutSection />

        {/* 4. Experience + Services */}
        <ExperienceSection />

        {/* 5. Articles & Insights */}
        <ArticlesSection />

        {/* 6. Testimonials */}
        <TestimonialsSection />

        {/* 7. Contact */}
        <ContactSection />
      </main>

      <Footer />

      {/* Floating widgets */}
      <ChatWidget />
      <BackToTop />

      <SpeedInsights />
    </div>
  );
}
