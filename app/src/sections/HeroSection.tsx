import { useEffect, useState, useRef } from 'react';
import SectionWatermark from '../components/SectionWatermark';
import SectionReveal from '../components/SectionReveal';
import { Mail, Linkedin, ExternalLink, Download } from 'lucide-react';

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [ref, setRef] = useState<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, end]);

  return (
    <span ref={setRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {

  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-white to-[#F8F9FA] dark:from-[#121212] dark:to-[#1A1A1A] group transition-colors duration-300"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out filter grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-50"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4" type="video/mp4" />
        </video>
        {/* Soft overlay to ensure readability of text */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-[#F8F9FA]/90 dark:from-[#121212]/90 dark:via-[#121212]/85 dark:to-[#1A1A1A]/95 group-hover:from-white/70 group-hover:via-white/65 group-hover:to-[#F8F9FA]/70 dark:group-hover:from-[#121212]/70 dark:group-hover:via-[#121212]/60 dark:group-hover:to-[#1A1A1A]/75 transition-all duration-1000 ease-in-out" />
      </div>
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#E53E3E]/20 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <SectionWatermark text="MUHAMMAD" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="relative">
            <SectionReveal>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-[#666666] dark:text-zinc-400 mb-4">
                HY! I AM
              </p>
            </SectionReveal>

            <SectionReveal delay={1}>
              <h1 className="text-[clamp(48px,7vw,90px)] font-extrabold leading-[0.95] tracking-tight text-[#1A1A1A] dark:text-white mb-6">
                <span className="inline-block animate-slide-right">Muhammad</span>
                <br />
                <span className="inline-block animate-slide-right" style={{ animationDelay: '0.15s' }}>
                  Abdullah Fareed
                </span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={2}>
              <p className="text-base text-[#666666] dark:text-zinc-400 leading-relaxed max-w-[480px] mb-8">
                I turn ideas into growth through AI, content, branding, and execution.
                Building brands, exploring emerging tech, and helping projects scale
                through creativity and strategy.
              </p>
            </SectionReveal>

            {/* Keywords - Glass Pills */}
            <SectionReveal delay={3}>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  'Brand Strategist',
                  'AI Innovator',
                  'Creative Visionary',
                  'Growth Architect',
                  'Content Craftsman',
                  'Entrepreneur',
                  'Tech Explorer',
                ].map((keyword, i) => (
                  <span
                    key={keyword}
                    className="px-4 py-2 text-sm font-medium rounded-xl backdrop-blur-md bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/15 text-[#1A1A1A] dark:text-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/60 dark:hover:bg-white/20 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default animate-fade-badge"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={4}>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#E53E3E] text-white text-sm font-medium px-7 py-3 rounded-full hover:bg-[#C53030] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E53E3E]/25 animate-pulse-soft"
                >
                  Get in touch
                </a>
                <button className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 border border-[#E5E5E5] dark:border-zinc-800 text-[#1A1A1A] dark:text-white text-sm font-medium px-7 py-3 rounded-full hover:border-[#1A1A1A] dark:hover:border-zinc-500 hover:shadow-md transition-all duration-300 hover:scale-105">
                  <Download size={16} />
                  Download CV
                </button>
              </div>
            </SectionReveal>

            <SectionReveal delay={5}>
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#999999]">Find me on:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:mabdullah@example.com"
                    className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] dark:border-zinc-800 rounded-full hover:border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white group transition-all duration-300 hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail size={16} className="text-[#666666] dark:text-zinc-400 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mabdullahfrd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] dark:border-zinc-800 rounded-full hover:border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white group transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} className="text-[#666666] dark:text-zinc-400 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center border border-[#E5E5E5] dark:border-zinc-800 rounded-full hover:border-[#E53E3E] hover:bg-[#E53E3E] hover:text-white group transition-all duration-300 hover:scale-110"
                    aria-label="Website"
                  >
                    <ExternalLink size={16} className="text-[#666666] dark:text-zinc-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column */}
          <div className="relative flex flex-col items-center">
            <SectionReveal delay={2}>
              <div className="relative group">
                {/* Red background circle with pulse */}
                <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[85%] aspect-square bg-[#E53E3E] rounded-full -z-10 animate-pulse-ring" />
                <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[85%] aspect-square bg-[#E53E3E]/30 rounded-full -z-10 animate-pulse-ring delay-500" />

                {/* Portrait */}
                <img
                  src="/images/hero-portrait.png"
                  alt="Muhammad Abdullah Fareed"
                  className="relative z-10 w-full max-w-[380px] lg:max-w-[420px] mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </SectionReveal>

            {/* Stats Row - Glass Style */}
            <SectionReveal delay={3}>
              <div className="mt-6 flex gap-4 w-full max-w-[420px] justify-center">
                {[
                  { value: 25, suffix: '+', label: 'Projects' },
                  { value: 3, suffix: '+', label: 'Years Exp.' },
                  { value: 50, suffix: '+', label: 'Collabs' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 text-center px-4 py-4 rounded-2xl backdrop-blur-md bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/60 dark:hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  >
                    <p className="text-2xl font-bold text-[#1A1A1A] dark:text-white">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs font-medium uppercase tracking-wider text-[#999999] dark:text-zinc-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
